import React, { useState } from 'react';
import { useLibrary } from '../context/LibraryContext';
import {
  BookOpen,
  GraduationCap,
  ShieldCheck,
  Library,
  BookMarked,
  Sliders,
  FileSpreadsheet,
  Clock,
  ArrowLeft,
  KeyRound,
  X,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  Edit2,
  LogIn,
  Lock,
  QrCode,
} from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onOpenImportModal: () => void;
  onOpenQrModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  onOpenImportModal,
  onOpenQrModal,
}) => {
  const {
    activeRole,
    switchRole,
    currentUser,
    loans,
    circulationSettings,
    loginStudent,
    loginAdmin,
    resetAdminPassword,
    isAdminLoggedIn,
    logoutAdmin,
    logoutStudent,
  } = useLibrary();

  const [showAdminAuthModal, setShowAdminAuthModal] = useState(false);
  const [adminAuthMode, setAdminAuthMode] = useState<'login' | 'reset'>('login');
  const [showStudentAuthModal, setShowStudentAuthModal] = useState(false);

  // Form state for student login
  const [studentNameInput, setStudentNameInput] = useState(currentUser.name);
  const [studentNimInput, setStudentNimInput] = useState(currentUser.identifier.replace(/^NIM\.\s*/, ''));
  const [studentDeptInput, setStudentDeptInput] = useState(currentUser.department);

  // Form state for admin login
  const [adminEmailInput, setAdminEmailInput] = useState('');
  const [adminPasswordInput, setAdminPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [adminLoginError, setAdminLoginError] = useState<string | null>(null);

  // Form state for reset password
  const [resetEmailInput, setResetEmailInput] = useState('');
  const [resetNewPasswordInput, setResetNewPasswordInput] = useState('');
  const [resetConfirmPasswordInput, setResetConfirmPasswordInput] = useState('');
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [resetFeedback, setResetFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const activeLoansCount = loans.filter(
    (l) => l.userId === currentUser.id && l.status === 'active'
  ).length;

  const totalActiveLoansGlobal = loans.filter((l) => l.status === 'active').length;

  const handleAdminLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginAdmin(adminPasswordInput);
    if (success) {
      setAdminLoginError(null);
      setAdminPasswordInput('');
      setShowAdminAuthModal(false);
      setCurrentTab('admin-circulation');
    } else {
      setAdminLoginError('Password salah! Akses ditolak. Pastikan password yang Anda masukkan benar.');
    }
  };

  const handleAdminResetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResetFeedback(null);

    if (resetNewPasswordInput.trim() !== resetConfirmPasswordInput.trim()) {
      setResetFeedback({
        type: 'error',
        message: 'Konfirmasi password baru tidak cocok. Silakan periksa kembali!',
      });
      return;
    }

    const result = resetAdminPassword(resetEmailInput, resetNewPasswordInput);
    if (result.success) {
      setResetFeedback({
        type: 'success',
        message: result.message,
      });
      setAdminPasswordInput(resetNewPasswordInput.trim());
      setTimeout(() => {
        setAdminAuthMode('login');
        setResetFeedback(null);
        setResetNewPasswordInput('');
        setResetConfirmPasswordInput('');
      }, 1800);
    } else {
      setResetFeedback({
        type: 'error',
        message: result.message,
      });
    }
  };

  const handleReturnToStudentWeb = () => {
    switchRole('student');
    setCurrentTab('catalog');
  };

  const handleSaveStudentLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentNameInput.trim()) return;
    loginStudent(studentNameInput, studentNimInput || '2201082041', studentDeptInput);
    setShowStudentAuthModal(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-stone-900 border-b border-stone-800 text-stone-100 shadow-md w-full">
        {/* Top Info Bar */}
        <div className="border-b border-stone-800/80 bg-stone-950/70 px-3 sm:px-4 py-1.5 text-xs">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 sm:gap-2 text-stone-400 min-w-0">
              <span className="font-extrabold tracking-wider bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent truncate text-[11px] sm:text-xs">
                IBM ASMI DIGITAL LIBRARY
              </span>
              <span aria-hidden="true" className="text-stone-600 hidden sm:inline">·</span>
              <span className="text-stone-300 hidden sm:inline truncate text-[11px] sm:text-xs">
                Institut Bisnis Dan Multimedia asmi — <span className="text-purple-300 font-semibold">Gilang Raka Ramadhan</span>
              </span>
            </div>

            {/* Circulation indicator, QR Code, & Admin Access */}
            <div className="flex items-center flex-wrap gap-1.5 sm:gap-2.5 shrink-0 ml-auto">
              <div className="hidden xs:flex items-center gap-1 text-[11px] sm:text-xs">
                <span
                  className={`inline-block w-2 h-2 rounded-full shrink-0 ${
                    circulationSettings.systemBorrowingActive ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'
                  }`}
                />
                <span className="text-stone-300">
                  Sirkulasi:{' '}
                  <strong className={circulationSettings.systemBorrowingActive ? 'text-emerald-400 font-medium' : 'text-rose-400 font-medium'}>
                    {circulationSettings.systemBorrowingActive ? 'Buka' : 'Tutup'}
                  </strong>
                </span>
                <span aria-hidden="true" className="text-stone-700 ml-1">|</span>
              </div>

              {/* QR Code & Share Button */}
              <button
                type="button"
                onClick={onOpenQrModal}
                className="flex items-center gap-1 px-2 py-1 rounded bg-purple-950/70 hover:bg-purple-900 text-purple-200 border border-purple-500/40 text-[11px] font-semibold transition-colors cursor-pointer active:scale-95 touch-manipulation"
                title="Pindai QR Code atau salin tautan Gilang Raka Ramadhan Web App"
              >
                <QrCode className="w-3.5 h-3.5 text-purple-400" />
                <span className="hidden sm:inline">📱 Scan QR</span>
                <span className="sm:hidden">QR</span>
              </button>

              <span aria-hidden="true" className="text-stone-700">|</span>

              {activeRole === 'student' ? (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      logoutStudent();
                    }}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-rose-950/50 hover:bg-rose-900 text-rose-200 hover:text-white border border-rose-700/60 text-[11px] font-bold transition-all cursor-pointer active:scale-95 touch-manipulation shadow-xs"
                    title="Keluar dari akun mahasiswa & kembali ke Halaman Login Portal"
                  >
                    <LogIn className="w-3.5 h-3.5 text-rose-300 rotate-180" />
                    <span>Ganti Akun</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setAdminLoginError(null);
                      setAdminPasswordInput('');
                      setAdminAuthMode('login');
                      setResetFeedback(null);
                      setShowAdminAuthModal(true);
                    }}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-purple-950/80 hover:bg-purple-900 text-purple-200 hover:text-white border border-purple-500/50 text-[11px] font-bold transition-all cursor-pointer active:scale-95 touch-manipulation shadow-xs"
                    title="Masuk ke Dashboard Admin (Dilindungi Password)"
                  >
                    <Lock className="w-3.5 h-3.5 text-purple-300" />
                    <span>Admin</span>
                  </button>
                </>
              ) : (
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleReturnToStudentWeb}
                    className="flex items-center gap-1 px-2 py-1 rounded bg-amber-600 hover:bg-amber-500 text-white text-[11px] font-semibold transition-colors shadow-xs cursor-pointer active:scale-95 touch-manipulation"
                    title="Kembali ke tampilan web mahasiswa"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Mhs</span>
                  </button>
                  <button
                    type="button"
                    onClick={logoutAdmin}
                    className="px-2 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 text-[11px] font-medium cursor-pointer active:scale-95 touch-manipulation"
                    title="Kunci / Keluar dari Admin"
                  >
                    Kunci
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between gap-3">
          {/* Brand Logo */}
          <div
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer min-w-0"
            onClick={() => {
              if (activeRole === 'student') setCurrentTab('catalog');
              else setCurrentTab('admin-circulation');
            }}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-purple-700 via-fuchsia-600 to-pink-600 flex items-center justify-center text-white shadow-md border border-purple-400/30 font-black text-sm shrink-0">
              IA
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="font-black text-base sm:text-lg tracking-tight bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent truncate">
                  IBM ASMI
                </div>
                <span className="text-[9px] sm:text-[10px] tracking-widest uppercase px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono font-bold border border-purple-500/30 shrink-0">
                  DIGITAL LIBRARY
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-stone-400 hidden sm:block truncate">
                Institut Bisnis Dan Multimedia asmi · <span className="text-purple-300 font-medium">Gilang Raka Ramadhan Web App</span>
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            {activeRole === 'student' ? (
              /* STUDENT ONLY TABS: Baca, Pinjam, Rak Buku, Kartu */
              <>
                <button
                  type="button"
                  onClick={() => setCurrentTab('catalog')}
                  className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5 ${
                    currentTab === 'catalog'
                      ? 'bg-stone-800 text-purple-300 shadow-inner'
                      : 'text-stone-300 hover:bg-stone-800/60 hover:text-white'
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Katalog E-Book</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentTab('my-loans')}
                  className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5 relative ${
                    currentTab === 'my-loans'
                      ? 'bg-stone-800 text-purple-300 shadow-inner'
                      : 'text-stone-300 hover:bg-stone-800/60 hover:text-white'
                  }`}
                >
                  <BookMarked className="w-4 h-4" />
                  <span>Rak Buku Saya</span>
                  {activeLoansCount > 0 && (
                    <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full bg-purple-600 text-white">
                      {activeLoansCount}
                    </span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentTab('card')}
                  className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5 ${
                    currentTab === 'card'
                      ? 'bg-stone-800 text-purple-300 shadow-inner'
                      : 'text-stone-300 hover:bg-stone-800/60 hover:text-white'
                  }`}
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Kartu Mahasiswa</span>
                </button>
              </>
            ) : (
              /* ADMIN ONLY TABS */
              <>
                <button
                  type="button"
                  onClick={() => setCurrentTab('admin-circulation')}
                  className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                    currentTab === 'admin-circulation'
                      ? 'bg-purple-900/50 text-purple-300 border border-purple-500/30'
                      : 'text-stone-300 hover:bg-stone-800/60 hover:text-white'
                  }`}
                >
                  <Clock className="w-4 h-4" />
                  <span>Dashboard Sirkulasi</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenImportModal}
                  className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors bg-emerald-800/80 hover:bg-emerald-700 text-emerald-100 border border-emerald-600/50 flex items-center gap-1.5"
                >
                  <FileSpreadsheet className="w-4 h-4 text-emerald-300" />
                  <span>Import Excel</span>
                </button>

                <button
                  type="button"
                  onClick={handleReturnToStudentWeb}
                  className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors bg-amber-600 hover:bg-amber-500 text-white flex items-center gap-1.5 ml-2 shadow-sm"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Web Mahasiswa</span>
                </button>
              </>
            )}
          </nav>

          {/* User Profile Badge */}
          <div className="flex items-center gap-2 shrink-0">
            {activeRole === 'student' ? (
              <button
                type="button"
                onClick={() => {
                  setStudentNameInput(currentUser.name);
                  setStudentNimInput(currentUser.identifier.replace(/^NIM\.\s*/, ''));
                  setStudentDeptInput(currentUser.department);
                  setShowStudentAuthModal(true);
                }}
                className="flex items-center gap-2 p-1 sm:px-2.5 sm:py-1 rounded-lg bg-stone-800 hover:bg-stone-750 border border-stone-700 transition-colors text-left group"
                title="Klik untuk mengganti akun / nama mahasiswa yang login"
              >
                <div className="text-right hidden sm:block max-w-[140px]">
                  <div className="text-xs font-semibold text-stone-200 group-hover:text-purple-300 transition-colors flex items-center justify-end gap-1 truncate">
                    <span className="truncate">{currentUser.name}</span>
                    <Edit2 className="w-3 h-3 text-stone-400 opacity-60 group-hover:opacity-100 shrink-0" />
                  </div>
                  <div className="text-[11px] text-stone-400 font-mono truncate">
                    {currentUser.identifier}
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-purple-700 text-purple-100 border border-purple-500 flex items-center justify-center font-bold text-xs shadow shrink-0">
                  MHS
                </div>
              </button>
            ) : (
              <div className="flex items-center gap-2 p-1 sm:px-2.5 sm:py-1 rounded-lg bg-purple-950/60 border border-purple-800 text-left">
                <div className="text-right hidden sm:block max-w-[140px]">
                  <div className="text-xs font-semibold text-purple-200 truncate">
                    Gilang Raka Ramadhan
                  </div>
                  <div className="text-[11px] text-purple-400 font-mono truncate">
                    Administrator Perpustakaan
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-purple-700 text-white border border-purple-500 flex items-center justify-center font-bold text-xs shadow shrink-0">
                  PA
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ========================================================
          MOBILE BOTTOM NAVIGATION DOCK (FIXED AT SCREEN BOTTOM)
          Ensure thumb accessibility and 100% in-screen fit!
      ======================================================== */}
      {activeRole === 'student' && (
        <nav
          aria-label="Navigasi Bawah Mobile"
          className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-stone-900/95 backdrop-blur-md border-t border-stone-800 px-2 py-1.5 flex items-center justify-around shadow-2xl safe-area-bottom"
        >
          <button
            type="button"
            onClick={() => setCurrentTab('catalog')}
            className={`flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-lg transition-colors text-[10px] font-medium min-h-[44px] ${
              currentTab === 'catalog'
                ? 'text-purple-300 font-bold'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <BookOpen className="w-4 h-4 mb-0.5" />
            <span>Katalog</span>
          </button>

          <button
            type="button"
            onClick={() => setCurrentTab('my-loans')}
            className={`flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-lg transition-colors text-[10px] font-medium relative min-h-[44px] ${
              currentTab === 'my-loans'
                ? 'text-purple-300 font-bold'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <div className="relative">
              <BookMarked className="w-4 h-4 mb-0.5" />
              {activeLoansCount > 0 && (
                <span className="absolute -top-1 -right-2.5 w-4 h-4 rounded-full bg-purple-600 text-white text-[9px] font-bold flex items-center justify-center">
                  {activeLoansCount}
                </span>
              )}
            </div>
            <span>Rak Buku</span>
          </button>

          <button
            type="button"
            onClick={() => setCurrentTab('card')}
            className={`flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-lg transition-colors text-[10px] font-medium min-h-[44px] ${
              currentTab === 'card'
                ? 'text-purple-300 font-bold'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <GraduationCap className="w-4 h-4 mb-0.5" />
            <span>Kartu Mhs</span>
          </button>

          <button
            type="button"
            onClick={onOpenQrModal}
            className="flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-lg transition-colors text-[10px] font-medium text-stone-400 hover:text-stone-200 min-h-[44px]"
            title="Scan QR atau bagikan link"
          >
            <QrCode className="w-4 h-4 mb-0.5 text-purple-400" />
            <span>Scan QR</span>
          </button>

          <button
            type="button"
            onClick={logoutStudent}
            className="flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-lg transition-colors text-[10px] font-semibold text-rose-300 hover:text-white min-h-[46px] cursor-pointer touch-manipulation active:scale-95 bg-rose-950/30 hover:bg-rose-900/50 border border-rose-800/40 mx-0.5"
            title="Keluar / Ganti Akun Mahasiswa"
          >
            <LogIn className="w-4 h-4 mb-0.5 text-rose-400 rotate-180" />
            <span>Keluar</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setAdminLoginError(null);
              setAdminPasswordInput('');
              setAdminAuthMode('login');
              setResetFeedback(null);
              setShowAdminAuthModal(true);
            }}
            className="flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-lg transition-colors text-[10px] font-semibold text-purple-300 hover:text-white min-h-[46px] cursor-pointer touch-manipulation active:scale-95 bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/50 mx-0.5"
            title="Masuk ke Dashboard Admin"
          >
            <Lock className="w-4 h-4 mb-0.5 text-purple-400" />
            <span>Admin</span>
          </button>
        </nav>
      )}

      {/* ========================================================
          MODAL LOGIN ADMIN (DILINDUNGI PASSWORD - MAHASISWA TIDAK BISA SEMBARANGAN MASUK)
      ======================================================== */}
      {showAdminAuthModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/80 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowAdminAuthModal(false);
          }}
        >
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[92vh] flex flex-col">
            {/* Modal Header */}
            <div className="px-5 py-3.5 sm:px-6 sm:py-4 bg-gradient-to-r from-purple-950 via-stone-900 to-purple-950 text-white flex items-center justify-between border-b border-purple-900 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-purple-300 shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-white leading-tight">
                    Login Pengelola Perpustakaan
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-purple-200">
                    IBM ASMI DIGITAL LIBRARY
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowAdminAuthModal(false)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
                title="Tutup Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1">
              {adminAuthMode === 'login' ? (
                /* ================== LOGIN ADMIN FORM ================== */
                <form onSubmit={handleAdminLoginSubmit} className="p-5 sm:p-6 space-y-4 text-xs">
                  <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl text-purple-900 leading-relaxed text-[11px] sm:text-xs">
                    Panel ini khusus untuk administrator perpustakaan (<strong>Gilang Raka Ramadhan</strong>). Masukkan kata sandi administrator Anda untuk masuk ke sistem.
                  </div>

                  {adminLoginError && (
                    <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-900 flex items-start gap-2 text-xs">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <span>{adminLoginError}</span>
                    </div>
                  )}

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      Email / Akun Administrator *:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Masukkan email administrator..."
                      value={adminEmailInput}
                      onChange={(e) => setAdminEmailInput(e.target.value)}
                      className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-lg text-xs font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      Kata Sandi (Password) *:
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        placeholder="Masukkan kata sandi admin..."
                        value={adminPasswordInput}
                        onChange={(e) => {
                          setAdminPasswordInput(e.target.value);
                          if (adminLoginError) setAdminLoginError(null);
                        }}
                        className="w-full p-2.5 pr-10 bg-stone-50 border border-stone-300 rounded-lg text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-1"
                        title={showPassword ? 'Sembunyikan password' : 'Lihat password'}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>


                    {/* Reset Password Action Link */}
                    <div className="flex items-center justify-between mt-2 pt-1 text-[11px]">
                      <span className="text-stone-400">Keamanan data terenkripsi</span>
                      <button
                        type="button"
                        onClick={() => {
                          setAdminLoginError(null);
                          setResetFeedback(null);
                          setAdminAuthMode('reset');
                        }}
                        className="text-purple-700 hover:text-purple-800 font-semibold hover:underline flex items-center gap-1 transition-colors"
                      >
                        <KeyRound className="w-3.5 h-3.5 text-purple-600" />
                        <span>Lupa kata sandi? Reset</span>
                      </button>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowAdminAuthModal(false)}
                      className="px-4 py-2 rounded-lg text-stone-600 hover:bg-stone-100 font-medium text-xs cursor-pointer"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-lg bg-purple-700 hover:bg-purple-800 text-white font-semibold shadow-sm transition-colors flex items-center gap-1.5 text-xs cursor-pointer active:scale-95 touch-manipulation"
                    >
                      <LogIn className="w-4 h-4" />
                      <span>Login</span>
                    </button>
                  </div>
                </form>
              ) : (
              /* ================== RESET PASSWORD FORM ================== */
              <form onSubmit={handleAdminResetSubmit} className="p-6 space-y-4 text-xs">
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 leading-relaxed">
                  <div className="flex items-center gap-1.5 font-bold text-amber-950 mb-1">
                    <KeyRound className="w-4 h-4 text-amber-700" />
                    <span>Pemulihan & Reset Kata Sandi</span>
                  </div>
                  <p className="text-[11px] text-amber-800">
                    Masukkan email resmi administrator yang terdaftar (<strong>perpustakaanibmasmi@gmail.com</strong> atau <strong>gilangraka300@gmail.com</strong>) untuk memverifikasi identitas dan membuat kata sandi baru.
                  </p>
                </div>

                {resetFeedback && (
                  <div
                    className={`p-3 border rounded-xl flex items-start gap-2 ${
                      resetFeedback.type === 'success'
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                        : 'bg-rose-50 border-rose-200 text-rose-900'
                    }`}
                  >
                    {resetFeedback.type === 'success' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    )}
                    <span>{resetFeedback.message}</span>
                  </div>
                )}

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Email Administrator Terdaftar *:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="perpustakaanibmasmi@gmail.com / gilangraka300@gmail.com"
                    value={resetEmailInput}
                    onChange={(e) => setResetEmailInput(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-lg text-xs font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">
                    Hanya email resmi administrator Gilang Raka Ramadhan yang dapat melakukan reset
                  </p>
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Kata Sandi Baru *:
                  </label>
                  <div className="relative">
                    <input
                      type={showResetPassword ? 'text' : 'password'}
                      required
                      minLength={4}
                      placeholder="Masukkan kata sandi baru..."
                      value={resetNewPasswordInput}
                      onChange={(e) => setResetNewPasswordInput(e.target.value)}
                      className="w-full p-2.5 pr-10 bg-stone-50 border border-stone-300 rounded-lg text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600"
                    />
                    <button
                      type="button"
                      onClick={() => setShowResetPassword(!showResetPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                    >
                      {showResetPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Konfirmasi Kata Sandi Baru *:
                  </label>
                  <input
                    type={showResetPassword ? 'text' : 'password'}
                    required
                    minLength={4}
                    placeholder="Ulangi kata sandi baru..."
                    value={resetConfirmPasswordInput}
                    onChange={(e) => setResetConfirmPasswordInput(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-lg text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600"
                  />
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setResetFeedback(null);
                      setAdminAuthMode('login');
                    }}
                    className="text-stone-600 hover:text-stone-900 font-medium text-xs flex items-center gap-1 px-2 py-1.5 rounded-lg hover:bg-stone-100 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Kembali ke Login</span>
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold shadow-sm transition-colors flex items-center gap-1.5"
                  >
                    <KeyRound className="w-4 h-4" />
                    <span>Simpan Kata Sandi Baru</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    )}

      {/* ========================================================
          MODAL IDENTITAS MAHASISWA (PUBLIK)
      ======================================================== */}
      {showStudentAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden">
            <div className="px-6 py-4 bg-stone-900 text-stone-100 flex items-center justify-between border-b border-stone-800">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-purple-400" />
                <h3 className="font-bold text-base text-stone-100">
                  Identitas Mahasiswa IBM ASMI
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowStudentAuthModal(false)}
                className="p-1 rounded-lg text-stone-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveStudentLogin} className="p-6 space-y-4 text-xs">
              <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl text-purple-900 leading-relaxed">
                Website ini dibagikan ke publik. Masukkan Nama & NIM Anda sendiri agar riwayat membaca, daftar buku yang Anda pinjam, dan kartu anggota tercatat atas nama Anda di Institut Bisnis Dan Multimedia asmi.
              </div>

              <div>
                <label className="block font-semibold text-stone-800 mb-1">
                  Nama Mahasiswa *:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Masukkan nama lengkap Anda..."
                  value={studentNameInput}
                  onChange={(e) => setStudentNameInput(e.target.value)}
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-lg text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600 font-medium"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-800 mb-1">
                  Nomor Induk Mahasiswa (NIM) *:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: 2201082041"
                  value={studentNimInput}
                  onChange={(e) => setStudentNimInput(e.target.value)}
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-lg text-xs font-mono text-stone-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-800 mb-1">
                  Program Studi:
                </label>
                <input
                  type="text"
                  placeholder="Contoh: S1 Sistem Informasi / S1 Administrasi Bisnis / S1 Manajemen / S1 Akuntansi"
                  value={studentDeptInput}
                  onChange={(e) => setStudentDeptInput(e.target.value)}
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-lg text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600"
                />
              </div>

              <div className="pt-2 border-t border-stone-200 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowStudentAuthModal(false)}
                  className="px-4 py-2 rounded-lg text-stone-600 hover:bg-stone-200 font-medium"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-purple-700 hover:bg-purple-800 text-white font-semibold shadow-sm transition-colors flex items-center gap-1.5"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
