import { motion } from 'motion/react';
import { ArrowRight, Verified, Lightbulb, HardHat, CheckCircle, Mail } from 'lucide-react';
import { NEWS } from '@/src/constants'; // 'PRODUCTS' dihapus karena diganti dengan 'MAIN_PRODUCTS' di bawah
import { Link } from 'react-router-dom';
import Container from '@/src/components/Container';
import TagManager from 'react-gtm-module';

// Objek style khusus untuk mengatasi layar berkedip/lompat di akhir animasi pada Mobile/Safari
const antiFlicker = {
  WebkitBackfaceVisibility: "hidden",
  backfaceVisibility: "hidden",
  WebkitPerspective: 1000,
  perspective: 1000,
  WebkitTransform: "translate3d(0,0,0)",
  transform: "translate3d(0,0,0)",
} as const;

// Data 4 Produk Utama
const MAIN_PRODUCTS = [
  {
    id: "ipal-medis",
    title: "IPAL MEDIS",
    subtitle: "Vendor IPAL Rumah Sakit & IPAL Puskesmas",
    description: (
      <>
        <strong>IPAL Medis</strong> (Instalasi Pengolahan Air Limbah Medis) adalah sistem yang digunakan untuk mengolah air limbah yang dihasilkan dari aktivitas fasilitas pelayanan kesehatan, seperti rumah sakit, klinik, laboratorium, puskesmas, dan fasilitas kesehatan lainnya.<br /><br />
        Air limbah dari fasilitas kesehatan memiliki karakteristik yang dapat berbeda dengan limbah domestik biasa. Oleh karena itu, <strong>PT TOYODA FIBER INDONESIA</strong> hadir untuk merancang sistem untuk mempertimbangkan sumber limbah, debit air limbah, karakteristik pencemar, serta kebutuhan pengolahan pada masing-masing fasilitas.
      </>
    ),
    image: "/ipalmedis.png"
  },
  {
    id: "ipal-domestik",
    title: "IPAL DOMESTIK",
    subtitle: null,
    description: (
      <>
        <strong>IPAL Domestik</strong> (Instalasi Pengolahan Air Limbah Domestik) adalah sistem yang dirancang untuk mengolah air limbah yang berasal dari aktivitas sehari-hari manusia sebelum dialirkan ke lingkungan sesuai dengan ketentuan yang berlaku.<br /><br />
        Air limbah domestik dapat berasal dari berbagai aktivitas seperti toilet, kamar mandi, wastafel, dapur, laundry, serta kegiatan operasional pada bangunan dan fasilitas umum. Apabila tidak dikelola dengan baik, air limbah tersebut dapat menimbulkan pencemaran lingkungan dan mengganggu kualitas sumber air.
      </>
    ),
    image: "/ipaldomestik.jpeg"
  },
  {
    id: "chemical-tank",
    title: "CHEMICAL TANK",
    subtitle: null,
    description: (
      <>
        <strong>Chemical Tank</strong> merupakan tangki khusus untuk menyimpan dan menampung bahan kimia cair yang digunakan dalam berbagai proses industri, pengolahan air, dan pengolahan air limbah. PT TOYODA FIBER INDONESIA menyediakan Chemical Tank berbahan fiberglass/FRP yang dapat disesuaikan dengan kebutuhan kapasitas dan karakteristik bahan kimia yang digunakan.
      </>
    ),
    image: "/chemicaltank.png" // Ganti dengan path gambar aslinya nanti
  },
  {
    id: "paneltank",
    title: "PANELTANK FIBERGLASS TOYODA",
    subtitle: null,
    description: (
      <>
        <strong>Paneltank fiberglass Toyoda</strong> merupakan tangki penyimpanan modular yang fleksibel dan dapat disesuaikan dengan kebutuhan kapasitas Anda. Dirancang dengan sistem panel terpisah yang mudah dirakit, produk ini menjadi solusi ideal untuk penyimpanan air bersih, limbah, maupun cairan lainnya di berbagai sektor. Dirancang dengan presisi teknik tinggi untuk memberikan solusi penyimpanan air yang paling andal dan tahan lama di pasar Indonesia.
      </>
    ),
    image: "/paneltank.png" // Ganti dengan path gambar aslinya nanti
  }
];

const OTHER_PRODUCTS = [
  {
    id: "water-tank-asahi",
    title: "Water Tank Asahi",
    subtitle: "Water Tank",
    image: "/water-tank-asahi.jpg" // Sesuaikan dengan path gambar asli
  },
  {
    id: "septic-tank-bioasahi",
    title: "Septic Tank Bioasahi",
    subtitle: "BA Series",
    image: "/septic-tank-bioasahi.jpg" // Sesuaikan dengan path gambar asli
  },
  {
    id: "roof-tank-asahi",
    title: "Roof Tank Asahi",
    subtitle: "Roof Tank",
    image: "/roof-tank-asahi.jpg" // Sesuaikan dengan path gambar asli
  },
  {
    id: "chemical-tank-asahi",
    title: "Chemical Tank",
    subtitle: "Chemical Tank",
    image: "/chemical-tank-asahi.jpg" // Sesuaikan dengan path gambar asli
  }
];

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-20 lg:py-32 overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={antiFlicker}
              className="flex flex-col gap-6 items-start text-left z-10 relative"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-blue-100">
                <span className="size-2 rounded-full bg-blue-600 animate-pulse"></span>
                Solusi Fiberglass untuk Industri Anda
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900">
                PT Toyoda Fiber Indonesia
              </h1>
              <p className="text-base sm:text-m text-slate-600 max-w-m leading-relaxed relative">
                <strong>VENDOR IPAL, STP, PANELTANK, dan CHEMICAL TANK</strong> <br /> 
                Solusi Terbaik untuk Pengolahan Air dan Kebutuhan Penyimpanan Industri. <br /> <br />
                PT TOYODA FIBER INDONESIA merupakan <strong>vendor IPAL, STP, PANELTANK, dan CHEMICAL TANK terbaik di INDONESIA.</strong> <br /> <br />
                Perusahaan kami sudah berdiri sejak tahun <strong>2010</strong> sehingga kami sudah sangat berpengalaman dalam hal ini, produk kami telah memuhi <strong>standar Nasional dan Internasional dengan Sertifikasi ISO, TKDN serta SNI.</strong> <br /> <br />
                Perusahaan kami didukung oleh <strong>Teknologi Modern</strong> dan <strong>Material yang sangat Berkualitas</strong>, sehingga PT TOYODA FIBER INDONESIA berkomitmen untuk memberikan sistem IPAL/STP yang <strong>efisian, ramah lingkungan</strong>, dan kami pun berkomitmen untuk CHEMICAL TANK dan PANELTANK dapat diberikan dengan hasil yang <strong>tahan lama dan kuat</strong>. Kami siap melayani berbagai kebutuhan proyek anda di seluruh Indonesia.  
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
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={antiFlicker}
              className="relative aspect-square sm:aspect-video lg:aspect-auto lg:justify-self-center rounded-3xl overflow-hidden shadow-2xl z-0"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent z-10"></div>
              <img 
                alt="Industrial Fiberglass" 
                className="w-full lg:w-auto h-full object-cover z-0" 
                src="/ipal1.png"
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
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={antiFlicker}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 size-32 bg-blue-600/10 rounded-full blur-3xl z-0"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl z-10">
                <img 
                  className="w-full h-full object-cover" 
                  src="/keunggulan.png"
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

      {/* Apa Itu IPAL Section */}
      <section className="py-16 md:py-24 bg-white relative">
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
                  PT TOYODA FIBER INDONESIA disini hadir untuk menyediakan sistem yang sudah bersertifikat ISO, KAN, TKDN, dan SNI sehingga kalian dapat memercayai kami sebagai vendor yang berkualitas dan menjamin hasil limbah kalian dapat sesuai dengan peraturan nasional maupun internasional.
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
              <img 
                className="w-full h-auto object-cover" 
                src="/ipal_apa.png"
                alt="Apa itu IPAL"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </Container>
      </section>
{/* Products Section (Alternating Cards & Other Products Grid) */}
      <section id="products-section" className="py-16 md:py-24 bg-slate-50/30 relative">
        <Container>
          {/* Header Section Produk Utama */}
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

          {/* Cards Produk Utama */}
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
                  {/* Bagian Gambar */}
                  <div className={`w-full md:w-1/2 aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden relative ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                      referrerPolicy="no-referrer" 
                    />
                  </div>

                  {/* Bagian Teks */}
                  <div className={`w-full md:w-1/2 flex flex-col items-start text-left ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">{product.title}</h3>
                    {product.subtitle && (
                      <h4 className="text-lg md:text-xl text-slate-700 mb-4">{product.subtitle}</h4>
                    )}
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
                      {product.description}
                    </p>
                    
                    <Link 
                      to={`/products/${product.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 border-2 border-slate-900 font-bold uppercase tracking-widest text-sm hover:bg-slate-900 hover:text-white transition-all rounded-lg"
                    >
                      DETAIL KLIK <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Grid Produk Lainnya */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={antiFlicker}
            className="flex flex-col gap-6 relative"
          >
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Produk Lainnya
            </h3>
            
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
                  
                  {/* Gunakan object-contain agar gambar produk tidak terpotong (seperti di referensi) */}
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
      
      {/* News Section */}
      <section className="py-16 md:py-24 bg-slate-50/50 relative">
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
            <Link to="/news" className="text-xs font-bold text-blue-600 px-4 py-2 rounded-full border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all whitespace-nowrap">
              Lihat Semua
            </Link>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {NEWS.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
                style={antiFlicker}
              >
                <article 
                  className="flex flex-col h-full gap-4 group cursor-pointer relative"
                  style={antiFlicker}
                >
                  <div 
                    className="aspect-video rounded-xl overflow-hidden bg-slate-100 border border-slate-200 relative z-0"
                    style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                  >
                    <img 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 z-0" 
                      style={antiFlicker}
                      src={item.image} 
                      alt={item.title}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col gap-2 relative">
                    <h3 className="text-lg md:text-xl font-bold leading-tight group-hover:text-blue-600 transition-colors text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">{item.description}</p>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative">
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