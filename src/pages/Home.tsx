import { motion } from 'motion/react';
import { ArrowRight, Verified, Lightbulb, HardHat, CheckCircle, Mail } from 'lucide-react';
import { MAIN_PRODUCTS, OTHER_PRODUCTS, JENIS_IPAL, NEWS, FAQS } from '@/src/constants';
import { Link } from 'react-router-dom';
import Container from '@/src/components/Container';
import TagManager from 'react-gtm-module';
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

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PT Toyoda Fiber Indonesia",
    "image": "https://ipaltoyoda.com/logo.webp",
    "@id": "https://ipaltoyoda.com",
    "url": "https://ipaltoyoda.com",
    "telephone": "0811-1999-777",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Raya Belimbing No.200, Kosambi",
      "addressLocality": "Tangerang",
      "addressRegion": "Banten",
      "postalCode": "15212",
      "addressCountry": "ID"
    }
  };

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

  const schema = JSON.stringify([localBusinessSchema, faqSchema]);

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <SEO 
        title="Vendor IPAL, STP & Panel Tank Fiberglass | Toyoda Fiber" 
        description="Produsen IPAL, STP, panel tank & chemical tank fiberglass sejak 2010. Bersertifikat ISO, SNI & TKDN. Melayani proyek di seluruh Indonesia."
        url="https://ipaltoyoda.com"
        schema={schema}
      />
      <section id="beranda" className="relative w-full py-12 md:py-20 lg:py-32 overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={antiFlicker}
              className="flex flex-col gap-6 items-start text-left z-10 relative"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-blue-200">
                <span className="size-2 rounded-full bg-blue-600 animate-pulse"></span>
                PT Toyoda Fiber Indonesia
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900">
                Vendor IPAL, STP & Panel Tank Fiberglass
              </h1>
              <p className="text-base sm:text-m text-slate-600 max-w-m leading-relaxed relative">
                <strong>VENDOR IPAL, STP, PANELTANK, dan CHEMICAL TANK</strong> <br /> 
                Solusi Terbaik untuk Pengolahan Air dan Kebutuhan Penyimpanan Industri. <br /> <br />
                PT TOYODA FIBER INDONESIA merupakan <strong>vendor IPAL, STP, PANELTANK, dan CHEMICAL TANK terbaik di INDONESIA.</strong> <br /> <br />
                Perusahaan kami sudah berdiri sejak tahun <strong>2010</strong> sehingga kami sudah sangat berpengalaman dalam hal ini, produk kami telah memenuhi standar Nasional dan Internasional dengan Sertifikasi <strong>ISO, TKDN serta SNI.</strong> <br /> <br />
                Perusahaan kami didukung oleh <strong>Teknologi Modern</strong> dan <strong>Material yang sangat Berkualitas</strong>, sehingga PT TOYODA FIBER INDONESIA berkomitmen untuk memberikan sistem IPAL/STP yang <strong>efisien, ramah lingkungan</strong>, dan kami pun berkomitmen untuk CHEMICAL TANK dan PANELTANK dapat diberikan dengan hasil yang <strong>tahan lama dan kuat</strong>. Kami siap melayani berbagai kebutuhan proyek anda di seluruh Indonesia.  
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto relative z-10">
                <Link
                  to="/products"
                  className="h-14 px-8 bg-blue-700 text-white font-bold rounded-xl shadow-xl shadow-blue-700/30 hover:bg-blue-800 hover:translate-y-[-2px] transition-all w-full sm:w-auto flex items-center justify-center"
                >
                  Lihat Produk
                </Link>
                <Link 
                  to="/contact"
                  className="h-14 px-8 bg-white text-blue-800 font-bold rounded-xl border-2 border-blue-800 hover:bg-blue-50 transition-all w-full sm:w-auto flex items-center justify-center"
                >
                  Hubungi Kami
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={antiFlicker}
              className="relative aspect-square sm:aspect-video lg:aspect-auto lg:justify-self-center rounded-3xl overflow-hidden shadow-2xl z-0"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent z-10"></div>
              <OptimizedImage 
                alt="Industrial Fiberglass" 
                className="w-full lg:w-auto h-full object-cover z-0" 
                src="/pabrik-ipal-fiberglass-terbaik-1.webp"
                priority={true}
                width={960}
                height={960}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 576px"
              />
            </motion.div>

          </div>
        </Container>
      </section>

      <section id="keunggulan" className="py-16 md:py-24 bg-blue-50/60 relative">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={antiFlicker}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 size-32 bg-blue-600/10 rounded-full blur-3xl z-0"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl z-10">
                <OptimizedImage 
                  className="w-full h-full object-cover" 
                  src="/keunggulan.webp"
                  alt="Manufacturing Facility"
                  width={1200}
                  height={900}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 576px"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 md:p-8 rounded-2xl shadow-xl hidden sm:block max-w-[200px] md:max-w-xs border border-blue-100 z-20">
                <div className="text-blue-600 text-3xl md:text-4xl font-black mb-1">15+</div>
                <div className="text-xs md:text-sm font-bold text-slate-900 mb-2">Tahun Pengalaman</div>
                <p className="text-[10px] md:text-xs text-slate-500 leading-relaxed">Memelopori inovasi fiberglass di lanskap industri Indonesia sejak 2010.</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={antiFlicker}
              className="flex flex-col gap-6 relative"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">Kenapa harus pilih kami?</h2>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  { icon: CheckCircle, title: 'Standar Internasional', desc: 'Didukung oleh standar ISO, KAN, TKDN, dan SNI untuk setiap produk.' },
                  { icon: CheckCircle, title: 'Harga Terbaik dan Kompetitif', desc: 'Garansi dan dukungan teknis berkelanjutan untuk kepuasan Anda.' },
                  { icon: Verified, title: 'Kualitas Terjamin', desc: 'Kontrol kualitas ketat mengikuti standar ISO memastikan setiap tangki memenuhi persyaratan internasional.' },
                  { icon: HardHat, title: 'Layanan Profesional', desc: 'Dukungan teknik ahli mulai dari konsultasi awal dan desain hingga pemasangan di lokasi.' },
                  { icon: Lightbulb, title: 'Pelayanan Terbaik dan Responsif ', desc: 'Kami siap melayani anda 24/7' }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`flex flex-col gap-3 p-5 rounded-2xl bg-white border border-blue-50 shadow-sm hover:shadow-md hover:border-blue-600/30 transition-all group ${idx === 4 ? 'sm:col-span-2 sm:flex-row sm:items-center' : ''}`}
                  >
                    <div className="size-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm md:text-base">{item.title}</h3>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section id="tentang" className="py-16 md:py-24 bg-white relative">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={antiFlicker}
              className="flex flex-col gap-6 relative"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                Apa Itu IPAL?
              </h2>
              <div className="flex flex-col gap-4 text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  IPAL (Instalasi Pengolahan Air Limbah) adalah sistem yang digunakan untuk mengolah dan memproses air limbah agar kandungan pencemar di dalamnya berkurang sebelum air tersebut dibuang ke lingkungan atau digunakan kembali sesuai peruntukannya. Air limbah dapat berasal dari berbagai sumber, seperti pabrik, rumah sakit, hotel, restoran, perkantoran, kawasan perumahan, dan fasilitas komersial.
                </p>
                <p>
                  PT TOYODA FIBER INDONESIA disini hadir untuk menyediakan sistem yang sudah bersertifikat <strong>ISO, KAN, TKDN, dan SNI</strong> sehingga kalian dapat memercayai kami sebagai vendor yang berkualitas dan menjamin hasil limbah kalian dapat sesuai dengan peraturan nasional maupun internasional.
                </p>
                <p>
                  PT TOYODA FIBER INDONESIA berkomitmen untuk dapat melestarikan lingkungan INDONESIA supaya menjadi lebih baik untuk kedepannya dan tidak ada lagi namanya pencemaran lingkungan.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={antiFlicker}
              className="relative rounded-3xl overflow-hidden shadow-xl z-10"
            >
              <OptimizedImage 
                className="w-full h-auto object-cover" 
                src="/ipal_apa.webp"
                alt="Apa itu IPAL"
                width={1200}
                height={800}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 576px"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      <section id="produk" className="py-16 md:py-24 bg-slate-50/30 relative">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={antiFlicker}
            className="flex flex-col mb-12 lg:mb-16 gap-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 uppercase">PRODUK KAMI</h2>
            <p className="text-slate-600 max-w-2xl text-lg">Temukan rangkaian lengkap solusi fiberglass berperforma tinggi kami yang dirancang untuk berbagai aplikasi industri dengan standar kualitas internasional.</p>
          </motion.div>

          <div className="flex flex-col gap-12 lg:gap-20 mb-20 lg:mb-28">
            {MAIN_PRODUCTS.map((product, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={antiFlicker}
                  className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100"
                >
                  <div className={`w-full md:w-1/2 aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden relative ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                      referrerPolicy="no-referrer" 
                    />
                  </div>

                  <div className={`w-full md:w-1/2 flex flex-col items-start text-left ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">{product.title}</h3>
                    {product.subtitle && (
                      <h4 className="text-lg md:text-xl text-slate-700 mb-4">{product.subtitle}</h4>
                    )}
                    <p 
                      className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 whitespace-pre-line"
                      dangerouslySetInnerHTML={{ __html: product.shortdesc }}
                    />
                    
                    <Link 
                      to={`/products/${product.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 border-2 border-slate-900 font-bold uppercase tracking-widest text-sm hover:bg-slate-900 hover:text-white transition-all rounded-lg"
                    >
                      DETAIL <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={antiFlicker}
            className="flex flex-col gap-6 relative"
          > 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {OTHER_PRODUCTS.map((item) => (
                <Link 
                  to={`/products/${item.id}`} 
                  key={item.id}
                  className="group flex flex-col bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
                >
                  <div className="flex flex-col mb-4">
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-sm text-slate-500">
                      {item.subtitle}
                    </span>
                  </div>
                  
                  <div className="w-full h-48 flex items-center justify-center p-2">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

        </Container>
      </section>
      
      <section id="artikel" className="py-16 md:py-24 bg-slate-50/50 relative">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={antiFlicker}
            className="flex items-center justify-between mb-10 md:mb-12 relative"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Artikel & Pembaruan Terbaru</h2>
            <Link to="/blog" className="text-xs font-bold text-blue-600 px-4 py-2 rounded-full border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all whitespace-nowrap">
              Lihat Semua
            </Link>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {[...NEWS].reverse().slice(0, 3).map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
                style={antiFlicker}
              >
                <Link to={`/blog/${item.id}`} className="block h-full">
                  <article 
                    className="flex flex-col h-full gap-4 group cursor-pointer relative"
                    style={antiFlicker}
                  >
                    <div 
                      className="aspect-video rounded-xl overflow-hidden bg-slate-100 border border-slate-200 relative z-0"
                      style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                    >
                      <OptimizedImage 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 z-0" 
                        style={antiFlicker}
                        src={item.image} 
                        alt={item.title}
                        width={1200}
                        height={675}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                      />
                    </div>
                    <div className="flex flex-col gap-2 relative">
                      <h3 className="text-lg md:text-xl font-bold leading-tight group-hover:text-blue-600 transition-colors text-slate-900">{item.title}</h3>
                      <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">{item.description}</p>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section id="jenis-ipal" className="py-16 md:py-24 relative bg-white">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={antiFlicker}
            className="flex flex-col items-center justify-center text-center mb-10 md:mb-16 relative"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-4">Solusi Pengolahan Berdasarkan Kebutuhan (Jenis IPAL)</h2>
            <p className="text-slate-600 max-w-2xl text-lg">Berbagai pilihan sistem Instalasi Pengolahan Air Limbah yang dirancang khusus untuk memenuhi standar dan karakteristik masing-masing sektor.</p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative">
            {JENIS_IPAL.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
                style={antiFlicker}
                className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all relative z-0"
              >
                <Link to={`/products/${product.id}`} className="absolute inset-0 z-0" aria-label={`Detail produk ${product.title}`} />
                <div className="aspect-video overflow-hidden bg-slate-100 relative z-10 pointer-events-none">
                  <OptimizedImage 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 z-0" 
                    style={antiFlicker}
                    src={product.image} 
                    alt={product.title}
                    width={1200}
                    height={675}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-2">{product.category}</span>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">{product.title}</h3>
                  <p className="text-sm text-slate-500 mb-6 line-clamp-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: product.description }}></p>
                  
                  <div className="mt-auto flex flex-col gap-2 relative z-20">
                    <Link 
                      to={`/products/${product.id}`}
                      className="w-full flex items-center justify-center gap-2 h-10 rounded-xl bg-slate-50 text-slate-600 hover:text-blue-600 border border-slate-200 hover:border-blue-200 text-xs font-bold transition-all"
                    >
                      Pelajari Lebih Lanjut
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section id="faq" className="py-16 md:py-24 bg-slate-50 relative">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={antiFlicker}
            className="flex flex-col items-center justify-center text-center mb-10 md:mb-16 relative"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-4">Pertanyaan yang Sering Diajukan (FAQ)</h2>
            <p className="text-slate-600 max-w-2xl text-lg">Temukan jawaban atas pertanyaan umum seputar produk, instalasi, dan layanan kami.</p>
          </motion.div>
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {FAQS.map((faq, idx) => (
              <motion.details 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
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
      </section>

      <section id="kontak-cepat" className="py-16 md:py-24 relative">
        <Container>
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={antiFlicker}
            className="bg-blue-600 p-8 sm:p-12 md:p-16 rounded-[2rem] flex flex-col items-center text-center relative overflow-hidden shadow-2xl shadow-blue-600/20"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl z-0"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl z-0"></div>
            
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-6 relative z-10 leading-tight text-white">Siap Memulai Proyek Anda?</h2>
            <p className="text-white/80 text-base sm:text-lg max-w-xl mb-10 relative z-10">Dapatkan konsultasi ahli dan penawaran harga terbaik untuk kebutuhan sistem penyimpanan atau pengolahan industri Anda sekarang.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10 w-full sm:w-auto">
              <Link to="/contact" className="h-14 px-10 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg z-20">
                <Mail className="size-5" /> Hubungi Kami
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}