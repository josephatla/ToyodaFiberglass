import puppeteer from 'puppeteer';
import express from 'express';
import fs from 'fs';
import path from 'path';

// Re-use data from sitemap generation logic
const STATIC_ROUTES = [
  '/',
  '/tentang-kami',
  '/faq',
  '/blog',
  '/products',
  '/gallery',
  '/contact'
];

const PRODUCT_IDS = [
  'ipal-medis',
  'ipal-domestik',
  'chemical-tank',
  'paneltank',
  'septictank',
  'storagetank',
  'biostp-mini',
  'talang-air',
  'toilet-portable',
  'atap',
  'grp-tank',
  'ipal-rumah-sakit',
  'ipal-komunal',
  'ipal-laundry',
  'ipal-restoran',
  'ipal-tambang',
  'ipal-puskesmas',
  'ipal-hotel'
];

const NEWS_IDS = [
  'vendor-paneltank',
  'keunggulan-paneltank-fiberglass',
  'vendor-fiberglass',
  'pentingnya-ipal-dalam-lingkungan',
  'kontraktor-ipal',
  'peran-fiberglass-dalam-sistem-ipal'
];

const allRoutes = [
  ...STATIC_ROUTES,
  ...PRODUCT_IDS.map(id => `/products/${id}`),
  ...NEWS_IDS.map(id => `/blog/${id}`)
];

const PORT = 3005;
const DIST_DIR = path.join(process.cwd(), 'dist');

async function runPrerender() {
  console.log('Starting prerender server...');
  const app = express();
  
  // Save original SPA index.html to serve as fallback to avoid conflicts when overwriting
  const indexHtmlPath = path.join(DIST_DIR, 'index.html');
  const spaHtmlPath = path.join(DIST_DIR, 'spa.html');
  fs.copyFileSync(indexHtmlPath, spaHtmlPath);
  
  // Serve static files from dist
  app.use(express.static(DIST_DIR));
  
  // Fallback to spa.html for SPA routing
  app.use((req, res) => {
    res.sendFile(spaHtmlPath);
  });

  const server = app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    
    console.log('Launching browser...');
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    for (const route of [...allRoutes, '/404-not-found-page']) {
      console.log(`Prerendering ${route}...`);
      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0' });
      
      let html = await page.content();
      
      // ── Sanitise prerendered HTML ──────────────────────────
      // 1. Remove duplicate <title> — keep only the FIRST (Helmet's)
      //    Helmet injects its <title> BEFORE the static one, so we keep the first match.
      let titleCount = 0;
      html = html.replace(/<title>[\s\S]*?<\/title>/gi, (match) => {
        titleCount++;
        return titleCount === 1 ? match : ''; // keep first, drop rest
      });

      // 2. Remove Kaspersky antivirus script injection (uses HTTP, not HTTPS)
      html = html.replace(/<script[^>]*kaspersky-labs\.com[^>]*>[\s\S]*?<\/script>/gi, '');

      // 3. Remove baked-in Google Ads / DoubleClick tracking pixels
      //    These are session-specific and must NOT be in static HTML
      html = html.replace(/<script[^>]*doubleclick\.net[^>]*>[\s\S]*?<\/script>/gi, '');
      html = html.replace(/<script[^>]*googleads\.g\.doubleclick\.net[^>]*>[\s\S]*?<\/script>/gi, '');

      // 4. Remove duplicate GTM noscript iframes — keep only the FIRST
      let noscriptGtmCount = 0;
      html = html.replace(/<noscript>\s*<iframe[^>]*googletagmanager\.com[^>]*>[\s\S]*?<\/iframe>\s*<\/noscript>/gi, (match) => {
        noscriptGtmCount++;
        return noscriptGtmCount === 1 ? match : '';
      });
      
      // 5. Remove duplicate GTM <script> loader — keep only the FIRST inline one
      let gtmScriptCount = 0;
      html = html.replace(/<script[^>]*>\s*\(function\(w,d,s,l,i\)\{w\[l\][\s\S]*?GTM-TWJ2XRNR[\s\S]*?<\/script>/gi, (match) => {
        gtmScriptCount++;
        return gtmScriptCount === 1 ? match : '';
      });

      // 6. Remove duplicate async GTM loader tags
      let gtmAsyncCount = 0;
      html = html.replace(/<script[^>]*async[^>]*src="https:\/\/www\.googletagmanager\.com\/gtm\.js\?id=GTM-TWJ2XRNR[^"]*"[^>]*><\/script>/gi, (match) => {
        gtmAsyncCount++;
        return gtmAsyncCount === 1 ? match : '';
      });
      // ── End sanitise ──────────────────────────────────────
      
      let filePath;
      if (route === '/') {
        filePath = path.join(DIST_DIR, 'index.html');
      } else if (route === '/404-not-found-page') {
        filePath = path.join(DIST_DIR, '404.html');
      } else {
        filePath = path.join(DIST_DIR, route);
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath, { recursive: true });
        }
        filePath = path.join(filePath, 'index.html');
      }
      
      fs.writeFileSync(filePath, html);
    }
    
    console.log('Closing browser...');
    await browser.close();
    
    console.log('Shutting down server...');
    server.close();
    console.log('Prerender complete!');
  });
}

runPrerender().catch(err => {
  console.error(err);
  process.exit(1);
});
