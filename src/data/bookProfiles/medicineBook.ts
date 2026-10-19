import { Book, BookPage } from '../../types/library';

export function getMedicineBookPages(book: Book): BookPage[] {
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
      `Buku Teks Akademik Kedokteran Digital: "${title}".`,
      `Penulis Utama: ${authorName}. Diterbitkan secara resmi oleh ${pub}, tahun publikasi ${year}.`,
      `Klasifikasi Desimal Dewey (DDC): ${ddc} (Fisiologi Manusia, Patologi & Farmakologi Klinis). Nomor ISBN: ${book.isbn}. Naskah resmi Repositori Digital Perpustakaan Akademik Terakreditasi.`,
      `Buku ajar komprehensif bagi mahasiswa kedokteran, farmasi klinis, dan ilmu kesehatan yang menghubungkan mekanisme homeostasis fisiologi organ (kardiovaskular, pulmonal, renal, endokrin) dengan prinsip farmakokinetik-farmakodinamik molekuler dan terapi berbasis bukti (evidence-based targeted therapy).`,
    ],
    callout: {
      type: 'summary',
      title: 'Verifikasi Kurasi Bidang Kedokteran & Ilmu Kesehatan',
      content: `Disusun oleh Dokter Spesialis Penyakit Dalam dan Konsultan Farmakoterapi, menyajikan integrasi fisiologi organ dan intervensi obat klinis.`,
    },
  });

  pages.push({
    pageNumber: 2,
    chapterNumber: 0,
    chapterTitle: 'Prakata Penulis & Kurator Perpustakaan',
    sectionTitle: 'Kata Pengantar: Dari Pemahaman Seluler Menuju Kesembuhan Pasien',
    paragraphs: [
      `Praktik kedokteran klinis modern tidak lagi dapat dijalankan semata-mata dengan menghafal pedoman terapi obat. Setiap intervensi terapeutik yang kita berikan kepada pasien selalu berdampak langsung pada keseimbangan dinamis lingkungan internal tubuh (homeostasis).`,
      `Buku "${title}" dirancang untuk menghubungkan dua disiplin keilmuan krusial: Fisiologi Manusia dan Farmakologi Klinis. Kami mengajak pembaca menelaah bagaimana gangguan pada level reseptor membran dan kaskade enzim dapat bermanifestasi menjadi sindrom penyakit sistemik (seperti hipertensi, gagal jantung, atau diabetes melitus), dan bagaimana obat-obatan molekuler generasi baru dirancang untuk menarget reseptor spesifik secara presisi dengan meminimalkan efek samping toksik.`,
      `Apresiasi kami sampaikan kepada Sivitas Akademika Perguruan Tinggi atas komitmennya dalam memperkaya literatur sains kesehatan berkualitas tinggi.`,
    ],
    callout: {
      type: 'discussion',
      title: 'Amanat Etika Kedokteran Penulis',
      content: `Primum non nocere (pertama-tama jangan mencelakakan pasien). Kuasai mekanisme kerja obat sebelum meresepkannya demi keselamatan nyawa manusia.`,
    },
  });

  pages.push({
    pageNumber: 3,
    chapterNumber: 0,
    chapterTitle: 'Pedoman Pembacaan & Silabus Kedokteran Klinis',
    sectionTitle: 'Panduan Telaah Fisiologi Organ & Intervensi Farmakoterapi',
    paragraphs: [
      `Buku teks ini disusun secara modular dalam 5 bab utama dengan total 55 halaman aktif. Setiap halaman memuat diagram fisiologis organ, jalur transduksi sinyal intraseluler, formulasi farmakokinetik ADME, serta protokol terapi kasus klinis nyata.`,
      `Capaian Pembelajaran Lulusan (CPL) meliputi: (1) Pemahaman mekanisme homeostasis seluler dan regulasi hemodinamika organ; (2) Keterampilan menganalisis patofisiologi gangguan pernapasan, ginjal, dan aksis endokrin; (3) Kemahiran menghitung parameter farmakokinetik dan menentukan strategi farmakoterapi terarah berbasis bukti.`,
      `Mahasiswa disarankan membaca korelasi klinis yang disajikan pada setiap bab guna mengasah penalaran diagnosis klinis.`,
    ],
    callout: {
      type: 'definition',
      title: 'Prasyarat Keilmuan',
      content: `Biologi Seluler & Molekuler, Biokimia Kedokteran Dasar, Anatomi Manusia, serta Prinsip Dasar Farmakologi.`,
    },
  });

  pages.push({
    pageNumber: 4,
    chapterNumber: 0,
    chapterTitle: 'Daftar Isi & Sistematika Keilmuan',
    sectionTitle: 'Peta Navigasi Bab & Topik Bahasan Fisiologi Klinis',
    paragraphs: [
      `Sistematika bahasan naskah "${title}":`,
      `• BAB 1: HOMEOSTASIS, FISIOLOGI SELULER & SISTEM SARAF (Halaman 5 - 14)\n• BAB 2: SISTEM KARDIOVASKULAR, HEMODINAMIKA & TEKANAN DARAH (Halaman 15 - 24)\n• BAB 3: FISIOLOGI PULMONAL, PERTUKARAN GAS & KESEIMBANGAN ASAM-BASA (Halaman 25 - 34)\n• BAB 4: SISTEM RENAL, CAIRAN TUBUH & AKSIS ENDOKRIN (Halaman 35 - 44)\n• BAB 5: FARMAKOKINETIK, FARMAKODINAMIK & TERAPI TERARAH (Halaman 45 - 50)`,
      `• BAGIAN PENUTUP: Glosarium Kedokteran Klinis (Hal 51), Bibliografi Literatur Medis (Hal 52), Indeks Istilah Fisiologi & Obat (Hal 53), Soal Ujian Komprehensif Medis (Hal 54), Catatan & Kolofon (Hal 55).`,
    ],
  });

  // ==========================================
  // BAB 1: HOMEOSTASIS & SELULER (Hal 5 - 14)
  // ==========================================
  const ch1 = [
    { title: 'Konsep Homeostasis & Regulasi Umpan Balik (Feedback Mechanisms)', p1: 'Claude Bernard memperkenalkan konsep "milieu intérieur" yang kemudian disempurnakan oleh Walter Cannon sebagai Homeostasis: pemeliharaan kondisi statis atau konstan pada lingkungan cairan internal tubuh. Sistem biologis mempertahankan kestabilan parameter fisiologis (suhu tubuh, pH darah 7.35-7.45, glukosa darah) melalui mekanisme umpan balik negatif (negative feedback loop) dan umpan balik positif terbatas (seperti saat persalinan atau pembekuan darah).' },
    { title: 'Struktur Membran Sel & Transpor Pasif: Difusi Sederhana vs Terfasilitasi', p1: 'Membran sel tersusun atas lapisan ganda fosfolipid (lipid bilayer) dengan permeabilitas selektif. Molekul lipofilik kecil (O2, CO2) melintasi membran melalui difusi sederhana menurut Hukum Fick. Sebaliknya, ion dan molekul polar besar membutuhkan saluran protein (protein ion channels) atau protein pembawa (carrier proteins) melalui difusi terfasilitasi tanpa konsumsi ATP.' },
    { title: 'Transpor Aktif Primer & Sekunder: Pompa Na+/K+-ATPase', p1: 'Transpor aktif memindahkan zat melawan gradien konsentrasi atau elektrokimia. Pompa Na+/K+-ATPase adalah transpor aktif primer yang menghidrolisis satu molekul ATP untuk memompa keluar 3 ion Na+ dan memompa masuk 2 ion K+, mempertahankan potensial istirahat membran sel. Transpor aktif sekunder (seperti SGLT pada usus dan ginjal) memanfaatkan energi gradien Na+ untuk mentranspor glukosa.' },
    { title: 'Potensial Membran Istirahat & Persamaan Nernst / Goldman-Hodgkin-Katz', p1: 'Potensial membran istirahat (sekitar -70 mV hingga -90 mV pada sel saraf dan otot jantung) ditentukan oleh distribusi ion asimetris dan permeabilitas relatif membran yang tinggi terhadap ion K+. Persamaan Nernst menghitung potensial ekuilibrium ion tunggal, sedangkan Persamaan Goldman-Hodgkin-Katz (GHK) mengintegrasikan kontribusi ion Na+, K+, dan Cl-.' },
    { title: 'Pembentukan & Propagasi Potensial Aksi pada Serabut Saraf', p1: 'Ketika depolarisasi membran mencapai ambang batas (threshold -55 mV), saluran Na+ berpintu voltase (voltage-gated Na+ channels) terbuka masif, memicu fase depolarisasi cepat hingga +30 mV. Diikuti oleh inaktivasi saluran Na+ dan pembukaan saluran K+ yang memicu repolarisasi dan hiperpolarisasi relatif. Transmisi saltatori pada akson bermielin dipercepat oleh nodus Ranvier.' },
    { title: 'Transmisi Sinaptik Kimiawi: Pelepasan & Penangkapan Neurotransmiter', p1: 'Potensial aksi yang mencapai terminal presinaptik membuka saluran Ca2+ voltase. Masuknya ion Ca2+ memicu fusi vesikel sinaps dengan membran presinaptik (melalui protein SNARE) dan melepaskan neurotransmiter (asetilkolin, glutamat, GABA) ke celah sinaps untuk berikatan dengan reseptor pascasinaps ionotropik atau metabotropik.' },
    { title: 'Sistem Saraf Otonom: Simpatis vs Parasimpatis', p1: 'Sistem saraf otonom mengatur fungsi viseral organ di luar kendali sadar. Divisi Simpatis (fight or flight) melepaskan norepinefrin yang mengaktivasi reseptor adrenergik alfa dan beta untuk meningkatkan denyut jantung dan bronkodilatasi. Divisi Parasimpatis (rest and digest) melepaskan asetilkolin yang mengaktivasi reseptor kolinergik muskarinik.' },
    { title: 'Jalur Transduksi Sinyal Intraseluler: Reseptor GPCR & Second Messenger', p1: 'Reseptor Tergandeng Protein G (G-Protein Coupled Receptors - GPCR) adalah target mayoritas obat modern. Aktivasi protein Gs menstimulasi adenilat siklase memproduksi second messenger cAMP yang mengaktifkan Protein Kinase A (PKA). Sebaliknya, jalur Gq mengaktivasi fosfolipase C (PLC) menghasilkan IP3 (yang memobilisasi Ca2+ dari retikulum sarkoplasma) dan DAG.' },
    { title: 'Kematian Sel Terprogram (Apoptosis) vs Nekrosis Patologis', p1: 'Apoptosis adalah mekanisme eliminasi sel teratur tanpa memicu respon inflamasi, dikendalikan oleh kaskade enzim caspase melalui jalur intrinsik mitokondria (protein Bcl-2/Bax) atau jalur ekstrinsik reseptor kematian (Fas/TNF). Berbeda dengan nekrosis di mana sel membengkak dan lisis, memicu pelepasan mediator inflamasi ke jaringan sekitar.' },
    { title: 'Rangkuman Fisiologi Seluler sebagai Pijakan Farmakoterapi', p1: 'Bab 1 disimpulkan dengan pemahaman bahwa seluruh penyakit klinis berakar dari disfungsi mekanisme molekuler seluler, sehingga intervensi obat yang rasional menuntut ketepatan identifikasi target reseptor atau enzim seluler.' },
  ];

  ch1.forEach((sub, i) => {
    pages.push({
      pageNumber: 5 + i,
      chapterNumber: 1,
      chapterTitle: 'Bab 1: Homeostasis, Fisiologi Seluler & Sistem Saraf',
      sectionTitle: `Sub-Bab 1.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Dalam naskah "${title}", ${authorName} menekankan bahwa pemahaman mendalam tentang fisiologi seluler adalah fondasi yang membedakan seorang klinisi yang memahami patofisiologi penyakit dengan praktisi yang sekadar mengobati gejala permukaan.`,
        `Halaman ${5 + i} ini menyajikan ilustrasi jalur pensinyalan biokimia membran, perbandingan potensial aksi saraf dan otot, serta implikasi klinis gangguan keseimbangan elektrolit.`,
        `Kajian ini menjadi materi pembelajaran wajib dalam blok biomedik dasar dan farmakologi bagi sivitas akademika di lingkungan ilmu kesehatan dan kedokteran.`,
      ],
      callout: {
        type: i % 2 === 0 ? 'formula' : 'definition',
        title: `Prinsip Fisiologi Kunci (Hal ${5 + i})`,
        content: `Potensial Ekuilibrium Nernst: E = (61.5 / z) * log10([Ion_luar] / [Ion_dalam]) pada suhu tubuh manusia 37°C, menentukan gradien listrik membran sel normal.`,
      },
    });
  });

  // ==========================================
  // BAB 2: KARDIOVASKULAR & TEKANAN DARAH (Hal 15 - 24)
  // ==========================================
  const ch2 = [
    { title: 'Elektrofisiologi Jantung: Sistem Konduksi & Gelombang EKG', p1: 'Aktivitas listrik jantung bermula dari Nodus Sinoatrial (SA Node) sebagai pemacu alami (pacemaker: 60-100 kali/menit), merambat melalui traktus internodal ke Nodus Atrioventrikular (AV Node), Berkas His, dan Serabut Purkinje. Rekaman Elektrokardiogram (EKG) mencerminkan gelombang depolarisasi atrium (Gelombang P), depolarisasi ventrikel (Kompleks QRS), dan repolarisasi ventrikel (Gelombang T).' },
    { title: 'Potensial Aksi Sel Miosit Ventrikel Jantung (Fase 0 hingga 4)', p1: 'Berbeda dengan sel saraf, potensial aksi miosit ventrikel memiliki fase plateau yang panjang: Fase 0 (depolarisasi cepat masuknya Na+), Fase 1 (repolarisasi awal transien), Fase 2 (Plateau akibat masuknya ion Ca2+ melalui saluran tipe L yang seimbang dengan keluarnya K+), Fase 3 (repolarisasi cepat penutupan saluran Ca2+), dan Fase 4 (potensial istirahat diastolik -90 mV).' },
    { title: 'Siklus Mekanik Jantung & Kurva Tekanan-Volume Ventrikel Kiri', p1: 'Siklus jantung terbagi atas fase sistolik (kontraksi isovolumetrik dan ejeksi cepat) dan diastolik (relaksasi isovolumetrik dan pengisian ventrikel). Loop Tekanan-Volume (PV Loop) ventrikel kiri mengilustrasikan Volume Akhir Diastolik (EDV), Volume Akhir Sistolik (ESV), dan Volume Sekuncup (Stroke Volume = EDV - ESV).' },
    { title: 'Curah Jantung (Cardiac Output), Fraksi Ejeksi & Hukum Frank-Starling', p1: 'Curah Jantung (Cardiac Output - CO) adalah volume darah yang dipompa oleh ventrikel per menit: CO = Heart Rate (HR) x Stroke Volume (SV). Fraksi Ejeksi normal berkisar antara 55-70%. Hukum Frank-Starling menetapkan bahwa semakin besar regangan serat otot ventrikel pada akhir diastol (preload), semakin kuat gaya kontraksi ventrikel berikutnya.' },
    { title: 'Hemodinamika Vaskular & Resistensi Vaskular Sistemik (Hukum Poiseuille)', p1: 'Aliran darah Q ditentukan oleh perbedaan tekanan delta_P dan resistensi vaskular R (Q = delta_P / R). Berdasarkan Hukum Poiseuille, resistensi pembuluh darah berbanding terbalik dengan pangkat empat jari-jari pembuluh darah (R proporsional 1 / r^4). Oleh karena itu, vasokonstriksi atau vasodilatasi arteriol sekecil 10% memberikan dampak drastis terhadap resistensi vaskular sistemik (SVR).' },
    { title: 'Regulasi Tekanan Darah Jangka Pendek: Refleks Baroreseptor Karotikus', p1: 'Reseptor regangan pada sinus karotikus (Nervus Glossofaringeus IX) dan arkus aorta (Nervus Vagus X) memantau fluktuasi tekanan darah setiap detiknya. Penurunan tekanan darah memicu penurunan frekuensi impuls baroreseptor ke medula oblongata, memicu aktivasi refleks simpatis yang meningkatkan denyut jantung, kontraktilitas miosit, dan vasokonstriksi arteriol.' },
    { title: 'Regulasi Tekanan Darah Jangka Panjang: Sistem Renin-Angiotensin-Aldosteron (RAAS)', p1: 'Penurunan tekanan perfusi arteriol aferen ginjal merangsang aparatus jukstaglomerulus melepaskan enzim renin. Renin memecah angiotensinogen hati menjadi angiotensin I, yang selanjutnya dikonversi oleh Angiotensin-Converting Enzyme (ACE) endotel paru menjadi Angiotensin II vasokonstriktor kuat. Angiotensin II merangsang pelepasan aldosteron korteks adrenal untuk retensi Na+ dan air.' },
    { title: 'Patofisiologi Hipertensi Primer & Remodeling Vaskular / Miokard', p1: 'Hipertensi esensial melibatkan interaksi kompleks antara hiperaktivitas saraf simpatis, disregulasi sistem RAAS, disfungsi endotel (penurunan produksi Nitric Oxide / NO), dan kekakuan dinding arteri. Beban afterload yang tinggi secara kronis memicu hipertrofi ventrikel kiri konsentris (LVH) dan aterosklerosis arteri koroner.' },
    { title: 'Patofisiologi Gagal Jantung Kongestif (HFrEF vs HFpEF)', p1: 'Gagal jantung terjadi ketika jantung gagal memompa darah yang memadai untuk memenuhi kebutuhan metabolisme jaringan. Kita membedakan Gagal Jantung dengan Fraksi Ejeksi Rendah (HFrEF, EF < 40%, kegagalan kontraktilitas sistolik) dengan Gagal Jantung dengan Fraksi Ejeksi Terpelihara (HFpEF, EF >= 50%, kekakuan ventrikel dan kegagalan relaksasi diastolik).' },
    { title: 'Peptida Natriuretik: ANP dan BNP sebagai Biomarker Kardiovaskular', p1: 'Regangan dinding atrium dan ventrikel akibat kelebihan beban volume melepaskan Atrial Natriuretic Peptide (ANP) dan B-type Natriuretic Peptide (BNP). Hormon ini bekerja mengantagonis RAAS dengan memicu natriuresis (ekskresi natrium urin), diuresis, dan vasodilatasi. Kadar NT-proBNP plasma menjadi biomarker baku penegakan diagnosis gagal jantung klinis.' },
  ];

  ch2.forEach((sub, i) => {
    pages.push({
      pageNumber: 15 + i,
      chapterNumber: 2,
      chapterTitle: 'Bab 2: Sistem Kardiovaskular, Hemodinamika & Tekanan Darah',
      sectionTitle: `Sub-Bab 2.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Dalam pembahasan klinis "${title}", ${authorName} menghubungkan mekanika kardiovaskular dengan strategi terapi medis: memahami peran afterload dan preload adalah kunci dalam merancang intervensi obat vasodilator dan inotropik yang menyelamatkan nyawa pasien syok kardiogenik.`,
        `Halaman ${15 + i} ini menyajikan diagram kurva PV Loop ventrikel, rekaman EKG 12 sandapan abnormal, serta bagan alur aktivasi kaskade hormon renin-angiotensin-aldosteron.`,
        `Materi ini menjadi kompetensi inti yang harus dikuasai mahasiswa dalam evaluasi klinis sistem sirkulasi darah dan kardiologi terapan.`,
      ],
      callout: {
        type: 'case_study',
        title: `Formula Kardiovaskular Kunci (Hal ${15 + i})`,
        content: `Tekanan Arteri Rata-Rata (Mean Arterial Pressure - MAP): MAP = Diastolik + 1/3 (Sistolik - Diastolik) = Curah Jantung x Resistensi Vaskular Sistemik (CO x SVR).`,
      },
    });
  });

  // ==========================================
  // BAB 3: PULMONAL & ASAM BASA (Hal 25 - 34)
  // ==========================================
  const ch3 = [
    { title: 'Mekanisme Ventilasi Paru & Tekanan Pleura (Hukum Boyle)', p1: 'Inspirasi adalah proses aktif yang digerakkan oleh kontraksi diafragma dan otot interkostal eksterna, menurunkan tekanan intrapleura dari -5 cmH2O menjadi -7.5 cmH2O. Sesuai Hukum Boyle (P1*V1 = P2*V2), ekspansi volume rongga toraks menurunkan tekanan alveolar di bawah tekanan atmosfer sehingga udara mengalir masuk ke paru.' },
    { title: 'Kepatuhan Paru (Lung Compliance) & Peran Surfaktan Alveolar', p1: 'Kepatuhan paru (compliance = delta_V / delta_P) mengukur elastisitas paru. Surfaktan paru yang diproduksi oleh sel pneumosit tipe II tersusun atas dipalmitoylphosphatidylcholine (DPPC) yang menurunkan tegangan permukaan cairan alveolar (Hukum Laplace P = 2T/r), mencegah kolapsnya alveolus kecil saat akhir ekspirasi (atelektasis).' },
    { title: 'Difusi Gas Alveolar-Kapiler & Kapasitas Difusi Karbon Monoksida (DLCO)', p1: 'Oksigen melintasi membran respirasi yang sangat tipis (0.5 mikrometer) menuju eritrosit. Laju difusi gas berbanding lurus dengan luas permukaan membran dan perbedaan tekanan parsial gas, serta berbanding terbalik dengan ketebalan membran. Pada fibrosis paru, penebalan interstitium menurunkan kapasitas difusi secara signifikan.' },
    { title: 'Rasio Ventilasi-Perfusi (V/Q Matching) & Pirau Fisiologis (Shunt)', p1: 'Pertukaran gas optimal menuntut keselarasan antara ventilasi alveolar (V) dan aliran perfusi darah kapiler (Q). Rasio V/Q normal rata-rata adalah 0.8. Kita membedakan V/Q = 0 (efek pirau/shunt di mana darah melewati alveolus tanpa teroksigenasi, seperti pada pneumonia berat) dan V/Q = tak hingga (dead space ventilasi tanpa aliran darah, seperti pada emboli paru).' },
    { title: 'Transpor Oksigen dalam Darah & Kurva Disosiasi Oksihemoglobin', p1: 'Lebih dari 98% oksigen dalam darah terikat pada protein hemoglobin (Hb), membentuk oksihemoglobin dengan kapasitas maksimal 1.34 mL O2 per gram Hb. Kurva disosiasi oksihemoglobin berbentuk sigmoid akibat efek kooperatif alosterik antar subunit heme.' },
    { title: 'Efek Bohr & Pergeseran Kurva Disosiasi Oksigen', p1: 'Pergeseran kurva ke kanan (penurunan afinitas Hb terhadap O2 sehingga mempermudah pelepasan oksigen ke jaringan aktif) dipicu oleh: kenaikan ion H+ (penurunan pH asidosis), kenaikan PCO2, peningkatan suhu tubuh, dan kenaikan kadar 2,3-Bifosfogliserat (2,3-DPG) di dalam eritrosit. Efek sebaliknya memicu pergeseran kurva ke kiri.' },
    { title: 'Pengaturan Kimiawi Pernapasan: Kemoreseptor Sentral & Perifer', p1: 'Dorongan respirasi utama diatur oleh kemoreseptor sentral di permukaan ventral medula yang sangat peka terhadap perubahan konsentrasi ion H+ cairan serebrospinal yang dihasilkan dari difusi gas CO2 melintasi sawar darah otak (blood-brain barrier). Kemoreseptor perifer di badan karotis dan aorta terutama merespons hipoksemia berat (PO2 < 60 mmHg).' },
    { title: 'Fisiologi Keseimbangan Asam-Basa: Sistem Penyangga Bikarbonat', p1: 'Keseimbangan pH darah dipertahankan pada 7.35 - 7.45 melalui tiga lini pertahanan: (1) Sistem Penyangga Kimiawi (Buffer Bikarbonat CO2 + H2O <-> H2CO3 <-> H+ + HCO3-, buffer fosfat, dan protein intraseluler); (2) Kompensasi Respirasi paru yang merespons dalam hitungan menit; dan (3) Kompensasi Ginjal yang mereabsorpsi atau mengekskresi ion H+ dan HCO3- dalam hitungan jam hingga hari.' },
    { title: 'Gangguan Asam-Basa Primer: Asidosis & Alkalosis Respiratorik vs Metabolik', p1: 'Kita menganalisis empat gangguan asam-basa primer berdasarkan hasil Analisis Gas Darah (AGD): Asidosis Respiratorik (retensi PCO2 > 45 mmHg akibat hipoventilasi), Alkalosis Respiratorik (penurunan PCO2 < 35 mmHg akibat hiperventilasi), Asidosis Metabolik (penurunan HCO3- < 22 mEq/L), dan Alkalosis Metabolik (peningkatan HCO3- > 26 mEq/L).' },
    { title: 'Anion Gap Serum & Evaluasi Diferensial Asidosis Metabolik', p1: 'Bab 3 diakhiri dengan rumus Anion Gap = [Na+] - ([Cl-] + [HCO3-]). Anion gap normal adalah 8-12 mEq/L. High Anion Gap Metabolic Acidosis (HAGMA) disebabkan oleh akumulasi asam unmeasured (ketoasidosis diabetikum, asidosis laktat, gagal ginjal uremia, toksisitas metanol), memandu diagnosis diferensial kedaruratan medis.' },
  ];

  ch3.forEach((sub, i) => {
    pages.push({
      pageNumber: 25 + i,
      chapterNumber: 3,
      chapterTitle: 'Bab 3: Fisiologi Pulmonal, Pertukaran Gas & Keseimbangan Asam-Basa',
      sectionTitle: `Sub-Bab 3.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Dalam analisis klinis naskah "${title}", ${authorName} memaparkan bahwa interpretasi cepat Analisis Gas Darah (AGD) dan pemahaman status asam-basa adalah keterampilan penyelamat hidup yang wajib dikuasai klinisi di ruang Unit Perawatan Intensif (ICU).`,
        `Halaman ${25 + i} ini menyajikan grafik kurva disosiasi oksihemoglobin dengan visualisasi pergeseran Bohr, diagram nomogram Henderson-Hasselbalch, dan latihan membaca hasil gas darah pasien kritis.`,
        `Pemahaman ini menjadi kompetensi vital dalam praktik rotasi klinik kedokteran dan farmasi rumah sakit.`,
      ],
      callout: {
        type: 'formula',
        title: `Persamaan Henderson-Hasselbalch (Hal ${25 + i})`,
        content: `pH Darah = 6.1 + log10([HCO3-] / (0.03 * PCO2)). Rasio normal [HCO3-] : PCO2 terlarut adalah 20 : 1, menjaga pH darah stabil pada 7.40.`,
      },
    });
  });

  // ==========================================
  // BAB 4: GINJAL & ENDOKRIN (Hal 35 - 44)
  // ==========================================
  const ch4 = [
    { title: 'Fisiologi Nefron & Laju Filtrasi Glomerulus (Glomerular Filtration Rate - GFR)', p1: 'Nefron adalah unit fungsional ginjal (sekitar 1 juta per ginjal). Filtrasi glomerulus terjadi melintasi membran filtrasi tiga lapis (endotel fenestrata, membran basalis bermuatan negatif, dan podosit celah filtrasi). Laju Filtrasi Glomerulus (GFR normal ~125 mL/menit) diatur oleh Tekanan Starling: tekanan hidrostatik kapiler yang mendorong filtrasi dilawan oleh tekanan onkotik koloid plasma.' },
    { title: 'Fungsi Tubulus Proksimal: Reabsorpsi Masif Glukosa, Asam Amino & Bikarbonat', p1: 'Tubulus Kontortus Proksimal (PCT) mereabsorpsi lebih dari 65% air dan ion Na+ terfiltrasi, 100% glukosa dan asam amino (melalui kotransporter SGLT2 dan Na+-dependent transporters), serta 85% bikarbonat melalui aktivitas enzim karbonik anhidrase luminal dan basolateral.' },
    { title: 'Ansa Henle: Mekanisme Pengganda Arus Balik (Countercurrent Multiplier)', p1: 'Ansa Henle bertanggung jawab menghasilkan gradien osmotik hipertonik di medula ginjal (dari 300 mOsm/kg di korteks hingga 1200 mOsm/kg di medula dalam). Pars desendens tipis sangat permeabel terhadap air tetapi impermeabel terhadap solut; sedangkan Pars asendens tebal aktif mentranspor ion melalui kotransporter Na+-K+-2Cl- (NKCC2) tanpa permeabilitas air.' },
    { title: 'Tubulus Distal & Duktus Koligentes: Regulasi Halus Aldosteron & ADH', p1: 'Tubulus Kontortus Distal (DCT) mereabsorpsi Na+ dan Cl- melalui kotransporter NCC yang dihambat oleh obat tiazid. Duktus Koligentes (Collecting Duct) memiliki Sel Utama (Principal Cells) yang diatur oleh Aldosteron (reabsorpsi Na+ lewat saluran ENaC dan ekskresi K+) serta Vasopresin / Hormon Antidiuretik (ADH) yang memicu translokasi kanal air Aquaporin-2 ke membran apikal.' },
    { title: 'Keseimbangan Kalium, Kalsium & Pengaturan Osmolalitas Cairan Tubuh', p1: 'Konsentrasi ion kalium ekstraseluler (normal 3.5-5.0 mEq/L) diatur secara ketat karena fluktuasi kecil memicu aritmia jantung letal. Sementara homeostasis kalsium diatur oleh Hormon Paratiroid (PTH), Kalsitriol (Vitamin D aktif yang dibentuk ginjal melalui 1-alfa hidroksilase), dan Kalsitonin.' },
    { title: 'Aksis Hipotalamus-Hipofisis-Adrenal (HPA Axis) & Respon Stres', p1: 'Hipotalamus melepaskan Corticotropin-Releasing Hormone (CRH) yang merangsang adenohipofisis mensekresi Adrenocorticotropic Hormone (ACTH). ACTH menstimulasi korteks adrenal melepaskan hormon glukokortikoid Kortisol yang mengatur glukoneogenesis hati, lipolisis, modulasi respon imun inflamasi, dan kestabilan tekanan darah pembuluh.' },
    { title: 'Fisiologi Tiroid: Sintesis Hormon T3/T4 & Regulasi Laju Metabolisme Basal', p1: 'Sel folikel tiroid memproses yodium melalui tiroglobulin dan enzim Thyroid Peroxidase (TPO) untuk mensintesis Tiroksin (T4) dan Triiodotironin (T3 aktif). Hormon tiroid mengatur konsumsi oksigen seluler, termogenesis, ekspresi reseptor beta-adrenergik jantung, dan perkembangan sistem saraf pusat.' },
    { title: 'Fisiologi Pankreas Endokrin: Sel Alfa, Sel Beta & Metabolisme Glukosa', p1: 'Pulau-pulau Langerhans pankreas mengatur homeostasis energi: Sel Beta mensekresi Insulin sebagai respon terhadap kenaikan glukosa darah (memicu translokasi transporter GLUT4 pada otot dan jaringan lemak serta menghambat glukoneogenesis hati). Sebaliknya, Sel Alfa mensekresi Glukagon saat puasa untuk memecah glikogen hati (glikogenolisis).' },
    { title: 'Patofisiologi Diabetes Melitus Tipe 1 vs Tipe 2 & Resistensi Insulin', p1: 'Diabetes Melitus Tipe 1 disebabkan oleh destruksi autoimun sel beta pankreas yang memicu defisiensi insulin absolut dan risiko ketoasidosis diabetikum. Diabetes Melitus Tipe 2 melibatkan kombinasi resistensi insulin perifer pada jaringan target dan disfungsi progresif sekresi sel beta, memicu hiperglikemia kronis dan komplikasi mikrovaskular/makrovaskular.' },
    { title: 'Hormon Pertumbuhan (GH) & Aksis Reproduksi Hipotalamus-Hipofisis-Gonad', p1: 'Bab 4 diakhiri dengan tinjauan Growth Hormone (GH) dan Insulin-like Growth Factor-1 (IGF-1) dalam regulasi anabolisme protein, serta sekresi pulsatif GnRH, LH, dan FSH dalam mengendalikan gametogenesis dan produksi steroid seks testis dan ovarium.' },
  ];

  ch4.forEach((sub, i) => {
    pages.push({
      pageNumber: 35 + i,
      chapterNumber: 4,
      chapterTitle: 'Bab 4: Sistem Renal, Cairan Tubuh & Aksis Endokrin',
      sectionTitle: `Sub-Bab 4.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Dalam pembahasan karya "${title}", ${authorName} menyoroti bagaimana ginjal dan sistem endokrin bekerja secara serempak sebagai pengatur utama volume intravaskular dan homeostasis metabolisme tubuh manusia.`,
        `Halaman ${35 + i} ini menyajikan diagram arsitektur nefron dengan lokasi spesifik transporter ion, skema aksis umpan balik hormon hipofisis, dan algoritma penanganan ketoasidosis diabetikum dan hipokalemia.`,
        `Pemahaman ini menjadi landasan esensial bagi evaluasi fungsi ginjal dan penyesuaian dosis obat klinis pada pasien gagal ginjal kronis.`,
      ],
      callout: {
        type: 'formula',
        title: `Rumus Klirens Ginjal (Hal ${35 + i})`,
        content: `Klirens Ginjal C = (U_x * V) / P_x, di mana U_x konsentrasi urin, V laju aliran urin (mL/menit), dan P_x konsentrasi plasma. Klirens Inulin atau estimasi eGFR kreatinin Cockcroft-Gault mencerminkan GFR aktual pasien.`,
      },
    });
  });

  // ==========================================
  // BAB 5: FARMAKOKINETIK & TERAPI TERARAH (Hal 45 - 50)
  // ==========================================
  const ch5 = [
    { title: 'Fase Farmakokinetik ADME: Absorpsi & Bioavailabilitas Obat (F)', p1: 'Farmakokinetik mengkaji apa yang dilakukan tubuh terhadap obat (ADME: Absorpsi, Distribusi, Metabolisme, Eliminasi). Absorpsi oral dipengaruhi oleh disolusi, pH lambung, motilitas gastrointestinal, dan metabolisme lintas pertama di hepar (first-pass hepatic metabolism). Bioavailabilitas (F) mengukur fraksi dosis obat yang berhasil mencapai sirkulasi sistemik dalam bentuk aktif.' },
    { title: 'Distribusi Obat, Volume Distribusi (Vd) & Ikatan Protein Plasma', p1: 'Volume Distribusi semu (Vd = Dosis / C_0) mencerminkan luasnya penyebaran obat ke dalam jaringan tubuh relatif terhadap plasma. Obat lipofilik memiliki Vd yang sangat besar (terkonsentrasi di jaringan lemak), sedangkan obat hidrofilik atau yang terikat kuat pada albumin plasma memiliki Vd kecil yang mendekati volume plasma intravaskular.' },
    { title: 'Metabolisme Hepar: Reaksi Fase I (Sitokrom P450) & Reaksi Fase II Konjugasi', p1: 'Hati mengubah obat lipofilik menjadi metabolit polar yang mudah diekskresi ginjal. Metabolisme Fase I (oksidasi, reduksi, hidrolisis) dikatalisis oleh keluarga enzim Sitokrom P450 (terutama CYP3A4, CYP2D6, CYP2C9) yang rentan terhadap induksi atau inhibisi oleh obat lain. Metabolisme Fase II (glukuronidasi, sulfasi, asetilasi) mengonjugasi molekul polar.' },
    { title: 'Parameter Eliminasi: Waktu Paruh (t1/2), Klirens (CL) & Dosis Pemeliharaan', p1: 'Waktu paruh eliminasi (t1/2 = 0.693 * Vd / CL) menentukan waktu yang dibutuhkan konsentrasi plasma obat turun menjadi separuhnya. Diperlukan waktu sekitar 4 hingga 5 kali t1/2 untuk mencapai konsentrasi tunak (steady-state concentration - C_ss). Rumus Dosis Pemeliharaan (Maintenance Dose = C_ss * CL / F) dan Dosis Muatan (Loading Dose = C_target * Vd / F) menjadi dasar kalkulasi terapi.' },
    { title: 'Farmakodinamik: Hubungan Dosis-Respon, Agonis, Antagonis & Indeks Terapi', p1: 'Farmakodinamik mengkaji apa yang dilakukan obat terhadap tubuh. Kita mengkaji kurva dosis-respon sigmoid, membedakan Potensi (EC50) dan Efikasi Maksimal (Emax). Obat diklasifikasikan sebagai Agonis Penuh, Agonis Parsial, Antagonis Kompetitif (menggeser kurva ke kanan tanpa menurunkan Emax), dan Antagonis Non-kompetitif. Indeks Terapi (TI = TD50 / ED50) mengukur margin keamanan obat.' },
    { title: 'Farmakoterapi Terarah (Targeted Therapy) & Era Kedokteran Presisi (Precision Medicine)', p1: 'Karya "${title}" diakhiri dengan eksplorasi revolusi farmakoterapi terarah: Antibodi Monoklonal (seperti Trastuzumab pada kanker payudara HER2+, Infliximab pada penyakit autoimun), Penghambat Tirosin Kinase (Imatinib pada leukemia CML), dan terapi presisi berbasis profil farmakogenomik pasien yang memaksimalkan kesembuhan klinis.' },
  ];

  ch5.forEach((sub, i) => {
    pages.push({
      pageNumber: 45 + i,
      chapterNumber: 5,
      chapterTitle: 'Bab 5: Farmakokinetik, Farmakodinamik & Terapi Terarah',
      sectionTitle: `Sub-Bab 5.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Karya "${title}" oleh ${authorName} menutup pembahasannya dengan menegaskan bahwa pemahaman terpadu antara fisiologi manusia dan farmakologi rasional adalah jembatan emas menuju kesembuhan pasien yang berlandaskan ilmu pengetahuan mutakhir dan kasih kemanusiaan.`,
        `Halaman ${45 + i} ini menyajikan panduan penyesuaian dosis obat terapeutik indeks sempit (seperti digoksin, teofilin, gentamisin), tabel interaksi obat enzim CYP450, serta paradigma kedokteran presisi masa depan.`,
        `Sivitas akademika Perguruan Tinggi bangga menyediakan literatur akademik berbobot tinggi ini untuk memperkaya cakrawala riset dan literasi sains kesehatan.`,
      ],
      callout: {
        type: 'summary',
        title: `Prinsip Farmakoterapi Kunci (Hal ${45 + i})`,
        content: `Dosis yang Tepat, Obat yang Tepat, Pasien yang Tepat, Waktu yang Tepat, dan Rute yang Tepat (Prinsip 5T) merupakan kaidah mutlak keselamatan pasien dalam farmakoterapi klinis.`,
      },
    });
  });

  // ==========================================
  // BAGIAN PENUTUP (Hal 51 - 55)
  // ==========================================
  pages.push({
    pageNumber: 51,
    chapterNumber: 6,
    chapterTitle: 'Glosarium Fisiologi & Farmakologi Klinis',
    sectionTitle: 'Kamus Istilah Medis Baku (A - Z)',
    paragraphs: [
      `Glosarium terminologi kedokteran baku yang digunakan dalam naskah "${title}":`,
      `• Agonis: Senyawa obat yang berikatan dengan reseptor seluler dan mengaktifkannya untuk menghasilkan respon biologis maksimal.\n• Bioavailabilitas (F): Fraksi atau persentase dari dosis obat terberikan yang mencapai sirkulasi darah sistemik dalam bentuk utuh.\n• Curah Jantung (Cardiac Output): Volume darah total yang dipompa oleh ventrikel jantung kiri ke dalam aorta per satuan menit.\n• GFR (Glomerular Filtration Rate): Laju penyaringan cairan darah yang melintasi dinding kapiler glomerulus ginjal per menit.`,
      `• Homeostasis: Kondisi keseimbangan dinamis lingkungan cairan internal tubuh (milieu intérieur) yang dipertahankan melalui mekanisme umpan balik.\n• Indeks Terapi (TI): Rasio perbandingan antara dosis toksik obat terhadap dosis terapeutik efektif (TD50 / ED50).\n• RAAS: Sistem hormonal Renin-Angiotensin-Aldosteron yang mengatur tekanan darah jangka panjang dan keseimbangan cairan ginjal.\n• Waktu Paruh (t1/2): Waktu yang diperlukan agar konsentrasi obat dalam plasma darah berkurang menjadi 50% dari nilai awalnya.`,
    ],
    callout: {
      type: 'definition',
      title: 'Standar Istilah Farmakope / WHO',
      content: `Definisi disusun berdasarkan Farmakope Indonesia Edisi VI dan panduan istilah International Union of Basic and Clinical Pharmacology (IUPHAR).`,
    },
  });

  pages.push({
    pageNumber: 52,
    chapterNumber: 6,
    chapterTitle: 'Bibliografi & Daftar Pustaka Kedokteran Klinis',
    sectionTitle: 'Rujukan Literatur Fisiologi & Farmakologi Dunia',
    paragraphs: [
      `Daftar literatur rujukan ilmiah utama yang digunakan dalam penulisan naskah "${title}":`,
      `1. Hall, J. E., & Hall, M. E. (2021). Guyton and Hall Textbook of Medical Physiology (14th ed.). Elsevier.\n2. Katzung, B. G., & Vanderah, T. W. (2021). Basic & Clinical Pharmacology (15th ed.). McGraw-Hill Education.\n3. Brunton, L. L., Hilal-Dandan, R., & Knollmann, B. C. (2018). Goodman & Gilman's The Pharmacological Basis of Therapeutics (13th ed.). McGraw-Hill.\n4. Barrett, K. E., et al. (2019). Ganong's Review of Medical Physiology (26th ed.). McGraw-Hill.`,
      `5. Kusuma, N. (2023). Modulasi Hemodinamika Renal dan Terapi Terarah pada Disfungsi Endotel Kardiovaskular. Jurnal Biomedika dan Farmakoterapi Klinis Perguruan Tinggi, 8(2), 112-135.`,
      `Seluruh literatur teks rujukan di atas dapat dipelajari di Ruang Koleksi Sains Biomedik Perpustakaan Akademik.`,
    ],
  });

  pages.push({
    pageNumber: 53,
    chapterNumber: 6,
    chapterTitle: 'Indeks Subjek & Kata Kunci Kedokteran',
    sectionTitle: 'Penelusuran Lokasi Topik Fisiologi & Terapi Obat',
    paragraphs: [
      `Indeks subjek untuk mempercepat penelusuran topik naskah:`,
      `• ADME Farmakokinetik: Hal 45, 46\n• Anion Gap & AGD Asam Basa: Hal 33, 34\n• Baroreseptor Karotikus: Hal 20\n• Curah Jantung & EKG: Hal 15, 18\n• Efek Bohr (Oksihemoglobin): Hal 30\n• Enzim Sitokrom P450 (CYP3A4): Hal 47`,
      `• Fraksi Ejeksi & Frank-Starling: Hal 18\n• Homeostasis & Na+/K+-ATPase: Hal 5, 7\n• Laju Filtrasi Glomerulus (GFR): Hal 35\n• Sistem RAAS Angiotensin II: Hal 21\n• Targeted Therapy (Antibodi Monoklonal): Hal 50\n• Waktu Paruh Eliminasi (t1/2): Hal 48`,
    ],
  });

  pages.push({
    pageNumber: 54,
    chapterNumber: 6,
    chapterTitle: 'Bank Soal Ujian Komprehensif Kedokteran Klinis',
    sectionTitle: 'Uji Penguasaan Materi Fisiologi Organ & Farmakoterapi',
    paragraphs: [
      `Soal evaluasi mandiri persiapan ujian blok kedokteran, uji kompetensi dokter, atau farmasi klinis di lingkungan perguruan tinggi:`,
      `SOAL 1 (Kardiovaskular): Seorang pasien berusia 58 tahun dengan hipertensi tahap 2 dan diabetes melitus tipe 2 diresepkan obat golongan ACE Inhibitor (Ramipril). Jelaskan mekanisme fisiologis molekuler bagaimana penghambatan sintesis Angiotensin II memberikan efek nefroprotektif pada arteriol eferen ginjal!`,
      `SOAL 2 (Asam-Basa): Hasil Analisis Gas Darah seorang pasien menunjukkan: pH 7.28, PCO2 28 mmHg, dan HCO3- 14 mEq/L. Tentukan jenis gangguan asam-basa primernya dan hitung kompensasi respiratorik yang diharapkan menggunakan formula Winters!`,
      `SOAL 3 (Renal): Jelaskan bagaimana diuretik jerat Henle (Furosemid) menghambat kotransporter NKCC2 di pars asendens tebal ansa Henle dan mengapa obat ini memicu peningkatan ekskresi kalium (hipokalemia)!`,
      `SOAL 4 (Farmakokinetik): Diberikan obat X dengan volume distribusi Vd = 40 L dan klirens eliminasi CL = 2 L/jam. Hitung waktu paruh eliminasi (t1/2) obat dan tentukan dosis muatan (loading dose) yang diperlukan untuk mencapai target konsentrasi plasma 15 mg/L!`,
    ],
    callout: {
      type: 'exercise',
      title: 'Pedoman Penilaian Ujian',
      content: `Kriteria penilaian meliputi ketepatan integrasi fisiologi dan patologi (35%), kebenaran perhitungan farmakokinetik/gas darah (35%), dan rasionalitas pilihan terapi obat (30%).`,
    },
  });

  pages.push({
    pageNumber: 55,
    chapterNumber: 6,
    chapterTitle: 'Lembar Catatan Mahasiswa & Kolofon Akhir',
    sectionTitle: 'Verifikasi Sirkulasi Digital Perguruan Tinggi',
    paragraphs: [
      `Selamat! Anda telah menyelesaikan pembacaan seluruh 55 halaman naskah "${title}" karya ${authorName}.`,
      `Gunakan lembar akhir ini atau fitur catatan digital reader untuk mencatat rangkuman fisiologi dan algoritma farmakoterapi kasus klinis Anda.`,
      `Koleksi digital resmi Repositori Perpustakaan Perguruan Tinggi. Kontak layanan sirkulasi: layanan.pustaka@perguruan-tinggi.ac.id. Hak cipta dilindungi undang-undang.`,
    ],
    callout: {
      type: 'summary',
      title: 'Verifikasi Progres Baca',
      content: `Progres: 100% (55 dari 55 Halaman Terbaca). Aktivitas pembelajaran klinis terekam pada statistik sirkulasi e-library Perguruan Tinggi.`,
    },
  });

  return pages;
}
