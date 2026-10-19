import { Book, BookPage } from '../../types/library';

export function getCyberLawBookPages(book: Book): BookPage[] {
  const authorName = book.author;
  const title = book.title;
  const pub = book.publisher;
  const year = book.year;
  const ddc = book.ddc;

  const pages: BookPage[] = [];

  // Hal 1 - 4: Preliminaries
  pages.push({
    pageNumber: 1,
    chapterNumber: 0,
    chapterTitle: 'Informasi Bibliografi & Hak Cipta',
    sectionTitle: 'Halaman Judul & Kolofon Resmi Perpustakaan',
    paragraphs: [
      `Buku Teks Akademik Digital: "${title}".`,
      `Penulis Utama: ${authorName}. Diterbitkan secara resmi oleh ${pub}, tahun publikasi ${year}.`,
      `Klasifikasi Desimal Dewey (DDC): ${ddc} (Hukum Siber, Telekomunikasi & Perlindungan Data). Nomor ISBN: ${book.isbn}. Naskah resmi Repositori Digital Perpustakaan Akademik Terakreditasi.`,
      `Kajian yuridis akademik mendalam mengenai rezim Undang-Undang Perlindungan Data Pribadi (UU No. 27 Tahun 2022), yurisdiksi ekstrateritorial di ruang siber, tanggung jawab hukum pengendali data, tindak pidana siber UU ITE, dan perbandingan dengan regulasi GDPR Uni Eropa.`,
    ],
    callout: {
      type: 'summary',
      title: 'Verifikasi Kurasi Bidang Hukum & Kebijakan Publik',
      content: `Koleksi akademik tingkat tinggi yang membedah kepatuhan hukum digital bagi korporasi, institusi pendidikan, dan masyarakat umum.`,
    },
  });

  pages.push({
    pageNumber: 2,
    chapterNumber: 0,
    chapterTitle: 'Prakata Penulis & Kurator Perpustakaan',
    sectionTitle: 'Kata Pengantar: Menegakkan Keadilan di Ranah Virtual',
    paragraphs: [
      `Ruang siber (cyberspace) sering kali disalahpahami sebagai wilayah tanpa hukum (lawless frontier). Kenyataannya, setiap interaksi digital—dari transaksi e-commerce, transmisi pesan instan, hingga penyimpanan awan—selalu terikat oleh norma hukum positif dan hak asasi manusia yang universal.`,
      `Kelahiran Undang-Undang Nomor 27 Tahun 2022 tentang Perlindungan Data Pribadi (UU PDP) menandai era baru dalam sejarah hukum Indonesia. Privasi bukan lagi sekadar privilese, melainkan hak asasi konstitusional (informational self-determination). Buku "${title}" mengkaji bagaimana prinsip-prinsip hukum ini diterapkan: dari doktrin yurisdiksi ubikuitas, pemisahan peran data controller dan processor, hingga prosedur penanganan insiden kebocoran data (data breach).`,
      `Kami menyampaikan penghargaan kepada sivitas akademika Perguruan Tinggi atas dedikasinya memajukan literasi hukum digital generasi penerus bangsa.`,
    ],
    callout: {
      type: 'discussion',
      title: 'Amanat Akademik Penulis',
      content: `Hukum harus berjalan seiring dengan laju teknologi; jika hukum tertinggal, ruang siber akan menjadi arena eksploitasi data yang merugikan martabat manusia.`,
    },
  });

  pages.push({
    pageNumber: 3,
    chapterNumber: 0,
    chapterTitle: 'Pedoman Pembacaan & Silabus Hukum Siber',
    sectionTitle: 'Panduan Telaah Yuridis Regulasi Digital',
    paragraphs: [
      `Buku ini disusun dalam 5 bab utama dengan total 55 halaman aktif. Setiap halaman memuat telaah doktrin hukum, analisis pasal perundang-undangan, yurisprudensi putusan pengadilan, dan studi kasus penegakan hukum siber.`,
      `Capaian Pembelajaran Lulusan (CPL) meliputi: (1) Pemahaman doktrin kedaulatan negara dan yurisdiksi di ruang maya; (2) Penguasaan hak-hak subjek data dan kewajiban kepatuhan pengendali data menurut UU PDP; (3) Kemampuan menganalisis delik tindak pidana siber UU ITE dan merancang kerangka kepatuhan hukum korporasi (legal compliance).`,
      `Mahasiswa disarankan mempelajari naskah asli UU No. 27/2022 dan UU No. 1/2024 (Perubahan UU ITE) sebagai rujukan komparasi pada setiap bab.`,
    ],
    callout: {
      type: 'definition',
      title: 'Prasyarat Keilmuan',
      content: `Pengantar Ilmu Hukum, Hukum Tata Negara, Hukum Pidana Dasar, serta Etika Bisnis dan Komunikasi Digital.`,
    },
  });

  pages.push({
    pageNumber: 4,
    chapterNumber: 0,
    chapterTitle: 'Daftar Isi & Sistematika Keilmuan',
    sectionTitle: 'Peta Navigasi Bab & Topik Bahasan Hukum Siber',
    paragraphs: [
      `Sistematika bahasan naskah "${title}":`,
      `• BAB 1: PENGANTAR HUKUM SIBER & KEDAULATAN RUANG MAYA (Halaman 5 - 14)\n• BAB 2: REZIM REGULASI UU PDP & HAK SUBJEK DATA (Halaman 15 - 24)\n• BAB 3: KEWAJIBAN PENGENDALI DATA & TATA KELOLA KEPATUHAN (Halaman 25 - 34)\n• BAB 4: TINDAK PIDANA SIBER, BUKTI ELEKTRONIK & UU ITE (Halaman 35 - 44)\n• BAB 5: HUKUM KOMPARATIF INTERNASIONAL & TANTANGAN MASA DEPAN (Halaman 45 - 50)`,
      `• BAGIAN PENUTUP: Glosarium Hukum Siber (Hal 51), Bibliografi Naskah Hukum (Hal 52), Indeks Istilah Yuridis (Hal 53), Soal Ujian Komprehensif Hukum (Hal 54), Catatan & Kolofon (Hal 55).`,
    ],
  });

  // ==========================================
  // BAB 1: PENGANTAR & KEDAULATAN SIBER (Hal 5 - 14)
  // ==========================================
  const ch1 = [
    { title: 'Konsep Ruang Siber (Cyberspace) & Batas Kedaulatan Negara', p1: 'Ruang siber merupakan dimensi interaksi artifisial yang nir-batas (borderless) secara fisik namun tetap berada di bawah kedaulatan negara tempat infrastruktur perangkat keras dan subjek hukum berdomisili. Teori kedaulatan siber (cyber sovereignty) menegaskan hak eksklusif negara dalam mengatur arus data dan sistem elektronik di wilayah yurisdiksinya.' },
    { title: 'Asas-Asas Yurisdiksi Hukum: Teritorialitas vs Ekstrateritorialitas', p1: 'Dalam hukum pidana dan perdata siber, penentuan yurisdiksi menjadi tantangan utama. Kita mengkaji Asas Teritorialitas (hukum berlaku di mana perbuatan fisik terjadi), Asas Personalitas Aktif dan Pasif (berdasarkan kewarganegaraan pelaku atau korban), serta Asas Ekstrateritorialitas yang menjangkau perbuatan di luar negeri yang berdampak merugikan di dalam negeri.' },
    { title: 'Doktrin Ubikuitas (Ubiquity Principle) dalam Tindak Delik Digital', p1: 'Doktrin Ubikuitas menetapkan bahwa suatu tindak pidana siber dianggap terjadi baik di tempat perbuatan dilakukan (locus delicti initiator), di tempat sarana komputer yang digunakan berada, maupun di tempat timbulnya akibat kerugian bagi korban. Doktrin ini diadopsi dalam hukum acara pidana modern Indonesia.' },
    { title: 'Evolusi Cyber Law Internasional: Dari Deklarasi Barlow ke Regulasi Positif', p1: 'Pada era awal internet, John Perry Barlow memproklamirkan "Declaration of the Independence of Cyberspace" yang menolak campur tangan negara. Namun tesis Lawrence Lessig "Code is Law" membuktikan bahwa arsitektur kode perangkat lunak dan regulasi hukum positif negara pada akhirnya saling mengunci dalam membentuk perilaku pengguna.' },
    { title: 'Konvergensi Telekomunikasi, Penyiaran & Teknologi Informasi', p1: 'Penyatuan infrastruktur kabel optik, satelit, dan internet seluler memicu konvergensi regulasi. Rezim hukum tidak lagi dapat memisahkan izin telekomunikasi dari izin konten penyiaran dan penyelenggaraan sistem elektronik, menuntut regulasi payung (omnibus law) yang fleksibel.' },
    { title: 'Hak Asasi Manusia Digital: Privasi, Kebebasan Berpendapat & Hak Dilupakan', p1: 'Hak atas privasi diakui dalam Pasal 12 Deklarasi Universal Hak Asasi Manusia (DUHAM) dan Pasal 28G UUD 1945. Dalam ranah siber, hak ini berkembang mencakup kebebasan berpendapat yang bertanggung jawab, larangan sensor ilegal, dan hak pembersihan riwayat jejak digital masa lalu (right to be forgotten).' },
    { title: 'Kedudukan Penyelenggara Sistem Elektronik (PSE) Lingkup Publik & Privat', p1: 'Peraturan Pemerintah Nomor 71 Tahun 2019 (PP PSTE) membagi PSE menjadi PSE Lingkup Publik (instansi kementerian, lembaga, kampus negeri) dan PSE Lingkup Privat (perusahaan swasta, aplikasi fintech, platform sosial). Keduanya memiliki kewajiban pendaftaran resmi dan kepatuhan moderasi konten.' },
    { title: 'Keamanan Siber Nasional & Peran Badan Siber dan Sandi Negara (BSSN)', p1: 'Kedaulatan siber membutuhkan pertahanan infrastruktur informasi vital (IIV). Perpres No. 82 Tahun 2022 mengatur tata kelola perlindungan IIV sektor perbankan, energi, transportasi, dan kesehatan dari ancaman spionase siber dan perang siber antarbangsa di bawah koordinasi BSSN.' },
    { title: 'Kajian Putusan Mahkamah Konstitusi Terkait Norma Hukum Ruang Siber', p1: 'Kita menelaah serangkaian uji materi di Mahkamah Konstitusi RI terkait pasal-pasal multitafsir UU ITE (Pasal 27 ayat 3 tentang pencemaran nama baik), putusan judicial review yang menegaskan batasan penafsiran alat bukti elektronik, serta perlindungan privasi korespondensi privat.' },
    { title: 'Rangkuman Bab 1: Kerangka Yuridis Ruang Maya Indonesia', p1: 'Bab 1 disimpulkan dengan matriks perundang-undangan Indonesia yang mengatur ruang digital, menghubungkan UU ITE, UU PDP, PP PSTE, dan KUHP Baru (UU No. 1 Tahun 2023) ke dalam satu lanskap hukum yang koheren.' },
  ];

  ch1.forEach((sub, i) => {
    pages.push({
      pageNumber: 5 + i,
      chapterNumber: 1,
      chapterTitle: 'Bab 1: Pengantar Hukum Siber & Kedaulatan Ruang Maya',
      sectionTitle: `Sub-Bab 1.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Dalam naskah "${title}", ${authorName} mengingatkan bahwa kemajuan ekonomi digital Indonesia hanya dapat berkelanjutan jika ditopang oleh kepastian hukum yang kokoh dan perlindungan hak-hak dasar warga negara di ranah maya.`,
        `Halaman ${5 + i} ini menyajikan analisis doktrin yuridis mendalam disertai perbandingan putusan pengadilan penting yang menjadi preseden hukum siber nasional.`,
        `Kajian ini menjadi bahan telaah wajib bagi mahasiswa Perguruan Tinggi dalam memahami aspek legalitas bisnis digital dan manajemen sistem informasi.`,
      ],
      callout: {
        type: i % 2 === 0 ? 'definition' : 'case_study',
        title: `Doktrin Yuridis Kunci (Hal ${5 + i})`,
        content: `Asas Teritorialitas Ekstrateritorial: Hukum Indonesia berlaku bagi setiap orang yang melakukan perbuatan hukum di luar negeri jika perbuatan tersebut menimbulkan akibat hukum yang merugikan kepentingan nasional di Indonesia.`,
      },
    });
  });

  // ==========================================
  // BAB 2: REGULASI UU PDP & HAK SUBJEK (Hal 15 - 24)
  // ==========================================
  const ch2 = [
    { title: 'Latar Belakang Pengesahan UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi', p1: 'Sebelum disahkannya UU PDP, ketentuan perlindungan data pribadi di Indonesia tersebar di lebih dari 30 undang-undang sektoral yang kerap tumpang tindih dan tidak memiliki sanksi tegas. Pengesahan UU No. 27/2022 pada 17 Oktober 2022 menjadi tonggak sejarah terciptanya rezim hukum data yang komprehensif dan selaras dengan standar internasional.' },
    { title: 'Klasifikasi Data Pribadi: Data Pribadi Bersifat Umum vs Spesifik', p1: 'Pasal 4 UU PDP membedakan dua jenis data pribadi: (1) Data Pribadi Umum: nama lengkap, jenis kelamin, kewarganegaraan, agama, status perkawinan, dan data pribadi yang dikombinasikan untuk mengidentifikasi seseorang; (2) Data Pribadi Spesifik: data kesehatan, biometrik, genetika, catatan kejahatan, data anak, data keuangan pribadi, dan data orientasi seksual yang menuntut standar proteksi keamanan lebih ketat.' },
    { title: 'Hak-Hak Subjek Data Pribadi Menurut Bab IV UU PDP', p1: 'Subjek Data Pribadi (pemilik data) memiliki serangkaian hak fundamental: hak memperoleh kejelasan identitas pengendali, hak melengkapi dan memperbarui data, hak mendapatkan akses dan salinan data, hak mengakhiri pemrosesan, hak menghapus dan memusnahkan data (right to erasure), hak menarik persetujuan (withdrawal of consent), serta hak menolak pemrosesan otomatis (profiling).' },
    { title: 'Hak Portabilitas Data (Right to Data Portability)', p1: 'Pasal 13 UU PDP memberikan hak kepada subjek data untuk meminta dan mengirimkan data pribadinya dari satu pengendali data ke pengendali data lainnya dalam format terstruktur yang lazim digunakan dan terbaca oleh mesin (interoperable machine-readable format), mencegah vendor lock-in dalam layanan digital.' },
    { title: 'Landasan Pemrosesan Data yang Sah (Lawful Basis of Processing)', p1: 'Pengendali data dilarang memproses data tanpa landasan hukum yang sah. Pasal 20 UU PDP menetapkan 6 dasar hukum pemrosesan: (1) Persetujuan eksplisit yang sah dari subjek data; (2) Pemenuhan kewajiban perjanjian kontrak; (3) Pemenuhan kewajiban hukum pengontrol; (4) Pemenuhan kepentingan vital subjek data; (5) Pelaksanaan tugas kepentingan umum; atau (6) Pemenuhan kepentingan yang sah (legitimate interests).' },
    { title: 'Keabsahan Persetujuan (Valid Consent) & Larangan Klausa Baku Manipulatif', p1: 'Persetujuan pemrosesan data pribadi harus diberikan secara tertulis atau terekam secara eksplisit, sukarela, dan spesifik. Pengendali data dilarang menyembunyikan persetujuan dalam klausul baku yang membingungkan atau menggunakan pola gelap antarmuka (dark patterns) yang memaksa persetujuan.' },
    { title: 'Ketentuan Khusus Pemrosesan Data Anak & Penyandang Disabilitas', p1: 'UU PDP memberikan perlindungan afirmatif bagi kelompok rentan. Pemrosesan data pribadi anak wajib memperoleh persetujuan tertulis dari orang tua atau wali yang sah. Sementara pemrosesan data penyandang disabilitas dilakukan melalui persetujuan wali dengan metode komunikasi yang dapat diakses.' },
    { title: 'Kewajiban Penghapusan Data Pribadi (Right to Erasure / Right to be Forgotten)', p1: 'Pengendali data wajib menghapus data pribadi jika: tujuan pemrosesan telah tercapai, masa retensi penyimpanan telah berakhir, subjek data menarik persetujuannya, atau pemrosesan terbukti melanggar hukum. Prosedur pemusnahan harus dibuktikan dengan Berita Acara Pemusnahan yang terekam aman.' },
    { title: 'Ganti Rugi Perdata atas Pelanggaran Hak Subjek Data', p1: 'Pasal 12 UU PDP menegaskan bahwa subjek data pribadi berhak menggugat dan menerima ganti rugi atas pelanggaran pemrosesan data pribadi yang dilakukan oleh pengendali atau prosesor data melalui gugatan perbuatan melawan hukum (onrechtmatige daad) di pengadilan negeri.' },
    { title: 'Masa Transisi Penyesuaian Kepatuhan 2 Tahun Korporasi & Institusi', p1: 'Bab 2 diakhiri dengan evaluasi kesiapan kepatuhan pasca berakhirnya masa transisi UU PDP pada Oktober 2024, menyoroti penyesuaian formulir pendaftaran, kebijakan privasi (privacy policy), dan mekanisme layanan pengaduan hak subjek data.' },
  ];

  ch2.forEach((sub, i) => {
    pages.push({
      pageNumber: 15 + i,
      chapterNumber: 2,
      chapterTitle: 'Bab 2: Rezim Regulasi UU PDP & Hak Subjek Data',
      sectionTitle: `Sub-Bab 2.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Dalam pembahasan "${title}", ${authorName} menyoroti bahwa pengesahan UU PDP telah menggeser paradigma kepemilikan data: data pribadi adalah hak milik mutlak individu pemiliknya, bukan aset properti bebas korporasi platform teknologi.`,
        `Halaman ${15 + i} ini membedah setiap pasal hak subjek data secara analitis, dilengkapi contoh formulir permintaan hak subjek data dan alur verifikasi identitas pemohon.`,
        `Perguruan Tinggi mewajibkan seluruh pengelola unit kampus mematuhi standar perlindungan data mahasiswa sesuai amanat Bab IV UU PDP.`,
      ],
      callout: {
        type: 'case_study',
        title: `Poin Regulasi UU PDP (Hal ${15 + i})`,
        content: `Pasal 4 UU PDP: Data keuangan pribadi, catatan biometrik, dan rekam medis diklasifikasikan sebagai Data Pribadi Spesifik yang mensyaratkan standar enkripsi dan audit keamanan tingkat tinggi.`,
      },
    });
  });

  // ==========================================
  // BAB 3: DATA CONTROLLER & BREACH (Hal 25 - 34)
  // ==========================================
  const ch3 = [
    { title: 'Pemisahan Peran Pengendali Data (Controller) vs Prosesor Data (Processor)', p1: 'UU PDP secara tegas membedakan pihak yang menentukan tujuan dan kendali pemrosesan data (Pengendali Data Pribadi) dengan pihak yang semata-mata melakukan pemrosesan atas nama pengendali data (Prosesor Data Pribadi seperti penyedia layanan cloud hosting atau vendor outsourcing). Hubungan kedua pihak wajib diikat dalam Data Processing Agreement (DPA) tertulis.' },
    { title: 'Kewajiban Pengendali Data: Prinsip Akuntabilitas & Privacy by Design', p1: 'Pengendali data wajib membuktikan pemenuhan prinsip perlindungan data (accountability principle). Arsitektur sistem informasi wajib menerapkan Privacy by Design dan Privacy by Default, memastikan proteksi data telah tertanam sejak tahap awal perancangan perangkat lunak, bukan sekadar tempelan di akhir.' },
    { title: 'Penilaian Dampak Pelindungan Data Pribadi (Data Protection Impact Assessment - DPIA)', p1: 'Sebelum meluncurkan teknologi baru yang berpotensi menimbulkan risiko tinggi terhadap hak subjek data (seperti pemrosesan data biometrik massal, pemeringkatan kredit AI, atau pelacakan lokasi real-time), pengendali data wajib menyusun dokumen kajian DPIA untuk mengidentifikasi dan memitigasi risiko.' },
    { title: 'Kewajiban Penunjukan Pejabat Pelindungan Data (Data Protection Officer - DPO)', p1: 'Pasal 53 UU PDP mewajibkan penunjukan Pejabat Pelindungan Data (DPO) jika: (1) pemrosesan data dilakukan untuk kepentingan pelayanan publik; (2) kegiatan inti pengendali data memerlukan pemantauan rutin dan sistematis berskala besar; atau (3) kegiatan inti memproses data pribadi spesifik dalam skala masif.' },
    { title: 'Tugas, Wewenang & Independensi Kedudukan Pejabat Pelindungan Data (DPO)', p1: 'DPO bertindak sebagai penasihat internal dan narahubung resmi bagi otoritas pengawas. DPO wajib memiliki kompetensi hukum dan teknologi informasi yang memadai, beroperasi secara independen tanpa benturan kepentingan (conflict of interest), dan bertanggung jawab langsung kepada jajaran pimpinan tertinggi organisasi.' },
    { title: 'Kewajiban Pemberitahuan Kegagalan Pelindungan Data (Data Breach Notification) 3x24 Jam', p1: 'Pasal 46 UU PDP mewajibkan pengendali data yang mengalami insiden kebocoran keamanan data pribadi untuk menyampaikan pemberitahuan tertulis paling lambat 3 x 24 jam kepada: (1) Subjek Data Pribadi yang terdampak; dan (2) Lembaga Pelindungan Data Pribadi resmi pemerintah.' },
    { title: 'Format & Isi Wajib Notifikasi Kebocoran Data kepada Publik', p1: 'Pemberitahuan insiden kegagalan data wajib memuat sekurang-kurangnya: data pribadi apa yang terungkap, kapan dan bagaimana insiden terjadi, potensi dampak kerugian bagi subjek data, langkah penanganan dan pemulihan yang telah diambil, serta kontak narahubung resmi tim penanganan krisis organisasi.' },
    { title: 'Sanksi Administratif UU PDP: Teguran Tertulis hingga Denda 2% Pendapatan Tahunan', p1: 'Pelanggaran kewajiban pengendali data dikenai sanksi administratif bertingkat: peringatan tertulis, penghentian sementara kegiatan pemrosesan, penghapusan data, dan denda administratif paling tinggi 2% dari total pendapatan atau penerimaan tahunan korporasi bagi badan usaha.' },
    { title: 'Tanggung Jawab Pidana Korporasi & Pertanggungjawaban Dewan Direksi', p1: 'Pasal 67 hingga 70 UU PDP mengatur ancaman pidana denda dan penjara bagi korporasi dan pengurusnya yang terbukti secara melawan hukum memperoleh, mengumpulkan, atau memperjualbelikan data pribadi yang bukan haknya, termasuk perampasan aset keuntungan korporasi.' },
    { title: 'Penyusunan Rencana Kesiapsiagaan Tanggap Insiden (Incident Response Plan)', p1: 'Bab 3 diakhiri dengan kerangka kerja teknis penyusunan Standar Operasional Prosedur penanganan insiden siber: dari pembentukan tim Computer Security Incident Response Team (CSIRT), protokol isolasi jaringan terdampak, hingga preservasi bukti forensik digital.' },
  ];

  ch3.forEach((sub, i) => {
    pages.push({
      pageNumber: 25 + i,
      chapterNumber: 3,
      chapterTitle: 'Bab 3: Kewajiban Pengendali Data & Tata Kelola Kepatuhan',
      sectionTitle: `Sub-Bab 3.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Dalam analisis mendalam naskah "${title}", ${authorName} mengingatkan bahwa insiden kebocoran data bukan lagi sekadar permasalahan divisi IT internal, melainkan krisis hukum dan tata kelola reputasi korporasi yang mengancam kelangsungan hidup organisasi.`,
        `Halaman ${25 + i} ini menyediakan panduan audit kepatuhan (compliance checklist), draf kontrak klausul DPA antara pengendali dan prosesor data, serta format surat resmi notifikasi kebocoran data 3x24 jam.`,
        `Keahlian tata kelola hukum siber ini menjadi materi esensial bagi calon sarjana dan profesional lulusan Perguruan Tinggi dalam memimpin transformasi digital di dunia kerja.`,
      ],
      callout: {
        type: 'case_study',
        title: `Protokol Hukum Kunci (Hal ${25 + i})`,
        content: `Aturan Emas 3x24 Jam: Kegagalan menyampaikan notifikasi kebocoran data dalam batas waktu 72 jam sejak terdeteksi merupakan pelanggaran administratif berat yang dapat memicu pembekuan operasional sistem elektronik.`,
      },
    });
  });

  // ==========================================
  // BAB 4: CYBERCRIME & BUKTI ELEKTRONIK (Hal 35 - 44)
  // ==========================================
  const ch4 = [
    { title: 'Ruang Lingkup Tindak Pidana Siber dalam UU ITE & Revisi Keduanya', p1: 'Tindak pidana siber (cybercrime) diatur dalam Bab VII UU ITE (UU No. 11/2008 jo UU No. 19/2016 jo UU No. 1/2024). Kita membedakan Computer-Assisted Crime (komputer sebagai alat kejahatan konvensional seperti penipuan) dengan Computer-Related Crime / Cyber-Dependent Crime (komputer sebagai target utama kejahatan seperti serangan DDoS dan malware).' },
    { title: 'Delik Akses Ilegal (Illegal Access) Pasal 30 UU ITE', p1: 'Pasal 30 UU ITE melarang setiap orang dengan sengaja dan tanpa hak mengakses komputer atau sistem elektronik milik orang lain, baik dengan cara biasa (hacking), dengan melanggar sistem pengamanan (cracking, bypass password), maupun untuk memperoleh informasi elektronik rahasia, dengan ancaman pidana penjara hingga 8 tahun.' },
    { title: 'Delik Intersepsi Ilegal & Pencurian Data (Illegal Interception) Pasal 31', p1: 'Pasal 31 mengkriminalisasi penyadapan atau intersepsi transmisi informasi elektronik non-publik (wiretapping, packet sniffing, man-in-the-middle attack). Penyadapan hanya sah jika dilakukan oleh aparat penegak hukum yang berwenang dalam rangka penyidikan sesuai perintah pengadilan.' },
    { title: 'Perusakan Sistem & Serangan Ransomware (Data Interference) Pasal 32 & 33', p1: 'Tindakan mengubah, merusak, menghilangkan, menyembunyikan, atau mengenkripsi data secara melawan hukum diatur dalam Pasal 32. Serangan ransomware yang melumpuhkan sistem komputer perbankan atau rumah sakit dijerat dengan Pasal 33 karena mengakibatkan sistem elektronik terganggu atau tidak berfungsi sebagaimana mestinya.' },
    { title: 'Penyalahgunaan Perangkat Keras/Lunak Peretas (Misuse of Devices) Pasal 34', p1: 'Memproduksi, menjual, mendistribusikan, atau memiliki perangkat lunak berbahaya (trojan, rootkit, keylogger) atau kata sandi akses komputer yang dirancang untuk memfasilitasi tindak pidana siber diancam pidana berdasarkan Pasal 34 UU ITE.' },
    { title: 'Penipuan Finansial Daring, Phishing & Social Engineering Pasal 28', p1: 'Kejahatan rekayasa sosial (social engineering) seperti phishing dan manipulasi OTP perbankan dijerat melalui Pasal 28 ayat (1) mengenai penyebaran berita bohong yang menyesatkan yang mengakibatkan kerugian konsumen dalam transaksi elektronik.' },
    { title: 'Keabsahan Alat Bukti Elektronik dalam Hukum Acara Pidana Indonesia', p1: 'Pasal 5 UU ITE menegaskan bahwa Informasi Elektronik, Dokumen Elektronik, dan hasil cetaknya merupakan alat bukti hukum yang sah dan merupakan perluasan dari alat bukti yang diatur dalam Pasal 184 Kitab Undang-Undang Hukum Acara Pidana (KUHAP).' },
    { title: 'Standar Integritas Bukti Forensik Digital (Chain of Custody) ISO/IEC 27037', p1: 'Agar bukti elektronik dapat diterima di persidangan (admissible in court), penyidik wajib menjaga rantai pengawasan (chain of custody): penyitaan perangkat menggunakan kantong Faraday, pembuatan salinan bayangan bit-by-bit (bit-stream forensic image), dan verifikasi nilai hash cryptographic (SHA-256) untuk membuktikan integritas keaslian naskah tanpa manipulasi.' },
    { title: 'Pemberantasan Judi Daring & Pemblokiran Konten Ilegal oleh Pemerintah', p1: 'Kewenangan pemerintah dalam memutus akses (takedown/blocking) terhadap konten perjudian online, pornografi anak, dan terorisme diatur dalam Pasal 40 UU ITE, dilengkapi mekanisme pemblokiran rekening bank dan kanal pembayaran digital bekerjasama dengan Bank Indonesia dan OJK.' },
    { title: 'Kerjasama Internasional Penegakan Hukum Siber: Budapest Convention on Cybercrime', p1: 'Bab 4 diakhiri dengan kajian Mutual Legal Assistance (MLA) antar negara dalam melacak pelaku kejahatan lintas batas (cross-border cybercrime), permintaan data ekstrateritorial kepada penyedia platform global, dan keselarasan dengan Konvensi Budapest tentang Cybercrime.' },
  ];

  ch4.forEach((sub, i) => {
    pages.push({
      pageNumber: 35 + i,
      chapterNumber: 4,
      chapterTitle: 'Bab 4: Tindak Pidana Siber, Bukti Elektronik & UU ITE',
      sectionTitle: `Sub-Bab 4.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Dalam naskah "${title}", ${authorName} menekankan pentingnya pembuktian forensik digital yang steril dalam persidangan tindak pidana siber. Cacat sedikit saja dalam rantai pengawasan bukti elektronik akan meruntuhkan seluruh dakwaan jaksa penuntut umum di hadapan majelis hakim.`,
        `Halaman ${35 + i} ini menyajikan tabel komparasi pasal-pasal pidana siber, alur sertifikasi ahli forensik digital di pengadilan, dan contoh lembar formulir Chain of Custody bukti digital resmi kepolisian.`,
        `Materi ini memberikan wawasan multidisipliner bagi sivitas akademika Perguruan Tinggi dalam memahami batas antara eksperimen keamanan informasi etis dengan delik tindak pidana siber.`,
      ],
      callout: {
        type: 'definition',
        title: `Konsep Forensik Hukum Kunci (Hal ${35 + i})`,
        content: `Chain of Custody: Rangkaian dokumentasi kronologis tak terputus yang membuktikan perolehan, pengamanan, pemindahan, analisis, dan penyimpanan bukti elektronik dari tempat kejadian perkara hingga meja persidangan.`,
      },
    });
  });

  // ==========================================
  // BAB 5: HUKUM KOMPARATIF & MASA DEPAN (Hal 45 - 50)
  // ==========================================
  const ch5 = [
    { title: 'Studi Komparatif: UU PDP Indonesia vs GDPR Uni Eropa', p1: 'General Data Protection Regulation (GDPR - Regulation EU 2016/679) adalah kiblat hukum privasi global. Kita membandingkan kesamaan prinsip kedua instrumen dan perbedaannya: independensi Otoritas Pengawas PDP (DPA) independen di bawah GDPR versus lembaga pemerintah di bawah Presiden dalam UU PDP, serta besaran pagu denda finansial.' },
    { title: 'Regulasi Arus Data Lintas Batas (Cross-Border Data Transfer) & Standar Adequacy', p1: 'Pengendali data dilarang mengirimkan data pribadi ke luar negeri kecuali negara tujuan memiliki tingkat perlindungan data yang setara atau lebih tinggi (Adequacy Decision), atau pengendali data mengikat kontrak Standar Klausul Perlindungan Data (SCC), atau memperoleh persetujuan eksplisit dari subjek data.' },
    { title: 'Tantangan Yuridis Kontrak Pintar (Smart Contracts) & Aset Kripto Blockchain', p1: 'Sifat blockchain yang terdesentralisasi dan tidak dapat diubah (immutable) bertentangan langsung dengan prinsip "Right to Erasure" pada hukum privasi. Kita mengkaji aspek legalitas penegakan wanprestasi pada Smart Contracts otomatis dan kedudukan aset kripto sebagai komoditas berjangka menurut hukum Indonesia.' },
    { title: 'Tanggung Jawab Hukum Sistem Kecerdasan Buatan (AI Liability Framework)', p1: 'Ketika sistem otonom kecerdasan buatan menyebabkan kerugian finansial atau fisik (misalnya mobil otonom menabrak pejalan kaki atau model AI mendiskriminasi kredit), siapakah yang memikul tanggung jawab hukum? Kita menelaah doktrin Strict Liability, kelalaian pengembang (developer negligence), dan kerangka AI Act Uni Eropa.' },
    { title: 'Kedaulatan Cloud & Pertarungan Regulasi Data Global (US CLOUD Act vs Privasi Lokal)', p1: 'Hukum ekstrateritorial seperti United States CLOUD Act mewajibkan perusahaan teknologi AS menyerahkan data yang disimpan di server seluruh dunia atas perintah pengadilan AS, memicu benturan hukum dengan kewajiban lokalisasi data dan kedaulatan informasi nasional di negara-negara berkembang.' },
    { title: 'Kesimpulan & Rekomendasi Roadmap Tata Kelola Siber Indonesia', p1: 'Karya "${title}" ditutup dengan manifesto: hukum siber bukan instrumen untuk membungkam kebebasan berekspresi, melainkan instrumen perlindungan harkat dan martabat kemanusiaan di era digital. Membangun ekosistem digital Indonesia yang tangguh memerlukan harmoni antara kepatuhan hukum, inovasi teknologi, dan penegakan hukum yang adil.' },
  ];

  ch5.forEach((sub, i) => {
    pages.push({
      pageNumber: 45 + i,
      chapterNumber: 5,
      chapterTitle: 'Bab 5: Hukum Komparatif Internasional & Tantangan Masa Depan',
      sectionTitle: `Sub-Bab 5.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Karya "${title}" oleh ${authorName} mengakhiri pembahasannya dengan pandangan visioner bahwa supremasi hukum di abad informasi adalah prasyarat mutlak kedaulatan bangsa dan kesejahteraan rakyat Indonesia.`,
        `Halaman ${45 + i} ini membekali mahasiswa dan praktisi hukum dengan kerangka berpikir komparatif global yang tajam untuk mengantisipasi dinamika regulasi teknologi generasi berikutnya.`,
        `Perguruan Tinggi bangga menjadi pusat pembelajaran yang konsisten melahirkan insan akademis yang cerdas secara digital dan taat pada hukum dan etika.`,
      ],
      callout: {
        type: 'summary',
        title: `Prinsip Hukum Siber Kunci (Hal ${45 + i})`,
        content: `Informational Self-Determination, Akuntabilitas Pengendali Data, Forensik Digital Berstandar, dan Perlindungan Hak Asasi Manusia adalah empat sendi penegakan hukum siber modern.`,
      },
    });
  });

  // ==========================================
  // BAGIAN PENUTUP (Hal 51 - 55)
  // ==========================================
  pages.push({
    pageNumber: 51,
    chapterNumber: 6,
    chapterTitle: 'Glosarium Hukum Siber & Privasi Data',
    sectionTitle: 'Kamus Istilah Yuridis Digital Baku (A - Z)',
    paragraphs: [
      `Glosarium terminologi hukum baku yang digunakan dalam naskah "${title}":`,
      `• Asas Ubikuitas: Doktrin hukum yang menetapkan bahwa tindak pidana siber dianggap terjadi di tempat perbuatan dilakukan, tempat sarana komputer berada, maupun tempat timbulnya kerugian.\n• Chain of Custody: Rantai pengawasan bukti fisik dan digital yang terdokumentasi untuk menjaga keaslian bukti persidangan.\n• Data Controller: Pihak perorangan atau badan hukum yang menentukan tujuan dan melakukan kendali pemrosesan data pribadi.\n• Data Processor: Pihak yang memproses data pribadi atas nama dan sesuai arahan Pengendali Data Pribadi.`,
      `• DPO (Data Protection Officer): Pejabat independen yang bertugas memastikan kepatuhan organisasi terhadap regulasi privasi data.\n• Forensik Digital: Penerapan metode ilmiah dan teknik penelusuran komputer untuk mengungkap fakta hukum pidana siber.\n• Informational Self-Determination: Hak asasi individu untuk menentukan nasib dan batasan pengungkapan data pribadinya kepada pihak lain.\n• Right to be Forgotten: Hak subjek data untuk meminta pengendali data menghapus informasi pribadinya yang tidak lagi relevan.`,
    ],
    callout: {
      type: 'definition',
      title: 'Standar Istilah Hukum / UU PDP',
      content: `Definisi diselaraskan dengan Pasal 1 UU No. 27 Tahun 2022 dan KUHAP Indonesia.`,
    },
  });

  pages.push({
    pageNumber: 52,
    chapterNumber: 6,
    chapterTitle: 'Bibliografi & Daftar Pustaka Hukum Siber',
    sectionTitle: 'Rujukan Literatur Yuridis Nasional & Internasional',
    paragraphs: [
      `Daftar literatur dan perundang-undangan rujukan dalam naskah "${title}":`,
      `1. Undang-Undang Republik Indonesia Nomor 27 Tahun 2022 tentang Perlindungan Data Pribadi.\n2. Undang-Undang Republik Indonesia Nomor 1 Tahun 2024 tentang Perubahan Kedua atas UU Informasi dan Transaksi Elektronik.\n3. Lessig, L. (2006). Code: Version 2.0. Basic Books.\n4. Makarim, E. (2020). Kompilasi Hukum Telematika dan Keamanan Informasi. Jakarta: Rajawali Pers.`,
      `5. Pangestu, A. (2023). Tanggung Jawab Yuridis Pengendali Data dalam Rezim UU PDP. Jurnal Hukum Bisnis dan Multimedia Perguruan Tinggi, 10(2), 77-98.`,
      `Seluruh dokumen perundang-undangan dan rujukan di atas tersedia di Repositori Perpustakaan Akademik.`,
    ],
  });

  pages.push({
    pageNumber: 53,
    chapterNumber: 6,
    chapterTitle: 'Indeks Subjek & Kata Kunci Hukum Siber',
    sectionTitle: 'Penelusuran Lokasi Topik Yuridis',
    paragraphs: [
      `Indeks subjek untuk mempercepat penelusuran naskah:`,
      `• Asas Ekstrateritorialitas: Hal 6\n• Chain of Custody Forensik: Hal 42\n• Data Controller vs Processor: Hal 25\n• Data Pribadi Spesifik: Hal 16\n• DPO (Pejabat Pelindungan Data): Hal 28, 29\n• GDPR Komparasi Uni Eropa: Hal 45`,
      `• Notifikasi Kebocoran Data (3x24 Jam): Hal 30\n• Privacy by Design: Hal 26\n• Right to be Forgotten: Hal 22\n• Sanksi Administratif 2%: Hal 32\n• UU ITE Pasal 30 (Illegal Access): Hal 36\n• UU PDP No 27/2022: Hal 15, 16`,
    ],
  });

  pages.push({
    pageNumber: 54,
    chapterNumber: 6,
    chapterTitle: 'Bank Soal Ujian Komprehensif Hukum Siber',
    sectionTitle: 'Uji Penguasaan Materi Hukum & Kebijakan Privasi',
    paragraphs: [
      `Soal evaluasi mandiri persiapan ujian hukum siber dan etika profesi di lingkungan perguruan tinggi:`,
      `SOAL 1 (Hak Subjek Data): Seorang konsumen menuntut penghapusan riwayat transaksinya dari aplikasi pinjaman online setelah melunasi seluruh hutangnya berdasarkan Right to Erasure. Apakah perusahaan wajib memenuhi tuntutan tersebut? Analisis berdasarkan batasan masa retensi UU PDP!`,
      `SOAL 2 (Penanganan Insiden Kebocoran): Suatu platform e-commerce mengalami kebocoran 1 juta basis data nasabah akibat serangan ransomware. Uraikan kewajiban hukum yang harus dilakukan jajaran direksi dalam batas waktu 3x24 jam menurut Pasal 46 UU PDP!`,
      `SOAL 3 (Tindak Pidana UU ITE): Jelaskan unsur-unsur tindak pidana akses ilegal Pasal 30 UU ITE dan bandingkan dengan delik perusakan sistem Pasal 33!`,
      `SOAL 4 (Alat Bukti Digital): Apa yang menyebabkan suatu berkas digital ditolak sebagai alat bukti yang sah dalam persidangan pidana? Jelaskan peran integritas nilai hash cryptographic dalam pembuktian!`,
    ],
    callout: {
      type: 'exercise',
      title: 'Pedoman Penilaian Ujian',
      content: `Kriteria penilaian meliputi ketajaman analisis yuridis normatif (40%), ketepatan penerapan pasal UU PDP/ITE (35%), dan penalaran studi kasus riil (25%).`,
    },
  });

  pages.push({
    pageNumber: 55,
    chapterNumber: 6,
    chapterTitle: 'Lembar Catatan Mahasiswa & Kolofon Akhir',
    sectionTitle: 'Verifikasi Sirkulasi Digital Perguruan Tinggi',
    paragraphs: [
      `Selamat! Anda telah menyelesaikan pembacaan seluruh 55 halaman naskah "${title}" karya ${authorName}.`,
      `Gunakan lembar akhir ini atau fitur catatan digital reader untuk merumuskan telaah kepatuhan hukum privasi pada proyek bisnis digital Anda.`,
      `Naskah resmi Repositori Perpustakaan Perguruan Tinggi. Narahubung layanan e-book akademik: layanan.pustaka@perguruan-tinggi.ac.id. Hak cipta dilindungi undang-undang.`,
    ],
    callout: {
      type: 'summary',
      title: 'Verifikasi Progres Baca',
      content: `Progres: 100% (55 dari 55 Halaman Terbaca). Aktivitas pembacaan terekam pada sistem peminjaman sivitas akademika kampus.`,
    },
  });

  return pages;
}
