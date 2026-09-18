import React from 'react';
import { motion } from 'motion/react';
import Container from '@/src/components/Container';
import SEO from '@/src/components/SEO';
import { FAQS } from '@/src/constants';

const antiFlicker = {
  WebkitBackfaceVisibility: "hidden",
  backfaceVisibility: "hidden",
  WebkitPerspective: 1000,
  perspective: 1000,
  WebkitTransform: "translate3d(0,0,0)",
  transform: "translate3d(0,0,0)",
} as const;

export default function Faq() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Beranda",
        "item": "https://ipaltoyoda.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "FAQ",
        "item": "https://ipaltoyoda.com/faq"
      }
    ]
  };

  const schema = JSON.stringify([faqSchema, breadcrumbSchema]);

  return (
    <div className="py-16 md:py-24 bg-slate-50 relative overflow-x-hidden min-h-[80vh]">
      <SEO 
        title="FAQ IPAL & Tangki Fiberglass | Toyoda Fiber"
        description="Pertanyaan umum seputar instalasi pengolahan air limbah, kapasitas tangki, dan keunggulan fiberglass dari PT Toyoda Fiber Indonesia."
        url="https://ipaltoyoda.com/faq"
        schema={schema}
      />
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={antiFlicker}
          className="flex flex-col items-center justify-center text-center mb-10 md:mb-16 relative"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">Pertanyaan yang Sering Diajukan (FAQ)</h1>
          <p className="text-slate-600 max-w-2xl text-lg">Temukan jawaban atas pertanyaan umum seputar produk IPAL, standar baku mutu, dan layanan instalasi kami.</p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {FAQS.map((faq, idx) => (
            <motion.details 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              style={antiFlicker}
              className="group bg-white border border-slate-200 rounded-xl shadow-sm [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 group-open:text-blue-600 transition-colors">
                {faq.q}
                <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                {faq.a}
              </div>
            </motion.details>
          ))}
        </div>
      </Container>
    </div>
  );
}
