import React, { useState } from 'react';
import { useLibrary } from '../context/LibraryContext';
import {
  X,
  BookOpen,
  Calendar,
  Layers,
  Copy,
  Check,
  Quote,
  ShieldCheck,
  Bookmark,
  Share2,
} from 'lucide-react';

export const BookDetailModal: React.FC = () => {
  const {
    selectedBookForDetail,
    closeDetailModal,
    openReader,
    openBorrowModal,
    circulationSettings,
    loans,
    currentUser,
  } = useLibrary();

  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  if (!selectedBookForDetail) return null;

  const book = selectedBookForDetail;

  const isUserBorrowing = loans.some(
    (l) => l.bookId === book.id && l.userId === currentUser.id && l.status === 'active'
  );

  const handleCopyCitation = (format: 'apa' | 'ieee' | 'harvard') => {
    navigator.clipboard.writeText(book.citation[format]);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-stone-900 text-stone-100 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase font-semibold">
              KARTU BIBLIOGRAFI DDC {book.ddc}
            </span>
          </div>
          <button
            type="button"
            onClick={closeDetailModal}
            className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 flex-1 overflow-y-auto">
          {/* Top Section: Cover & Key Info */}
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <img
              src={book.coverUrl}
              alt={book.title}
              className="w-36 h-52 object-cover rounded-xl shadow-md border border-stone-200 shrink-0 mx-auto sm:mx-0"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />

            <div className="flex-1 space-y-3">
              <span className="text-xs font-semibold text-amber-700 block">
                {book.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif-scholarly text-stone-900 leading-snug">
                {book.title}
              </h2>
              <p className="text-sm font-medium text-stone-700">
                Oleh: <strong className="text-stone-900">{book.author}</strong>
              </p>

              {/* Status Sirkulasi Pill */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-semibold ${
                    book.borrowable
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-stone-100 text-stone-700'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{book.borrowable ? 'Sirkulasi: Bisa Dipinjam' : 'Sirkulasi: Hanya Baca Daring'}</span>
                </span>

                <span className="text-stone-500">
                  {book.availableCopies} dari {book.totalCopies} lisensi tersedia
                </span>
              </div>

              {/* Action Buttons in Header */}
              <div className="flex items-center gap-2.5 pt-3">
                <button
                  type="button"
                  onClick={() => {
                    closeDetailModal();
                    openReader(book);
                  }}
                  className="px-4 py-2.5 rounded-lg bg-stone-900 hover:bg-black text-white text-xs font-semibold shadow-sm transition-colors flex items-center gap-1.5"
                >
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  <span>Baca E-Book (55 Halaman Penuh)</span>
                </button>

                {book.borrowable && circulationSettings.systemBorrowingActive && !isUserBorrowing && (
                  <button
                    type="button"
                    onClick={() => {
                      closeDetailModal();
                      openBorrowModal(book);
                    }}
                    disabled={book.availableCopies <= 0}
                    className="px-4 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold shadow-sm transition-colors flex items-center gap-1.5 disabled:opacity-40"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Pinjam ({circulationSettings.defaultDurationDays} Hari / Atur Waktu)</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Synopsis */}
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
            <h4 className="text-xs font-bold text-stone-800 mb-1.5 uppercase tracking-wider font-mono">
              Abstrak & Sinopsis Buku
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed text-justify">
              {book.synopsis}
            </p>
          </div>

          {/* Metadata Table (Catalog Card Standard) */}
          <div className="border border-stone-200 rounded-xl overflow-hidden text-xs">
            <div className="bg-stone-100 px-4 py-2 font-bold text-stone-700 border-b border-stone-200">
              Metadata Katalog Perpustakaan (Dublin Core Standard)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-stone-100 p-2">
              <div className="p-2 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-stone-500">Nomor Panggil DDC:</span>
                  <span className="font-mono font-semibold text-amber-800">{book.ddc}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Nomor ISBN:</span>
                  <span className="font-mono">{book.isbn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Penerbit:</span>
                  <span>{book.publisher}</span>
                </div>
              </div>

              <div className="p-2 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-stone-500">Tahun Terbit:</span>
                  <span>{book.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Jumlah Halaman:</span>
                  <span className="font-semibold text-amber-900">{book.totalPages || 55} hlm (55 Halaman E-Book)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Bahasa:</span>
                  <span>{book.language}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Citations Box */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider font-mono flex items-center gap-1.5">
                <Quote className="w-3.5 h-3.5 text-amber-600" />
                <span>Format Sitasi Akademik Mahasiswa</span>
              </h4>
              <span className="text-[11px] text-stone-400">Siap salin untuk daftar pustaka skripsi</span>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {(['apa', 'ieee', 'harvard'] as const).map((fmt) => (
                <div
                  key={fmt}
                  className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-start justify-between gap-3 text-xs"
                >
                  <div>
                    <span className="font-mono font-bold text-amber-700 text-[10px] uppercase block mb-0.5">
                      {fmt.toUpperCase()} 7th Edition
                    </span>
                    <p className="font-serif-scholarly text-stone-800 leading-relaxed">
                      {book.citation[fmt]}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopyCitation(fmt)}
                    className="p-1.5 rounded-lg border border-stone-300 hover:bg-stone-200 text-stone-700 transition-colors shrink-0"
                    title={`Salin format ${fmt.toUpperCase()}`}
                  >
                    {copiedFormat === fmt ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex items-center justify-end">
          <button
            type="button"
            onClick={closeDetailModal}
            className="px-4 py-2 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-700 text-xs font-semibold transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
