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
  QrCode,
  ShieldCheck,
  ChevronRight,
  BookMarked,
  Info,
  LogOut,
  Edit2,
  Sparkles,
  Download,
  Share2,
} from 'lucide-react';

export const StudentDashboard: React.FC<{ onExploreCatalog: () => void }> = ({ onExploreCatalog }) => {
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
    loginStudent,
    logoutStudent,
  } = useLibrary();

  const [activeTab, setActiveTab] = useState<'loans' | 'history' | 'card' | 'notes'>('loans');
  const [feedback, setFeedback] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editName, setEditName] = useState(currentUser.name);
  const [editNim, setEditNim] = useState(currentUser.identifier.replace(/^NIM\.\s*/, ''));
  const [editDept, setEditDept] = useState(currentUser.department);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editName.trim()) return;
    loginStudent(editName, editNim, editDept);
    setIsEditingProfile(false);
    setFeedback({ message: 'Identitas mahasiswa berhasil diperbarui!', type: 'success' });
    setTimeout(() => setFeedback(null), 3000);
  };

  // Student's active loans (matched by ID, NIM, or Name)
  const activeLoans = loans.filter(
    (l) =>
      (l.userId === currentUser.id ||
        l.userNim.replace(/\s+/g, '') === currentUser.identifier.replace(/\s+/g, '') ||
        l.userName.toLowerCase() === currentUser.name.toLowerCase()) &&
      l.status === 'active'
  );

  // Student's loan history
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
    if (diff <= 0) return { expired: true, text: 'Waktu Habis (Jatuh Tempo)' };
    const days = Math.floor(diff / (24 * 60 * 60 * 1000));
    const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    return {
      expired: false,
      text: `${days} Hari ${hours} Jam tersisa`,
      isUrgent: days <= 1,
    };
  };

  // Dynamic recommendations matching student's department (S1 Sistem Informasi, S1 Administrasi Bisnis, S1 Manajemen, S1 Akuntansi)
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
      {/* Student Welcome & Profile Strip */}
      <div className="bg-white rounded-2xl border border-stone-200 p-5 sm:p-6 shadow-sm mb-6 sm:mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6">
        <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 flex-1 min-w-0">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-purple-700 via-fuchsia-700 to-pink-700 text-white flex items-center justify-center font-bold text-lg sm:text-xl shadow-md border-2 border-purple-400/30 shrink-0">
            <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-purple-200" />
          </div>

          {!isEditingProfile ? (
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-lg sm:text-xl font-bold font-serif-scholarly text-stone-900 truncate">
                  {currentUser.name}
                </h2>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-medium px-2 py-0.5 rounded-full shrink-0">
                  Dashboard Pribadi
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setEditName(currentUser.name);
                    setEditNim(currentUser.identifier.replace(/^NIM\.\s*/, ''));
                    setEditDept(currentUser.department);
                    setIsEditingProfile(true);
                  }}
                  className="text-[11px] text-purple-700 hover:text-purple-900 font-semibold underline inline-flex items-center gap-0.5"
                >
                  <Edit2 className="w-3 h-3 inline" />
                  <span>Edit</span>
                </button>
              </div>

              <p className="text-xs text-stone-700 font-mono mt-0.5 font-medium truncate">
                {currentUser.identifier} · <span className="text-purple-800 font-sans font-semibold">{currentUser.department}</span>
              </p>
              <p className="text-[11px] sm:text-xs text-stone-400 mt-1 truncate">
                Status: Sivitas Aktif · Email: {currentUser.email}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSaveProfile} className="flex-1 space-y-2 text-xs min-w-0">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div>
                  <label className="block text-[10px] font-semibold text-stone-600 mb-0.5">Nama Anda:</label>
                  <input
                    type="text"
                    required
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="w-full p-1.5 border border-stone-300 rounded-lg text-xs bg-stone-50"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-stone-600 mb-0.5">NIM:</label>
                  <input
                    type="text"
                    required
                    value={editNim}
                    onChange={(e) => setEditNim(e.target.value)}
                    className="w-full p-1.5 border border-stone-300 rounded-lg text-xs font-mono bg-stone-50"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-stone-600 mb-0.5">Jurusan:</label>
                  <input
                    type="text"
                    value={editDept}
                    onChange={(e) => setEditDept(e.target.value)}
                    className="w-full p-1.5 border border-stone-300 rounded-lg text-xs bg-stone-50"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <button
                  type="submit"
                  className="px-3 py-1 bg-purple-700 hover:bg-purple-800 text-white rounded-lg font-medium text-xs shadow-xs"
                >
                  Simpan Identitas
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditingProfile(false)}
                  className="px-2.5 py-1 text-stone-500 hover:text-stone-800 text-xs"
                >
                  Batal
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Action Controls & Loan Meter */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-stone-100">
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-2.5 sm:p-3 flex items-center gap-3 text-xs">
            <div>
              <span className="text-stone-500 block text-[11px]">Buku Dipinjam:</span>
              <strong className="text-stone-900 font-bold text-xs sm:text-sm">
                {activeLoans.length} dari {circulationSettings.maxLoansPerStudent} E-Book
              </strong>
            </div>
            <div className="w-10 h-10 rounded-full border-3 border-purple-600 flex items-center justify-center font-bold text-purple-700 bg-purple-50 text-xs">
              {activeLoans.length}/{circulationSettings.maxLoansPerStudent}
            </div>
          </div>

          <button
            type="button"
            onClick={logoutStudent}
            className="px-3 py-2.5 rounded-xl bg-stone-100 hover:bg-rose-50 text-stone-700 hover:text-rose-700 border border-stone-200 hover:border-rose-200 text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer active:scale-95 touch-manipulation"
            title="Keluar / Masuk Sebagai Mahasiswa Lain"
          >
            <LogOut className="w-3.5 h-3.5 text-stone-500" />
            <span className="hidden sm:inline">Ganti Akun</span>
            <span className="sm:hidden">Keluar</span>
          </button>
        </div>
      </div>

      {feedback && (
        <div
          className={`mb-6 p-4 rounded-xl text-xs flex items-center gap-2.5 ${
            feedback.type === 'success'
              ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
              : 'bg-rose-50 text-rose-900 border border-rose-200'
          }`}
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{feedback.message}</span>
        </div>
      )}

      {/* DEPARTMENTAL SMART RECOMMENDATIONS STRIP */}
      {departmentRecommendations.length > 0 && (
        <div className="mb-8 bg-gradient-to-r from-purple-900 via-fuchsia-950 to-stone-900 text-white rounded-2xl p-4 sm:p-6 shadow-md border border-purple-500/20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-purple-500/30 text-purple-200 text-[10px] font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>Rekomendasi Terpilih Sesuai Jurusan Anda</span>
              </div>
              <h3 className="font-serif-scholarly font-bold text-base sm:text-lg text-white">
                Koleksi Relevan untuk Mahasiswa {currentUser.department}
              </h3>
            </div>
            <button
              type="button"
              onClick={onExploreCatalog}
              className="text-xs text-purple-200 hover:text-white underline font-medium self-end sm:self-center"
            >
              Lihat Seluruh Katalog →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {departmentRecommendations.map((book) => (
              <div
                key={book.id}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-3.5 flex flex-col justify-between hover:bg-white/15 transition-all"
              >
                <div className="flex gap-3 mb-3">
                  <img
                    src={book.coverUrl}
                    alt={book.title}
                    className="w-14 h-20 object-cover rounded shadow-md shrink-0 border border-white/20"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-500/30 text-purple-200 border border-purple-400/30 inline-block mb-1">
                      DDC {book.ddc}
                    </span>
                    <h4 className="font-serif-scholarly font-bold text-xs text-white line-clamp-2 leading-snug">
                      {book.title}
                    </h4>
                    <p className="text-[10px] text-stone-300 truncate mt-0.5">
                      {book.author}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => openReader(book)}
                    className="flex-1 py-1.5 px-2 bg-white hover:bg-stone-100 text-stone-900 rounded-lg text-[11px] font-bold transition-colors flex items-center justify-center gap-1 shadow-xs"
                  >
                    <BookOpen className="w-3 h-3 text-purple-700" />
                    <span>Baca Daring</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => openBorrowModal(book)}
                    className="py-1.5 px-2.5 bg-purple-700/80 hover:bg-purple-600 text-white rounded-lg text-[11px] font-medium border border-purple-400/40 transition-colors"
                  >
                    Pinjam
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tabs navigation */}
      <div className="flex items-center gap-1 border-b border-stone-200 mb-6 text-xs sm:text-sm overflow-x-auto pb-0.5">
        <button
          type="button"
          onClick={() => setActiveTab('loans')}
          className={`py-2.5 px-3 sm:px-4 font-medium transition-colors border-b-2 flex items-center gap-2 whitespace-nowrap shrink-0 ${
            activeTab === 'loans'
              ? 'border-purple-700 text-purple-900 font-bold'
              : 'border-transparent text-stone-500 hover:text-stone-900'
          }`}
        >
          <BookMarked className="w-4 h-4" />
          <span>Pinjaman E-Book Aktif ({activeLoans.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('history')}
          className={`py-2.5 px-3 sm:px-4 font-medium transition-colors border-b-2 flex items-center gap-2 whitespace-nowrap shrink-0 ${
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
          onClick={() => setActiveTab('card')}
          className={`py-2.5 px-3 sm:px-4 font-medium transition-colors border-b-2 flex items-center gap-2 whitespace-nowrap shrink-0 ${
            activeTab === 'card'
              ? 'border-purple-700 text-purple-900 font-bold'
              : 'border-transparent text-stone-500 hover:text-stone-900'
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          <span>Kartu Tanda Anggota (KTM)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('notes')}
          className={`py-2.5 px-3 sm:px-4 font-medium transition-colors border-b-2 flex items-center gap-2 whitespace-nowrap shrink-0 ${
            activeTab === 'notes'
              ? 'border-purple-700 text-purple-900 font-bold'
              : 'border-transparent text-stone-500 hover:text-stone-900'
          }`}
        >
          <StickyNote className="w-4 h-4" />
          <span>Catatan Bacaan ({readerNotes.length})</span>
        </button>
      </div>

      {/* Tab 1: Active Loans */}
      {activeTab === 'loans' && (
        <div>
          {activeLoans.length > 0 ? (
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
                        <strong className="text-stone-800 truncate max-w-[180px]">{loan.userName} ({loan.userNim})</strong>
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
                        <span>Status Perpanjangan:</span>
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
          ) : (
            <div className="bg-white rounded-2xl border border-stone-200 p-8 sm:p-12 text-center max-w-lg mx-auto shadow-xs">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center mx-auto mb-3 border border-purple-200">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="font-serif-scholarly font-bold text-stone-800 text-lg">
                Halo, {currentUser.name}!
              </h3>
              <p className="text-xs text-stone-500 mt-1.5 leading-relaxed">
                Anda belum memiliki e-book yang sedang dipinjam saat ini. Anda dapat menjelajahi koleksi di katalog atau membaca buku rekomendasi di atas secara gratis dan langsung.
              </p>
              <button
                type="button"
                onClick={onExploreCatalog}
                className="mt-5 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-100 rounded-xl text-xs font-bold shadow-sm transition-all"
              >
                Jelajahi Katalog E-Book Sekarang
              </button>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Loan History */}
      {activeTab === 'history' && (
        <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm">
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
            <div className="p-8 text-center text-xs text-stone-400">
              Belum ada riwayat pengembalian buku sebelumnya untuk akun ini.
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Digital Library Card (KTM) */}
      {activeTab === 'card' && (
        <div className="max-w-md mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-stone-700 bg-gradient-to-br from-stone-900 via-stone-850 to-stone-950 text-white p-6 sm:p-7 space-y-5">
            {/* Background watermark */}
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <GraduationCap className="w-48 h-48" />
            </div>

            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div>
                <span className="text-[10px] tracking-widest text-purple-400 font-mono uppercase font-bold">
                  KARTU TANDA ANGGOTA SIRKULASI DIGITAL
                </span>
                <h3 className="font-serif-scholarly font-bold text-lg text-white">
                  IBM ASMI DIGITAL LIBRARY
                </h3>
                <p className="text-[10px] text-stone-400">Institut Bisnis Dan Multimedia asmi</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-inner">
                <QrCode className="w-6 h-6" />
              </div>
            </div>

            {/* Card Identity */}
            <div className="flex items-start gap-4">
              <div className="w-20 h-24 rounded-xl bg-stone-800 border border-stone-700 flex flex-col items-center justify-center text-stone-400 shadow-inner shrink-0">
                <GraduationCap className="w-8 h-8 text-amber-400/80 mb-1" />
                <span className="text-[9px] uppercase font-mono">FOTO MHS</span>
              </div>
              <div className="space-y-1 min-w-0">
                <h4 className="font-serif-scholarly font-bold text-base text-amber-100 truncate">
                  {currentUser.name}
                </h4>
                <div className="text-xs font-mono text-amber-400 font-semibold truncate">
                  {currentUser.identifier}
                </div>
                <div className="text-[11px] text-stone-300 truncate">
                  {currentUser.department}
                </div>
                <div className="text-[10px] text-emerald-400 pt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 shrink-0" />
                  <span>Hak Akses E-Book & Sirkulasi Terverifikasi</span>
                </div>
              </div>
            </div>

            {/* Card Barcode Strip */}
            <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-[11px]">
              <div>
                <span className="text-stone-400 block text-[10px]">Kode Otorisasi Mahasiswa</span>
                <span className="font-mono tracking-widest text-stone-200">
                  ||||| | |||| || |||||| | ||
                </span>
              </div>
              <div className="text-right">
                <span className="text-stone-400 block text-[10px]">Status Akreditasi</span>
                <strong className="text-amber-400 font-bold">Terakreditasi A</strong>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Notes & Bookmarks */}
      {activeTab === 'notes' && (
        <div className="space-y-4">
          {readerNotes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {readerNotes.map((note) => {
                const book = books.find((b) => b.id === note.bookId);
                return (
                  <div key={note.id} className="p-4 bg-white rounded-xl border border-stone-200 shadow-sm space-y-2">
                    <div className="flex items-center justify-between text-xs text-stone-500">
                      <span className="font-semibold text-stone-800">{book?.title || 'Buku'}</span>
                      <span>{new Date(note.createdAt).toLocaleDateString('id-ID')}</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed italic bg-stone-50 p-3 rounded-lg border border-stone-100">
                      "{note.noteText}"
                    </p>
                    {book && (
                      <button
                        type="button"
                        onClick={() => openReader(book)}
                        className="text-xs text-purple-700 hover:text-purple-900 font-medium flex items-center gap-1"
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
            <div className="bg-white rounded-xl border border-stone-200 p-8 text-center text-xs text-stone-500">
              Belum ada catatan riset tersimpan. Buka e-book dan buat catatan pada bab bacaan Anda.
            </div>
          )}
        </div>
      )}
    </div>
  );
};
