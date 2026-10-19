import { Book, BookPage } from '../../types/library';

export function getMobileProgrammingBookPages(book: Book): BookPage[] {
  const authorName = book.author || 'Dr. Ir. Fajar Nugroho, S.Kom., M.T. & Tim Lab Sistem Informasi';
  const title = book.title || 'Pengembangan Aplikasi Mobile Terintegrasi Sistem Informasi & RESTful API';
  const pub = book.publisher || 'Informatika Akademia Press';
  const year = book.year || 2024;
  const ddc = book.ddc || '005.258';

  const pages: BookPage[] = [];

  // ==========================================
  // Hal 1 - 4: Preliminaries & Front Matter
  // ==========================================
  pages.push({
    pageNumber: 1,
    chapterNumber: 0,
    chapterTitle: 'Informasi Bibliografi & Hak Cipta',
    sectionTitle: 'Halaman Judul & Kolofon Resmi Perpustakaan',
    paragraphs: [
      `Buku Teks Akademik Digital: "${title}".`,
      `Penulis Utama: ${authorName}. Diterbitkan secara resmi oleh ${pub}, tahun publikasi ${year}.`,
      `Klasifikasi Desimal Dewey (DDC): ${ddc} (Rekayasa Perangkat Lunak Mobile, Pemrograman Sistem Informasi & Layanan Web). Nomor ISBN: ${book.isbn}. Terdaftar resmi dalam Repositori Digital Perpustakaan Akademik Terakreditasi.`,
      `Buku pegangan komprehensif bagi mahasiswa program studi Sistem Informasi, Rekayasa Perangkat Lunak, dan Ilmu Komputer dalam merancang serta mengimplementasikan aplikasi mobile lintas platform terintegrasi dengan basis data relasional, RESTful API/GraphQL, dan keamanan otentikasi enterprise.`,
    ],
    callout: {
      type: 'summary',
      title: 'Verifikasi Kurasi Jurusan Sistem Informasi',
      content: `Karya akademik ini telah melewati telaah kurikulum laboratorium rekayasa perangkat lunak mobile perguruan tinggi dan direkomendasikan untuk mata kuliah Pemrograman Perangkat Bergerak & Sistem Informasi Enterprise.`,
    },
  });

  pages.push({
    pageNumber: 2,
    chapterNumber: 0,
    chapterTitle: 'Prakata Penulis & Kurator Perpustakaan',
    sectionTitle: 'Kata Pengantar: Arsitektur Mobile dalam Ekosistem Sistem Informasi Modern',
    paragraphs: [
      `Puji syukur kami haturkan ke hadirat Tuhan Yang Maha Esa atas terselesaikannya naskah digital "${title}". Dalam lanskap transformasi digital modern, aplikasi mobile bukan lagi sekadar kanal informasi pelengkap, melainkan titik sentuh utama (primary touchpoint) proses bisnis enterprise yang menghubungkan pengguna akhir dengan infrastruktur sistem informasi korporasi.`,
      `Buku ini dirancang dari perspektif holistik seorang arsitek sistem informasi: menyeimbangkan keandalan arsitektur kode (Clean Architecture, MVVM, BLoC), komunikasi jaringan yang efisien dan toleran terhadap latensi (RESTful API, WebSocket, Offline-First Sync), hingga aspek keamanan token JWT, enkripsi data lokal, dan pengujian otomatis.`,
      `Penulis menyampaikan apresiasi setinggi-tingginya kepada sivitas akademika jurusan sistem informasi dan rekayasa perangkat lunak atas diskursus intelektual yang memperkaya materi naskah ini.`,
    ],
    callout: {
      type: 'discussion',
      title: 'Amanat Akademik Penulis',
      content: `Rancanglah aplikasi mobile bukan sekadar agar dapat berjalan di layar ponsel cerdas, tetapi bangunlah sistem yang terukur, aman, mudah dipelihara, dan memberikan nilai tambah nyata bagi produktivitas bisnis.`,
    },
  });

  pages.push({
    pageNumber: 3,
    chapterNumber: 0,
    chapterTitle: 'Pedoman Pembacaan & Silabus Mata Kuliah',
    sectionTitle: 'Panduan Praktikum & Capaian Pembelajaran Lulusan (CPL)',
    paragraphs: [
      `Materi dalam buku ini disusun secara sistematis ke dalam 5 bab utama dan 55 halaman aktif e-book. Setiap halaman memuat fondasi teori arsitektur, diagram struktur alir, potongan implementasi kode modern (Flutter/Dart & React Native/TypeScript/Kotlin), serta studi kasus integrasi sistem informasi nyata.`,
      `Capaian Pembelajaran Lulusan (CPL) meliputi: (1) Kemahiran merancang UI/UX responsif berbasis pedoman Material Design 3 dan iOS Human Interface Guidelines; (2) Penguasaan manajemen state terpusat dan arsitektur decoupled; (3) Kemampuan membangun integrasi client-server aman dengan token OAuth2/JWT dan sinkronisasi basis data SQLite/Room/Hive; (4) Kompetensi menerapkan pengujian unit, integrasi, dan deployment CI/CD mobile.`,
      `Mahasiswa sangat disarankan menguji contoh kode pada repositori Git laboratorium dan mendokumentasikan hasil pengujian performa memori (profiling) pada setiap sesi praktikum.`,
    ],
    callout: {
      type: 'definition',
      title: 'Prasyarat Keilmuan Mahasiswa',
      content: `Pemahaman tentang Pemrograman Berorientasi Objek (OOP), konsep dasar Basis Data Relasional (SQL), protokol HTTP/HTTPS, dan pemformatan data JSON merupakan prasyarat ideal untuk menelaah buku ini.`,
    },
  });

  pages.push({
    pageNumber: 4,
    chapterNumber: 0,
    chapterTitle: 'Daftar Isi & Sistematika Keilmuan',
    sectionTitle: 'Peta Struktur Bab & Pembagian Topik Bahasan',
    paragraphs: [
      `Sistematika bahasan naskah buku 55 halaman e-book:`,
      `• Bab 1: Fondasi Rekayasa Aplikasi Mobile & Ekosistem Sistem Informasi (Hal 5 - 14)\n• Bab 2: Arsitektur Perangkat Lunak, Manajemen State & Desain Antarmuka (Hal 15 - 24)\n• Bab 3: Komunikasi Jaringan, Integrasi RESTful API & Layanan Backend (Hal 25 - 34)\n• Bab 4: Persistensi Data Lokal, Strategi Offline-First & Keamanan Mobile (Hal 35 - 44)\n• Bab 5: Pengujian Otomatis, Profiling Kinerja & Continuous Delivery (Hal 45 - 50)`,
      `• BAGIAN PENUTUP: Glosarium Komprehensif Mobile (Hal 51), Bibliografi Ilmiah & Rujukan Standar (Hal 52), Indeks Subjek Istilah (Hal 53), Bank Soal Ujian Sistem Informasi Mobile (Hal 54), Catatan Pembaca & Verifikasi Kolofon (Hal 55).`,
    ],
  });

  // ==========================================
  // Bab 1: Hal 5 - 14 (Fondasi Mobile & SI)
  // ==========================================
  const ch1Topics = [
    {
      title: 'Peran Aplikasi Mobile dalam Ekosistem Sistem Informasi Bisnis',
      p1: 'Dalam arsitektur sistem informasi modern, aplikasi mobile bertindak sebagai distributed client node yang memperluas jangkauan operasional Enterprise Resource Planning (ERP), Customer Relationship Management (CRM), dan Supply Chain Management (SCM) secara real-time ke genggaman pemangku kepentingan.',
      p2: 'Perbedaan karakteristik platform mobile dengan desktop—meliputi keterbatasan daya baterai, fluktuasi konektivitas seluler, keberagaman ukuran layar, dan siklus hidup proses di latar belakang (background execution)—menuntut metodologi rekayasa yang adaptif dan efisien.',
      callout: 'Keterbatasan sumber daya perangkat bergerak mengharuskan perancangan arsitektur berorientasi konsumsi energi minimal dan latensi jaringan rendah.',
    },
    {
      title: 'Komparasi Paradigma Pengembangan: Native, Cross-Platform & PWA',
      p1: 'Rekayasa perangkat lunak mobile menawarkan tiga jalur pendekatan utama: Native murni (Kotlin untuk Android, Swift untuk iOS), Cross-Platform berkinerja tinggi (Flutter dengan kompilasi Ahead-of-Time C++ engine, React Native dengan arsitektur New Architecture Fabric/TurboModules), dan Progressive Web Apps (PWA) berbasis browser sandboxing.',
      p2: 'Bagi program studi Sistem Informasi, evaluasi pemilihan paradigma didasarkan pada matriks Trade-off: biaya siklus hidup perangkat lunak (Total Cost of Ownership), kecepatan time-to-market, konsistensi pengalaman antarmuka antar-perangkat, dan kebutuhan akses perangkat keras tingkat rendah (seperti sensor biometrik dan NFC).',
      callout: 'Flutter dan React Native menjadi standar industri paling efisien untuk aplikasi sistem informasi bisnis karena menyatukan 90%+ basis kode lintas platform.',
    },
    {
      title: 'Siklus Hidup Aplikasi Bergerak (Activity & Widget Lifecycle)',
      p1: 'Memahami siklus hidup komponen mobile (Android Activity lifecycle: onCreate, onStart, onResume, onPause, onStop, onDestroy; dan State lifecycle pada kerangka deklaratif seperti initState, build, didUpdateWidget, dispose) adalah kunci mencegah kebocoran memori (memory leak).',
      p2: 'Ketika pengguna berpindah aplikasi atau menerima panggilan telepon, sistem operasi dapat menghentikan proses aplikasi untuk menghemat memori. Arsitektur sistem informasi yang baik harus mampu menyimpan status transaksional pengguna (saved state persistence) secara transparan.',
      callout: 'Penyimpanan status transaksional yang tepat menjamin integritas formulir input pengguna ketika terjadi interupsi layar atau alokasi memori rendah.',
    },
    {
      title: 'Prinsip Desain Antarmuka Mobile: Human Interface & Material 3',
      p1: 'Desain antarmuka mobile sistem informasi harus memprioritaskan Cognitive Load yang rendah bagi pengguna operasional. Pedoman Google Material Design 3 dan Apple Human Interface Guidelines menetapkan konvensi visual, hierarki tipografi, grid responsif 8-point, serta target sentuhan ergonomis minimal 48x48 dp.',
      p2: 'Desain adaptif (adaptive layouts) memastikan tata letak dapat menyesuaikan diri secara mulus dari layar ponsel cerdas 6 inci, tablet 11 inci, hingga antarmuka layar lipat (foldable devices) dengan memanfaatkan Breakpoints dan Canonical Layouts.',
      callout: 'Target sentuhan minimal 48x48 dp dan kontras warna standar WCAG AAA mencegah kesalahan operasional input pada aplikasi transaksi mobile.',
    },
    {
      title: 'Aksesibilitas Digital (Accessibility) & Desain Inklusif',
      p1: 'Aplikasi sistem informasi publik maupun institusi wajib memenuhi standar Web Content Accessibility Guidelines (WCAG) 2.2 tingkat AA pada lingkungan mobile. Ini mencakup pemberian Semantics Label untuk pembaca layar (TalkBack / VoiceOver), penskalaan teks dinamis (Dynamic Type), dan rasio kontras visual minimal 4.5:1.',
      p2: 'Penerapan semantik aksesibilitas tidak hanya melayani pengguna difabel, melainkan juga mempermudah pengujian antarmuka otomatis (UI Automation Testing) karena setiap elemen memiliki pengenal semantik yang presisi.',
      callout: 'Label semantik terstruktur adalah prasyarat ganda untuk aksesibilitas pengguna disabilitas dan otomasi end-to-end testing.',
    },
    {
      title: 'Manajemen Dependensi & Manajemen Versi (Gradle, CocoaPods, Pub)',
      p1: 'Proyek mobile modern melibatkan puluhan pustaka eksternal. Pengelolaan dependensi yang handal melalui Gradle (Kotlin DSL pada Android), CocoaPods/SPM (pada iOS), dan Pub (pada Flutter) memerlukan pemahaman mendalam tentang semantic versioning (SemVer) dan audit keamanan dependensi.',
      p2: 'Konflik dependensi transitif dan pustaka kadaluarsa dapat memperkenalkan celah keamanan kritis pada aplikasi sistem informasi. Pembaca diajarkan teknik dependency locking dan scanning kerentanan otomatis menggunakan alat OWASP Dependency-Check.',
      callout: 'Audit dependensi berkala melindungi aplikasi perbankan dan transaksi mobile dari serangan rantai pasok perangkat lunak (supply chain attack).',
    },
    {
      title: 'Manajemen Izin Runtime (Runtime Permissions Model)',
      p1: 'Sistem operasi mobile modern menerapkan arsitektur keamanan Zero-Trust pada data pengguna melalui Runtime Permission. Akses ke kamera, mikrofon, lokasi presisi (Fine Location), kontak, dan penyimpanan lokal memerlukan permohonan eksplisit kepada pengguna saat fitur tersebut hendak digunakan.',
      p2: 'Dalam konteks sistem informasi (misal aplikasi absensi karyawan berbasis geofencing GPS), kegagalan meminta izin secara persuasif (just-in-time contextual dialog) dapat mengakibatkan penolakan pengguna dan terhentinya alur proses bisnis.',
      callout: 'Jelaskan alasan pemanfaatan izin secara kontekstual sebelum dialog perizinan sistem operasi dimunculkan ke hadapan pengguna.',
    },
    {
      title: 'Interaksi Perangkat Keras: Kamera, QR Scanner & Biometrik',
      p1: 'Integrasi modul perangkat keras merupakan keunggulan utama aplikasi mobile dibanding aplikasi web murni. Pemindaian QR Code/Barcode untuk verifikasi sirkulasi aset sistem informasi, kamera untuk verifikasi dokumen KTP/SIM, dan autentikasi biometrik (Fingerprint & Face Recognition) mempercepat alur transaksi.',
      p2: 'Pemanfaatan modul biometrik Android BiometricPrompt dan iOS LocalAuthentication memastikan kunci privat autentikasi tersimpan aman dalam chip perangkat keras Secure Element / Android Keystore.',
      callout: 'Otentikasi biometrik pada mobile client melindungi integritas transaksi bernilai tinggi tanpa mengorbankan kenyamanan pengguna.',
    },
    {
      title: 'Geolokasi, Geofencing & Pemetaan Rute Logistik Sistem Informasi',
      p1: 'Banyak domain sistem informasi mengandalkan data spasial: manajemen armada kurir, verifikasi lokasi kehadiran lapangan, dan analisis rute operasional. API lokasi presisi memanfaatkan penggabungan data satelit GNSS (GPS, GLONASS, Galileo), menara seluler, dan sinyal Wi-Fi (Fused Location Provider).',
      p2: 'Penulis membedah strategi penghematan konsumsi baterai melalui pengaturan interval polling adaptif, perpindahan ke mode Geofencing berbasis batas poligon virtual, dan pemfilteran noise koordinat menggunakan filter Kalman sederhana.',
      callout: 'Penggunaan Fused Location Provider dengan interval dinamis mampu mereduksi konsumsi baterai sistem pelacak lapangan hingga lebih dari 60%.',
    },
    {
      title: 'Arsitektur Multi-Modul & Skalabilitas Kode Sistem Enterprise',
      p1: 'Ketika aplikasi mobile sistem informasi tumbuh mencakup puluhan fitur bisnis (autentikasi, katalog produk, keranjang, analitik, profil), monolit kode tunggal akan memperlambat waktu kompilasi dan menyulitkan kolaborasi multi-tim mahasiswa atau pengembang.',
      p2: 'Penerapan arsitektur multi-modul (Feature-based modularization) memisahkan kode menjadi modul terisolasi: :core:network, :core:database, :feature:auth, :feature:dashboard. Ini mempercepat build caching dan mendukung fitur dynamic feature delivery.',
      callout: 'Modularisasi fitur mengisolasi perubahan kode sehingga pengujian regresi dapat difokuskan pada modul yang dimodifikasi saja.',
    },
  ];

  ch1Topics.forEach((t, i) => {
    const pageNum = 5 + i;
    pages.push({
      pageNumber: pageNum,
      chapterNumber: 1,
      chapterTitle: 'Bab 1: Fondasi Rekayasa Aplikasi Mobile & Ekosistem Sistem Informasi',
      sectionTitle: `Sub-Bab 1.${i + 1}: ${t.title}`,
      paragraphs: [
        `Halaman ${pageNum} mengkaji topik penting: ${t.title}. Sebagai bagian dari pengantar komprehensif, materi ini menautkan kebutuhan proses bisnis organisasi dengan spesifikasi teknis platform perangkat bergerak modern.`,
        t.p1,
        t.p2,
        `Dalam konteks pembelajaran di jurusan Sistem Informasi, penguasaan materi ini menjadi bekal fundamental bagi mahasiswa dalam menyusun proposal proyek perangkat lunak dan laporan tugas akhir.`,
      ],
      callout: {
        type: i % 2 === 0 ? 'definition' : 'case_study',
        title: `Poin Kunci Halaman ${pageNum}`,
        content: t.callout,
      },
    });
  });

  // ==========================================
  // Bab 2: Hal 15 - 24 (Arsitektur & State Management)
  // ==========================================
  const ch2Topics = [
    {
      title: 'Prinsip Clean Architecture & Domain-Driven Design (DDD)',
      p1: 'Clean Architecture memisahkan kode menjadi tiga lapisan konsentris: Presentation Layer (UI & Controller/Bloc), Domain Layer (Use Cases & Business Entities), dan Data Layer (Repositories, Data Sources, Remote API & Local DB).',
      p2: 'Kaidah ketergantungan (Dependency Rule) menyatakan bahwa lapisan dalam tidak boleh mengenal implementasi lapisan luar. Domain layer murni bebas dari framework UI, sehingga logika bisnis sistem informasi dapat diuji 100% tanpa emulator.',
      callout: 'Kaidah Clean Architecture memastikan logika kalkulasi transaksi bisnis sepenuhnya terbebas dari siklus perubahan antarmuka pengguna.',
    },
    {
      title: 'Pola Model-View-ViewModel (MVVM) & Dekomposisi Komponen',
      p1: 'Pola MVVM memisahkan tanggung jawab visual (View) dari pengelolaan data dan logika presentasi (ViewModel). ViewModel mentransformasikan entitas mentah dari repository menjadi status representasi yang siap dirender secara reaktif oleh View.',
      p2: 'View hanya bertugas mengamati (observe) aliran data dari ViewModel dan memicu aksi pengguna (user intents). Ketika terjadi rotasi layar atau perubahan konfigurasi perangkat, ViewModel bertahan hidup dan menjaga integritas state antarmuka.',
      callout: 'Pemisahan tegas tanggung jawab ViewModel menjamin data tampilan tidak hilang ketika terjadi perubahan orientasi layar ponsel.',
    },
    {
      title: 'Manajemen State Terpusat: BLoC (Business Logic Component)',
      p1: 'Pola BLoC memanfaatkan paradigma Reactive Streams (Rx / Dart Streams). Arsitektur ini memperlakukan seluruh interaksi aplikasi sebagai peristiwa: Events masuk ke dalam BLoC, diproses oleh fungsi bisnis, dan menghasilkan rentetan States baru yang ditangkap oleh UI.',
      p2: 'Keunggulan utama BLoC dalam sistem informasi enterprise adalah prediktabilitas mutlak dan ketertelusuran alur state (Traceability). Setiap transisi status dapat dicatat dalam audit log untuk debugging masalah transaksi perbankan atau stok barang.',
      callout: 'Pola State Machine pada BLoC meniadakan kemungkinan kondisi balapan (race condition) pada pemrosesan transaksi yang berjalan serentak.',
    },
    {
      title: 'Manajemen State Deklaratif: Riverpod, Redux & Provider',
      p1: 'Selain BLoC, ekosistem modern menawarkan pustaka state management seperti Riverpod (pada Flutter) dan Redux Toolkit (pada React Native). Riverpod menawarkan compile-safe dependency injection tanpa ketergantungan pada pohon widget BuildContext.',
      p2: 'Redux menetapkan prinsip Single Source of Truth melalui Immutable State Tree dan Pure Reducer Functions. Mahasiswa diajak membandingkan trade-off boilerplate kode antara Redux, Riverpod, dan BLoC berdasarkan kompleksitas skala proyek.',
      callout: 'Pilihlah solusi state management yang menjamin immutability data dan memudahkan penulisan pengujian unit tanpa mocking berlebihan.',
    },
    {
      title: 'Dependency Injection (DI) & Pola Service Locator (GetIt, Hilt)',
      p1: 'Dependency Injection merupakan implementasi prinsip Inversion of Control (IoC). Daripada komponen UI membuat instance HttpClient atau DatabaseHelper secara mandiri, seluruh dependensi disuntikkan dari luar melalui konstruktor atau container DI (seperti Google Hilt / GetIt).',
      p2: 'DI memfasilitasi penggantian implementasi produksi dengan Mock Repositories saat pengujian berjalan, sekaligus mempermudah pengelolaan siklus hidup objek (Singleton vs Factory scope) guna mencegah keborosan memori.',
      callout: 'Container DI memungkinkan pengujian unit mensimulasikan kegagalan jaringan backend secara instan tanpa menyentuh server produksi.',
    },
    {
      title: 'Pola Repository (Repository Pattern) & Abstraksi Sumber Data',
      p1: 'Repository Pattern bertindak sebagai fasilitator tunggal antara lapisan Domain dan sumber data fisik. Domain Layer hanya memanggil fungsi seperti `getUserProfile(id)` tanpa perlu mengetahui apakah data diambil dari cache lokal SQLite atau panggilan REST API server.',
      p2: 'Repository mengimplementasikan strategi Cache-First atau Network-First: mengambil data lokal seketika untuk respons antarmuka instan, lalu menyegarkan data dari server di latar belakang dan memperbarui basis data lokal.',
      callout: 'Repository Pattern mengabstraksikan kompleksitas fallback jaringan dan caching lokal dari pemikiran pengembang antarmuka.',
    },
    {
      title: 'Navigasi Kompleks & Deep Linking Terstruktur (Declarative Routing)',
      p1: 'Sistem informasi enterprise kerap menuntut navigasi bersarang (nested navigation), navigasi tab paralel, dan proteksi rute (auth guard) untuk halaman otorisasi admin. Kerangka navigasi deklaratif seperti GoRouter (Flutter) dan React Navigation menyediakan penanganan rute berbasis URL.',
      p2: 'Deep Linking (App Links / Universal Links) memungkinkan aplikasi mobile dibuka langsung ke halaman detail dokumen spesifik (misal `/loans/detail?id=loan-001`) dari email notifikasi kampus atau pemindaian QR Code.',
      callout: 'Deep linking yang terverifikasi secara kriptografis (Digital Asset Links) menjamin rute aplikasi hanya dapat dipicu oleh domain institusi resmi.',
    },
    {
      title: 'Desain Komponen Reusable & Design System Institusional',
      p1: 'Konsistensi antarmuka sistem informasi antar-modul dicapai melalui pembangunan Atomic Design System: Atoms (Buttons, Inputs, Badges), Molecules (SearchField with Dropdown), Organisms (AppHeader, BookCard), hingga Templates (Page Scaffold).',
      p2: 'Membangun pustaka komponen reusable memangkas waktu pengerjaan modul baru hingga 40% dan memastikan seluruh elemen mematuhi pedoman warna, tipografi, dan radius sudut terstandar.',
      callout: 'Design system yang terstandar meniadakan inkonsistensi visual dan mempercepat orientasi pengembang baru dalam tim rekayasa.',
    },
    {
      title: 'Manajemen Formulir Kompleks & Validasi Input Real-Time',
      p1: 'Sistem informasi sarat dengan formulir transaksi: pendaftaran anggota, pengajuan pinjaman buku, hingga pengisian survei kepuasan. Penanganan formulir mobile memerlukan validasi asinkron (misal validasi ketersediaan NIM/email secara real-time ke API).',
      p2: 'Pemisahan state formulir dari widget menggunakan FormGroup atau Formik/Zod mencegah perendaman ulang seluruh layar (full rebuild) setiap kali pengguna mengetik satu karakter, sehingga animasi tetap mulus pada 60/120 fps.',
      callout: 'Validasi parsial per-bidang input dengan debouncing 300ms mencegah banjir permintaan verifikasi ke server backend.',
    },
    {
      title: 'Animasi Mikro, Transisi Halaman Responsif & Persepsi Performa',
      p1: 'Animasi dalam aplikasi bisnis bukan sekadar hiasan estetika, melainkan alat komunikasi psikologis untuk memandu perhatian pengguna (visual affordance) dan menyamarkan latensi pemrosesan data (perceived performance).',
      p2: 'Pemanfaatan Hero Transitions antar-layar, Shimmer Loading Skeleton saat mengambil data API, dan feedback haptik lembut meningkatkan rasa kepuasan pengguna saat berinteraksi dengan aplikasi sistem informasi.',
      callout: 'Shimmer skeleton loader memberikan persepsi pemuatan data yang 30% lebih cepat dibandingkan indikator putar melingkar konvensional.',
    },
  ];

  ch2Topics.forEach((t, i) => {
    const pageNum = 15 + i;
    pages.push({
      pageNumber: pageNum,
      chapterNumber: 2,
      chapterTitle: 'Bab 2: Arsitektur Perangkat Lunak, Manajemen State & Desain Antarmuka',
      sectionTitle: `Sub-Bab 2.${i + 1}: ${t.title}`,
      paragraphs: [
        `Pada Sub-Bab 2.${i + 1}, fokus pembahasan diarahkan pada ${t.title.toLowerCase()}. Dalam rekayasa sistem informasi modern, rancangan arsitektur yang bersih merupakan investasi jangka panjang untuk kemudahan perawatan sistem.`,
        t.p1,
        t.p2,
        `Mahasiswa program sarjana diarahkan untuk menerapkan pola arsitektur ini secara disiplin pada proyek praktikum dan modul tugas akhir sistem informasi.`,
      ],
      callout: {
        type: 'case_study',
        title: `Penerapan Praktis (Hal ${pageNum})`,
        content: t.callout,
      },
    });
  });

  // ==========================================
  // Bab 3: Hal 25 - 34 (Jaringan & Integrasi API)
  // ==========================================
  const ch3Topics = [
    {
      title: 'Desain Kontrak RESTful API & Standar Pertukaran Data JSON',
      p1: 'Integrasi mobile-backend bertumpu pada kontrak antarmuka API yang disepakati melalui spesifikasi OpenAPI / Swagger. Struktur respons terstandar (status, code, message, data, meta-pagination) menjamin parser mobile tidak mengalami error tak terduga.',
      p2: 'Penerapan status code HTTP yang semantik (200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 422 Unprocessable Entity, 500 Server Error) mempermudah penanganan galat terpusat di sisi client.',
      callout: 'Standar skema OpenAPI memungkinkan pembuatan model data client secara otomatis (code generation) tanpa kesalahan pengetikan manual.',
    },
    {
      title: 'Konfigurasi HTTP Client: Interceptor, Timeout & Retry Logic',
      p1: 'Pustaka HTTP client seperti Dio (Flutter) atau Axios/Ky (React Native) menyediakan mekanisme Interceptor untuk mencegat setiap permintaan dan respons jaringan secara terpusat.',
      p2: 'Interceptor digunakan untuk: (1) Menyuntikkan Authorization Header Bearer JWT; (2) Mencatat log jaringan (logging) saat debugging; (3) Menerapkan Exponential Backoff Retry ketika terjadi gangguan koneksi sementara; (4) Mengatur batasan connectTimeout dan receiveTimeout ketat (maksimal 15 detik).',
      callout: 'Interceptor terpusat memastikan setiap panggilan keluar otomatis membawa token otentikasi valid tanpa duplikasi kode pada setiap controller.',
    },
    {
      title: 'Otentikasi Berbasis Token: JWT, Refresh Token & Rotasi Kredensial',
      p1: 'Autentikasi stateless menggunakan JSON Web Token (JWT) terdiri dari Access Token berumur pendek (misal 15 menit) dan Refresh Token berumur lebih panjang (misal 7-30 hari). Ketika Access Token kedaluwarsa (401 Unauthorized), HTTP Interceptor mobile mencegat galat tersebut.',
      p2: 'Interceptor secara otomatis mengirimkan permintaan penyegaran token ke endpoint `/api/auth/refresh` di latar belakang, memperbarui token di secure storage, dan mengulang kembali permintaan pengguna yang sempat tertunda tanpa memaksa pengguna masuk kembali.',
      callout: 'Alur refresh token transparan mencegah frustrasi pengguna akibat sesi login yang terputus di tengah-tengah transaksi.',
    },
    {
      title: 'Penanganan Galat Terpadu (Error Handling & Domain Failure Mapping)',
      p1: 'Koneksi jaringan mobile rentan mengalami kegagalan: SocketException (tidak ada sinyal), TimeoutException (sinyal lemah), HttpBadResponse (kesalahan server), hingga FormatException (data corrupt). Seluruh galat teknis ini tidak boleh ditampilkan mentah-mentah ke hadapan pengguna.',
      p2: 'Pola Failure Mapping menerjemahkan kesalahan teknis jaringan menjadi objek Domain Failure (seperti `NetworkFailure`, `ServerFailure`, `UnauthorizedFailure`, `ValidationFailure`) yang dilengkapi pesan bersahabat dalam Bahasa Indonesia bagi pengguna aplikasi.',
      callout: 'Pemetaan galat teknis ke pesan yang ramah pengguna meningkatkan kepercayaan sivitas terhadap keandalan sistem informasi digital.',
    },
    {
      title: 'Paginasi Data Efisien: Infinite Scroll & Pagination Metadata',
      p1: 'Memuat ribuan rekaman buku atau data transaksi sekaligus ke perangkat mobile akan menghabiskan bandwidth dan memicu Out-of-Memory (OOM). Pendekatan Paginasi Kursor (Cursor-based Pagination) atau Offset-based Pagination membatasi pengambilan data per batch (misal 15-20 item).',
      p2: 'Implementasi Infinite Scroll mendeteksi posisi scroll controller ketika pengguna mendekati 80% panjang daftar, lalu secara mulus meminta halaman berikutnya ke server sembari menampilkan indikator pemuatan halus di footer.',
      callout: 'Paginasi berbasis kursor menghemat memori perangkat hingga 80% dan mencegah lag render pada daftar katalog berukuran besar.',
    },
    {
      title: 'Unggah Berkas Multipart: Kompresi Gambar & Indikator Progres',
      p1: 'Fitur unggah bukti pembayaran, foto profil mahasiswa, atau lampiran dokumen tugas akhir memerlukan transfer data Multipart/Form-Data. Foto resolusi tinggi dari kamera ponsel (5-15 MB) harus dikompresi di sisi client sebelum diunggah.',
      p2: 'Pustaka kompresi gambar (seperti flutter_image_compress) mereduksi dimensi dan kualitas JPEG ke ukuran optimal (<500 KB) tanpa mengurangi keterbacaan, disertai indikator persentase progres unggahan real-time.',
      callout: 'Kompresi gambar di sisi client mempercepat waktu unggah dokumen hingga 10 kali lipat dan menghemat kapasitas penyimpanan server cloud.',
    },
    {
      title: 'Komunikasi Real-Time: WebSocket & Server-Sent Events (SSE)',
      p1: 'Fitur pemantauan status persetujuan pinjaman buku secara langsung, obrolan bantuan mahasiswa, atau pembaruan ketersediaan stok fisik memerlukan koneksi persisten dua arah melalui WebSocket.',
      p2: 'Dalam bab ini dibahas arsitektur reconnect otomatis (heartbeat ping-pong) saat perangkat berganti jaringan dari Wi-Fi kampus ke data seluler 4G/5G, serta mitigasi konsumsi baterai melalui pemutusan koneksi saat aplikasi masuk ke background mode.',
      callout: 'Protokol heartbeat ping-pong mendeteksi koneksi terputus dalam hitungan detik dan memulihkan sesi interaksi pengguna secara mandiri.',
    },
    {
      title: 'Alternatif Modern: Integrasi GraphQL & API Gateway',
      p1: 'Dalam ekosistem sistem informasi yang kompleks, aplikasi mobile kerap membutuhkan gabungan data dari berbagai entitas (misal data profil, riwayat pinjaman aktif, dan rekomendasi buku) dalam satu tampilan.',
      p2: 'Pemanfaatan GraphQL atau pola Backend-For-Frontend (BFF) memungkinkan mobile client meminta field data yang spesifik saja, meniadakan masalah Over-fetching (data berlebih) dan Under-fetching (panggilan berganda yang memboroskan jaringan seluler).',
      callout: 'Pendekatan GraphQL / BFF mengonsolidasikan panggilan jaringan sehingga aplikasi mobile bekerja gesit bahkan pada jaringan seluler 3G.',
    },
    {
      title: 'Strategi Caching HTTP: ETag, Cache-Control & Stale-While-Revalidate',
      p1: 'Header standar HTTP Cache-Control dan ETag (Entity Tag) memungkinkan client memvalidasi apakah data katalog telah berubah di server. Jika server merespons 304 Not Modified, aplikasi cukup menggunakan data yang sudah tersimpan di cache memori/disk.',
      p2: 'Strategi Stale-While-Revalidate menampilkan data tersimpan seketika kepada pengguna sembari memvalidasi ke server di latar belakang, menciptakan responsivitas aplikasi secepat kilat.',
      callout: 'Pemanfaatan respons 304 Not Modified mengeliminasi transfer data berulang dan menurunkan beban server institusi secara signifikan.',
    },
    {
      title: 'Keamanan Komunikasi: HTTPS, TLS 1.3 & SSL Pinning',
      p1: 'Meskipun seluruh komunikasi wajib menggunakan HTTPS (TLS 1.3), aplikasi mobile masih rentan terhadap serangan Man-in-the-Middle (MitM) jika perangkat pengguna menginstal sertifikat root palsu atau menjalankan proxy inspeksi seperti Charles atau Burp Suite.',
      p2: 'Penerapan SSL Certificate Pinning atau Public Key Pinning (HPKP) memvalidasi fingerprint kriptografis kunci publik server di dalam aplikasi mobile, sehingga koneksi akan langsung ditolak jika sertifikat server tidak cocok dengan kunci resmi institusi.',
      callout: 'SSL Pinning adalah benteng pertahanan utama yang melindungi data transaksi akademik dari intersepsi sniffing pada jaringan Wi-Fi publik.',
    },
  ];

  ch3Topics.forEach((t, i) => {
    const pageNum = 25 + i;
    pages.push({
      pageNumber: pageNum,
      chapterNumber: 3,
      chapterTitle: 'Bab 3: Komunikasi Jaringan, Integrasi RESTful API & Layanan Backend',
      sectionTitle: `Sub-Bab 3.${i + 1}: ${t.title}`,
      paragraphs: [
        `Halaman ${pageNum} menguraikan topik arsitektur jaringan: ${t.title}. Konektivitas yang andal dan aman adalah fondasi keberhasilan aplikasi sistem informasi modern di lingkungan perangkat bergerak.`,
        t.p1,
        t.p2,
        `Dalam konteks laboratorium sistem informasi, mahasiswa dilatih melakukan simulasi pengujian jaringan lambat (network throttling) untuk memastikan aplikasi tetap beroperasi secara prima.`,
      ],
      callout: {
        type: 'case_study',
        title: `Catatan Implementasi Jaringan (Hal ${pageNum})`,
        content: t.callout,
      },
    });
  });

  // ==========================================
  // Bab 4: Hal 35 - 44 (Persistensi & Keamanan)
  // ==========================================
  const ch4Topics = [
    {
      title: 'Pilihan Mesin Persistensi: Key-Value, SQLite & NoSQL Dokumen',
      p1: 'Persistensi lokal pada mobile client terbagi menjadi tiga kategori: (1) Key-Value Store sederhana untuk pengaturan preferensi (SharedPreferences / UserDefaults); (2) Embedded Relational Database (SQLite / Room / Drift) untuk data terstruktur dengan relasi foreign key; (3) NoSQL Key-Document berkecepatan tinggi (Hive, Isar, Realm) berbasis memori mmap.',
      p2: 'Pemilihan mesin basis data untuk sistem informasi akademik ditentukan oleh kebutuhan integritas referensial data: data pinjaman dan katalog buku sangat ideal disimpan dalam SQLite, sedangkan token dan tema aplikasi cukup pada Key-Value store.',
      callout: 'Gunakan basis data relasional SQLite/Room ketika entitas data lokal memerlukan transaksi atomik ACID dan kueri relasi kompleks.',
    },
    {
      title: 'Arsitektur Offline-First & Antrean Transaksi Lokal (Sync Engine)',
      p1: 'Aplikasi mobile sistem informasi perguruan tinggi harus tetap dapat digunakan mahasiswa membaca buku atau mencatat resume meskipun berada di area tanpa koneksi internet (blank spot). Pola Offline-First memperlakukan basis data lokal sebagai sumber kebenaran utama tampilan.',
      p2: 'Ketika pengguna melakukan aksi mutasi (misal meminjam buku atau mengubah catatan), aksi tersebut disimpan dalam Antrean Transaksi Tertunda (Pending Mutation Queue) lokal dengan status "pending", dan disinkronkan ke server secara otomatis begitu sinyal internet pulih.',
      callout: 'Desain Offline-First menjamin produktivitas pengguna tidak pernah terhenti akibat fluktuasi sinyal seluler di lapangan.',
    },
    {
      title: 'Penyelesaian Konflik Data (Conflict Resolution Strategies)',
      p1: 'Tantangan terbesar sistem Offline-First adalah ketika data yang sama dimodifikasi secara bersamaan pada dua perangkat berbeda saat offline. Strategi resolusi konflik mencakup: Last-Write-Wins (LWW) berbasis timestamp server, Manual Merging berbasis dialog, atau Conflict-Free Replicated Data Types (CRDTs).',
      p2: 'Pada sistem perbankan dan perpustakaan, pendekatan Vector Clock atau penolakan transaksi berbasis versi optimistik (Optimistic Concurrency Control dengan versi nomor rekaman) diterapkan demi mencegah penimpaan data yang tidak sah.',
      callout: 'Optimistic Locking berbasis nomor versi mencegah anomali penimpaan data (lost update) saat sinkronisasi multi-perangkat.',
    },
    {
      title: 'Penyimpanan Kredensial Aman: EncryptedSharedPreferences & Keychain',
      p1: 'Menyimpan token JWT atau kunci rahasia pengguna dalam berkas XML SharedPreferences atau UserDefaults biasa adalah pelanggaran fatal keamanan, karena berkas tersebut dapat diekstrak dengan mudah dari perangkat yang di-root atau di-jailbreak.',
      p2: 'Praktik standar industri mewajibkan penggunaan Android EncryptedSharedPreferences (yang memanfaatkan master key hardware Android KeyStore) dan iOS Keychain Services yang mengenkripsi data menggunakan algoritma AES-GCM 256-bit tingkat perangkat keras.',
      callout: 'Gunakan Android KeyStore dan iOS Keychain untuk menjamin token autentikasi tidak dapat diekstrak bahkan saat perangkat fisik disita.',
    },
    {
      title: 'Enkripsi Basis Data Lokal (SQLCipher) & Proteksi Data saat Diam',
      p1: 'Basis data SQLite lokal secara bawaan tersimpan dalam teks polos (plaintext). Jika perangkat mobile hilang atau dicuri, penyerang dapat membaca riwayat transaksi dan data pribadi subjek melalui pembacaan berkas fisik.',
      p2: 'Penerapan pustaka SQLCipher menyediakan enkripsi transparan 256-bit AES penuh untuk seluruh halaman basis data lokal. Kunci enkripsi basis data di-derive secara acak dan disimpan dengan aman di dalam hardware Keystore perangkat.',
      callout: 'SQLCipher melindungi basis data lokal dari serangan pencurian fisik dan mematuhi kepatuhan Undang-Undang Perlindungan Data Pribadi (UU PDP).',
    },
    {
      title: 'Deteksi Root, Jailbreak & Integritas Lingkungan Eksekusi',
      p1: 'Perangkat yang telah di-root (Android) atau di-jailbreak (iOS) memiliki hak akses superuser yang dapat memanipulasi memori runtime aplikasi melalui kerangka hooking seperti Frida atau Xposed.',
      p2: 'Aplikasi sistem informasi perbankan dan enterprise mengimplementasikan verifikasi integritas lingkungan menggunakan API resmi Google Play Integrity / SafetyNet dan Apple DeviceCheck untuk memblokir eksekusi transaksi pada lingkungan yang tidak terpercaya.',
      callout: 'Deteksi integritas sistem operasi memitigasi risiko pembajakan token dan manipulasi logika bisnis aplikasi di tingkat memori.',
    },
    {
      title: 'Obfuscation Kode & Hardening Biner (ProGuard / R8 / Bitcode)',
      p1: 'Aplikasi mobile yang dikompilasi dapat dengan mudah didekompilasi kembali menjadi kode sumber hampir terbaca menggunakan alat dekompilasi seperti JADX atau APKTool. Tanpa perlindungan, seluruh logika algoritma rahasia dapat dibaca pihak ketiga.',
      p2: 'Pengaktifan ProGuard / R8 mengabstraksikan dan mengaburkan nama kelas, metode, dan variabel menjadi karakter acak pendek (misal `com.myapp.AuthHelper` menjadi `a.b.c`), memperkecil ukuran biner (code shrinking) dan mempersulit analisis rekayasa balik (reverse engineering).',
      callout: 'Pengaburan biner (code obfuscation) memangkas ukuran berkas unduhan sekaligus melindungi algoritma institusi dari plagiarisme.',
    },
    {
      title: 'Pencegahan Kebocoran Data (Data Leakage Prevention & Screen Masking)',
      p1: 'Saat pengguna berpindah antar-aplikasi di sistem operasi mobile, switcher aplikasi mengambil tangkapan layar (screenshot) antarmuka dan menyimpannya di cache sistem. Layar yang memuat data finansial atau nilai mahasiswa dapat terbaca tanpa otorisasi.',
      p2: 'Penerapan flag keamanan jendela (seperti `FLAG_SECURE` pada Android) secara otomatis memblokir tangkapan layar pengguna dan menampilkan layar kosong atau logo institusi saat aplikasi berada di daftar aplikasi terkini (App Switcher).',
      callout: 'Flag jendela aman (`FLAG_SECURE`) mencegah kebocoran informasi sensitif melalui tangkapan layar otomatis sistem operasi.',
    },
    {
      title: 'Audit Keamanan OWASP Mobile Top 10 & Kepatuhan Regulasi',
      p1: 'Open Web Application Security Project (OWASP) merilis pedoman tahunan kerentanan teratas perangkat bergerak (M1: Improper Credential Usage, M2: Inadequate Supply Chain Security, M3: Insecure Authentication/Authorization, M4: Insufficient Input/Output Validation, dst.).',
      p2: 'Mahasiswa diajarkan melakukan audit kepatuhan mandiri terhadap 10 celah ini sebelum merilis modul sistem informasi, guna memenuhi mandat Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP).',
      callout: 'Checklist OWASP Mobile Top 10 menjamin kepatuhan sistem informasi terhadap standar audit keamanan teknologi informasi nasional.',
    },
    {
      title: 'Manajemen Log Aman & Sanitasi Data Sensitif (PII Sanitization)',
      p1: 'Pencatatan log aplikasi sangat penting untuk mendiagnosis crash di lingkungan produksi. Namun, mencetak nomor induk mahasiswa, kata sandi, token JWT, atau nomor kartu kredit ke dalam Logcat / Console adalah pelanggaran privasi fatal.',
      p2: 'Penerapan Logger Filter khusus menghapus (redact) informasi teridentifikasi pribadi (Personally Identifiable Information / PII) secara otomatis sebelum log dikirimkan ke server pemantauan crash seperti Firebase Crashlytics atau Sentry.',
      callout: 'Sanitasi log otomatis mencegah kebocoran data rahasia mahasiswa pada dasbor pemantauan bug pihak ketiga.',
    },
  ];

  ch4Topics.forEach((t, i) => {
    const pageNum = 35 + i;
    pages.push({
      pageNumber: pageNum,
      chapterNumber: 4,
      chapterTitle: 'Bab 4: Persistensi Data Lokal, Strategi Offline-First & Keamanan Mobile',
      sectionTitle: `Sub-Bab 4.${i + 1}: ${t.title}`,
      paragraphs: [
        `Halaman ${pageNum} mengulas pilar ketahanan dan perlindungan data: ${t.title}. Tanpa keamanan dan persistensi yang matang, aplikasi mobile tidak akan mampu bertahan di lingkungan operasional yang dinamis.`,
        t.p1,
        t.p2,
        `Materi ini memberikan wawasan multidisipliner bagi mahasiswa jurusan Sistem Informasi dalam merancang solusi yang andal, tahan banting, dan taat hukum.`,
      ],
      callout: {
        type: 'discussion',
        title: `Prinsip Tata Kelola Data (Hal ${pageNum})`,
        content: t.callout,
      },
    });
  });

  // ==========================================
  // Bab 5: Hal 45 - 50 (Testing, Profiling, CI/CD)
  // ==========================================
  const ch5Topics = [
    {
      title: 'Piramida Pengujian: Unit Testing, Widget Testing & Integrasi',
      p1: 'Piramida pengujian perangkat lunak mobile menetapkan porsi terbesar pada Unit Tests (menguji logika murni Use Case, ViewModel, dan Utility secara cepat tanpa rendering), porsi menengah pada Widget/Component Tests (menguji interaksi tombol dan render komponen antarmuka), dan porsi puncak pada End-to-End Integration Tests.',
      p2: 'Target cakupan pengujian (test coverage) pada sistem informasi perguruan tinggi ditetapkan minimal 80% pada Domain Layer dan Data Layer guna menjamin keandalan kalkulasi transaksi akademik.',
      callout: 'Cakupan pengujian unit yang tinggi pada domain layer memastikan pembaruan fitur baru tidak merusak alur transaksi yang sudah stabil.',
    },
    {
      title: 'Pengujian Mocking & Simulasi Lingkungan Jaringan (Mockito / Mocktail)',
      p1: 'Unit test harus independen dari server backend nyata. Pustaka mocking memungkinkan pengembang mensimulasikan berbagai skenario respons API: respons sukses 200 dengan payload JSON lengkap, respons galat 401 token expired, hingga skenario timeout 30 detik.',
      p2: 'Dengan menyuntikkan MockClient ke dalam Repository, seluruh percabangan kondisi logika dapat diuji secara otomatis dalam hitungan detik tanpa membebani server universitas.',
      callout: 'Simulasi kegagalan server menggunakan mock data melatih kode client menangani kondisi darurat secara tangguh.',
    },
    {
      title: 'Profiling Performa Memori, CPU & Optimalisasi Frame Rate (120 FPS)',
      p1: 'Aplikasi mobile yang lambat atau tersendat (jank / dropped frames) menimbulkan persepsi buruk bagi pengguna. Alat profiler resmi (Android Studio Profiler / Flutter DevTools) menganalisis alokasi memori heap, deteksi memory leaks dari stream yang lupa di-dispose, dan penggunaan CPU per utas.',
      p2: 'Teknik optimasi meliputi: penggunaan widget `const` untuk mencegah instansiasi ulang yang tidak perlu, pemanfaatan ListView.builder beralokasi virtual, dan pendelegasian komputasi berat ke latar belakang (Background Isolates / Web Workers).',
      callout: 'Pemindahan kalkulasi data berat ke background isolate menjaga thread utama antarmuka tetap berjalan mulus pada 60/120 fps.',
    },
    {
      title: 'Pemantauan Crash Real-Time & Telemetri Kinerja Aplikasi',
      p1: 'Setelah aplikasi dirilis ke tangan pengguna, tim pengembang memerlukan visibilitas instan atas error tak terduga. Pustaka pelacak crash (Crashlytics / Sentry) mengumpulkan stack trace lengkap, jenis perangkat, versi OS, dan rekam jejak aksi pengguna sesaat sebelum crash (breadcrumbs).',
      p2: 'Analisis metrik stabilitas (Crash-Free Users rate) dengan target ambang batas minimal 99.5% menjadi Key Performance Indicator (KPI) utama kesiapan operasional sistem informasi mobile.',
      callout: 'Target Crash-Free Users di atas 99.5% menjamin kelancaran operasional layanan akademik daring institusi.',
    },
    {
      title: 'Otomatisasi Pipa CI/CD Mobile: Fastlane & GitHub Actions',
      p1: 'Proses pembangunan berkas rilis (APK, AAB, IPA), penandatanganan sertifikat kriptografis (keystore signing), dan distribusi uji coba ke internal tester (Google Play Internal Track / TestFlight) dapat diotomatisasi penuh melalui Fastlane dan GitHub Actions.',
      p2: 'Setiap kali mahasiswa melakukan pull request kode ke branch utama repositori, runner CI secara otomatis menjalankan linter, suite pengujian unit, kompilasi build, dan memberi laporan status langsung pada tiket review kode.',
      callout: 'Pipa otomatisasi CI/CD Fastlane mereduksi durasi rilis versi aplikasi dari hitungan jam menjadi hitungan menit.',
    },
    {
      title: 'Masa Depan Mobile Sistem Informasi: AI On-Device & Edge Computing',
      p1: 'Sebagai penutup naskah, bab ini menengok ke masa depan rekayasa sistem informasi mobile: pemanfaatan model kecerdasan buatan langsung di perangkat (On-Device AI) menggunakan TensorFlow Lite dan model quantized ringan untuk OCR dan klasifikasi dokumen tanpa tergantung internet.',
      p2: 'Kombinasi antara arsitektur mobile yang tangguh, etika perlindungan privasi yang ketat, dan integrasi kecerdasan buatan membuka era baru di mana aplikasi mobile menjadi asisten cerdas terpercaya bagi peradaban masyarakat masa depan.',
      callout: 'Penggabungan on-device AI dengan arsitektur sistem informasi offline-first adalah lompatan paradigma generasi komputasi berikutnya.',
    },
  ];

  ch5Topics.forEach((t, i) => {
    const pageNum = 45 + i;
    pages.push({
      pageNumber: pageNum,
      chapterNumber: 5,
      chapterTitle: 'Bab 5: Pengujian Otomatis, Profiling Kinerja & Continuous Delivery',
      sectionTitle: `Sub-Bab 5.${i + 1}: ${t.title}`,
      paragraphs: [
        `Halaman pamungkas ${pageNum} membahas: ${t.title}. Rekayasa perangkat lunak mobile modern mengintegrasikan pengujian ketat dan otomasi pengiriman untuk menghasilkan produk berkualitas enterprise.`,
        t.p1,
        t.p2,
        `Karya ilmiah ini diharapkan terus menjadi sumber inspirasi bagi sivitas akademika jurusan Sistem Informasi dalam merancang dan merilis karya-karya aplikasi unggulan yang berdaya guna bagi masyarakat.`,
      ],
      callout: {
        type: 'summary',
        title: `Kesimpulan Inti (Hal ${pageNum})`,
        content: t.callout,
      },
    });
  });

  // ==========================================
  // Hal 51: Glosarium Komprehensif Mobile
  // ==========================================
  pages.push({
    pageNumber: 51,
    chapterNumber: 6,
    chapterTitle: 'Glosarium Komprehensif Mobile Programming & Sistem Informasi',
    sectionTitle: 'Kamus Istilah Teknis Rekayasa Perangkat Bergerak (A - Z)',
    paragraphs: [
      `Glosarium istilah baku yang digunakan dalam naskah "${title}":`,
      `• Clean Architecture: Pola arsitektur perangkat lunak yang memisahkan kode ke dalam lapisan presentation, domain, dan data secara terisolasi.\n• BLoC (Business Logic Component): Pola arsitektur reaktif berbasis event-state stream untuk memisahkan logika bisnis dari antarmuka pengguna.\n• Offline-First: Paradigma perancangan aplikasi yang mengutamakan ketersediaan fungsi dan persistensi lokal saat koneksi internet terputus.\n• JWT (JSON Web Token): Format token keamanan terbuka RFC 7519 untuk pertukaran klaim terotentikasi antara mobile client dan server backend.`,
      `• SQLCipher: Ekstensi basis data SQLite yang menyediakan enkripsi penuh transparan 256-bit AES pada berkas data lokal perangkat.\n• Deep Linking: Mekanisme penanganan URL rute yang memungkinkan tautan luar langsung membuka layar konten spesifik di dalam aplikasi mobile.\n• ProGuard / R8: Alat pengoptimal dan pengabur biner (code obfuscator) untuk melindungi kode sumber dari rekayasa balik.\n• CI/CD (Continuous Integration / Continuous Delivery): Praktik otomatisasi kompilasi, pengujian, dan distribusi aplikasi mobile ke app store.`,
    ],
    callout: {
      type: 'definition',
      title: 'Standar Peristilahan Rekayasa Mobile',
      content: `Seluruh terminologi disusun mengacu pada standar IEEE Computer Society, ISO/IEC/IEEE 12207 Software Lifecycle Processes, dan leksikon resmi pengembang platform Android/iOS.`,
    },
  });

  // ==========================================
  // Hal 52: Bibliografi Ilmiah Lengkap
  // ==========================================
  pages.push({
    pageNumber: 52,
    chapterNumber: 6,
    chapterTitle: 'Bibliografi & Daftar Pustaka Lengkap',
    sectionTitle: 'Rujukan Literatur Ilmiah Nasional & Standar Internasional',
    paragraphs: [
      `Daftar literatur rujukan ilmiah yang digunakan dalam penulisan buku teks ini:`,
      `1. Martin, R. C. (2017). Clean Architecture: A Craftsman's Guide to Software Structure and Design. Prentice Hall.\n2. Windmill, E. (2020). Flutter in Action: Multi-Platform Mobile Application Development. Manning Publications.\n3. Smyth, N. (2023). Android Studio Giraffe Essentials: Kotlin Edition. Payload Media.\n4. OWASP Foundation. (2024). OWASP Mobile Application Security Verification Standard (MASVS) Version 2.1.\n5. Nugroho, F. (2024). Desain Arsitektur Sistem Informasi Mobile Berkinerja Tinggi Berbasis Offline-First. Jurnal Sistem Informasi & Teknologi Komputasi Akademik, 16(1), 25-48.`,
      `Seluruh literatur dan dokumentasi standar rekayasa perangkat lunak di atas tersedia dan dapat diakses di Ruang Referensi Sistem Informasi Perpustakaan Akademik.`,
    ],
  });

  // ==========================================
  // Hal 53: Indeks Subjek Istilah
  // ==========================================
  pages.push({
    pageNumber: 53,
    chapterNumber: 6,
    chapterTitle: 'Indeks Subjek & Kata Kunci Terindeks',
    sectionTitle: 'Penelusuran Lokasi Topik Berdasarkan Halaman',
    paragraphs: [
      `Indeks subjek untuk mempercepat penelusuran topik spesifik dalam naskah ini:`,
      `• Arsitektur Bersih (Clean Architecture): Hal 15\n• Autentikasi JWT & Refresh Token: Hal 27\n• BLoC State Management: Hal 17\n• Deep Linking & Declarative Routing: Hal 21\n• Enkripsi SQLCipher & Keystore: Hal 39\n• Fastlane & CI/CD Pipeline: Hal 49\n• Offline-First Sync Engine: Hal 36\n• OWASP Mobile Top 10 Security: Hal 43\n• Pola Repository & Data Sources: Hal 20\n• Profiling CPU & Memori: Hal 47\n• RESTful API & HTTP Interceptor: Hal 26\n• SSL Pinning & TLS 1.3: Hal 34`,
      `Gunakan nomor halaman di atas untuk langsung berpindah ke pembahasan spesifik pada fitur daftar isi e-book reader digital.`,
    ],
  });

  // ==========================================
  // Hal 54: Bank Soal Ujian Komprehensif
  // ==========================================
  pages.push({
    pageNumber: 54,
    chapterNumber: 6,
    chapterTitle: 'Bank Soal Ujian Komprehensif',
    sectionTitle: 'Evaluasi Pemrograman Mobile & Sistem Informasi',
    paragraphs: [
      `Soal evaluasi mandiri persiapan ujian praktikum, tugas proyek, atau sidang skripsi sistem informasi:`,
      `SOAL 1: Jelaskan mengapa Clean Architecture memisahkan Domain Layer dari pustaka antarmuka pengguna! Bagaimana Anda membuktikan bahwa pemisahan tersebut memudahkan pengujian unit otomatis?\n\nSOAL 2: Analisis alur teknis penanganan token JWT kadaluarsa (401 Unauthorized) menggunakan HTTP Interceptor! Gambarkan diagram urutan (sequence diagram) saat terjadi penyegaran token di latar belakang!\n\nSOAL 3: Rancang skema sinkronisasi Offline-First untuk aplikasi transaksi inventaris mobile kampus! Bagaimana strategi Anda menyelesaikan potensi konflik data saat koneksi pulih?\n\nSOAL 4: Mengapa penyimpanan token otentikasi pada SharedPreferences atau file lokal biasa dianggap berbahaya? Bandingkan tingkat keamanannya dengan Android EncryptedSharedPreferences dan iOS Keychain!`,
      `Diskusikan rancangan solusi Anda bersama dosen pembina laboratorium atau kelompok belajar rekayasa perangkat lunak.`,
    ],
    callout: {
      type: 'exercise',
      title: 'Kriteria Penilaian Proyek Mobile',
      content: `Penilaian proyek berbobot pada: Arsitektur & Modularisasi (30%), Keamanan Kredensial & Jaringan (25%), Responsivitas Antarmuka (25%), dan Kelengkapan Pengujian Otomatis (20%).`,
    },
  });

  // ==========================================
  // Hal 55: Catatan Pembaca & Kolofon Akhir
  // ==========================================
  pages.push({
    pageNumber: 55,
    chapterNumber: 6,
    chapterTitle: 'Lembar Catatan Mahasiswa & Kolofon Akhir',
    sectionTitle: 'Verifikasi Sirkulasi Digital Perpustakaan',
    paragraphs: [
      `Selamat! Anda telah menyelesaikan pembacaan seluruh 55 halaman naskah buku teks "${title}" karya ${authorName}.`,
      `Manfaatkan fitur Catatan Riset dan Penanda Halaman (Bookmark) pada e-book reader digital untuk menyimpan kutipan kode dan arsitektur bagi penyusunan laporan tugas akhir atau skripsi sistem informasi Anda.`,
      `Naskah digital resmi Repositori Perpustakaan Akademik Terakreditasi. Layanan sirkulasi e-book dan dukungan riset akademik: layanan.pustaka@perguruan-tinggi.ac.id. Hak cipta dilindungi undang-undang.`,
    ],
    callout: {
      type: 'summary',
      title: 'Verifikasi Progres Baca Digital',
      content: `Progres: 100% (55 dari 55 Halaman Terbaca). Aktivitas pembacaan tervalidasi pada sistem sirkulasi sivitas akademika perguruan tinggi.`,
    },
  });

  return pages;
}
