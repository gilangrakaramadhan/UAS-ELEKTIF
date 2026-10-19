import * as XLSX from 'xlsx';
import { Book } from '../types/library';

export interface ExcelImportResult {
  success: boolean;
  importedBooks: Book[];
  errors: string[];
  totalRows: number;
}

export function downloadCatalogTemplate(): void {
  const templateData = [
    {
      'Judul Buku *': 'Pengantar Komputasi Awan & Keamanan Infrastruktur',
      'Penulis *': 'Dr. Ir. Wahyu Triyono, M.Kom.',
      'Penerbit': 'Informatika Riset Mandiri',
      'Tahun': 2024,
      'ISBN': '978-623-1122-33-4',
      'Nomor DDC': '004.6782',
      'Kategori': 'Ilmu Komputer & AI',
      'Sinopsis / Abstrak': 'Kajian komprehensif tentang arsitektur komputasi awan, virtualisasi container, orkestrasi Kubernetes, serta mitigasi ancaman siber pada lingkungan multi-tenant.',
      'Cover URL': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80',
      'Jumlah Salinan': 5,
      'Status Peminjaman (Aktif/Nonaktif)': 'Aktif',
      'Jumlah Halaman': 320,
      'Isi Teks Pembuka Bab 1': 'Komputasi awan mendefinisikan ulang cara organisasi mengelola kapasitas komputasi, penyimpanan, dan jaringan dengan elastisitas tinggi dan biaya terukur.',
    },
    {
      'Judul Buku *': 'Etika Profesi & Tanggung Jawab Sosial Pustakawan',
      'Penulis *': 'Dra. Endang Setyowati, M.Hum.',
      'Penerbit': 'Graha Ilmu Pustaka',
      'Tahun': 2023,
      'ISBN': '978-602-5432-11-9',
      'Nomor DDC': '020.92',
      'Kategori': 'Ilmu Perpustakaan',
      'Sinopsis / Abstrak': 'Analisis kode etik pustakawan Indonesia, hak kekayaan intelektual dalam repositori terbuka, dan mediasi akses informasi berkeadilan bagi civitas akademika.',
      'Cover URL': 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop&q=80',
      'Jumlah Salinan': 8,
      'Status Peminjaman (Aktif/Nonaktif)': 'Aktif',
      'Jumlah Halaman': 240,
      'Isi Teks Pembuka Bab 1': 'Pustakawan bukan sekadar penjaga gerbang informasi, melainkan fasilitator literasi kritis di tengah tsunami disinformasi digital.',
    },
  ];

  const worksheet = XLSX.utils.json_to_sheet(templateData);
  // Set column widths
  worksheet['!cols'] = [
    { wch: 35 }, // Judul
    { wch: 25 }, // Penulis
    { wch: 22 }, // Penerbit
    { wch: 8 },  // Tahun
    { wch: 18 }, // ISBN
    { wch: 12 }, // DDC
    { wch: 20 }, // Kategori
    { wch: 40 }, // Sinopsis
    { wch: 35 }, // Cover URL
    { wch: 14 }, // Salinan
    { wch: 22 }, // Status
    { wch: 14 }, // Halaman
    { wch: 45 }, // Bab 1
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Katalog_Template');
  XLSX.writeFile(workbook, 'Template_Katalog_Buku_IBM_ASMI.xlsx');
}

export function exportBooksToExcel(books: Book[]): void {
  const exportData = books.map((b) => ({
    'ID Sistem': b.id,
    'Judul Buku': b.title,
    'Penulis': b.author,
    'Penerbit': b.publisher,
    'Tahun': b.year,
    'Nomor DDC': b.ddc,
    'Kategori': b.category,
    'ISBN': b.isbn,
    'Jumlah Halaman': b.totalPages,
    'Status Sirkulasi': b.borrowable ? 'Bisa Dipinjam (Aktif)' : 'Non-aktif Sirkulasi (Hanya Baca)',
    'Total Salinan': b.totalCopies,
    'Salinan Tersedia': b.availableCopies,
    'Cover URL': b.coverUrl,
    'Sinopsis': b.synopsis,
    'Tanggal Ditambahkan': b.createdAt,
  }));

  const worksheet = XLSX.utils.json_to_sheet(exportData);
  worksheet['!cols'] = [
    { wch: 15 },
    { wch: 35 },
    { wch: 25 },
    { wch: 22 },
    { wch: 8 },
    { wch: 12 },
    { wch: 20 },
    { wch: 18 },
    { wch: 12 },
    { wch: 25 },
    { wch: 12 },
    { wch: 14 },
    { wch: 35 },
    { wch: 40 },
    { wch: 20 },
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Koleksi_Buku');
  const dateStr = new Date().toISOString().split('T')[0];
  XLSX.writeFile(workbook, `Katalog_IBM_ASMI_${dateStr}.xlsx`);
}

// Fallback academic cover generator when URL is missing or invalid
export function getFallbackCover(title: string, category: string, ddc: string): string {
  // Return an attractive SVG data URI styled like an academic library book cover
  const colors: Record<string, { bg: string; accent: string; text: string }> = {
    'Ilmu Komputer & AI': { bg: '#0f172a', accent: '#38bdf8', text: '#f8fafc' },
    'Sains & Riset': { bg: '#064e3b', accent: '#34d399', text: '#f0fdf4' },
    'Ilmu Perpustakaan': { bg: '#78350f', accent: '#f59e0b', text: '#fef3c7' },
    'Hukum & Kebijakan': { bg: '#4c1d95', accent: '#a78bfa', text: '#f5f3ff' },
    'Ekonomi & Bisnis': { bg: '#1e3a8a', accent: '#60a5fa', text: '#eff6ff' },
    'Kedokteran & Kesehatan': { bg: '#881337', accent: '#fb7185', text: '#fff1f2' },
  };

  const theme = colors[category] || { bg: '#1c1917', accent: '#d97706', text: '#fafaf9' };
  const safeTitle = title.length > 45 ? title.substring(0, 42) + '...' : title;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="600" viewBox="0 0 400 600">
    <rect width="400" height="600" fill="${theme.bg}"/>
    <rect x="20" y="20" width="360" height="560" fill="none" stroke="${theme.accent}" stroke-width="2" stroke-opacity="0.4"/>
    <rect x="26" y="26" width="348" height="548" fill="none" stroke="${theme.accent}" stroke-width="1" stroke-opacity="0.2"/>
    <circle cx="200" cy="180" r="48" fill="none" stroke="${theme.accent}" stroke-width="2" stroke-opacity="0.5"/>
    <path d="M185 180 L200 165 L215 180 L200 195 Z" fill="${theme.accent}" fill-opacity="0.6"/>
    <text x="200" y="80" text-anchor="middle" fill="${theme.accent}" font-family="serif" font-size="12" letter-spacing="3" font-weight="bold">IBM ASMI DIGITAL LIBRARY</text>
    <text x="200" y="270" text-anchor="middle" fill="${theme.text}" font-family="serif" font-size="20" font-weight="bold" width="300">${escapeXml(safeTitle)}</text>
    <text x="200" y="320" text-anchor="middle" fill="${theme.accent}" font-family="sans-serif" font-size="12" letter-spacing="2">DDC: ${escapeXml(ddc || '000')}</text>
    <text x="200" y="520" text-anchor="middle" fill="${theme.text}" font-family="sans-serif" font-size="11" opacity="0.8">${escapeXml(category)}</text>
    <line x1="160" y1="535" x2="240" y2="535" stroke="${theme.accent}" stroke-width="1" stroke-opacity="0.5"/>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function escapeXml(unsafe: string): string {
  return (unsafe || '').replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

export async function parseExcelFile(file: File): Promise<ExcelImportResult> {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const buffer = e.target?.result;
        if (!buffer) {
          resolve({ success: false, importedBooks: [], errors: ['Gagal membaca berkas.'], totalRows: 0 });
          return;
        }

        const workbook = XLSX.read(buffer, { type: 'binary' });
        const firstSheetName = workbook.SheetNames[0];
        if (!firstSheetName) {
          resolve({ success: false, importedBooks: [], errors: ['Berkas Excel kosong atau tidak memiliki lembar kerja (sheet).'], totalRows: 0 });
          return;
        }

        const worksheet = workbook.Sheets[firstSheetName];
        // Read as array of objects with raw values
        const rows: Record<string, unknown>[] = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

        if (rows.length === 0) {
          resolve({ success: false, importedBooks: [], errors: ['Lembar kerja Excel tidak memiliki data baris.'], totalRows: 0 });
          return;
        }

        const importedBooks: Book[] = [];
        const errors: string[] = [];

        rows.forEach((row, idx) => {
          const rowNum = idx + 2; // header is row 1

          // Flexible key getters
          const title = String(
            row['Judul Buku *'] ||
            row['Judul'] ||
            row['Judul Buku'] ||
            row['Title'] ||
            row['title'] ||
            ''
          ).trim();

          const author = String(
            row['Penulis *'] ||
            row['Penulis'] ||
            row['Pengarang'] ||
            row['Author'] ||
            row['author'] ||
            ''
          ).trim();

          if (!title) {
            errors.push(`Baris ${rowNum}: Judul buku kosong (wajib diisi).`);
            return;
          }

          if (!author) {
            errors.push(`Baris ${rowNum}: Penulis buku kosong (wajib diisi).`);
            return;
          }

          const publisher = String(row['Penerbit'] || row['Publisher'] || 'Penerbit Pustaka Akademia').trim();
          const year = Number(row['Tahun'] || row['Year']) || new Date().getFullYear();
          const isbn = String(row['ISBN'] || row['isbn'] || `978-602-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(10 + Math.random() * 90)}-${Math.floor(1 + Math.random() * 9)}`).trim();
          const ddc = String(row['Nomor DDC'] || row['DDC'] || row['ddc'] || '000').trim();
          const category = String(row['Kategori'] || row['Category'] || 'Karya Umum & Interdisipliner').trim();
          const synopsis = String(row['Sinopsis / Abstrak'] || row['Sinopsis'] || row['Abstrak'] || row['Synopsis'] || 'Koleksi e-book akademik berlisensi resmi perpustakaan digital.').trim();
          
          let coverUrl = String(row['Cover URL'] || row['Cover'] || row['coverUrl'] || row['cover'] || '').trim();
          if (!coverUrl || (!coverUrl.startsWith('http') && !coverUrl.startsWith('data:image'))) {
            coverUrl = getFallbackCover(title, category, ddc);
          }

          const totalCopies = Math.max(1, Number(row['Jumlah Salinan'] || row['Salinan'] || row['Copies'] || 5));
          const totalPages = Math.max(50, Number(row['Jumlah Halaman'] || row['Halaman'] || row['Pages'] || 55));

          // Status peminjaman (Aktif / Nonaktif)
          const statusStr = String(row['Status Peminjaman (Aktif/Nonaktif)'] || row['Status Peminjaman'] || row['Status Pinjam'] || row['Borrowable'] || 'Aktif').toLowerCase();
          const borrowable = !(statusStr.includes('non') || statusStr.includes('tidak') || statusStr.includes('false') || statusStr.includes('hanya baca'));

          const sampleText = String(row['Isi Teks Pembuka Bab 1'] || row['Isi Bab 1'] || row['Konten'] || '').trim();

          const bookId = `import-${Date.now()}-${idx}-${Math.random().toString(36).substring(2, 6)}`;

          const newBook: Book = {
            id: bookId,
            title,
            author,
            publisher,
            year,
            isbn,
            ddc,
            category,
            synopsis,
            coverUrl,
            totalPages,
            borrowable,
            totalCopies,
            availableCopies: totalCopies,
            language: 'Bahasa Indonesia',
            createdAt: new Date().toISOString(),
            citation: {
              apa: `${author} (${year}). ${title}. ${publisher}.`,
              ieee: `${author}, ${title}. ${publisher}, ${year}.`,
              harvard: `${author}, ${year}. ${title}. ${publisher}.`,
            },
            chapters: [
              {
                chapterNumber: 1,
                chapterTitle: 'Bab 1: Pengantar & Landasan Teoretis',
                pages: Math.min(40, Math.floor(totalPages / 3)),
                content: [
                  sampleText || `${title} mengawali kajian ini dengan membedah landasan konseptual, kerangka metodologis, dan perkembangan mutakhir dalam bidang ${category}.`,
                  'Studi literatur menunjukkan bahwa integrasi antara teori dasar dan implementasi empiris menjadi kunci dalam pemecahan permasalahan keilmuan yang semakin kompleks.',
                  'Pada sub-bab ini diuraikan pula ruang lingkup kajian, batasan analisis, serta tujuan akademis yang hendak dicapai bagi pembaca di tingkat perguruan tinggi.',
                ],
              },
              {
                chapterNumber: 2,
                chapterTitle: 'Bab 2: Analisis & Pembahasan Mendalam',
                pages: Math.min(50, Math.floor(totalPages / 2)),
                content: [
                  'Pendekatan analitis diterapkan secara terstruktur untuk mengurai fenomena dan data yang relevan dengan pokok permasalahan yang dibahas dalam monograf ini.',
                  'Melalui perbandingan sistematis terhadap berbagai studi rujukan, penulis merumuskan kerangka kerja yang aplikatif bagi mahasiswa, dosen, dan peneliti independen.',
                ],
              },
            ],
          };

          importedBooks.push(newBook);
        });

        resolve({
          success: importedBooks.length > 0,
          importedBooks,
          errors,
          totalRows: rows.length,
        });
      } catch (err) {
        resolve({
          success: false,
          importedBooks: [],
          errors: [`Kesalahan saat mengurai berkas: ${err instanceof Error ? err.message : 'Format berkas tidak valid.'}`],
          totalRows: 0,
        });
      }
    };

    reader.onerror = () => {
      resolve({
        success: false,
        importedBooks: [],
        errors: ['Gagal membaca berkas dari sistem komputer.'],
        totalRows: 0,
      });
    };

    reader.readAsBinaryString(file);
  });
}
