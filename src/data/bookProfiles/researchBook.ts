import { Book, BookPage } from '../../types/library';

export function getResearchBookPages(book: Book): BookPage[] {
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
      `Klasifikasi Desimal Dewey (DDC): ${ddc} (Metodologi Penelitian & Sains Data). Nomor ISBN: ${book.isbn}. Koleksi resmi Repositori Digital Perpustakaan Akademik Terakreditasi.`,
      `Buku panduan metodologi komprehensif untuk mahasiswa sarjana dan magister dalam menyusun tugas akhir, skripsi, tesis, dan publikasi jurnal ilmiah terakreditasi nasional maupun internasional.`,
    ],
    callout: {
      type: 'summary',
      title: 'Verifikasi Kurasi Metodologi Riset',
      content: `Karya otoritatif yang menggabungkan kaidah riset kuantitatif klasik dengan teknik pemodelan sains data modern.`,
    },
  });

  pages.push({
    pageNumber: 2,
    chapterNumber: 0,
    chapterTitle: 'Prakata Penulis & Kurator Perpustakaan',
    sectionTitle: 'Kata Pengantar: Integritas Ilmiah & Keandalan Empiris',
    paragraphs: [
      `Banyak mahasiswa menghadapi kecemasan ketika menyusun metodologi penelitian: dari kesulitan menemukan celah riset (research gap), keraguan memilih teknik sampling, hingga kebingungan menginterpretasikan output analisis statistik perangkat lunak seperti SPSS, SmartPLS, R, atau Python.`,
      `Buku "${title}" dirancang untuk menjawab kegelisahan tersebut secara runtut dan sistematis. Kami membongkar setiap tahapan penelitian secara transparan: bagaimana merumuskan hipotesis yang dapat diuji, menguji validitas konstruk dan reliabilitas instrumen, memverifikasi asumsi klasik regresi, hingga menyajikan data dengan kejujuran akademis yang tak terbantahkan.`,
      `Semoga karya ini menjadi kompas terpercaya bagi sivitas akademika Perguruan Tinggi dalam melahirkan karya-karya ilmiah yang bereputasi tinggi.`,
    ],
    callout: {
      type: 'discussion',
      title: 'Pesan Akademik Penulis',
      content: `Statistik bukan sekadar seni mengolah angka, melainkan sarana membuktikan kebenaran ilmiah dengan bukti empiris yang dapat dipertanggungjawabkan.`,
    },
  });

  pages.push({
    pageNumber: 3,
    chapterNumber: 0,
    chapterTitle: 'Pedoman Pembacaan & Silabus Mata Kuliah Riset',
    sectionTitle: 'Panduan Telaah Metodologi Penelitian Kuantitatif',
    paragraphs: [
      `Buku ini terbagi ke dalam 5 bab utama dengan total 55 halaman aktif. Setiap halaman memuat konsep metodologis, rumus statistik inferensial, diagram alur uji hipotesis, dan interpretasi tabel output empiris.`,
      `Capaian Pembelajaran Lulusan (CPL) meliputi: (1) Kemampuan mengidentifikasi fenomena empiris dan merumuskan hipotesis ilmiah; (2) Keterampilan merancang instrumen kuesioner dan teknik sampling representatif; (3) Kemahiran melakukan uji asumsi klasik, regresi berganda, mediasi/moderasi, dan penulisan laporan skripsi berstandar jurnal internasional.`,
      `Mahasiswa disarankan membaca bab secara berurutan dan mengerjakan latihan telaah kasus yang disediakan di setiap akhir bab.`,
    ],
    callout: {
      type: 'definition',
      title: 'Prasyarat Keilmuan',
      content: `Disarankan telah menempuh mata kuliah Pengantar Statistika Deskriptif dan Dasar-Dasar Logika Ilmiah.`,
    },
  });

  pages.push({
    pageNumber: 4,
    chapterNumber: 0,
    chapterTitle: 'Daftar Isi & Sistematika Keilmuan',
    sectionTitle: 'Peta Navigasi Bab & Topik Bahasan Riset',
    paragraphs: [
      `Sistematika bahasan naskah "${title}":`,
      `• BAB 1: PARADIGMA RISET & PERUMUSAN MASALAH ILMIAH (Halaman 5 - 14)\n• BAB 2: POPULASI, TEKNIK SAMPLING & UKURAN SAMPEL (Halaman 15 - 24)\n• BAB 3: KONSTRUKSI INSTRUMEN & PENGUJIAN KUALITAS DATA (Halaman 25 - 34)\n• BAB 4: UJI ASUMSI KLASIK & MODEL REGRESI MULTIVARIAT (Halaman 35 - 44)\n• BAB 5: INTERPRETASI STATISTIK & PUBLIKASI NASKAH ILMIAH (Halaman 45 - 50)`,
      `• BAGIAN PENUTUP: Glosarium Metodologi Riset (Hal 51), Bibliografi Metodologi (Hal 52), Indeks Istilah Statistik (Hal 53), Soal Ujian Komprehensif Riset (Hal 54), Catatan & Kolofon (Hal 55).`,
    ],
  });

  // ==========================================
  // BAB 1: PARADIGMA RISET & HIPOTESIS (Hal 5 - 14)
  // ==========================================
  const ch1 = [
    { title: 'Epistemologi Positivisme & Pendekatan Deduktif Kuantitatif', p1: 'Penelitian kuantitatif bertumpu pada paradigma positivisme yang memandang realitas sosial sebagai sesuatu yang objektif, terukur, dan bebas dari keberpihakan subjektif peneliti. Pendekatan deduktif menuntut penurunan hipotesis secara logis dari teori umum yang mapan untuk kemudian diuji kebenarannya di lapangan melalui pengumpulan data empiris.' },
    { title: 'Menemukan Research Gap & Menyusun State of the Art', p1: 'Titik tolak penelitian berkualitas adalah adanya kesenjangan penelitian (research gap). Kita membedakan empat jenis gap: fenomena gap (ketidaksesuaian teori dengan fakta lapangan), teoritis gap (kontradiksi hasil antar penelitian terdahulu), metodologis gap (kelemahan instrumen riset sebelumnya), dan kontekstual gap (perbedaan objek atau kurun waktu).' },
    { title: 'Perumusan Masalah Penelitian & Research Questions yang Tajam', p1: 'Rumusan masalah harus dinyatakan dalam kalimat tanya yang eksplisit, terukur, dan tidak ambigu. Rumusan masalah yang baik secara jelas mengindikasikan hubungan antar variabel yang akan diuji (asosiatif, komparatif, atau kausal).' },
    { title: 'Identifikasi Variabel: Bebas, Terikat, Moderasi & Mediasi', p1: 'Variabel adalah atribut yang memiliki variasi nilai. Kita membedakan Variabel Independen (X/Bebas) sebagai penyebab, Variabel Dependen (Y/Terikat) sebagai akibat, Variabel Moderasi (Z) yang memperkuat atau memperlemah hubungan X dan Y, serta Variabel Mediasi (M) yang menjadi perantara mekanisme kausal.' },
    { title: 'Operasionalisasi Variabel & Matriks Indikator Terukur', p1: 'Konsep abstrak seperti "Kepuasan Pelanggan" atau "Motivasi Kerja" harus ditransformasikan menjadi indikator yang dapat diukur secara empiris. Matriks operasionalisasi variabel memuat dimensi konseptual, indikator terukur, skala pengukuran, dan nomor butir kuesioner.' },
    { title: 'Empat Skala Pengukuran Data: Nominal, Ordinal, Interval & Rasio', p1: 'Ketepatan memilih alat uji statistik ditentukan oleh skala pengukuran data: Skala Nominal (kategori tanpa tingkatan), Skala Ordinal (kategori berperingkat seperti skala Likert), Skala Interval (jarak antar nilai sama namun tanpa nol mutlak seperti suhu Celsius), dan Skala Rasio (memiliki nilai nol mutlak seperti pendapatan dan berat).' },
    { title: 'Perumusan Hipotesis Ilmiah: Hipotesis Nol (H0) vs Hipotesis Kerja (H1)', p1: 'Hipotesis adalah jawaban sementara yang diturunkan dari kerangka berpikir teoritis. Uji statistik secara formal menguji Hipotesis Nol (H0: tidak ada pengaruh/perbedaan) untuk kemudian ditolak demi menerima Hipotesis Alternatif (H1). Kita mengkaji hipotesis satu arah (direksional) dan hipotesis dua arah (non-direksional).' },
    { title: 'Penyusunan Kerangka Konseptual & Model Jalur Penelitian', p1: 'Kerangka konseptual menggambarkan sintesis logika keterkaitan antar variabel dalam bentuk diagram jalur (path diagram). Diagram ini memperjelas arah panah hubungan langsung (direct effect) dan hubungan tidak langsung (indirect effect) yang akan diuji secara empiris.' },
    { title: 'Kajian Pustaka Sistematis (Systematic Literature Review) & PRISMA', p1: 'Membangun landasan teori yang kokoh memerlukan penelusuran literatur sistematis menggunakan protokol PRISMA (Preferred Reporting Items for Systematic Reviews and Meta-Analyses), memfilter ratusan artikel jurnal terindeks Scopus dan SINTA berdasarkan kriteria inklusi dan eksklusi yang transparan.' },
    { title: 'Rangkuman & Pedoman Penyusunan Proposal Bab 1 Skripsi', p1: 'Bab 1 disimpulkan dengan daftar periksa (checklist) penulisan naskah: memastikan keselarasan antara latar belakang, rumusan masalah, tujuan penelitian, manfaat praktis, dan kejelasan kontribusi kebaruan (novelty) riset.' },
  ];

  ch1.forEach((sub, i) => {
    pages.push({
      pageNumber: 5 + i,
      chapterNumber: 1,
      chapterTitle: 'Bab 1: Paradigma Riset & Perumusan Masalah Ilmiah',
      sectionTitle: `Sub-Bab 1.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Dalam naskah "${title}", ${authorName} mengingatkan bahwa kelemahan mendasar skripsi mahasiswa sering kali bukan terletak pada ketidakmampuan menjalankan software statistik, melainkan pada kerapuhan perumusan masalah dan kerangka teoritis sejak awal.`,
        `Halaman ${5 + i} ini menyajikan panduan terstruktur disertai contoh-contoh konkret judul penelitian dan operasionalisasi variabel yang relevan dengan bidang bisnis, manajemen, multimedia, dan sistem informasi.`,
        `Pedoman ini merupakan standar acuan penulisan tugas akhir di Perguruan Tinggi guna menjamin orisinalitas dan kualitas metodologis naskah mahasiswa.`,
      ],
      callout: {
        type: i % 2 === 0 ? 'definition' : 'case_study',
        title: `Prinsip Riset Kunci (Hal ${5 + i})`,
        content: `Kriteria FINER untuk perumusan masalah: Feasible (dapat dilaksanakan), Interesting (menarik), Novel (memiliki kebaruan), Ethical (etis), dan Relevant (relevan bagi ilmu pengetahuan).`,
      },
    });
  });

  // ==========================================
  // BAB 2: POPULASI & TEKNIK SAMPLING (Hal 15 - 24)
  // ==========================================
  const ch2 = [
    { title: 'Definisi Populasi Target, Populasi Terjangkau & Unit Analisis', p1: 'Populasi adalah wilayah generalisasi yang terdiri atas objek/subjek yang mempunyai kuantitas dan karakteristik tertentu yang ditetapkan oleh peneliti. Kita membedakan populasi sasaran (target population) yang ideal dengan populasi terjangkau (accessible population) yang dapat diakses dalam rentang waktu penelitian.' },
    { title: 'Prinsip Penarikan Sampel & Generalisasi Statistik', p1: 'Sampel adalah bagian dari jumlah dan karakteristik yang dimiliki oleh populasi. Penarikan sampel dilakukan karena keterbatasan waktu, dana, dan tenaga peneliti. Sampel yang ideal harus bersifat representatif (mewakili seluruh karakteristik populasi) agar hasil temuan dapat digeneralisasikan secara valid.' },
    { title: 'Probability Sampling: Simple Random & Systematic Sampling', p1: 'Probability sampling memberikan peluang yang sama bagi setiap anggota populasi untuk terpilih menjadi sampel. Simple Random Sampling menggunakan tabel angka acak atau generator undian digital, sedangkan Systematic Sampling memilih responden berdasarkan interval k = N/n setelah titik awal dipilih secara acak.' },
    { title: 'Probability Sampling: Stratified & Cluster Sampling Lanjutan', p1: 'Ketika populasi memiliki sub-kelompok yang heterogen (misalnya mahasiswa berdasarkan jenjang semester atau fakultas), Stratified Random Sampling menjamin setiap strata terwakili secara proporsional. Sebaliknya, Cluster Sampling digunakan ketika populasi tersebar dalam kelompok geografis yang luas.' },
    { title: 'Non-Probability Sampling: Purposive, Snowball & Quota Sampling', p1: 'Jika kerangka sampel (sampling frame) lengkap tidak tersedia atau penelitian mensyaratkan kriteria keahlian tertentu, Non-Probability Sampling menjadi pilihan. Purposive Sampling menetapkan kriteria inklusi spesifik (misalnya manajer dengan pengalaman minimal 5 tahun), sedangkan Snowball Sampling merantai rujukan responden.' },
    { title: 'Penentuan Jumlah Sampel: Rumus Slovin & Batasan Asumsinya', p1: 'Rumus Slovin n = N / (1 + N * e^2) sangat populer di kalangan mahasiswa untuk menentukan ukuran sampel minimum berdasarkan batas toleransi kesalahan e (misalnya 5% atau 10%). Kita mengkaji asumsi dasar Slovin dan kapan rumus ini tepat digunakan.' },
    { title: 'Tabel Krejcie & Morgan, Rumus Yamane, dan Formula Lemeshow', p1: 'Untuk populasi yang diketahui pasti jumlahnya, Tabel Krejcie-Morgan (1970) menyediakan ukuran sampel berbasis distribusi Chi-Kuadrat. Untuk populasi yang tidak diketahui jumlahnya (populasi tak hingga seperti konsumen umum di media sosial), formula Lemeshow menjadi standar rujukan utama.' },
    { title: 'Analisis Kekuatan Statistik (Statistical Power Analysis) & G*Power', p1: 'Pendekatan modern dalam sains data menentukan ukuran sampel bukan hanya dari ukuran populasi, melainkan dari ukuran efek yang diharapkan (effect size), tingkat signifikansi alpha, dan kekuatan uji (power 1 - beta >= 0.80) menggunakan aplikasi G*Power.' },
    { title: 'Kaidah Ukuran Sampel dalam Pemodelan SEM (Rule of Thumb Hair)', p1: 'Untuk penelitian yang menggunakan Structural Equation Modeling (SEM-PLS atau CB-SEM), Joseph F. Hair merekomendasikan rasio minimal 5 hingga 10 responden per butir indikator kuesioner, atau minimal 100-200 responden untuk menjamin kestabilan estimasi algoritma matriks kovarians.' },
    { title: 'Mengendalikan Sampling Bias & Prosedur Response Rate', p1: 'Bab 2 diakhiri dengan strategi penanganan non-response bias: bagaimana memantau tingkat pengembalian kuesioner, melakukan uji beda antara responden awal vs responden akhir (wave analysis), dan memastikan representativitas data sebelum diolah.' },
  ];

  ch2.forEach((sub, i) => {
    pages.push({
      pageNumber: 15 + i,
      chapterNumber: 2,
      chapterTitle: 'Bab 2: Populasi, Teknik Sampling & Ukuran Sampel',
      sectionTitle: `Sub-Bab 2.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Dalam pembahasan naskah "${title}", ${authorName} menegaskan bahwa secanggih apapun teknik komputasi statistik yang digunakan, jika sampel yang diambil bias atau tidak representatif, kesimpulan yang ditarik akan cacat secara fatal (garbage in, garbage out).`,
        `Halaman ${15 + i} ini menyajikan langkah-langkah praktis penarikan sampel, tabel panduan ukuran sampel siap pakai, dan protokol dokumentasi data lapangan untuk lampiran skripsi.`,
        `Mahasiswa program sarjana dilatih mempraktikkan audit keterwakilan responden secara ketat demi menjamin akurasi riset yang dapat dipertanggungjawabkan di hadapan dewan penguji.`,
      ],
      callout: {
        type: 'formula',
        title: `Rumus Slovin (Hal ${15 + i})`,
        content: `Ukuran Sampel Minimum: n = N / (1 + N * e^2), di mana N adalah ukuran populasi dan e adalah batas margin kesalahan (margin of error).`,
      },
    });
  });

  // ==========================================
  // BAB 3: KUALITAS INSTRUMEN & VALIDITAS (Hal 25 - 34)
  // ==========================================
  const ch3 = [
    { title: 'Konstruksi Kuesioner: Prinsip Skala Likert & Skala Diferensial Semantik', p1: 'Kuesioner adalah instrumen pengumpul data paling lazim dalam riset kuantitatif ilmu sosial dan bisnis. Skala Likert 5 poin (Sangat Tidak Setuju hingga Sangat Setuju) dirancang dengan kalimat pernyataan yang jelas, menghindari pertanyaan ganda (double-barreled questions), dan menyeimbangkan pernyataan positif serta negatif.' },
    { title: 'Uji Validitas Isi (Content Validity) & Penilaian Pakar (Expert Judgement)', p1: 'Validitas menunjukkan derajat ketepatan antara data yang sesungguhnya terjadi pada objek dengan data yang dapat dikumpulkan oleh peneliti. Validitas isi dinilai secara kualitatif oleh para ahli materi (expert judgement) dan dikuantifikasi menggunakan Content Validity Ratio (CVR) karya Lawshe.' },
    { title: 'Uji Validitas Konstruk: Korelasi Pearson Product Moment', p1: 'Validitas konstruk menguji apakah butir-butir pertanyaan benar-benar mengukur dimensi konsep yang dimaksud. Pada pendekatan korelasi Pearson, suatu butir dinyatakan valid jika nilai r-hitung > r-tabel pada taraf signifikansi alpha = 0.05, atau nilai signifikansi p < 0.05.' },
    { title: 'Exploratory Factor Analysis (EFA) & Nilai KMO MSA', p1: 'EFA mengelompokkan butir pertanyaan ke dalam faktor-faktor laten berdasarkan kovarians bersama. Kelayakan analisis faktor diuji melalui Kaiser-Meyer-Olkin Measure of Sampling Adequacy (KMO MSA > 0.50) dan Bartlett\'s Test of Sphericity (p < 0.001), dengan rotasi faktor Varimax.' },
    { title: 'Uji Reliabilitas: Konsistensi Internal Cronbach\'s Alpha', p1: 'Reliabilitas mengukur keandalan atau konsistensi instrumen saat digunakan secara berulang. Koefisien Cronbach\'s Alpha mengukur konsistensi internal seluruh butir dalam satu variabel. Nilai alpha >= 0.70 umumnya disepakati sebagai standar instrumen yang andal dalam literatur akademik.' },
    { title: 'Reliabilitas Komposit (Composite Reliability) & Nilai AVE pada PLS', p1: 'Dalam pemodelan Partial Least Squares (PLS-SEM), reliabilitas komposit (rho_c > 0.70) dianggap lebih akurat dibanding Cronbach\'s Alpha karena tidak mengasumsikan seluruh butir memiliki bobot yang sama. Convergent validity dipenuhi jika Average Variance Extracted (AVE) > 0.50.' },
    { title: 'Uji Diskriminan Validitas: Kriteria Fornell-Larcker & Rasio HTMT', p1: 'Discriminant validity memastikan bahwa konstruk variabel yang diteliti benar-benar berbeda dari konstruk lainnya. Kriteria Fornell-Larcker menuntut akar kuadrat AVE suatu konstruk lebih tinggi daripada korelasi dengan konstruk lain. Rasio Heterotrait-Monotrait (HTMT < 0.85/0.90) adalah standar emas mutakhir.' },
    { title: 'Prosedur Uji Coba Kuesioner (Pilot Testing) 30 Responden', p1: 'Sebelum kuesioner disebarkan kepada seluruh sampel penelitian, uji coba instrumen (pilot test) wajib dilakukan kepada minimal 30 responden yang memiliki karakteristik serupa dengan populasi target. Butir yang tidak valid digugurkan atau direvisi naskahnya.' },
    { title: 'Mengatasi Common Method Bias (CMB) & Uji Harman Single Factor', p1: 'Ketika data variabel independen dan dependen dikumpulkan dari sumber responden yang sama menggunakan kuesioner mandiri, risiko Common Method Bias muncul. Peneliti menguji keberadaan bias ini melalui Harman\'s Single Factor Test, memastikan tidak ada satu faktor tunggal yang menjelaskan > 50% varians total.' },
    { title: 'Panduan Praktis Olah Data Kualitas Instrumen dengan SPSS dan R', p1: 'Bab 3 diakhiri dengan panduan teknis langkah-demi-langkah: input data kode numerik, penanganan data hilang (missing data imputation), pembersihan data anomali (outliers), dan eksekusi menu reliability analysis.' },
  ];

  ch3.forEach((sub, i) => {
    pages.push({
      pageNumber: 25 + i,
      chapterNumber: 3,
      chapterTitle: 'Bab 3: Konstruksi Instrumen & Pengujian Kualitas Data',
      sectionTitle: `Sub-Bab 3.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Karya "${title}" oleh ${authorName} memberikan perhatian mendalam pada kualitas instrumen pengukur, karena kesimpulan yang ditarik dari instrumen yang tidak valid tidak memiliki nilai kebenaran dalam sains.`,
        `Halaman ${25 + i} ini menyajikan tangkapan layar output statistik, tabel kriteria pembanding, dan petunjuk penulisan tabel validitas-reliabilitas sesuai format standar Skripsi Perguruan Tinggi.`,
        `Mahasiswa dibimbing untuk tidak sekadar menyalin output software, melainkan mampu menguraikan makna teoritis dari nilai r-hitung dan Cronbach's Alpha yang diperoleh.`,
      ],
      callout: {
        type: 'case_study',
        title: `Kriteria Evaluasi Kunci (Hal ${25 + i})`,
        content: `Suatu butir kuesioner dinyatakan valid jika nilai r-hitung (corrected item-total correlation) melebihi nilai kritis r-tabel, dan konstruk dinyatakan andal jika Cronbach's Alpha > 0.70.`,
      },
    });
  });

  // ==========================================
  // BAB 4: ASUMSI KLASIK & REGRESI (Hal 35 - 44)
  // ==========================================
  const ch4 = [
    { title: 'Fondasi Model Regresi Linier Berganda (Ordinary Least Squares - OLS)', p1: 'Regresi linier berganda memodelkan hubungan kausal antara satu variabel dependen Y dengan k variabel independen: Y = beta_0 + beta_1*X_1 + beta_2*X_2 + ... + beta_k*X_k + epsilon. Metode OLS meminimalkan kuadrat kesalahan residual untuk menghasilkan penduga terbaik (Best Linear Unbiased Estimator - BLUE).' },
    { title: 'Uji Asumsi Klasik 1: Normalitas Residual (Kolmogorov-Smirnov & P-P Plot)', p1: 'Uji normalitas bertujuan menguji apakah dalam model regresi, nilai residual (bukan variabel mentah) berdistribusi normal. Uji One-Sample Kolmogorov-Smirnov mensyaratkan nilai Asymp. Sig. (2-tailed) > 0.05, diperkuat dengan grafik Normal P-P Plot di mana titik-titik menyebar mendekati garis diagonal.' },
    { title: 'Uji Asumsi Klasik 2: Multikolinearitas (Nilai VIF & Tolerance)', p1: 'Multikolinearitas terjadi jika terdapat korelasi linier yang kuat antar sesama variabel independen, yang mengakibatkan standar error penduga membengkak. Model regresi bebas dari multikolinearitas jika nilai Variance Inflation Factor (VIF) < 10 dan nilai Tolerance > 0.10.' },
    { title: 'Uji Asumsi Klasik 3: Heteroskedastisitas (Uji Glejser & Scatterplot)', p1: 'Heteroskedastisitas adalah ketidaksamaan varians residual dari satu pengamatan ke pengamatan lain. Hal ini diuji melalui grafik Scatterplot (memastikan titik menyebar acak tanpa pola tertentu) atau Uji Glejser (meregresikan nilai residual absolut terhadap variabel independen dengan syarat sig > 0.05).' },
    { title: 'Uji Asumsi Klasik 4: Autokorelasi (Durbin-Watson & Runs Test)', p1: 'Autokorelasi terjadi bila terdapat korelasi antara kesalahan pengganggu pada periode t dengan periode t-1, lazim terjadi pada data runtun waktu (time series). Bebas autokorelasi dideteksi melalui nilai statistik Durbin-Watson berada di antara rentang dU dan (4 - dU) atau menggunakan Runs Test.' },
    { title: 'Uji Asumsi Klasik 5: Linearitas Hubungan (Test for Linearity)', p1: 'Uji linearitas mengonfirmasi apakah spesifikasi hubungan antara variabel independen dan dependen bersifat linier. Uji ANOVA Deviation from Linearity mensyaratkan nilai signifikansi > 0.05 untuk membuktikan hubungan linier yang signifikan.' },
    { title: 'Analisis Jalur (Path Analysis) & Pemodelan Variabel Mediasi', p1: 'Analisis jalur menguji efek mediasi di mana variabel perantara M memediasi hubungan antara X dan Y. Kita mengkaji metode kausal bertahap Baron & Kenny (1986) dan Uji Sobel untuk menghitung signifikansi z-statistic pengaruh tidak langsung (indirect effect).' },
    { title: 'Pendekatan Modern Mediasi: Bootstrapping pada SmartPLS & Hayes PROCESS', p1: 'Kelemahan Uji Sobel yang mengasumsikan distribusi normal indirect effect diatasi oleh teknik non-parametrik Bootstrapping (5.000 subsampel). Mediasi dinyatakan signifikan secara statistik jika rentang Confidence Interval (CI 95%) tidak melewati nilai nol (0).' },
    { title: 'Analisis Moderasi: Moderated Regression Analysis (MRA)', p1: 'Variabel moderasi berinteraksi dengan variabel bebas untuk mengubah arah atau kekuatan hubungan terhadap variabel terikat. MRA memodelkan interaksi melalui perkalian variabel X*Z (interaction term) setelah dilakukan mean-centering untuk mencegah multikolinearitas artifisial.' },
    { title: 'Structural Equation Modeling (SEM-PLS): Evaluasi Inner & Outer Model', p1: 'SEM-PLS menggabungkan analisis faktor dan regresi simultan. Evaluasi dibagi menjadi Outer Model (Measurement Model: validitas konvergen, diskriminan, reliabilitas) dan Inner Model (Structural Model: R^2, Q^2 Stone-Geisser, f^2 effect size, dan path coefficients beta).' },
  ];

  ch4.forEach((sub, i) => {
    pages.push({
      pageNumber: 35 + i,
      chapterNumber: 4,
      chapterTitle: 'Bab 4: Uji Asumsi Klasik & Model Regresi Multivariat',
      sectionTitle: `Sub-Bab 4.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Dalam naskah "${title}", ${authorName} menegaskan bahwa uji asumsi klasik bukan sekadar formalitas pelengkap skripsi, melainkan prasyarat matematis mutlak agar hasil uji hipotesis t dan F memiliki interpretasi yang valid dan tidak bias.`,
        `Halaman ${35 + i} ini menyajikan panduan diagnosis penyimpangan asumsi klasik beserta resep solusinya: transformasi logaritma natural (Ln), eliminasi data outlier, atau beralih ke analisis regresi robust.`,
        `Mahasiswa program sarjana dilatih membaca tabel hasil analisis regresi secara komprehensif, mengaitkan nilai koefisien beta dengan implikasi kebijakan nyata di dunia bisnis.`,
      ],
      callout: {
        type: 'formula',
        title: `Persamaan Regresi OLS (Hal ${35 + i})`,
        content: `Model Regresi: Y = beta_0 + beta_1*X_1 + beta_2*X_2 + ... + beta_k*X_k + e, dengan syarat e ~ N(0, sigma^2) homoskedastis dan independen.`,
      },
    });
  });

  // ==========================================
  // BAB 5: INTERPRETASI & PUBLIKASI (Hal 45 - 50)
  // ==========================================
  const ch5 = [
    { title: 'Pengujian Hipotesis Simultan (Uji F) & Parsial (Uji t)', p1: 'Uji F menguji apakah seluruh variabel independen secara bersama-sama (simultan) berpengaruh signifikan terhadap variabel dependen (dilihat dari F-hitung > F-tabel atau Sig. F < 0.05). Uji t menguji signifikansi pengaruh individual masing-masing variabel secara parsial (t-hitung > t-tabel atau p-value < 0.05).' },
    { title: 'Koefisien Determinasi R-Square (R^2) & Adjusted R-Square', p1: 'Nilai R^2 mengukur seberapa besar proporsi varians variabel dependen yang mampu dijelaskan oleh variabel independen dalam model. Untuk regresi dengan banyak variabel, Adjusted R^2 digunakan untuk mengoreksi penambahan variabel bebas buatan yang tidak menambah daya penjelas model.' },
    { title: 'Signifikansi Statistik (P-Value) vs Signifikansi Praktis (Effect Size)', p1: 'Peneliti yang matang tidak hanya terpaku pada p-value < 0.05. Ukuran efek (effect size Cohen\'s f^2: 0.02 kecil, 0.15 sedang, 0.35 besar) mengukur besarnya dampak riil variabel dalam dunia nyata, membedakan temuan yang bermakna secara praktis dari sekadar efek sampel besar.' },
    { title: 'Teknik Pembahasan Ilmiah (Discussion) & Konfirmasi Teori Rujukan', p1: 'Kelemahan paling umum Bab 4 skripsi adalah mengulang pembacaan tabel angka tanpa memberikan pembahasan substansi. Peneliti wajib membandingkan hasil temuan dengan teori dasar (grand theory) dan temuan riset terdahulu: apakah mendukung, menolak, atau memodifikasi teori rujukan.' },
    { title: 'Sistematika Bab 5: Kesimpulan, Keterbatasan Riset & Saran Praktis', p1: 'Kesimpulan harus menjawab secara lugas rumusan masalah penelitian, bukan mengulang tabel statistik. Keterbatasan riset mencatat batasan cakupan data secara jujur, sedangkan saran dibagi menjadi saran teoritis untuk penelitian masa depan dan saran manajerial bagi pemangku kebijakan.' },
    { title: 'Etika Publikasi Ilmiah & Konversi Skripsi Menjadi Artikel Jurnal', p1: 'Karya "${title}" diakhiri dengan panduan mengonversi naskah skripsi setebal 100 halaman menjadi artikel jurnal 15 halaman berstandar IMRaD (Introduction, Methods, Results, and Discussion), mematuhi etika anti-plagiarisme (Turnitin < 20%), dan memilih target jurnal bereputasi SINTA atau Scopus.' },
  ];

  ch5.forEach((sub, i) => {
    pages.push({
      pageNumber: 45 + i,
      chapterNumber: 5,
      chapterTitle: 'Bab 5: Interpretasi Statistik & Publikasi Naskah Ilmiah',
      sectionTitle: `Sub-Bab 5.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Karya "${title}" oleh ${authorName} menutup pembahasannya dengan menekankan bahwa puncak dari sebuah penelitian ilmiah adalah kebermanfaatannya bagi masyarakat dan kontribusinya bagi kemajuan peradaban.`,
        `Halaman ${45 + i} ini membimbing mahasiswa melangkah percaya diri dari ruang sidang skripsi menuju panggung diseminasi ilmiah di jurnal bereputasi tinggi.`,
        `Perguruan Tinggi bangga mendampingi setiap mahasiswa bertumbuh menjadi akademisi dan profesional yang berintegritas dan berpikiran kritis.`,
      ],
      callout: {
        type: 'summary',
        title: `Prinsip Penulisan Skripsi Kunci (Hal ${45 + i})`,
        content: `Penelitian yang baik adalah penelitian yang selesai, dapat dipertanggungjawabkan metode dan datanya secara terbuka, serta memberikan manfaat nyata bagi institusi dan masyarakat.`,
      },
    });
  });

  // ==========================================
  // BAGIAN PENUTUP (Hal 51 - 55)
  // ==========================================
  pages.push({
    pageNumber: 51,
    chapterNumber: 6,
    chapterTitle: 'Glosarium Metodologi Riset & Statistika',
    sectionTitle: 'Kamus Istilah Penelitian Baku (A - Z)',
    paragraphs: [
      `Glosarium terminologi baku yang digunakan dalam naskah "${title}":`,
      `• Cronbach's Alpha: Koefisien pengukur konsistensi internal instrumen kuesioner dengan nilai ambang batas minimal 0.70.\n• Heteroskedastisitas: Kondisi ketidaksamaan varians residual antar pengamatan yang melanggar asumsi regresi OLS.\n• Multikolinearitas: Hubungan korelasi linier yang sangat kuat antar sesama variabel independen yang ditandai nilai VIF > 10.\n• P-Value: Probabilitas mengamati hasil statistik ekstrem dengan asumsi bahwa hipotesis nol (H0) bernilai benar.`,
      `• Purposive Sampling: Teknik penarikan sampel non-probabilitas yang menetapkan pertimbangan kriteria tertentu pada responden.\n• R-Squared: Proporsi varians variabel terikat yang dapat dijelaskan oleh gabungan variabel bebas dalam model regresi.\n• Research Gap: Celah atau kesenjangan teoretis dan empiris yang belum terselesaikan oleh riset-riset terdahulu.\n• Uji Sobel: Pengujian statistik z untuk menilai signifikansi efek tidak langsung variabel mediasi.`,
    ],
    callout: {
      type: 'definition',
      title: 'Standar Istilah ISI / APA',
      content: `Seluruh definisi mengacu pada standar American Psychological Association (APA) dan International Statistical Institute (ISI).`,
    },
  });

  pages.push({
    pageNumber: 52,
    chapterNumber: 6,
    chapterTitle: 'Bibliografi & Daftar Pustaka Metodologi',
    sectionTitle: 'Rujukan Literatur Metodologi Penelitian Nasional & Internasional',
    paragraphs: [
      `Daftar literatur rujukan ilmiah yang digunakan dalam penulisan naskah "${title}":`,
      `1. Hair, J. F., Black, W. C., Babin, B. J., & Anderson, R. E. (2019). Multivariate Data Analysis (8th ed.). Cengage Learning.\n2. Creswell, J. W., & Creswell, J. D. (2018). Research Design: Qualitative, Quantitative, and Mixed Methods Approaches (5th ed.). SAGE Publications.\n3. Ghozali, I. (2021). Aplikasi Analisis Multivariate dengan Program IBM SPSS 26. Semarang: Badan Penerbit Universitas Diponegoro.\n4. Sugiyono. (2022). Metode Penelitian Kuantitatif, Kualitatif, dan R&D. Bandung: Alfabeta.`,
      `5. Rahmawati, F. (2024). Validitas Konstruk dan Permodelan Mediasi pada Sains Data Terapan. Jurnal Riset Akuntansi dan Manajemen Perguruan Tinggi, 15(1), 45-63.`,
      `Seluruh pustaka di atas tersedia di Ruang Referensi Perpustakaan Perguruan Tinggi.`,
    ],
  });

  pages.push({
    pageNumber: 53,
    chapterNumber: 6,
    chapterTitle: 'Indeks Subjek & Kata Kunci Statistika',
    sectionTitle: 'Penelusuran Lokasi Topik Metodologi Riset',
    paragraphs: [
      `Indeks subjek untuk mempermudah navigasi pembaca:`,
      `• Adjusted R-Square: Hal 46\n• Analisis Jalur (Path Analysis): Hal 41\n• Bootstrapping SmartPLS: Hal 42\n• Cronbach's Alpha: Hal 29\n• Heteroskedastisitas (Uji Glejser): Hal 38\n• Multikolinearitas (VIF): Hal 37`,
      `• Operasionalisasi Variabel: Hal 9\n• Research Gap: Hal 6\n• Rumus Slovin: Hal 20\n• Skala Likert: Hal 25\n• Stratified Random Sampling: Hal 18\n• Uji F (Simultan) & Uji t (Parsial): Hal 45\n• Uji Normalitas Kolmogorov-Smirnov: Hal 36\n• Validitas Pearson Product Moment: Hal 27`,
    ],
  });

  pages.push({
    pageNumber: 54,
    chapterNumber: 6,
    chapterTitle: 'Bank Soal Ujian Komprehensif Metodologi',
    sectionTitle: 'Uji Penguasaan Metodologi Penelitian Mahasiswa',
    paragraphs: [
      `Soal evaluasi mandiri persiapan ujian sidang proposal skripsi di lingkungan perguruan tinggi:`,
      `SOAL 1 (Kerangka Konsep): Jelaskan perbedaan peran antara variabel mediasi (intervening) dan variabel moderasi! Gambarkan model diagram jalurnya masing-masing beserta contoh kasus di bidang bisnis!`,
      `SOAL 2 (Teknik Sampling): Diberikan populasi 1.200 karyawan yang terbagi ke dalam 3 divisi kerja dengan komposisi tidak seimbang. Tentukan teknik sampling probabilitas yang tepat dan hitung alokasi sampel per divisi menggunakan batas toleransi kesalahan e = 5%!`,
      `SOAL 3 (Kualitas Data): Apa yang harus dilakukan seorang peneliti jika dari 20 butir kuesioner yang diuji coba pada 30 responden, terdapat 4 butir yang memiliki nilai r-hitung < r-tabel? Jelaskan prosedur perbaikannya!`,
      `SOAL 4 (Asumsi Klasik): Mengapa multikolinearitas menjadi masalah serius dalam regresi linier berganda? Jelaskan dampak nilai VIF > 10 terhadap standar error koefisien regresi!`,
    ],
    callout: {
      type: 'exercise',
      title: 'Pedoman Penilaian Soal',
      content: `Rubrik penilaian menguji ketepatan argumentasi metodologis (40%), ketelitian kalkulasi statistik (30%), dan kesesuaian interpretasi hipotesis (30%).`,
    },
  });

  pages.push({
    pageNumber: 55,
    chapterNumber: 6,
    chapterTitle: 'Lembar Catatan Mahasiswa & Kolofon Akhir',
    sectionTitle: 'Verifikasi Sirkulasi Digital Perguruan Tinggi',
    paragraphs: [
      `Selamat! Anda telah menyelesaikan pembacaan seluruh 55 halaman naskah "${title}" karya ${authorName}.`,
      `Gunakan lembar akhir ini atau fasilitas "Tambah Catatan" reader untuk mencatat draf hipotesis dan rancangan metode penelitian skripsi Anda.`,
      `Koleksi resmi Perpustakaan Perguruan Tinggi. Narahubung layanan e-book akademik: layanan.pustaka@perguruan-tinggi.ac.id. Hak cipta dilindungi undang-undang.`,
    ],
    callout: {
      type: 'summary',
      title: 'Verifikasi Progres Baca',
      content: `Progres: 100% (55 dari 55 Halaman Terbaca). Aktivitas pembacaan tervalidasi pada sistem sirkulasi sivitas akademika Perguruan Tinggi.`,
    },
  });

  return pages;
}
