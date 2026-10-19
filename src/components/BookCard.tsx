import React, { useState } from 'react';
import { Book } from '../types/library';
import { useLibrary } from '../context/LibraryContext';
import {
  BookOpen,
  BookmarkPlus,
  CheckCircle2,
  Lock,
  Layers,
  Info,
  Calendar,
  ToggleLeft,
  ToggleRight,
  Edit3,
  Trash2,
  FileText,
} from 'lucide-react';

interface BookCardProps {
  book: Book;
  onEditBook?: (book: Book) => void;
}

export const BookCard: React.FC<BookCardProps> = ({ book, onEditBook }) => {
  const {
    openReader,
    openBorrowModal,
    openDetailModal,
    activeRole,
    toggleBookBorrowable,
    deleteBook,
    loans,
    currentUser,
    circulationSettings,
  } = useLibrary();

  const [imageError, setImageError] = useState(false);

  // Check if current user is currently borrowing this book
  const userActiveLoan = loans.find(
    (l) => l.bookId === book.id && l.userId === currentUser.id && l.status === 'active'
  );

  const isGlobalCirculationActive = circulationSettings.systemBorrowingActive;

  return (
    <div className="group flex flex-col bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      {/* Book Cover and Top Presentation */}
      <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden border-b border-stone-100">
        {!imageError && book.coverUrl ? (
          <img
            src={book.coverUrl}
            alt={book.title}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-stone-900 text-stone-100">
            <span className="text-[10px] tracking-widest text-amber-400 font-mono uppercase mb-2">
              DDC {book.ddc}
            </span>
            <p className="font-serif-scholarly font-bold text-sm text-stone-200 line-clamp-3">
              {book.title}
            </p>
            <span className="text-xs text-stone-400 mt-2 font-sans">{book.author}</span>
          </div>
        )}

        {/* DDC Call number strip */}
        <div className="absolute top-2.5 left-2.5 bg-stone-900/90 backdrop-blur-sm text-amber-400 text-[11px] font-mono font-semibold px-2 py-0.5 rounded shadow-sm border border-stone-700/50">
          DDC {book.ddc}
        </div>

        {/* Loan Status Ribbon */}
        {userActiveLoan ? (
          <div className="absolute top-2.5 right-2.5 bg-emerald-700/95 text-white text-[11px] font-medium px-2 py-0.5 rounded shadow flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            <span>Sedang Anda Pinjam</span>
          </div>
        ) : !book.borrowable ? (
          <div className="absolute top-2.5 right-2.5 bg-stone-800/95 text-stone-300 text-[11px] font-medium px-2 py-0.5 rounded shadow flex items-center gap-1 border border-stone-700">
            <Lock className="w-3 h-3 text-stone-400" />
            <span>Hanya Baca Daring</span>
          </div>
        ) : book.availableCopies <= 0 ? (
          <div className="absolute top-2.5 right-2.5 bg-rose-800/95 text-white text-[11px] font-medium px-2 py-0.5 rounded shadow">
            Salinan Penuh
          </div>
        ) : null}

        {/* Quick Read Overlay Button */}
        <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4">
          <button
            type="button"
            onClick={() => openReader(book)}
            className="px-3.5 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-medium text-xs shadow-lg transition-transform hover:scale-105 flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Buka E-Book</span>
          </button>
          <button
            type="button"
            onClick={() => openDetailModal(book)}
            className="px-3 py-2 rounded-lg bg-stone-900/90 hover:bg-stone-900 text-stone-200 font-medium text-xs shadow-lg transition-transform hover:scale-105 flex items-center gap-1.5"
          >
            <Info className="w-3.5 h-3.5" />
            <span>Detail</span>
          </button>
        </div>
      </div>

      {/* Book Information Body */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata clean unboxed text (anti-slop guideline compliant) */}
          <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1.5 flex-wrap">
            <span className="font-medium text-stone-600">{book.category}</span>
            <span aria-hidden="true">·</span>
            <span>{book.year}</span>
            <span aria-hidden="true">·</span>
            <span>{book.totalPages} hlm</span>
          </div>

          {/* Book Title */}
          <h3
            onClick={() => openDetailModal(book)}
            className="font-serif-scholarly font-bold text-stone-900 text-base leading-snug line-clamp-2 hover:text-amber-800 cursor-pointer transition-colors"
            title={book.title}
          >
            {book.title}
          </h3>

          {/* Author */}
          <p className="text-xs text-stone-600 mt-1 line-clamp-1">
            {book.author}
          </p>

          {/* Synopsis preview */}
          <p className="text-xs text-stone-500 mt-2 line-clamp-2 leading-relaxed">
            {book.synopsis}
          </p>
        </div>

        {/* Footer & Actions */}
        <div className="mt-4 pt-3 border-t border-stone-100">
          {/* Circulation Availability Info */}
          <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
            <span className="flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-stone-400" />
              <span>
                {book.availableCopies} dari {book.totalCopies} lisensi
              </span>
            </span>

            <span className="text-[11px] font-mono text-stone-400">
              {book.isbn}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => openReader(book)}
              className="flex-1 py-2 px-3 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-100 text-xs font-medium transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Baca E-Book</span>
            </button>

            {userActiveLoan ? (
              <button
                type="button"
                onClick={() => openReader(book)}
                className="py-2 px-3 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium hover:bg-emerald-100 transition-colors flex items-center gap-1"
                title="Buka untuk melanjutkan membaca"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Lanjut</span>
              </button>
            ) : book.borrowable && isGlobalCirculationActive ? (
              <button
                type="button"
                onClick={() => openBorrowModal(book)}
                disabled={book.availableCopies <= 0}
                className={`py-2 px-3 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  book.availableCopies > 0
                    ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-sm'
                    : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                }`}
                title={book.availableCopies > 0 ? 'Atur waktu dan pinjam e-book' : 'Semua salinan sedang dipinjam'}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Pinjam</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => openDetailModal(book)}
                className="py-2 px-2.5 rounded-lg bg-stone-100 text-stone-500 text-xs hover:bg-stone-200 transition-colors"
                title={!isGlobalCirculationActive ? 'Sirkulasi ditutup sementara' : 'Hanya baca daring'}
              >
                <Lock className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Admin Control Bar for this book */}
          {activeRole === 'admin' && (
            <div className="mt-3 pt-2.5 border-t border-dashed border-stone-200 flex items-center justify-between text-xs">
              <button
                type="button"
                onClick={() => toggleBookBorrowable(book.id)}
                className={`flex items-center gap-1 text-[11px] font-medium transition-colors ${
                  book.borrowable
                    ? 'text-emerald-700 hover:text-emerald-800'
                    : 'text-stone-500 hover:text-stone-700'
                }`}
                title={book.borrowable ? 'Klik untuk non-aktifkan peminjaman' : 'Klik untuk aktifkan peminjaman'}
              >
                {book.borrowable ? (
                  <>
                    <ToggleRight className="w-4 h-4 text-emerald-600" />
                    <span>Pinjam: Aktif</span>
                  </>
                ) : (
                  <>
                    <ToggleLeft className="w-4 h-4 text-stone-400" />
                    <span>Pinjam: Non-aktif</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-1">
                {onEditBook && (
                  <button
                    type="button"
                    onClick={() => onEditBook(book)}
                    className="p-1 text-stone-500 hover:text-amber-700 rounded hover:bg-stone-100 transition-colors"
                    title="Edit Metadata & Cover Buku"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm(`Hapus buku "${book.title}" dari katalog perpustakaan?`)) {
                      deleteBook(book.id);
                    }
                  }}
                  className="p-1 text-stone-400 hover:text-rose-600 rounded hover:bg-rose-50 transition-colors"
                  title="Hapus Buku"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
