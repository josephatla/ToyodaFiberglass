import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Shield, HardHat, Factory, Mail, MessageCircle, X } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { PRODUCTS, CONTACT_INFO } from '@/src/constants';
import Container from '@/src/components/Container';

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col w-full">
      {/* Product Hero */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-6">
                <Link to="/products" className="hover:text-blue-600 transition-colors">Produk</Link>
                <span>/</span>
                <span className="text-blue-600 font-bold">{product.title}</span>
              </nav>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
                {product.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
                {product.description} Dirancang dengan presisi teknik tinggi untuk memberikan solusi penyimpanan air yang paling andal dan tahan lama di pasar Indonesia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-14 px-8 bg-white text-blue-600 font-bold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all w-full sm:w-auto text-sm sm:text-base flex items-center justify-center gap-2"
                >
                  <MessageCircle className="size-5" /> Pesan Sekarang
                </a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Key Benefits */}
      <section className="py-16 md:py-24 bg-blue-50/50 backdrop-blur-sm">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Mengapa Memilih {product.title} Kami?</h2>
            <p className="text-slate-600 text-sm sm:text-base">Keunggulan teknik dan material yang membuat produk kami menjadi standar industri.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {product.benefits?.map((benefit, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-blue-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center"
              >
                <CheckCircle className="size-8 sm:size-10 text-blue-600 mb-4" />
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Projects Gallery */}
      {product.gallery && product.gallery.length > 0 && (
        <section className="py-16 md:py-24 bg-blue-50/50">
          <Container>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 md:mb-12 gap-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Galeri Foto</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {product.gallery.map((image, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img src={image} alt={`${product.title} Gallery ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-50/50 backdrop-blur-sm">
        <Container>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-blue-600 p-8 sm:p-12 md:p-16 rounded-[2rem] flex flex-col items-center text-center relative overflow-hidden shadow-2xl shadow-blue-600/20"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-6 relative z-10 leading-tight text-white">Siap Memulai Proyek Anda?</h2>
            <p className="text-white/80 text-base sm:text-lg max-w-xl mb-10 relative z-10">Dapatkan konsultasi ahli dan penawaran harga terbaik untuk kebutuhan sistem penyimpanan atau pengolahan industri Anda sekarang.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10 w-full sm:w-auto">
              <Link to="/contact" className="h-14 px-10 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg">
                <Mail className="size-5" /> Hubungi Kami
              </Link>
              <button className="h-14 px-10 bg-blue-700 text-white border border-white/20 font-bold rounded-xl hover:bg-blue-800 transition-all w-full sm:w-auto">
                Unduh Brosur
              </button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white transition-colors bg-black/50 p-2 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="size-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Full screen gallery"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
