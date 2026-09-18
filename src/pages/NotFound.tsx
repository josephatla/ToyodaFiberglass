import { Link } from 'react-router-dom';
import Container from '@/src/components/Container';
import SEO from '@/src/components/SEO';

export default function NotFound() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden min-h-[60vh] justify-center">
      <SEO 
        title="Halaman Tidak Ditemukan | PT Toyoda Fiber Indonesia" 
        description="Maaf, halaman yang Anda cari tidak dapat ditemukan."
      />
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-6xl font-black text-slate-900 mb-6">404</h1>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Halaman Tidak Ditemukan</h2>
          <p className="text-slate-600 mb-8">Maaf, halaman yang Anda cari mungkin telah dihapus, namanya diubah, atau sementara tidak tersedia.</p>
          <Link to="/" className="inline-flex items-center justify-center h-12 px-8 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all">
            Kembali ke Beranda
          </Link>
        </div>
      </Container>
    </div>
  );
}
