import { LucideIcon, Factory, Verified, Lightbulb, HardHat, ArrowRight, CheckCircle, Mail, Phone, MapPin, Globe, Share2, Rss, Clock, Calendar, Eye, Rocket, Grid, Shield, Leaf, Award, Headset, LayoutGrid, ShieldCheck, Menu, Search, ChevronLeft, ChevronRight, AtSign } from 'lucide-react';

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  benefits?: string[];
  gallery?: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'ipal-wwtp-stp',
    title: 'IPAL - WWTP, STP',
    description: 'Sistem Instalasi Pengolahan Air Limbah (IPAL) berbahan fiberglass dari Toyoda dirancang untuk memberikan solusi pengolahan limbah yang efisien, tahan lama, dan ramah lingkungan. Menggunakan material Fiber Reinforced Plastic (FRP), sistem ini memiliki ketahanan tinggi terhadap korosi, ringan, namun tetap kokoh, sehingga sangat cocok digunakan pada sektor industri, perumahan, hingga fasilitas publik.',
    image: '/ipal.jpg',
    category: 'Industrial',
    benefits: [
      'Tahan Terhadap Korosi',
      'Tahan Lama & Minim Perawatan',
      'Mudah Dibersihkan',
      'Material Tebal & Kuat'
    ],
    gallery: [
      '/ipal1.webp',
      '/ipal2.webp',
      '/ipal3.webp',
      '/ipal8.webp',
      '/ipal4.webp',
      '/ipal5.webp',
      '/ipal6.webp',
      '/ipal7.webp',
      '/ipal9.webp',
      '/ipal10.webp',
    ]
  },
  {
    id: 'paneltank',
    title: 'PANELTANK',
    description: 'Paneltank fiberglass Toyoda merupakan tangki penyimpanan modular yang fleksibel dan dapat disesuaikan dengan kebutuhan kapasitas Anda. Dirancang dengan sistem panel terpisah yang mudah dirakit, produk ini menjadi solusi ideal untuk penyimpanan air bersih, limbah, maupun cairan lainnya di berbagai sektor.',
    image: '/paneltank.jpg',
    category: 'Industrial',
    benefits: [
      'Anti Korosi',
      'Tahan Lama',
      'Mudah Dibersihkan',
      'Desain Modular'
    ],
    gallery: [
      '/paneltank1.png',
      '/paneltank2.png',
      '/paneltank3.png',
      '/paneltank4.png',
    ]
  },
  {
    id: 'septictank',
    title: 'SEPTICTANK',
    description: 'Septic tank fiberglass ramah lingkungan yang dirancang untuk pengolahan limbah rumah tangga secara optimal. Kedap air dan dilengkapi sistem filtrasi modern serta disinfektan, produk ini memastikan limbah terurai dengan baik tanpa mencemari lingkungan sekitar.',
    image: '/septictank.jpg',
    category: 'Residensial',
    benefits: [
      'Instalasi Cepat & Praktis',
      'Minim Perawatan',
      'Sistem Desinfektan',
      'Ramah Lingkungan',
      'Kuat & Ringan',
      'Mudah Dipasang',
      'Bergaransi'
    ],
    gallery: [
      '/septictank1.png',
      '/septictank2.png',
      '/septictank3.png',
      
    ]
  },
  {
    id: 'storagetank',
    title: 'STORAGETANK',
    description: 'Storage tank berbahan fiberglass (FRP) yang dirancang untuk menyimpan berbagai jenis cairan, mulai dari air hingga bahan kimia. Dengan kombinasi kekuatan dan ketahanan terhadap korosi, tangki ini menjadi pilihan ideal untuk kebutuhan industri maupun komersial.',
    image: '/storagetank.jpg',
    category: 'Industrial',
    benefits: [
      'Tahan Korosi',
      'Material Kuat & Tebal',
      'Bergaransi',
      'Tahan Tekanan'
    ],
    gallery: [
      '/storagetank1.png',
      '/storagetank2.png',
      '/storagetank3.png',
    ]
  },
  {
    id: 'biostp-mini',
    title: 'BIOSTP MINI',
    description: 'BIOSTP Mini adalah tangki pengolahan limbah modern dengan teknologi multi-proses yang dirancang oleh PT Toyoda Fiber Indonesia. Telah bersertifikasi SNI dan ISO, produk ini mampu mengolah limbah domestik menjadi lebih ramah lingkungan dengan struktur yang lebih tebal dan kuat dibandingkan septic tank konvensional.',
    image: '/biostpmini.webp',
    category: 'Residensial',
    benefits: [
      'Bersertifikasi SNI & ISO',
      'Ramah Lingkungan',
      'Ketebalan 5,6mm',
      'Lebih Kuat Dari Produk Sejenis'
    ],
    gallery: [
      '/biostp1.webp',
      '/biostp2.webp',
      '/biostp3.webp',
      '/biostp4.webp',
      '/biostp5.webp',
      '/biostp6.webp',
    ]
  },
  {
    id: 'talang',
    title: 'TALANG',
    description: 'Talang fiberglass berkualitas tinggi yang dirancang untuk mengatasi masalah kebocoran pada sistem drainase bangunan maupun pabrik. Dengan perlindungan UV dan daya tahan tinggi, produk ini tetap awet dan tidak mudah rusak meski digunakan dalam jangka panjang.',
    image: '/talang.jpg',
    category: 'Industrial',
    benefits: [
      'Tahan UV',
      'Warna Tidak Mudah Pudar',
      'Tahan Lama',
      'Anti Bocor'
    ],
    gallery: [
      '/talang1.webp',
      '/talang2.webp',
      '/talang3.webp',
      '/talang4.webp',
      '/talang5.webp',
      '/talang6.webp',
    ]
  },
  {
    id: 'toilet-portable',
    title: 'TOILET PORTABLE',
    description: 'Toilet portable berbahan fiberglass yang praktis, kuat, dan mudah dipindahkan. Dilengkapi dengan sistem Bio Septic Tank, produk ini sangat cocok digunakan untuk proyek konstruksi, event outdoor, hingga area wisata.',
    image: '/toiletportable.jpg',
    category: 'Komersial',
    benefits: [
      'Serbaguna & Ringan',
      'Mudah Perawatan',
      'Sistem Bio Septic Tank',
      'Anti UV',
      'Mudah Dipindahkan'
    ],
    gallery: [
      '/toilet1.png',
      '/toilet2.png',
      '/toilet3.png',
      '/toilet4.png',
    ]
  },
  {
    id: 'atap',
    title: 'ATAP',
    description: 'Atap fiberglass dengan teknologi Anti-Ultraviolet yang memberikan perlindungan optimal terhadap panas dan radiasi matahari. Selain kuat dan tahan lama, produk ini juga membantu menghemat energi dengan mengurangi panas yang masuk ke dalam bangunan.',
    image: '/atap.jpg',
    category: 'Industrial',
    benefits: [
      'Anti UV',
      'Struktur Kuat',
      'Hemat Energi',
      'Reflektif'
    ],
    gallery: [
      '/atap.jpg',
    ]
  },
  {
    id: 'grp-tank',
    title: 'GRP TANK',
    description: 'GRP Tank Toyoda merupakan solusi tangki panel berkualitas tinggi dengan desain fleksibel dan material anti karat. Dilengkapi fitur lengkap seperti ventilasi, tangga, dan perlindungan anti UV, produk ini dirancang untuk memenuhi berbagai kebutuhan penyimpanan cairan.',
    image: '/grptank.jpg',
    category: 'Industrial',
    benefits: [
      'Material Berkualitas',
      'Anti Karat',
      'Bergaransi',
      'Anti UV & Anti Lumut'
    ],
    gallery: [
      '/grp1.webp',
    ]
  }
];

export const NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Komitmen Mutu dan Inovasi dalam Industri Fiberglass Nasional',
    description: 'PT. Toyoda Fiber Indonesia terus berinovasi dalam menghadirkan produk fiberglass berkualitas tinggi dengan standar internasional untuk mendukung pembangunan infrastruktur di Indonesia.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALDenaFmsy0lfaoxD7ET9naMUz6_R03yxx8UzqX-qwiUdvV_2yy3HeEZw6IshBMxVwJaH5izzl28UtjE8SRUl6TF7TlCMMWqYt1vNZjd4H6WcBLPSAw61RcCOCGYg6Nts16zGhchuPN6M-l7h8zLAjyBvB3jD8NhHJ6a5q3SxplVdPwr5WnQjWoGrm_J2RT53UIJwr5I_7gnPXoelXvtQFLUW3Df7ZnpYddc85F0DP7HMa18jrpIi14SNpjU7OMBRC_oX69WuuVQ',
    category: 'Artikel',
    date: '15 Maret 2024',
    readTime: '5 Menit'
  },
  {
    id: '2',
    title: 'Solusi Infrastruktur Modern & Ramah Lingkungan',
    description: 'Penerapan sistem IPAL dan Septic Tank Bio dari PT. Toyoda Fiber Indonesia membantu menciptakan lingkungan yang lebih bersih dan sehat bagi masyarakat luas.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOi2zr9vn_GIBBZgkcheeIcvOAFUQudtcuJ62vCY9S_0YTrdnigkJLgb-Oj7kS-mtbwOijgO-dOjLs_ACrh2akWDCb4FFn7Lsdcdg-ewW1pkOfhQQMP2ZbgtNv3JOIk5zI3csL2-n8dgtovR-Fen_7NudBMjfmaC4bpnNc4S9uR9pzp49jRTSDlKkxYIAAzs-h2sByjpFWSkT302uqdHScSaL40FcuebDwR0plZtCo8aFoGCe2eLMNh_3amqhzzPtM8ulBabw66A',
    category: 'Inovasi',
    date: '10 Maret 2024',
    readTime: '4 Menit'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Pemasangan Panel Tank di Gedung Perkantoran Jakarta',
    description: 'Penyediaan tangki air modular kapasitas besar untuk kebutuhan operasional gedung perkantoran di pusat bisnis Jakarta.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiN9gZ9pxF2MDwsJGy4bRjcJNKLX4eXk8nXN-EuECkiTL2_fBCEIHfWcqX9DfxyYUVKVpN--jGGhK5fabcyqQ9oIiSn1X167zt4BfHTXIAmYZTRpbY060dEpoYR34N9MAuV-CSBdZiz8IFKvcxhvv4-b3JlUjSniJviog6XfgTXANYTWnqGSxlk85UCcvDomltBP6Uses00EnC1krsvpZ8CrtfvevmJQi5q58Dyq9jcGqEqMOdy-k0MPkY8hyaJx1dWDRNuowGmg',
    category: 'Industrial'
  },
  {
    id: '2',
    title: 'Sistem IPAL Industri di Kawasan Industri Bekasi',
    description: 'Instalasi pengolahan air limbah terpadu untuk pabrik manufaktur guna memenuhi standar baku mutu lingkungan.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAt4Qb5BYq0c_eHDJXxaSPjxTLUsxAffbOcy-PDO-Wmoycml4LUmVBvuHpz_-yzbc6ysL-4yhZLdchK6zb-OBcxo1k2g7SRaWRnxR9goLet1XhLGjKkuZqCAqapO2Cx_K8TygpbnA_SAG044BSruWc5_sXxRIOu2IYRcWuU4o4NfnKvprD9CKWcMVyvnIS7GdKt-L4DnXeSPwiFxzmvlLrnwSZMYk7kZnhzaP_TKZ5my7Zej8fsB8KvTCeQZX2ALyHuJ-n92seruQ',
    category: 'Industrial'
  },
  {
    id: '3',
    title: 'Septic Tank Bio untuk Perumahan Elit di Tangerang',
    description: 'Penyediaan sistem sanitasi ramah lingkungan untuk kawasan hunian modern yang mengutamakan kebersihan air tanah.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfkB4w63EPSxa9VhOWX78u_GeIenL7A_ykvZASL-Lyk7v2z1aNJ7hFrdDasHNLEJWrgtULTGJTqHa1l1KK6Eyzqz8HD11QPTbVqR7YqBtuMTrEN1cio2NaLA6VWlHfaiqekDbm_IS9xiy8URFRSW-nfvGPDPhlpJMGDUDmvUb651ZhFXNbQrf8taSUEss2C-TKTXSTOK4DH5Pth9s3wpGSSDUAECQjSEU-EL6cUDHwunCXrW3-FWOC1_XOdRvXJkowrcYldugM6Q',
    category: 'Residensial'
  },
  {
    id: '4',
    title: 'Pemasangan Talang FRP di Gudang Logistik Surabaya',
    description: 'Aplikasi talang fiberglass tahan korosi untuk sistem drainase atap gudang penyimpanan skala besar.',
    image: 'https://picsum.photos/seed/project4/800/600',
    category: 'Industrial'
  }
];

export const CONTACT_INFO = {
  phone: '08111999777',
  whatsapp: '628111999777',
  email: 'toyodafiber.id@gmail.com',
  address: 'Jl. Raya Belimbing No.200, Belimbing, Kec. Kosambi, Kabupaten Tangerang, Banten 15212',
  instagram: 'https://www.instagram.com/toyoda.fiberglass?igsh=MWNva2RhMHZieTVkcA%3D%3D',
  mapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.1423184650637!2d106.6673466758652!3d-6.097254093889163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a03ac10b63243%3A0xccd8219d6b7f42ee!2sPt.%20Toyoda%20Fiber%20Indonesia!5e0!3m2!1sen!2sid!4v1710480000000!5m2!1sen!2sid'
};


export const MAIN_GALLERY: string[] = [
  'galeri1.jpeg',
  'galeri2.jpeg',
  'galeri3.jpeg',
  'galeri4.jpg',
  'galeri5.jpg',
  'galeri6.jpg',
  'galeri7.png',
  'galeri8.png',
  'galeri9.png',
  'galeri10.png',
  'galeri11.png',
  'galeri12.png',
];

