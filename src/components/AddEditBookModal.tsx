import React, { useState, useEffect } from 'react';
import { useLibrary } from '../context/LibraryContext';
import { Book, Chapter } from '../types/library';
import { getFallbackCover } from '../utils/excelHelper';
import {
  X,
  Upload,
  Image,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Layers,
  Save,
} from 'lucide-react';

interface AddEditBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  editBookData?: Book | null;
}

export const AddEditBookModal: React.FC<AddEditBookModalProps> = ({
  isOpen,
  onClose,
  editBookData,
}) => {
  const { addBook, updateBook } = useLibrary();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [isbn, setIsbn] = useState('');
  const [ddc, setDdc] = useState('005.1');
  const [category, setCategory] = useState('Ilmu Komputer & AI');
  const [synopsis, setSynopsis] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const [totalCopies, setTotalCopies] = useState<number>(5);
  const [totalPages, setTotalPages] = useState<number>(55);
  const [borrowable, setBorrowable] = useState(true);
  const [sampleContentText, setSampleContentText] = useState('');

  // Sync state if editing
  useEffect(() => {
    if (editBookData) {
      setTitle(editBookData.title);
      setAuthor(editBookData.author);
      setPublisher(editBookData.publisher);
      setYear(editBookData.year);
      setIsbn(editBookData.isbn);
      setDdc(editBookData.ddc);
      setCategory(editBookData.category);
      setSynopsis(editBookData.synopsis);
      setCoverUrl(editBookData.coverUrl);
      setTotalCopies(editBookData.totalCopies);
      setTotalPages(Math.max(50, editBookData.totalPages || 55));
      setBorrowable(editBookData.borrowable);
      setSampleContentText(editBookData.chapters?.[0]?.content?.join('\n\n') || '');
    } else {
      // Default clean form
      setTitle('');
      setAuthor('');
      setPublisher('Penerbit Pustaka Akademia');
      setYear(new Date().getFullYear());
      setIsbn(`978-623-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(10 + Math.random() * 90)}-1`);
      setDdc('005.1');
      setCategory('Ilmu Komputer & AI');
      setSynopsis('');
      setCoverUrl('');
      setTotalCopies(5);
      setTotalPages(55);
      setBorrowable(true);
      setSampleContentText('');
    }
  }, [editBookData, isOpen]);

  if (!isOpen) return null;

  // Handle local image file upload and convert to base64 DataURL
  const handleCoverFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      const dataUri = uploadEvent.target?.result as string;
      if (dataUri) {
        setCoverUrl(dataUri);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleGenerateFallbackCover = () => {
    const generated = getFallbackCover(title || 'Judul Naskah Akademik', category, ddc);
    setCoverUrl(generated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const finalCover = coverUrl || getFallbackCover(title, category, ddc);

    const paragraphs = sampleContentText.trim()
      ? sampleContentText.split('\n\n').filter(Boolean)
      : [
          `Naskah "${title}" dikurasi oleh perpustakaan akademik sebagai rujukan primer bidang ${category}.`,
          'Bab pembuka ini membahas fondasi metodologis dan analisis teoritis mendalam untuk mahasiswa dan peneliti.',
        ];

    const bookChapters: Chapter[] = [
      {
        chapterNumber: 1,
        chapterTitle: 'Bab 1: Pendahuluan & Tinjauan Teoritis',
        pages: Math.floor(totalPages / 3),
        content: paragraphs,
      },
      {
        chapterNumber: 2,
        chapterTitle: 'Bab 2: Analisis Pembahasan & Hasil Riset',
        pages: Math.floor(totalPages / 3),
        content: [
          'Pada bab lanjutan ini dikemukakan eksplorasi data empiris dan implikasi keilmuan yang diperoleh secara komparatif.',
        ],
      },
    ];

    if (editBookData) {
      const updated: Book = {
        ...editBookData,
        title,
        author,
        publisher,
        year,
        isbn,
        ddc,
        category,
        synopsis,
        coverUrl: finalCover,
        totalCopies,
        availableCopies: Math.min(totalCopies, editBookData.availableCopies),
        totalPages: Math.max(50, totalPages || 55),
        borrowable,
        chapters: bookChapters,
        citation: {
          apa: `${author} (${year}). ${title}. ${publisher}.`,
          ieee: `${author}, ${title}. ${publisher}, ${year}.`,
          harvard: `${author}, ${year}. ${title}. ${publisher}.`,
        },
      };
      updateBook(updated);
    } else {
      const newBook: Book = {
        id: `book-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        title,
        author,
        publisher,
        year,
        isbn,
        ddc,
        category,
        synopsis,
        coverUrl: finalCover,
        totalCopies,
        availableCopies: totalCopies,
        totalPages: Math.max(50, totalPages || 55),
        borrowable,
        language: 'Bahasa Indonesia',
        createdAt: new Date().toISOString(),
        chapters: bookChapters,
        citation: {
          apa: `${author} (${year}). ${title}. ${publisher}.`,
          ieee: `${author}, ${title}. ${publisher}, ${year}.`,
          harvard: `${author}, ${year}. ${title}. ${publisher}.`,
        },
      };
      addBook(newBook);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-stone-900 text-stone-100 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-400" />
            <h3 className="font-serif-scholarly font-bold text-base text-stone-100">
              {editBookData ? 'Perbarui Metadata & Cover E-Book' : 'Katalogisasi E-Book Baru'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6 flex-1 overflow-y-auto text-xs">
          {/* Cover upload & Preview Row */}
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 flex flex-col sm:flex-row items-start gap-4">
            {/* Live Cover Preview */}
            <div className="w-24 h-36 bg-stone-200 rounded-lg overflow-hidden border border-stone-300 shadow-sm shrink-0 flex items-center justify-center relative">
              {coverUrl ? (
                <img
                  src={coverUrl}
                  alt="Preview Cover"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="p-2 text-center text-stone-400 text-[10px] flex flex-col items-center">
                  <Image className="w-6 h-6 mb-1 text-stone-300" />
                  <span>Belum ada cover</span>
                </div>
              )}
            </div>

            {/* Cover Inputs */}
            <div className="flex-1 space-y-2.5 w-full">
              <div>
                <label className="block font-semibold text-stone-800 mb-1">
                  Cover E-Book (URL atau Unggah Berkas Gambar):
                </label>
                <input
                  type="text"
                  placeholder="https://images.unsplash.com/... atau tautan gambar online"
                  value={coverUrl}
                  onChange={(e) => setCoverUrl(e.target.value)}
                  className="w-full p-2 bg-white border border-stone-300 rounded text-xs focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <label className="px-3 py-1.5 rounded bg-stone-200 hover:bg-stone-300 text-stone-800 font-medium cursor-pointer transition-colors flex items-center gap-1.5">
                  <Upload className="w-3.5 h-3.5" />
                  <span>Unggah Gambar Cover dari Komputer</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleCoverFileUpload}
                    className="hidden"
                  />
                </label>

                <button
                  type="button"
                  onClick={handleGenerateFallbackCover}
                  className="px-3 py-1.5 rounded bg-amber-100 hover:bg-amber-200 text-amber-900 font-medium transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  <span>Buat Cover Desain Pustaka Otomatis</span>
                </button>
              </div>
            </div>
          </div>

          {/* Basic Bibliographic Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-stone-800 mb-1">
                Judul E-Book *:
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Contoh: Arsitektur Jaringan Komputer Modern"
                className="w-full p-2 bg-stone-50 border border-stone-300 rounded text-xs focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-stone-800 mb-1">
                Penulis / Pengarang *:
              </label>
              <input
                type="text"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Contoh: Prof. Dr. Ir. Sutrisno, M.Sc."
                className="w-full p-2 bg-stone-50 border border-stone-300 rounded text-xs focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-stone-800 mb-1">
                Penerbit:
              </label>
              <input
                type="text"
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
                placeholder="Penerbit Akademia"
                className="w-full p-2 bg-stone-50 border border-stone-300 rounded text-xs"
              />
            </div>

            <div>
              <label className="block font-semibold text-stone-800 mb-1">
                Tahun Terbit:
              </label>
              <input
                type="number"
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="w-full p-2 bg-stone-50 border border-stone-300 rounded text-xs"
              />
            </div>

            <div>
              <label className="block font-semibold text-stone-800 mb-1">
                Nomor Klasifikasi DDC (Dewey Decimal) *:
              </label>
              <input
                type="text"
                required
                value={ddc}
                onChange={(e) => setDdc(e.target.value)}
                placeholder="005.133 atau 330.01"
                className="w-full p-2 bg-stone-50 border border-stone-300 rounded text-xs font-mono font-medium"
              />
            </div>

            <div>
              <label className="block font-semibold text-stone-800 mb-1">
                Kategori Keilmuan:
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 bg-stone-50 border border-stone-300 rounded text-xs"
              >
                <option value="Ilmu Komputer & AI">Ilmu Komputer & AI</option>
                <option value="Sains & Riset">Sains & Riset</option>
                <option value="Ilmu Perpustakaan">Ilmu Perpustakaan</option>
                <option value="Hukum & Kebijakan">Hukum & Kebijakan</option>
                <option value="Ekonomi & Bisnis">Ekonomi & Bisnis</option>
                <option value="Kedokteran & Kesehatan">Kedokteran & Kesehatan</option>
                <option value="Karya Umum & Interdisipliner">Karya Umum & Interdisipliner</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-stone-800 mb-1">
                Nomor ISBN:
              </label>
              <input
                type="text"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
                className="w-full p-2 bg-stone-50 border border-stone-300 rounded text-xs font-mono"
              />
            </div>

            <div>
              <label className="block font-semibold text-stone-800 mb-1">
                Total Salinan / Lisensi Digital:
              </label>
              <input
                type="number"
                min={1}
                value={totalCopies}
                onChange={(e) => setTotalCopies(Math.max(1, Number(e.target.value)))}
                className="w-full p-2 bg-stone-50 border border-stone-300 rounded text-xs font-bold"
              />
            </div>
          </div>

          {/* Status Sirkulasi Toggle */}
          <div className="p-3.5 bg-stone-100 rounded-xl flex items-center justify-between">
            <div>
              <span className="font-bold text-stone-900 block">
                Status Peminjaman E-Book:
              </span>
              <p className="text-[11px] text-stone-500">
                {borrowable
                  ? 'Buku aktif dapat dipinjam oleh mahasiswa dengan durasi tersirkulasi.'
                  : 'Buku berstatus non-aktif sirkulasi (hanya dapat dibaca langsung daring).'}
              </p>
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={borrowable}
                onChange={(e) => setBorrowable(e.target.checked)}
                className="w-5 h-5 accent-emerald-600"
              />
              <span className="font-semibold">{borrowable ? 'Aktif' : 'Nonaktif'}</span>
            </label>
          </div>

          {/* Synopsis */}
          <div>
            <label className="block font-semibold text-stone-800 mb-1">
              Sinopsis / Abstrak Akademik:
            </label>
            <textarea
              rows={3}
              value={synopsis}
              onChange={(e) => setSynopsis(e.target.value)}
              placeholder="Deskripsi abstrak isi naskah rujukan perpustakaan..."
              className="w-full p-2 bg-stone-50 border border-stone-300 rounded text-xs focus:ring-1 focus:ring-amber-500"
            />
          </div>

          {/* Sample Chapter 1 Text for E-Book Reader */}
          <div>
            <label className="block font-semibold text-stone-800 mb-1">
              Konten Pembuka Teks E-Book (Bab 1):
            </label>
            <textarea
              rows={4}
              value={sampleContentText}
              onChange={(e) => setSampleContentText(e.target.value)}
              placeholder="Tuliskan teks paragraf bab pembuka yang dapat dibaca di reader digital (pisahkan paragraf dengan baris ganda)..."
              className="w-full p-2 bg-stone-50 border border-stone-300 rounded text-xs focus:ring-1 focus:ring-amber-500"
            />
          </div>

          {/* Footer Submit */}
          <div className="pt-4 border-t border-stone-200 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-stone-600 hover:bg-stone-200 transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold shadow-sm transition-colors flex items-center gap-1.5"
            >
              <Save className="w-4 h-4" />
              <span>{editBookData ? 'Simpan Perubahan' : 'Tambahkan ke Katalog'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
