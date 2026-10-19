import { Book, BookPage } from '../../types/library';

export function getAIBookPages(book: Book): BookPage[] {
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
      `Penulis: ${authorName}. Diterbitkan secara resmi oleh ${pub}, tahun publikasi ${year}.`,
      `Klasifikasi Desimal Dewey (DDC): ${ddc} (Kecerdasan Buatan & Pembelajaran Mesin). Nomor ISBN: ${book.isbn}. Terdaftar dalam Repositori Digital Perpustakaan Akademik Terakreditasi.`,
      `Buku pegangan komprehensif bagi mahasiswa program sarjana dan pascasarjana yang mendalami fondasi matematika pembelajaran mesin, jaringan saraf tiruan mendalam (deep learning), arsitektur transformer, serta evaluasi etika kecerdasan buatan.`,
    ],
    callout: {
      type: 'summary',
      title: 'Verifikasi Kurasi Departemen Ilmu Komputer & AI',
      content: `Koleksi berstandar tinggi yang mengintegrasikan teori matematis murni dengan implementasi arsitektur AI modern.`,
    },
  });

  pages.push({
    pageNumber: 2,
    chapterNumber: 0,
    chapterTitle: 'Prakata Penulis & Kurator Perpustakaan',
    sectionTitle: 'Kata Pengantar: Revolusi Pembelajaran Mesin & Kecerdasan Artifisial',
    paragraphs: [
      `Perkembangan pesat kecerdasan buatan dalam satu dekade terakhir telah mengubah lanskap sains dan industri secara fundamental. Namun, banyak praktisi yang hanya memahami AI sebagai "kotak hitam" (black box) tanpa memahami prinsip matematika dan algoritma yang bekerja di dalamnya.`,
      `Buku "${title}" hadir untuk menjembatani kesenjangan tersebut. Kami mengajak mahasiswa menelusuri bagaimana konsep aljabar linier, kalkulus multivariat, dan teori probabilitas berpadu dalam melahirkan model prediktif yang akurat, arsitektur self-attention transformer yang revolusioner, serta teknik alignment model masa depan.`,
      `Terima kasih kepada sivitas akademika Perguruan Tinggi yang senantiasa memfasilitasi riset kecerdasan buatan yang berdaya guna bagi kemajuan bangsa.`,
    ],
    callout: {
      type: 'discussion',
      title: 'Amanat Akademik Penulis',
      content: `Pelajarilah matematika di balik AI dengan sungguh-sungguh. Memahami gradien dan ruang vektor adalah kunci utama merancang inovasi model yang orisinal.`,
    },
  });

  pages.push({
    pageNumber: 3,
    chapterNumber: 0,
    chapterTitle: 'Pedoman Pembacaan & Silabus Mata Kuliah AI',
    sectionTitle: 'Panduan Telaah Sistem Kecerdasan Buatan',
    paragraphs: [
      `Buku teks ini disusun dalam 5 bab utama dengan alokasi total 55 halaman aktif e-book. Setiap halaman memuat formulasi matematika, visualisasi representasi vektor, algoritma penyesuaian bobot, dan telaah etika.`,
      `Capaian Pembelajaran Lulusan (CPL) meliputi: (1) Penguasaan representasi matriks dan optimasi gradien dalam pembelajaran mesin; (2) Kemampuan menganalisis cara kerja jaringan saraf tiruan dan mekanisme transformer; (3) Keterampilan mengukur kinerja model dan mendeteksi bias algoritmik.`,
      `Mahasiswa disarankan mempelajari notasi tensor dan memahami penurunan parsial gradien pada bab-bab awal sebelum melangkah ke deep learning.`,
    ],
    callout: {
      type: 'definition',
      title: 'Prasyarat Keilmuan',
      content: `Kalkulus diferensial, aljabar matriks, dasar probabilitas & statistik, serta bahasa pemrograman Python (PyTorch/TensorFlow).`,
    },
  });

  pages.push({
    pageNumber: 4,
    chapterNumber: 0,
    chapterTitle: 'Daftar Isi & Sistematika Keilmuan',
    sectionTitle: 'Peta Navigasi Bab & Topik Bahasan AI',
    paragraphs: [
      `Sistematika bahasan naskah "${title}":`,
      `• BAB 1: FONDASI MATEMATIKA PEMBELAJARAN MESIN (Halaman 5 - 14)\n• BAB 2: MODEL PEMBELAJARAN TERARAH & TANPA PENGAWAS (Halaman 15 - 24)\n• BAB 3: JARINGAN SARAF TIRUAN MENDALAM & OPTIMASI (Halaman 25 - 34)\n• BAB 4: ARSITEKTUR TRANSFORMER & GENERATIVE AI (Halaman 35 - 44)\n• BAB 5: EVALUASI KINERJA, ETIKA AI & TATA KELOLA AGI (Halaman 45 - 50)`,
      `• BAGIAN PENUTUP: Glosarium AI & Machine Learning (Hal 51), Bibliografi Ilmiah (Hal 52), Indeks Istilah AI (Hal 53), Soal Ujian Komprehensif AI (Hal 54), Catatan & Kolofon (Hal 55).`,
    ],
  });

  // ==========================================
  // BAB 1: FONDASI MATEMATIKA AI (Hal 5 - 14)
  // ==========================================
  const ch1 = [
    { title: 'Ruang Vektor, Perkalian Titik & Kemiripan Kosinus (Cosine Similarity)', p1: 'Dalam pembelajaran mesin, setiap data teks, citra, atau suara diubah menjadi representasi numerik dalam ruang vektor berdimensi tinggi R^d. Perkalian titik (dot product) antar dua vektor fitur mengukur kedekatan semantik melalui perhitungan sudut kemiripan kosinus: cos(theta) = (A . B) / (||A|| * ||B||).' },
    { title: 'Aljabar Matriks & Dekomposisi Nilai Singular (SVD)', p1: 'Operasi matriks adalah tulang punggung komputasi AI. Melalui Dekomposisi Nilai Singular (SVD), matriks data X berukuran m x n dipecah menjadi perkalian tiga matriks ortogonal U, Sigma, dan V^T, memfasilitasi kompresi informasi laten dan reduksi dimensionalitas dengan meminimalkan kehilangan varians.' },
    { title: 'Analisis Komponen Utama (PCA) & Nilai Eigen (Eigenvalues)', p1: 'Principal Component Analysis (PCA) mencari arah sumbu koordinat baru yang memaksimalkan varians data tanpa pengawasan (unsupervised). Sumbu utama diperoleh dengan menghitung vektor eigen dari matriks kovarians data, mereduksi ratusan fitur menjadi beberapa dimensi representatif.' },
    { title: 'Kalkulus Multivariat: Vektor Gradien & Matriks Jacobian / Hessian', p1: 'Optimasi model bergantung pada turunan parsial terhadap parameter bobot w. Vektor gradien menunjuk ke arah peningkatan nilai fungsi tercuram, Matriks Jacobian memetakan transformasi vektor ke vektor, sedangkan Matriks Hessian memuat turunan parsial orde kedua untuk menganalisis kelengkungan (curvature) permukaan kerugian.' },
    { title: 'Teorema Bayes, Inferensi Bayesian & Maximum Likelihood (MLE)', p1: 'Prinsip ketidakpastian dalam pembelajaran mesin dimodelkan melalui Teorema Bayes: P(theta|D) = [P(D|theta) * P(theta)] / P(D). Kita membedakan pendekatan Maximum Likelihood Estimation (MLE) yang murni berdasarkan data latih dengan Maximum A Posteriori (MAP) yang memperhitungkan distribusi prior keyakinan awal.' },
    { title: 'Fungsi Kerugian (Loss Functions): MSE, MAE & Cross-Entropy Loss', p1: 'Fungsi kerugian mengukur seberapa jauh estimasi model dari nilai kebenaran dasar (ground truth). Pada masalah regresi digunakan Mean Squared Error (MSE), sedangkan pada masalah klasifikasi probabilitas diskrit digunakan Cross-Entropy Loss L = - sum(y_i * log(p_i)) yang diturunkan dari konsep divergensi Kullback-Leibler.' },
    { title: 'Teorema Batas Pusat & Distribusi Probabilitas Normal Multivariat', p1: 'Banyak algoritma AI mengasumsikan gangguan kebisingan (noise) berdistribusi Gaussian. Teorema Batas Pusat membuktikan bahwa rata-rata dari sejumlah besar variabel acak independen akan berkonvergensi menuju distribusi normal, memungkinkan estimasi interval kepercayaan statistik yang valid.' },
    { title: 'Kondisi Karush-Kuhn-Tucker (KKT) dalam Optimasi Terkendala', p1: 'Pada model seperti Support Vector Machine, kita ingin meminimalkan norma bobot di bawah kendala pemisahan margin data. Metode pengali Lagrange (Lagrange Multipliers) dan kondisi KKT menyediakan kondisi matematis perlu dan cukup untuk menemukan titik ekstrem global.' },
    { title: 'Informasi Teoretis Shannon: Entropi & Informasi Timbal Balik', p1: 'Claude Shannon merumuskan konsep Entropi H(X) = - sum(p(x) * log2(p(x))) sebagai ukuran ketidakpastian atau kandungan informasi. Konsep Information Gain berbasis entropi digunakan sebagai kriteria pemilihan pemisahan cabang pohon keputusan (ID3 dan C4.5).' },
    { title: 'Sintesis Matematika sebagai Fondasi Algoritma Cerdas', p1: 'Bab 1 ditutup dengan menghubungkan bagaimana setiap konsep matematika di atas bekerja serempak saat sebuah jaringan komputer melakukan pelatihan (training): data diproyeksikan ke ruang vektor, kerugian dihitung melalui Cross-Entropy, dan gradien diturunkan melalui aturan rantai (chain rule).' },
  ];

  ch1.forEach((sub, i) => {
    pages.push({
      pageNumber: 5 + i,
      chapterNumber: 1,
      chapterTitle: 'Bab 1: Fondasi Matematika Pembelajaran Mesin',
      sectionTitle: `Sub-Bab 1.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Dalam naskah "${title}", para penulis (${authorName}) menegaskan bahwa tanpa fondasi matematika yang kokoh, upaya pengembangan kecerdasan buatan hanya akan berujung pada percobaan acak tanpa landasan teoretis yang terukur.`,
        `Halaman ${5 + i} ini menyajikan penurunan rumus formal dan intuisi geometris yang membantu mahasiswa membayangkan operasi tensor multidimensi di dalam memori komputasi grafis (GPU).`,
        `Materi ini menjadi standar wajib dalam silabus Kecerdasan Buatan di Perguruan Tinggi guna menyiapkan mahasiswa bersaing di level riset global.`,
      ],
      callout: {
        type: i % 2 === 0 ? 'formula' : 'definition',
        title: `Persamaan Matematika Kunci (Hal ${5 + i})`,
        content: `Aturan Rantai Multivariat: dL/dw_i = sum_j (dL/da_j * da_j/dz_j * dz_j/dw_i), membentuk basis komputasi backpropagation modern.`,
      },
    });
  });

  // ==========================================
  // BAB 2: SUPERVISED & UNSUPERVISED (Hal 15 - 24)
  // ==========================================
  const ch2 = [
    { title: 'Taksonomi Paradigma Pembelajaran: Supervised vs Unsupervised vs RL', p1: 'Machine Learning dibagi menjadi tiga paradigma utama: Pembelajaran Terarah (Supervised Learning) dengan pasangan input-label, Pembelajaran Tanpa Pengawas (Unsupervised Learning) untuk menemukan struktur tersembunyi tanpa label, dan Pembelajaran Penguatan (Reinforcement Learning) berbasis umpan balik reward.' },
    { title: 'Regresi Logistik & Pemetaan Sigmoid untuk Klasifikasi Biner', p1: 'Regresi logistik memetakan kombinasi linier fitur z = w^T * x + b ke rentang probabilitas [0, 1] menggunakan fungsi aktivasi Sigmoid: sigma(z) = 1 / (1 + e^-z). Batas keputusan (decision boundary) memisahkan dua kelas dengan ambang batas klasifikasi standar 0.5.' },
    { title: 'Support Vector Machine (SVM) & Kernel Trick Non-Linier', p1: 'SVM mencari bidang pemisah (separating hyperplane) yang memaksimalkan jarak margin antara dua kelas terluar (support vectors). Ketika data tidak dapat dipisahkan secara linier, fungsi kernel (seperti RBF Gaussian Kernel) memproyeksikan data ke ruang fitur berdimensi lebih tinggi tanpa perlu menghitung koordinat titik baru secara eksplisit.' },
    { title: 'Pohon Keputusan (Decision Tree) & Kriteria Ketidakmurnian Gini / Entropi', p1: 'Pohon keputusan membagi ruang fitur secara ortogonal menggunakan aturan biner if-then-else. Kita mengevaluasi kemurnian pemisahan menggunakan Gini Impurity = 1 - sum(p_i^2) atau Information Gain berbasis Entropi, serta teknik pemangkasan pohon (tree pruning) untuk mencegah overfitting.' },
    { title: 'Ensemble Learning: Bagging & Algoritma Random Forest', p1: 'Kombinasi beberapa model lemah (weak learners) mampu menghasilkan model agregat yang tangguh. Random Forest menerapkan bootstrap aggregating (bagging) dengan membangun ratusan pohon keputusan acak pada subset data dan fitur yang berbeda, memangkas varians tanpa menaikkan bias.' },
    { title: 'Boosting: Dari AdaBoost ke Gradient Boosting Machine (XGBoost, LightGBM)', p1: 'Berbeda dengan Bagging yang melatih pohon secara paralel, Boosting melatih pohon secara sekuensial di mana setiap pohon baru berfokus memperbaiki kesalahan residual pohon sebelumnya. XGBoost mengoptimalkan pendekatan ini dengan regularisasi orde kedua Taylor expansion.' },
    { title: 'Klasterisasi K-Means, K-Means++ & Metrik Silhouette Score', p1: 'K-Means mengelompokkan data ke dalam k klaster melalui pergeseran titik pusat (centroid) secara iteratif berdasarkan jarak Euclidean terkecil. K-Means++ mempercepat konvergensi dengan memilih titik awal secara probabilistik tersebar, dan kualitas klaster diukur dengan koefisien Silhouette [-1, 1].' },
    { title: 'Klasterisasi Hierarkis & Algoritma Berbasis Kepadatan DBSCAN', p1: 'DBSCAN mengatasi kelemahan K-Means yang hanya mampu mengenali klaster berbentuk bola. Dengan mendefinisikan parameter radius epsilon dan jumlah tetangga minimum MinPts, DBSCAN mampu mendeteksi klaster berbentuk sembarang dan mengisolasi titik noise.' },
    { title: 'Visualisasi Dimensi Tinggi: t-SNE & UMAP', p1: 'Untuk memvisualisasikan embedding data berdimensi ratusan ke dalam grafik 2D atau 3D, teknik t-Distributed Stochastic Neighbor Embedding (t-SNE) dan Uniform Manifold Approximation and Projection (UMAP) mempertahankan struktur ketetanggaan lokal secara probabilistik.' },
    { title: 'Dilema Bias-Variance & Validasi Silang K-Fold (Cross-Validation)', p1: 'Tujuan utama pembelajaran mesin adalah kemampuan generalisasi pada data yang belum pernah dilihat. Kita menganalisis trade-off antara bias tinggi (underfitting) dan varians tinggi (overfitting), serta menerapkan teknik K-Fold Cross-Validation untuk memastikan kestabilan model.' },
  ];

  ch2.forEach((sub, i) => {
    pages.push({
      pageNumber: 15 + i,
      chapterNumber: 2,
      chapterTitle: 'Bab 2: Model Pembelajaran Terarah & Tanpa Pengawas',
      sectionTitle: `Sub-Bab 2.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Dalam ulasan "${title}", ${authorName} menggarisbawahi bahwa tidak semua masalah kecerdasan buatan membutuhkan model deep learning yang rumit. Model pembelajaran terarah klasik seperti Random Forest atau XGBoost seringkali lebih unggul pada data tabular industri karena kemudahan interpretasi dan kecepatan komputasinya.`,
        `Halaman ${15 + i} ini memandu mahasiswa menyusun alur rekayasa fitur (feature engineering), normalisasi data (Z-score StandardScaler), dan penyetelan hiperparameter (GridSearchCV).`,
        `Latihan praktis pada bab ini menjadi fondasi proyek analisis prediktif yang dikembangkan di laboratorium multimedia dan bisnis cerdas Perguruan Tinggi.`,
      ],
      callout: {
        type: 'case_study',
        title: `Studi Kasus Algoritma (Hal ${15 + i})`,
        content: `Penerapan model ensemble XGBoost pada deteksi transaksi perbankan anomali meningkatkan recall hingga 94.7% dengan false-positive rate di bawah 0.3%.`,
      },
    });
  });

  // ==========================================
  // BAB 3: DEEP LEARNING & OPTIMASI (Hal 25 - 34)
  // ==========================================
  const ch3 = [
    { title: 'Dari Perseptron Sederhana ke Multi-Layer Perceptron (MLP)', p1: 'Perseptron tunggal karya Frank Rosenblatt memiliki batasan mendasar: ketidakmampuan menyelesaikan fungsi logika XOR yang tidak terpisahkan secara linier (Minsky & Papert, 1969). Penambahan lapisan tersembunyi (hidden layers) dan fungsi aktivasi non-linier melahirkan Multi-Layer Perceptron yang mampu memodelkan fungsi matematika kontinu sembarang (Universal Approximation Theorem).' },
    { title: 'Fungsi Aktivasi Non-Linier: Sigmoid, Tanh, ReLU & GELU', p1: 'Fungsi aktivasi memperkenalkan sifat non-linieritas ke dalam jaringan. Kita membandingkan Sigmoid dan Tanh yang rentan mengalami fenomena kejenuhan gradien (vanishing gradient), Rectified Linear Unit (ReLU: f(x) = max(0, x)) yang mempercepat komputasi, hingga Leaky ReLU dan Gaussian Error Linear Unit (GELU) yang digunakan pada transformer modern.' },
    { title: 'Algoritma Propagasi Balik (Backpropagation) & Graf Komputasi', p1: 'Backpropagation adalah penerapan efisien aturan rantai kalkulus pada graf komputasi terarah. Selama propagasi maju (forward pass), aktivasi dan nilai tengah disimpan di memori; selama propagasi balik (backward pass), gradien kesalahan dialirkan kembali dari lapisan keluaran ke lapisan masukan untuk memperbarui bobot tensor.' },
    { title: 'Algoritma Optimasi Stokastik: SGD, Momentum, RMSProp & AdamW', p1: 'Stochastic Gradient Descent (SGD) memperbarui bobot berdasarkan subset mini-batch data untuk menghindari jebakan lokal minimum. Adam (Adaptive Moment Estimation) menggabungkan estimasi momen pertama (arah kecepatan) dan momen kedua (penyesuaian laju pembelajaran adaptif). Varian AdamW memperbaiki peluruhan bobot (weight decay) untuk mencegah overfitting.' },
    { title: 'Normalisasi Internal: Batch Normalization & Layer Normalization', p1: 'Perubahan distribusi masukan pada lapisan dalam selama pelatihan dikenal sebagai internal covariate shift. Batch Normalization menormalkan fitur sepanjang dimensi batch, sedangkan Layer Normalization menormalkan sepanjang dimensi fitur per sampel, menjadikannya arsitektur wajib pada model deret waktu dan transformer.' },
    { title: 'Teknik Regularisasi: Dropout, L1/L2 Weight Decay & Data Augmentation', p1: 'Untuk mencegah jaringan saraf menghafal data latih (overfitting), teknik Dropout menonaktifkan sebagian neuron secara acak dengan probabilitas p selama masa pelatihan. Ditambah regularisasi L2 (Ridge) yang menekan magnitudo bobot dan augmentasi data sintetis untuk memperkaya variasi sampel.' },
    { title: 'Jaringan Saraf Konvolusional (CNN) & Arsitektur ResNet Residual', p1: 'CNN memanfaatkan operasi konvolusi spasial 2D untuk mendeteksi fitur lokal hierarkis (tepi, tekstur, bentuk objek). Ketika jaringan menjadi sangat dalam (ratusan layer), degradasi akurasi diatasi oleh Arsitektur ResNet (He et al., 2015) melalui sambungan pintas (residual skip connections: F(x) + x) yang memungkinkan gradien mengalir tanpa hambatan.' },
    { title: 'Jaringan Saraf Berulang (RNN), LSTM & Gated Recurrent Unit (GRU)', p1: 'Untuk memproses data sekuensial deret waktu dan teks, RNN mempertahankan status tersembunyi (hidden state) yang diperbarui di setiap langkah waktu t. Long Short-Term Memory (LSTM) mengatasi vanishing gradient melalui tiga gerbang regulasi (forget gate, input gate, output gate) yang mengendalikan aliran informasi jangka panjang.' },
    { title: 'Inisialisasi Bobot: Inisialisasi Xavier (Glorot) & He (Kaiming)', p1: 'Inisialisasi bobot awal yang sembarangan dapat menyebabkan ledakan gradien (exploding gradient) atau gradien mati seketika. Inisialisasi Xavier menyesuaikan varians bobot dengan jumlah neuron masukan dan keluaran untuk aktivasi simetris, sedangkan Inisialisasi He dioptimalkan khusus untuk aktivasi keluarga ReLU.' },
    { title: 'Perangkat Keras AI: Akselerasi Tensor Core, GPU & Format Presisi FP16/BF16', p1: 'Pelatihan deep learning modern bergantung pada perangkat keras GPU dan TPU yang mengeksekusi operasi perkalian matriks secara masif paralel. Kita mengkaji teknik mixed-precision training yang menggunakan representasi floating-point 16-bit (FP16/BF16) untuk melipatgandakan kecepatan komputasi tanpa mengurangi akurasi model.' },
  ];

  ch3.forEach((sub, i) => {
    pages.push({
      pageNumber: 25 + i,
      chapterNumber: 3,
      chapterTitle: 'Bab 3: Jaringan Saraf Tiruan Mendalam & Optimasi',
      sectionTitle: `Sub-Bab 3.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Dalam bab ini, para penulis "${title}" (${authorName}) membongkar mitos kompleksitas deep learning dengan menyajikan analisis matematis jernih tentang bagaimana triliunan operasi perkalian matriks dan penurunan gradien dapat dikelola secara stabil.`,
        `Halaman ${25 + i} ini dilengkapi diagram arsitektur saraf, grafik perbandingan laju konvergensi berbagai optimizer, serta panduan praktis mengatasi anomali NaN loss saat melatih model skala besar.`,
        `Keterampilan melatih arsitektur deep learning ini merupakan salah satu kompetensi unggulan mahasiswa komputasi dan multimedia di lingkungan perguruan tinggi.`,
      ],
      callout: {
        type: 'formula',
        title: `Persamaan Pembaruan Bobot (Hal ${25 + i})`,
        content: `Optimasi Adam: m_t = beta1*m_(t-1) + (1-beta1)*g_t; v_t = beta2*v_(t-1) + (1-beta2)*g_t^2; w_(t+1) = w_t - eta * (m_t / (sqrt(v_t) + eps)).`,
      },
    });
  });

  // ==========================================
  // BAB 4: TRANSFORMER & GENERATIVE AI (Hal 35 - 44)
  // ==========================================
  const ch4 = [
    { title: 'Keterbatasan RNN dan Kelahiran Arsitektur Attention Is All You Need', p1: 'Meskipun LSTM efektif untuk sekuens pendek, sifat komputasinya yang sekuensial per langkah waktu mencegah paralelisasi penuh pada GPU dan kesulitan menangkap ketergantungan jarak jauh (long-range dependencies). Pada tahun 2017, tim Google mempublikasikan makalah mani "Attention Is All You Need" yang mengeliminasi rekurensi sepenuhnya demi mekanisme perhatian murni.' },
    { title: 'Mekanisme Scaled Dot-Product Attention: Query, Key & Value', p1: 'Transformer menganalogikan pemrosesan bahasa seperti penelusuran basis data informasi: vektor masukan diproyeksikan menjadi tiga matriks: Query (Q), Key (K), dan Value (V). Matriks skor perhatian dihitung melalui formula: Attention(Q, K, V) = softmax((Q * K^T) / sqrt(d_k)) * V, di mana pembagian dengan akar dimensi d_k mencegah gradien jenuh pada wilayah ekstrem softmax.' },
    { title: 'Multi-Head Attention & Proyeksi Sub-Ruang Representasional', p1: 'Alih-alih hanya menghitung satu matriks perhatian tunggal, Multi-Head Attention memproyeksikan Q, K, dan V ke dalam h ruang representasi yang berbeda secara simultan. Hal ini memungkinkan satu head memfokuskan perhatian pada relasi gramatikal subjek-predikat, sementara head lain menangkap rujukan kata ganti atau nuansa semantik temporal.' },
    { title: 'Positional Encoding: Menjaga Urutan Kata Tanpa Struktur Rekursi', p1: 'Karena mekanisme perhatian beroperasi secara invarian terhadap permutasi urutan kata, informasi posisi urutan harus disuntikkan secara eksplisit. Transformer menggunakan Positional Encoding berbasis fungsi trigonometri sinus dan kosinus pada frekuensi berbeda atau representasi posisi terpelajari (learnable embeddings) dan RoPE (Rotary Position Embeddings).' },
    { title: 'Arsitektur Enkoder vs Dekoder: Eksplorasi BERT dan Generasi GPT', p1: 'Arsitektur transformer dapat dikonfigurasi menjadi tiga ragam: Enkoder-saja (seperti BERT) dengan masked language modeling bidirectional untuk pemahaman teks; Dekoder-saja (seperti keluarga GPT) dengan causal masked attention autoregresif untuk generasi teks runtun; serta Enkoder-Dekoder (T5, BART) untuk tugas terjemahan antar bahasa.' },
    { title: 'Tokenisasi Teks: Byte-Pair Encoding (BPE) & WordPiece', p1: 'Sebelum teks dapat diproses oleh transformer, kalimat harus dipecah menjadi token-token sub-kata menggunakan algoritma kompresi seperti Byte-Pair Encoding (BPE). BPE mengombinasikan pasangan karakter yang paling sering muncul secara berulang, menyeimbangkan ukuran kosakata (vocabulary size) dan kemampuan menangani kata baru (out-of-vocabulary).' },
    { title: 'Model Difusi (Diffusion Models) untuk Generasi Gambar Multimodal', p1: 'Dalam ranah generasi visual, Diffusion Models (seperti DALL-E dan Stable Diffusion) mengungguli Generative Adversarial Networks (GANs). Model ini dilatih membalikkan proses degradasi kebisingan Gaussian secara bertahap (reverse diffusion denoising process) yang dikondisikan oleh embedding teks dari transformer CLIP.' },
    { title: 'Fine-Tuning Efisien: Low-Rank Adaptation (LoRA) & QLoRA', p1: 'Menyesuaikan model bahasa besar (LLM) dengan miliaran parameter untuk domain spesifik membutuhkan daya komputasi raksasa. Teknik LoRA membekukan bobot asli model W_0 dan hanya melatih dekomposisi matriks berperingkat rendah delta_W = B * A (dengan r << d), memangkas kebutuhan memori hingga lebih dari 80%.' },
    { title: 'Penyelarasan Model (Alignment): RLHF & Direct Preference Optimization (DPO)', p1: 'Model dasar yang hanya dilatih memprediksi kata berikutnya belum tentu aman dan bermanfaat bagi pengguna. Melalui Reinforcement Learning from Human Feedback (RLHF) dan algoritma DPO terkini, model diselaraskan agar bersikap membantu (helpful), jujur (honest), dan tidak membahayakan (harmless).' },
    { title: 'Arsitektur Retrieval-Augmented Generation (RAG) & Vektor Database', p1: 'Untuk mengatasi keterbatasan pengetahuan statis model dan mencegah halusinasi fakta, arsitektur RAG menghubungkan LLM dengan sistem basis data vektor (seperti Pinecone, Milvus, Qdrant). Pertanyaan pengguna dicari kecocokannya melalui cosine similarity terhadap dokumen internal sebelum disintesis menjadi jawaban yang kredibel.' },
  ];

  ch4.forEach((sub, i) => {
    pages.push({
      pageNumber: 35 + i,
      chapterNumber: 4,
      chapterTitle: 'Bab 4: Arsitektur Transformer & Generative AI',
      sectionTitle: `Sub-Bab 4.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Dalam buku "${title}", ${authorName} menguraikan anatomi detail transformer hingga ke tingkat operasi perkalian tensor, mengungkap rahasia mengapa model ini mampu memahami konteks bahasa manusia dengan kedalaman yang belum pernah dicapai sebelumnya.`,
        `Halaman ${35 + i} ini menyajikan diagram blok transformer orisinal, visualisasi attention heatmap, serta panduan arsitektur implementasi RAG untuk kebutuhan korporasi dan institusi pendidikan.`,
        `Mahasiswa program sarjana mempelajari arsitektur ini secara intensif untuk mempersiapkan diri menjadi insinyur kecerdasan buatan dan peneliti multimedia generasi baru.`,
      ],
      callout: {
        type: 'definition',
        title: `Konsep Transformer Kunci (Hal ${35 + i})`,
        content: `Matriks Self-Attention: A = softmax((Q * K^T) / sqrt(d_k)). Setiap baris matriks A merepresentasikan distribusi bobot perhatian dari satu kata terhadap seluruh kata lainnya dalam kalimat.`,
      },
    });
  });

  // ==========================================
  // BAB 5: EVALUASI, ETIKA & AGI (Hal 45 - 50)
  // ==========================================
  const ch5 = [
    { title: 'Metrik Evaluasi Komprehensif: Presisi, Recall, F1-Score & ROC-AUC', p1: 'Mengukur keandalan model AI tidak cukup hanya dengan nilai akurasi sederhana, terutama pada dataset dengan ketidakseimbangan kelas ekstrem (imbalanced data). Kita mengkaji Matriks Konfusi (Confusion Matrix), menghitung Presisi, Recall, skor harmonik F1 = 2 * (P * R) / (P + R), serta kurva Receiver Operating Characteristic (ROC) dan Area Under Curve (AUC).' },
    { title: 'Bias Algoritmik & Keadilan Sosial (Fairness in AI)', p1: 'Model kecerdasan buatan mewarisi prasangka dan bias yang terkandung dalam data historis manusia. Kita menganalisis metrik keadilan algoritmik (Demographic Parity, Equal Opportunity) dan teknik de-biasing data untuk mencegah diskriminasi otomatis dalam sistem seleksi kerja, pemeringkatan kredit, dan layanan publik.' },
    { title: 'Explainable AI (XAI): Membuka Kotak Hitam dengan SHAP & LIME', p1: 'Dalam domain berisiko tinggi seperti diagnosis medis dan hukum finansial, prediksi AI harus dapat dipertanggungjawabkan dan dijelaskan alasannya. Teknik SHAP (Shapley Additive Explanations) berbasis teori permainan kooperatif dan LIME (Local Interpretable Model-agnostic Explanations) memberikan atribusi kontribusi fitur transparan.' },
    { title: 'Ketahanan Model & Serangan Musuh (Adversarial Attacks)', p1: 'Model pembelajaran mesin rentan disesatkan oleh gangguan derau tak kasat mata (adversarial perturbation) seperti serangan FGSM (Fast Gradient Sign Method) yang dapat membuat model klasifikasi salah mengidentifikasi rambu lalu lintas secara fatal. Kita membahas teknik pelatihan bertahan (adversarial training) dan sertifikasi kekokohan model.' },
    { title: 'Tata Kelola AI Global & Kerangka Keamanan Artificial General Intelligence (AGI)', p1: 'Menuju era model otonom dan prospek AGI (kecerdasan buatan tingkat umum), komunitas internasional merumuskan kerangka tata kelola seperti EU AI Act dan panduan etika UNESCO. Kita mengkaji isu penyelarasan tujuan (goal alignment), keamanan otonomi sistem, dan hak kekayaan intelektual naskah buatan mesin.' },
    { title: 'Sintesis Penutup & Arah Penelitian Masa Depan AI', p1: 'Karya "${title}" diakhiri dengan perenungan mendalam: kecerdasan buatan adalah salah satu penemuan terbesar peradaban manusia, namun keberhasilannya tidak ditentukan oleh seberapa besar jumlah parameter modelnya, melainkan seberapa bijak manusia memanfaatkannya untuk memecahkan krisis iklim, kesehatan, dan pendidikan berkeadilan.' },
  ];

  ch5.forEach((sub, i) => {
    pages.push({
      pageNumber: 45 + i,
      chapterNumber: 5,
      chapterTitle: 'Bab 5: Evaluasi Kinerja, Etika AI & Tata Kelola AGI',
      sectionTitle: `Sub-Bab 5.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Karya "${title}" oleh ${authorName} menutup pembahasannya dengan pesan tegas bahwa kecanggihan teknologi komputasi harus selalu dibarengi dengan komitmen moral dan etika kemanusiaan yang teguh.`,
        `Halaman ${45 + i} ini membekali mahasiswa dengan wawasan holistik: tidak hanya menguasai keterampilan coding model AI, tetapi juga memiliki tanggung jawab sosial dalam mengawasi dampak dari sistem cerdas yang mereka bangun.`,
        `Perguruan Tinggi berkomitmen mencetak lulusan yang menguasai teknologi mutakhir sekaligus menjunjung tinggi integritas akademik dan profesionalisme etis.`,
      ],
      callout: {
        type: 'summary',
        title: `Prinsip Etika AI Kunci (Hal ${45 + i})`,
        content: `Transparansi, akuntabilitas, dan keterpenuhan hak asasi manusia adalah tiga pilar utama yang tidak boleh dikompromikan dalam perancangan sistem kecerdasan buatan modern.`,
      },
    });
  });

  // ==========================================
  // BAGIAN PENUTUP (Hal 51 - 55)
  // ==========================================
  pages.push({
    pageNumber: 51,
    chapterNumber: 6,
    chapterTitle: 'Glosarium Kecerdasan Buatan & Machine Learning',
    sectionTitle: 'Kamus Istilah AI Baku (A - Z)',
    paragraphs: [
      `Glosarium terminologi baku yang digunakan dalam naskah "${title}":`,
      `• Backpropagation: Algoritma propagasi mundur turunan parsial untuk memperbarui bobot jaringan saraf berdasarkan aturan rantai kalkulus.\n• Cross-Entropy: Fungsi kerugian yang mengukur perbedaan antara distribusi probabilitas prediksi model dan label aktual.\n• Gradient Descent: Algoritma optimasi iteratif untuk menemukan minimum lokal dari fungsi objektif dengan menelusuri arah gradien terbalik.\n• Halusinasi (AI): Fenomena di mana model generatif menghasilkan informasi faktual keliru yang tampak meyakinkan secara gramatikal.`,
      `• Multi-Head Attention: Mekanisme transformer yang memproyeksikan fitur ke dalam beberapa sub-ruang representasi perhatian secara simultan.\n• Overfitting: Kondisi di mana model menghafal data latih secara berlebihan sehingga gagal melakukan generalisasi pada data baru.\n• RLHF: Penyetelan perilaku model bahasa melalui pembelajaran penguatan berbasis umpan balik preferensi kurator manusia.\n• Zero-Shot Learning: Kemampuan model AI menyelesaikan tugas tanpa pernah melihat contoh data latih eksplisit dari domain tersebut.`,
    ],
    callout: {
      type: 'definition',
      title: 'Standar Istilah AAAI / IEEE',
      content: `Definisi disusun sesuai panduan Association for the Advancement of Artificial Intelligence (AAAI).`,
    },
  });

  pages.push({
    pageNumber: 52,
    chapterNumber: 6,
    chapterTitle: 'Bibliografi & Daftar Pustaka AI',
    sectionTitle: 'Rujukan Literatur Ilmiah Kecerdasan Buatan',
    paragraphs: [
      `Daftar literatur rujukan ilmiah yang digunakan dalam penulisan naskah "${title}":`,
      `1. Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep Learning. MIT Press.\n2. Vaswani, A., et al. (2017). Attention Is All You Need. Advances in Neural Information Processing Systems (NeurIPS 2017).\n3. Russell, S., & Norvig, P. (2021). Artificial Intelligence: A Modern Approach (4th ed.). Pearson Education.\n4. Sutton, R. S., & Barto, A. G. (2018). Reinforcement Learning: An Introduction (2nd ed.). MIT Press.`,
      `5. Wijaya, H., & Laksmi, S. (2023). Arsitektur Transformer dan Batas Teoretis Pembelajaran Mesin. Jurnal Sistem Cerdas Nusantara, 9(2), 88-105.`,
      `Seluruh referensi di atas dapat dikaji lebih lanjut melalui repositori akademik Perguruan Tinggi.`,
    ],
  });

  pages.push({
    pageNumber: 53,
    chapterNumber: 6,
    chapterTitle: 'Indeks Subjek & Kata Kunci AI',
    sectionTitle: 'Penelusuran Lokasi Topik Pembelajaran Mesin',
    paragraphs: [
      `Indeks subjek untuk mempercepat penelusuran materi dalam naskah ini:`,
      `• AdamW Optimizer: Hal 28\n• Backpropagation: Hal 27\n• Bias-Variance Trade-off: Hal 24\n• Cross-Entropy Loss: Hal 10\n• Dekomposisi SVD: Hal 6\n• Diffusion Models: Hal 41`,
      `• Explainable AI (SHAP): Hal 47\n• F1-Score & ROC-AUC: Hal 45\n• LoRA Fine-Tuning: Hal 42\n• Multi-Head Attention: Hal 37\n• PCA (Principal Component Analysis): Hal 7\n• ResNet Skip Connection: Hal 31\n• Self-Attention Scaled Dot-Product: Hal 36\n• Support Vector Machine (SVM): Hal 17`,
    ],
  });

  pages.push({
    pageNumber: 54,
    chapterNumber: 6,
    chapterTitle: 'Bank Soal Ujian Komprehensif AI',
    sectionTitle: 'Uji Penguasaan Materi Kecerdasan Buatan Mahasiswa',
    paragraphs: [
      `Soal evaluasi mandiri persiapan ujian komprehensif atau proposal riset di lingkungan perguruan tinggi:`,
      `SOAL 1 (Fondasi Matematis): Turunkan aturan pembaruan bobot w pada regresi logistik menggunakan fungsi kerugian Binary Cross-Entropy dan fungsi aktivasi Sigmoid melalui aturan rantai kalkulus!`,
      `SOAL 2 (Arsitektur Deep Learning): Jelaskan bagaimana koneksi pintas (skip connections) pada Arsitektur ResNet mengatasi fenomena hilangnya gradien (vanishing gradient) pada jaringan sangat dalam!`,
      `SOAL 3 (Transformer): Jelaskan fungsi pembagian faktor sqrt(d_k) pada rumus Scaled Dot-Product Attention dan diskusikan dampaknya terhadap kestabilan gradien fungsi Softmax!`,
      `SOAL 4 (Etika AI): Rancang sebuah kerangka kerja audit untuk mendeteksi bias demografis pada sistem otomatisasi skrining resume pelamar kerja!`,
    ],
    callout: {
      type: 'exercise',
      title: 'Pedoman Penilaian Soal',
      content: `Evaluasi dinilai berdasarkan ketepatan pembuktian matematis (35%), kejelasan argumen arsitektur (35%), dan penalaran etika empiris (30%).`,
    },
  });

  pages.push({
    pageNumber: 55,
    chapterNumber: 6,
    chapterTitle: 'Lembar Catatan Mahasiswa & Kolofon Akhir',
    sectionTitle: 'Verifikasi Sirkulasi Digital Perguruan Tinggi',
    paragraphs: [
      `Selamat! Anda telah menyelesaikan pembacaan seluruh 55 halaman naskah "${title}" karya ${authorName}.`,
      `Gunakan lembar akhir ini atau fitur "Tambah Catatan" pada bilah samping untuk menyimpan ringkasan formula dan ide topik skripsi di bidang AI.`,
      `Dikelola secara resmi oleh Repositori E-Book Perguruan Tinggi. Kontak pustakawan: layanan.pustaka@perguruan-tinggi.ac.id. Hak cipta dilindungi undang-undang.`,
    ],
    callout: {
      type: 'summary',
      title: 'Verifikasi Progres Baca',
      content: `Progres: 100% (55 dari 55 Halaman Terbaca). Aktivitas literasi tercatat secara resmi di basis data sirkulasi perpustakaan.`,
    },
  });

  return pages;
}
