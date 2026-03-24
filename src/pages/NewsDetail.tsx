import React from 'react';
import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Calendar, ArrowLeft } from 'lucide-react';
import { NEWS } from '@/src/constants';
import Container from '@/src/components/Container';

export default function NewsDetail() {
  const { id } = useParams();
  const article = NEWS.find(n => n.id === id) || NEWS[0];

  return (
    <div className="py-12 md:py-20">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <Link to="/news" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors mb-8">
            <ArrowLeft className="size-4" /> Kembali ke Artikel
          </Link>

          {/* Article Image */}
          <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl mb-10 md:mb-16">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Article Header */}
          <div className="mb-10 md:mb-12">
            <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
              <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full uppercase tracking-wider text-xs">
                {article.category}
              </span>
              <div className="flex items-center gap-1"><Calendar className="size-4" /> {article.date}</div>
              <div className="flex items-center gap-1"><Clock className="size-4" /> {article.readTime} Baca</div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              {article.title}
            </h1>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-img:rounded-2xl">
            <div className="whitespace-pre-wrap text-slate-700 leading-relaxed">
              {article.content || article.description}
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
