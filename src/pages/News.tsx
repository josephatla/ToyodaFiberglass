import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { NEWS } from '@/src/constants';
import { Search, Clock, Calendar, ArrowRight, BellRing, ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '@/src/components/Container';

export default function News() {
  return (
    <div className="py-12 md:py-16">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-4 mb-10 md:mb-12"
        >
          <h1 className="text-slate-900 text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight">Artikel</h1>
          <p className="text-slate-600 text-base sm:text-lg ">Temukan kabar terbaru mengenai inovasi serat ramah lingkungan dan komitmen kami terhadap masa depan tekstil yang berkelanjutan.</p>
        </motion.div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {NEWS.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col bg-white rounded-2xl overflow-hidden border-2 border-blue-50 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all group"
            >
              <Link to={`/news/${item.id}`} className="flex flex-col h-full">
                <div className="h-48 sm:h-56 w-full overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex flex-col grow">
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
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 md:mt-16 flex justify-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-blue-600/10 text-slate-500 hover:bg-blue-600/5 transition-colors">
            <ChevronLeft className="size-5" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-sm">1</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-blue-600/10 text-slate-700 dark:text-slate-300 hover:bg-blue-600/5 transition-colors text-sm">2</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-blue-600/10 text-slate-700 dark:text-slate-300 hover:bg-blue-600/5 transition-colors text-sm">3</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-blue-600/10 text-slate-500 hover:bg-blue-600/5 transition-colors">
            <ChevronRight className="size-5" />
          </button>
        </div>
      </Container>
    </div>
  );
}
