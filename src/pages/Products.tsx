import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS, CONTACT_INFO } from '@/src/constants';
import Container from '@/src/components/Container';

export default function Products() {
  return (
    <div className="flex flex-col w-full py-12 md:py-20">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-blue-600 mb-4"
          >
            <ShoppingCart className="size-5" />
            <span className="font-bold uppercase tracking-widest text-xs">Katalog Produk</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6"
          >
            Solusi Fiberglass Berkualitas
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg"
          >
            Kami menyediakan berbagai macam produk fiberglass dengan standar kualitas tinggi untuk memenuhi kebutuhan industri dan residensial Anda.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all relative"
            >
              <Link to={`/products/${product.id}`} className="absolute inset-0 z-0" />
              <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative z-10 pointer-events-none">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  src={product.image} 
                  alt={product.title}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{product.title}</h3>
                <p className="text-sm text-slate-500 mb-6 line-clamp-3 leading-relaxed">{product.description}</p>
                
                <div className="mt-auto flex flex-row gap-3 relative z-20">
                  <a 
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Halo, saya tertarik dengan produk ${product.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 h-11 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all"
                    onClick={(e) => e.stopPropagation()}
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
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
