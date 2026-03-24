import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram } from 'lucide-react';
import { CONTACT_INFO } from '@/src/constants';
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

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
            <Mail className="size-5" />
            <span className="font-bold uppercase tracking-widest text-xs">Hubungi Kami</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            style={antiFlicker}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6"
          >
            Mari Berdiskusi Tentang Proyek Anda
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            style={antiFlicker}
            className="text-slate-600 text-lg"
          >
            Tim ahli kami siap membantu memberikan solusi fiberglass terbaik untuk kebutuhan industri atau residensial Anda.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start relative">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 flex flex-col gap-6 relative">
            {[
              { icon: Phone, title: 'Telepon Resmi', desc: 'Hubungi kami langsung untuk respon cepat.', content: CONTACT_INFO.phone, link: `tel:${CONTACT_INFO.phone}` },
              { icon: Mail, title: 'Email Resmi', desc: 'Kirimkan detail proyek atau pertanyaan Anda.', content: CONTACT_INFO.email, link: `mailto:${CONTACT_INFO.email}` },
              { icon: Instagram, title: 'Instagram', desc: 'Ikuti kami untuk update terbaru.', content: '@toyoda.fiberglass', link: CONTACT_INFO.instagram },
              { icon: MapPin, title: 'Alamat Kantor', desc: CONTACT_INFO.address, content: '', link: null }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                style={antiFlicker}
                className="p-8 rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="size-12 rounded-xl bg-blue-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="size-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed">{item.desc}</p>
                {item.link ? (
                  <a href={item.link} target={item.link.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">
                    {item.content}
                  </a>
                ) : null}
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={antiFlicker}
            className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl border border-blue-100 shadow-xl relative z-10"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Kirim Pesan</h3>
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">Nama Lengkap</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="h-12 px-4 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 outline-none transition-all"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">Alamat Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="h-12 px-4 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 outline-none transition-all"
                  placeholder="email@contoh.com"
                />
              </div>
              <div className="sm:col-span-2 flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">Subjek</label>
                <input 
                  type="text" 
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="h-12 px-4 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 outline-none transition-all"
                  placeholder="Subjek pesan"
                />
              </div>
              <div className="sm:col-span-2 flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">Pesan</label>
                <textarea 
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="p-4 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 outline-none transition-all resize-none"
                  placeholder="Tuliskan pesan Anda di sini..."
                />
              </div>
              <div className="sm:col-span-2">
                <button 
                  type="submit"
                  className="h-14 px-10 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <Send className="size-5" /> Kirim Pesan Sekarang
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={antiFlicker}
          className="mt-20 rounded-3xl overflow-hidden border-4 border-white shadow-2xl h-[400px] md:h-[500px] relative z-0"
        >
          <iframe 
            src={CONTACT_INFO.mapsUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi PT. Toyoda Fiber Indonesia"
          />
        </motion.div>
      </Container>
    </div>
  );
}