import { Book, BookPage } from '../../types/library';

export function getLibraryScienceBookPages(book: Book): BookPage[] {
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
      `Klasifikasi Desimal Dewey (DDC): ${ddc} (Perpustakaan Digital & Organisasi Informasi). Nomor ISBN: ${book.isbn}. Naskah resmi Repositori Digital Perpustakaan Akademik Terakreditasi.`,
      `Karya rujukan fundamental mengenai evolusi repositori institusi, standar metadata Dublin Core & MARC 21, klasifikasi DDC edisi 23, temu kembali informasi (information retrieval), preservasi digital OAIS, dan etika tata kelola sirkulasi digital sivitas akademika.`,
    ],
    callout: {
      type: 'summary',
      title: 'Verifikasi Kurasi Ilmu Perpustakaan & Informasi',
      content: `Disusun oleh Doktor Ilmu Perpustakaan dan Informasi, menjadi pedoman baku pengelolaan repositori cerdas perguruan tinggi.`,
    },
  });

  pages.push({
    pageNumber: 2,
    chapterNumber: 0,
    chapterTitle: 'Prakata Penulis & Kurator Perpustakaan',
    sectionTitle: 'Kata Pengantar: Transformasi Perpustakaan di Era Data Raya',
    paragraphs: [
      `Perpustakaan modern di abad ke-21 telah melampaui peran konvensionalnya sebagai sekadar gedung penyimpanan buku fisik. Kini, perpustakaan bermutasi menjadi episentrum ekosistem pengetahuan kampus (knowledge hub) yang dinamis, terhubung 24 jam sehari melalui jaringan digital, dan mampu melayani kebutuhan riset mahasiswa dari mana saja.`,
      `Namun, peralihan menuju ranah digital menuntut disiplin pengorganisasian informasi yang jauh lebih canggih. Tanpa metadata yang terstandar, dokumen ilmiah akan tenggelam dalam lautan data tanpa bisa ditemukan kembali. Buku "${title}" mengupas tuntas arsitektur perpustakaan masa depan: dari skema Dublin Core, klasifikasi DDC, algoritma pencarian Boolean OPAC, hingga preservasi jangka panjang standar OAIS.`,
      `Kami mendedikasikan buku ini bagi pustakawan, akademisi, dan mahasiswa Perguruan Tinggi dalam mewujudkan perpustakaan cerdas berkelas dunia.`,
    ],
    callout: {
      type: 'discussion',
      title: 'Amanat Akademik Penulis',
      content: `Informasi yang tidak terorganisir adalah kebisingan; informasi yang terkelola dengan metadata bermutu adalah kekuatan peradaban.`,
    },
  });

  pages.push({
    pageNumber: 3,
    chapterNumber: 0,
    chapterTitle: 'Pedoman Pembacaan & Silabus Kepustakawanan',
    sectionTitle: 'Panduan Telaah Tata Kelola Informasi Digital',
    paragraphs: [
      `Buku ini terbagi ke dalam 5 bab utama dengan total 55 halaman aktif. Setiap halaman memuat teori organisasi pengetahuan, standar katalogisasi internasional, studi kasus arsitektur repositori, dan protokol preservasi digital.`,
      `Capaian Pembelajaran Lulusan (CPL) meliputi: (1) Penguasaan filosofi akses terbuka (open access) dan interoperabilitas repositori; (2) Keterampilan mengatalogkan naskah dengan metadata Dublin Core dan MARC 21; (3) Kemampuan merancang sistem temu kembali informasi berbasis DDC dan mengelola siklus preservasi OAIS.`,
      `Mahasiswa disarankan mempelajari struktur tag MARC 21 dan skema metadata Dublin Core secara mendalam untuk kebutuhan praktikum kepustakawanan modern.`,
    ],
    callout: {
      type: 'definition',
      title: 'Prasyarat Keilmuan',
      content: `Pengantar Ilmu Perpustakaan, Manajemen Sistem Informasi, serta Dasar Basis Data dan Web Semantik.`,
    },
  });

  pages.push({
    pageNumber: 4,
    chapterNumber: 0,
    chapterTitle: 'Daftar Isi & Sistematika Keilmuan',
    sectionTitle: 'Peta Navigasi Bab & Topik Bahasan Perpustakaan',
    paragraphs: [
      `Sistematika bahasan naskah "${title}":`,
      `• BAB 1: ARSITEKTUR REPOSITORI INSTITUSI & AKSES TERBUKA (Halaman 5 - 14)\n• BAB 2: STANDAR METADATA & PENGORGANISASIAN INFORMASI (Halaman 15 - 24)\n• BAB 3: KLASIFIKASI DESIMAL DEWEY (DDC) & TAJUK SUBJEK (Halaman 25 - 34)\n• BAB 4: TEMU KEMBALI INFORMASI (IR) & LAYANAN PEMUSTAKA OPAC (Halaman 35 - 44)\n• BAB 5: PRESERVASI DIGITAL, DRM & SMART LIBRARY MASA DEPAN (Halaman 45 - 50)`,
      `• BAGIAN PENUTUP: Glosarium Kepustakawanan (Hal 51), Bibliografi Ilmu Perpustakaan (Hal 52), Indeks Istilah DDC & Metadata (Hal 53), Soal Ujian Komprehensif (Hal 54), Catatan & Kolofon (Hal 55).`,
    ],
  });

  // ==========================================
  // BAB 1: REPOSITORI & OPEN ACCESS (Hal 5 - 14)
  // ==========================================
  const ch1 = [
    { title: 'Evolusi Perpustakaan: Dari Koleksi Fisik ke Repositori Digital Kampus', p1: 'Transformasi perpustakaan perguruan tinggi bergeser dari paradigma kepemilikan fisik (custodial paradigm) menuju paradigma akses terdistribusi (access paradigm). Repositori institusi (Institutional Repository - IR) menjadi etalase utama karya ilmiah sivitas akademika: skripsi, tesis, disertasi, laporan riset dosen, dan artikel jurnal kampus.' },
    { title: 'Inisiatif Akses Terbuka Budapest (BOAI) & Filosofi Ilmu Terbuka (Open Science)', p1: 'Deklarasi Budapest Open Access Initiative (2002) menetapkan bahwa naskah ilmiah hasil riset publik harus dapat diakses bebas secara daring tanpa hambatan finansial, legal, atau teknis. Kita membedakan jalur Emas (Gold Open Access) melalui jurnal akses terbuka dan jalur Hijau (Green Open Access) melalui pengarsipan mandiri pada repositori institusi.' },
    { title: 'Arsitektur Platform Repositori: EPrints, DSpace, Invenio & Koha', p1: 'Memilih platform sistem manajemen repositori menuntut evaluasi skalabilitas dan kepatuhan standar. DSpace dan EPrints mendominasi perguruan tinggi dunia karena dukungan kuat terhadap protokol metadata, sedangkan Koha dan SLiMS (Senayan Library Management System) menjadi tulang punggung sistem sirkulasi peminjaman terintegrasi.' },
    { title: 'Protokol Interoperabilitas OAI-PMH (Open Archives Initiative)', p1: 'Agar dokumen pada perpustakaan kampus dapat diindeks oleh agregator global seperti Google Scholar, BASE, dan portal nasional Garuda/RAMA Kemenristekdikti, repositori wajib mengimplementasikan protokol OAI-PMH (Protocol for Metadata Harvesting) berbasis format XML dengan verifikasi respon verb Identify, ListMetadataFormats, dan ListRecords.' },
    { title: 'Tata Kelola Kebijakan Mandat Deposit Wajib Mahasiswa & Dosen', p1: 'Keberhasilan repositori ditentukan oleh kebijakan mandat serah simpan karya ilmiah (mandatory deposit policy). Kita menyusun Standar Operasional Prosedur (SOP) verifikasi keaslian naskah, persetujuan publikasi naskah (embargo agreement), dan proteksi orisinalitas anti-plagiarisme.' },
    { title: 'Model Layanan Sirkulasi Sivitas Akademika Berkeadilan', p1: 'Prinsip keadilan akses menuntut sistem sirkulasi yang seimbang: mahasiswa jenjang sarjana memiliki hak peminjaman e-book yang setara, fitur perpanjangan mandiri (loan renewal), pengingat otomatis jatuh tempo pengembalian, dan mekanisme kuota peminjaman yang mencegah monopoli koleksi referensi wajib.' },
    { title: 'Arsitektur Jaringan Perpustakaan Konsorsium & Silang Layan (Inter-Library Loan)', p1: 'Tidak ada perpustakaan yang mampu memiliki seluruh literatur dunia secara mandiri. Silang layan antar perpustakaan perguruan tinggi (Inter-Library Loan - ILL) memfasilitasi pertukaran dokumen digital antar kampus secara legal melalui konsorsium FPPTI (Forum Perpustakaan Perguruan Tinggi Indonesia).' },
    { title: 'Metrik Evaluasi Kinerja Repositori: Download, View & Altmetrics', p1: 'Mengukur dampak repositori kampus tidak hanya dari jumlah pengunjung fisik. Kita mengkaji metrik penggunaan digital COUNTER-compliant, pemantauan pengunduhan berkas PDF unik, statistik keterbacaan global, serta skor Altmetric yang mengukur keterlibatan publikasi di media sosial dan berita.' },
    { title: 'Manajemen Hak Akses & Pembatasan Konten Naskah Sensitif', p1: 'Beberapa karya tugas akhir memuat paten industri tertunda atau data privat yang menuntut perlindungan kerahasiaan. Kita merancang klasifikasi status akses naskah: Terbuka Penuh (Open Access), Khusus Kampus (Campus-Only Access), dan Akses Tertutup Terbatas (Embargo Restricted).' },
    { title: 'Rencana Strategis Transformasi Perpustakaan Cerdas (Smart Campus Library)', p1: 'Bab 1 disimpulkan dengan peta jalan modernisasi perpustakaan Perguruan Tinggi: integrasi sistem e-library dengan Single Sign-On (SSO) akun mahasiswa, visualisasi analitik minat baca, dan tata kelola ruang kolaboratif digital.' },
  ];

  ch1.forEach((sub, i) => {
    pages.push({
      pageNumber: 5 + i,
      chapterNumber: 1,
      chapterTitle: 'Bab 1: Arsitektur Repositori Institusi & Akses Terbuka',
      sectionTitle: `Sub-Bab 1.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Dalam naskah "${title}", ${authorName} menegaskan bahwa repositori digital bukan sekadar tumpukan berkas PDF di server, melainkan simpul martabat akademik institusi yang memancarkan produktivitas riset sivitas ke tingkat dunia.`,
        `Halaman ${5 + i} ini membedah arsitektur teknis dan landasan filosofis manajemen perpustakaan digital, disertai diagram alur kerja sirkulasi dan skema interoperabilitas OAI-PMH.`,
        `Pedoman ini diterapkan secara langsung dalam operasional platform e-book dan repositori digital Perguruan Tinggi demi menghadirkan layanan prima bagi seluruh mahasiswa.`,
      ],
      callout: {
        type: i % 2 === 0 ? 'definition' : 'case_study',
        title: `Prinsip Kepustakawanan Kunci (Hal ${5 + i})`,
        content: `Hukum ke-5 Ranganathan: "The library is a growing organism." Perpustakaan digital adalah organisme dinamis yang harus terus beradaptasi dengan perkembangan teknologi informasi.`,
      },
    });
  });

  // ==========================================
  // BAB 2: METADATA & DUBLIN CORE (Hal 15 - 24)
  // ==========================================
  const ch2 = [
    { title: 'Urgensi Metadata sebagai Kunci Temu Kembali Informasi', p1: 'Metadata secara etimologis diartikan sebagai "data tentang data". Tanpa deskripsi metadata yang akurat, sistem pencarian komputer hanya melihat berkas digital sebagai deretan biner tak bermakna. Metadata memberikan konteks bibliografis: siapa penciptanya, apa subjeknya, kapan diterbitkan, dan bagaimana hak penggunaannya.' },
    { title: 'Tiga Kategori Metadata: Deskriptif, Struktural & Administratif', p1: 'Dalam organisasi informasi, kita membedakan tiga tipe metadata: Metadata Deskriptif (judul, pengarang, kata kunci, abstrak untuk pencarian), Metadata Struktural (hubungan antar bab, urutan halaman berkas multi-bagian), dan Metadata Administratif (hak cipta, format teknis berkas, riwayat preservasi dan migrasi).' },
    { title: 'Standar Dublin Core Metadata Initiative (DCMI) 15 Elemen Baku', p1: 'Dublin Core adalah standar metadata paling universal (ISO 15836). Simple Dublin Core terdiri atas 15 unsur dasar: Title, Creator, Subject, Description, Publisher, Contributor, Date, Type, Format, Identifier, Source, Language, Relation, Coverage, dan Rights.' },
    { title: 'Qualified Dublin Core: Perluasan Qualifier & Skema Pengkodean', p1: 'Untuk presisi yang lebih tinggi, Qualified Dublin Core menambahkan unsur penjelas (qualifiers) seperti elemen perbaikan (refinements: date.created, date.issued, title.alternative) dan skema pengkodean terstandar (encoding schemes: format DDC, skema tanggal W3CDTF, kode bahasa ISO 639-2).' },
    { title: 'Standar Katalogisasi Tradisional MARC 21 (Machine-Readable Cataloging)', p1: 'MARC 21 adalah standar baku sistem katalog perpustakaan dunia yang dikembangkan oleh Library of Congress. MARC menggunakan kode tag numerik tiga digit: Tag 100 untuk Pengarang Utama, Tag 245 untuk Pernyataan Judul, Tag 260/264 untuk Publikasi, Tag 650 untuk Tajuk Subjek, dan Tag 856 untuk Tautan Elektronik.' },
    { title: 'Metadata Object Description Schema (MODS) & METS XML', p1: 'MODS dirancang oleh Library of Congress sebagai jembatan antara kesederhanaan Dublin Core dan kerumitan kaku MARC 21. Ditulis dalam sintaks XML berbasis teks deskriptif, MODS memudahkan pertukaran metadata antar repositori digital modern bersama skema pembungkus METS (Metadata Encoding and Transmission Standard).' },
    { title: 'Web Semantik & Linked Open Data (LOD) di Perpustakaan', p1: 'Konsep Web Semantik mentransformasikan katalog dari "string" teks biasa menjadi "things" (entitas berelasi global). Menggunakan model Resource Description Framework (RDF) berbasis tripel Subjek-Predikat-Objek, perpustakaan menghubungkan katalognya ke jejaring pengetahuan Wikidata dan VIAF melalui protokol kueri SPARQL.' },
    { title: 'Evolusi Kerangka Bibliografi Baru: Dari AACR2 ke RDA dan BIBFRAME', p1: 'Kaidah katalogisasi Anglo-American Cataloguing Rules (AACR2) telah berevolusi menjadi Resource Description and Access (RDA) berbasis model konseptual FRBR (Functional Requirements for Bibliographic Records: Work, Expression, Manifestation, Item). BIBFRAME diproyeksikan sebagai pengganti masa depan format MARC 21.' },
    { title: 'Audit Kualitas Metadata & Pencegahan Anomali Inkonsistensi', p1: 'Kualitas metadata diukur dari kelengkapan (completeness), akurasi (accuracy), konsistensi (consistency), dan kebaruan (timeliness). Kita merancang protokol validasi otomatis menggunakan skema Schematron dan panduan pembersihan inkonsistensi nama pengarang (author authority control).' },
    { title: 'Praktikum Penerapan Metadata Skripsi di Repositori Kampus', p1: 'Bab 2 diakhiri dengan studi kasus pembuatan rekaman metadata lengkap untuk karya tugas akhir mahasiswa program sarjana, mencakup pemetaan elemen Dublin Core ke tag XML repositori.' },
  ];

  ch2.forEach((sub, i) => {
    pages.push({
      pageNumber: 15 + i,
      chapterNumber: 2,
      chapterTitle: 'Bab 2: Standar Metadata & Pengorganisasian Informasi',
      sectionTitle: `Sub-Bab 2.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Dalam kajian "${title}", ${authorName} membuktikan bahwa keteraturan metadata menentukan efektivitas temu kembali informasi. Metadata yang buruk membuat karya ilmiah terbaik sekalipun tidak akan pernah dibaca orang karena tidak muncul dalam hasil pencarian.`,
        `Halaman ${15 + i} ini menyajikan tabel komparasi tag Dublin Core versus MARC 21, contoh rekaman XML valid, serta panduan praktis pengisian formulir input pustakawan.`,
        `Keterampilan pengorganisasian metadata ini menjadi kompetensi unggulan yang diajarkan pada praktikum manajemen informasi di Perguruan Tinggi.`,
      ],
      callout: {
        type: 'case_study',
        title: `Studi Kasus Metadata (Hal ${15 + i})`,
        content: `Penerapan Qualified Dublin Core dengan skema pengkodean terstandar meningkatkan rasio temu kembali dokumen ilmiah pada repositori kampus sebesar 68.4%.`,
      },
    });
  });

  // ==========================================
  // BAB 3: KLASIFIKASI DDC & SUBJEK (Hal 25 - 34)
  // ==========================================
  const ch3 = [
    { title: 'Prinsip Dasar Klasifikasi Desimal Dewey (Dewey Decimal Classification - DDC)', p1: 'Diciptakan oleh Melvil Dewey pada tahun 1876, sistem DDC membagi seluruh cabang ilmu pengetahuan manusia ke dalam 10 kelas utama numerik dari 000 hingga 900. Sifat desimalnya memungkinkan penambahan subjek baru secara hierarkis tanpa batas kedalaman menggunakan tanda titik desimal.' },
    { title: 'Sepuluh Kelas Utama DDC (000 - 900) & Pembagian Divisi Sekunder', p1: 'Kita mengkaji 10 kelas utama DDC: 000 Karya Umum & Komputer, 100 Filsafat & Psikologi, 200 Agama, 300 Ilmu Sosial & Hukum, 400 Bahasa, 500 Sains & Matematika, 600 Teknologi & Kedokteran, 700 Kesenian & Olahraga, 800 Kesusastraan, dan 900 Geografi & Sejarah, beserta 100 divisi turunannya.' },
    { title: 'Pemanfaatan Tabel Pembantu DDC: Tabel 1 Standar Pembagian Subdivisi', p1: 'Notasi dasar DDC diperluas dengan menambahkan notasi dari Tabel Pembantu. Tabel 1 (Standard Subdivisions) menambahkan aspek bentuk naskah: -01 Filosofi & Teori, -02 Aneka Karya, -03 Kamus & Ensiklopedia, -05 Terbitan Berkala, -07 Pengajaran & Riset, dan -09 Tinjauan Historis.' },
    { title: 'Tabel Pembantu DDC: Tabel 2 Wilayah Geografis & Periode Historis', p1: 'Tabel 2 memfasilitasi penambahan kode wilayah negara ke dalam nomor klasifikasi. Misalnya, nomor dasar 330 (Ilmu Ekonomi) dipadukan dengan -598 (Indonesia) menghasilkan nomor panggil terperinci untuk kajian ekonomi Indonesia, mempermudah lokalisasi subjek dalam katalog digital.' },
    { title: 'Konstruksi Nomor Panggil Buku (Call Number) Terpadu', p1: 'Nomor panggil lengkap pada punggung buku fisik dan kartu katalog digital terdiri dari tiga unsur utama: (1) Nomor Klasifikasi DDC; (2) Tiga huruf kapital pertama nama belakang pengarang utama; dan (3) Satu huruf kecil pertama dari judul buku (mengabaikan artikel penentu).' },
    { title: 'Tajuk Subjek Perpustakaan: LCSH & Tajuk Subjek Perpusnas RI', p1: 'Selain nomor numerik DDC, pemustaka mencari informasi menggunakan kata-kata alami. Tajuk subjek terkendali (Controlled Subject Headings) menyelaraskan sinonim bahasa: memilih satu istilah resmi preferensial dan mengarahkan istilah varian menggunakan rujukan LIHAT (USE/SEE) dan LIHAT JUGA (SEE ALSO).' },
    { title: 'Rekayasa Kosakata Terkendali: Pembangunan Tesaurus Informasi', p1: 'Tesaurus perpustakaan mendefinisikan relasi semantik antar istilah: Istilah Lebih Luas (Broader Term - BT), Istilah Lebih Sempit (Narrower Term - NT), Istilah Terkait (Related Term - RT), serta Catatan Cakupan (Scope Note - SN) untuk memperjelas konteks penggunaan istilah spesifik.' },
    { title: 'Tantangan Klasifikasi Karya Interdisipliner & Disiplin Baru (AI, Fintech)', p1: 'Munculnya cabang keilmuan hibrida seperti Financial Technology (Fintech), Bioinformatika, dan Hukum Siber menimbulkan tantangan klasifikasi. DDC Edisi ke-23 menyediakan aturan penentuan kelas dominan: mengutamakan disiplin aplikasi atau disiplin metodologi penggerak.' },
    { title: 'Faceted Classification & Pendekatan Klasifikasi Kolonis Ranganathan', p1: 'Sebagai alternatif dari pohon hierarki kaku DDC, kita mengkaji Klasifikasi Berfaset (Colon Classification karya S.R. Ranganathan) yang membedah subjek ke dalam lima faset fundamental PMEST: Personality, Matter, Energy, Space, dan Time, yang sangat relevan dengan sistem penelusuran berfaset (faceted search) e-commerce dan web modern.' },
    { title: 'Latihan Praktik Penetapan Nomor DDC untuk Koleksi Perpustakaan', p1: 'Bab 3 diakhiri dengan studi kasus penentuan nomor DDC dan tajuk subjek untuk 10 naskah akademik di bidang bisnis dan multimedia, memandu mahasiswa mempraktikkan proses klasifikasi secara presisi.' },
  ];

  ch3.forEach((sub, i) => {
    pages.push({
      pageNumber: 25 + i,
      chapterNumber: 3,
      chapterTitle: 'Bab 3: Klasifikasi Desimal Dewey (DDC) & Tajuk Subjek',
      sectionTitle: `Sub-Bab 3.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Dalam buku "${title}", ${authorName} menekankan bahwa klasifikasi bukan sekadar kegiatan administratif penempelan label stiker pada buku, melainkan pemetaan peta kognitif seluruh khazanah pemikiran manusia ke dalam struktur logis yang sistematis.`,
        `Halaman ${25 + i} ini menyajikan diagram pohon DDC, panduan sintesis nomor notasi bertingkat, dan aturan konsistensi tajuk subjek sesuai pedoman Perpustakaan Nasional Republik Indonesia.`,
        `Standar klasifikasi ini diterapkan pada seluruh koleksi e-book digital di Perguruan Tinggi guna memastikan setiap naskah berada dalam lokus klasifikasi yang tepat.`,
      ],
      callout: {
        type: 'definition',
        title: `Kaidah Klasifikasi Kunci (Hal ${25 + i})`,
        content: `Rumus Nomor Panggil: [Nomor DDC] + [3 Huruf Pengarang] + [1 Huruf Judul]. Contoh: 025.04 WAR t untuk buku Tata Kelola Perpustakaan karya Wardhani.`,
      },
    });
  });

  // ==========================================
  // BAB 4: TEMU KEMBALI & OPAC (Hal 35 - 44)
  // ==========================================
  const ch4 = [
    { title: 'Prinsip Temu Kembali Informasi (Information Retrieval - IR)', p1: 'Sistem Temu Kembali Informasi bertujuan mencocokkan kebutuhan informasi pemustaka (user query) dengan koleksi dokumen yang tersimpan dalam basis data katalog. Perbedaan mendasar IR dengan basis data relasional biasa adalah toleransi terhadap ketidakpastian semantik bahasa manusia.' },
    { title: 'Logika Pencarian Boolean: Operator AND, OR, NOT & Proximity Searches', p1: 'Boolean Retrieval Model mendasari sebagian besar mesin katalog OPAC: operator AND mempersempit hasil dengan mensyaratkan kedua kata kunci muncul, operator OR memperluas cakupan untuk sinonim kata, dan operator NOT mengecualikan kata yang tidak diinginkan. Proximity search (NEAR/ADJ) mensyaratkan kedekatan jarak fisik antar kata.' },
    { title: 'Pengukuran Efektivitas Penelusuran: Presisi (Precision) & Perolehan (Recall)', p1: 'Dua metrik utama evaluasi sistem IR adalah Presisi (proporsi dokumen terpanggil yang benar-benar relevan) dan Recall (proporsi seluruh dokumen relevan yang berhasil terpanggil). Keduanya berada dalam hubungan trade-off: upaya menaikkan recall umumnya menurunkan presisi, dan sebaliknya.' },
    { title: 'Vector Space Model (VSM) & Pembobotan Kata TF-IDF', p1: 'VSM merepresentasikan dokumen dan kueri sebagai vektor dalam ruang term multidimensi. Pembobotan TF-IDF (Term Frequency - Inverse Document Frequency) memberikan bobot tinggi pada kata yang sering muncul dalam suatu naskah namun jarang muncul dalam keseluruhan koleksi perpustakaan, mengeliminasi kata umum (stop words).' },
    { title: 'Arsitektur Online Public Access Catalog (OPAC) Generasi Modern', p1: 'Katalog Akses Terbuka Daring (OPAC) modern telah berevolusi dari antarmuka teks hitam-putih menjadi portal penelusuran berfitur lengkap: bilah pencarian tunggal ala Google, penyaringan berfaset (faceted navigation berdasarkan pengarang, tahun, dan subjek), sampul buku visual, dan pratinjau cuplikan naskah (snippets).' },
    { title: 'Pencarian Semantik & Integrasi Mesin Penelusur Elastis (Elasticsearch)', p1: 'Untuk melayani ribuan mahasiswa secara simultan dengan latensi milidetik, perpustakaan mengintegrasikan mesin penelusur terdistribusi seperti Elasticsearch atau Apache Solr yang mendukung pencarian toleran salah ketik (fuzzy matching), penyesuaian imbuhan bahasa Indonesia (stemming Nazief-Adriani), dan sinonim otomatis.' },
    { title: 'Pengalaman Pengguna (UX) Pemustaka & Aksesibilitas Disabilitas (WCAG)', p1: 'Antarmuka e-library wajib ramah bagi seluruh sivitas akademika, termasuk penyandang disabilitas netra atau motorik. Kepatuhan terhadap Web Content Accessibility Guidelines (WCAG 2.1 Level AA) mencakup navigasi papan ketik penuh, rasio kontras teks memadai, dan kompatibilitas pembaca layar (screen reader).' },
    { title: 'Pemanfaatan Data Riwayat Baca untuk Sistem Rekomendasi Kolaboratif', p1: 'Perpustakaan digital memanfaatkan algoritma Collaborative Filtering dan Content-Based Filtering untuk menyajikan rekomendasi buku terkait ("Mahasiswa yang membaca buku ini juga meminjam...") guna memperluas wawasan literasi sivitas akademika tanpa melanggar privasi pengguna.' },
    { title: 'Literasi Informasi & Kemahiran Strategi Penelusuran Mahasiswa', p1: 'Pustakawan bertugas menyelenggarakan pelatihan Information Literacy: membimbing mahasiswa memformulasikan kueri pencarian akademik tingkat lanjut, memanfaatkan database jurnal internasional yang dilanggan kampus, dan membedakan sumber kredibel dari disinformasi daring.' },
    { title: 'Masa Depan Antarmuka Penelusuran Percakapan Berbasis AI', p1: 'Bab 4 diakhiri dengan eksplorasi integrasi asisten virtual perpustakaan berbasis AI yang mampu menjawab pertanyaan kompleks mahasiswa dalam bahasa alami dan merujuk langsung ke nomor halaman e-book yang relevan.' },
  ];

  ch4.forEach((sub, i) => {
    pages.push({
      pageNumber: 35 + i,
      chapterNumber: 4,
      chapterTitle: 'Bab 4: Temu Kembali Informasi & Layanan OPAC',
      sectionTitle: `Sub-Bab 4.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Dalam pembahasan "${title}", ${authorName} menyoroti bahwa antarmuka katalog OPAC adalah wajah terdepan dari layanan perpustakaan. Kecepatan dan kemudahan sistem temu kembali informasi menentukan apakah mahasiswa akan mencintai atau meninggalkan layanan perpustakaan kampusnya.`,
        `Halaman ${35 + i} ini menyediakan formula matematis Precision-Recall, panduan konfigurasi faset pencarian, dan prinsip desain antarmuka ramah pemustaka.`,
        `Teknologi ini diadopsi secara menyeluruh dalam sistem penelusuran katalog digital Perguruan Tinggi guna memberikan pengalaman riset yang memuaskan bagi sivitas akademika.`,
      ],
      callout: {
        type: 'formula',
        title: `Metrik Evaluasi IR (Hal ${35 + i})`,
        content: `Presisi = (Dokumen Relevan Terpanggil) / (Total Dokumen Terpanggil). Recall = (Dokumen Relevan Terpanggil) / (Total Dokumen Relevan dalam Koleksi).`,
      },
    });
  });

  // ==========================================
  // BAB 5: PRESERVASI, DRM & SMART LIBRARY (Hal 45 - 50)
  // ==========================================
  const ch5 = [
    { title: 'Model Referensi Preservasi Digital OAIS (Open Archival Information System)', p1: 'Pelestarian arsip digital menghadapi ancaman keusangan format berkas (format obsolescence) dan kerusakan media penyimpanan fisik. Standar ISO 14721 OAIS mendefinisikan arsitektur arsip: Submission Information Package (SIP) saat ingest naskah, Archival Information Package (AIP) untuk penyimpanan jangka panjang, dan Dissemination Information Package (DIP) untuk akses pengguna.' },
    { title: 'Tiga Strategi Preservasi Berkas: Refreshing, Migrasi Format & Emulasi', p1: 'Untuk menjamin dokumen tetap dapat dibaca 50 tahun ke depan, pustakawan menerapkan: (1) Media Refreshing (menyalin data ke media penyimpanan baru secara berkala); (2) Format Migration (mengonversi format usang ke format standar terbuka seperti PDF/A-1a); dan (3) Emulasi Perangkat Keras (menjalankan perangkat lunak emulator untuk membaca naskah asli).' },
    { title: 'Digital Rights Management (DRM) E-Book Berkeadilan Sivitas', p1: 'Penerapan DRM bertujuan melindungi integritas hak cipta penerbit tanpa menghambat kebebasan akademik mahasiswa (fair use). Kita merancang skema DRM yang seimbang: pembatasan salin-tempel yang wajar, proteksi watermarking dinamis bertanda air NIM mahasiswa, dan sistem kedaluwarsa otomatis pinjaman digital.' },
    { title: 'Integrasi Teknologi RFID & Internet of Things (IoT) pada Perpustakaan Cerdas', p1: 'Smart Library menggabungkan ruang fisik dan digital melalui tag Radio Frequency Identification (RFID) frekuensi tinggi: gerbang deteksi keamanan otomatis, anjungan peminjaman mandiri (self-checkout kiosk), dan pemetaan lokasi buku fisik di rak secara real-time.' },
    { title: 'Peran Pustakawan Masa Depan: Kurator Pengetahuan & Mitra Peneliti (Research Partner)', p1: 'Profesi pustakawan bertransformasi dari sekadar penjaga rak buku fisik menjadi konsultan riset data, analis bibliometrik, dan pengelola etika kecerdasan buatan kampus yang mendampingi dosen dan mahasiswa dalam proses publikasi ilmiah.' },
    { title: 'Kesimpulan & Visi Kepustakawanan Indonesia Menuju Era Pengetahuan Cerdas', p1: 'Karya "${title}" ditutup dengan manifesto: perpustakaan digital adalah mercusuar kebenaran dan kesetaraan akses ilmu pengetahuan. Di tengah arus informasi yang tak terkendali, perpustakaan berdiri teguh sebagai penjaga mutu, kejujuran, dan kelestarian khazanah keilmuan bangsa.' },
  ];

  ch5.forEach((sub, i) => {
    pages.push({
      pageNumber: 45 + i,
      chapterNumber: 5,
      chapterTitle: 'Bab 5: Preservasi Digital, DRM & Smart Library Masa Depan',
      sectionTitle: `Sub-Bab 5.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Karya "${title}" oleh ${authorName} menutup pembahasannya dengan menggarisbawahi komitmen bahwa digitalisasi bukan akhir dari sejarah perpustakaan, melainkan permulaan dari era keemasan pengelolaan pengetahuan manusia.`,
        `Halaman ${45 + i} ini membekali mahasiswa dan praktisi informasi dengan wawasan visioner tentang bagaimana teknologi cerdas dapat dirangkul tanpa kehilangan esensi kemanusiaan dan etika kepustakawanan.`,
        `Perguruan Tinggi bangga menjadi pelopor dalam mengintegrasikan repositori digital cerdas, memastikan setiap sivitas akademika memiliki akses literatur terbaik tanpa batas waktu dan ruang.`,
      ],
      callout: {
        type: 'summary',
        title: `Pilar Perpustakaan Digital Kunci (Hal ${45 + i})`,
        content: `Akses Terbuka, Standar Metadata Universal, Preservasi Jangka Panjang OAIS, dan Layanan Sivitas Berkeadilan adalah empat pilar kejayaan perpustakaan modern.`,
      },
    });
  });

  // ==========================================
  // BAGIAN PENUTUP (Hal 51 - 55)
  // ==========================================
  pages.push({
    pageNumber: 51,
    chapterNumber: 6,
    chapterTitle: 'Glosarium Ilmu Perpustakaan & Informasi',
    sectionTitle: 'Kamus Istilah Kepustakawanan Baku (A - Z)',
    paragraphs: [
      `Glosarium terminologi baku yang digunakan dalam naskah "${title}":`,
      `• DDC (Dewey Decimal Classification): Sistem klasifikasi ilmu pengetahuan berbasis 10 kelas numerik desimal ciptaan Melvil Dewey.\n• Dublin Core: Skema metadata 15 elemen standar internasional (ISO 15836) untuk mendeskripsikan sumber daya digital.\n• MARC 21: Format pengkodean data bibliografis terstruktur berbasis tag tiga digit yang dapat dibaca oleh komputer.\n• OAI-PMH: Protokol pertukaran metadata antar repositori digital terbuka berbasis pertukaran dokumen XML.`,
      `• OAIS (Open Archival Information System): Model arsitektur acuan internasional untuk pelestarian informasi digital jangka panjang.\n• OPAC: Katalog perpustakaan daring yang dapat diakses secara mandiri oleh masyarakat umum dan mahasiswa.\n• Presisi (Precision): Rasio perbandingan antara dokumen relevan yang ditemukan dengan total dokumen yang ditampilkan sistem.\n• Recall: Rasio perbandingan antara dokumen relevan yang terpanggil dengan total dokumen relevan yang ada dalam seluruh koleksi.`,
    ],
    callout: {
      type: 'definition',
      title: 'Standar Istilah IFLA / ALA',
      content: `Seluruh definisi disusun berdasarkan standar International Federation of Library Associations and Institutions (IFLA).`,
    },
  });

  pages.push({
    pageNumber: 52,
    chapterNumber: 6,
    chapterTitle: 'Bibliografi & Daftar Pustaka Kepustakawanan',
    sectionTitle: 'Rujukan Literatur Ilmu Perpustakaan & Repositori Digital',
    paragraphs: [
      `Daftar literatur rujukan ilmiah yang digunakan dalam penulisan naskah "${title}":`,
      `1. Arms, W. Y. (2000). Digital Libraries. MIT Press.\n2. Chan, L. M. (2007). Cataloging and Classification: An Introduction (3rd ed.). The Scarecrow Press.\n3. Chowdhury, G. G., & Chowdhury, S. (2003). Introduction to Digital Libraries. Facet Publishing.\n4. IFLA. (2020). Guidelines for Setting Up a Digital Repository. The Hague: International Federation of Library Associations.`,
      `5. Wardhani, A. (2024). Desain Arsitektur Repositori Akademik Cerdas pada Perguruan Tinggi Indonesia. Jurnal Perpustakaan dan Informasi Ilmiah Perguruan Tinggi, 11(1), 1-22.`,
      `Seluruh literatur di atas dapat ditelaah di Ruang Khusus Ilmu Informasi Perpustakaan Akademik.`,
    ],
  });

  pages.push({
    pageNumber: 53,
    chapterNumber: 6,
    chapterTitle: 'Indeks Subjek & Kata Kunci Perpustakaan',
    sectionTitle: 'Penelusuran Lokasi Topik Kepustakawanan',
    paragraphs: [
      `Indeks subjek untuk mempermudah penelusuran naskah:`,
      `• Akses Terbuka (Open Access BOAI): Hal 6\n• Bibliografi BIBFRAME & RDA: Hal 22\n• DDC (Klasifikasi Desimal Dewey): Hal 25, 26\n• Digital Rights Management (DRM): Hal 47\n• Dublin Core (Simple & Qualified): Hal 17, 18\n• Format Preservasi PDF/A: Hal 46`,
      `• MARC 21 Tag Bibliografi: Hal 19\n• Model OAIS (Ingest & Dissemination): Hal 45\n• OAI-PMH Interoperabilitas XML: Hal 8\n• OPAC Berfaset & Elasticsearch: Hal 39, 40\n• Presisi dan Recall (IR Metrics): Hal 37\n• Tajuk Subjek Perpusnas & LCSH: Hal 30`,
    ],
  });

  pages.push({
    pageNumber: 54,
    chapterNumber: 6,
    chapterTitle: 'Bank Soal Ujian Komprehensif Kepustakawanan',
    sectionTitle: 'Uji Penguasaan Materi Tata Kelola Perpustakaan Digital',
    paragraphs: [
      `Soal evaluasi mandiri persiapan ujian sertifikasi pustakawan dan ujian akhir semester di lingkungan perguruan tinggi:`,
      `SOAL 1 (Metadata): Buatlah rekaman metadata Qualified Dublin Core dalam format XML untuk sebuah naskah tugas akhir skripsi mahasiswa, mencakup 8 elemen wajib dan kualifikator tanggal serta format!`,
      `SOAL 2 (Klasifikasi): Jelaskan cara pembentukan nomor panggil DDC lengkap untuk buku bertema "Manajemen Pemasaran Perbankan Syariah di Indonesia" dengan memanfaatkan tabel pembantu!`,
      `SOAL 3 (Temu Kembali Informasi): Sebuah kueri penelusuran menghasilkan 40 dokumen, di mana 30 di antaranya relevan. Jika total dokumen relevan dalam basis data ada 50, hitunglah nilai Precision dan Recall-nya!`,
      `SOAL 4 (Preservasi Digital): Uraikan perbedaan antara Submission Information Package (SIP), Archival Information Package (AIP), dan Dissemination Information Package (DIP) dalam model referensi OAIS!`,
    ],
    callout: {
      type: 'exercise',
      title: 'Pedoman Penilaian Ujian',
      content: `Kriteria penilaian meliputi pemahaman standar katalogisasi internasional (35%), ketepatan perhitungan metrik IR (35%), dan penguasaan preservasi arsip digital (30%).`,
    },
  });

  pages.push({
    pageNumber: 55,
    chapterNumber: 6,
    chapterTitle: 'Lembar Catatan Mahasiswa & Kolofon Akhir',
    sectionTitle: 'Verifikasi Sirkulasi Digital Perguruan Tinggi',
    paragraphs: [
      `Selamat! Anda telah menyelesaikan pembacaan seluruh 55 halaman naskah "${title}" karya ${authorName}.`,
      `Gunakan lembar catatan ini atau fitur catatan samping untuk merefleksikan standar organisasi informasi repositori pada institusi Anda.`,
      `Naskah digital resmi Repositori Perpustakaan Perguruan Tinggi. Kontak kurator layanan: layanan.pustaka@perguruan-tinggi.ac.id. Hak cipta dilindungi undang-undang.`,
    ],
    callout: {
      type: 'summary',
      title: 'Verifikasi Progres Baca',
      content: `Progres: 100% (55 dari 55 Halaman Terbaca). Catatan peminjaman dan baca terekam otomatis di sistem perpustakaan kampus.`,
    },
  });

  return pages;
}
