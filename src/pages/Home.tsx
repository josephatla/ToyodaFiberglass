import { motion } from 'motion/react';
import { ArrowRight, Verified, Lightbulb, HardHat, CheckCircle, Mail } from 'lucide-react';
import { PRODUCTS, NEWS } from '@/src/constants';
import { Link } from 'react-router-dom';
import Container from '@/src/components/Container';

// Perubahan Teknis untuk Memperbaiki Flicker di Mobile:
// 1. Menambahkan style={{ translateZ: 0 }} pada elemen motion utama. 
//    Ini memaksa browser mobile menggunakan Hardware Acceleration (GPU rasterization) 
//    yang menghilangkan kedipan saat scroll.
// 2. Menambahkan style={{ willChange: 'opacity, transform' }} untuk memberi tahu browser
//    properti apa yang akan dianimasikan agar browser bisa bersiap.
// 3. Mengurangi sedikit jarak x/y (-30 menjadi -20, dll) agar pergeseran tidak terlalu ekstrem saat scroll.
// 4. Memastikan z-index yang benar pada elemen relatif.

export default function Home() {
  return (
    // Memastikan overflow-x-hidden tetap ada di parent paling luar
    <div className="flex flex-col w-full overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-20 lg:py-32 overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 15 }} // Jarak y dikurangi sedikit
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // Menggunakan easeOutExpo yang lebih mulus
              // FIX MOBIL FLICKER: Force GPU acceleration & Will-Change hint
              style={{ translateZ: 0, willChange: 'opacity, transform' }}
              className="flex flex-col gap-6 items-start text-left z-10 relative"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-blue-100">
                <span className="size-2 rounded-full bg-blue-600 animate-pulse"></span>
                Solusi Fiberglass untuk Industri Anda
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900">
                PT Toyoda Fiber Indonesia
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed relative">
                PT Toyoda Fiber Indonesia merupakan supplier IPAL (Instalasi Pengolahan Air Limbah) terpercaya yang telah berpengalaman sejak tahun 2010. Menghadirkan solusi pengolahan limbah berkualitas tinggi, seluruh produk telah memenuhi standar nasional dan internasional dengan sertifikasi ISO, SNI serta TKDN.
                <br />
                <br />
                Didukung teknologi modern dan material berkualitas, PT Toyoda Fiber Indonesia berkomitmen memberikan sistem IPAL yang efisien, ramah lingkungan, dan tahan lama untuk kebutuhan industri, komersial, maupun residensial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto relative z-10">
                <button 
                  onClick={() => document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="h-14 px-8 bg-blue-600 text-white font-bold rounded-xl shadow-xl shadow-blue-600/30 hover:bg-blue-700 hover:translate-y-[-2px] transition-all w-full sm:w-auto"
                >
                  Lihat Produk
                </button>
                <Link 
                  to="/contact"
                  className="h-14 px-8 bg-white text-blue-600 font-bold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all w-full sm:w-auto flex items-center justify-center"
                >
                  Hubungi Kami
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }} // Jarak scale dikurangi sedikit
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              // FIX MOBIL FLICKER: Force GPU acceleration & Will-Change hint
              style={{ translateZ: 0, willChange: 'opacity, transform' }}
              className="relative aspect-square sm:aspect-video lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl z-0"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent z-10"></div>
              <img 
                alt="Industrial Fiberglass" 
                className="w-full h-full object-cover z-0" 
                src="/toyoda-landing.webp"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* About & Features Section */}
      <section className="py-16 md:py-24 bg-blue-50/60 relative">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} // Jarak x dikurangi sedikit
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }} // Amount dikurangi sedikit agar trigger lebih cepat
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              // FIX MOBIL FLICKER: Force GPU acceleration & Will-Change hint
              style={{ translateZ: 0, willChange: 'opacity, transform' }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 size-32 bg-blue-600/10 rounded-full blur-3xl z-0"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] z-10">
                <img 
                  className="w-full h-full object-cover" 
                  src="/keunggulan.jpeg"
                  alt="Manufacturing Facility"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 md:p-8 rounded-2xl shadow-xl hidden sm:block max-w-[200px] md:max-w-xs border border-blue-100 z-20">
                <div className="text-blue-600 text-3xl md:text-4xl font-black mb-1">15+</div>
                <div className="text-xs md:text-sm font-bold text-slate-900 mb-2">Tahun Pengalaman</div>
                <p className="text-[10px] md:text-xs text-slate-500 leading-relaxed">Mempelopori inovasi fiberglass di lanskap industri Indonesia sejak 2010.</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }} // Jarak x dikurangi sedikit
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              // FIX MOBIL FLICKER: Force GPU acceleration & Will-Change hint
              style={{ translateZ: 0, willChange: 'opacity, transform' }}
              className="flex flex-col gap-6 relative"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">Keunggulan Toyoda Fiber</h2>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  { icon: CheckCircle, title: 'Standar Internasional', desc: 'Didukung oleh standar SNI, ISO, dan KAN untuk setiap produk.' },
                  { icon: CheckCircle, title: 'Layanan Purna Jual', desc: 'Garansi dan dukungan teknis berkelanjutan untuk kepuasan Anda.' },
                  { icon: Verified, title: 'Kualitas Terjamin', desc: 'Kontrol kualitas ketat mengikuti standar ISO memastikan setiap tangki memenuhi persyaratan internasional.' },
                  { icon: Lightbulb, title: 'Produk Inovatif', desc: 'Teknik manufaktur canggih dan R&D untuk aplikasi fiberglass khusus yang disesuaikan dengan kebutuhan.' },
                  { icon: HardHat, title: 'Layanan Profesional', desc: 'Dukungan teknik ahli mulai dari konsultasi awal dan desain hingga pemasangan di lokasi.' }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`flex flex-col gap-3 p-5 rounded-2xl bg-white border border-blue-50 shadow-sm hover:shadow-md hover:border-blue-600/30 transition-all group ${idx === 4 ? 'sm:col-span-2 sm:flex-row sm:items-center' : ''}`}
                  >
                    <div className="size-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm md:text-base">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Products Section */}
      <section id="products-section" className="py-16 md:py-24 relative">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            // FIX MOBIL FLICKER: Force GPU acceleration & Will-Change hint
            style={{ translateZ: 0, willChange: 'opacity, transform' }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-6 relative"
          >
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-slate-900">Produk Kami</h2>
              <p className="text-slate-600">Temukan rangkaian lengkap solusi fiberglass berperforma tinggi kami yang dirancang untuk berbagai aplikasi industri dengan standar kualitas internasional.</p>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {PRODUCTS.map((product, idx) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }} // Jarak y dikurangi sedikit
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }} // EaseOutExpo
                // FIX MOBIL FLICKER: Force GPU acceleration & Will-Change hint
                style={{ translateZ: 0, willChange: 'opacity, transform' }}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all relative z-0"
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
                  <h4 className="text-lg font-bold group-hover:text-blue-600 transition-colors text-slate-900 mb-2">{product.title}</h4>
                  <p className="text-sm text-slate-500 mb-6 line-clamp-2 leading-relaxed">{product.description}</p>
                  
                  <div className="mt-auto flex flex-row gap-3 relative z-20">
                    <a 
                      href={`https://wa.me/628111999777?text=Halo, saya tertarik dengan produk ${product.title}`}
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
      </section>

      {/* News Section */}
      <section className="py-16 md:py-24 bg-slate-50/50 relative">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            // FIX MOBIL FLICKER: Force GPU acceleration & Will-Change hint
            style={{ translateZ: 0, willChange: 'opacity, transform' }}
            className="flex items-center justify-between mb-10 md:mb-12 relative"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Artikel & Pembaruan Terbaru</h2>
            <Link to="/news" className="text-xs font-bold text-blue-600 px-4 py-2 rounded-full border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all whitespace-nowrap">
              Lihat Semua
            </Link>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {NEWS.map((item, idx) => (
              <motion.article 
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                // FIX MOBIL FLICKER: Force GPU acceleration & Will-Change hint
                style={{ translateZ: 0, willChange: 'opacity, transform' }}
                className="flex flex-col gap-4 group cursor-pointer relative"
              >
                <div className="aspect-video rounded-xl overflow-hidden bg-slate-100 border border-slate-200 relative z-0">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 z-0" 
                    src={item.image} 
                    alt={item.title}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col gap-2 relative">
                  <h3 className="text-lg md:text-xl font-bold leading-tight group-hover:text-blue-600 transition-colors text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative">
        <Container>
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }} // Jarak scale dikurangi sedikit
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            // FIX MOBIL FLICKER: Force GPU acceleration & Will-Change hint
            style={{ translateZ: 0, willChange: 'opacity, transform' }}
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