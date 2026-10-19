import React, { useState } from 'react';
import { useLibrary } from '../context/LibraryContext';
import { Book } from '../types/library';
import {
  BookOpen,
  Calendar,
  Clock,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  GraduationCap,
  Bookmark,
  StickyNote,
  ChevronRight,
  BookMarked,
  Sparkles,
  Layers,
  LayoutGrid,
  Library,
  LogOut,
  ArrowRight,
} from 'lucide-react';

interface StudentBookshelfViewProps {
  onExploreCatalog: () => void;
  onOpenCard: () => void;
}

export const StudentBookshelfView: React.FC<StudentBookshelfViewProps> = ({
  onExploreCatalog,
  onOpenCard,
}) => {
  const {
    currentUser,
    loans,
    books,
    returnBook,
    renewLoan,
    openReader,
    openBorrowModal,
    circulationSettings,
    bookmarks,
    readerNotes,
    logoutStudent,
  } = useLibrary();

  const [activeTab, setActiveTab] = useState<'loans' | 'history' | 'notes'>('loans');
  const [shelfViewMode, setShelfViewMode] = useState<'shelf' | 'cards'>('shelf');
  const [feedback, setFeedback] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Active loans for this student
  const activeLoans = loans.filter(
    (l) =>
      (l.userId === currentUser.id ||
        l.userNim.replace(/\s+/g, '') === currentUser.identifier.replace(/\s+/g, '') ||
        l.userName.toLowerCase() === currentUser.name.toLowerCase()) &&
      l.status === 'active'
  );

  // Historical returned/revoked loans
  const loanHistory = loans.filter(
    (l) =>
      (l.userId === currentUser.id ||
        l.userNim.replace(/\s+/g, '') === currentUser.identifier.replace(/\s+/g, '') ||
        l.userName.toLowerCase() === currentUser.name.toLowerCase()) &&
      l.status !== 'active'
  );

  const handleReturn = (loanId: string) => {
    const res = returnBook(loanId);
    setFeedback({ message: res.message, type: res.success ? 'success' : 'error' });
    setTimeout(() => setFeedback(null), 3000);
  };

  const handleRenew = (loanId: string) => {
    const res = renewLoan(loanId);
    setFeedback({ message: res.message, type: res.success ? 'success' : 'error' });
    setTimeout(() => setFeedback(null), 3000);
  };

  // Helper to compute remaining days & hours
  const getRemainingTime = (dueDateStr: string) => {
    const diff = new Date(dueDateStr).getTime() - Date.now();
    if (diff <= 0) return { expired: true, text: 'Waktu Habis (Jatuh Tempo)', days: 0 };
    const days = Math.floor(diff / (24 * 60 * 60 * 1000));
    const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    return {
      expired: false,
      text: `${days} Hari ${hours} Jam tersisa`,
      days,
      isUrgent: days <= 1,
    };
  };

  // Dynamic recommendations for student's department
  const deptLower = (currentUser.department || '').toLowerCase();
  const departmentRecommendations = books.filter((b) => {
    const title = b.title.toLowerCase();
    const cat = b.category.toLowerCase();

    if (deptLower.includes('sistem informasi') || deptLower.includes('informatika') || deptLower.includes('komputer')) {
      return (
        title.includes('mobile') ||
        title.includes('algoritma') ||
        title.includes('kecerdasan buatan') ||
        title.includes('sistem informasi') ||
        cat.includes('komputer') ||
        cat.includes('mobile')
      );
    }
    if (deptLower.includes('administrasi bisnis')) {
      return (
        title.includes('hukum') ||
        title.includes('tata kelola') ||
        title.includes('ekonomi') ||
        cat.includes('hukum') ||
        cat.includes('perpustakaan') ||
        cat.includes('ekonomi')
      );
    }
    if (deptLower.includes('manajemen')) {
      return (
        title.includes('ekonomi') ||
        title.includes('makroekonomi') ||
        title.includes('manajemen') ||
        title.includes('metodologi') ||
        cat.includes('ekonomi') ||
        cat.includes('sains')
      );
    }
    if (deptLower.includes('akuntansi')) {
      return (
        title.includes('akuntansi') ||
        title.includes('keuangan') ||
        title.includes('ekonomi') ||
        cat.includes('akuntansi') ||
        cat.includes('keuangan') ||
        cat.includes('ekonomi')
      );
    }
    return true;
  }).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
      {/* Toast Feedback */}
      {feedback && (
        <div
          className={`mb-6 p-4 rounded-xl text-xs flex items-center gap-2.5 shadow-sm ${
            feedback.type === 'success'
              ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
              : 'bg-rose-50 text-rose-900 border border-rose-200'
          }`}
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{feedback.message}</span>
        </div>
      )}

      {/* Page Header: Distinctive Bookshelf Styling */}
      <div className="bg-gradient-to-br from-purple-950 via-stone-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-purple-500/20 mb-8 relative overflow-hidden">
        {/* Decorative Shelf Pattern */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
          <Library className="w-64 h-64 text-purple-200" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/30 text-purple-200 border border-purple-400/30 text-xs font-bold">
              <BookMarked className="w-3.5 h-3.5 text-amber-300" />
              <span>RUANG BACA & SIRKULASI DIGITAL MAHASISWA</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-scholarly text-white tracking-tight">
              Rak Buku Digital Saya
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed">
              Koleksi buku elektronik yang sedang Anda pinjam di Perpustakaan IBM ASMI. Anda dapat langsung membaca bab buku, menyematkan catatan, dan memperpanjang masa peminjaman.
            </p>
            <div className="flex items-center gap-3 pt-1 text-xs text-stone-400 flex-wrap">
              <span>Mahasiswa: <strong className="text-white">{currentUser.name}</strong></span>
              <span>·</span>
              <span className="font-mono text-purple-300">{currentUser.identifier}</span>
              <span>·</span>
              <span className="text-amber-300">{currentUser.department}</span>
            </div>
          </div>

          {/* Quick Metrics & Card Link */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 flex items-center gap-4">
              <div>
                <span className="text-[11px] text-purple-200 block">Kapasitas Rak:</span>
                <strong className="text-base sm:text-lg font-bold text-white">
                  {activeLoans.length} / {circulationSettings.maxLoansPerStudent} E-Book
                </strong>
                <span className="text-[10px] text-stone-400 block mt-0.5">
                  Sisa Kuota: {Math.max(0, circulationSettings.maxLoansPerStudent - activeLoans.length)} Buku
                </span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-purple-600/60 border border-purple-400/50 flex items-center justify-center font-bold text-lg text-white">
                {activeLoans.length}
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenCard}
              className="px-4 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer active:scale-95"
            >
              <GraduationCap className="w-4 h-4 text-stone-950" />
              <span>Lihat Kartu Mahasiswa (KTM) →</span>
            </button>
          </div>
        </div>
      </div>

      {/* DEPARTMENTAL SMART RECOMMENDATIONS STRIP */}
      {departmentRecommendations.length > 0 && (
        <div className="mb-8 bg-white border border-stone-200 rounded-2xl p-5 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-stone-100">
            <div>
              <div className="inline-flex items-center gap-1.5 text-purple-700 text-xs font-bold uppercase tracking-wider mb-0.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Rekomendasi Berdasarkan Program Studi</span>
              </div>
              <h3 className="font-serif-scholarly font-bold text-base text-stone-900">
                Pilihan Buku untuk Mahasiswa {currentUser.department}
              </h3>
            </div>
            <button
              type="button"
              onClick={onExploreCatalog}
              className="text-xs text-purple-700 hover:text-purple-900 font-bold underline flex items-center gap-1"
            >
              <span>Jelajahi Seluruh Katalog</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {departmentRecommendations.map((book) => (
              <div
                key={book.id}
                className="bg-stone-50 border border-stone-200 rounded-xl p-3.5 flex flex-col justify-between hover:border-purple-300 hover:bg-purple-50/30 transition-all"
              >
                <div className="flex gap-3 mb-3">
                  <img
                    src={book.coverUrl}
                    alt={book.title}
                    className="w-14 h-20 object-cover rounded-lg shadow-sm shrink-0 border border-stone-200"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-100 text-purple-800 border border-purple-200 inline-block mb-1">
                      DDC {book.ddc}
                    </span>
                    <h4 className="font-serif-scholarly font-bold text-xs text-stone-900 line-clamp-2 leading-snug">
                      {book.title}
                    </h4>
                    <p className="text-[10px] text-stone-500 truncate mt-0.5">
                      {book.author}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-stone-200">
                  <button
                    type="button"
                    onClick={() => openReader(book)}
                    className="flex-1 py-1.5 px-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-[11px] font-bold transition-colors flex items-center justify-center gap-1 shadow-2xs"
                  >
                    <BookOpen className="w-3 h-3 text-purple-300" />
                    <span>Baca Daring</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => openBorrowModal(book)}
                    className="py-1.5 px-3 bg-purple-100 hover:bg-purple-200 text-purple-900 rounded-lg text-[11px] font-bold border border-purple-300 transition-colors"
                  >
                    Pinjam
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tabs Navigation for Bookshelf Sections */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 mb-6 pb-2">
        <div className="flex items-center gap-1 overflow-x-auto text-xs sm:text-sm">
          <button
            type="button"
            onClick={() => setActiveTab('loans')}
            className={`py-2.5 px-4 font-semibold transition-colors border-b-2 flex items-center gap-2 whitespace-nowrap shrink-0 ${
              activeTab === 'loans'
                ? 'border-purple-700 text-purple-900 font-bold'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            <Library className="w-4 h-4" />
            <span>Buku di Rak Aktif ({activeLoans.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('history')}
            className={`py-2.5 px-4 font-semibold transition-colors border-b-2 flex items-center gap-2 whitespace-nowrap shrink-0 ${
              activeTab === 'history'
                ? 'border-purple-700 text-purple-900 font-bold'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>Riwayat Pengembalian ({loanHistory.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('notes')}
            className={`py-2.5 px-4 font-semibold transition-colors border-b-2 flex items-center gap-2 whitespace-nowrap shrink-0 ${
              activeTab === 'notes'
                ? 'border-purple-700 text-purple-900 font-bold'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            <StickyNote className="w-4 h-4" />
            <span>Catatan Riset ({readerNotes.length})</span>
          </button>
        </div>

        {/* View mode toggle for active loans */}
        {activeTab === 'loans' && activeLoans.length > 0 && (
          <div className="flex items-center gap-1 self-end sm:self-center bg-stone-100 p-1 rounded-xl border border-stone-200 text-xs">
            <button
              type="button"
              onClick={() => setShelfViewMode('shelf')}
              className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-all ${
                shelfViewMode === 'shelf'
                  ? 'bg-white text-purple-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-purple-700" />
              <span>Rak Kayu Visual</span>
            </button>
            <button
              type="button"
              onClick={() => setShelfViewMode('cards')}
              className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-all ${
                shelfViewMode === 'cards'
                  ? 'bg-white text-purple-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5 text-purple-700" />
              <span>Kartu Sirkulasi</span>
            </button>
          </div>
        )}
      </div>

      {/* TAB 1: ACTIVE LOANS */}
      {activeTab === 'loans' && (
        <div>
          {activeLoans.length > 0 ? (
            shelfViewMode === 'shelf' ? (
              /* REALISTIC 3D WOODEN BOOKSHELF VIEW */
              <div className="space-y-8">
                <div className="bg-stone-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-stone-800">
                  <div className="flex items-center justify-between mb-6 pb-3 border-b border-stone-800 text-xs">
                    <span className="text-amber-400 font-serif-scholarly font-bold uppercase tracking-wider flex items-center gap-2">
                      <Library className="w-4 h-4" />
                      <span>Rak Koleksi Mandiri Mahasiswa</span>
                    </span>
                    <span className="text-stone-400">
                      Klik salah satu buku di rak untuk langsung membuka reader
                    </span>
                  </div>

                  {/* The Shelf Rack */}
                  <div className="pt-8 pb-3 px-4 sm:px-8 border-b-14 border-[#522915] bg-gradient-to-b from-stone-800/40 via-stone-850 to-stone-900 rounded-t-2xl relative shadow-2xl">
                    {/* Wood Texture Plank Highlight */}
                    <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-[#7a3e1d] via-[#944a22] to-[#7a3e1d] shadow-md" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-end justify-items-center">
                      {activeLoans.map((loan) => {
                        const book = books.find((b) => b.id === loan.bookId);
                        const remaining = getRemainingTime(loan.dueDate);

                        return (
                          <div
                            key={loan.id}
                            className="group flex flex-col items-center w-full max-w-[240px] transform hover:-translate-y-2 transition-transform duration-300"
                          >
                            {/* Urgent Due Badge */}
                            <div className="mb-2">
                              <span
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-full shadow ${
                                  remaining.expired
                                    ? 'bg-rose-600 text-white'
                                    : remaining.isUrgent
                                    ? 'bg-amber-400 text-stone-950 font-bold'
                                    : 'bg-emerald-600 text-white'
                                }`}
                              >
                                {remaining.text}
                              </span>
                            </div>

                            {/* Book 3D Cover */}
                            <div
                              onClick={() => {
                                if (book) openReader(book);
                              }}
                              className="relative cursor-pointer select-none"
                              style={{
                                perspective: '800px',
                              }}
                            >
                              <img
                                src={loan.bookCover}
                                alt={loan.bookTitle}
                                className="w-36 h-52 sm:w-44 sm:h-64 object-cover rounded-md shadow-2xl border-2 border-stone-700/80 group-hover:border-purple-400 transition-all"
                              />
                              {/* Spine 3D shadow */}
                              <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />

                              {/* Hover Read Badge */}
                              <div className="absolute inset-0 bg-stone-950/70 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex flex-col items-center justify-center p-3 text-center text-white backdrop-blur-2xs">
                                <BookOpen className="w-8 h-8 text-purple-300 mb-2" />
                                <span className="font-bold text-xs">Buka & Baca Daring</span>
                                <span className="text-[10px] text-stone-300 mt-1 line-clamp-2">
                                  {loan.bookTitle}
                                </span>
                              </div>
                            </div>

                            {/* Book Shelf Label Stand */}
                            <div className="mt-3 text-center w-full bg-stone-950/80 p-2.5 rounded-xl border border-stone-800 shadow">
                              <h4 className="font-serif-scholarly font-bold text-xs text-white truncate">
                                {loan.bookTitle}
                              </h4>
                              <p className="text-[10px] text-stone-400 truncate mt-0.5">
                                {loan.bookAuthor} · DDC {loan.bookDdc}
                              </p>

                              <div className="flex items-center justify-center gap-1.5 mt-2">
                                <button
                                  type="button"
                                  onClick={() => {
                                    if (book) openReader(book);
                                  }}
                                  className="py-1 px-2 bg-purple-700 hover:bg-purple-600 text-white rounded text-[10px] font-bold"
                                >
                                  Baca
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleRenew(loan.id)}
                                  disabled={loan.renewCount >= 2 || remaining.expired}
                                  className="py-1 px-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded text-[10px] disabled:opacity-40"
                                  title="Perpanjang Pinjaman"
                                >
                                  Perpanjang
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleReturn(loan.id)}
                                  className="py-1 px-2 bg-stone-800 hover:bg-rose-900 text-stone-200 rounded text-[10px]"
                                  title="Kembalikan Buku"
                                >
                                  Kembalikan
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* CIRCULATION CARDS VIEW */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeLoans.map((loan) => {
                  const book = books.find((b) => b.id === loan.bookId);
                  const remaining = getRemainingTime(loan.dueDate);

                  return (
                    <div
                      key={loan.id}
                      className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                    >
                      {/* Top Book Meta */}
                      <div className="p-4 flex gap-4">
                        <img
                          src={loan.bookCover}
                          alt={loan.bookTitle}
                          className="w-16 h-24 object-cover rounded-lg shadow-sm border border-stone-200 shrink-0"
                          loading="lazy"
                        />
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200">
                            DDC {loan.bookDdc}
                          </span>
                          <h4 className="font-serif-scholarly font-bold text-stone-900 text-sm mt-1 line-clamp-2 leading-snug">
                            {loan.bookTitle}
                          </h4>
                          <p className="text-xs text-stone-500 truncate mt-0.5">{loan.bookAuthor}</p>

                          <div
                            className={`mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                              remaining.expired
                                ? 'bg-rose-100 text-rose-800'
                                : remaining.isUrgent
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-emerald-100 text-emerald-800'
                            }`}
                          >
                            <Clock className="w-3 h-3" />
                            <span>{remaining.text}</span>
                          </div>
                        </div>
                      </div>

                      {/* Loan Details Meta */}
                      <div className="p-4 bg-stone-50 text-xs text-stone-600 space-y-1.5 border-b border-stone-100">
                        <div className="flex justify-between">
                          <span>Peminjam:</span>
                          <strong className="text-stone-800 truncate max-w-[180px]">
                            {loan.userName} ({loan.userNim})
                          </strong>
                        </div>
                        <div className="flex justify-between">
                          <span>Tanggal Pinjam:</span>
                          <strong className="text-stone-800">
                            {new Date(loan.borrowDate).toLocaleDateString('id-ID', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </strong>
                        </div>
                        <div className="flex justify-between">
                          <span>Jatuh Tempo:</span>
                          <strong className="text-stone-900 font-bold">
                            {new Date(loan.dueDate).toLocaleDateString('id-ID', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </strong>
                        </div>
                        <div className="flex justify-between">
                          <span>Perpanjangan:</span>
                          <span>{loan.renewCount} / 2 kali</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="p-3 bg-white flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            if (book) openReader(book);
                          }}
                          className="flex-1 py-2 px-3 bg-purple-700 hover:bg-purple-800 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors flex items-center justify-center gap-1.5"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Baca Sekarang</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleRenew(loan.id)}
                          disabled={loan.renewCount >= 2 || remaining.expired}
                          className="py-2 px-3 border border-stone-200 hover:bg-stone-50 rounded-lg text-xs font-medium text-stone-700 transition-colors disabled:opacity-40"
                          title="Perpanjang 7 hari lagi"
                        >
                          <RotateCcw className="w-3.5 h-3.5 text-stone-500" />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleReturn(loan.id)}
                          className="py-2 px-3 border border-stone-200 hover:bg-rose-50 hover:text-rose-700 hover:border-rose-200 rounded-lg text-xs font-medium text-stone-600 transition-colors"
                          title="Kembalikan E-Book"
                        >
                          Kembalikan
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )
          ) : (
            /* EMPTY BOOKSHELF STATE */
            <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-14 text-center max-w-lg mx-auto shadow-xs">
              <div className="w-16 h-16 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center mx-auto mb-4 border border-purple-200">
                <Library className="w-8 h-8" />
              </div>
              <h3 className="font-serif-scholarly font-bold text-stone-900 text-lg sm:text-xl">
                Rak Buku Anda Masih Kosong
              </h3>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                Anda belum meminjam e-book untuk ditaruh di rak ini. Jelajahi katalog buku perpustakaan IBM ASMI dan klik tombol "Pinjam" untuk mulai membaca.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
                <button
                  type="button"
                  onClick={onExploreCatalog}
                  className="w-full sm:w-auto px-6 py-2.5 bg-stone-900 hover:bg-stone-850 text-white rounded-xl text-xs font-bold shadow-sm transition-all"
                >
                  Jelajahi Katalog E-Book Sekarang
                </button>
                <button
                  type="button"
                  onClick={onOpenCard}
                  className="w-full sm:w-auto px-5 py-2.5 border border-stone-300 hover:bg-stone-100 text-stone-700 rounded-xl text-xs font-semibold transition-all"
                >
                  Cek Kartu Mahasiswa (KTM)
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: LOAN HISTORY */}
      {activeTab === 'history' && (
        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
          {loanHistory.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs min-w-[580px]">
                <thead className="bg-stone-100/70 border-b border-stone-200 text-stone-600 font-semibold">
                  <tr>
                    <th className="py-3 px-4">Judul E-Book</th>
                    <th className="py-3 px-4">DDC</th>
                    <th className="py-3 px-4">Tanggal Pinjam</th>
                    <th className="py-3 px-4">Tanggal Dikembalikan</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {loanHistory.map((lh) => {
                    const book = books.find((b) => b.id === lh.bookId);
                    return (
                      <tr key={lh.id} className="hover:bg-stone-50">
                        <td className="py-3 px-4 font-serif-scholarly font-medium text-stone-900">
                          {lh.bookTitle}
                          <div className="text-[11px] text-stone-500 font-sans">{lh.bookAuthor}</div>
                        </td>
                        <td className="py-3 px-4 font-mono text-stone-600">DDC {lh.bookDdc}</td>
                        <td className="py-3 px-4 text-stone-600">
                          {new Date(lh.borrowDate).toLocaleDateString('id-ID')}
                        </td>
                        <td className="py-3 px-4 text-stone-600">
                          {lh.returnedDate ? new Date(lh.returnedDate).toLocaleDateString('id-ID') : '-'}
                        </td>
                        <td className="py-3 px-4">
                          <span className="inline-block px-2 py-0.5 rounded text-[11px] font-medium bg-stone-100 text-stone-700">
                            {lh.status === 'returned' ? 'Dikembalikan' : 'Dicabut'}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          {book && (
                            <button
                              type="button"
                              onClick={() => openReader(book)}
                              className="text-purple-700 hover:text-purple-900 font-semibold"
                            >
                              Baca Lagi
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-10 text-center text-xs text-stone-400">
              Belum ada riwayat pengembalian buku sebelumnya untuk akun ini.
            </div>
          )}
        </div>
      )}

      {/* TAB 3: READING NOTES */}
      {activeTab === 'notes' && (
        <div className="space-y-4">
          {readerNotes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {readerNotes.map((note) => {
                const book = books.find((b) => b.id === note.bookId);
                return (
                  <div key={note.id} className="p-4 bg-white rounded-2xl border border-stone-200 shadow-xs space-y-2">
                    <div className="flex items-center justify-between text-xs text-stone-500">
                      <span className="font-semibold text-stone-800">{book?.title || 'E-Book'}</span>
                      <span>{new Date(note.createdAt).toLocaleDateString('id-ID')}</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed italic bg-stone-50 p-3 rounded-xl border border-stone-100">
                      "{note.noteText}"
                    </p>
                    {book && (
                      <button
                        type="button"
                        onClick={() => openReader(book)}
                        className="text-xs text-purple-700 hover:text-purple-900 font-medium flex items-center gap-1 pt-1"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Buka E-Book & Bab Terkait</span>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-stone-200 p-10 text-center text-xs text-stone-500">
              Belum ada catatan riset tersimpan. Buka e-book dari rak Anda dan buat catatan pada halaman bab yang sedang dibaca.
            </div>
          )}
        </div>
      )}
    </div>
  );
};
