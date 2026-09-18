import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MAIN_PRODUCTS, OTHER_PRODUCTS, JENIS_IPAL, CONTACT_INFO } from '@/src/constants';
import Container from '@/src/components/Container';
import SEO from '@/src/components/SEO';
import OptimizedImage from '@/src/components/OptimizedImage';

// Objek style khusus untuk mengatasi layar berkedip/lompat di akhir animasi pada Mobile/Safari
const antiFlicker = {
  WebkitBackfaceVisibility: "hidden",
  backfaceVisibility: "hidden",
  WebkitPerspective: 1000,
  perspective: 1000,
  WebkitTransform: "translate3d(0,0,0)",
  transform: "translate3d(0,0,0)",
} as const;

export default function Products() {
  const renderProductCard = (product: any, idx: number) => (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: (idx % 3) * 0.05, ease: "easeOut" }}
      style={antiFlicker}
    >
      <div 
        className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all relative z-0"
        style={{ ...antiFlicker, WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
      >
        <Link to={`/products/${product.id}`} className="absolute inset-0 z-0" aria-label={`Detail produk ${product.title}`} />
        <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative z-10 pointer-events-none">
          <OptimizedImage 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 z-0" 
            style={antiFlicker}
            src={product.image} 
            alt={product.title}
            width={1200}
            height={900}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow relative z-10">
          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{product.title}</h3>
          <p className="text-sm text-slate-500 mb-6 line-clamp-3 leading-relaxed whitespace-pre-line" dangerouslySetInnerHTML={{ __html: product.description }}></p>
          
          <div className="mt-auto flex flex-row gap-3 relative z-20">
            <a 
              href={`https://wa.me/628111999777?text=Halo, saya tertarik dengan produk ${product.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 h-11 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                if ((window as any).TagManager) {
                  (window as any).TagManager.dataLayer({
                    dataLayer: {
                      event: 'whatsapp_click',
                      product_name: product.title,
                      button_location: 'product_card'
                    }
                  });
                }
              }}
            >
              Pesan Sekarang
            </a>
            <Link 
              to={`/products/${product.id}`}
              className="flex-1 flex items-center justify-center gap-2 h-11 rounded-xl bg-white text-blue-600 border border-blue-600 text-xs font-bold hover:bg-blue-50 transition-all"
            >
              Details <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="flex flex-col w-full py-12 md:py-20 overflow-x-hidden">
      <SEO 
        title="Produk Fiberglass: IPAL, STP, Panel Tank & Septic Tank"
        description="Katalog produk Toyoda Fiber: IPAL, BioSTP, panel tank, chemical tank, septic tank, storage tank, talang, atap & toilet portable fiberglass."
        url="https://ipaltoyoda.com/products"
      />
      <Container>
        <section id="header-produk" className="text-center max-w-3xl mx-auto mb-16 relative">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={antiFlicker}
            className="flex items-center justify-center gap-2 text-blue-600 mb-4"
          >
            <ShoppingCart className="size-5" />
            <span className="font-bold uppercase tracking-widest text-xs">Katalog Produk</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            style={antiFlicker}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6"
          >
            Solusi Fiberglass Berkualitas
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            style={antiFlicker}
            className="text-slate-600 text-lg"
          >
            Kami menyediakan berbagai macam produk fiberglass dengan standar kualitas tinggi untuk memenuhi kebutuhan industri dan residensial Anda.
          </motion.p>
        </section>

        <section id="produk-unggulan" className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Produk Utama & Unggulan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {[...MAIN_PRODUCTS, ...OTHER_PRODUCTS].map(renderProductCard)}
          </div>
        </section>

        <section id="jenis-ipal" className="mt-20 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Berbagai Jenis Sistem IPAL</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {JENIS_IPAL.map(renderProductCard)}
          </div>
        </section>
      </Container>
    </div>
  );
}