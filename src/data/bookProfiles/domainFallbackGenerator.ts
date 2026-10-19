import { Book, BookPage } from '../../types/library';

interface DomainTheme {
  domainName: string;
  ch1Title: string;
  ch1Topics: string[];
  ch2Title: string;
  ch2Topics: string[];
  ch3Title: string;
  ch3Topics: string[];
  ch4Title: string;
  ch4Topics: string[];
  ch5Title: string;
  ch5Topics: string[];
  glossary: { term: string; desc: string }[];
  references: string[];
  keywords: string[];
  examQuestions: string[];
}

function detectDomainTheme(book: Book): DomainTheme {
  const title = book.title || '';
  const category = book.category || '';
  const synopsis = book.synopsis || '';
  const t = (title + ' ' + category + ' ' + synopsis).toLowerCase();

  // 1. Bisnis & Manajemen
  if (t.includes('manajemen') || t.includes('bisnis') || t.includes('pemasaran') || t.includes('marketing') || t.includes('strategi') || t.includes('kewirausahaan') || t.includes('organisasi')) {
    return {
      domainName: 'Manajemen Bisnis & Strategi Korporat',
      ch1Title: 'Bab 1: Fondasi Teoretis Manajemen & Perilaku Organisasi Modern',
      ch1Topics: [
        'Evolusi Teori Manajemen: Dari Taylorisme Klasik ke Pendekatan Humanistik Modern',
        'Fungsi-Fungsi Fundamental Manajemen: Perencanaan, Pengorganisasian, Pengarahan & Pengendalian',
        'Analisis Lingkungan Bisnis Makro (PESTLE) & Lingkungan Industri (Five Forces)',
        'Perilaku Organisasi: Kepemimpinan Transformasional, Motivasi Kerja & Dinamika Tim',
        'Perumusan Visi, Misi, Nilai Inti & Sasaran Strategis Perusahaan',
        'Teori Pengambilan Keputusan Manajerial dalam Kondisi Ketidakpastian',
        'Budaya Organisasi sebagai Sumber Keunggulan Kompetitif Berkelanjutan',
        'Manajemen Perubahan (Change Management) & Adaptasi Transformasi Digital',
        'Sintesis Teoretis: Kerangka Kerja Manajerial Menuju Efisiensi Operasional',
        'Rangkuman Bab 1 & Evaluasi Mandiri Ketercapaian Konsep Kepemimpinan',
      ],
      ch2Title: 'Bab 2: Manajemen Operasional, Rantai Pasok & Pengendalian Mutu',
      ch2Topics: [
        'Perancangan Proses Operasional & Tata Letak Fasilitas Produksi',
        'Manajemen Rantai Pasok Terpadu (Supply Chain Management - SCM)',
        'Pengendalian Persediaan: Model Economic Order Quantity (EOQ) & Just-in-Time (JIT)',
        'Manajemen Kualitas Total (Total Quality Management - TQM) & Kaizen',
        'Metodologi Lean & Six Sigma dalam Eliminasi Pemborosan (Waste)',
        'Perencanaan Kapasitas Agregat & Penjadwalan Kerja Operasional',
        'Manajemen Logistik & Distribusi Produk Menuju Kepuasan Pelanggan',
        'Audit Kinerja Operasional & Key Performance Indicators (KPI)',
        'Integrasi Teknologi Otomasi Enterprise Resource Planning (ERP)',
        'Rangkuman Bab 2 & Latihan Perhitungan Efisiensi Proses Bisnis',
      ],
      ch3Title: 'Bab 3: Manajemen Pemasaran Strategis & Perilaku Konsumen Digital',
      ch3Topics: [
        'Segmentasi Pasar, Penentuan Target (Targeting) & Penentuan Posisi (Positioning - STP)',
        'Bauran Pemasaran Terpadu (Marketing Mix 7P) pada Sektor Barang dan Jasa',
        'Analisis Perilaku Konsumen di Era Ekonomi Digital & Media Sosial',
        'Manajemen Merek (Brand Equity): Membangun Diferensiasi & Loyalitas Pelanggan',
        'Pemasaran Digital Omnichannel: SEO, Konten Kreatif & Konversi Penjualan',
        'Riset Pemasaran Empiris: Pengukuran Customer Lifetime Value (CLV)',
        'Strategi Penetapan Harga (Pricing Strategies) Berbasis Nilai Persepsi Konsumen',
        'Customer Relationship Management (CRM) & Retensi Pengguna Berkelanjutan',
        'Studi Kasus Peluncuran Produk & Ekspansi Pasar Korporasi Nasional',
        'Rangkuman Bab 3 & Simulasi Penyusunan Rencana Pemasaran Bisnis',
      ],
      ch4Title: 'Bab 4: Tata Kelola Perusahaan, Etika Bisnis & Keberlanjutan (ESG)',
      ch4Topics: [
        'Prinsip Good Corporate Governance (GCG): Transparansi, Akuntabilitas & Keadilan',
        'Tanggung Jawab Sosial Perusahaan (Corporate Social Responsibility - CSR)',
        'Integrasi Kerangka Environmental, Social, and Governance (ESG) dalam Laporan Tahunan',
        'Etika Bisnis Profesional: Pencegahan Konflik Kepentingan & Anti-Korupsi',
        'Manajemen Risiko Bisnis (Enterprise Risk Management - ERM) ISO 31000',
        'Kepatuhan Regulasi Ketenagakerjaan & Perlindungan Hak Karyawan',
        'Keberlanjutan Lingkungan Hidup dalam Operasi Bisnis Ramah Karbon',
        'Tata Kelola Hubungan dengan Pemangku Kepentingan (Stakeholders Engagement)',
        'Resolusi Krisis Reputasi Perusahaan & Komunikasi Publik Transparan',
        'Rangkuman Bab 4 & Telaah Dilema Etika Kepemimpinan Bisnis',
      ],
      ch5Title: 'Bab 5: Inovasi Model Bisnis, Kewirausahaan & Masa Depan Industri',
      ch5Topics: [
        'Eksplorasi Business Model Canvas (BMC) & Rekayasa Nilai Tambah Inovatif',
        'Strategi Blue Ocean: Menciptakan Ruang Pasar Baru Tanpa Pesaing',
        'Ekosistem Startup, Akselerasi Usaha & Pendanaan Modal Ventura (Venture Capital)',
        'Disrupsi Teknologi AI & Otomasi terhadap Lanskap Pekerjaan Masa Depan',
        'Rekomendasi Manajerial Strategis Menuju Daya Saing Global Berkelanjutan',
        'Kesimpulan Akhir Naskah Buku & Panduan Implementasi Praktis bagi Mahasiswa',
      ],
      glossary: [
        { term: 'Benchmarking', desc: 'Proses mengukur kinerja produk atau layanan terhadap standar industri terbaik.' },
        { term: 'Business Model Canvas', desc: 'Kerangka visual yang merangkum 9 elemen kunci strategi model bisnis.' },
        { term: 'Customer Lifetime Value', desc: 'Proyeksi total keuntungan yang dihasilkan dari hubungan dengan pelanggan sepanjang waktu.' },
        { term: 'Good Corporate Governance', desc: 'Sistem tata kelola yang mengatur hubungan antar pemangku kepentingan perusahaan secara transparan.' },
        { term: 'Just-in-Time (JIT)', desc: 'Metode persediaan yang menerima barang hanya saat diperlukan dalam proses produksi.' },
        { term: 'Key Performance Indicator', desc: 'Metrik terukur yang digunakan untuk mengevaluasi keberhasilan organisasi mencapai target.' },
        { term: 'PESTLE Analysis', desc: 'Analisis lingkungan makro meliputi Politik, Ekonomi, Sosial, Teknologi, Hukum, dan Lingkungan.' },
        { term: 'Total Quality Management', desc: 'Pendekatan manajemen menyeluruh yang berorientasi pada peningkatan mutu berkelanjutan.' },
      ],
      references: [
        'Kotler, P., & Keller, K. L. (2021). Marketing Management (16th ed.). Pearson Education.',
        'Porter, M. E. (2008). On Competition. Harvard Business Review Press.',
        'Robbins, S. P., & Judge, T. A. (2019). Organizational Behavior (18th ed.). Pearson.',
        'Heizer, J., Render, B., & Munson, C. (2020). Operations Management (13th ed.). Pearson.',
      ],
      keywords: ['Analisis PESTLE', 'Bauran Pemasaran 7P', 'Business Model Canvas', 'Good Corporate Governance', 'Just-in-Time (JIT)', 'Kepemimpinan Transformasional', 'Manajemen Rantai Pasok', 'Total Quality Management'],
      examQuestions: [
        'Jelaskan bagaimana analisis Five Forces Porter membantu manajer dalam memetakan intensitas persaingan industri!',
        'Uraikan perbedaan antara model persediaan Just-in-Time (JIT) dengan Economic Order Quantity (EOQ) beserta risiko penerapannya!',
        'Rancang sebuah kerangka strategi pemasaran STP (Segmentasi, Targeting, Positioning) untuk produk inovatif berbasis teknologi!',
        'Bagaimana integrasi prinsip ESG dapat meningkatkan nilai valuasi jangka panjang sebuah perusahaan di mata investor?',
      ],
    };
  }

  // 2. Akuntansi & Keuangan
  if (t.includes('akuntansi') || t.includes('keuangan') || t.includes('finansial') || t.includes('audit') || t.includes('pajak') || t.includes('investasi') || t.includes('anggaran')) {
    return {
      domainName: 'Akuntansi Keuangan & Analisis Pasar Modal',
      ch1Title: 'Bab 1: Kerangka Konseptual Pelaporan Keuangan & Standar Akuntansi',
      ch1Topics: [
        'Evolusi Standar Akuntansi: Dari GAAP Tradisional ke IFRS & PSAK Terkini',
        'Karakteristik Kualitatif Informasi Keuangan: Relevansi & Representasi Tepat',
        'Prinsip Dasar Akuntansi: Entitas Terpisah, Kelangsungan Usaha & Pengakuan Akrual',
        'Siklus Akuntansi: Jurnal Transaksi, Buku Besar, Neraca Saldo & Ayat Jurnal Penyesuaian',
        'Struktur Laporan Posisi Keuangan (Neraca) & Klasifikasi Aset/Liabilitas',
        'Laporan Laba Rugi Komprehensif: Pengakuan Pendapatan & Beban Operasional',
        'Laporan Arus Kas (Metode Langsung vs Tidak Langsung) & Laporan Perubahan Ekuitas',
        'Catatan atas Laporan Keuangan (CaLK) sebagai Sumber Pengungkapan Wajib',
        'Peran Akuntan Publik & Kode Etik Integritas Profesi Akuntan Indonesia',
        'Rangkuman Bab 1 & Latihan Penyusunan Laporan Keuangan Sederhana',
      ],
      ch2Title: 'Bab 2: Analisis Laporan Keuangan & Pengukuran Kinerja Finansial',
      ch2Topics: [
        'Analisis Horizontal (Tren) & Analisis Vertikal (Common Size) Laporan Keuangan',
        'Rasio Likuiditas: Rasio Lancar (Current Ratio) & Rasio Cepat (Quick Ratio)',
        'Rasio Solvabilitas: Rasio Utang terhadap Aset (DAR) & Utang terhadap Ekuitas (DER)',
        'Rasio Aktivitas: Perputaran Piutang, Perputaran Persediaan & Siklus Konversi Kas',
        'Rasio Profitabilitas: Margin Laba Bersih (NPM), ROA & Return on Equity (ROE)',
        'Dekomposisi Dupont Analysis: Membedah Pendorong Kinerja Imbal Hasil Ekuitas',
        'Analisis Arus Kas Bebas (Free Cash Flow - FCF) & Kapasitas Pembayaran Dividen',
        'Prediksi Kebangkrutan Korporasi: Model Altman Z-Score & Springate',
        'Analisis Kualitas Laba (Earnings Quality) & Pendeteksian Manajemen Laba',
        'Rangkuman Bab 2 & Studi Kasus Audit Keuangan Perusahaan Terbuka',
      ],
      ch3Title: 'Bab 3: Manajemen Keuangan Korporat & Penilaian Investasi Modal',
      ch3Topics: [
        'Nilai Waktu dari Uang (Time Value of Money): Nilai Sekarang (PV) & Masa Depan (FV)',
        'Kriteria Penganggaran Modal (Capital Budgeting): Net Present Value (NPV) & IRR',
        'Payback Period, Discounted Payback Period & Profitability Index (PI)',
        'Manajemen Modal Kerja: Kebijakan Piutang, Kas Optimal & Utang Dagang',
        'Struktur Modal Optimal: Teori Modigliani-Miller & Trade-Off Theory',
        'Biaya Modal Rata-Rata Tertimbang (Weighted Average Cost of Capital - WACC)',
        'Kebijakan Dividen Korporasi: Bird in the Hand vs Teori Irrelevansi Miller-Modigliani',
        'Valuasi Saham: Model Diskonto Dividen (DDM) & Price-to-Earnings Ratio (PER)',
        'Valuasi Obligasi: Tingkat Kupon, Imbal Hasil Saat Ini (YTM) & Durasi Macauley',
        'Rangkuman Bab 3 & Simulasi Kelayakan Investasi Proyek Bisnis',
      ],
      ch4Title: 'Bab 4: Pasar Modal, Manajemen Portofolio & Derivatif Keuangan',
      ch4Topics: [
        'Struktur Pasar Modal Indonesia (BEI, KSEI, KPEI) & Instrumen Investasi',
        'Teori Portofolio Modern Markowitz: Diversifikasi & Batas Efisien (Efficient Frontier)',
        'Model Penentuan Harga Aset Modal (Capital Asset Pricing Model - CAPM) & Beta Saham',
        'Hipotesis Pasar Efisien (Efficient Market Hypothesis - EMH): Lemah, Sedang & Kuat',
        'Manajemen Risiko Pasar: Pengukuran Value at Risk (VaR) & Stress Testing',
        'Instrumen Derivatif Finansial: Kontrak Berjangka (Futures), Forward & Swap',
        'Opsi Saham (Options): Strategi Call/Put & Model Penentuan Harga Black-Scholes',
        'Investasi Berkelanjutan & Sukuk Hijau (Green Bonds / ESG Investment)',
        'Perlindungan Investor, Keterbukaan Informasi & Pengawasan OJK',
        'Rangkuman Bab 4 & Latihan Pembentukan Portofolio Optimal Saham',
      ],
      ch5Title: 'Bab 5: Perpajakan, Audit Forensik & Masa Depan Akuntansi Digital',
      ch5Topics: [
        'Prinsip Perpajakan Badan & Penyelarasan Rekonsiliasi Fiskal Komersial',
        'Audit Internal & Audit Eksternal: Pengujian Substantif dan Pengendalian Internal',
        'Akuntansi Forensik & Investigasi Kecurangan Finansial (Fraud Triangle)',
        'Transformasi Akuntansi Digital: Otomasi Cloud Accounting & Blockchain Ledger',
        'Rekomendasi Praktis bagi Akuntan Publik dan Manajer Keuangan Masa Depan',
        'Kesimpulan Akhir Naskah Buku & Panduan Praktik Akuntansi Profesional',
      ],
      glossary: [
        { term: 'Altman Z-Score', desc: 'Rumus statistik multivariate untuk memprediksi probabilitas kebangkrutan korporasi.' },
        { term: 'Capital Budgeting', desc: 'Proses evaluasi dan seleksi investasi jangka panjang aktiva tetap.' },
        { term: 'Dupont Analysis', desc: 'Metode analisis yang memecah ROE menjadi margin laba, perputaran aset, dan leverage.' },
        { term: 'Net Present Value (NPV)', desc: 'Selisih antara nilai sekarang arus kas masuk dengan pengeluaran investasi awal.' },
        { term: 'Price-to-Earnings Ratio', desc: 'Rasio valuasi yang membandingkan harga saham perusahaan dengan laba per lembar sahamnya.' },
        { term: 'Return on Equity (ROE)', desc: 'Rasio profitabilitas yang mengukur kemampuan perusahaan menghasilkan laba dari ekuitas pemegang saham.' },
        { term: 'Value at Risk (VaR)', desc: 'Ukuran statistik batas kerugian maksimum portofolio pada tingkat keyakinan tertentu.' },
        { term: 'WACC', desc: 'Rata-rata tertimbang biaya pendanaan modal perusahaan dari utang dan ekuitas.' },
      ],
      references: [
        'Kieso, D. E., Weygandt, J. J., & Warfield, T. D. (2020). Intermediate Accounting (IFRS ed.). Wiley.',
        'Bodie, Z., Kane, A., & Marcus, A. J. (2021). Investments (12th ed.). McGraw-Hill Education.',
        'Brigham, E. F., & Ehrhardt, M. C. (2020). Financial Management: Theory & Practice (16th ed.). Cengage.',
        'Ikatan Akuntan Indonesia (IAI). (2024). Standar Akuntansi Keuangan Indonesia. Jakarta: IAI.',
      ],
      keywords: ['Altman Z-Score', 'Analisis Dupont', 'Capital Asset Pricing Model (CAPM)', 'Laporan Posisi Keuangan', 'Net Present Value (NPV)', 'Rasio Profitabilitas (ROE)', 'Value at Risk (VaR)', 'WACC'],
      examQuestions: [
        'Jelaskan mengapa metode Net Present Value (NPV) lebih diunggulkan secara teoretis dibanding Internal Rate of Return (IRR) dalam penganggaran modal!',
        'Gunakan rumus Dupont Analysis untuk menganalisis faktor apa saja yang mendorong peningkatan Return on Equity (ROE) perusahaan!',
        'Uraikan perbedaan perlakuan akuntansi antara arus kas operasi metode langsung dan metode tidak langsung!',
        'Jelaskan bagaimana konsep Beta dalam CAPM mengukur risiko sistematis suatu saham relatif terhadap pergerakan pasar!',
      ],
    };
  }

  // 3. Desain, Multimedia & Komunikasi
  if (t.includes('multimedia') || t.includes('desain') || t.includes('komunikasi') || t.includes('media') || t.includes('visual') || t.includes('animasi') || t.includes('film') || t.includes('interaksi')) {
    return {
      domainName: 'Desain Multimedia & Komunikasi Visual Terapan',
      ch1Title: 'Bab 1: Teori Dasar Desain Komunikasi Visual & Prinsip Persepsi Gestalt',
      ch1Topics: [
        'Prinsip Dasar Desain: Keseimbangan, Kontras, Irama, Penekanan & Kesatuan Visual',
        'Teori Persepsi Gestalt: Kedekatan (Proximity), Kemiripan (Similarity), dan Kontinuitas',
        'Teori Warna Komprehensif: Lingkaran Warna, Harmoni Warna & Psikologi Warna Manusia',
        'Tipografi Terapan: Klasifikasi Huruf (Serif, Sans-Serif, Display), Hirarki Teks & Keterbacaan',
        'Format Grafis Digital: Vektor Resolusi-Independen vs Bitmap Berbasis Piksel',
        'Prinsip Komposisi: Rule of Thirds, Golden Ratio & Garis Pengarah Mata (Leading Lines)',
        'Semiologi Visual: Tanda, Ikon, Indeks, dan Simbol dalam Komunikasi Massa',
        'Evolusi Media: Dari Media Cetak Tradisional ke Pengalaman Visual Interaktif',
        'Kode Etik Desain & Hak Cipta Karya Visual Kreatif',
        'Rangkuman Bab 1 & Evaluasi Mandiri Portofolio Desain Grafis Dasar',
      ],
      ch2Title: 'Bab 2: Antarmuka Pengguna (UI) & Pengalaman Pengguna (UX) Digital',
      ch2Topics: [
        'Filosofi Desain Berpusat pada Pengguna (User-Centered Design - UCD)',
        'Riset Pengguna: Wawancara Mendalam, Persona Pengguna & Pemetaan Perjalanan (User Journey)',
        'Arsitektur Informasi: Pengelompokan Konten (Card Sorting) & Navigasi Antarmuka',
        'Wireframing & Prototyping Cepat: Dari Sketsa Rendah (Low-Fi) ke Prototipe Interaktif (Hi-Fi)',
        'Sistem Desain (Design Systems): Komponen UI, Token Desain & Konsistensi Visual',
        'Prinsip Aksesibilitas Desain: Standar Kontras Warna WCAG & Keterbacaan untuk Semua',
        'Mikrointeraksi & Umpan Balik Visual yang Menyenangkan bagi Pengguna',
        'Pengujian Kegunaan (Usability Testing): Metrik Waktu Penyelesaian & System Usability Scale (SUS)',
        'Desain Responsif: Penyesuaian Antarmuka Antar Perangkat Seluler, Tablet & Desktop',
        'Rangkuman Bab 2 & Latihan Perancangan Antarmuka Aplikasi Digital',
      ],
      ch3Title: 'Bab 3: Produksi Audio-Visual, Animasi & Rekayasa Video Digital',
      ch3Topics: [
        'Prinsip Animasi Disney: Squash and Stretch, Anticipation, Timing & Staging',
        'Alur Produksi Video: Pra-Produksi (Storyboarding, Naskah), Produksi & Pasca-Produksi',
        'Teknik Sinematografi: Ukuran Bidikan (Shot Sizes), Sudut Kamera & Pergerakan Kamera',
        'Pencahayaan Visual Tiga Titik: Key Light, Fill Light, dan Back Light',
        'Desain Tata Suara (Sound Design): Perekaman Foley, Voice-over & Penyelarasan Audio Ambien',
        'Teknik Penyuntingan Non-Linier: Kontinuitas Naratif, Transisi & Ritme Penyuntingan',
        'Komposisi Efek Visual (VFX): Rotoscoping, Green Screen Keying & Color Grading',
        'Animasi Grafis Bergerak (Motion Graphics) untuk Identitas Merek dan Iklan',
        'Format Kompresi Video: Codec H.264/H.265, Kontainer MP4, dan Bitrate Streaming',
        'Rangkuman Bab 3 & Analisis Karya Sinematik dan Iklan Televisi',
      ],
      ch4Title: 'Bab 4: Media Interaktif, Realitas Virtual (VR/AR) & Game Design',
      ch4Topics: [
        'Prinsip Desain Media Interaktif & Model Keterlibatan Pengguna (User Engagement)',
        'Pengantar Realitas Virtual (VR) & Realitas Berimbuh (AR): Penjejakan Spasial 3D',
        'Game Design Fundamentals: Aturan Permainan, Tantangan, Reward & Gamifikasi',
        'Penceritaan Interaktif (Interactive Storytelling) & Narasi Non-Linier',
        'Teknologi Engine Kreatif: Alur Kerja Pembuatan Aset 3D dan Tekstur Realistis',
        'Desain Spasial Antarmuka Audio (Spatial Audio) untuk Pengalaman Imersif',
        'Aplikasi AR/VR dalam Edukasi, Simulasi Medis & Pemasaran Komersial',
        'Tantangan Ergonomi Digital: Mabuk Gerak (Motion Sickness) & Kenyamanan Penglihatan',
        'Etika Desain Interaktif: Menghindari Fitur Adiktif & Dark Patterns yang Merugikan',
        'Rangkuman Bab 4 & Perancangan Konsep Media Imersif Interaktif',
      ],
      ch5Title: 'Bab 5: Komunikasi Massa, Tren Media Sosial & Masa Depan Desain AI',
      ch5Topics: [
        'Teori Komunikasi Massa: Agenda Setting, Uses and Gratifications & Difusi Inovasi',
        'Strategi Konten Multimedia untuk Platform Media Sosial (TikTok, Instagram, YouTube)',
        'Kecerdasan Buatan Generatif dalam Desain: Kolaborasi Desainer dengan Prompt Kreatif',
        'Masa Depan Portofolio Desainer: Menjaga Orisinalitas & Sentuhan Manusiawi',
        'Rekomendasi Praktis bagi Mahasiswa Menghadapi Industri Kreatif Global',
        'Kesimpulan Akhir Naskah Buku & Panduan Sukses Karier Multimedia Kreatif',
      ],
      glossary: [
        { term: 'Color Grading', desc: 'Proses penyesuaian warna rekaman video untuk menciptakan suasana emosional tertentu.' },
        { term: 'Design System', desc: 'Kumpulan standar komponen visual dan pedoman kode yang dapat digunakan kembali.' },
        { term: 'Gestalt Principles', desc: 'Teori psikologi persepsi visual tentang bagaimana pikiran manusia mengorganisir elemen visual.' },
        { term: 'Rule of Thirds', desc: 'Pedoman komposisi yang membagi bidang gambar menjadi sembilan bagian sama besar.' },
        { term: 'Storyboarding', desc: 'Rangkaian gambar ilustrasi visual yang memetakan urutan adegan produksi film/animasi.' },
        { term: 'System Usability Scale', desc: 'Kuesioner standar 10 pertanyaan untuk mengukur tingkat kemudahan penggunaan sistem.' },
        { term: 'Typography Hierarchy', desc: 'Pengaturan ukuran dan bobot jenis huruf untuk memandu urutan pembacaan mata.' },
        { term: 'Wireframe', desc: 'Rancangan tata letak dasar visual halaman web atau aplikasi tanpa elemen estetika final.' },
      ],
      references: [
        'Norman, D. (2013). The Design of Everyday Things. Basic Books.',
        'Lupton, E. (2014). Thinking with Type: A Critical Guide for Designers. Princeton Architectural Press.',
        'Williams, R. (2015). The Non-Designer\'s Design Book (4th ed.). Peachpit Press.',
        'Thomas, F., & Johnston, O. (1995). The Illusion of Life: Disney Animation. Disney Editions.',
      ],
      keywords: ['Design System', 'Prinsip Gestalt', 'Rule of Thirds', 'System Usability Scale (SUS)', 'Teori Warna Harmonis', 'Tipografi Hirarki Visual', 'User-Centered Design', 'Wireframing UI/UX'],
      examQuestions: [
        'Jelaskan bagaimana hukum Gestalt tentang kedekatan (proximity) dan kemiripan (similarity) diterapkan dalam perancangan navigasi aplikasi mobile!',
        'Uraikan 12 prinsip animasi klasik dan bagaimana prinsip Squash & Stretch diterapkan dalam motion graphic antarmuka digital!',
        'Rancang sebuah alur uji keterpakaian (Usability Testing) menggunakan instrumen System Usability Scale (SUS) untuk situs web perpustakaan kampus!',
        'Diskusikan bagaimana kehadiran generative AI mengubah peran desainer grafis dari pencipta manual menjadi pengarah seni (art director)!',
      ],
    };
  }

  // 4. Default / Bidang Keilmuan Terapan Komprehensif
  return {
    domainName: category || 'Kajian Akademik & Pengetahuan Terapan',
    ch1Title: 'Bab 1: Fondasi Teoretis & Kerangka Konseptual Bidang ' + (category || 'Terkait'),
    ch1Topics: [
      `Latar Belakang Epistemologis & Perkembangan Historis Disiplin ${category || 'Keilmuan'}`,
      `Definisi Baku, Batasan Konsep & Taksonomi Bidang ${title}`,
      'Paradigma Teoretis Klasik vs Pendekatan Kontemporer',
      'Prinsip-Prinsip Fundamental yang Mengatur Hubungan Kausal Antar Fenomena',
      'Model Konseptual & Kerangka Berpikir Analitis Peneliti',
      'Kajian Literatur Kritis: Membandingkan Teori-Teori Utama Dunia',
      'Perumusan Variabel & Parameter Kunci dalam Penyelidikan Empiris',
      'Identifikasi Masalah Nyata & Relevansinya bagi Masyarakat Modern',
      'Sintesis Konseptual Bab 1 Menuju Landasan Kerja Terstruktur',
      'Rangkuman Bab 1 & Evaluasi Mandiri Pemahaman Teori Dasar',
    ],
    ch2Title: 'Bab 2: Metodologi, Arsitektur Sistem & Prosedur Investigasi',
    ch2Topics: [
      'Desain Metodologi: Pendekatan Kualitatif, Kuantitatif & Campuran Terpadu',
      'Teknik Pengumpulan Data Lapangan, Instrumen Pengukur & Uji Validitas',
      'Dekomposisi Sistem & Struktur Alur Kerja Terstandar',
      'Prosedur Operasional Baku & Protokol Pengendalian Kualitas',
      'Analisis Data Statistik & Uji Keandalan Hipotesis Kerja',
      'Simulasi Pemodelan Sistem & Pengujian Ketahanan Parameter',
      'Manajemen Risiko Investigasi & Pencegahan Bias Konfirmasi',
      'Komparasi Efektivitas Antara Berbagai Pendekatan Metodologis',
      'Rangkuman Bab 2: Kerangka Kerja yang Siap Direplikasi',
      'Latihan Praktis Penyusunan Protokol Prosedural Mahasiswa',
    ],
    ch3Title: 'Bab 3: Penerapan Praktis, Analisis Kasus & Solusi Lapangan',
    ch3Topics: [
      'Transisi dari Teori Laboratorium ke Penerapan Lapangan Skala Penuh',
      'Manajemen Sumber Daya, Waktu & Efisiensi Alokasi Biaya',
      'Studi Kasus 1: Keberhasilan Penerapan Solusi pada Sektor Industri Unggulan',
      'Studi Kasus 2: Implementasi pada Layanan Publik & Dampak Kesejahteraan Sosial',
      'Tantangan Teknis Tak Terduga & Langkah Rekayasa Balik Penanganannya',
      'Optimasi Kinerja Sistem & Pengukuran Indikator Keberhasilan Terukur',
      'Integrasi Lintas Disiplin Ilmu dalam Menyelesaikan Masalah Kompleks',
      'Evaluasi Manfaat Berkelanjutan & Return on Investment (ROI)',
      'Sintesis Pengalaman Praktis & Pelajaran Berharga bagi Profesional',
      'Rangkuman Bab 3 & Tugas Analisis Simulasi Kasus Nyata',
    ],
    ch4Title: 'Bab 4: Tata Kelola, Etika Profesi, Kebijakan & Regulasi Hukum',
    ch4Topics: [
      'Etika Profesi & Tanggung Jawab Moral dalam Praktik ' + (category || 'Keilmuan'),
      'Kepatuhan terhadap Kerangka Regulasi & Peraturan Perundang-Undangan Nasional',
      'Perlindungan Hak Asasi Manusia, Kerahasiaan Data & Privasi Individu',
      'Pencegahan Konflik Kepentingan & Penegakan Integritas Ilmiah Bebas Plagiasi',
      'Tata Kelola Berkelanjutan (Environmental, Social, Governance - ESG)',
      'Manajemen Risiko Krisis & Rencana Kontinjensi Keselamatan Kerja',
      'Audit Kepatuhan Berkala & Standar Akreditasi Mutu Institusional',
      'Dilema Moral Kontemporer & Studi Kasus Resolusi Keputusan Etis',
      'Tujuh Prinsip Utama Tata Kelola Beretika yang Wajib Dijunjung',
      'Rangkuman Bab 4 & Debat Telaah Kritis Kebijakan Publik',
    ],
    ch5Title: 'Bab 5: Sintesis, Tren Masa Depan & Kesimpulan Akademik',
    ch5Topics: [
      `Sintesis Menyeluruh Temuan Ilmiah Sepanjang Naskah ${title}`,
      'Evaluasi Keterbatasan Batas Asumsi & Rekomendasi Riset Lanjutan',
      'Proyeksi Perkembangan Teknologi & Transformasi Global 10 Tahun Mendatang',
      'Rekomendasi Kebijakan Strategis bagi Pengambil Keputusan & Kampus',
      'Agenda Riset Tugas Akhir & Topik Skripsi Potensial bagi Mahasiswa',
      'Pernyataan Penutup & Pesan Inspiratif bagi Generasi Cendekia',
    ],
    glossary: [
      { term: 'Empiris', desc: 'Berdasarkan bukti pengamatan, pengalaman langsung, atau eksperimen terukur di lapangan.' },
      { term: 'Epistemologi', desc: 'Cabang filsafat yang menyelidiki asal-usul, sifat, metode, dan batas-batas pengetahuan manusia.' },
      { term: 'Heuristik', desc: 'Metode praktis pemecahan masalah yang efisien dan memadai untuk mencapai solusi cepat.' },
      { term: 'Integritas Akademik', desc: 'Komitmen terhadap nilai kejujuran, kepercayaan, keadilan, rasa hormat, dan tanggung jawab ilmiah.' },
      { term: 'Metodologi', desc: 'Sistem cara kerja dan kerangka berpikir logis yang digunakan untuk memecahkan suatu masalah ilmiah.' },
      { term: 'Paradigma', desc: 'Kerangka berpikir konseptual yang diakui bersama oleh komunitas keilmuan dalam kurun waktu tertentu.' },
      { term: 'Reliabilitas', desc: 'Tingkat konsistensi dan kestabilan instrumen pengukur saat dilakukan pengujian berulang.' },
      { term: 'Validitas', desc: 'Derajat ketepatan antara instrumen penelitian dengan objek yang sesungguhnya hendak diukur.' },
    ],
    references: [
      `${book.citation?.apa || `${book.author}. (${book.year}). ${book.title}. ${book.publisher}.`}`,
      'Creswell, J. W. (2018). Research Design: Qualitative, Quantitative, and Mixed Methods Approaches. SAGE Publications.',
      'Suharsimi, A. (2020). Prosedur Penelitian Suatu Pendekatan Praktik. Jakarta: Rineka Cipta.',
      'Kementerian Riset dan Pendidikan Tinggi RI. (2023). Panduan Penulisan Naskah Ilmiah dan Integritas Sivitas Akademika.',
    ],
    keywords: ['Analisis Empiris', 'Desain Metodologi', 'Etika Akademik', 'Evaluasi Kinerja', 'Kerangka Konseptual', 'Model Sistem', 'Tata Kelola Berkelanjutan', 'Uji Validitas'],
    examQuestions: [
      `Jelaskan bagaimana landasan teoretis yang diuraikan pada Bab 1 naskah "${title}" menjawab tantangan kontemporer di era disrupsi saat ini!`,
      'Bandingkan kelebihan dan kekurangan metodologi yang dipaparkan pada Bab 2 terhadap metode konvensional sebelumnya!',
      'Rancang sebuah skenario penanganan risiko tata kelola etika berdasarkan prinsip kepatuhan yang dibahas pada Bab 4!',
      'Bagaimana rekomendasi strategis pada Bab 5 dapat diimplementasikan dalam konteks tugas akhir atau skripsi mahasiswa di lingkungan perguruan tinggi?',
    ],
  };
}

export function generateDomainAwarePages(book: Book): BookPage[] {
  const authorName = book.author || 'Penulis Perpustakaan Akademik';
  const title = book.title;
  const pub = book.publisher || 'Penerbit Akademia';
  const year = book.year || 2024;
  const ddc = book.ddc || '000';
  const category = book.category || 'Ilmu Terapan';

  const theme = detectDomainTheme(book);
  const pages: BookPage[] = [];

  // Hal 1 - 4: Preliminaries
  pages.push({
    pageNumber: 1,
    chapterNumber: 0,
    chapterTitle: 'Informasi Bibliografi & Hak Cipta',
    sectionTitle: 'Halaman Judul & Kolofon Resmi Perpustakaan',
    paragraphs: [
      `Buku Teks Akademik Digital: "${title}".`,
      `Penulis: ${authorName}. Diterbitkan secara resmi oleh ${pub}, tahun publikasi ${year}.`,
      `Klasifikasi Desimal Dewey (DDC): ${ddc}. Kategori Disiplin: ${category}. Nomor ISBN: ${book.isbn}. Naskah resmi Repositori Digital Perpustakaan Akademik Terakreditasi.`,
      `Koleksi digital resmi untuk sivitas akademika kampus dalam mendukung perkuliahan, penyusunan skripsi tugas akhir, dan riset interdisipliner berdaya saing global.`,
    ],
    callout: {
      type: 'summary',
      title: 'Verifikasi Kurasi Perpustakaan Kampus',
      content: `Koleksi resmi Perpustakaan Akademik yang telah melewati telaah kuratorial dan siap diakses 24 jam secara daring.`,
    },
  });

  pages.push({
    pageNumber: 2,
    chapterNumber: 0,
    chapterTitle: 'Prakata Penulis & Kurator Perpustakaan',
    sectionTitle: `Kata Pengantar: Eksplorasi Keilmuan ${theme.domainName}`,
    paragraphs: [
      `Puji syukur kita panjatkan ke hadirat Tuhan Yang Maha Esa atas terbitnya edisi digital naskah "${title}" karya ${authorName}. Di tengah pesatnya perkembangan ilmu pengetahuan, ketersediaan literatur yang relevan dan mendalam menjadi modal berharga bagi setiap pembaca.`,
      `Buku ini disusun untuk memberikan panduan komprehensif di bidang ${theme.domainName}. Melalui 5 bab utama yang terbagi secara berbobot, pembaca diajak menelusuri fondasi konseptual, metodologi terapan, studi kasus lapangan, serta dimensi tata kelola dan masa depan keilmuan.`,
      `Apresiasi kami sampaikan kepada Perguruan Tinggi atas komitmennya menghadirkan literatur bermutu tinggi bagi seluruh mahasiswa.`,
    ],
    callout: {
      type: 'discussion',
      title: 'Amanat Akademik Penulis',
      content: `Gunakanlah setiap halaman buku ini untuk memperkaya cakrawala berpikir kritis dan merumuskan solusi bermanfaat bagi kemajuan bangsa.`,
    },
  });

  pages.push({
    pageNumber: 3,
    chapterNumber: 0,
    chapterTitle: 'Pedoman Pembacaan & Silabus Mata Kuliah',
    sectionTitle: 'Panduan Telaah Kritis Mahasiswa',
    paragraphs: [
      `Naskah digital ini dirancang dengan struktur terpadu 5 bab utama dan 55 halaman aktif. Setiap halaman memuat konsep inti, elaborasi analitis, contoh aplikasi nyata, dan kesimpulan ringkas.`,
      `Capaian Pembelajaran Lulusan (CPL) meliputi: (1) Penguasaan landasan teoretis ${theme.domainName}; (2) Keterampilan menganalisis data dan metodologi terapan; (3) Kemampuan merumuskan strategi pemecahan masalah berdasarkan studi kasus nyata.`,
      `Mahasiswa disarankan membaca naskah secara sistematis, memanfaatkan fitur Penanda Halaman (Bookmark), dan mencatat temuan kunci pada fitur Catatan Riset reader.`,
    ],
    callout: {
      type: 'definition',
      title: 'Alokasi Pembelajaran',
      content: `Direkomendasikan alokasi waktu membaca mandiri 120 menit per bab untuk mencapai pemahaman konseptual yang optimal.`,
    },
  });

  pages.push({
    pageNumber: 4,
    chapterNumber: 0,
    chapterTitle: 'Daftar Isi & Sistematika Keilmuan',
    sectionTitle: 'Peta Navigasi Bab & Topik Bahasan',
    paragraphs: [
      `Sistematika bahasan naskah "${title}":`,
      `• ${theme.ch1Title} (Halaman 5 - 14)\n• ${theme.ch2Title} (Halaman 15 - 24)\n• ${theme.ch3Title} (Halaman 25 - 34)\n• ${theme.ch4Title} (Halaman 35 - 44)\n• ${theme.ch5Title} (Halaman 45 - 50)`,
      `• BAGIAN PENUTUP: Glosarium Terpadu (Hal 51), Bibliografi Buku Referensi (Hal 52), Indeks Istilah Subjek (Hal 53), Bank Soal Ujian Komprehensif (Hal 54), Catatan & Kolofon (Hal 55).`,
    ],
  });

  // Bab 1: Hal 5 - 14
  theme.ch1Topics.forEach((topicText, idx) => {
    const pNum = 5 + idx;
    pages.push({
      pageNumber: pNum,
      chapterNumber: 1,
      chapterTitle: theme.ch1Title,
      sectionTitle: `Sub-Bab 1.${idx + 1}: ${topicText}`,
      paragraphs: [
        `Pembahasan pada halaman ${pNum} berfokus pada ${topicText.toLowerCase()}. Dalam naskah "${title}", ${authorName} menjelaskan bahwa pemahaman terhadap aspek ini merupakan landasan krusial sebelum melangkah ke penerapan praktis yang lebih kompleks.`,
        `Melalui pendekatan analitis yang terstruktur, berbagai dimensi masalah diuraikan secara mendalam dengan mengaitkan konsep teoritis pada realitas empiris di bidang ${theme.domainName}. Hal ini memastikan bahwa pembaca tidak hanya menghafal konsep, melainkan memahami logika di balik setiap prinsip yang diajarkan.`,
        `Dalam konteks pembelajaran di Perguruan Tinggi, penguasaan materi ini menjadi bekal berharga dalam menyelesaikan tugas analisis, proposal penelitian, dan proyek studi mandiri.`,
      ],
      callout: {
        type: idx % 2 === 0 ? 'definition' : 'case_study',
        title: `Poin Kunci Halaman ${pNum}`,
        content: `Sub-Bab 1.${idx + 1} menegaskan bahwa keteraturan konseptual menjadi fondasi utama keberhasilan implementasi di lapangan.`,
      },
    });
  });

  // Bab 2: Hal 15 - 24
  theme.ch2Topics.forEach((topicText, idx) => {
    const pNum = 15 + idx;
    pages.push({
      pageNumber: pNum,
      chapterNumber: 2,
      chapterTitle: theme.ch2Title,
      sectionTitle: `Sub-Bab 2.${idx + 1}: ${topicText}`,
      paragraphs: [
        `Pada Sub-Bab 2.${idx + 1}, fokus pembahasan diarahkan pada ${topicText.toLowerCase()}. Keberhasilan sistem di bidang ${theme.domainName} sangat bergantung pada ketepatan metodologi dan ketelitian arsitektur yang dirancang sejak tahap perencanaan.`,
        `Penulis (${authorName}) menyajikan langkah-langkah prosedural baku, diagram alur operasional, dan parameter evaluasi yang telah teruji efektivitasnya dalam meminimalkan galat dan mengoptimalkan efisiensi kerja.`,
        `Mahasiswa diarahkan untuk mempraktikkan protokol ini dalam kegiatan simulasi laboratorium dan penyusunan naskah laporan ilmiah di lingkungan perguruan tinggi.`,
      ],
      callout: {
        type: 'case_study',
        title: `Metodologi Kerja (Hal ${pNum})`,
        content: `Penerapan prosedur terstandar pada Sub-Bab 2.${idx + 1} menjamin keandalan hasil investigasi dan konsistensi replikasi sistem.`,
      },
    });
  });

  // Bab 3: Hal 25 - 34
  theme.ch3Topics.forEach((topicText, idx) => {
    const pNum = 25 + idx;
    pages.push({
      pageNumber: pNum,
      chapterNumber: 3,
      chapterTitle: theme.ch3Title,
      sectionTitle: `Sub-Bab 3.${idx + 1}: ${topicText}`,
      paragraphs: [
        `Halaman ${pNum} menyajikan telaah mendalam mengenai ${topicText.toLowerCase()}. Penerapan konsep naskah "${title}" dalam konteks nyata menuntut kemampuan adaptasi terhadap dinamika lingkungan yang selalu berubah.`,
        `Melalui dokumentasi studi kasus riil yang disajikan, ${authorName} memperlihatkan bagaimana teori diimplementasikan untuk menyelesaikan masalah operasional di lapangan, membedah faktor pendukung keberhasilan serta mitigasi atas potensi hambatan teknis.`,
        `Kajian terapan ini melatih kepekaan mahasiswa Perguruan Tinggi dalam merancang inovasi solutif yang memberikan dampak positif nyata.`,
      ],
      callout: {
        type: 'case_study',
        title: `Catatan Implementasi Lapangan (Hal ${pNum})`,
        content: `Hasil observasi mengonfirmasi bahwa kepatuhan terhadap prinsip dasar berkorelasi langsung dengan capaian efisiensi solusi hingga di atas 85%.`,
      },
    });
  });

  // Bab 4: Hal 35 - 44
  theme.ch4Topics.forEach((topicText, idx) => {
    const pNum = 35 + idx;
    pages.push({
      pageNumber: pNum,
      chapterNumber: 4,
      chapterTitle: theme.ch4Title,
      sectionTitle: `Sub-Bab 4.${idx + 1}: ${topicText}`,
      paragraphs: [
        `Pembahasan pada halaman ${pNum} menyoroti ${topicText.toLowerCase()}. Di era modern, keunggulan teknis harus selalu berjalan seiring dengan integritas moral, kepatuhan hukum, dan tata kelola yang bertanggung jawab.`,
        `Penulis (${authorName}) menegaskan pentingnya menjunjung tinggi etika profesi, melindungi privasi dan kepentingan pemangku kepentingan, serta memastikan bahwa setiap aktivitas yang dijalankan memenuhi regulasi perundang-undangan yang berlaku.`,
        `Prinsip tata kelola beretika ini menjadi bagian tak terpisahkan dari pembentukan karakter unggul mahasiswa di Perguruan Tinggi.`,
      ],
      callout: {
        type: 'discussion',
        title: `Fokus Tata Kelola & Etika (Hal ${pNum})`,
        content: `Integritas dan kepatuhan hukum adalah benteng utama yang menjaga keberlanjutan dan kepercayaan publik terhadap suatu organisasi.`,
      },
    });
  });

  // Bab 5: Hal 45 - 50
  theme.ch5Topics.forEach((topicText, idx) => {
    const pNum = 45 + idx;
    pages.push({
      pageNumber: pNum,
      chapterNumber: 5,
      chapterTitle: theme.ch5Title,
      sectionTitle: `Sub-Bab 5.${idx + 1}: ${topicText}`,
      paragraphs: [
        `Sebagai bagian pamungkas dari buku "${title}", halaman ${pNum} mengulas ${topicText.toLowerCase()}. Penulis merajut benang merah dari seluruh konsep yang telah dibahas sebelumnya untuk menarik kesimpulan komprehensif.`,
        `Karya ini membuka wawasan pembaca mengenai tren masa depan, peluang riset lanjutan, dan langkah strategis yang perlu disiapkan dalam menyongsong tantangan peradaban di bidang ${theme.domainName}.`,
        `Karya ilmiah ini diharapkan terus menjadi sumber inspirasi bagi sivitas akademika Perguruan Tinggi dalam menghasilkan karya-karya orisinal baru.`,
      ],
      callout: {
        type: 'summary',
        title: `Kesimpulan Inti (Hal ${pNum})`,
        content: `Jadikan akhir dari naskah buku ini sebagai awal dari penjelajahan mandiri dan penerapan ilmu pengetahuan demi kebaikan masyarakat.`,
      },
    });
  });

  // Hal 51: Glosarium
  const glossaryParagraphs = theme.glossary.map((g) => `• ${g.term}: ${g.desc}`);
  pages.push({
    pageNumber: 51,
    chapterNumber: 6,
    chapterTitle: 'Glosarium Komprehensif & Istilah Kunci',
    sectionTitle: 'Kamus Istilah Teknis Baku (A - Z)',
    paragraphs: [
      `Glosarium terminologi baku yang digunakan dalam naskah "${title}":`,
      glossaryParagraphs.slice(0, 4).join('\n'),
      glossaryParagraphs.slice(4).join('\n'),
    ],
    callout: {
      type: 'definition',
      title: 'Pedoman Istilah Standar',
      content: `Definisi disusun berdasarkan leksikon baku asosiasi profesi dan standar akademik terakreditasi.`,
    },
  });

  // Hal 52: Bibliografi
  const refList = theme.references.map((r, i) => `${i + 1}. ${r}`).join('\n');
  pages.push({
    pageNumber: 52,
    chapterNumber: 6,
    chapterTitle: 'Bibliografi & Daftar Pustaka Lengkap',
    sectionTitle: 'Rujukan Literatur Ilmiah Nasional & Internasional',
    paragraphs: [
      `Daftar literatur rujukan ilmiah yang digunakan dalam penulisan naskah "${title}":`,
      refList,
      `Seluruh pustaka di atas tersedia dan dapat ditelaah lebih lanjut di Perpustakaan Perguruan Tinggi.`,
    ],
  });

  // Hal 53: Indeks
  const kwList = theme.keywords.map((kw, i) => `• ${kw}: Hal ${6 + i * 5}`).join('\n');
  pages.push({
    pageNumber: 53,
    chapterNumber: 6,
    chapterTitle: 'Indeks Subjek & Kata Kunci Terindeks',
    sectionTitle: 'Penelusuran Lokasi Topik Berdasarkan Halaman',
    paragraphs: [
      `Indeks subjek untuk mempercepat penelusuran topik spesifik dalam naskah ini:`,
      kwList,
      `Gunakan nomor halaman di atas untuk langsung membaca pembahasan pada e-book reader digital.`,
    ],
  });

  // Hal 54: Soal Ujian
  const examList = theme.examQuestions.map((q, i) => `SOAL ${i + 1}: ${q}`).join('\n\n');
  pages.push({
    pageNumber: 54,
    chapterNumber: 6,
    chapterTitle: 'Bank Soal Ujian Komprehensif',
    sectionTitle: 'Uji Penguasaan Materi Akademik Mahasiswa',
    paragraphs: [
      `Soal evaluasi mandiri untuk persiapan ujian semester atau sidang tugas akhir di lingkungan perguruan tinggi:`,
      examList,
      `Diskusikan jawaban Anda bersama kelompok belajar atau konsultasikan langsung dengan dosen pengampu mata kuliah terkait.`,
    ],
    callout: {
      type: 'exercise',
      title: 'Pedoman Penilaian Soal',
      content: `Penilaian berfokus pada ketepatan argumen teoretis (40%), kesesuaian data empiris (40%), dan etika penalaran kritis (20%).`,
    },
  });

  // Hal 55: Kolofon
  pages.push({
    pageNumber: 55,
    chapterNumber: 6,
    chapterTitle: 'Lembar Catatan Mahasiswa & Kolofon Akhir',
    sectionTitle: 'Verifikasi Sirkulasi Digital Perguruan Tinggi',
    paragraphs: [
      `Selamat! Anda telah menyelesaikan pembacaan seluruh 55 halaman naskah "${title}" karya ${authorName}.`,
      `Gunakan lembar akhir ini atau fitur catatan digital reader untuk menyimpan ringkasan dan kutipan penting untuk tugas akhir Anda.`,
      `Naskah digital resmi Repositori Perpustakaan Perpustakaan Akademik Perguruan Tinggi. Kontak layanan e-book: layanan.pustaka@perguruan-tinggi.ac.id. Hak cipta dilindungi undang-undang.`,
    ],
    callout: {
      type: 'summary',
      title: 'Verifikasi Progres Baca',
      content: `Progres: 100% (55 dari 55 Halaman Terbaca). Data aktivitas baca tersinkronisasi dengan akun perpustakaan kampus.`,
    },
  });

  return pages;
}
