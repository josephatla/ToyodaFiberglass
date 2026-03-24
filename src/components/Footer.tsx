import { Factory, Mail, Phone, MapPin, Share2, Rss, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '@/src/components/Container';
import { CONTACT_INFO, PRODUCTS } from '@/src/constants';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-blue-100 pt-16 md:pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="size-8 bg-white rounded flex items-center justify-center shadow-lg shadow-blue-600/20 overflow-hidden text-blue-600">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
                <Factory className="size-5 hidden" />
              </div>
              <span className="text-lg font-bold text-slate-900">PT. Toyoda Fiber Indonesia</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Produsen terkemuka tangki fiberglass industri dan sistem pengolahan berkualitas tinggi di Indonesia. Berkomitmen pada keunggulan dan daya tahan sejak 2010.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-900">Tautan Cepat</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/" className="hover:text-blue-600 transition-colors font-medium">Beranda</Link></li>
              <li><Link to="/products" className="hover:text-blue-600 transition-colors font-medium">Produk Kami</Link></li>
              <li><Link to="/gallery" className="hover:text-blue-600 transition-colors font-medium">Galeri Proyek</Link></li>
              <li><Link to="/news" className="hover:text-blue-600 transition-colors font-medium">Artikel</Link></li>
              <li><Link to="/about" className="hover:text-blue-600 transition-colors font-medium">Tentang Kami</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors font-medium">Kontak</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-900">Produk Unggulan</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              {PRODUCTS.slice(0, 5).map(product => (
                <li key={product.id}>
                  <Link to={`/products/${product.id}`} className="hover:text-blue-600 transition-colors font-medium">
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-900">Informasi Kontak</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex gap-3">
                <MapPin className="size-5 text-blue-600 shrink-0" />
                <span className="font-medium">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="size-5 text-blue-600 shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="font-medium hover:text-blue-600">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="size-5 text-blue-600 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="font-medium hover:text-blue-600">{CONTACT_INFO.email}</a>
              </li>
              <li className="flex gap-3">
                <Instagram className="size-5 text-blue-600 shrink-0" />
                <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-blue-600">@toyoda.fiberglass</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-blue-50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs text-slate-400">
          <p>© 2025 PT. Toyoda Fiber Indonesia. Hak cipta dilindungi undang-undang.</p>
        </div>
      </Container>
    </footer>
  );
}
