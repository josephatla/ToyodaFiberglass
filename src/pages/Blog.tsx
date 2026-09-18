import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { NEWS } from '@/src/constants';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '@/src/components/Container';
import SEO from '@/src/components/SEO';

// Objek style khusus untuk mengatasi layar berkedip/lompat di akhir animasi pada Mobile/Safari
const antiFlicker = {
  WebkitBackfaceVisibility: "hidden",
  backfaceVisibility: "hidden",
  WebkitPerspective: 1000,
  perspective: 1000,
  WebkitTransform: "translate3d(0,0,0)",
  transform: "translate3d(0,0,0)",
} as const;

export default function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  
  const sortedNews = [...NEWS].reverse();
  const totalPages = Math.ceil(sortedNews.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = sortedNews.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="py-12 md:py-16 overflow-x-hidden">
      <SEO 
        title="Artikel IPAL, STP & Tangki Fiberglass | Toyoda Fiber"
        description="Panduan memilih IPAL, panel tank, dan tangki fiberglass untuk proyek industri, rumah sakit, hotel, dan fasilitas publik."
        url="https://ipaltoyoda.com/blog"
      />
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={antiFlicker}
          className="flex flex-col gap-4 mb-10 md:mb-12 relative"
        >
          <h1 className="text-slate-900 text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight">Artikel IPAL & Tangki Fiberglass</h1>
          <p className="text-slate-600 text-base sm:text-lg">Dapatkan panduan lengkap, informasi produk, serta tips memilih dan merawat sistem pengolahan limbah dan tangki penyimpanan industri.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative">
          {currentNews.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
              style={antiFlicker}
              className="h-full"
            >
              <div 
                className="flex flex-col h-full bg-white rounded-2xl overflow-hidden border-2 border-blue-50 shadow-sm hover:shadow-xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 group z-0"
                style={{ ...antiFlicker, WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
              >
                <Link to={`/blog/${item.id}`} className="flex flex-col h-full">
                  <div className="h-48 sm:h-56 w-full overflow-hidden relative z-0">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 z-0"
                      style={antiFlicker}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 flex flex-col grow relative z-10 bg-white">
                    <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">{item.description}</p>
                    <div className="mt-auto flex items-center justify-between border-t border-blue-50 pt-4">
                      <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider">{item.date}</span>
                      <span className="text-blue-600 text-xs sm:text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Baca <ArrowRight className="size-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 md:mt-16 flex justify-center gap-2 relative">
            <button 
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`w-10 h-10 flex items-center justify-center rounded-xl border border-blue-600/10 transition-colors ${currentPage === 1 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-500 hover:bg-blue-600/5 cursor-pointer'}`}
            >
              <ChevronLeft className="size-5" />
            </button>
            
            {Array.from({ length: totalPages }).map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 flex items-center justify-center rounded-xl transition-colors text-sm font-bold ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'border border-blue-600/10 text-slate-700 hover:bg-blue-600/5'}`}
              >
                {i + 1}
              </button>
            ))}
            
            <button 
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 flex items-center justify-center rounded-xl border border-blue-600/10 transition-colors ${currentPage === totalPages ? 'text-slate-300 cursor-not-allowed' : 'text-slate-500 hover:bg-blue-600/5 cursor-pointer'}`}
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        )}
      </Container>
    </div>
  );
}