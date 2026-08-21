import { LucideIcon, Factory, Verified, Lightbulb, HardHat, ArrowRight, CheckCircle, Mail, Phone, MapPin, Globe, Share2, Rss, Clock, Calendar, Eye, Rocket, Grid, Shield, Leaf, Award, Headset, LayoutGrid, ShieldCheck, Menu, Search, ChevronLeft, ChevronRight, AtSign } from 'lucide-react';

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  content?: string;
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

export interface Product {
  id: string;
  title: string;
  subtitle?: string; 
  shortdesc: string;
  description: string;
  image: string;
  category: string;
  benefits?: string[];
  gallery?: string[];
}

export const MAIN_PRODUCTS: Product[] = [
  {
    id: "ipal-medis",
    title: "IPAL MEDIS",
    subtitle: "Vendor IPAL Rumah Sakit & IPAL Puskesmas",
    shortdesc: "<strong>IPAL Medis</strong> (Instalasi Pengolahan Air Limbah Medis) adalah sistem yang digunakan untuk mengolah air limbah yang dihasilkan dari aktivitas fasilitas pelayanan kesehatan, seperti rumah sakit, klinik, laboratorium, puskesmas, dan fasilitas kesehatan lainnya.\n\nAir limbah dari fasilitas kesehatan memiliki karakteristik yang dapat berbeda dengan limbah domestik biasa. Oleh karena itu, <strong>PT TOYODA FIBER INDONESIA</strong> hadir untuk merancang sistem untuk mempertimbangkan sumber limbah, debit air limbah, karakteristik pencemar, serta kebutuhan pengolahan pada masing-masing fasilitas.",
    description: "<strong>IPAL Medis</strong> (Instalasi Pengolahan Air Limbah Medis) adalah sistem yang digunakan untuk mengolah air limbah yang dihasilkan dari aktivitas fasilitas pelayanan kesehatan, seperti rumah sakit, klinik, laboratorium, puskesmas, dan fasilitas kesehatan lainnya.\nAir limbah dari fasilitas kesehatan memiliki karakteristik yang dapat berbeda dengan limbah domestik biasa. Oleh karena itu, PT TOYODA FIBER INDONESIA hadir untuk merancang sistem untuk mempertimbangkan sumber limbah, debit air limbah, karakteristik pencemar, serta kebutuhan pengolahan pada masing-masing fasilitas. \n\n<strong>Mengapa IPAL Medis Diperlukan?</strong> \nKegiatan pelayanan kesehatan menghasilkan air limbah dari berbagai aktivitas, seperti kamar mandi, ruang perawatan, laboratorium, laundry, ruang tindakan, serta kegiatan operasional lainnya. Jika tidak dikelola dengan baik, air limbah tersebut dapat memberikan dampak terhadap lingkungan.\n\n <strong>PT TOYODA FIBER INDONESIA</strong> menyediakan solusi IPAL untuk kebutuhan fasilitas kesehatan dengan mempertimbangkan kondisi dan kebutuhan setiap proyek. Sistem dapat dirancang berdasarkan kapasitas, karakteristik limbah, kondisi lokasi, dan kebutuhan operasional.\nKami mengutamakan penggunaan material fiberglass yang sesuai untuk kebutuhan konstruksi tangki serta memberikan solusi yang praktis, kuat, dan mudah dalam pemeliharaan.",
    benefits: ["Tahan Terhadap Korosi", "Tahan Lama & Minim Perawatan", "Mudah Dibersihkan", "Material Tebal & Kuat"],
    image: "/ipalmedis.png",
    category: "Kesehatan"
  },
  {
    id: "ipal-domestik",
    title: "IPAL DOMESTIK",
    subtitle: "Solusi Pengolahan Limbah Domestik",
    shortdesc: "<strong>IPAL Domestik</strong> (Instalasi Pengolahan Air Limbah Domestik) adalah sistem yang dirancang untuk mengolah air limbah yang berasal dari aktivitas sehari-hari manusia sebelum dialirkan ke lingkungan sesuai dengan ketentuan yang berlaku.\n\nAir limbah domestik dapat berasal dari berbagai aktivitas seperti toilet, kamar mandi, wastafel, dapur, laundry, serta kegiatan operasional pada bangunan dan fasilitas umum. Apabila tidak dikelola dengan baik, air limbah tersebut dapat menimbulkan pencemaran lingkungan dan mengganggu kualitas sumber air.",
    description: "<strong>IPAL Domestik</strong> (Instalasi Pengolahan Air Limbah Domestik) merupakan sistem yang dirancang untuk mengolah air limbah yang berasal dari aktivitas sehari-hari manusia sebelum dialirkan ke lingkungan sesuai dengan ketentuan yang berlaku.\nAir limbah domestik dapat berasal dari berbagai aktivitas seperti toilet, kamar mandi, wastafel, dapur, laundry, serta kegiatan operasional pada bangunan dan fasilitas umum. Apabila tidak dikelola dengan baik, air limbah tersebut dapat menimbulkan pencemaran lingkungan dan mengganggu kualitas sumber air. \n\n<strong>Mengapa IPAL Domestik Dibutuhkan?</strong>\nSetiap bangunan dengan aktivitas manusia menghasilkan air limbah. Pengelolaan yang tepat diperlukan agar limbah tersebut tidak langsung mencemari lingkungan.\nIPAL Domestik membantu melalui proses pengolahan yang bertujuan untuk mengurangi kandungan pencemar dalam air limbah sebelum masuk ke tahap pembuangan atau pengelolaan selanjutnya.\n\n<strong>Dimana Saja IPAL DOMESTIK Dapat Digunakan?</strong>\nIPAL Domestik dapat digunakan untuk berbagai kebutuhan, antara lain:\n🏢 Perkantoran\n🏨 Hotel dan penginapan\n🏘️ Perumahan dan apartemen\n🏫 Sekolah dan institusi pendidikan\n🏥 Fasilitas kesehatan\n🏬 Pusat perbelanjaan dan fasilitas komersial\n🏭 Area industri untuk limbah domestik\n🏗️ Kawasan dan fasilitas umum\n\n<strong>Solusi IPAL DOMESTIK PT TOYODA FIBER INDONESIA\nPT TOYODA FIBER INDONESIA</strong> menyediakan solusi <strong>IPAL Domestik</strong> yang dapat disesuaikan dengan kebutuhan masing-masing proyek. Perencanaan sistem mempertimbangkan kapasitas pengolahan, karakteristik air limbah, ketersediaan area, serta kebutuhan operasional.",
    benefits: ["Tahan Terhadap Korosi", "Tahan Lama & Minim Perawatan", "Mudah Dibersihkan", "Material Tebal & Kuat"],
    image: "/ipaldomestik.jpeg",
    category: "Residensial & Komersial"
  },
  {
    id: "chemical-tank",
    title: "CHEMICAL TANK",
    subtitle: "Penyimpanan Bahan Kimia Aman",
    shortdesc: "<strong>Chemical Tank</strong> merupakan tangki khusus untuk menyimpan dan menampung bahan kimia cair yang digunakan dalam berbagai proses industri, pengolahan air, dan pengolahan air limbah. <strong>PT TOYODA FIBER INDONESIA</strong> menyediakan Chemical Tank berbahan fiberglass/FRP yang dapat disesuaikan dengan kebutuhan kapasitas dan karakteristik bahan kimia yang digunakan.",
    description: "<strong>Chemical Tank</strong> merupakan tangki khusus untuk menyimpan dan menampung bahan kimia cair yang digunakan dalam berbagai proses industri, pengolahan air, dan pengolahan air limbah. <strong>PT TOYODA FIBER INDONESIA</strong> menyediakan Chemical Tank berbahan fiberglass/FRP yang dapat disesuaikan dengan kebutuhan kapasitas dan karakteristik bahan kimia yang digunakan.\n\n🧪<strong> Apa Fungsi Chemical Tank?</strong>\nChemical tank dapat digunakan untuk menyimpan berbagai jenis bahan kimia, misalnya bahan kimia yang digunakan untuk:\n⚗️ Proses koagulasi dan flokulasi\n💧 Pengolahan air dan air limbah\n🦠 Proses desinfeksi\n⚖️ Penyesuaian pH\n🏭 Berbagai kebutuhan proses industri\n\n Jenis bahan kimia yang disimpan harus disesuaikan dengan karakteristik kimia, konsentrasi, temperatur, serta spesifikasi material tangki.\n\nPT TOYODA FIBER INDONESIA menyediakan solusi Chemical Tank fiberglass/FRP untuk berbagai kebutuhan industri dan sistem pengolahan air maupun air limbah.Tangki dapat dirancang dengan mempertimbangkan:\nJenis bahan kimia → Kapasitas → Konsentrasi → Temperatur → Sistem pemasangan → Kondisi lokasi\n\nDengan demikian, chemical tank tidak hanya berfungsi sebagai tempat penyimpanan, tetapi menjadi bagian penting dari sistem pengelolaan bahan kimia yang aman dan terintegrasi.",
    benefits: ["Tahan Terhadap Korosi", "Tahan Lama & Minim Perawatan", "Mudah Dibersihkan", "Material Tebal & Kuat"],
    image: "/chemicaltank.png",
    category: "Industrial"
  },
  {
    id: "paneltank",
    title: "PANELTANK TOYODA",
    subtitle: "Sistem Penyimpanan Air Modular",
    shortdesc: "<strong>Paneltank Fiberglass Toyoda</strong> merupakan tangki penyimpanan modular yang fleksibel dan dapat disesuaikan dengan kebutuhan kapasitas Anda. Dirancang dengan sistem panel terpisah yang mudah dirakit, produk ini menjadi solusi ideal untuk penyimpanan air bersih, limbah, maupun cairan lainnya di berbagai sektor. Dirancang dengan presisi teknik tinggi untuk memberikan solusi penyimpanan air yang paling andal dan tahan lama di pasar Indonesia.",
    description: "Panel Tank merupakan sistem tangki penyimpanan yang tersusun dari beberapa panel yang dirakit menjadi satu konstruksi tangki. Sistem modular ini memungkinkan ukuran dan kapasitas tangki disesuaikan dengan kebutuhan proyek serta kondisi area pemasangan.\nPanel Tank berbahan Fiberglass Reinforced Plastic (FRP) dapat digunakan sebagai solusi penyimpanan air untuk berbagai kebutuhan, baik pada fasilitas komersial, industri, maupun proyek infrastruktur.\n\n💧 <strong>Fungsi Panel Tank</strong>\nPanel Tank dapat dimanfaatkan untuk menyimpan berbagai jenis air sesuai dengan spesifikasi dan peruntukannya, seperti:\n- Air bersih\n- Air baku\n- Air proses industri\n- Air hasil pengolahan\n- Cadangan air pemadam kebakaran\n- Kebutuhan utilitas gedung\n- Kebutuhan penyimpanan air pada kawasan dan fasilitas tertentu\n\n🔧<strong> Mengapa Memilih Panel Tank Fiberglass?</strong>\nSistem panel memberikan fleksibilitas dalam proses perencanaan dan pemasangan. Panel dapat dikirim dalam bentuk komponen kemudian dirakit di lokasi proyek, sehingga dapat menjadi solusi untuk area yang memiliki akses masuk terbatas atau membutuhkan tangki dengan kapasitas besar.\nBeberapa karakteristik yang menjadi keunggulan material FRP antara lain:\n✓ Tahan terhadap korosi\n✓ Konstruksi modular dan fleksibel\n✓ Kapasitas dapat disesuaikan\n✓ Relatif mudah dalam proses pengiriman dan pemasangan\n✓ Cocok untuk berbagai kebutuhan penyimpanan\n✓ Perawatan relatif praktis\n\n🏭 <strong>Panel Tank PT TOYODA FIBER INDONESIA</strong>\nPT TOYODA FIBER INDONESIA menyediakan Panel Tank berbahan fiberglass/FRP yang dapat disesuaikan dengan kebutuhan setiap proyek.\nDalam menentukan desain tangki, beberapa hal yang dapat dipertimbangkan antara lain kapasitas penyimpanan, dimensi, lokasi pemasangan, akses menuju lokasi, jenis air yang disimpan, serta kebutuhan sistem pendukung.\nDengan konsep konstruksi modular, Panel Tank dapat menjadi pilihan untuk proyek yang membutuhkan tangki penyimpanan berkapasitas besar dengan konfigurasi yang fleksibel.",
    image: "/paneltank.png",
    category: "Industrial",
    benefits: ['Anti Korosi', 'Tahan Lama', 'Mudah Dibersihkan', 'Desain Modular'],
    gallery: ['/paneltank1.png', '/paneltank2.png', '/paneltank3.png', '/paneltank4.png']
  }
];

export const OTHER_PRODUCTS: Product[] = [
  {
    id: 'septictank',
    title: 'SEPTICTANK',
    shortdesc: '',
    description: 'Septic tank fiberglass ramah lingkungan yang dirancang untuk pengolahan limbah rumah tangga secara optimal. Kedap air dan dilengkapi sistem filtrasi modern serta disinfektan, produk ini memastikan limbah terurai dengan baik tanpa mencemari lingkungan sekitar.',
    image: '/septic.png',
    category: 'Residensial',
    benefits: ['Instalasi Cepat & Praktis', 'Minim Perawatan', 'Sistem Desinfektan', 'Ramah Lingkungan', 'Kuat & Ringan', 'Mudah Dipasang', 'Bergaransi'],
    gallery: ['/septictank.jpg', '/septictank1.png', '/septictank2.png', '/septictank3.png']
  },
  {
    id: 'storagetank',
    title: 'STORAGETANK',
    shortdesc: '',
    description: 'Storage tank berbahan fiberglass (FRP) yang dirancang untuk menyimpan berbagai jenis cairan, mulai dari air hingga bahan kimia. Dengan kombinasi kekuatan dan ketahanan terhadap korosi, tangki ini menjadi pilihan ideal untuk kebutuhan industri maupun komersial.',
    image: '/storage.png',
    category: 'Industrial',
    benefits: ['Tahan Korosi', 'Material Kuat & Tebal', 'Bergaransi', 'Tahan Tekanan'],
    gallery: ['/storagetank.jpg','/storagetank1.png', '/storagetank2.png', '/storagetank3.png']
  },
  {
    id: 'biostp-mini',
    title: 'BIOSTP MINI',
    shortdesc: '',
    description: 'BIOSTP Mini adalah tangki pengolahan limbah modern dengan teknologi multi-proses yang dirancang oleh PT Toyoda Fiber Indonesia. Telah bersertifikasi SNI dan ISO, produk ini mampu mengolah limbah domestik menjadi lebih ramah lingkungan dengan struktur yang lebih tebal dan kuat dibandingkan septic tank konvensional.',
    image: '/biostp.png',
    category: 'Residensial',
    benefits: ['Bersertifikasi SNI & ISO', 'Ramah Lingkungan', 'Ketebalan 5,6mm', 'Lebih Kuat Dari Produk Sejenis'],
    gallery: ['/biostp1.webp', '/biostp2.webp', '/biostp3.webp', '/biostp4.webp', '/biostp5.webp', '/biostp6.webp']
  },
  {
    id: 'talang',
    title: 'TALANG',
    shortdesc: '',
    description: 'Talang fiberglass berkualitas tinggi yang dirancang untuk mengatasi masalah kebocoran pada sistem drainase bangunan maupun pabrik. Dengan perlindungan UV dan daya tahan tinggi, produk ini tetap awet dan tidak mudah rusak meski digunakan dalam jangka panjang.',
    image: '/talang.png',
    category: 'Industrial',
    benefits: ['Tahan UV', 'Warna Tidak Mudah Pudar', 'Tahan Lama', 'Anti Bocor'],
    gallery: ['/talang.jpg', '/talang1.webp', '/talang2.webp', '/talang3.webp', '/talang4.webp', '/talang5.webp', '/talang6.webp']
  },
  {
    id: 'toilet-portable',
    title: 'TOILET PORTABLE',
    shortdesc: '',
    description: 'Toilet portable berbahan fiberglass yang praktis, kuat, dan mudah dipindahkan. Dilengkapi dengan sistem Bio Septic Tank, produk ini sangat cocok digunakan untuk proyek konstruksi, event outdoor, hingga area wisata.',
    image: '/toilet.png',
    category: 'Komersial',
    benefits: ['Serbaguna & Ringan', 'Mudah Perawatan', 'Sistem Bio Septic Tank', 'Anti UV', 'Mudah Dipindahkan'],
    gallery: ['/toiletportable.jpg', '/toilet3.jpeg', '/toilet4.jpeg', '/toilet1.png', '/toilet2.png']
  },
  {
    id: 'atap',
    title: 'ATAP',
    shortdesc: '',
    description: 'Atap fiberglass dengan teknologi Anti-Ultraviolet yang memberikan perlindungan optimal terhadap panas dan radiasi matahari. Selain kuat dan tahan lama, produk ini juga membantu menghemat energi dengan mengurangi panas yang masuk ke dalam bangunan.',
    image: '/atap.png',
    category: 'Industrial',
    benefits: ['Anti UV', 'Struktur Kuat', 'Hemat Energi', 'Reflektif'],
    gallery: ['/atap.jpg', '/atap1.jpeg', '/atap2.jpeg', '/atap3.jpeg']
  },
  {
    id: 'grp-tank',
    title: 'GRP TANK',
    shortdesc: '',
    description: 'GRP Tank Toyoda merupakan solusi tangki panel berkualitas tinggi dengan desain fleksibel dan material anti karat. Dilengkapi fitur lengkap seperti ventilasi, tangga, dan perlindungan anti UV, produk ini dirancang untuk memenuhi berbagai kebutuhan penyimpanan cairan.',
    image: '/grp.png',
    category: 'Industrial',
    benefits: ['Material Berkualitas', 'Anti Karat', 'Bergaransi', 'Anti UV & Anti Lumut'],
    gallery: ['/grptank.jpg', '/grp1.webp']
  }
];

export const NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Komitmen Mutu dan Inovasi dalam Industri Fiberglass Nasional – Toyoda Fiber Indonesia',
    description: 'Beroperasi selama lebih dari satu dekade, PT Toyoda Fiber Indonesia telah mengukuhkan posisinya sebagai produsen fiberglass terdepan di Indonesia.',
    content: `Beroperasi selama lebih dari satu dekade, PT Toyoda Fiber Indonesia telah mengukuhkan posisinya sebagai produsen fiberglass terdepan di Indonesia. Berdiri sejak tahun 2010, perusahaan ini terus menunjukkan perkembangan pesat dengan tetap berpegang pada prinsip utama yaitu kualitas, pelayanan, serta inovasi berkelanjutan.

Perusahaan yang beralamat di Jl. Raya Belimbing No.200, Kosambi, Tangerang, Banten, menawarkan berbagai jenis produk fiberglass yang dirancang untuk kebutuhan infrastruktur, industri, dan perumahan. Fokus utama perusahaan adalah menghasilkan produk berstandar tinggi, baik dalam hal desain, daya tahan, hingga efisiensi penggunaan.

Produk-produk andalan PT Toyoda Fiber Indonesia mencakup:

- IPAL – WWTP dan STP: Menjawab kebutuhan sistem pengolahan air limbah di berbagai sektor.
- Septic Tank & Panel Tank: Solusi pengolahan air limbah rumah tangga dan gedung bertingkat.
- Storage Tank & Talang: Didesain untuk penampungan cairan, termasuk air dan bahan kimia.
- Toilet Portable: Praktis dan higienis untuk kebutuhan lokasi proyek, wisata, dan area publik.
- Atap Fiberglass: Memberikan penerangan alami serta ketahanan terhadap suhu dan cuaca ekstrem.

Dengan dukungan sertifikasi lengkap seperti ISO, SNI, dan KAN, PT Toyoda Fiber Indonesia memastikan setiap produk telah melewati proses pengujian ketat dan layak untuk digunakan dalam jangka panjang. Perusahaan juga telah mendaftarkan hak paten atas mereknya, menandakan komitmen dalam menjaga orisinalitas dan kualitas inovasi produk.

Tidak hanya fokus pada produksi, Toyoda Fiber juga sangat memperhatikan pelayanan pelanggan. Mulai dari proses pemesanan, produksi custom, pengiriman, hingga layanan after sales, semuanya dilakukan dengan profesional dan cepat. Hal ini menjadikan Toyoda Fiber sebagai mitra terpercaya dalam berbagai proyek pemerintah dan swasta.

PT Toyoda Fiber Indonesia terus mendorong semangat inovasi dan keberlanjutan dalam setiap produknya, demi mendukung kemajuan pembangunan di Indonesia.

Kontak kami :
Whatsapp / Telp: 08111999777
Email: toyodafiber.id@gmail.com
Website: www.toyodafibreglass.com`,
    image: '/artikel3.jpg',
    category: 'Artikel',
    date: '21 Agustus 2026',
    readTime: '5 Menit'
  },
  {
    id: '2',
    title: 'Solusi Infrastruktur Modern & Ramah Lingkungan Bersama PT Toyoda Fiber Indonesia',
    description: 'Di tengah tuntutan akan infrastruktur yang efisien, tahan lama, dan ramah lingkungan, PT Toyoda Fiber Indonesia hadir sebagai jawaban dengan produk-produk berbahan dasar fiberglass.',
    content: `Di tengah tuntutan akan infrastruktur yang efisien, tahan lama, dan ramah lingkungan, PT Toyoda Fiber Indonesia hadir sebagai jawaban dengan produk-produk berbahan dasar fiberglass yang terbukti unggul dari segi kualitas dan ketahanan. Didirikan sejak tahun 2010, perusahaan ini telah menunjukkan pertumbuhan signifikan berkat konsistensinya dalam menjaga standar mutu internasional serta orientasi terhadap kepuasan pelanggan.

Fiberglass, sebagai bahan utama dalam setiap produk Toyoda Fiber, dikenal memiliki banyak kelebihan dibandingkan bahan konvensional seperti beton atau logam. Fiberglass tidak mudah berkarat, ringan, namun tetap kokoh, serta mampu bertahan dalam kondisi cuaca ekstrem. Kombinasi ini menjadikannya pilihan ideal untuk berbagai kebutuhan bangunan dan fasilitas industri.

PT Toyoda Fiber Indonesia memproduksi berbagai solusi infrastruktur seperti :

- IPAL & STP: Untuk pengolahan limbah domestik dan industri secara efektif, mendukung program pelestarian lingkungan.
- Septic Tank dan Panel Tank: Solusi penampungan air dan limbah dengan kapasitas bervariasi dan desain fleksibel.
- Storage Tank & Talang Air: Tahan terhadap zat kimia dan cocok digunakan di lingkungan industri.
- Toilet Portable: Cocok untuk kebutuhan proyek konstruksi, event outdoor, dan area publik.
- Atap Fiberglass: Tahan panas, ringan, dan memberikan pencahayaan alami.

Dengan sertifikasi SNI, ISO, dan KAN, serta dukungan hak paten merek, PT Toyoda Fiber Indonesia menjamin kualitas dan keandalan setiap produk yang keluar dari pabriknya. Tidak hanya itu, layanan purna jual dan garansi juga menjadi bagian penting dari nilai tambah perusahaan ini.

Kualitas produk Toyoda Fiber telah dibuktikan melalui implementasi di berbagai proyek nasional maupun swasta, mulai dari perumahan skala besar, fasilitas industri, pabrik, hingga perusahaan energi dan lingkungan. Dukungan tim teknis yang profesional juga menjadikan setiap proyek berjalan optimal.

Hubungi kami untuk konsultasi dan penawaran :
Telp / WA: 08111999777
Email: toyodafiber.id@gmail.com
Website: www.toyodafibreglass.com`,
    image: '/artikel2.jpg',
    category: 'Inovasi',
    date: '21 Agustus 2026',
    readTime: '4 Menit'
  },
  {
    id: '3',
    title: 'PT Toyoda Fiber Indonesia – Produsen Fiberglass Berkualitas dengan Standar Internasional',
    description: 'Sejak didirikan pada tahun 2010, PT Toyoda Fiber Indonesia telah menjadi pionir dalam industri manufaktur produk berbahan dasar fiberglass di Indonesia.',
    content: `Sejak didirikan pada tahun 2010, PT Toyoda Fiber Indonesia telah menjadi pionir dalam industri manufaktur produk berbahan dasar fiberglass di Indonesia. Berlokasi di Jl. Raya Belimbing No.200, Belimbing, Kosambi, Kabupaten Tangerang, Banten 15212, perusahaan ini dikenal luas sebagai penyedia solusi fiberglass berkualitas tinggi, dengan komitmen utama pada kepuasan pelanggan, kualitas produk, serta layanan purna jual yang maksimal.

PT Toyoda Fiber Indonesia hadir dengan visi untuk memenuhi kebutuhan infrastruktur dan industri akan produk fiberglass yang kuat, tahan lama, dan efisien. Dengan mengedepankan bahan baku terbaik, teknologi manufaktur terkini, serta dukungan tenaga ahli berpengalaman, perusahaan ini mampu menghasilkan produk-produk berstandar tinggi yang telah mendapatkan sertifikasi SNI, ISO, dan KAN, serta paten merek resmi yang menambah nilai eksklusif bagi setiap produk yang dipasarkan.

Beberapa produk unggulan yang diproduksi oleh PT Toyoda Fiber Indonesia antara lain:

- IPAL – WWTP (Instalasi Pengolahan Air Limbah / Waste Water Treatment Plant)
- STP (Sewage Treatment Plant)
- Panel Tank & Septic Tank
- Storage Tank & Talang Air
- Toilet Portable & Modular
- Atap Fiberglass berkualitas tinggi

Produk-produk ini tidak hanya digunakan oleh masyarakat umum, namun juga telah dipercaya oleh perusahaan dan industri ternama di seluruh Indonesia. Komitmen pada mutu dan ketahanan membuat produk dari Toyoda Fiber menjadi pilihan utama dalam berbagai proyek pembangunan, baik itu proyek perumahan, industri, rumah sakit, hingga perkantoran.

PT Toyoda Fiber Indonesia juga memberikan layanan konsultasi dan penyesuaian produk sesuai kebutuhan konsumen. Tidak hanya sekadar menjual, tetapi memberikan solusi menyeluruh, mulai dari desain, produksi, instalasi, hingga perawatan pasca pemasangan.

Untuk informasi lebih lanjut dan pemesanan, Anda dapat menghubungi:

Whatsapp / Telephone: 08111999777
Email: toyodafiber.id@gmail.com
Website: www.toyodafibreglass.com`,
    image: '/artikel1.jpg',
    category: 'Artikel',
    date: '21 Agustus 2026',
    readTime: '5 Menit'
  }
];

export const CONTACT_INFO = {
  phone: '08111999777',
  whatsapp: '628111999777',
  email: 'toyodafiber.id@gmail.com',
  address: 'Jl. Raya Belimbing No.200, Belimbing, Kec. Kosambi, Kabupaten Tangerang, Banten 15212',
  instagram: 'https://www.instagram.com/toyoda.fiberglass?igsh=MWNva2RhMHZieTVkcA%3D%3D',
  mapsLink: 'https://maps.app.goo.gl/v8A3FSfuyRRWN61W8',
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

