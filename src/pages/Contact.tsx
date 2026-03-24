import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram } from 'lucide-react';
import { CONTACT_INFO } from '@/src/constants';
import Container from '@/src/components/Container';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="flex flex-col w-full py-12 md:py-20">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-blue-600 mb-4"
          >
            <Mail className="size-5" />
            <span className="font-bold uppercase tracking-widest text-xs">Hubungi Kami</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6"
          >
            Mari Berdiskusi Tentang Proyek Anda
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg"
          >
            Tim ahli kami siap membantu memberikan solusi fiberglass terbaik untuk kebutuhan industri atau residensial Anda.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="size-12 rounded-xl bg-blue-600 flex items-center justify-center text-white mb-6">
                <Phone className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Telepon Resmi</h3>
              <p className="text-slate-500 text-sm mb-4">Hubungi kami langsung untuk respon cepat.</p>
              <div className="flex flex-col gap-2">
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-blue-600 font-bold hover:underline">{CONTACT_INFO.phone}</a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="size-12 rounded-xl bg-blue-600 flex items-center justify-center text-white mb-6">
                <Mail className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Email Resmi</h3>
              <p className="text-slate-500 text-sm mb-4">Kirimkan detail proyek atau pertanyaan Anda.</p>
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-blue-600 font-bold hover:underline">{CONTACT_INFO.email}</a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="size-12 rounded-xl bg-blue-600 flex items-center justify-center text-white mb-6">
                <Instagram className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Instagram</h3>
              <p className="text-slate-500 text-sm mb-4">Ikuti kami untuk update terbaru.</p>
              <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">@toyoda.fiberglass</a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="size-12 rounded-xl bg-blue-600 flex items-center justify-center text-white mb-6">
                <MapPin className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Alamat Kantor</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{CONTACT_INFO.address}</p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl border border-blue-100 shadow-xl"
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl overflow-hidden border-4 border-white shadow-2xl h-[400px] md:h-[500px]"
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
