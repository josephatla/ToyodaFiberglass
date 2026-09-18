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

export const FAQS = [
  {
    q: "Apa itu IPAL dan apa fungsinya?",
    a: "IPAL (Instalasi Pengolahan Air Limbah) adalah sistem yang digunakan untuk mengolah air limbah agar kualitasnya memenuhi baku mutu sebelum dibuang atau dimanfaatkan kembali. IPAL membantu mengurangi pencemaran lingkungan dan menjaga kualitas air."
  },
  {
    q: "Apakah setiap perusahaan atau usaha membutuhkan IPAL?",
    a: "Kebutuhan IPAL bergantung pada jenis kegiatan, sumber dan karakteristik limbah, serta ketentuan lingkungan yang berlaku. Usaha seperti hotel, restoran, rumah sakit, pabrik, perkantoran, dan fasilitas umum umumnya membutuhkan sistem pengolahan limbah yang sesuai."
  },
  {
    q: "Bagaimana cara menentukan kapasitas IPAL yang tepat?",
    a: "Kapasitas IPAL ditentukan berdasarkan jumlah debit limbah yang dihasilkan per hari, jumlah pengguna, karakteristik limbah, serta target kualitas air hasil olahan. Perhitungan yang tepat diperlukan agar IPAL bekerja optimal dan efisien."
  },
  {
    q: "Mengapa memilih PT Toyoda Fiber Indonesia sebagai vendor IPAL?",
    a: "PT Toyoda Fiber Indonesia menyediakan solusi IPAL berbahan fiberglass (FRP) yang dapat disesuaikan dengan kebutuhan proyek, mulai dari konsultasi, produksi, instalasi hingga layanan purna jual. Produk dan layanan dapat disesuaikan dengan kebutuhan kapasitas serta standar yang dipersyaratkan."
  }
];

export const MAIN_PRODUCTS: Product[] = [
  {
    id: "ipal-medis",
    title: "IPAL Medis Fiberglass",
    subtitle: "Vendor IPAL Rumah Sakit & IPAL Puskesmas",
    shortdesc: "<strong>IPAL Medis</strong> (Instalasi Pengolahan Air Limbah Medis) adalah sistem yang digunakan untuk mengolah air limbah yang dihasilkan dari aktivitas fasilitas pelayanan kesehatan, seperti rumah sakit, klinik, laboratorium, puskesmas, dan fasilitas kesehatan lainnya.\n\nAir limbah dari fasilitas kesehatan memiliki karakteristik yang dapat berbeda dengan limbah domestik biasa. Oleh karena itu, <strong>PT TOYODA FIBER INDONESIA</strong> hadir untuk merancang sistem untuk mempertimbangkan sumber limbah, debit air limbah, karakteristik pencemar, serta kebutuhan pengolahan pada masing-masing fasilitas.",
    description: "<strong>IPAL Medis</strong> (Instalasi Pengolahan Air Limbah Medis) adalah sistem yang digunakan untuk mengolah air limbah yang dihasilkan dari aktivitas fasilitas pelayanan kesehatan, seperti rumah sakit, klinik, laboratorium, puskesmas, dan fasilitas kesehatan lainnya.\nAir limbah dari fasilitas kesehatan memiliki karakteristik yang dapat berbeda dengan limbah domestik biasa. Oleh karena itu, PT TOYODA FIBER INDONESIA hadir untuk merancang sistem untuk mempertimbangkan sumber limbah, debit air limbah, karakteristik pencemar, serta kebutuhan pengolahan pada masing-masing fasilitas. \n\n<strong>Mengapa IPAL Medis Diperlukan?</strong> \nKegiatan pelayanan kesehatan menghasilkan air limbah dari berbagai aktivitas, seperti kamar mandi, ruang perawatan, laboratorium, laundry, ruang tindakan, serta kegiatan operasional lainnya. Jika tidak dikelola dengan baik, air limbah tersebut dapat memberikan dampak terhadap lingkungan.\n\n <strong>PT TOYODA FIBER INDONESIA</strong> menyediakan solusi IPAL untuk kebutuhan fasilitas kesehatan dengan mempertimbangkan kondisi dan kebutuhan setiap proyek. Sistem dapat dirancang berdasarkan kapasitas, karakteristik limbah, kondisi lokasi, dan kebutuhan operasional.\nKami mengutamakan penggunaan material fiberglass yang sesuai untuk kebutuhan konstruksi tangki serta memberikan solusi yang praktis, kuat, dan mudah dalam pemeliharaan.",
    benefits: ["Tahan Terhadap Korosi", "Tahan Lama & Minim Perawatan", "Mudah Dibersihkan", "Material Tebal & Kuat"],
    image: "/ipalmedis.webp",
    category: "Kesehatan"
  },
  {
    id: "ipal-domestik",
    title: "IPAL Domestik Fiberglass",
    subtitle: "Solusi Pengolahan Limbah Domestik",
    shortdesc: "<strong>IPAL Domestik</strong> (Instalasi Pengolahan Air Limbah Domestik) adalah sistem yang dirancang untuk mengolah air limbah yang berasal dari aktivitas sehari-hari manusia sebelum dialirkan ke lingkungan sesuai dengan ketentuan yang berlaku.\n\nAir limbah domestik dapat berasal dari berbagai aktivitas seperti toilet, kamar mandi, wastafel, dapur, laundry, serta kegiatan operasional pada bangunan dan fasilitas umum. Apabila tidak dikelola dengan baik, air limbah tersebut dapat menimbulkan pencemaran lingkungan dan mengganggu kualitas sumber air.",
    description: "<strong>IPAL Domestik</strong> (Instalasi Pengolahan Air Limbah Domestik) merupakan sistem yang dirancang untuk mengolah air limbah yang berasal dari aktivitas sehari-hari manusia sebelum dialirkan ke lingkungan sesuai dengan ketentuan yang berlaku.\nAir limbah domestik dapat berasal dari berbagai aktivitas seperti toilet, kamar mandi, wastafel, dapur, laundry, serta kegiatan operasional pada bangunan dan fasilitas umum. Apabila tidak dikelola dengan baik, air limbah tersebut dapat menimbulkan pencemaran lingkungan dan mengganggu kualitas sumber air. \n\n<strong>Mengapa IPAL Domestik Dibutuhkan?</strong>\nSetiap bangunan dengan aktivitas manusia menghasilkan air limbah. Pengelolaan yang tepat diperlukan agar limbah tersebut tidak langsung mencemari lingkungan.\nIPAL Domestik membantu melalui proses pengolahan yang bertujuan untuk mengurangi kandungan pencemar dalam air limbah sebelum masuk ke tahap pembuangan atau pengelolaan selanjutnya.\n\n<strong>Dimana Saja IPAL DOMESTIK Dapat Digunakan?</strong>\nIPAL Domestik dapat digunakan untuk berbagai kebutuhan, antara lain:\n🏢 Perkantoran\n🏨 Hotel dan penginapan\n🏘️ Perumahan dan apartemen\n🏫 Sekolah dan institusi pendidikan\n🏥 Fasilitas kesehatan\n🏬 Pusat perbelanjaan dan fasilitas komersial\n🏭 Area industri untuk limbah domestik\n🏗️ Kawasan dan fasilitas umum\n\n<strong>Solusi IPAL DOMESTIK PT TOYODA FIBER INDONESIA\nPT TOYODA FIBER INDONESIA</strong> menyediakan solusi <strong>IPAL Domestik</strong> yang dapat disesuaikan dengan kebutuhan masing-masing proyek. Perencanaan sistem mempertimbangkan kapasitas pengolahan, karakteristik air limbah, ketersediaan area, serta kebutuhan operasional.",
    benefits: ["Tahan Terhadap Korosi", "Tahan Lama & Minim Perawatan", "Mudah Dibersihkan", "Material Tebal & Kuat"],
    image: "/ipaldomestik.webp",
    category: "Residensial & Komersial"
  },
  {
    id: "chemical-tank",
    title: "Chemical Tank Fiberglass",
    subtitle: "Penyimpanan Bahan Kimia Aman",
    shortdesc: "<strong>Chemical Tank</strong> merupakan tangki khusus untuk menyimpan dan menampung bahan kimia cair yang digunakan dalam berbagai proses industri, pengolahan air, dan pengolahan air limbah. <strong>PT TOYODA FIBER INDONESIA</strong> menyediakan Chemical Tank berbahan fiberglass/FRP yang dapat disesuaikan dengan kebutuhan kapasitas dan karakteristik bahan kimia yang digunakan.",
    description: "<strong>Chemical Tank</strong> merupakan tangki khusus untuk menyimpan dan menampung bahan kimia cair yang digunakan dalam berbagai proses industri, pengolahan air, dan pengolahan air limbah. <strong>PT TOYODA FIBER INDONESIA</strong> menyediakan Chemical Tank berbahan fiberglass/FRP yang dapat disesuaikan dengan kebutuhan kapasitas dan karakteristik bahan kimia yang digunakan.\n\n🧪<strong> Apa Fungsi Chemical Tank?</strong>\nChemical tank dapat digunakan untuk menyimpan berbagai jenis bahan kimia, misalnya bahan kimia yang digunakan untuk:\n⚗️ Proses koagulasi dan flokulasi\n💧 Pengolahan air dan air limbah\n🦠 Proses desinfeksi\n⚖️ Penyesuaian pH\n🏭 Berbagai kebutuhan proses industri\n\n Jenis bahan kimia yang disimpan harus disesuaikan dengan karakteristik kimia, konsentrasi, temperatur, serta spesifikasi material tangki.\n\nPT TOYODA FIBER INDONESIA menyediakan solusi Chemical Tank fiberglass/FRP untuk berbagai kebutuhan industri dan sistem pengolahan air maupun air limbah.Tangki dapat dirancang dengan mempertimbangkan:\nJenis bahan kimia → Kapasitas → Konsentrasi → Temperatur → Sistem pemasangan → Kondisi lokasi\n\nDengan demikian, chemical tank tidak hanya berfungsi sebagai tempat penyimpanan, tetapi menjadi bagian penting dari sistem pengelolaan bahan kimia yang aman dan terintegrasi.",
    benefits: ["Tahan Terhadap Korosi", "Tahan Lama & Minim Perawatan", "Mudah Dibersihkan", "Material Tebal & Kuat"],
    image: "/chemicaltank.webp",
    category: "Industrial"
  },
  {
    id: "paneltank",
    title: "Panel Tank Fiberglass",
    subtitle: "Sistem Penyimpanan Air Modular",
    shortdesc: "<strong>Paneltank Fiberglass Toyoda</strong> merupakan tangki penyimpanan modular yang fleksibel dan dapat disesuaikan dengan kebutuhan kapasitas Anda. Dirancang dengan sistem panel terpisah yang mudah dirakit, produk ini menjadi solusi ideal untuk penyimpanan air bersih, limbah, maupun cairan lainnya di berbagai sektor. Dirancang dengan presisi teknik tinggi untuk memberikan solusi penyimpanan air yang paling andal dan tahan lama di pasar Indonesia.",
    description: "Panel Tank merupakan sistem tangki penyimpanan yang tersusun dari beberapa panel yang dirakit menjadi satu konstruksi tangki. Sistem modular ini memungkinkan ukuran dan kapasitas tangki disesuaikan dengan kebutuhan proyek serta kondisi area pemasangan.\nPanel Tank berbahan Fiberglass Reinforced Plastic (FRP) dapat digunakan sebagai solusi penyimpanan air untuk berbagai kebutuhan, baik pada fasilitas komersial, industri, maupun proyek infrastruktur.\n\n💧 <strong>Fungsi Panel Tank</strong>\nPanel Tank dapat dimanfaatkan untuk menyimpan berbagai jenis air sesuai dengan spesifikasi dan peruntukannya, seperti:\n- Air bersih\n- Air baku\n- Air proses industri\n- Air hasil pengolahan\n- Cadangan air pemadam kebakaran\n- Kebutuhan utilitas gedung\n- Kebutuhan penyimpanan air pada kawasan dan fasilitas tertentu\n\n🔧<strong> Mengapa Memilih Panel Tank Fiberglass?</strong>\nSistem panel memberikan fleksibilitas dalam proses perencanaan dan pemasangan. Panel dapat dikirim dalam bentuk komponen kemudian dirakit di lokasi proyek, sehingga dapat menjadi solusi untuk area yang memiliki akses masuk terbatas atau membutuhkan tangki dengan kapasitas besar.\nBeberapa karakteristik yang menjadi keunggulan material FRP antara lain:\n✓ Tahan terhadap korosi\n✓ Konstruksi modular dan fleksibel\n✓ Kapasitas dapat disesuaikan\n✓ Relatif mudah dalam proses pengiriman dan pemasangan\n✓ Cocok untuk berbagai kebutuhan penyimpanan\n✓ Perawatan relatif praktis\n\n🏭 <strong>Panel Tank PT TOYODA FIBER INDONESIA</strong>\nPT TOYODA FIBER INDONESIA menyediakan Panel Tank berbahan fiberglass/FRP yang dapat disesuaikan dengan kebutuhan setiap proyek.\nDalam menentukan desain tangki, beberapa hal yang dapat dipertimbangkan antara lain kapasitas penyimpanan, dimensi, lokasi pemasangan, akses menuju lokasi, jenis air yang disimpan, serta kebutuhan sistem pendukung.\nDengan konsep konstruksi modular, Panel Tank dapat menjadi pilihan untuk proyek yang membutuhkan tangki penyimpanan berkapasitas besar dengan konfigurasi yang fleksibel.",
    image: "/paneltank.webp",
    category: "Industrial",
    benefits: ['Anti Korosi', 'Tahan Lama', 'Mudah Dibersihkan', 'Desain Modular'],
    gallery: ['/instalasi-panel-tank-fiberglass-1.webp', '/instalasi-panel-tank-fiberglass-2.webp', '/instalasi-panel-tank-fiberglass-3.webp', '/instalasi-panel-tank-fiberglass-4.webp']
  }
];

export const OTHER_PRODUCTS: Product[] = [
  {
    id: 'septictank',
    title: 'SEPTIC TANK',
    shortdesc: '',
    description: 'Septic Tank Toyoda merupakan solusi <strong>pengolahan limbah domestik berbahan fiberglass (FRP)</strong> yang dirancang untuk membantu mengolah air limbah rumah tangga secara efektif dan ramah lingkungan. Dengan konstruksi yang kuat serta sistem pengolahan yang terintegrasi, septic tank membantu memisahkan, menguraikan, dan mengolah limbah sebelum dialirkan ke tahap pengolahan berikutnya.\n\nDilengkapi dengan <strong>sistem pengolahan biologis dan media filtrasi</strong>, Septic Tank Toyoda dirancang untuk membantu meningkatkan kualitas hasil olahan serta mengurangi potensi pencemaran lingkungan. Sistem ini dapat digunakan untuk berbagai kebutuhan, mulai dari <strong>rumah tinggal, perkantoran, restoran, fasilitas komersial, hingga proyek pembangunan.</strong>\n\nMaterial fiberglass memiliki keunggulan berupa <strong>ketahanan terhadap korosi, kelembapan, dan kondisi lingkungan</strong>, sehingga cocok untuk penggunaan jangka panjang. Konstruksinya yang kuat dan relatif ringan juga membuat proses pengangkutan serta instalasi menjadi lebih praktis.\n\nSeptic Tank Toyoda tersedia dalam berbagai <strong>kapasitas dan konfigurasi</strong> yang dapat disesuaikan dengan jumlah pengguna, kebutuhan debit limbah, serta kondisi lokasi pemasangan. Sistem dapat dilengkapi dengan komponen pendukung sesuai kebutuhan proyek untuk mendapatkan proses pengolahan yang optimal.\n\nDengan mengutamakan <strong>kualitas material, desain sistem, dan kemudahan instalasi</strong>, Septic Tank Toyoda menjadi pilihan tepat untuk kebutuhan pengolahan limbah domestik yang lebih aman dan bertanggung jawab terhadap lingkungan.',
    image: '/septic.webp',
    category: 'Residensial',
    benefits: ['Instalasi Cepat & Praktis', 'Minim Perawatan', 'Sistem Desinfektan', 'Ramah Lingkungan', 'Kuat & Ringan', 'Mudah Dipasang', 'Bergaransi'],
    gallery: ['/septictank.webp', '/pemasangan-septic-tank-biotech-1.webp', '/pemasangan-septic-tank-biotech-2.webp', '/pemasangan-septic-tank-biotech-3.webp']
  },
  {
    id: 'storagetank',
    title: 'STORAGE TANK',
    shortdesc: '',
    description: 'Storage Tank Toyoda merupakan tangki penyimpanan berbahan <strong>Fiberglass Reinforced Plastic (FRP)</strong> yang dirancang untuk menyimpan berbagai jenis cairan, mulai dari <strong>air bersih, air baku, bahan kimia, hingga cairan proses industri.</strong> Material FRP memberikan kombinasi antara <strong>kekuatan, bobot yang relatif ringan, dan ketahanan tinggi terhadap korosi</strong>, sehingga cocok digunakan pada berbagai lingkungan dan kondisi operasional.\n\nDengan material fiberglass berkualitas, Storage Tank Toyoda memiliki daya tahan yang baik terhadap <strong>kelembapan, bahan kimia, dan kondisi lingkungan yang korosif</strong>. Hal ini menjadikannya solusi penyimpanan yang praktis dan dapat digunakan untuk kebutuhan <strong>industri, komersial, manufaktur, pengolahan air, maupun berbagai proyek lainnya.</strong>\n\nStorage Tank dapat dibuat dengan <strong>berbagai kapasitas, ukuran, dan konfigurasi</strong> sesuai kebutuhan proyek. Desain dan spesifikasi tangki dapat disesuaikan dengan jenis cairan yang disimpan, lokasi pemasangan, serta kebutuhan sistem perpipaan dan instalasi.\n\nSelain menawarkan ketahanan dan fleksibilitas, penggunaan material FRP juga membantu memberikan solusi penyimpanan yang <strong>minim perawatan dan memiliki umur penggunaan yang panjang</strong> dibandingkan material yang lebih rentan terhadap korosi.\n\n<strong>Storage Tank Toyoda — solusi penyimpanan cairan yang kuat, tahan korosi, dan dapat disesuaikan dengan kebutuhan proyek Anda.</strong>',
    image: '/storage.webp',
    category: 'Industrial',
    benefits: ['Tahan Korosi', 'Material Kuat & Tebal', 'Bergaransi', 'Tahan Tekanan'],
    gallery: ['/storagetank.webp','/pabrik-storage-tank-kimia-1.webp', '/pabrik-storage-tank-kimia-2.webp', '/pabrik-storage-tank-kimia-3.webp']
  },
  {
    id: 'biostp-mini',
    title: 'BIOSTP MINI',
    shortdesc: '',
    description: 'BIOSTP Mini adalah tangki pengolahan limbah modern dengan teknologi multi-proses yang dirancang oleh PT Toyoda Fiber Indonesia. Telah bersertifikasi SNI dan ISO, produk ini mampu mengolah limbah domestik menjadi lebih ramah lingkungan dengan struktur yang lebih tebal dan kuat dibandingkan septic tank konvensional.',
    image: '/biostp.webp',
    category: 'Residensial',
    benefits: ['Bersertifikasi SNI & ISO', 'Ramah Lingkungan', 'Ketebalan 5,6mm', 'Lebih Kuat Dari Produk Sejenis'],
    gallery: ['/biostp1.webp', '/biostp2.webp', '/biostp3.webp', '/biostp4.webp', '/biostp5.webp', '/biostp6.webp']
  },
  {
    id: 'talang-air',
    title: 'TALANG AIR FIBERGLASS',
    shortdesc: '',
    description: 'Talang Air Toyoda merupakan solusi sistem drainase berbahan <strong>Fiberglass Reinforced Plastic (FRP)</strong> yang dirancang untuk mengalirkan air hujan secara efektif sekaligus memberikan ketahanan tinggi terhadap kondisi lingkungan. Cocok digunakan untuk berbagai kebutuhan, mulai dari <strong>rumah, gedung, gudang, pabrik, hingga proyek konstruksi dan industri.</strong>\n\nMenggunakan material fiberglass berkualitas, Talang Toyoda memiliki <strong>ketahanan terhadap korosi, kelembapan, paparan sinar UV, serta perubahan cuaca</strong>, sehingga tidak mudah berkarat atau mengalami penurunan kualitas seperti material logam pada kondisi tertentu.\n\nKonstruksi fiberglass yang kuat namun relatif ringan membuat proses <strong>pengangkutan, pemasangan, dan perawatan</strong> menjadi lebih praktis. Talang juga dapat diproduksi dengan <strong>berbagai ukuran, panjang, bentuk, dan spesifikasi</strong> sesuai kebutuhan sistem drainase serta kondisi bangunan.\n\nTalang Air Toyoda dirancang untuk membantu mengurangi risiko <strong>kebocoran, genangan, dan kerusakan pada area bangunan</strong> akibat sistem pembuangan air hujan yang kurang optimal. Dengan desain yang dapat disesuaikan, produk ini dapat menjadi bagian dari sistem drainase yang lebih efisien dan tahan lama.\n\n<strong>KEUNGGULAN TALANG AIR TOYODA:</strong><ul class="list-disc pl-5 mt-2 space-y-1"><li>Tahan korosi dan karat</li><li>Tahan terhadap paparan sinar UV dan cuaca</li><li>Kuat dan tahan lama</li><li>Bobot relatif ringan</li><li>Perawatan lebih mudah</li><li>Dapat dibuat sesuai ukuran dan kebutuhan proyek</li><li>Cocok untuk bangunan komersial maupun industri</li></ul>\n<strong>Talang Air Toyoda — solusi drainase fiberglass yang kuat, tahan lama, dan dirancang untuk kebutuhan proyek Anda.</strong>',
    image: '/talang.webp',
    category: 'Industrial',
    benefits: ['Tahan UV', 'Warna Tidak Mudah Pudar', 'Tahan Lama', 'Anti Bocor'],
    gallery: ['/talang.webp', '/talang-air-fiberglass-1.webp', '/talang-air-fiberglass-2.webp', '/talang-air-fiberglass-3.webp', '/talang-air-fiberglass-4.webp', '/talang-air-fiberglass-5.webp', '/talang-air-fiberglass-6.webp']
  },
  {
    id: 'toilet-portable',
    title: 'TOILET PORTABLE',
    shortdesc: '',
    description: 'Toilet Portable Toyoda merupakan solusi fasilitas sanitasi <strong>berbahan fiberglass (FRP)</strong> yang kuat, praktis, dan mudah dipindahkan. Material fiberglass membuat toilet lebih <strong>tahan terhadap cuaca, kelembapan, dan korosi</strong>, sehingga cocok digunakan untuk kebutuhan indoor maupun outdoor.\n\nDengan desain yang compact dan fungsional, Toilet Portable Toyoda dapat digunakan pada berbagai lokasi seperti <strong>proyek konstruksi, event outdoor, area wisata, pabrik, perkebunan, hingga fasilitas umum.</strong>\n\nToilet Portable juga dapat dilengkapi dengan <strong>sistem Bio Septic Tank</strong> untuk membantu mengelola limbah secara lebih baik. Perawatannya mudah dan dapat digunakan sebagai solusi sanitasi sementara maupun jangka panjang.\n\n<strong>Praktis, kuat, tahan lama, dan siap digunakan di berbagai kebutuhan.</strong>',
    image: '/toilet.webp',
    category: 'Komersial',
    benefits: ['Serbaguna & Ringan', 'Mudah Perawatan', 'Sistem Bio Septic Tank', 'Anti UV', 'Mudah Dipindahkan'],
    gallery: ['/toiletportable.webp', '/jual-toilet-portable-fiberglass-3.webp', '/jual-toilet-portable-fiberglass-4.webp', '/jual-toilet-portable-fiberglass-1.webp', '/jual-toilet-portable-fiberglass-2.webp']
  },
  {
    id: 'atap',
    title: 'ATAP',
    shortdesc: '',
    description: 'Atap Fiberglass Toyoda merupakan solusi penutup bangunan berbahan <strong>fiberglass berkualitas tinggi</strong> yang kuat, ringan, dan tahan terhadap berbagai kondisi cuaca. Dengan teknologi <strong>Anti-Ultraviolet (UV)</strong>, atap dirancang untuk membantu melindungi bangunan dari paparan sinar matahari sekaligus menjaga daya tahan material dalam penggunaan jangka panjang.\n\nMaterial fiberglass memiliki keunggulan berupa <strong>ketahanan terhadap panas, korosi, dan kelembapan</strong>, sehingga cocok digunakan untuk berbagai kebutuhan bangunan, mulai dari <strong>rumah, gudang, pabrik, area industri, hingga proyek konstruksi.</strong>\n\nDesain gelombang pada atap membantu memberikan struktur yang kuat sekaligus mendukung sistem pengaliran air hujan. Atap Fiberglass Toyoda juga tersedia dalam pilihan spesifikasi yang dapat disesuaikan dengan kebutuhan proyek.\n\n<strong>Kuat, tahan cuaca, dan tahan lama untuk perlindungan bangunan yang optimal.</strong>',
    image: '/atap.webp',
    category: 'Industrial',
    benefits: ['Anti UV', 'Struktur Kuat', 'Hemat Energi', 'Reflektif'],
    gallery: ['/atap.webp', '/atap1.webp', '/atap2.webp', '/atap3.webp']
  },
  {
    id: 'grp-tank',
    title: 'GRP TANK',
    shortdesc: '',
    description: 'GRP Tank Toyoda merupakan solusi tangki panel berbahan <strong>Glass Reinforced Plastic (GRP)</strong> yang dirancang untuk kebutuhan penyimpanan air dan berbagai jenis cairan. Menggunakan material berkualitas tinggi, tangki memiliki <strong>ketahanan terhadap korosi, cuaca, dan paparan sinar UV,</strong> sehingga cocok digunakan untuk berbagai kebutuhan industri, komersial, maupun proyek.\n\nDengan sistem panel modular, <strong>GRP Tank Toyoda dapat disesuaikan dengan kapasitas dan kebutuhan instalasi.</strong> Desainnya memungkinkan proses pengiriman, pemasangan, serta perawatan menjadi lebih praktis, bahkan untuk lokasi dengan akses terbatas.\n\nTangki dapat dilengkapi dengan berbagai fitur pendukung seperti <strong>ventilasi, manhole, tangga, overflow, drain, dan perlindungan UV</strong> sesuai kebutuhan proyek. Setiap komponen dirancang untuk <strong>memberikan kekuatan, keamanan, ketahanan, dan kemudahan penggunaan dalam jangka panjang.</strong>\n\nGRP Tank Toyoda menjadi pilihan tepat untuk kebutuhan penyimpanan <strong>air bersih, air baku, air proses, maupun cairan tertentu</strong> dengan solusi yang dapat disesuaikan berdasarkan kapasitas dan spesifikasi proyek.',
    image: '/grp.webp',
    category: 'Industrial',
    benefits: ['Material Berkualitas', 'Anti Karat', 'Bergaransi', 'Anti UV & Anti Lumut'],
    gallery: ['/grptank.webp', '/grp-tank-fiberglass-1.webp']
  }
];

export const JENIS_IPAL: Product[] = [
  {
    id: 'ipal-rumah-sakit',
    title: 'IPAL Rumah Sakit',
    shortdesc: '',
    description: `Instalasi Pengolahan Air Limbah (IPAL) Rumah Sakit merupakan sistem yang dirancang untuk mengolah air limbah dari berbagai aktivitas rumah sakit, seperti ruang perawatan, laboratorium, ruang operasi, toilet, laundry, dan fasilitas penunjang lainnya.

Air limbah rumah sakit dapat mengandung bahan organik, padatan tersuspensi, deterjen, minyak, serta berbagai kontaminan. Karena itu, diperlukan sistem pengolahan yang tepat sebelum air limbah dibuang ke lingkungan.

PT. Toyoda Fiber Indonesia menyediakan solusi IPAL Rumah Sakit berbasis tangki fiberglass (FRP) yang dapat disesuaikan dengan kapasitas, karakteristik air limbah, dan kondisi lahan proyek.

<strong>Keunggulan IPAL Rumah Sakit</strong>
• Tangki fiberglass/FRP kuat dan tahan korosi.
• Kapasitas dan desain dapat disesuaikan dengan kebutuhan proyek.
• Sistem pengolahan biologis untuk membantu menurunkan beban pencemar.
• Dapat dilengkapi blower, diffuser, pompa, filter, dosing system, dan klorinasi.
• Desain modular dan sesuai dengan kondisi lahan.
• Cocok untuk rumah sakit, klinik, laboratorium, dan fasilitas kesehatan.
• Dirancang dengan mempertimbangkan baku mutu air limbah yang berlaku.

<strong>Proses Pengolahan</strong>
Sistem IPAL Rumah Sakit dapat terdiri dari bak ekualisasi, proses biologis/aerob, sedimentasi, filtrasi, dan desinfeksi. Setiap tahapan membantu mengurangi parameter pencemar agar kualitas air hasil olahan sesuai persyaratan yang ditetapkan.

<strong>Solusi IPAL dari PT. Toyoda Fiber Indonesia</strong>
Kami melayani kebutuhan IPAL mulai dari konsultasi, perencanaan, fabrikasi tangki fiberglass, instalasi hingga commissioning sesuai kebutuhan proyek.`,
    image: '/ipalrumahsakit.webp',
    category: 'Kesehatan',
    benefits: ['Tahan Korosi', 'Kustomisasi Desain', 'Pengolahan Biologis', 'Sesuai Baku Mutu']
  },
  {
    id: 'ipal-komunal',
    title: 'IPAL Komunal',
    shortdesc: '',
    description: `IPAL Komunal (Instalasi Pengolahan Air Limbah Komunal) adalah sistem pengolahan air limbah yang digunakan bersama oleh beberapa rumah, bangunan, atau masyarakat dalam satu kawasan. Sistem ini mengolah air limbah domestik sebelum dialirkan ke lingkungan sehingga membantu menjaga kebersihan dan kualitas lingkungan.

IPAL Komunal banyak digunakan pada perumahan, permukiman, kawasan padat penduduk, apartemen, kawasan komersial, dan fasilitas umum.

<strong>Mengapa IPAL Komunal Penting?</strong>
Air limbah dari aktivitas sehari-hari seperti mandi, mencuci, toilet, dan kegiatan rumah tangga dapat mengandung bahan organik, deterjen, minyak, serta padatan tersuspensi. Jika dibuang tanpa pengolahan, limbah dapat mencemari tanah, sungai, saluran air, dan lingkungan sekitar.

IPAL Komunal memungkinkan air limbah dari beberapa sumber dikumpulkan dan diolah melalui sistem terpusat sebelum dilepas ke lingkungan.

<strong>Keunggulan IPAL Komunal PT. Toyoda Fiber Indonesia</strong>
PT. Toyoda Fiber Indonesia menyediakan solusi IPAL Komunal menggunakan tangki fiberglass (FRP) yang dapat disesuaikan dengan kapasitas dan kondisi proyek.
• Tangki fiberglass/FRP kuat dan tahan korosi.
• Kapasitas disesuaikan dengan jumlah pengguna.
• Desain menyesuaikan kondisi dan luas lahan.
• Dapat dilengkapi blower, diffuser, pompa, filter, dan klorinasi.
• Perawatan relatif mudah.
• Cocok untuk berbagai kawasan permukiman dan fasilitas komunal.
• Dirancang dengan mempertimbangkan baku mutu air limbah yang berlaku.`,
    image: '/ipalkomunal.webp',
    category: 'Residensial',
    benefits: ['Sistem Terpusat', 'Tahan Korosi', 'Mudah Perawatan', 'Kapasitas Fleksibel']
  },
  {
    id: 'ipal-laundry',
    title: 'IPAL Laundry',
    shortdesc: '',
    description: `IPAL Laundry (Instalasi Pengolahan Air Limbah Laundry) merupakan sistem pengolahan untuk air limbah dari kegiatan laundry, seperti pencucian pakaian, linen, hotel, rumah sakit, maupun usaha laundry komersial.

Air limbah laundry umumnya mengandung deterjen, surfaktan, minyak, lemak, padatan tersuspensi, dan bahan organik. Jika dibuang langsung, limbah dapat berdampak pada kualitas air dan lingkungan. Karena itu, diperlukan sistem IPAL yang sesuai dengan karakteristik dan kapasitas limbah.

<strong>Keunggulan IPAL Laundry PT. Toyoda Fiber Indonesia</strong>
PT. Toyoda Fiber Indonesia menyediakan solusi IPAL Laundry menggunakan tangki fiberglass (FRP) yang kuat, tahan korosi, dan dapat disesuaikan dengan kebutuhan proyek.
• Tangki fiberglass/FRP kuat dan tahan korosi.
• Kapasitas disesuaikan dengan debit air limbah.
• Desain menyesuaikan kondisi dan luas lahan.
• Dapat dilengkapi blower, diffuser, pompa, filter, dan sistem klorinasi.
• Perawatan relatif mudah.
• Cocok untuk laundry komersial, hotel, rumah sakit, industri, dan fasilitas lainnya.
• Sistem dirancang dengan mempertimbangkan baku mutu air limbah yang berlaku.

<strong>Proses Pengolahan IPAL Laundry</strong>
Pengolahan dapat mencakup tahapan screening, ekualisasi, pengolahan biologis/aerob, sedimentasi, filtrasi, dan desinfeksi. Tahapan tersebut membantu mengurangi pencemar dalam air limbah sebelum dialirkan ke lingkungan.

<strong>Solusi IPAL Laundry</strong>
PT. Toyoda Fiber Indonesia melayani kebutuhan IPAL mulai dari konsultasi, perencanaan, fabrikasi tangki fiberglass, instalasi hingga commissioning sesuai kebutuhan proyek.`,
    image: '/ipallaundry.webp',
    category: 'Komersial',
    benefits: ['Filtrasi Deterjen', 'Kuat & Anti Karat', 'Sistem Klorinasi', 'Desain Fleksibel']
  },
  {
    id: 'ipal-restoran',
    title: 'IPAL Restoran',
    shortdesc: '',
    description: `IPAL Restoran (Instalasi Pengolahan Air Limbah Restoran) merupakan sistem pengolahan untuk air limbah dari aktivitas restoran, rumah makan, kafe, food court, hotel, dan usaha kuliner lainnya.

Air limbah restoran umumnya mengandung minyak, lemak, sisa makanan, deterjen, padatan tersuspensi, dan bahan organik. Jika dibuang tanpa pengolahan, limbah dapat menimbulkan bau, menyumbat saluran, serta mencemari lingkungan.

PT. Toyoda Fiber Indonesia menyediakan solusi IPAL Restoran menggunakan tangki fiberglass (FRP) yang kuat, tahan korosi, dan dapat disesuaikan dengan kapasitas serta kondisi proyek.

<strong>Keunggulan IPAL Restoran</strong>
• Tangki fiberglass/FRP kuat dan tahan korosi.
• Kapasitas disesuaikan dengan debit air limbah.
• Desain menyesuaikan kondisi dan luas lahan.
• Dapat dilengkapi grease trap, blower, diffuser, pompa, filter, dan klorinasi.
• Membantu mengurangi kandungan minyak, lemak, dan bahan organik.
• Perawatan relatif mudah.
• Cocok untuk restoran, kafe, rumah makan, food court, hotel, dan usaha kuliner.
• Dirancang dengan mempertimbangkan baku mutu air limbah yang berlaku.

<strong>Proses Pengolahan IPAL Restoran</strong>
Pengolahan air limbah dapat melalui tahapan penyaringan, pemisahan minyak dan lemak, ekualisasi, pengolahan biologis/aerob, sedimentasi, filtrasi, dan desinfeksi. Tahapan tersebut membantu mengurangi pencemar sebelum air hasil olahan dialirkan ke lingkungan.

<strong>Solusi IPAL Restoran PT. Toyoda Fiber Indonesia</strong>
PT. Toyoda Fiber Indonesia melayani kebutuhan IPAL mulai dari konsultasi, perencanaan, fabrikasi tangki fiberglass, instalasi hingga commissioning sesuai kebutuhan proyek.`,
    image: '/ipalrestoran.webp',
    category: 'Komersial',
    benefits: ['Pemisah Lemak & Minyak', 'Anti Bau', 'Sistem Grease Trap', 'Desain Custom']
  },
  {
    id: 'ipal-tambang',
    title: 'IPAL Tambang',
    shortdesc: '',
    description: `IPAL Tambang (Instalasi Pengolahan Air Limbah Tambang) merupakan sistem pengolahan untuk mengolah air limbah dan air limpasan dari kegiatan pertambangan sebelum dialirkan ke lingkungan.

Air dari area pertambangan dapat membawa padatan tersuspensi (TSS), lumpur, mineral, serta parameter pencemar lainnya. Karena itu, diperlukan sistem pengolahan sesuai karakteristik air dan kebutuhan proyek.

<strong>Keunggulan IPAL Tambang PT. Toyoda Fiber Indonesia</strong>
PT. Toyoda Fiber Indonesia menyediakan solusi IPAL Tambang menggunakan tangki fiberglass (FRP) yang kuat, tahan korosi, dan dapat disesuaikan dengan kapasitas proyek.
• Tangki fiberglass/FRP kuat dan tahan korosi.
• Kapasitas disesuaikan dengan debit dan karakteristik air.
• Desain menyesuaikan kondisi area pertambangan.
• Dapat dilengkapi screening, koagulasi-flokulasi, sedimentasi, filtrasi, pompa, dan dosing.
• Membantu mengurangi padatan tersuspensi dan parameter pencemar.
• Perawatan relatif mudah.
• Cocok untuk kebutuhan pengolahan air di area pertambangan.
• Mempertimbangkan baku mutu air limbah yang berlaku.

<strong>Proses Pengolahan IPAL Tambang</strong>
Pengolahan dapat mencakup screening, ekualisasi, koagulasi-flokulasi, sedimentasi, filtrasi, dan desinfeksi sesuai karakteristik air.
Setiap tahapan membantu mengurangi pencemar sehingga kualitas air hasil olahan dapat memenuhi persyaratan sebelum dialirkan ke lingkungan.

<strong>Solusi IPAL Tambang PT. Toyoda Fiber Indonesia</strong>
PT. Toyoda Fiber Indonesia melayani kebutuhan IPAL mulai dari konsultasi, perencanaan, fabrikasi tangki fiberglass, instalasi hingga commissioning sesuai kebutuhan proyek.`,
    image: '/ipaltambang.webp',
    category: 'Industrial',
    benefits: ['Mengolah Limbah Berat', 'Tahan Tekanan', 'Pengurang Padatan', 'Tahan Korosi Ekstrem']
  },
  {
    id: 'ipal-puskesmas',
    title: 'IPAL Puskesmas',
    shortdesc: '',
    description: `IPAL Puskesmas (Instalasi Pengolahan Air Limbah Puskesmas) merupakan sistem pengolahan untuk air limbah dari berbagai aktivitas pelayanan kesehatan, seperti ruang pemeriksaan, laboratorium, toilet, ruang tindakan, dan fasilitas penunjang lainnya.

Air limbah fasilitas kesehatan dapat mengandung bahan organik, padatan tersuspensi, deterjen, minyak, serta kontaminan lainnya. Pengolahan yang tepat diperlukan untuk menjaga kualitas lingkungan dan memenuhi persyaratan baku mutu air limbah yang berlaku.

<strong>Keunggulan IPAL Puskesmas PT. Toyoda Fiber Indonesia</strong>
PT. Toyoda Fiber Indonesia menyediakan solusi IPAL Puskesmas menggunakan tangki fiberglass (FRP) yang kuat, tahan korosi, dan dapat disesuaikan dengan kapasitas serta kondisi lahan proyek.
• Tangki fiberglass/FRP kuat dan tahan korosi.
• Kapasitas disesuaikan dengan kebutuhan fasilitas kesehatan.
• Desain menyesuaikan kondisi dan luas lahan.
• Dapat dilengkapi blower, diffuser, pompa, filter, dan sistem klorinasi.
• Perawatan relatif mudah.
• Cocok untuk Puskesmas, klinik, laboratorium, dan fasilitas kesehatan lainnya.
• Dirancang dengan mempertimbangkan baku mutu air limbah yang berlaku.

<strong>Proses Pengolahan IPAL Puskesmas</strong>
Sistem IPAL dapat terdiri dari screening, ekualisasi, pengolahan biologis/aerob, sedimentasi, filtrasi, dan desinfeksi. Setiap tahapan membantu mengurangi kandungan pencemar sebelum air hasil olahan dialirkan ke lingkungan.

<strong>Solusi IPAL Puskesmas</strong>
PT. Toyoda Fiber Indonesia melayani kebutuhan IPAL mulai dari konsultasi, perencanaan, fabrikasi tangki fiberglass, instalasi hingga commissioning sesuai kebutuhan proyek.`,
    image: '/ipalpuskesmas.webp',
    category: 'Kesehatan',
    benefits: ['Pengolahan Medis', 'Ramah Lingkungan', 'Baku Mutu Kesehatan', 'Instalasi Cepat']
  },
  {
    id: 'ipal-hotel',
    title: 'IPAL Hotel',
    shortdesc: '',
    description: `IPAL Hotel (Instalasi Pengolahan Air Limbah Hotel) merupakan sistem pengolahan untuk air limbah dari berbagai aktivitas hotel, seperti kamar tamu, toilet, restoran, laundry, dapur, dan fasilitas penunjang lainnya.

Air limbah hotel umumnya mengandung bahan organik, deterjen, minyak, lemak, padatan tersuspensi, dan zat pencemar lainnya. Jika tidak diolah dengan baik, limbah dapat menimbulkan bau dan berdampak pada kualitas lingkungan.

PT. Toyoda Fiber Indonesia menyediakan solusi IPAL Hotel menggunakan tangki fiberglass (FRP) yang kuat, tahan korosi, dan dapat disesuaikan dengan kapasitas serta kondisi lahan proyek.

<strong>Keunggulan IPAL Hotel</strong>
• Tangki fiberglass/FRP kuat dan tahan korosi.
• Kapasitas disesuaikan dengan jumlah kamar dan debit limbah.
• Desain menyesuaikan kondisi dan luas lahan.
• Dapat dilengkapi grease trap, blower, diffuser, pompa, filter, dan sistem klorinasi.
• Membantu mengurangi bahan organik, minyak, lemak, dan padatan tersuspensi.
• Perawatan relatif mudah.
• Cocok untuk hotel, resort, apartemen, dan penginapan.
• Dirancang dengan mempertimbangkan baku mutu air limbah yang berlaku.

<strong>Proses Pengolahan IPAL Hotel</strong>
Pengolahan air limbah dapat melalui tahapan screening, ekualisasi, pengolahan biologis/aerob, sedimentasi, filtrasi, dan desinfeksi. Setiap tahapan membantu mengurangi pencemar sebelum air hasil olahan dialirkan ke lingkungan.

<strong>Solusi IPAL Hotel PT. Toyoda Fiber Indonesia</strong>
PT. Toyoda Fiber Indonesia melayani kebutuhan IPAL mulai dari konsultasi, perencanaan, fabrikasi tangki fiberglass, instalasi hingga commissioning sesuai kebutuhan proyek.`,
    image: '/ipalhotel.webp',
    category: 'Komersial',
    benefits: ['Kapasitas Besar', 'Tanpa Bau', 'Manajemen Limbah Optimal', 'Awet & Tahan Lama']
  }
];
export const NEWS: NewsItem[] = [
  {
    id: 'vendor-paneltank',
    title: 'Peran Penting Memilih Vendor Panel Tank Bersertifikat untuk Keamanan Proyek',
    description: 'Dalam pengerjaan proyek konstruksi skala besar—seperti gedung bertingkat, rumah sakit, hingga kawasan industri—pemilihan penampungan air (panel tank) bukan sekadar urusan kapasitas.',
    content: `Dalam pengerjaan proyek konstruksi skala besar—seperti gedung bertingkat, rumah sakit, hingga kawasan industri—pemilihan penampungan air (panel tank) bukan sekadar urusan kapasitas. Memilih vendor yang mengantongi sertifikasi resmi dan standar kelayakan industri merupakan langkah krusial yang menentukan keamanan serta efisiensi investasi jangka panjang.

<strong>Mengapa Sertifikasi Vendor Panel Tank Sangat Vital?</strong>

<strong>Jaminan Kekuatan Struktur & Beban Hydrostatik:</strong> Vendor bersertifikat memproduksi modul panel FRP sesuai perhitungan rekayasa teknik (engineering calculation). Ini memastikan tangki mampu menahan tekanan air berkapasitas puluhan hingga ratusan ribu liter tanpa risiko pecah atau melengkung.

<strong>Standar Keamanan Material (Food Grade):</strong> Tangki air minum wajib menggunakan material resin dan fiberglass yang lolos uji laboratorium, bebas racun, anti-bakteri, serta tidak mencemari kualitas air bersih.

<strong>Ketahanan Korosi & Garansi Resmi:</strong> Produk bersertifikat umumnya dilengkapi dengan struktur penguat berlapis Hot-Dip Galvanized (HDG) yang tahan terhadap kelembapan tinggi dan perubahan cuaca ekstrem di Indonesia.

<strong>Kepatuhan Audit Proyek:</strong> Penggunaan vendor berlisensi mempermudah proses verifikasi, inspeksi K3, dan audit teknis dari konsultan maupun instansi pemerintah.

<strong>Risiko Menggunakan Vendor Non-Sertifikasi</strong>

Menggunakan <a href="/products/paneltank" class="text-blue-600 font-bold hover:underline">panel tank</a> dari vendor tanpa sertifikasi standar berisiko menyebabkan kebocoran pada sambungan sealant, penurunan kualitas air akibat pertumbuhan lumut, hingga potensi kegagalan struktur yang memicu banjir teknis di area basement atau rooftop.

Memastikan penampungan air proyek Anda diproduksi oleh produsen terpercaya seperti <a href="/" class="text-blue-600 font-bold hover:underline">PT Toyoda Fiber Indonesia</a> merupakan investasi pencegahan biaya perbaikan di masa depan.

📞 0811 1999 777
✉️ toyodafiber.id@gmail.com
📷 Instagram: @toyodafiber.id
🌐 ipaltoyoda.com`,
    image: '/vendor-panel-tank-bersertifikat-keamanan-proyek.webp',
    category: 'Artikel',
    date: '21 Agustus 2026',
    readTime: '5 Menit'
  },
  {
    id: 'keunggulan-paneltank-fiberglass',
    title: 'Perbandingan Panel Tank Fiberglass vs Tangki Beton untuk Proyek Industri',
    description: 'Dalam pengerjaan proyek fasilitas publik, kawasan industri, dan infrastruktur modern, memilih penampungan air berkapasitas ratusan ribu liter membutuhkan pertimbangan teknis yang matang.',
    content: `Dalam pengerjaan proyek fasilitas publik, kawasan industri, dan infrastruktur modern, memilih penampungan air berkapasitas ratusan ribu liter membutuhkan pertimbangan teknis yang matang. Dua pilihan utama yang sering digunakan adalah Panel Tank Fiberglass (FRP) dan Tangki Beton (Ground Tank).

Meskipun tangki beton sudah lama digunakan, inovasi Panel Tank Fiberglass modern kini menjadi standar baru karena efisiensi biaya, waktu pengerjaan, dan ketahanannya.

<strong>Tabel Komparasi Head-to-Head</strong>

<table class="min-w-full text-left border-collapse my-4">
  <thead>
    <tr>
      <th class="border-b-2 p-2 font-bold">Fitur / Parameter</th>
      <th class="border-b-2 p-2 font-bold">Panel Tank Fiberglass (FRP)</th>
      <th class="border-b-2 p-2 font-bold">Tangki Beton (Ground Tank)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border-b p-2">Waktu Instalasi</td>
      <td class="border-b p-2">Sangat Cepat (Modularity System)</td>
      <td class="border-b p-2">Lambat (Butuh waktu pengeringan)</td>
    </tr>
    <tr>
      <td class="border-b p-2">Risiko Kebocoran</td>
      <td class="border-b p-2">Rendah (Gasket elastomer presisi)</td>
      <td class="border-b p-2">Tinggi (Rentang retak rambut/struktur)</td>
    </tr>
    <tr>
      <td class="border-b p-2">Kebersihan Air</td>
      <td class="border-b p-2">Anti-Lumut & Food Grade</td>
      <td class="border-b p-2">Mudah menyerap kotoran & berlumut</td>
    </tr>
    <tr>
      <td class="border-b p-2">Beban Struktur</td>
      <td class="border-b p-2">Sangat Ringan</td>
      <td class="border-b p-2">Sangat Berat</td>
    </tr>
    <tr>
      <td class="border-b p-2">Perawatan & Perbaikan</td>
      <td class="border-b p-2">Mudah (Cukup ganti panel rusak)</td>
      <td class="border-b p-2">Sulit (Harus tambal/bobok struktur)</td>
    </tr>
  </tbody>
</table>

<strong>Keunggulan Utama Panel Tank FRP PT Toyoda Fiber Indonesia</strong>

<strong>Pemasangan Fleksibel di Area Lahan Terbuka:</strong> Desain modular memungkinkan perakitan <a href="/products/paneltank" class="text-blue-600 font-bold hover:underline">tangki fiberglass</a> dalam skala raksasa langsung di lokasi (on-site assembly), baik di lahan terbuka (ground level) maupun rooftop.

<strong>Tahan Cuaca Ekstrem & Sinar UV:</strong> Dilapisi resin pelindung anti-UV khusus sehingga tidak mudah retak atau memudar walau diterpa panas matahari dan hujan terus-menerus.

<strong>Tahan Tekanan Hydrostatik Tinggi:</strong> Dilengkapi rangka penyangga internal dan eksternal berlapis Hot-Dip Galvanized (HDG) untuk menjamin stabilitas tangki saat terisi penuh.

<strong>Ramah Lingkungan & Usia Pakai Panjang:</strong> Tidak korosif, bebas karat, dan dapat digunakan hingga puluhan tahun dengan perawatan yang minimal.

📞 0811 1999 777
✉️ toyodafiber.id@gmail.com
📷 Instagram: @toyodafiber.id
🌐 ipaltoyoda.com`,
    image: '/perbandingan-panel-tank-fiberglass-vs-beton.webp',
    category: 'Inovasi',
    date: '21 Agustus 2026',
    readTime: '4 Menit'
  },
  {
    id: 'vendor-fiberglass',
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
    image: '/pt-toyoda-fiber-indonesia-produsen-fiberglass-berkualitas.webp',
    category: 'Artikel',
    date: '21 Agustus 2026',
    readTime: '5 Menit'
  },
  {
    id: 'pentingnya-ipal-dalam-lingkungan',
    title: 'Mengapa IPAL Sangat Penting bagi Lingkungan? Ini Alasan dan Manfaatnya',
    description: 'IPAL bukan hanya fasilitas pengolah air kotor, melainkan bagian penting dari upaya menjaga lingkungan dan menciptakan pengelolaan limbah yang bertanggung jawab.',
    content: `Air merupakan salah satu sumber daya paling penting bagi kehidupan. Manusia membutuhkan air untuk minum, memasak, mandi, mencuci, kegiatan usaha, pertanian, hingga berbagai aktivitas industri. Namun, setiap aktivitas tersebut juga menghasilkan air limbah.

Jika air limbah dibuang begitu saja tanpa melalui proses pengolahan yang tepat, berbagai zat pencemar dapat masuk ke sungai, saluran air, tanah, maupun sumber air lainnya. Dalam jangka panjang, kondisi tersebut dapat mengganggu keseimbangan lingkungan dan menurunkan kualitas sumber daya air.

Inilah mengapa IPAL (Instalasi Pengolahan Air Limbah) memiliki peranan yang sangat penting. IPAL bukan hanya sebuah fasilitas untuk mengolah air kotor. Lebih dari itu, IPAL merupakan bagian penting dari upaya menjaga lingkungan, mengurangi pencemaran, dan menciptakan sistem pengelolaan air limbah yang lebih bertanggung jawab.

<strong>Mengapa IPAL Sangat Penting bagi Lingkungan?</strong>

1. Mengurangi Pencemaran Sungai
Salah satu dampak paling besar dari pembuangan air limbah yang tidak dikelola adalah pencemaran sungai. Air limbah dapat membawa bahan organik, padatan tersuspensi, minyak dan lemak, deterjen, serta berbagai zat lainnya ke dalam badan air. IPAL membantu mengolah air limbah terlebih dahulu sehingga beban pencemar dapat dikurangi sebelum dilepaskan ke lingkungan.

2. Melindungi Sumber Air
Sumber air bersih sangat penting untuk kehidupan manusia. Sungai, danau, maupun sumber air tanah dapat terdampak oleh aktivitas pembuangan limbah yang tidak terkendali. Dengan adanya sistem pengolahan, potensi masuknya pencemar ke lingkungan dapat dikurangi.

3. Mengurangi Bau Tidak Sedap
Air limbah yang dibiarkan tanpa pengolahan dapat menimbulkan bau yang mengganggu. Dengan sistem pengolahan yang dirancang dengan baik, masalah bau dapat dikurangi secara signifikan.

4. Menjaga Ekosistem Perairan
Sungai dan badan air merupakan habitat berbagai organisme. Pengolahan air limbah membantu mengurangi beban pencemar yang masuk ke badan air sehingga dapat membantu menjaga kualitas lingkungan perairan.

5. Mengurangi Risiko Pencemaran Tanah
Air limbah yang dibuang sembarangan juga dapat masuk ke dalam tanah dan memengaruhi kualitas air tanah. IPAL membantu mengendalikan air limbah melalui proses pengolahan sebelum dibuang sesuai dengan ketentuan yang berlaku.

6. Mendukung Kehidupan Masyarakat
Lingkungan yang bersih dan sumber air yang terjaga memiliki hubungan erat dengan kualitas hidup masyarakat. Karena itu, IPAL bukan hanya penting bagi perusahaan, tetapi juga bermanfaat bagi masyarakat di sekitarnya.

<strong>Apa yang Terjadi Jika Tidak Menggunakan IPAL?</strong>
- Pencemaran Air pada sungai atau badan air.
- Bau tidak sedap dari limbah organik.
- Penurunan Kualitas Lingkungan sekitar.
- Gangguan Ekosistem organisme air.
- Masalah Sosial berupa keluhan masyarakat sekitar.

<strong>Bagaimana IPAL Membantu Menjaga Lingkungan?</strong>
Secara umum, sistem dapat terdiri dari: Air Limbah → Penyaringan → Equalization → Pengolahan Biologis → Sedimentasi → Filtrasi → Disinfeksi → Air Hasil Pengolahan.

Pemilihan teknologi harus mempertimbangkan jenis limbah, debit, karakteristik air limbah, target kualitas air, serta kondisi lokasi.

<strong>Pentingnya Memilih Desain IPAL yang Tepat</strong>
Memiliki IPAL saja belum tentu cukup. IPAL harus didesain berdasarkan:
- Debit air limbah
- Karakteristik limbah
- Kualitas air hasil pengolahan
- Kondisi lokasi
- Kebutuhan operasional

Jika Anda sedang mencari solusi IPAL, STP, WWTP, atau tangki fiberglass, PT Toyoda Fiber Indonesia siap membantu memberikan solusi sesuai kebutuhan proyek Anda.

<strong>PT Toyoda Fiber Indonesia</strong>
📞 0811-1999-9777
🌐 ipaltoyoda.com
📧 toyodafiber.id@gmail.com`,
    image: '/pentingnya-ipal-dalam-lingkungan.webp', 
    category: 'Edukasi',
    date: '24 Agustus 2026',
    readTime: '6 Menit'
  },
  {
    id: 'kontraktor-ipal',
    title: 'Cara Memilih Jasa Pembuatan IPAL yang Tepat untuk Proyek Anda',
    description: 'Memilih jasa pembuatan IPAL tidak boleh sembarangan. Ketahui 7 hal penting yang harus diperhatikan agar sistem pengolahan limbah bekerja optimal.',
    content: `Memilih jasa pembuatan IPAL tidak boleh dilakukan hanya berdasarkan harga termurah. Sistem IPAL merupakan bagian penting dari pengelolaan air limbah, sehingga kesalahan dalam menentukan desain, kapasitas, maupun teknologi pengolahan dapat menyebabkan sistem tidak bekerja secara optimal.

Bagi pemilik usaha, pengembang properti, kontraktor, hotel, restoran, rumah sakit, maupun perusahaan industri, memilih vendor IPAL yang tepat merupakan salah satu keputusan penting dalam pembangunan fasilitas.

<strong>Apa Itu Jasa Pembuatan IPAL?</strong>
Jasa pembuatan IPAL adalah layanan yang membantu pelanggan dalam merancang dan menyediakan sistem pengolahan air limbah sesuai dengan kebutuhan proyek, mencakup konsultasi, perhitungan kapasitas, pembuatan desain, hingga fabrikasi dan instalasi.

<strong>Mengapa Tidak Boleh Asal Memilih Vendor IPAL?</strong>
Jika desain tidak sesuai, berbagai masalah dapat muncul, seperti:
- Air hasil pengolahan tidak sesuai target.
- Bau yang masih mengganggu.
- Kapasitas tidak mencukupi.
- Biaya operasional menjadi tinggi.

<strong>7 Hal yang Harus Diperhatikan Saat Memilih Jasa Pembuatan IPAL:</strong>

1. Pastikan Vendor Memahami Karakteristik Air Limbah
Setiap air limbah memiliki karakteristik berbeda. IPAL untuk rumah tangga tidak selalu dapat digunakan untuk restoran atau industri.

2. Perhatikan Kapasitas IPAL
Jangan memilih kapasitas hanya berdasarkan perkiraan tanpa memperhitungkan jumlah pengguna atau debit air limbah. Kapasitas yang terlalu kecil dapat menyebabkan sistem bekerja melebihi kemampuan desain.

3. Tanyakan Teknologi yang Digunakan
Vendor seharusnya dapat menjelaskan teknologi pengolahan yang digunakan (misal: Activated sludge, Biofilter, MBBR, dll) dan alasan teknologi tersebut dipilih.

4. Perhatikan Material Tangki
Salah satu material yang banyak digunakan adalah FRP (Fiberglass Reinforced Plastic). Pastikan juga ketebalan, struktur, desain, dan kualitas fabrikasinya.

5. Minta Gambar atau Desain Sistem
Sebelum memesan IPAL, mintalah gambaran sistem yang akan dibuat agar Anda memahami ukuran tangki, alur air limbah, dan posisi komponen.

6. Pastikan Ada Layanan Instalasi dan Commissioning
IPAL bukan hanya produk yang dikirim ke lokasi. Instalasi dan commissioning (pengujian sistem) sangat penting agar seluruh komponen dapat bekerja sesuai desain.

7. Jangan Hanya Membandingkan Harga
Bandingkan juga Desain + Material + Teknologi + Kapasitas + Komponen + Instalasi + Garansi + After Sales.

<strong>Mengapa Memilih PT Toyoda Fiber Indonesia?</strong>
PT Toyoda Fiber Indonesia menyediakan solusi untuk kebutuhan IPAL domestik, komersial, industri, STP, WWTP, dan tangki FRP/Fiberglass. Kami dapat membantu pelanggan dalam menentukan kapasitas dan konfigurasi sistem berdasarkan kebutuhan proyek.

Jangan memilih IPAL hanya berdasarkan harga. Pilih sistem berdasarkan kebutuhan, desain, kualitas material, teknologi, dan kemampuan vendor.

<strong>PT Toyoda Fiber Indonesia</strong>
📞 0811-1999-9777
🌐 ipaltoyoda.com
📧 toyodafiber.id@gmail.com`,
    image: '/cara-memilih-jasa-pembuatan-ipal-yang-tepat.webp', 
    category: 'Panduan',
    date: '25 Agustus 2026',
    readTime: '5 Menit'
  },
  {
    id: 'peran-fiberglass-dalam-sistem-ipal',
    title: 'Kenapa IPAL Harus Menggunakan Tangki Fiberglass? Ini Keunggulan Tangki FRP',
    description: 'Tangki fiberglass (FRP) memiliki sejumlah keunggulan seperti tahan korosi dan ringan, menjadikannya pilihan tangguh untuk berbagai sistem IPAL.',
    content: `Dalam membangun sistem IPAL (Instalasi Pengolahan Air Limbah), pemilihan teknologi pengolahan memang sangat penting. Namun, ada satu hal lain yang sering kali kurang diperhatikan, yaitu material tangki yang digunakan.

Tangki akan bersentuhan langsung dengan air limbah, bahan kimia tertentu, lumpur, serta proses biologis yang berlangsung selama pengolahan. Salah satu material yang banyak digunakan untuk kebutuhan tersebut adalah FRP (Fiberglass Reinforced Plastic) atau yang lebih dikenal sebagai tangki fiberglass.

<strong>Apa Itu Tangki Fiberglass?</strong>
Tangki fiberglass atau FRP adalah tangki yang dibuat menggunakan material komposit berupa resin dan serat fiberglass. FRP memiliki karakteristik yang berbeda dengan material seperti baja karbon atau beton.

<strong>Kenapa Tangki Fiberglass Cocok untuk IPAL?</strong>

1. Tahan terhadap Korosi
Air limbah dapat memiliki tingkat keasaman atau alkalinitas tertentu. Material FRP memiliki ketahanan korosi yang sangat baik.

2. Tidak Mudah Berkarat
Berbeda dengan tangki berbahan logam yang dapat mengalami karat apabila perlindungannya rusak, fiberglass tidak mengalami karat layaknya material baja.

3. Bobot Relatif Ringan
Karakteristik FRP yang ringan memberikan keuntungan dalam proses pengangkutan, pemindahan, dan instalasi di lokasi proyek, terutama yang aksesnya terbatas.

4. Dapat Dibuat Sesuai Kebutuhan
Dengan sistem fabrikasi yang dapat disesuaikan, tangki FRP dapat dirancang berdasarkan kebutuhan kapasitas, ruang terbatas, hingga dimensi khusus.

5. Cocok untuk Lingkungan yang Bersifat Korosif
Sistem IPAL memiliki lingkungan kerja yang cukup agresif secara biologis dan kimiawi. FRP sanggup bertahan pada kondisi ekstrem tersebut.

6. Perawatan Struktur Relatif Mudah
Karena tidak berkarat, perawatan struktur tangki menjadi lebih sederhana, meski pengecekan rutin tetap diperlukan.

7. Memiliki Umur Penggunaan yang Panjang
Ketahanan korosi yang tinggi sangat mendukung umur penggunaan tangki FRP untuk investasi jangka panjang.

<strong>Fiberglass vs Beton vs Baja</strong>
Beton sangat berat, membutuhkan pekerjaan konstruksi panjang, dan rawan retak/bocor. Baja rentan terhadap karat jika terkena limbah agresif. Fiberglass menawarkan titik tengah terbaik: tahan korosi layaknya beton pelapis, namun ringan dan cepat dipasang layaknya tangki portabel.

<strong>Apakah Semua Tangki IPAL Harus Fiberglass?</strong>
Tidak selalu. Namun, untuk banyak aplikasi IPAL, tangki FRP dapat menjadi pilihan yang sangat menarik karena kombinasi ketahanan korosi, bobot ringan, fleksibilitas desain, dan kemudahan instalasi.

<strong>Yang Lebih Penting: Kualitas Fiberglass</strong>
Kualitas tangki bergantung pada proses pembuatannya: jenis resin, ketebalan tangki, struktur penguat, kualitas laminasi, hingga fitting/sambungan.

<strong>Tangki Fiberglass untuk IPAL PT Toyoda Fiber Indonesia</strong>
PT Toyoda Fiber Indonesia menyediakan solusi tangki FRP/Fiberglass untuk IPAL, STP, WWTP, dan Storage tank. Spesifikasi tangki dapat disesuaikan dengan kebutuhan proyek Anda.

Jangan menentukan kapasitas dan spesifikasi hanya berdasarkan perkiraan. Konsultasikan terlebih dahulu kebutuhan proyek Anda.

<strong>PT Toyoda Fiber Indonesia</strong>
📞 0811-1999-9777
🌐 ipaltoyoda.com
📧 toyodafiber.id@gmail.com`,
    image: '/keunggulan-tangki-fiberglass-frp.webp', 
    category: 'Teknologi',
    date: '26 Agustus 2026',
    readTime: '6 Menit'
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
  'proyek-instalasi-ipal-stp-fiberglass-1.webp',
  'proyek-instalasi-ipal-stp-fiberglass-2.webp',
  'proyek-instalasi-ipal-stp-fiberglass-3.webp',
  'proyek-instalasi-ipal-stp-fiberglass-4.webp',
  'proyek-instalasi-ipal-stp-fiberglass-5.webp',
  'proyek-instalasi-ipal-stp-fiberglass-6.webp',
  'proyek-instalasi-ipal-stp-fiberglass-7.webp',
  'proyek-instalasi-ipal-stp-fiberglass-8.webp',
  'proyek-instalasi-ipal-stp-fiberglass-9.webp',
  'proyek-instalasi-ipal-stp-fiberglass-10.webp',
  'proyek-instalasi-ipal-stp-fiberglass-11.webp',
  'proyek-instalasi-ipal-stp-fiberglass-12.webp',
];

