import { Book, BookPage } from '../../types/library';

export function getMacroeconomicsBookPages(book: Book): BookPage[] {
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
      `Klasifikasi Desimal Dewey (DDC): ${ddc} (Ekonomi Makro & Kebijakan Keuangan Negara). Nomor ISBN: ${book.isbn}. Naskah resmi Repositori Digital Perpustakaan Akademik Terakreditasi.`,
      `Buku pegangan komprehensif bagi mahasiswa sarjana dan pascasarjana fakultas ekonomi dan bisnis yang mengkaji model IS-LM-BP terbuka (Mundell-Fleming), mekanisme transmisi kebijakan moneter Bank Indonesia, ketahanan utang fiskal APBN, stabilitas nilai tukar Rupiah, dan model pertumbuhan ekonomi jangka panjang.`,
    ],
    callout: {
      type: 'summary',
      title: 'Verifikasi Kurasi Departemen Manajemen & Ekonomi Bisnis',
      content: `Disusun oleh ekonom berpengalaman, menyatukan formulasi teoretis makroekonomi klasik dengan dinamika empiris perekonomian Indonesia.`,
    },
  });

  pages.push({
    pageNumber: 2,
    chapterNumber: 0,
    chapterTitle: 'Prakata Penulis & Kurator Perpustakaan',
    sectionTitle: 'Kata Pengantar: Navigasi Kebijakan Makroekonomi di Tengah Ketidakpastian Global',
    paragraphs: [
      `Dinamika ekonomi global dalam era pasca-pandemi diwarnai oleh gejolak inflasi global, suku bunga tinggi negara maju (higher for longer), pergeseran rantai pasok dunia, dan ancaman fragmentasi geopolitik. Dalam konteks ini, pemahaman terhadap instrumen kebijakan fiskal dan moneter bukan hanya penting bagi pejabat bank sentral dan kementerian keuangan, melainkan menjadi bekal strategis bagi setiap pelaku usaha dan mahasiswa bisnis.`,
      `Buku "${title}" menyajikan sintesis analitis yang jernih: bagaimana kurva IS dan LM berinteraksi dalam perekonomian terbuka, bagaimana trilema moneter membatasi pilihan kebijakan kurs Bank Indonesia, bagaimana angka pengganda fiskal menggerakkan output nasional, hingga bagaimana inovasi mata uang digital bank sentral (CBDC) akan membentuk masa depan sistem pembayaran.`,
      `Apresiasi tulus kami sampaikan kepada Sivitas Akademika Perguruan Tinggi yang senantiasa menumbuhkan iklim intelektual kritis dalam mencetak pemimpin bisnis masa depan.`,
    ],
    callout: {
      type: 'discussion',
      title: 'Amanat Akademik Penulis',
      content: `Kebijakan makroekonomi yang tepat adalah fondasi stabilitas sosial; tanpa stabilitas harga dan ketahanan fiskal, tidak ada bisnis yang dapat tumbuh berkelanjutan.`,
    },
  });

  pages.push({
    pageNumber: 3,
    chapterNumber: 0,
    chapterTitle: 'Pedoman Pembacaan & Silabus Ekonomi Makro',
    sectionTitle: 'Panduan Telaah Teori Makroekonomi & Kebijakan Publik',
    paragraphs: [
      `Buku ini terbagi ke dalam 5 bab utama dengan total 55 halaman aktif. Setiap halaman memuat penurunan kurva grafis ekonomi, persamaan matematika aljabar keseimbangan umum, data empiris APBN dan Bank Indonesia, serta analisis studi kasus kebijakan nyata.`,
      `Capaian Pembelajaran Lulusan (CPL) meliputi: (1) Penguasaan indikator agregat makroekonomi (PDB, inflasi, pengangguran, neraca pembayaran); (2) Kemampuan menganalisis ekuilibrium simultan melalui model IS-LM dan Mundell-Fleming; (3) Kemahiran mengevaluasi bauran kebijakan (policy mix) fiskal-moneter dan solvabilitas utang negara.`,
      `Mahasiswa disarankan mempelajari grafik pergeseran kurva dan memahami elastisitas sensitivitas suku bunga pada pasar barang dan uang.`,
    ],
    callout: {
      type: 'definition',
      title: 'Prasyarat Keilmuan',
      content: `Pengantar Teori Ekonomi Mikro, Matematika Ekonomi, Teori Uang dan Perbankan, serta Statistik Ekonomi.`,
    },
  });

  pages.push({
    pageNumber: 4,
    chapterNumber: 0,
    chapterTitle: 'Daftar Isi & Sistematika Keilmuan',
    sectionTitle: 'Peta Navigasi Bab & Topik Bahasan Ekonomi Makro',
    paragraphs: [
      `Sistematika bahasan naskah "${title}":`,
      `• BAB 1: PENGUKURAN AGREGAT MAKROEKONOMI & INDIKATOR NASIONAL (Halaman 5 - 14)\n• BAB 2: KESEIMBANGAN PASAR BARANG & UANG MODEL IS-LM TERPADU (Halaman 15 - 24)\n• BAB 3: KEBIJAKAN MONETER BANK SENTRAL & PEREKONOMIAN TERBUKA (Halaman 25 - 34)\n• BAB 4: KEBIJAKAN FISKAL, DEFISIT APBN & KETAHANAN UTANG NEGARA (Halaman 35 - 44)\n• BAB 5: PERTUMBUHAN EKONOMI JANGKA PANJANG & ISU KONTEMPORER (Halaman 45 - 50)`,
      `• BAGIAN PENUTUP: Glosarium Ekonomi Makro (Hal 51), Bibliografi Literatur Ekonomi (Hal 52), Indeks Istilah Fiskal Moneter (Hal 53), Soal Ujian Komprehensif (Hal 54), Catatan & Kolofon (Hal 55).`,
    ],
  });

  // ==========================================
  // BAB 1: AGREGAT MAKRO & PDB (Hal 5 - 14)
  // ==========================================
  const ch1 = [
    { title: 'Tiga Pendekatan Perhitungan Produk Domestik Bruto (PDB / GDP)', p1: 'Produk Domestik Bruto (PDB) mengukur nilai pasar dari seluruh barang dan jasa akhir yang diproduksi di suatu negara dalam kurun waktu tertentu. Kita mengkaji tiga metode perhitungan: Pendekatan Pengeluaran Y = C + I + G + (X - M), Pendekatan Nilai Tambah Produksi (Value Added pada 17 sektor industri BPS), dan Pendekatan Pendapatan faktor produksi (Upah, Sewa, Bunga, Laba).' },
    { title: 'PDB Nominal vs PDB Riil & Perhitungan Deflator PDB', p1: 'PDB Nominal mengukur output berdasarkan harga berlaku tahun berjalan, sehingga kenaikan angkanya dapat disebabkan oleh kenaikan fisik barang atau sekadar ilusi inflasi harga. PDB Riil menghitung output menggunakan harga tahun dasar konstan. Rasio keduanya menghasilkan Deflator PDB = (PDB Nominal / PDB Riil) * 100 yang mencerminkan tingkat harga agregat.' },
    { title: 'Indeks Harga Konsumen (IHK) & Dinamika Laju Inflasi Nasional', p1: 'Inflasi adalah kenaikan harga-harga barang dan jasa secara umum dan terus menerus. Kita membedakan Indeks Harga Konsumen (IHK) berbobot Laspeyres, mengklasifikasikan jenis inflasi: Tarikan Permintaan (Demand-Pull), Dorongan Biaya (Cost-Push), dan Inflasi Impor (Imported Inflation), serta disagregasi BPS antara inflasi inti, harga bergejolak, dan harga yang diatur pemerintah.' },
    { title: 'Tingkat Pengangguran Alami & Hukum Okun (Okun\'s Law)', p1: 'Pengangguran dikelompokkan menjadi friksional (masa transisi mencari kerja), struktural (ketidaksesuaian keterampilan dengan kebutuhan pasar), dan siklikal (akibat penurunan siklus bisnis). Hukum Okun merumuskan hubungan empiris terbalik: setiap kenaikan 1% pengangguran di atas tingkat alaminya diiringi oleh penurunan sekitar 2% dari potensi output PDB riil.' },
    { title: 'Kurva Phillips Jangka Pendek vs Jangka Panjang & Ekspektasi Rasional', p1: 'A.W. Phillips menemukan hubungan trade-off antara inflasi dan pengangguran. Namun hipotesis natural rate karya Milton Friedman dan Edmund Phelps membuktikan bahwa dalam jangka panjang kurva Phillips berbentuk vertikal tegak lurus pada tingkat pengangguran alami (NAIRU), di mana stimulus moneter hanya berujung pada inflasi tanpa mengurangi pengangguran permanen.' },
    { title: 'Struktur Neraca Pembayaran Internasional (Balance of Payments - BoP)', p1: 'Neraca Pembayaran mencatat seluruh transaksi ekonomi antara penduduk suatu negara dengan warga dunia, terbagi menjadi Transaksi Berjalan (Current Account: neraca perdagangan barang, jasa, dan pendapatan primer), Transaksi Modal, dan Transaksi Finansial (aliran penanaman modal asing FDI dan investasi portofolio), dengan saldo akhir tecermin pada Cadangan Devisa.' },
    { title: 'Nilai Tukar Mata Uang: Kurs Nominal, Kurs Riil & Paritas Daya Beli (PPP)', p1: 'Kurs nominal mengukur harga relatif mata uang dua negara, sedangkan Kurs Riil epsilon = e * (P / P*) mengukur daya saing harga barang domestik relatif terhadap barang luar negeri. Teori Paritas Daya Beli (Purchasing Power Parity) menyatakan bahwa dalam jangka panjang satu unit mata uang harus memiliki daya beli yang sama di seluruh negara (Hukum Satu Harga).' },
    { title: 'Siklus Bisnis (Business Cycles): Resesi, Pemulihan, Puncak & Palung', p1: 'Perekonomian berfluktuasi di sekitar tren pertumbuhan jangka panjangnya. Kita menganalisis fase ekspansi, puncak (peak), kontraksi resesi (didefinisikan secara teknis sebagai pertumbuhan PDB negatif dua kuartal berturut-turut), palung (trough), dan peran indikator utama (leading indicators) dalam memprediksi arah siklus.' },
    { title: 'Kelemahan PDB sebagai Ukuran Kesejahteraan & Alternatif Indikator Hijau', p1: 'PDB mengabaikan distribusi ketimpangan pendapatan (Rasio Gini), kerusakan lingkungan hidup, aktivitas ekonomi informal yang tidak tercatat, dan waktu luang masyarakat. Kita menelaah alternatif indikator komprehensif: Indeks Pembangunan Manusia (IPM/HDI), PDB Hijau (Green GDP), dan Genuine Progress Indicator (GPI).' },
    { title: 'Rangkuman Bab 1: Gambaran Makroekonomi Terkini Indonesia', p1: 'Bab 1 disimpulkan dengan potret indikator makro Indonesia: PDB per kapita, sasaran target inflasi Bank Indonesia 2.5% +/- 1%, surplus neraca perdagangan komoditas, dan posisi utang luar negeri yang sehat.' },
  ];

  ch1.forEach((sub, i) => {
    pages.push({
      pageNumber: 5 + i,
      chapterNumber: 1,
      chapterTitle: 'Bab 1: Pengukuran Agregat Makroekonomi & Indikator Nasional',
      sectionTitle: `Sub-Bab 1.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Dalam naskah "${title}", ${authorName} menekankan bahwa ketelitian membaca indikator makroekonomi adalah prasyarat bagi setiap ekonom dan manajer korporasi dalam mengantisipasi gelombang fluktuasi ekonomi makro.`,
        `Halaman ${5 + i} ini menyajikan tabel kompilasi data BPS dan Bank Indonesia, rumus penurunan nilai riil dari nilai nominal, serta latihan penghitungan laju inflasi menggunakan rumus IHK tertimbang.`,
        `Kajian ini menjadi landasan materi fundamental dalam kurikulum Fakultas Ekonomi dan Bisnis di Perguruan Tinggi.`,
      ],
      callout: {
        type: i % 2 === 0 ? 'formula' : 'definition',
        title: `Persamaan Agregat Kunci (Hal ${5 + i})`,
        content: `PDB Pengeluaran: Y = C + I + G + NX, di mana konsumsi rumah tangga (C) rata-rata menyumbang lebih dari 53% dari total perekonomian Indonesia.`,
      },
    });
  });

  // ==========================================
  // BAB 2: MODEL IS-LM & PASAR (Hal 15 - 24)
  // ==========================================
  const ch2 = [
    { title: 'Pasar Barang Sektor Riil & Penurunan Kurva IS (Investment-Saving)', p1: 'Kurva IS merepresentasikan kombinasi tingkat suku bunga (r) dan output nasional (Y) di mana pasar barang berada dalam kondisi keseimbangan agregat pengeluaran terencana sama dengan output riil: Y = C(Y - T) + I(r) + G. Hubungan suku bunga dan output berlereng negatif: kenaikan suku bunga menaikkan biaya pinjaman, menekan investasi, dan menurunkan pendapatan nasional.' },
    { title: 'Fungsi Konsumsi Keynesian & Angka Pengganda Belanja (Multiplier Effect)', p1: 'John Maynard Keynes memformulasikan fungsi konsumsi C = C_0 + c*(Y - T), di mana c adalah Marginal Propensity to Consume (MPC). Melalui proses sirkulasi pendapatan berulang, kenaikan belanja otonom pemerintah delta_G menghasilkan pelipatgandaan output nasional sebesar delta_Y = delta_G * [1 / (1 - c)], membuktikan kekuatan stimulus fiskal.' },
    { title: 'Pasar Uang & Penurunan Kurva LM (Liquidity Preference - Money Supply)', p1: 'Kurva LM merepresentasikan kombinasi suku bunga dan pendapatan di mana pasar uang berada dalam keseimbangan permintaan uang riil sama dengan penawaran uang riil: M/P = L(r, Y). Kurva LM berlereng positif karena kenaikan pendapatan nasional menaikkan permintaan uang untuk motif transaksi, yang mendorong kenaikan suku bunga jika jumlah uang beredar tetap.' },
    { title: 'Teori Preferensi Likuiditas: Tiga Motif Memegang Uang Tunai', p1: 'Keynes membagi permintaan uang menjadi tiga motif: (1) Motif Transaksi untuk belanja sehari-hari proporsional terhadap Y; (2) Motif Berjaga-Jaga untuk kebutuhan darurat; dan (3) Motif Spekulasi yang berbanding terbalik terhadap suku bunga pasar r (ketika suku bunga tinggi, masyarakat lebih memilih memegang obligasi daripada uang tunai tanpa bunga).' },
    { title: 'Ekuilibrium Simultan IS-LM: Penentuan Suku Bunga & Output Nasional', p1: 'Titik perpotongan kurva IS dan kurva LM menghasilkan ekuilibrium simultan unik (r*, Y*) di mana pasar barang dan pasar keuangan mencapai keseimbangan bersama. Pergeseran kurva IS dipicu oleh kebijakan fiskal (pajak dan belanja), sedangkan pergeseran kurva LM dipicu oleh kebijakan moneter penawaran uang.' },
    { title: 'Efek Pengusiran (Crowding-Out Effect) terhadap Investasi Swasta', p1: 'Ketika pemerintah mendanai belanja dengan menerbitkan surat utang, permintaan dana di pasar keuangan meningkat dan mendorong naiknya suku bunga. Kenaikan suku bunga ini "mengusir" (crowds out) minat investasi dunia usaha swasta yang sensitif terhadap bunga, sehingga kenaikan akhir PDB menjadi lebih kecil dari angka pengganda teoritis sederhana.' },
    { title: 'Jebakan Likuiditas (Liquidity Trap) & Batas Bawah Nol (Zero Lower Bound)', p1: 'Ketika suku bunga mendekati nol persen (Zero Lower Bound), kurva LM menjadi mendatar sempurna karena masyarakat bersedia memegang uang tunai berapapun jumlahnya. Dalam situasi liquidity trap, kebijakan moneter konvensional kehilangan daya transmisinya (dorongan pelonggaran moneter seperti mendorong tali), sehingga kebijakan fiskal menjadi instrumen penyelamat mutlak.' },
    { title: 'Interaksi Kebijakan Fiskal Ekspansif vs Moneter Kontraksioner (Policy Mix)', p1: 'Pemerintah dan bank sentral kerap menerapkan kombinasi kebijakan yang berbeda. Ekspansi fiskal untuk mendongkrak pertumbuhan ekonomi yang dipadukan dengan pengetatan moneter untuk meredam inflasi akan menghasilkan suku bunga yang tinggi dan pergeseran komposisi output dari investasi swasta ke konsumsi publik.' },
    { title: 'Dari Model IS-LM ke Penurunan Kurva Permintaan Agregat (AD)', p1: 'Dengan memvariasikan tingkat harga umum P pada model IS-LM, kenaikan harga menurunkan penawaran uang riil (M/P), menggeser kurva LM ke kiri atas, menaikkan suku bunga, dan menurunkan output ekuilibrium Y. Hubungan terbalik antara tingkat harga P dan output Y ini membentuk kurva Permintaan Agregat (Aggregate Demand - AD).' },
    { title: 'Latihan Analisis Simulasi Ekuilibrium IS-LM dengan Persamaan Numerik', p1: 'Bab 2 diakhiri dengan studi kasus numerik komprehensif: menghitung persamaan IS dan LM dari data konsumsi, investasi, pajak, belanja, dan permintaan uang, mencari titik ekuilibrium, dan menghitung besaran crowding-out effect secara eksak.' },
  ];

  ch2.forEach((sub, i) => {
    pages.push({
      pageNumber: 15 + i,
      chapterNumber: 2,
      chapterTitle: 'Bab 2: Keseimbangan Pasar Barang & Uang Model IS-LM Terpadu',
      sectionTitle: `Sub-Bab 2.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Dalam pembahasan karya "${title}", ${authorName} menguraikan model IS-LM sebagai jantung analisis makroekonomi jangka pendek yang mampu menjelaskan interaksi kompleks antara kebijakan anggaran kementerian keuangan dan kebijakan moneter bank sentral.`,
        `Halaman ${15 + i} ini memuat diagram grafik kurva IS dan LM beresolusi tinggi, pembuktian matematis slope kurva, serta panduan memprediksi dampak perubahan suku bunga terhadap iklim investasi riil.`,
        `Keterampilan ini diujikan secara mendalam dalam ujian komprehensif ekonomi dan keuangan di Perguruan Tinggi.`,
      ],
      callout: {
        type: 'case_study',
        title: `Persamaan Keseimbangan (Hal ${15 + i})`,
        content: `Ekuilibrium IS-LM: Kurva IS: Y = alpha * (A - b*r); Kurva LM: r = (k/h)*Y - (1/h)*(M/P). Titik potong keduanya menentukan output dan suku bunga riil jangka pendek.`,
      },
    });
  });

  // ==========================================
  // BAB 3: MONETER & PEREKONOMIAN TERBUKA (Hal 25 - 34)
  // ==========================================
  const ch3 = [
    { title: 'Model Mundell-Fleming (IS-LM-BP) pada Perekonomian Terbuka', p1: 'Model Mundell-Fleming memperluas kerangka IS-LM dengan mengintegrasikan kurva Neraca Pembayaran (Balance of Payments - BP) dan mobilitas modal internasional. Dalam dunia di mana modal dapat berpindah lintas negara mencari imbal hasil tertinggi, selisih suku bunga domestik dan global r - r* memicu aliran modal masuk (capital inflow) atau modal keluar (capital outflow).' },
    { title: 'Trilema Kebijakan Moneter (The Impossible Trinity)', p1: 'Prinsip The Impossible Trinity membuktikan bahwa suatu negara mustahil meraih ketiga hal ini secara simultan: (1) Nilai tukar kurs tetap (Fixed Exchange Rate); (2) Mobilitas arus modal bebas (Free Capital Mobility); dan (3) Kebijakan moneter independen (Independent Monetary Policy). Negara hanya dapat memilih dua di antaranya.' },
    { title: 'Efektivitas Moneter & Fiskal di Bawah Rezim Kurs Mengambang vs Kurs Tetap', p1: 'Di bawah kurs mengambang dengan mobilitas modal bebas, kebijakan moneter menjadi sangat ampuh karena penurunan suku bunga memicu depresiasi kurs yang mendongkrak ekspor neto, sementara kebijakan fiskal menjadi tidak berdaya karena apresiasi kurs menghapus efek stimulus (crowding out melalui kurs).' },
    { title: 'Mandat Bank Indonesia: Stabilitas Nilai Rupiah & Inflasi', p1: 'Berdasarkan UU Pengembangan dan Penguatan Sektor Keuangan (UU P2SK No. 4/2023), mandat Bank Indonesia adalah mencapai dan memelihara kestabilan nilai Rupiah terhadap barang dan jasa (inflasi) serta terhadap mata uang negara lain (kurs), sekaligus mendukung stabilitas sistem keuangan dan pertumbuhan ekonomi berkelanjutan.' },
    { title: 'Instrumen Operasional Moneter: BI-Rate, GWM & Operasi Pasar Terbuka', p1: 'Bank Indonesia mengelola likuiditas perbankan melalui: (1) Suku bunga kebijakan acuan (BI-Rate / BI 7-Day Reverse Repo Rate); (2) Giro Wajib Minimum (GWM) yang wajib diparkir bank di rekening bank sentral; (3) Operasi Pasar Terbuka (penerbitan Sekuritas Rupiah Bank Indonesia - SRBI, Sekuritas Valas Bank Indonesia - SVBI); dan (4) Fasilitas Diskonto (Standing Facilities).' },
    { title: 'Mekanisme Transmisi Moneter: Enam Jalur Pengaruh ke Sektor Riil', p1: 'Perubahan BI-Rate memengaruhi inflasi dan pertumbuhan ekonomi melalui 6 jalur transmisi utama: (1) Jalur Suku Bunga (suku bunga kredit dan deposito); (2) Jalur Kredit Perbankan (kapasitas penyaluran kredit); (3) Jalur Nilai Tukar (kurs Rupiah); (4) Jalur Harga Aset (pasar saham dan properti); (5) Jalur Ekspektasi Inflasi masyarakat; dan (6) Jalur Neraca Keuangan Korporasi (balance sheet channel).' },
    { title: 'Intervensi Valas & Pengelolaan Cadangan Devisa Bank Indonesia', p1: 'Untuk meredam volatilitas berlebihan kurs Rupiah akibat sentimen global (taper tantrum atau safe haven flight to US Dollar), Bank Indonesia melakukan intervensi triple intervention: di pasar spot valas, pasar Domestic Non-Deliverable Forward (DNDF), dan pembelian Surat Berharga Negara (SBN) di pasar sekunder.' },
    { title: 'Kerangka Kebijakan Makroprudensial: Rasio LTV & Penyangga Modal Kontrasiklikal', p1: 'Krisis keuangan global 2008 membuktikan bahwa stabilitas moneter saja tidak cukup tanpa stabilitas sistem keuangan. Kebijakan makroprudensial mengawasi risiko sistemik perbankan melalui batas Loan to Value (LTV) kredit perumahan/kendaraan dan Countercyclical Capital Buffer (CCyB) untuk mencegah kredit meledak berlebihan (credit bubble).' },
    { title: 'Inisiatif Local Currency Settlement (LCS) & De-Dolarisasi Transaksi Perdagangan', p1: 'Ketergantungan berlebihan pada mata uang Dolar AS memperbesar kerentanan ekonomi nasional. Bank Indonesia memelopori kerja sama penyelesaian transaksi menggunakan mata uang lokal (LCS/LCT) bersama negara mitra dagang utama (Tiongkok, Jepang, Malaysia, Thailand, Korea Selatan) untuk diversifikasi risiko valuta.' },
    { title: 'Mata Uang Digital Bank Sentral: Proyek Garuda & Rupiah Digital (CBDC)', p1: 'Bab 3 diakhiri dengan tinjauan Proyek Garuda Bank Indonesia: arsitektur Central Bank Digital Currency (CBDC) wholesale dan ritel, implikasinya terhadap disintermediasi perbankan komersial, dan efisiensi sistem pembayaran lintas batas masa depan.' },
  ];

  ch3.forEach((sub, i) => {
    pages.push({
      pageNumber: 25 + i,
      chapterNumber: 3,
      chapterTitle: 'Bab 3: Kebijakan Moneter Bank Sentral & Perekonomian Terbuka',
      sectionTitle: `Sub-Bab 3.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Dalam karya "${title}", ${authorName} memaparkan bagaimana seni merumuskan kebijakan moneter bukan sekadar menaikkan atau menurunkan suku bunga, melainkan menjaga keseimbangan halus antara stabilitas inflasi, ketahanan kurs Rupiah, dan momentum pemulihan ekonomi nasional.`,
        `Halaman ${25 + i} ini menyajikan diagram segitiga Trilema Moneter Mundell, skema transmisi suku bunga antarbank, dan telaah empiris kebijakan bauran Bank Indonesia (Central Bank Policy Mix).`,
        `Mahasiswa Perguruan Tinggi dibekali pemahaman moneter kontemporer ini agar memiliki keunggulan kompetitif dalam karier di industri perbankan, pasar modal, dan institusi keuangan.`,
      ],
      callout: {
        type: 'case_study',
        title: `Prinsip Moneter Kunci (Hal ${25 + i})`,
        content: `Trilema Mundell: Indonesia memilih rezim kurs mengambang terkendali (managed floating) dan keterbukaan arus modal, sehingga Bank Indonesia mempertahankan independensi penentuan BI-Rate dengan jangkar ekspektasi inflasi.`,
      },
    });
  });

  // ==========================================
  // BAB 4: KEBIJAKAN FISKAL & APBN (Hal 35 - 44)
  // ==========================================
  const ch4 = [
    { title: 'Struktur Anggaran Pendapatan dan Belanja Negara (APBN) Indonesia', p1: 'APBN adalah instrumen utama kebijakan fiskal yang memuat rencana keuangan tahunan negara. Postur APBN terdiri atas tiga pilar: (1) Pendapatan Negara (Penerimaan Perpajakan, PNBP, Hibah); (2) Belanja Negara (Belanja Pemerintah Pusat menurut fungsi dan Belanja Transfer ke Daerah / TKD); serta (3) Pembiayaan Anggaran untuk menutup defisit.' },
    { title: 'Perpajakan sebagai Sumber Penerimaan & Tax Ratio Indonesia', p1: 'Pajak berfungsi sebagai sumber penerimaan anggaran (fungsi budgeter) dan alat pengatur redistribusi ekonomi (fungsi reguler). Rasio penerimaan pajak terhadap PDB (Tax Ratio) Indonesia yang berada di kisaran 10-11% menuntut reformasi perpustakaan data (Core Tax System), perluasan basis pajak digital, dan penegakan keadilan kepatuhan wajib pajak.' },
    { title: 'Fiskal Multiplier: Mengukur Daya Dongkrak Belanja Pemerintah', p1: 'Pengganda fiskal mengukur berapa besar pertambahan PDB yang dihasilkan dari setiap kenaikan satu Rupiah belanja negara. Kita membedakan belanja modal infrastruktur yang memiliki multiplier jangka panjang tinggi (> 1.2) dibanding subsidi konsumtif yang memiliki multiplier jangka pendek lebih rendah.' },
    { title: 'Manajemen Defisit Anggaran & Batas Maksimal 3% PDB (UU No. 17/2003)', p1: 'Undang-Undang Keuangan Negara Nomor 17 Tahun 2003 menetapkan batas disiplin fiskal ketat: defisit APBN tidak boleh melebihi 3% dari PDB tahunan dan total stok utang negara tidak boleh melebihi 60% dari PDB, sebuah benteng kehati-hatian (prudence) yang menyelamatkan Indonesia dari krisis fiskal selama dua dekade.' },
    { title: 'Analisis Keberlanjutan Utang (Debt Sustainability Analysis - DSA)', p1: 'Kondisi solvabilitas fiskal mensyaratkan tingkat suku bunga riil utang (r) lebih rendah daripada laju pertumbuhan ekonomi riil (g). Jika r > g, rasio utang terhadap PDB akan meledak secara eksponensial kecuali pemerintah menghasilkan surplus keseimbangan primer (Primary Balance Surplus).' },
    { title: 'Manajemen Surat Berharga Negara (SBN) & Mitigasi Risiko Refinancing', p1: 'Pemerintah mendanai defisit melalui penerbitan Surat Utang Negara (SUN) dan Surat Berharga Syariah Negara (SBSN / Sukuk Negara). Pengelolaan portofolio utang bertujuan memperpanjang rata-rata jatuh tempo (Average Time to Maturity), meningkatkan proporsi utang dalam denominasi Rupiah, dan memperbesar basis investor domestik ritel.' },
    { title: 'Kebijakan Fiskal Kontrasiklikal (Countercyclical Fiscal Policy)', p1: 'Di saat perekonomian mengalami resesi dan dunia usaha lesu, pemerintah wajib bersikap kontrasiklikal: memperbesar defisit belanja untuk menopang daya beli rakyat melalui jaring pengaman sosial. Sebaliknya, saat ekonomi mengalami kepanasan (overheating), belanja pemerintah harus dikendalikan (konsolidasi fiskal) untuk meredam inflasi.' },
    { title: 'Subsidi Energi, Kompensasi & Reformasi Bantuan Sosial Tepat Sasaran', p1: 'Dilema fiskal terbesar adalah alokasi subsidi bahan bakar minyak dan listrik yang kerap dinikmati oleh kelompok masyarakat mampu. Kita menganalisis strategi transformasi subsidi berbasis barang menjadi bantuan sosial tunai langsung bersyarat (PKH dan Bansos Sembako) yang berbasis data terpadu kesejahteraan sosial.' },
    { title: 'Dana Transfer ke Daerah (TKD) & Desentralisasi Fiskal', p1: 'UU Hubungan Keuangan antara Pemerintah Pusat dan Pemerintahan Daerah (UU HKPD No. 1/2022) menyelaraskan Dana Bagi Hasil (DBH), Dana Alokasi Umum (DAU), dan Dana Alokasi Khusus (DAK) guna mengurangi ketimpangan fiskal vertikal dan horizontal antar pulau di Indonesia.' },
    { title: 'Ruang Fiskal (Fiscal Space) Menghadapi Ancaman Guncangan Eksternal', p1: 'Bab 4 diakhiri dengan perhitungan kapasitas ruang fiskal yang tersedia setelah dikurangi belanja wajib (mandatory spending untuk pendidikan 20% dan pembayaran bunga utang), mengukur fleksibilitas APBN dalam merespons krisis geopolitik dan kenaikan harga komoditas energi dunia.' },
  ];

  ch4.forEach((sub, i) => {
    pages.push({
      pageNumber: 35 + i,
      chapterNumber: 4,
      chapterTitle: 'Bab 4: Kebijakan Fiskal, Defisit APBN & Ketahanan Utang Negara',
      sectionTitle: `Sub-Bab 4.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Dalam tinjauan "${title}", ${authorName} menegaskan bahwa kesehatan APBN adalah benteng pertahanan terakhir sebuah negara saat menghadapi krisis ekonomi global. Kebijakan fiskal yang disiplin dan kredibel memberikan rasa aman bagi investor dan menjaga stabilitas makroekonomi jangka panjang.`,
        `Halaman ${35 + i} ini menyajikan tabel evolusi postur APBN dekade terakhir, grafik rasio utang pemerintah terhadap PDB, serta metodologi evaluasi belanja kementerian yang efektif dan berorientasi hasil.`,
        `Kompetensi analisis fiskal ini menjadi materi krusial bagi mahasiswa Perguruan Tinggi dalam memahami hubungan timbal balik antara anggaran negara dan kelangsungan dunia usaha.`,
      ],
      callout: {
        type: 'formula',
        title: `Persamaan Dinamika Rasio Utang (Hal ${35 + i})`,
        content: `delta_d = (r - g) * d_t-1 - pb, di mana d adalah rasio utang terhadap PDB, r suku bunga riil, g pertumbuhan ekonomi, dan pb saldo primer. Jika r < g, rasio utang dapat menurun meski defisit anggaran tetap ada.`,
      },
    });
  });

  // ==========================================
  // BAB 5: PERTUMBUHAN & ISU MASA DEPAN (Hal 45 - 50)
  // ==========================================
  const ch5 = [
    { title: 'Teori Pertumbuhan Neoklasik Solow-Swan & Batas Akumulasi Modal', p1: 'Model Solow-Swan (1956) menjelaskan pertumbuhan ekonomi jangka panjang melalui akumulasi modal k, pertumbuhan tenaga kerja n, dan kemajuan teknologi eksogen A. Karena adanya hukum hasil tambahan yang semakin berkurang pada modal (diminishing returns to capital), perekonomian akan mencapai kondisi tunak (steady state) di mana pertumbuhan output per pekerja hanya dapat didorong oleh kemajuan teknologi.' },
    { title: 'Teori Pertumbuhan Endogen (Romer & Lucas): Inovasi & Modal Manusia', p1: 'Paul Romer dan Robert Lucas membongkar kelemahan Solow dengan memodelkan teknologi secara endogen (dihasilkan dari dalam sistem ekonomi melalui investasi riset R&D, perlindungan paten ide, dan akumulasi modal manusia terdidik). Gagasan memiliki sifat non-rivalry, memungkinkan timbulnya pengembalian skala yang meningkat (increasing returns to scale).' },
    { title: 'Total Factor Productivity (TFP) sebagai Kunci Keluar dari Middle-Income Trap', p1: 'Banyak negara berkembang terjebak dalam perangkap pendapatan menengah (Middle-Income Trap) karena kehabisan sumber tenaga kerja murah dan tidak mampu bertransisi menuju ekonomi berbasis inovasi. Peningkatan Total Factor Productivity (TFP)—yaitu efisiensi kombinasi modal dan tenaga kerja—menjadi syarat mutlak Indonesia Emas 2045.' },
    { title: 'Ekonomi Hijau, Transisi Energi & Pajak Karbon (Carbon Pricing)', p1: 'Pertumbuhan makroekonomi tidak lagi dapat mengabaikan degradasi iklim. Kita mengkaji ekonomi transisi energi terbarukan, penerapan Nilai Ekonomi Karbon (NEK), mekanisme perdagangan karbon (cap-and-trade), dan desain Pajak Karbon untuk mendorong dekarbonisasi industri tanpa mematikan daya saing manufaktur nasional.' },
    { title: 'Bonus Demografi & Produktivitas Tenaga Kerja Indonesia', p1: 'Jendela peluang bonus demografi di mana rasio ketergantungan penduduk usia non-produktif mencapai titik terendah hanya berlangsung hingga dekade 2030-an. Kita menelaah strategi penciptaan lapangan kerja formal berkualitas, peningkatan keterampilan digital tenaga kerja muda, dan pencegahan penuaan populasi dini (aging before rich).' },
    { title: 'Kesimpulan & Agenda Menuju Ketahanan Makroekonomi Indonesia', p1: 'Karya "${title}" diakhiri dengan sintesis kebijakan: menyinergikan disiplin fiskal APBN yang sehat, bauran kebijakan moneter Bank Indonesia yang lincah dan berwibawa, reformasi struktural iklim investasi, dan penguatan riset teknologi guna mewujudkan perekonomian Indonesia yang adil, mandiri, dan berdaya saing global.' },
  ];

  ch5.forEach((sub, i) => {
    pages.push({
      pageNumber: 45 + i,
      chapterNumber: 5,
      chapterTitle: 'Bab 5: Pertumbuhan Ekonomi Jangka Panjang & Isu Kontemporer',
      sectionTitle: `Sub-Bab 5.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Karya "${title}" oleh ${authorName} menutup pembahasannya dengan pesan optimisme yang terukur: masa depan ekonomi Indonesia berada di tangan generasi muda yang memiliki ketajaman analitis makroekonomi dan integritas kebangsaan yang kokoh.`,
        `Halaman ${45 + i} ini membekali mahasiswa dengan wawasan ekonomi jangka panjang yang visioner, melampaui perdebatan angka kuartalan menuju visi pembangunan berkelanjutan.`,
        `Perguruan Tinggi bangga menjadi wadah pembentukan generasi pemikir dan penggerak ekonomi yang siap menjawab tantangan masa depan bangsa.`,
      ],
      callout: {
        type: 'summary',
        title: `Prinsip Makroekonomi Kunci (Hal ${45 + i})`,
        content: `Disiplin Fiskal, Kredibilitas Moneter, Peningkatan Total Factor Productivity (TFP), dan Transisi Ekonomi Hijau adalah empat pilar kejayaan ekonomi nasional jangka panjang.`,
      },
    });
  });

  // ==========================================
  // BAGIAN PENUTUP (Hal 51 - 55)
  // ==========================================
  pages.push({
    pageNumber: 51,
    chapterNumber: 6,
    chapterTitle: 'Glosarium Makroekonomi & Keuangan Negara',
    sectionTitle: 'Kamus Istilah Ekonomi Makro Baku (A - Z)',
    paragraphs: [
      `Glosarium terminologi baku yang digunakan dalam naskah "${title}":`,
      `• BI-Rate: Suku bunga kebijakan moneter acuan yang ditetapkan secara berkala oleh Bank Indonesia.\n• Crowding-Out Effect: Penurunan investasi swasta akibat kenaikan suku bunga yang dipicu oleh ekspansi pinjaman pemerintah.\n• Deflator PDB: Indeks pengukur rasio perbandingan antara nilai PDB Nominal dengan nilai PDB Riil.\n• Giro Wajib Minimum (GWM): Persentase dana simpanan nasabah yang wajib diparkir oleh bank umum di rekening giro Bank Indonesia.`,
      `• Model Mundell-Fleming: Ekstensi model IS-LM pada perekonomian terbuka dengan mempertimbangkan mobilitas arus modal internasional.\n• PDB Riil: Nilai seluruh barang dan jasa akhir yang dinilai menggunakan harga tahun dasar konstan untuk mengeliminasi faktor inflasi.\n• The Impossible Trinity: Dalil bahwa negara tidak dapat secara simultan memiliki kurs tetap, mobilitas modal bebas, dan moneter independen.\n• Total Factor Productivity (TFP): Ukuran efisiensi pemanfaatan modal dan tenaga kerja dalam proses produksi perekonomian nasional.`,
    ],
    callout: {
      type: 'definition',
      title: 'Standar Istilah Bank Indonesia / IMF',
      content: `Definisi disusun sesuai publikasi resmi Bank Indonesia, Kementerian Keuangan RI, dan International Monetary Fund (IMF).`,
    },
  });

  pages.push({
    pageNumber: 52,
    chapterNumber: 6,
    chapterTitle: 'Bibliografi & Daftar Pustaka Makroekonomi',
    sectionTitle: 'Rujukan Literatur Ekonomi Makro Nasional & Internasional',
    paragraphs: [
      `Daftar literatur rujukan ilmiah yang digunakan dalam penulisan naskah "${title}":`,
      `1. Mankiw, N. G. (2022). Macroeconomics (11th ed.). Worth Publishers.\n2. Blanchard, O. (2021). Macroeconomics (8th ed.). Pearson Education.\n3. Boediono. (2018). Ekonomi Makro: Seri Sinopsis Pengantar Ilmu Ekonomi No. 2. Yogyakarta: BPFE.\n4. Bank Indonesia. (2024). Laporan Perekonomian Indonesia: Menjaga Stabilitas, Mendorong Pertumbuhan. Jakarta: Bank Indonesia.`,
      `5. Pratama, M. A. (2024). Bauran Kebijakan Moneter dan Ketahanan Fiskal Indonesia di Bawah Rezim Guncangan Eksternal. Jurnal Ekonomi Makro dan Kebijakan Publik Perguruan Tinggi, 14(1), 1-28.`,
      `Seluruh literatur di atas dapat dikaji melalui Ruang Referensi Ekonomi Perpustakaan Akademik.`,
    ],
  });

  pages.push({
    pageNumber: 53,
    chapterNumber: 6,
    chapterTitle: 'Indeks Subjek & Kata Kunci Ekonomi Makro',
    sectionTitle: 'Penelusuran Lokasi Topik Fiskal Moneter',
    paragraphs: [
      `Indeks subjek untuk mempercepat penelusuran topik naskah:`,
      `• Angka Pengganda Fiskal (Multiplier): Hal 16\n• BI-Rate Suku Bunga Acuan: Hal 29\n• Crowding-Out Effect: Hal 20\n• Defisit APBN Batas 3%: Hal 38\n• Giro Wajib Minimum (GWM): Hal 29\n• Kurva IS dan Kurva LM: Hal 15, 17`,
      `• Model Mundell-Fleming: Hal 25\n• PDB Riil vs Nominal: Hal 6\n• Preferensi Likuiditas Keynes: Hal 18\n• The Impossible Trinity (Trilema): Hal 26\n• Total Factor Productivity (TFP): Hal 47\n• Utang Negara (DSA Solvabilitas): Hal 39`,
    ],
  });

  pages.push({
    pageNumber: 54,
    chapterNumber: 6,
    chapterTitle: 'Bank Soal Ujian Komprehensif Ekonomi Makro',
    sectionTitle: 'Uji Penguasaan Materi Makroekonomi Mahasiswa',
    paragraphs: [
      `Soal evaluasi mandiri persiapan ujian komprehensif ekonomi dan bisnis di lingkungan perguruan tinggi:`,
      `SOAL 1 (Model IS-LM): Menggunakan grafik IS-LM, jelaskan dampak kebijakan pemotongan pajak yang dibarengi dengan pelonggaran penawaran uang oleh bank sentral terhadap tingkat bunga dan output nasional!`,
      `SOAL 2 (Perekonomian Terbuka): Berdasarkan Teorema Trilema Moneter Mundell, mengapa bank sentral di negara dengan mobilitas modal bebas kehilangan kendali suku bunga independennya jika memaksakan rezim kurs tetap?`,
      `SOAL 3 (Transmisi Moneter): Jelaskan bagaimana kenaikan suku bunga BI-Rate ditransmisikan melalui jalur nilai tukar (exchange rate channel) untuk menurunkan laju inflasi impor (imported inflation)!`,
      `SOAL 4 (Ketahanan Fiskal): Mengapa kondisi pertumbuhan ekonomi riil (g) yang lebih tinggi dibanding suku bunga riil surat utang (r) memungkinkan pemerintah mempertahankan rasio utang yang aman meski mengalami defisit anggaran?`,
    ],
    callout: {
      type: 'exercise',
      title: 'Pedoman Penilaian Soal',
      content: `Kriteria penilaian meliputi ketepatan penurunan model aljabar grafik (35%), kejelasan analisis transmisi kebijakan (35%), dan penalaran kontekstual kondisi riil ekonomi Indonesia (30%).`,
    },
  });

  pages.push({
    pageNumber: 55,
    chapterNumber: 6,
    chapterTitle: 'Lembar Catatan Mahasiswa & Kolofon Akhir',
    sectionTitle: 'Verifikasi Sirkulasi Digital Perguruan Tinggi',
    paragraphs: [
      `Selamat! Anda telah menyelesaikan pembacaan seluruh 55 halaman naskah "${title}" karya ${authorName}.`,
      `Gunakan lembar akhir ini atau fitur catatan digital reader untuk mencatat analisis kebijakan makroekonomi terkini bagi proyek perkuliahan Anda.`,
      `Koleksi resmi Repositori Perpustakaan Perguruan Tinggi. Narahubung layanan e-book akademik: layanan.pustaka@perguruan-tinggi.ac.id. Hak cipta dilindungi undang-undang.`,
    ],
    callout: {
      type: 'summary',
      title: 'Verifikasi Progres Baca',
      content: `Progres: 100% (55 dari 55 Halaman Terbaca). Catatan pembacaan terintegrasi dengan riwayat sirkulasi perpustakaan mahasiswa.`,
    },
  });

  return pages;
}
