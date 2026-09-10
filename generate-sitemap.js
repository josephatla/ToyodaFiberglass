import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://ipaltoyoda.com';

const STATIC_ROUTES = [
  '/',
  '/about',
  '/news',
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
  'grp-tank'
];

const NEWS_IDS = ['1', '2', '3', '4', '5', '6'];

function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Add static routes
  for (const route of STATIC_ROUTES) {
    xml += `  <url>\n`;
    xml += `    <loc>${DOMAIN}${route}</loc>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>${route === '/' ? '1.0' : '0.8'}</priority>\n`;
    xml += `  </url>\n`;
  }

  // Add product routes
  for (const id of PRODUCT_IDS) {
    xml += `  <url>\n`;
    xml += `    <loc>${DOMAIN}/products/${id}</loc>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += `  </url>\n`;
  }

  // Add news routes
  for (const id of NEWS_IDS) {
    xml += `  <url>\n`;
    xml += `    <loc>${DOMAIN}/news/${id}</loc>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.6</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>`;

  const outputPath = path.join(__dirname, 'public', 'sitemap.xml');
  fs.writeFileSync(outputPath, xml);
  console.log(`Sitemap generated successfully at ${outputPath}`);
}

generateSitemap();
