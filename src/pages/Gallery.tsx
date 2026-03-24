import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, X } from 'lucide-react';
import { MAIN_GALLERY } from '@/src/constants';
import Container from '@/src/components/Container';

// Objek style khusus untuk mengatasi layar berkedip/lompat di akhir animasi pada Mobile/Safari
const antiFlicker = {
  WebkitBackfaceVisibility: "hidden",
  backfaceVisibility: "hidden",
  WebkitPerspective: 1000,
  perspective: 1000,
  WebkitTransform: "translate3d(0,0,0)",
  transform: "translate3d(0,0,0)",
} as const;

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col w-full py-12 md:py-20 overflow-x-hidden">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={antiFlicker}
            className="flex items-center justify-center gap-2 text-blue-600 mb-4"
          >
            <Camera className="size-5" />
            <span className="font-bold uppercase tracking-widest text-xs">Portofolio Proyek</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            style={antiFlicker}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6"
          >
            Galeri Pekerjaan Kami
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            style={antiFlicker}
            className="text-slate-600 text-lg"
          >
            Lihat berbagai proyek pemasangan dan instalasi produk fiberglass kami yang telah sukses diimplementasikan di berbagai sektor industri dan residensial.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {MAIN_GALLERY.map((image, idx) => (
            /* PEMISAHAN: motion.div HANYA untuk animasi pembungkus luar */
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
              style={antiFlicker}
            >
              {/* PEMISAHAN: Div biasa untuk memegang style visual. WebkitMaskImage mencegah Safari membocorkan gambar saat border-radius */}
              <div 
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm hover:shadow-xl transition-all cursor-pointer z-0"
                style={{ ...antiFlicker, WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image} 
                  alt={`Gallery image ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0"
                  style={antiFlicker}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center z-10">   
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {MAIN_GALLERY.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 font-medium">Belum ada foto untuk kategori ini.</p>
          </div>
        )}
      </Container>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white transition-colors bg-black/50 p-2 rounded-full z-[110]"
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
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl relative z-[105]"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
              // Menambahkan akselerasi GPU agar animasi spring modal lebih mulus
              style={antiFlicker}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}