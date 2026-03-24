import { motion } from 'motion/react';
import { Info, Eye, Rocket, Grid, Verified, Leaf, Shield, Award } from 'lucide-react';
import { PROJECTS } from '@/src/constants';
import Container from '@/src/components/Container';

export default function About() {
  const filters = ['Semua', 'Industrial', 'Residensial', 'Komersial'];

  return (
    <div className="flex flex-col w-full bg-blue-50/50">
      {/* Hero Section */}
      <section className="relative w-full py-8 md:py-12">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] min-h-[400px] md:min-h-[500px] flex flex-col justify-end bg-white border border-blue-100">
            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCIatt-sR5-aHnfelQ6yzCrqiEKxqId5JZkFj8MFqxvAX1LpAZJ7pP1dH2yWyR8gE4U_UBCgg6BECuJd_97SVesECLqX52NxRT0rP8XEF59q6vozbOYkkDwAmKRG483QlGeeQcG-qu749KipkPQ1JfbPlEZguY7mnojMjht9ZHr0EFxe2H-gOQgzfaMHBK0UYhMSEubtqdR3PfNfjZ7YHgOV6lVdtyK-E-8zu9FivfubZTUHOB72QYStNwgwnDFBpvVffgrucoFww")' }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative p-8 md:p-16 max-w-3xl"
            >
              <h1 className="text-blue-600 text-3xl sm:text-4xl md:text-6xl font-black leading-tight mb-4">Inovasi Fiber untuk Masa Depan Konstruksi</h1>
              <p className="text-slate-600 text-lg md:text-xl font-normal mb-6">Membangun masa depan yang lebih kuat dan berkelanjutan melalui teknologi fiber terdepan di Indonesia.</p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Company Profile */}
      <section className="py-16 md:py-24 bg-blue-50/50 backdrop-blur-sm">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-blue-600 mb-4">
                <Info className="size-5" />
                <span className="font-bold uppercase tracking-widest text-[10px] sm:text-xs">Profil Perusahaan</span>
              </div>
              <h2 className="text-slate-900 text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Tentang PT. Toyoda Fiber Indonesia</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-base sm:text-lg">
                <p>PT. Toyoda Fiber Indonesia berdiri sejak tahun 2010 dengan mengutamakan kepuasan pelanggan sehingga membuat kami berkembang hingga saat ini.</p>
                <p>Menggunakan bahan-bahan berkualitas dan terjamin, menjadikan produk berkualitas serta didukung oleh Paten Merek juga standar SNI, ISO, KAN. Produk kami juga telah digunakan di beberapa perusahaan dan industri ternama.</p>
                <p>Kami memprioritaskan kepuasan pelanggan, kualitas produk, garansi, dan layanan purna jual yang prima untuk setiap solusi fiberglass yang kami berikan.</p>
              </div>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm">
                  <Eye className="size-8 text-blue-600 mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">Visi Kami</h3>
                  <p className="text-sm text-slate-600">Menjadi penyedia solusi fiber nomor satu di Asia Tenggara, mendukung infrastruktur berkelanjutan.</p>
                </div>
                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm">
                  <Rocket className="size-8 text-blue-600 mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">Misi Kami</h3>
                  <p className="text-sm text-slate-600">Menghadirkan inovasi teknologi serat yang meningkatkan efisiensi dan kekuatan konstruksi bangunan.</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/toyoda-landing.webp" 
                  alt="Construction Site" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-blue-100 hidden sm:block">
                <p className="text-blue-600 text-4xl md:text-5xl font-black">15+</p>
                <p className="text-slate-500 text-[10px] md:text-sm font-bold uppercase tracking-wider">Tahun Pengalaman</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24 bg-blue-50/50">
        <Container>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="py-12 md:py-20 px-6 md:px-12 rounded-[2rem] md:rounded-[3rem] bg-white border-2 border-blue-100 shadow-xl"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Komitmen pada Standar & Kualitas</h2>
              <p className="text-slate-600 mb-12 md:mb-16 text-base sm:text-lg">Produk kami telah melalui pengujian ketat dan memiliki sertifikasi internasional untuk menjamin keamanan dan ketahanan proyek Anda.</p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
                {[
                  { icon: Verified, label: 'ISO 9001:2015' },
                  { icon: Shield, label: 'OHSAS 18001:2007' },
                  { icon: Leaf, label: 'ISO 14001:2015' },
                  { icon: Award, label: 'HALAL CERTIFICATION' },
                  { icon: Verified, label: 'TKDN' }
                ].map((cert, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="size-20 md:size-24 bg-blue-50 rounded-2xl flex items-center justify-center shadow-sm border border-blue-100 group hover:bg-blue-600 transition-colors">
                      <cert.icon className="size-8 md:size-10 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-[10px] md:text-xs font-black text-slate-700 uppercase tracking-widest">{cert.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
