import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Factory, Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import Container from '@/src/components/Container';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Produk', href: '/products' },
    { name: 'Galeri', href: '/gallery' },
    { name: 'Artikel', href: '/news' },
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Kontak', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-100 bg-white/95 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center size-10 rounded-lg text-blue-600 shadow-blue-600/20 overflow-hidden">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
              <Factory className="size-6 hidden" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">PT. Toyoda Fiber Indonesia</h2>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-bold transition-all hover:text-blue-600",
                  location.pathname === link.href ? "text-blue-600" : "text-slate-500"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link 
              to="/contact"
              className="hidden lg:flex min-w-[140px] items-center justify-center rounded-full h-11 px-6 bg-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:translate-y-[-1px] transition-all"
            >
              Hubungi Kami
            </Link>
            <button 
              className="md:hidden text-slate-900 p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-blue-100 px-4 py-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block text-base font-bold text-slate-900 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center rounded-full h-11 px-6 bg-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all"
          >
            Hubungi Kami
          </Link>
        </div>
      )}
    </header>
  );
}
