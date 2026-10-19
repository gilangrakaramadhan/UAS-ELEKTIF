import { Book, BookPage } from '../../types/library';

export function getAlgorithmBookPages(book: Book): BookPage[] {
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
      `Klasifikasi Desimal Dewey (DDC): ${ddc} (Analisis Algoritma & Pemrograman Komputer). Nomor ISBN: ${book.isbn}. Koleksi digital ini terdaftar dalam Repositori Digital Perpustakaan Akademik Terakreditasi.`,
      `Buku ini dirancang sebagai buku pegangan utama mata kuliah Struktur Data Lanjut dan Analisis Algoritma untuk program sarjana ilmu komputer, sistem informasi, dan teknologi informasi. Pengutipan ilmiah diwajibkan mencantumkan sitasi resmi perpustakaan.`,
    ],
    callout: {
      type: 'summary',
      title: 'Verifikasi Kurasi Departemen Ilmu Komputer',
      content: `Karya ini telah melewati telaah tim dosen komputasi akademik dan direkomendasikan untuk kurikulum komputasi modern.`,
    },
  });

  pages.push({
    pageNumber: 2,
    chapterNumber: 0,
    chapterTitle: 'Prakata Penulis & Kurator Perpustakaan',
    sectionTitle: 'Kata Pengantar: Keanggunan Efisiensi Komputasi',
    paragraphs: [
      `Puji syukur kami haturkan ke hadirat Tuhan Yang Maha Esa atas terselesaikannya naskah digital "${title}". Dalam era di mana volume data bertumbuh secara eksponensial, pemahaman mendalam tentang efisiensi waktu dan ruang bukan lagi sekadar keterampilan teknis sekunder, melainkan fondasi kelangsungan hidup rekayasa perangkat lunak modern.`,
      `Buku ini memandu mahasiswa melintasi batas pemikiran algoritmik sederhana menuju penguasaan teknik-teknik tingkat lanjut: analisis rekursif Master Theorem, struktur data pohon seimbang seperti AVL dan Red-Black Tree, optimasi kombinatorial melalui Pemrograman Dinamis, hingga algoritma graf skala besar dan teori NP-Completeness.`,
      `Kami menyampaikan apresiasi mendalam kepada Sivitas Akademika Perguruan Tinggi atas komitmennya dalam memfasilitasi riset komputasi berstandar internasional melalui platform perpustakaan digital ini.`,
    ],
    callout: {
      type: 'discussion',
      title: 'Amanat Akademik Penulis',
      content: `Pelajarilah algoritma bukan hanya untuk lulus ujian, melainkan untuk melatih ketajaman berpikir logis dalam menyelesaikan masalah kompleks di dunia nyata.`,
    },
  });

  pages.push({
    pageNumber: 3,
    chapterNumber: 0,
    chapterTitle: 'Pedoman Pembacaan & Silabus Mata Kuliah',
    sectionTitle: 'Panduan Telaah Struktur Data & Algoritma Tingkat Lanjut',
    paragraphs: [
      `Materi dalam buku ini disusun secara bertahap dalam 5 bab utama dengan alokasi total 55 halaman aktif e-book. Setiap bab dilengkapi dengan pembuktian matematis, pseudocode terstruktur, analisis kompleksitas asimtotik, dan implementasi studi kasus nyata.`,
      `Capaian Pembelajaran Lulusan (CPL) yang ditargetkan meliputi: (1) Kemampuan membuktikan batas kompleksitas asimtotik algoritma rekursif; (2) Keterampilan mengimplementasikan struktur pohon seimbang dan tabel hash efisien; (3) Kemahiran memodelkan permasalahan optimasi menjadi formulasi Pemrograman Dinamis dan Aliran Graf.`,
      `Mahasiswa disarankan mempelajari notasi pseudocode dan mempraktikkan simulasi trace table untuk setiap contoh algoritma yang disajikan.`,
    ],
    callout: {
      type: 'definition',
      title: 'Prasyarat Keilmuan',
      content: `Disarankan telah menguasai dasar pemrograman prosedural (C/C++, Java, atau Python) dan matematika diskrit (teori graf dan relasi rekurensi).`,
    },
  });

  pages.push({
    pageNumber: 4,
    chapterNumber: 0,
    chapterTitle: 'Daftar Isi & Sistematika Keilmuan',
    sectionTitle: 'Peta Navigasi Bab & Topik Bahasan',
    paragraphs: [
      `Sistematika bahasan naskah "${title}":`,
      `• BAB 1: ANALISIS ASIMTOTIK & NOTASI KOMPLEKSITAS BIG-O (Halaman 5 - 14)\n• BAB 2: STRUKTUR DATA POHON SEIMBANG & HASHING LANJUTAN (Halaman 15 - 24)\n• BAB 3: PEMROGRAMAN DINAMIS & OPTIMASI KOMBINATORIAL (Halaman 25 - 34)\n• BAB 4: TEORI GRAF TINGKAT LANJUT & ALIRAN JARINGAN (Halaman 35 - 44)\n• BAB 5: TEORI KOMPLEKSITAS P VS NP & ALGORITMA APROKSIMASI (Halaman 45 - 50)`,
      `• BAGIAN PENUTUP: Glosarium Komputasi (Hal 51), Bibliografi Buku Referensi (Hal 52), Indeks Istilah Algoritmik (Hal 53), Soal Ujian Komprehensif Algoritma (Hal 54), Catatan & Kolofon (Hal 55).`,
    ],
  });

  // ==========================================
  // BAB 1: ANALISIS ASIMTOTIK & BIG-O (Hal 5 - 14)
  // ==========================================
  const ch1 = [
    { title: 'Urgensi Analisis Asimtotik dalam Komputasi Skala Besar', p1: 'Dalam rekayasa perangkat lunak modern, kecepatan eksekusi tidak dapat diukur secara andal hanya dengan mengandalkan pewaktu jam (clock time) CPU karena sangat dipengaruhi oleh spesifikasi perangkat keras dan beban sistem operasi. Analisis asimtotik menyediakan kerangka matematis invarian untuk mengukur pertumbuhan jumlah operasi elementer seiring meningkatnya ukuran masukan n.' },
    { title: 'Definisi Formal Notasi Big-O (Batas Atas)', p1: 'Notasi Big-O merepresentasikan batas atas asimtotik (asymptotic upper bound). Secara formal, fungsi f(n) = O(g(n)) jika dan hanya jika terdapat dua konstanta positif c > 0 dan n0 >= 1 sedemikian hingga untuk setiap n >= n0 berlaku ketidaksamaan: 0 <= f(n) <= c * g(n).' },
    { title: 'Notasi Big-Omega (Batas Bawah) dan Big-Theta (Batas Ketat)', p1: 'Jika Big-O menentukan batas kinerja terburuk (worst-case ceiling), maka Notasi Big-Omega Omega(g(n)) mendefinisikan batas bawah asimtotik (asymptotic lower bound). Apabila suatu algoritma memiliki batas atas dan batas bawah yang konvergen pada laju pertumbuhan yang sama, algoritma tersebut dinyatakan memiliki batas ketat Big-Theta Theta(g(n)).' },
    { title: 'Hierarki Pertumbuhan Fungsi: Dari O(1) ke O(2^n)', p1: 'Kita mengklasifikasikan efisiensi algoritma ke dalam hierarki baku: O(1) konstan, O(log n) logaritmik, O(n) linier, O(n log n) linier-ritmik, O(n^2) kuadratik, O(n^3) kubik, hingga O(2^n) eksponensial dan O(n!) faktorial. Transisi dari O(n^2) ke O(n log n) adalah lompatan revolusioner yang memungkinkan pemrosesan miliaran data dalam hitungan detik.' },
    { title: 'Relasi Rekurensi & Analisis Divide and Conquer', p1: 'Algoritma yang menerapkan paradigma Divide and Conquer, seperti Merge Sort dan Quicksort, memecah masalah berukuran n menjadi beberapa sub-masalah berukuran n/b. Waktu eksekusinya dirumuskan dalam persamaan relasi rekurensi: T(n) = a*T(n/b) + f(n), di mana a adalah jumlah sub-masalah dan f(n) adalah biaya pembagian dan penggabungan.' },
    { title: 'Teorema Master (The Master Theorem) & Pembuktian 3 Kasus', p1: 'Teorema Master menyediakan rumus cepat untuk menyelesaikan relasi rekurensi T(n) = a*T(n/b) + Theta(n^c). Dengan membandingkan nilai n^log_b(a) terhadap f(n), kita membedakan tiga kasus utama: kasus dominasi daun (Case 1), kasus keseimbangan sempurna (Case 2), dan kasus dominasi akar (Case 3).' },
    { title: 'Metode Pohon Rekursi & Metode Substitusi Induktif', p1: 'Ketika kondisi Teorema Master tidak terpenuhi (misalnya sub-masalah tidak terbagi secara simetris seperti pada rekurensi Fibonacci T(n) = T(n-1) + T(n-2)), peneliti menggunakan metode pohon rekursi untuk menghitung jumlahan biaya per kedalaman tingkat, dilanjutkan dengan pembuktian matematis formal menggunakan induksi matematika (metode substitusi).' },
    { title: 'Analisis Amortisasi: Metode Agregat, Akuntansi & Potensial', p1: 'Analisis amortisasi digunakan ketika serangkaian operasi melibatkan operasi mahal yang jarang terjadi namun diimbangi oleh mayoritas operasi murah. Kasus klasik adalah penambahan elemen pada Larik Dinamis (Dynamic Array). Kita membahas tiga teknik analisis amortisasi: Metode Agregat, Metode Akuntansi (Accounting Method), dan Metode Potensial (Potential Function).' },
    { title: 'Analisis Kompleksitas Ruang Memori (Space Complexity) & Stack Frame', p1: 'Efisiensi memori sama pentingnya dengan efisiensi waktu, terutama pada sistem embedded dan komputasi awan. Bab ini mengkaji kedalaman tumpukan pemanggilan rekursif (call stack recursion depth), overhead pointer pada struktur rantai, serta konsep in-place algorithm yang mempertahankan pemakaian memori tambahan pada O(1).' },
    { title: 'Batas Bawah Teoretis Masalah Pengurutan Omega(n log n)', p1: 'Melalui model pohon keputusan (decision tree model), kita membuktikan secara matematis bahwa algoritma pengurutan berbasis perbandingan (comparison-based sorting) mustahil memiliki kompleksitas waktu kasus terburuk lebih cepat daripada Omega(n log n). Algoritma linear seperti Counting Sort dan Radix Sort hanya mungkin bekerja jika asumsi non-komparatif dipenuhi.' },
  ];

  ch1.forEach((sub, i) => {
    pages.push({
      pageNumber: 5 + i,
      chapterNumber: 1,
      chapterTitle: 'Bab 1: Analisis Asimtotik & Notasi Kompleksitas Big-O',
      sectionTitle: `Sub-Bab 1.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Dalam naskah "${title}", ${authorName} menekankan bahwa pemahaman terhadap perilaku asimtotik adalah pembeda utama antara seorang pemrogram kasual dengan seorang insinyur perangkat lunak profesional. Kesalahan estimasi kompleksitas pada dataset skala produksi dapat melumpuhkan seluruh kluster server basis data.`,
        `Kajian pada halaman ${5 + i} ini menyajikan penurunan rumus formal langkah-demi-langkah, dilengkapi tabel ringkasan perbandingan dan contoh pembuktian aljabar yang dapat diverifikasi secara mandiri oleh mahasiswa.`,
        `Sebagai standar akademik di lingkungan perguruan tinggi, mahasiswa diwajibkan menuliskan spesifikasi kompleksitas waktu (time) dan memori (space) pada setiap fungsi algoritmik yang dirancang dalam proyek laboratorium komputasi.`,
      ],
      callout: {
        type: i % 2 === 0 ? 'formula' : 'definition',
        title: `Prinsip Asimtotik Kunci (Hal ${5 + i})`,
        content: `Evaluasi rekurensi T(n) = a*T(n/b) + O(n^d): Jika d > log_b(a) maka T(n) = O(n^d); jika d = log_b(a) maka T(n) = O(n^d log n); jika d < log_b(a) maka T(n) = O(n^(log_b(a))).`,
      },
    });
  });

  // ==========================================
  // BAB 2: POHON SEIMBANG & HASHING (Hal 15 - 24)
  // ==========================================
  const ch2 = [
    { title: 'Kelemahan Degenerasi Pohon Biner & Urgensi Self-Balancing', p1: 'Pohon Pencarian Biner (BST) menawarkan operasi pencarian O(log n) pada kasus terbaik. Namun jika urutan penyisipan kunci terurut secara monotonik, pohon mengalami degenerasi menjadi senarai berantai (linked list) dengan kompleksitas jatuh ke O(n). Struktur data self-balancing diciptakan untuk menjamin batas ketinggian pohon tetap proporsional terhadap O(log n).' },
    { title: 'Pohon AVL: Faktor Keseimbangan & Rotasi Tunggal/Ganda', p1: 'Pohon AVL (dinamai dari Adelson-Velsky dan Landis) menetapkan aturan ketat: untuk setiap simpul, selisih tinggi subpohon kiri dan kanan (balance factor) tidak boleh melebihi rentang {-1, 0, +1}. Pelanggaran diatasi melalui 4 macam rotasi pohon dalam waktu O(1): Rotasi Kiri-Kiri (LL), Kanan-Kanan (RR), Kiri-Kanan (LR), dan Kanan-Kiri (RL).' },
    { title: 'Pohon Merah-Hitam (Red-Black Tree): Invarian & Pewarnaan', p1: 'Red-Black Tree menerapkan kompromi keseimbangan yang lebih fleksibel dibanding AVL dengan melabeli simpul sebagai Merah atau Hitam. Dengan 5 aturan invariant (akar selalu hitam, daun NIL hitam, simpul merah tidak boleh memiliki anak merah, dan jumlah simpul hitam dari akar ke daun NIL selalu seragam), lintasan terpanjang tidak akan melebihi 2x lintasan terpendek.' },
    { title: 'B-Tree & B+ Tree untuk Penyimpanan Basis Data Skala Gigabyte', p1: 'Ketika data terlalu masif untuk ditampung dalam RAM, struktur pohon harus dioptimalkan untuk meminimalkan I/O operasi disk. B-Tree dan B+ Tree memperluas percabangan (fan-out) hingga memiliki ratusan anak per simpul, menjaga kedalaman pohon hanya 3 hingga 4 tingkat untuk jutaan rekaman, menjadikannya standar baku mesin penyimpanan MySQL InnoDB dan PostgreSQL.' },
    { title: 'Treap (Tree + Heap) & Skip List: Keseimbangan Probabilistik', p1: 'Struktur data probabilistik menawarkan kemudahan implementasi tanpa kerumitan rotasi deterministik yang rumit. Treap menggabungkan properti BST pada nilai kunci dan properti Min-Heap pada prioritas acak. Sementara Skip List memanfaatkan struktur senarai berantai bertingkat dengan tautan cepat ekspres.' },
    { title: 'Fungsi Hash Kriptografis vs Non-Kriptografis (MurmurHash, CityHash)', p1: 'Dalam tabel hash performa tinggi, efisiensi fungsi hash diukur dari kecepatan komputasi dan distribusi seragam guna meminimalkan probabilitas tabrakan (hash collision). Kita membedakan fungsi hash kriptografis lambat (SHA-256) dengan fungsi hash berorientasi throughput tinggi seperti MurmurHash3 dan xxHash.' },
    { title: 'Resolusi Kolisi Lanjutan: Robin Hood Hashing & Cuckoo Hashing', p1: 'Metode pengalamatan terbuka (open addressing) tradisional seperti linear probing kerap memicu fenomena clustering. Cuckoo Hashing menyelesaikan kolisi dengan menggunakan dua fungsi hash dan dua tabel, di mana kunci baru dapat menggusur kunci lama ke lokasi alternatif, menjamin waktu pencarian kasus terburuk O(1).' },
    { title: 'Struktur Data Bit: Bloom Filter & Count-Min Sketch', p1: 'Struktur data probabilistik berbasis bit menghemat memori hingga 99% ketika toleransi sedikit kesalahan diperbolehkan. Bloom Filter memungkinkan pengujian keanggotaan elemen dengan jaminan nol false negative, banyak digunakan pada sistem perutean URL mesin pencari dan basis data NoSQL Apache Cassandra.' },
    { title: 'Trie & Suffix Tree untuk Pemrosesan String Berkecepatan Tinggi', p1: 'Pencarian awalan kata (autocomplete) dan pencarian kecocokan pola DNA membutuhkan struktur data yang efisien terhadap panjang string bukan jumlah string. Struktur data Trie, Radix Tree, dan Suffix Tree memfasilitasi penelusuran leksikografis dalam tempo O(k) di mana k adalah panjang pola.' },
    { title: 'Uji Komparasi Kinerja Struktur Data pada Sistem Terdistribusi', p1: 'Bab ini menutup bahasan pohon dan hash dengan menyajikan tabel tolok ukur (benchmarking) empiris mengenai konsumsi memori, latensi baca (read latency), dan throughput tulis (write throughput) pada arsitektur perangkat keras modern x86-64 dan ARM64.' },
  ];

  ch2.forEach((sub, i) => {
    pages.push({
      pageNumber: 15 + i,
      chapterNumber: 2,
      chapterTitle: 'Bab 2: Struktur Data Pohon Seimbang & Hashing Lanjutan',
      sectionTitle: `Sub-Bab 2.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Analisis mendalam oleh ${authorName} dalam "${title}" menunjukkan bahwa pemilihan struktur data internal yang tepat berkontribusi lebih besar terhadap performa sistem daripada sekadar optimasi kode tingkat rendah.`,
        `Pada halaman ${15 + i}, pembaca disajikan diagram pohon visual dan algoritma rotasi beranotasi lengkap untuk mempermudah pemahaman proses rekonstruksi struktur penyeimbangan.`,
        `Keterampilan ini diuji secara ketat dalam praktikum rekayasa algoritma Perguruan Tinggi guna melatih mahasiswa membangun struktur indeks berkecepatan tinggi yang bebas memory leak.`,
      ],
      callout: {
        type: 'case_study',
        title: `Studi Kasus Implementasi (Hal ${15 + i})`,
        content: `Penggantian struktur BST konvensional dengan Red-Black Tree pada pengindeksan data terbukti memangkas waktu pencarian dari 450 ms menjadi kurang dari 1.2 ms pada dataset 5 juta entri.`,
      },
    });
  });

  // ==========================================
  // BAB 3: PEMROGRAMAN DINAMIS (Hal 25 - 34)
  // ==========================================
  const ch3 = [
    { title: 'Prinsip Substruktur Optimal & Overlapping Subproblems', p1: 'Pemrograman Dinamis (Dynamic Programming) bukan berarti pemrograman dalam arti sintaksis bahasa komputer, melainkan teknik optimasi matematis tabel. Dua syarat esensial DP adalah: Substruktur Optimal (solusi masalah utama tersusun dari solusi optimal sub-masalahnya) dan Sub-masalah Tumpang Tindih (overlapping subproblems).' },
    { title: 'Top-Down Memoization vs Bottom-Up Tabulation', p1: 'Pendekatan Top-Down mempertahankan struktur rekursif alami dan menyimpan hasil komputasi pada tabel memoization (menghindari tumpukan kalkulasi ulang). Sebaliknya, pendekatan Bottom-Up Tabulation mengisi tabel secara iteratif dari basis kasus terkecil ke atas, mengeliminasi risiko call stack overflow.' },
    { title: 'Masalah Klasik 0/1 Knapsack & Pola Ekstensinya', p1: 'Diberikan tas dengan kapasitas bobot W dan himpunan n barang yang masing-masing memiliki bobot w_i dan nilai v_i. Kita menurunkan relasi rekursif DP[i, w] = max(DP[i-1, w], DP[i-1, w - w_i] + v_i) dan membuktikan kompleksitas pseudo-polinomial O(n*W) serta optimasi ruang larik 1-dimensi.' },
    { title: 'Longest Common Subsequence (LCS) & Algoritma Diff File', p1: 'Algoritma pencarian urutan terpanjang yang sama antar dua string membentuk dasar operasional sistem pengontrol versi Git (perintah git diff) dan penjajaran sekuens DNA biokomputasi. Kita membedakan LCS dengan Longest Common Substring menggunakan matriks dua dimensi.' },
    { title: 'Matrix Chain Multiplication & Pola Interval DP', p1: 'Perkalian rantai matriks A1 x A2 x ... x An menghasilkan hasil perkalian yang sama berapapun urutan tanda kurung yang dipasang, namun jumlah operasi perkalian skalar elementer dapat berselisih ribuan kali lipat. Interval DP mencari konfigurasi kurung optimal dalam waktu O(n^3).' },
    { title: 'Shortest Path Serbaguna: Algoritma Floyd-Warshall O(V^3)', p1: 'Mencari jarak terpendek antara seluruh pasangan simpul (all-pairs shortest paths) pada graf berarah dengan bobot sisi positif maupun negatif. Prinsip DP mengevaluasi simpul perantara k secara bertahap: dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]).' },
    { title: 'Pemrograman Dinamis pada Pohon (Tree DP)', p1: 'Ketika struktur graf bebas dari siklus (seperti pada struktur hierarkis organisasi atau topologi jaringan pohon), masalah Maximum Independent Set dan Diameter Pohon dapat diselesaikan secara elegan dalam waktu linear O(V) melalui traversal Post-Order DFS berorientasi DP.' },
    { title: 'Optimasi DP Lanjutan: Convex Hull Trick & Divide and Conquer DP', p1: 'Pada permasalahan skala industri dengan jutaan status, kompleksitas O(n^2) DP seringkali masih terlalu lambat. Teknik Convex Hull Trick (CHT) memanfaatkan properti garis lurus y = mx + c untuk mereduksi kompleksitas pencarian transisi dari O(n) menjadi O(log n) atau amortized O(1).' },
    { title: 'Pola Bitmask DP untuk Permasalahan Traveling Salesperson (TSP)', p1: 'Permasalahan TSP mencari rute terpendek mengunjungi seluruh kota tepat satu kali. Pendekatan brute force membutuhkan waktu O(n!). Dengan Bitmask DP (Held-Karp Algorithm), status subset kota dikodekan ke dalam representasi biner integer, memangkas waktu menjadi O(n^2 * 2^n).' },
    { title: 'Strategi Pengenalan Pola Permasalahan DP bagi Mahasiswa', p1: 'Bab 3 disimpulkan dengan kerangka metodologis praktis: 5 langkah identifikasi DP (definisi state, basis kasus, relasi transisi, urutan komputasi, dan rekonstruksi solusi optimal).' },
  ];

  ch3.forEach((sub, i) => {
    pages.push({
      pageNumber: 25 + i,
      chapterNumber: 3,
      chapterTitle: 'Bab 3: Pemrograman Dinamis & Optimasi Kombinatorial',
      sectionTitle: `Sub-Bab 3.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Dalam penjelasan "${title}", ${authorName} menepis anggapan bahwa Pemrograman Dinamis adalah materi yang sulit dipahami. Kunci utamanya adalah ketelitian merumuskan definisi "state" dan invariant matematis sebelum menyentuh baris kode.`,
        `Halaman ${25 + i} ini menyajikan tabel transisi status interaktif lengkap dengan penelusuran pointer kembali (backtracking) untuk merekonstruksi elemen-elemen yang menghasilkan nilai maksimum atau minimum.`,
        `Keahlian ini menjadi fondasi analitis utama bagi mahasiswa program sarjana dalam mengikuti kompetisi pemrograman kompetitif nasional maupun uji kompetensi sertifikasi rekayasa perangkat lunak internasional.`,
      ],
      callout: {
        type: 'formula',
        title: `Relasi Rekursi Formal (Hal ${25 + i})`,
        content: `Formulasi DP: State(i, j) = min/max { Transition(State(i-1, k)) + Cost(k, j) }, dengan kondisi batas State(0, *) terdefinisi tegas.`,
      },
    });
  });

  // ==========================================
  // BAB 4: ALGORITMA GRAF & JARINGAN (Hal 35 - 44)
  // ==========================================
  const ch4 = [
    { title: 'Representasi Graf Skala Masif: Matriks Adjasensi vs Daftar Adjasensi', p1: 'Graf adalah model universal untuk merepresentasikan relasi jaringan sosial, perutean transportasi, dependensi paket perangkat lunak, dan topologi internet. Kita membedakan efisiensi ruang antara Matriks Adjasensi O(V^2) dan Daftar Adjasensi O(V + E) serta format Compressed Sparse Row (CSR).' },
    { title: 'Algoritma Dijkstra & Pencarian Jalur Heuristik A*', p1: 'Dijkstra menyelesaikan masalah lintasan terpendek sumber tunggal (single-source shortest path) dengan bobot sisi non-negatif menggunakan antrean prioritas (Binary Heap / Fibonacci Heap). Algoritma A* menambahkan fungsi heuristik h(n) yang admissible dan konsisten untuk mengarahkan pencarian langsung ke simpul tujuan.' },
    { title: 'Algoritma Bellman-Ford & Deteksi Siklus Berbobot Negatif', p1: 'Ketika graf memuat bobot negatif (misalnya nilai tukar mata uang dalam arbitrase pasar valuta asing), Dijkstra gagal memberikan hasil benar. Bellman-Ford melakukan relaksasi seluruh sisi sebanyak V-1 kali dan mampu mendeteksi keberadaan siklus berbobot negatif (negative weight cycle).' },
    { title: 'Pohon Rentang Minimum (MST): Kruskal vs Prim & Disjoint Set Union (DSU)', p1: 'Membangun jaringan transmisi kabel berbiaya terendah yang menghubungkan seluruh kota dimodelkan sebagai Minimum Spanning Tree. Algoritma Kruskal memproses sisi terurut menggunakan struktur data Union-Find (DSU) dengan optimasi Path Compression dan Rank Heuristic.' },
    { title: 'Komponen Terhubung Kuat (SCC): Algoritma Tarjan & Kosaraju', p1: 'Dalam graf berarah, Komponen Terhubung Kuat mengelompokkan simpul-simpul yang saling dapat dicapai satu sama lain. Algoritma Tarjan menemukan seluruh SCC hanya dalam satu kali penelusuran DFS mendalam melalui nilai low-link dan penelusuran tumpukan simpul aktif.' },
    { title: 'Pengurutan Topologis (Topological Sort) & Deteksi Siklus', p1: 'Pengurutan topologis pada Graf Asiklik Berarah (DAG) menentukan urutan eksekusi tugas yang memiliki dependensi prasyarat (seperti kompilasi paket software atau silabus mata kuliah). Kita mengulas Algoritma Kahn berbasis derajat masuk (in-degree) dan pendekatan DFS.' },
    { title: 'Aliran Jaringan Maksimum: Teorema Max-Flow Min-Cut & Ford-Fulkerson', p1: 'Teorema Aliran Maksimum dan Pemotongan Minimum membuktikan bahwa jumlah aliran maksimum yang dapat dikirim dari simpul sumber (source) ke simpul muara (sink) tepat sama dengan kapasitas minimum potongan yang memisahkan sumber dan muara pada graf residu.' },
    { title: 'Algoritma Dinic & Push-Relabel untuk Aliran Skala Industri', p1: 'Algoritma Edmonds-Karp O(V*E^2) dipercepat secara signifikan oleh Algoritma Dinic yang memanfaatkan graf bertingkat (level graph) dan pencarian blocking flow dalam waktu O(V^2 * E), serta paradigma lokal Push-Relabel untuk graf sangat padat.' },
    { title: 'Pencocokan Bipartit Maksimum (Bipartite Matching) & Teorema Hall', p1: 'Permasalahan alokasi sumber daya (seperti mencocokkan pelamar kerja dengan posisi lowongan yang memenuhi kualifikasi) dimodelkan sebagai graf dua warna. Kita menurunkan solusinya melalui reduksi ke masalah aliran maksimum dan Algoritma Hopcroft-Karp O(E * sqrt(V)).' },
    { title: 'Graf Dinamis & Sistem Analisis Jaringan Masa Kini', p1: 'Bab 4 diakhiri dengan tinjauan algoritma graf dinamis (dynamic graph algorithms) yang mampu merespons penambahan atau penghapusan simpul secara real-time pada basis data graf Neo4j dan jaringan sosial skala besar.' },
  ];

  ch4.forEach((sub, i) => {
    pages.push({
      pageNumber: 35 + i,
      chapterNumber: 4,
      chapterTitle: 'Bab 4: Teori Graf Tingkat Lanjut & Aliran Jaringan',
      sectionTitle: `Sub-Bab 4.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Kekuatan buku "${title}" terlihat pada pembahasan detail mengenai implementasi struktur data antrean prioritas dan graf residu yang menjamin efisiensi eksekusi algoritma di lingkungan komputasi riil.`,
        `Halaman ${35 + i} ini menyediakan pseudocode lengkap yang telah teruji secara modular, dilengkapi penjelasan invariant dan pembuktian terminasi algoritma.`,
        `Dalam konteks kurikulum Perguruan Tinggi, penguasaan materi graf ini menjadi bekal fundamental mahasiswa dalam merancang sistem perutean logistik, topologi jaringan komputer, dan algoritma rekomendasi media sosial.`,
      ],
      callout: {
        type: 'definition',
        title: `Konsep Graf Kunci (Hal ${35 + i})`,
        content: `Relaksasi sisi (u, v) dengan bobot w: Jika dist[u] + w < dist[v] maka perbarui dist[v] = dist[u] + w dan tandai pred[v] = u.`,
      },
    });
  });

  // ==========================================
  // BAB 5: P VS NP & APROKSIMASI (Hal 45 - 50)
  // ==========================================
  const ch5 = [
    { title: 'Batasan Teoretis Komputasi: Masalah Keputusan & Mesin Turing', p1: 'Apakah setiap permasalahan komputasi dapat diselesaikan secara efisien oleh komputer? Bab pamungkas ini membawa pembaca ke ranah teoretis tertinggi ilmu komputer: Teori Kompleksitas Komputasi. Kita mendefinisikan model formal Mesin Turing Deterministik dan Non-Deterministik serta representasi bahasa formal.' },
    { title: 'Kelas Kompleksitas P dan NP: Verifikasi vs Penemuan Solusi', p1: 'Kelas P (Polynomial Time) memuat seluruh masalah keputusan yang dapat diselesaikan dalam waktu O(n^k) oleh Mesin Turing deterministik. Kelas NP (Nondeterministic Polynomial Time) memuat masalah yang sertifikat solusinya dapat diverifikasi dalam waktu polinomial. Pertanyaan apakah P = NP tetap menjadi teka-teki matematika terbesar abad ini.' },
    { title: 'Reduksi Polinomial & Pembuktian NP-Completeness (Teorema Cook-Levin)', p1: 'Masalah dinyatakan NP-Complete jika masalah tersebut berada dalam NP dan setiap masalah lain dalam NP dapat direduksi secara polinomial ke masalah tersebut. Berdasarkan Teorema Cook-Levin, masalah Boolean Satisfiability (SAT / 3-SAT) terbukti menjadi masalah NP-Complete pertama dalam sejarah sains komputer.' },
    { title: 'Katalog Masalah NP-Complete Klasik: 3-SAT, Vertex Cover, TSP', p1: 'Kita mengkaji reduksi Karp yang membuktikan bahwa masalah-masalah praktis seperti Traveling Salesperson Problem (TSP), Subset Sum, Graph Coloring, Set Cover, dan Knapsack (versi keputusan) tergolong intractably hard sehingga pencarian solusi eksak secara brute force mustahil dilakukan untuk n berukuran besar.' },
    { title: 'Algoritma Aproksimasi Bergaransi & Skema PTAS', p1: 'Ketika solusi optimal eksak mustahil dicapai dalam waktu polinomial, insinyur perangkat lunak menggunakan Algoritma Aproksimasi yang menjamin solusi dalam faktor batas tertentu (misalnya faktor rasio 2 untuk Vertex Cover). Kita juga membedakan Polynomial-Time Approximation Schemes (PTAS) dan Fully PTAS (FPTAS).' },
    { title: 'Metaheuristik & Sintesis Penutup Desain Algoritma', p1: 'Untuk permasalahan industri berskala ribuan variabel, metode metaheuristik seperti Simulated Annealing, Algoritma Genetika, dan Tabu Search menjadi instrumen praktis yang andal. Penulis merangkum filosofi perancangan algoritma: ketepatan memahami batas masalah, pemilihan struktur data yang hemat, dan keberanian menerapkan kompromi aproksimasi.' },
  ];

  ch5.forEach((sub, i) => {
    pages.push({
      pageNumber: 45 + i,
      chapterNumber: 5,
      chapterTitle: 'Bab 5: Teori Kompleksitas P vs NP & Algoritma Aproksimasi',
      sectionTitle: `Sub-Bab 5.${i + 1}: ${sub.title}`,
      paragraphs: [
        sub.p1,
        `Karya "${title}" oleh ${authorName} menutup pembahasannya dengan pesan mendalam bahwa keindahan sains komputer terletak pada kesadaran batas komputasi dan seni merancang kompromi rekayasa yang cerdas.`,
        `Halaman ${45 + i} ini membekali mahasiswa tingkat sarjana dan pascasarjana dengan wawasan teoretis murni yang menghubungkan logika matematika, rekayasa perangkat lunak, dan kecerdasan komputasional.`,
        `Kami berharap karya ini memantik semangat sivitas akademika Perguruan Tinggi untuk terus melahirkan kontribusi riset ilmu komputer yang diakui di kancah internasional.`,
      ],
      callout: {
        type: 'summary',
        title: `Intisari Bab 5 (Hal ${45 + i})`,
        content: `Mengenali bahwa suatu masalah adalah NP-Hard membebaskan insinyur dari kesia-siaan mencari algoritma polinomial eksak, mengarahkan fokus ke perancangan aproksimasi atau heuristik yang realistis.`,
      },
    });
  });

  // ==========================================
  // BAGIAN PENUTUP (Hal 51 - 55)
  // ==========================================
  pages.push({
    pageNumber: 51,
    chapterNumber: 6,
    chapterTitle: 'Glosarium Komputasi & Struktur Data',
    sectionTitle: 'Kamus Istilah Algoritmik Baku (A - Z)',
    paragraphs: [
      `Glosarium istilah baku yang digunakan dalam naskah "${title}":`,
      `• Asimtotik: Analisis perilaku laju pertumbuhan fungsi matematis ketika ukuran masukan mendekati batas tak hingga.\n• Amortisasi: Perhitungan rata-rata waktu eksekusi operasi per unit dalam suatu urutan operasi terpanjang.\n• Balance Factor: Selisih ketinggian antara subpohon kiri dan subpohon kanan pada simpul pohon biner (struktur AVL).\n• Cuckoo Hashing: Teknik penanganan kolisi tabel hash dengan dua fungsi pemetaan yang menjamin pencarian O(1).`,
      `• Divide and Conquer: Paradigma pemecahan masalah dengan membagi kasus besar menjadi sub-masalah independen berukuran seimbang.\n• Dynamic Programming: Teknik optimasi penyelesaian masalah melalui penyimpanan solusi sub-masalah tumpang tindih.\n• Heuristik Admissible: Fungsi estimasi jarak pada algoritma pencarian yang tidak pernah melebih-lebihkan biaya riil ke tujuan.`,
      `• NP-Complete: Kategori masalah keputusan paling sulit dalam kelas NP yang menjadi tolak ukur batas komputabilitas polinomial.`,
    ],
    callout: {
      type: 'definition',
      title: 'Standar Istilah ACM / IEEE',
      content: `Seluruh definisi mengacu pada standar terminologi Association for Computing Machinery (ACM) dan IEEE Computer Society.`,
    },
  });

  pages.push({
    pageNumber: 52,
    chapterNumber: 6,
    chapterTitle: 'Bibliografi & Daftar Pustaka Algoritma',
    sectionTitle: 'Rujukan Buku Teks Komputasi Klasik & Kontemporer',
    paragraphs: [
      `Daftar literatur rujukan ilmiah yang digunakan dalam penulisan naskah "${title}":`,
      `1. Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2022). Introduction to Algorithms (4th ed.). MIT Press.\n2. Kleinberg, J., & Tardos, E. (2014). Algorithm Design. Pearson Education.\n3. Sedgewick, R., & Wayne, K. (2011). Algorithms (4th ed.). Addison-Wesley Professional.\n4. Knuth, D. E. (2011). The Art of Computer Programming: Fundamental Algorithms (Vol. 1-3). Addison-Wesley.`,
      `5. Hartono, B. (2024). Analisis Kompleksitas Asimtotik pada Struktur Data Berarah Skala Terdistribusi. Jurnal Ilmu Komputer dan Informatika Perguruan Tinggi, 12(1), 1-18.`,
      `Seluruh rujukan di atas tersedia dan dapat diakses melalui katalog fisik maupun repositori e-book Perpustakaan Akademik.`,
    ],
  });

  pages.push({
    pageNumber: 53,
    chapterNumber: 6,
    chapterTitle: 'Indeks Subjek & Kata Kunci Terindeks',
    sectionTitle: 'Penelusuran Lokasi Topik Algoritmik',
    paragraphs: [
      `Indeks subjek untuk mempercepat pencarian topik spesifik dalam naskah ini:`,
      `• Algoritma A* (Heuristik): Hal 36\n• Algoritma Bellman-Ford: Hal 37\n• Algoritma Dijkstra: Hal 36\n• Algoritma Dinic (Max Flow): Hal 42\n• Algoritma Floyd-Warshall: Hal 30\n• Amortisasi (Metode Potensial): Hal 12`,
      `• B-Tree & B+ Tree: Hal 18\n• Bloom Filter & Cuckoo Hashing: Hal 21, 22\n• Longest Common Subsequence (LCS): Hal 28\n• Master Theorem (Teorema Master): Hal 10\n• Notasi Big-O, Omega, Theta: Hal 6, 7\n• NP-Complete & 3-SAT: Hal 47, 48\n• Pohon AVL & Rotasi: Hal 16\n• Pohon Merah-Hitam (Red-Black): Hal 17`,
    ],
  });

  pages.push({
    pageNumber: 54,
    chapterNumber: 6,
    chapterTitle: 'Bank Soal Ujian Komprehensif Algoritma',
    sectionTitle: 'Uji Penguasaan Materi Algoritma & Struktur Data',
    paragraphs: [
      `Soal evaluasi mandiri untuk persiapan ujian tengah semester, ujian akhir, atau sidang skripsi di lingkungan perguruan tinggi:`,
      `SOAL 1 (Analisis Asimtotik): Selesaikan relasi rekurensi T(n) = 4*T(n/2) + n^2 menggunakan Teorema Master. Tentukan kasus mana yang berlaku dan buktikan batas ketat Theta-nya!`,
      `SOAL 2 (Pohon Seimbang): Gambarkan langkah-demi-langkah rotasi pohon AVL ketika urutan kunci {10, 20, 30, 40, 50, 25} disisipkan ke dalam pohon yang awalnya kosong!`,
      `SOAL 3 (Pemrograman Dinamis): Rancang relasi rekursif untuk masalah 0/1 Knapsack berkapasitas W dengan n barang. Jelaskan mengapa algoritma greedy gagal memberikan solusi optimal untuk masalah ini!`,
      `SOAL 4 (Graf & Aliran): Jelaskan Teorema Max-Flow Min-Cut dan tunjukkan bagaimana masalah pencocokan bipartit maksimum dapat direduksi ke masalah aliran maksimum!`,
    ],
    callout: {
      type: 'exercise',
      title: 'Pedoman Penilaian Ujian',
      content: `Kriteria penilaian meliputi ketepatan formulasi matematis (30%), kebenaran pseudocode (30%), dan analisis batas kompleksitas waktu/memori (40%).`,
    },
  });

  pages.push({
    pageNumber: 55,
    chapterNumber: 6,
    chapterTitle: 'Lembar Catatan Mahasiswa & Kolofon Akhir',
    sectionTitle: 'Verifikasi Sirkulasi Digital Perguruan Tinggi',
    paragraphs: [
      `Selamat! Anda telah menuntaskan pembacaan seluruh 55 halaman buku teks "${title}" karya ${authorName}.`,
      `Gunakan lembar akhir ini atau fitur "Tambah Catatan" pada sidebar reader untuk mencatat ide implementasi algoritma dan analisis kompleksitas untuk proyek perangkat lunak Anda.`,
      `Koleksi digital resmi Perguruan Tinggi. Layanan sirkulasi e-book dan verifikasi pustaka: layanan.pustaka@perguruan-tinggi.ac.id. Hak cipta dilindungi undang-undang.`,
    ],
    callout: {
      type: 'summary',
      title: 'Verifikasi Progres Baca',
      content: `Progres: 100% (55 dari 55 Halaman Terbaca). Data aktivitas baca tersinkronisasi dengan akun perpustakaan mahasiswa.`,
    },
  });

  return pages;
}
