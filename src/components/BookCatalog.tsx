import React, { useState, useMemo } from 'react';
import { useLibrary } from '../context/LibraryContext';
import { BookCard } from './BookCard';
import { Book } from '../types/library';
import { exportBooksToExcel } from '../utils/excelHelper';
import {
  Search,
  Filter,
  Plus,
  FileSpreadsheet,
  Download,
  BookOpen,
  SlidersHorizontal,
  Layers,
  ArrowUpDown,
  CheckCircle2,
  XCircle,
  HelpCircle,
} from 'lucide-react';

interface BookCatalogProps {
  onOpenAddModal: () => void;
  onOpenImportModal: () => void;
  onEditBook: (book: Book) => void;
}

export const BookCatalog: React.FC<BookCatalogProps> = ({
  onOpenAddModal,
  onOpenImportModal,
  onEditBook,
}) => {
  const { books, activeRole, circulationSettings } = useLibrary();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'borrowable' | 'non-borrowable' | 'available'>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'title' | 'ddc' | 'copies'>('newest');

  // Categories list derived dynamically plus standard defaults
  const categories = useMemo(() => {
    const set = new Set<string>();
    books.forEach((b) => set.add(b.category));
    return ['all', ...Array.from(set)];
  }, [books]);

  // Filtered and sorted books
  const filteredBooks = useMemo(() => {
    return books
      .filter((book) => {
        // Search query filter
        const query = searchQuery.toLowerCase().trim();
        const matchesQuery =
          !query ||
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query) ||
          book.isbn.toLowerCase().includes(query) ||
          book.ddc.toLowerCase().includes(query) ||
          book.synopsis.toLowerCase().includes(query);

        // Category filter
        const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;

        // Status filter
        let matchesStatus = true;
        if (statusFilter === 'borrowable') {
          matchesStatus = book.borrowable;
        } else if (statusFilter === 'non-borrowable') {
          matchesStatus = !book.borrowable;
        } else if (statusFilter === 'available') {
          matchesStatus = book.borrowable && book.availableCopies > 0;
        }

        return matchesQuery && matchesCategory && matchesStatus;
      })
      .sort((a, b) => {
        if (sortBy === 'newest') {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        }
        if (sortBy === 'title') {
          return a.title.localeCompare(b.title);
        }
        if (sortBy === 'ddc') {
          return a.ddc.localeCompare(b.ddc);
        }
        if (sortBy === 'copies') {
          return b.availableCopies - a.availableCopies;
        }
        return 0;
      });
  }, [books, searchQuery, selectedCategory, statusFilter, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Top Section: Title & Student Guidance */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono tracking-widest text-amber-800 font-semibold uppercase bg-amber-100/70 px-2 py-0.5 rounded border border-amber-200">
              Koleksi Resmi Mahasiswa
            </span>
            <span className="text-xs text-stone-500">Standar Klasifikasi DDC 23rd</span>
          </div>
          <h2 className="text-2xl font-bold font-serif-scholarly text-stone-900 tracking-tight mt-1">
            Katalog E-Book Akademik
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Menampilkan {filteredBooks.length} dari total {books.length} naskah digital berlisensi untuk dibaca dan dipinjam
          </p>
        </div>

        {/* Action Buttons: If Admin mode, show admin actions; if Student mode, show export and status */}
        <div className="flex flex-wrap items-center gap-2 self-stretch sm:self-auto">
          {activeRole === 'admin' ? (
            <>
              <button
                type="button"
                onClick={onOpenAddModal}
                className="flex-1 sm:flex-none px-3.5 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-100 text-xs font-semibold shadow-sm transition-colors flex items-center justify-center gap-1.5"
              >
                <Plus className="w-4 h-4 text-amber-400" />
                <span>Tambah Buku Manual</span>
              </button>

              <button
                type="button"
                onClick={onOpenImportModal}
                className="flex-1 sm:flex-none px-3.5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold shadow-sm transition-colors flex items-center justify-center gap-1.5"
              >
                <FileSpreadsheet className="w-4 h-4 text-emerald-200" />
                <span>Import Excel</span>
              </button>
            </>
          ) : (
            <div className="flex items-center gap-2 text-xs text-stone-600 bg-white px-3 py-1.5 rounded-lg border border-stone-200 shadow-2xs">
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span>Pilih buku untuk <strong>Baca Langsung</strong> atau <strong>Pinjam Terjadwal</strong></span>
            </div>
          )}

          <button
            type="button"
            onClick={() => exportBooksToExcel(books)}
            className="px-3 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium transition-colors flex items-center gap-1.5 border border-stone-200"
            title="Unduh seluruh daftar katalog ke format Microsoft Excel (.xlsx)"
          >
            <Download className="w-3.5 h-3.5 text-stone-600" />
            <span className="hidden sm:inline">Export Excel</span>
          </button>
        </div>
      </div>

      {/* Circulation Notification if system is inactive */}
      {!circulationSettings.systemBorrowingActive && (
        <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3 text-xs leading-relaxed">
          <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold block text-sm mb-0.5 text-amber-950">
              Pemberitahuan Layanan Sirkulasi Ditutup Sementara
            </strong>
            <p>{circulationSettings.systemClosedNotice}</p>
            <p className="mt-1 text-amber-800 font-medium">
              Catatan: Fitur baca e-book tetap dapat diakses secara penuh oleh seluruh mahasiswa.
            </p>
          </div>
        </div>
      )}

      {/* Filter & Search Bar */}
      <div className="bg-white rounded-xl border border-stone-200 p-4 shadow-sm mb-6 space-y-4">
        {/* Search Row */}
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Cari judul e-book, penulis, nomor DDC (misal: 005.1), ISBN, atau topik riset..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="flex items-center gap-1.5 text-xs text-stone-500 whitespace-nowrap">
              <ArrowUpDown className="w-3.5 h-3.5 text-stone-400" />
              <span>Urutan:</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full md:w-auto py-2 px-3 text-xs bg-stone-50 border border-stone-200 rounded-lg text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 font-medium"
            >
              <option value="newest">Koleksi Terbaru</option>
              <option value="title">Judul (A-Z)</option>
              <option value="ddc">Nomor DDC (Klasifikasi)</option>
              <option value="copies">Salinan Terbanyak</option>
            </select>
          </div>
        </div>

        {/* Status Filter Segmented Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-stone-100">
          <div className="flex flex-wrap items-center gap-1 bg-stone-100 p-1 rounded-lg text-xs">
            <button
              type="button"
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                statusFilter === 'all'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Semua Status ({books.length})
            </button>
            <button
              type="button"
              onClick={() => setStatusFilter('borrowable')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                statusFilter === 'borrowable'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Bisa Dipinjam ({books.filter((b) => b.borrowable).length})
            </button>
            <button
              type="button"
              onClick={() => setStatusFilter('available')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                statusFilter === 'available'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Salinan Tersedia ({books.filter((b) => b.borrowable && b.availableCopies > 0).length})
            </button>
            <button
              type="button"
              onClick={() => setStatusFilter('non-borrowable')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                statusFilter === 'non-borrowable'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Hanya Baca ({books.filter((b) => !b.borrowable).length})
            </button>
          </div>

          {/* Categories Horizontal Scroll / Selector */}
          <div className="flex items-center gap-1 overflow-x-auto max-w-full pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 text-xs rounded-md whitespace-nowrap transition-colors font-medium ${
                  selectedCategory === cat
                    ? 'bg-stone-900 text-stone-100'
                    : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                {cat === 'all' ? 'Semua Kategori' : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Books Grid */}
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} onEditBook={onEditBook} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-stone-200 p-12 text-center max-w-md mx-auto my-8">
          <BookOpen className="w-12 h-12 text-stone-300 mx-auto mb-3" />
          <h3 className="font-serif-scholarly font-bold text-stone-800 text-lg">
            Koleksi Tidak Ditemukan
          </h3>
          <p className="text-xs text-stone-500 mt-1.5 leading-relaxed">
            Tidak ada naskah e-book yang sesuai dengan kriteria pencarian "{searchQuery}" atau filter kategori yang dipilih.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setStatusFilter('all');
              }}
              className="px-3.5 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium transition-colors"
            >
              Reset Filter Pencarian
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
