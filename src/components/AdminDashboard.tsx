import React, { useState, useEffect } from 'react';
import { useLibrary } from '../context/LibraryContext';
import { Book, CirculationSettings } from '../types/library';
import { exportBooksToExcel } from '../utils/excelHelper';
import {
  LayoutDashboard,
  BookOpen,
  BookMarked,
  Gift,
  MapPin,
  Users,
  Monitor,
  FileBarChart,
  Settings,
  HelpCircle,
  Menu,
  Bell,
  Printer,
  ChevronRight,
  Clock,
  Repeat,
  Plus,
  FileSpreadsheet,
  Download,
  Search,
  ToggleLeft,
  ToggleRight,
  Edit3,
  Trash2,
  CheckCircle2,
  ArrowLeft,
  LogOut,
  Sparkles,
  Layers,
  Calendar,
  X,
  UserCheck,
  QrCode,
  Check,
  Shield,
  FileText,
  BookmarkCheck,
  Info,
  ExternalLink,
} from 'lucide-react';

interface AdminDashboardProps {
  onOpenAddModal: () => void;
  onOpenImportModal: () => void;
  onEditBook: (book: Book) => void;
  onOpenQrModal?: () => void;
  initialTab?: string;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  onOpenAddModal,
  onOpenImportModal,
  onEditBook,
  onOpenQrModal,
  initialTab = 'dashboard',
}) => {
  const {
    books,
    loans,
    circulationSettings,
    updateCirculationSettings,
    toggleBookBorrowable,
    deleteBook,
    returnBook,
    renewLoan,
    revokeLoan,
    switchRole,
    logoutAdmin,
  } = useLibrary();

  const [activeSidebarMenu, setActiveSidebarMenu] = useState<string>(initialTab);
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState<boolean>(false);
  const [searchBookQuery, setSearchBookQuery] = useState('');
  const [dateRange, setDateRange] = useState('01-10-2026 - 31-10-2026');
  const [selectedExtraFilter, setSelectedExtraFilter] = useState('Semua');
  const [feedback, setFeedback] = useState<string | null>(null);

  // Live timestamp formatted: "13 Oct 2026, 10:50:21"
  const [currentTimeStr, setCurrentTimeStr] = useState<string>('');

  // Sample donation proposals
  const [donations, setDonations] = useState([
    { id: 'don-1', title: 'Data Analytics with Python', donor: 'Dr. Hendra Wijaya', targetDate: '25-10-2026', status: 'Ditinjau' },
    { id: 'don-2', title: 'Manajemen Keuangan Syariah Modern', donor: 'Alumni IBM ASMI 2021', targetDate: '30-10-2026', status: 'Disetujui' },
    { id: 'don-3', title: 'Strategi Pemasaran Digital Gen Z', donor: 'Himpunan Mahasiswa Bisnis', targetDate: '05-11-2026', status: 'Tersedia' },
  ]);
  const [newDonationTitle, setNewDonationTitle] = useState('');
  const [newDonationDonor, setNewDonationDonor] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setCurrentTimeStr(now.toLocaleDateString('id-ID', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Settings form copy
  const [settingsForm, setSettingsForm] = useState<CirculationSettings>(circulationSettings);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateCirculationSettings(settingsForm);
    setFeedback('Pengaturan sirkulasi IBM ASMI berhasil diperbarui!');
    setTimeout(() => setFeedback(null), 3000);
  };

  const handleAddDonation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDonationTitle.trim()) return;
    setDonations((prev) => [
      {
        id: `don-${Date.now()}`,
        title: newDonationTitle.trim(),
        donor: newDonationDonor.trim() || 'Peminjam / Mahasiswa IBM ASMI',
        targetDate: '30-11-2026',
        status: 'Ditinjau',
      },
      ...prev,
    ]);
    setNewDonationTitle('');
    setNewDonationDonor('');
    setFeedback('Rencana donasi e-book berhasil didaftarkan!');
    setTimeout(() => setFeedback(null), 3000);
  };

  const activeLoans = loans.filter((l) => l.status === 'active');
  const borrowableBooks = books.filter((b) => b.borrowable);
  const nonBorrowableBooks = books.filter((b) => !b.borrowable);

  const filteredBooks = books.filter((b) => {
    const query = searchBookQuery.toLowerCase();
    const matchesSearch =
      b.title.toLowerCase().includes(query) ||
      b.author.toLowerCase().includes(query) ||
      b.ddc.includes(query) ||
      b.isbn.includes(query);

    if (selectedExtraFilter === 'Koleksi (Bisa Dipinjam)') {
      return matchesSearch && b.borrowable;
    }
    if (selectedExtraFilter === 'Non Koleksi (Hanya Baca)') {
      return matchesSearch && !b.borrowable;
    }
    return matchesSearch;
  });

  const uniqueReadersCount = new Set(loans.map((l) => l.userName)).size || 2;

  // Sidebar menu items list
  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'rekomendasi', label: 'Buku Rekomendasi Kami', icon: BookMarked },
    { id: 'buku', label: 'Katalog Buku', icon: BookOpen },
    { id: 'donasi', label: 'Rencana Donasi', icon: Gift },
    { id: 'lokal', label: 'Konten Lokal', icon: MapPin },
    { id: 'anggota', label: 'Anggota Perpus', icon: Users, badge: activeLoans.length },
    { id: 'aplikasi', label: 'Aplikasi & Sistem', icon: Monitor },
    { id: 'laporan', label: 'Laporan Sirkulasi', icon: FileBarChart },
    { id: 'pengaturan', label: 'Pengaturan', icon: Settings },
    { id: 'panduan', label: 'Panduan Pengguna', icon: HelpCircle },
  ];

  const handleSelectMenu = (menuId: string) => {
    setActiveSidebarMenu(menuId);
    setIsMobileDrawerOpen(false); // Close mobile drawer immediately upon selection
  };

  return (
    <div className="min-h-screen bg-[#f1f3f7] flex text-stone-800 antialiased font-sans relative">
      {/* ========================================================
          MOBILE OVERLAY BACKDROP
      ======================================================== */}
      {isMobileDrawerOpen && (
        <div
          className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs z-50 md:hidden animate-in fade-in duration-200"
          onClick={() => setIsMobileDrawerOpen(false)}
        />
      )}

      {/* ========================================================
          MOBILE SLIDE-OVER DRAWER (FOR SMARTPHONES)
      ======================================================== */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] bg-white shadow-2xl flex flex-col md:hidden transition-transform duration-200 ease-in-out ${
          isMobileDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 border-b border-stone-100 flex items-center justify-between bg-stone-50">
          <div>
            <div className="font-black text-xl tracking-tight leading-none bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
              IBM ASMI
            </div>
            <div className="text-[9px] font-bold tracking-[0.2em] text-purple-600 uppercase mt-0.5">
              PANEL PENGELOLA
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsMobileDrawerOpen(false)}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-800 hover:bg-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-3 space-y-1 text-xs font-medium">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSidebarMenu === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelectMenu(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 font-bold shadow-2xs'
                    : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-stone-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="p-3 border-t border-stone-100 space-y-2 bg-stone-50">
          <button
            type="button"
            onClick={() => {
              setIsMobileDrawerOpen(false);
              switchRole('student');
            }}
            className="w-full py-2.5 px-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer active:scale-95 touch-manipulation"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Ke Web Mahasiswa</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setIsMobileDrawerOpen(false);
              logoutAdmin();
            }}
            className="w-full py-2.5 px-3 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border border-rose-200 transition-colors cursor-pointer active:scale-95 touch-manipulation"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout Admin</span>
          </button>
        </div>
      </aside>

      {/* ========================================================
          DESKTOP LEFT SIDEBAR
      ======================================================== */}
      <aside
        className={`hidden md:flex ${
          sidebarCollapsed ? 'w-20' : 'w-64'
        } bg-white border-r border-stone-200/80 flex-col shrink-0 transition-all duration-300 shadow-xs z-30 sticky top-0 h-screen`}
      >
        <div className="p-5 border-b border-stone-100 flex items-center justify-between">
          {!sidebarCollapsed ? (
            <div>
              <div className="font-black text-2xl tracking-tight leading-none bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                IBM ASMI
              </div>
              <div className="text-[10px] font-bold tracking-[0.22em] text-purple-600 uppercase mt-0.5">
                DIGITAL LIBRARY
              </div>
            </div>
          ) : (
            <div className="w-10 h-10 rounded-xl bg-purple-700 text-white font-black flex items-center justify-center text-sm shadow">
              IA
            </div>
          )}
        </div>

        <nav className="flex-1 overflow-y-auto p-3 space-y-1 text-[13px] font-medium text-stone-600">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSidebarMenu === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveSidebarMenu(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 font-bold shadow-2xs'
                    : 'hover:bg-stone-50 hover:text-stone-900'
                }`}
                title={item.label}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-blue-600' : 'text-stone-400'}`} />
                  {!sidebarCollapsed && <span>{item.label}</span>}
                </div>
                {!sidebarCollapsed && item.badge !== undefined && item.badge > 0 && (
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="p-3 border-t border-stone-100 space-y-2">
          <button
            type="button"
            onClick={() => switchRole('student')}
            className="w-full py-2 px-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
            title="Buka portal web mahasiswa"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {!sidebarCollapsed && <span>Ke Web Mahasiswa</span>}
          </button>

          <button
            type="button"
            onClick={logoutAdmin}
            className="w-full py-2 px-3 bg-stone-100 hover:bg-rose-50 hover:text-rose-700 text-stone-600 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            title="Keluar dari akun admin"
          >
            <LogOut className="w-3.5 h-3.5" />
            {!sidebarCollapsed && <span>Logout Admin</span>}
          </button>
        </div>
      </aside>

      {/* ========================================================
          MAIN CONTENT AREA
      ======================================================== */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto w-full">
        {/* TOP NAVBAR */}
        <header className="h-16 bg-white border-b border-stone-200/80 px-3 sm:px-6 flex items-center justify-between shrink-0 shadow-2xs sticky top-0 z-20">
          <div className="flex items-center gap-2 sm:gap-4 min-w-0">
            {/* Hamburger for mobile */}
            <button
              type="button"
              onClick={() => setIsMobileDrawerOpen(true)}
              className="p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 md:hidden transition-colors cursor-pointer active:scale-95 touch-manipulation"
              title="Buka Menu Sidebar"
            >
              <Menu className="w-5 h-5 text-purple-700" />
            </button>

            {/* Collapse toggle for desktop */}
            <button
              type="button"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-1.5 rounded-lg text-stone-500 hover:text-stone-800 hover:bg-stone-100 hidden md:block transition-colors cursor-pointer"
              title="Toggle Menu Sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="min-w-0">
              <span className="font-bold text-stone-900 text-xs sm:text-base truncate block">
                Institut Bisnis Dan Multimedia asmi
              </span>
              <span className="text-[10px] text-purple-600 font-semibold block md:hidden">
                Panel Admin Perpustakaan
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* QR Code Button */}
            {onOpenQrModal && (
              <button
                type="button"
                onClick={onOpenQrModal}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 text-xs font-semibold transition-colors cursor-pointer active:scale-95 touch-manipulation"
                title="Tampilkan & Cetak QR Code serta Tautan Singkat Web Perpustakaan"
              >
                <QrCode className="w-3.5 h-3.5 text-purple-600" />
                <span className="hidden sm:inline">QR Web</span>
              </button>
            )}

            {/* Quick Switch to Student Web on Mobile */}
            <button
              type="button"
              onClick={() => switchRole('student')}
              className="px-2.5 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 text-xs font-semibold md:hidden transition-colors cursor-pointer active:scale-95 touch-manipulation"
              title="Buka Web Mahasiswa"
            >
              <span className="text-[11px] font-bold">Mhs</span>
            </button>

            {/* Quick Logout on Mobile */}
            <button
              type="button"
              onClick={logoutAdmin}
              className="p-1.5 rounded-xl text-stone-500 hover:text-rose-600 hover:bg-rose-50 md:hidden transition-colors cursor-pointer active:scale-95 touch-manipulation"
              title="Keluar Admin"
            >
              <LogOut className="w-4 h-4" />
            </button>

            <button
              type="button"
              className="p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors relative hidden sm:block"
              title="Notifikasi Sistem"
            >
              <Bell className="w-4 h-4" />
              {activeLoans.length > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500" />
              )}
            </button>

            {/* Profile Avatar "PA" */}
            <div className="hidden sm:flex items-center gap-2.5 pl-2 border-l border-stone-200">
              <div className="w-8 h-8 rounded-full bg-[#9333ea] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                PA
              </div>
              <div className="text-left hidden lg:block">
                <span className="text-xs font-medium text-stone-800 block">
                  perpustakaanibmasmi@gmail.com
                </span>
                <span className="text-[10px] text-stone-400 font-mono">
                  Gilang Raka Ramadhan (Admin)
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* NOTIFICATION FEEDBACK TOAST */}
        {feedback && (
          <div className="m-3 sm:m-6 mb-0 p-3 sm:p-4 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs flex items-center gap-2 shadow-sm animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-medium">{feedback}</span>
          </div>
        )}

        {/* MAIN BODY CONTENT */}
        <main className="p-3 sm:p-6 space-y-4 sm:space-y-5 flex-1 pb-24 md:pb-8">
          {/* FILTER BAR & DATE RANGE ROW */}
          <div className="bg-white rounded-xl border border-stone-200/90 p-3 sm:p-4 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <div className="flex items-center gap-2">
                <span className="font-medium text-stone-600 whitespace-nowrap text-[11px] sm:text-xs">Periode:</span>
                <input
                  type="text"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="px-2.5 py-1 sm:py-1.5 bg-stone-50 border border-stone-300 rounded-lg text-stone-800 font-mono text-[11px] sm:text-xs focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="font-medium text-stone-600 whitespace-nowrap text-[11px] sm:text-xs">Kategori:</span>
                <select
                  value={selectedExtraFilter}
                  onChange={(e) => setSelectedExtraFilter(e.target.value)}
                  className="px-2.5 py-1 sm:py-1.5 bg-stone-50 border border-stone-300 rounded-lg text-stone-800 font-medium text-[11px] sm:text-xs focus:outline-none focus:ring-1 focus:ring-purple-500"
                >
                  <option value="Semua">Semua Buku</option>
                  <option value="Koleksi (Bisa Dipinjam)">Koleksi (Bisa Dipinjam)</option>
                  <option value="Non Koleksi (Hanya Baca)">Non Koleksi (Hanya Baca)</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                type="button"
                onClick={() => exportBooksToExcel(books)}
                className="px-3 py-1.5 rounded-lg bg-[#2563eb] hover:bg-blue-700 text-white flex items-center gap-1.5 shadow-xs transition-colors text-xs font-semibold cursor-pointer active:scale-95 touch-manipulation"
                title="Cetak & Export Laporan Excel"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Export Excel</span>
              </button>
            </div>
          </div>

          {/* BLUE ALERT BAR */}
          <div className="bg-[#3b82f6] text-white rounded-xl px-4 py-2.5 sm:px-5 sm:py-3 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2 text-xs font-medium">
            <div>
              Terakhir diperbarui pada :{' '}
              <span className="font-mono font-semibold">{currentTimeStr || '13 Oct 2026, 10:50:21'}</span>
            </div>
            <div className="opacity-95 text-[11px] sm:text-xs">
              Status Sirkulasi:{' '}
              <strong className="underline">
                {circulationSettings.systemBorrowingActive ? 'Aktif Terbuka' : 'Ditutup Sementara'}
              </strong>{' '}
              · Klasifikasi DDC Edisi 23
            </div>
          </div>

          {/* ========================================================
              VIEW: DASHBOARD METRIC CARDS & WIDGETS
          ======================================================== */}
          {activeSidebarMenu === 'dashboard' && (
            <>
              {/* 6 COLORFUL METRIC CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
                {/* 1. Purple Card: Koleksi */}
                <div
                  onClick={() => setActiveSidebarMenu('buku')}
                  className="relative rounded-2xl p-5 sm:p-6 text-white overflow-hidden shadow-sm cursor-pointer transition-transform hover:-translate-y-0.5 active:scale-98 bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed]"
                >
                  <div className="relative z-10 space-y-1">
                    <h3 className="text-xl font-bold tracking-tight">Koleksi</h3>
                    <p className="text-xs text-purple-100 opacity-90">
                      Daftar Buku Koleksi ({borrowableBooks.length} Judul)
                    </p>
                  </div>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
                    <BookOpen className="w-20 h-20" />
                  </div>
                  <div className="mt-6 pt-2 border-t border-white/20 flex items-center justify-end text-xs font-semibold text-white/90">
                    <span>Lihat Koleksi</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>

                {/* 2. Pink Card: Non Koleksi */}
                <div
                  onClick={() => setActiveSidebarMenu('buku')}
                  className="relative rounded-2xl p-5 sm:p-6 text-white overflow-hidden shadow-sm cursor-pointer transition-transform hover:-translate-y-0.5 active:scale-98 bg-gradient-to-br from-[#f43f5e] to-[#ec4899]"
                >
                  <div className="relative z-10 space-y-1">
                    <h3 className="text-xl font-bold tracking-tight">Non Koleksi</h3>
                    <p className="text-xs text-pink-100 opacity-90">
                      Daftar Buku Non Koleksi ({nonBorrowableBooks.length} Judul)
                    </p>
                  </div>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
                    <BookOpen className="w-20 h-20" />
                  </div>
                  <div className="mt-6 pt-2 border-t border-white/20 flex items-center justify-end text-xs font-semibold text-white/90">
                    <span>Lihat Non Koleksi</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>

                {/* 3. Emerald Card: Semua Katalog */}
                <div
                  onClick={() => setActiveSidebarMenu('buku')}
                  className="relative rounded-2xl p-5 sm:p-6 text-white overflow-hidden shadow-sm cursor-pointer transition-transform hover:-translate-y-0.5 active:scale-98 bg-gradient-to-br from-[#10b981] to-[#059669]"
                >
                  <div className="relative z-10 space-y-1">
                    <h3 className="text-xl font-bold tracking-tight">Semua Katalog</h3>
                    <p className="text-xs text-emerald-100 opacity-90">
                      Daftar Semua Buku ({books.length} Judul)
                    </p>
                  </div>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
                    <BookOpen className="w-20 h-20" />
                  </div>
                  <div className="mt-6 pt-2 border-t border-white/20 flex items-center justify-end text-xs font-semibold text-white/90">
                    <span>Kelola Katalog</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>

                {/* 4. Teal Card: Pembaca */}
                <div
                  onClick={() => setActiveSidebarMenu('anggota')}
                  className="relative rounded-2xl p-5 sm:p-6 text-white overflow-hidden shadow-sm cursor-pointer transition-transform hover:-translate-y-0.5 active:scale-98 bg-[#059669]"
                >
                  <div className="relative z-10 space-y-1">
                    <h3 className="text-xl font-bold tracking-tight">Anggota Aktif</h3>
                    <p className="text-xs text-emerald-100 opacity-90">
                      Total pembaca : {uniqueReadersCount} Mahasiswa
                    </p>
                  </div>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
                    <Users className="w-20 h-20" />
                  </div>
                  <div className="mt-6 pt-2 border-t border-white/20 flex items-center justify-end text-xs font-semibold text-white/90">
                    <span>Lihat Peminjam</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>

                {/* 5. Royal Blue Card: Kuota & Kebijakan */}
                <div
                  onClick={() => setActiveSidebarMenu('pengaturan')}
                  className="relative rounded-2xl p-5 sm:p-6 text-white overflow-hidden shadow-sm cursor-pointer bg-[#3b82f6] transition-transform hover:-translate-y-0.5 active:scale-98"
                >
                  <div className="relative z-10 space-y-1">
                    <h3 className="text-xl font-bold tracking-tight">Kebijakan Pinjam</h3>
                    <p className="text-xs text-blue-100 opacity-90">
                      Durasi : {circulationSettings.defaultDurationDays} Hari · Kuota: {circulationSettings.maxLoansPerStudent} E-Book
                    </p>
                  </div>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
                    <Clock className="w-20 h-20" />
                  </div>
                  <div className="mt-6 pt-2 border-t border-white/20 flex items-center justify-end text-xs font-semibold text-white/90">
                    <span>Ubah Kebijakan</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>

                {/* 6. Crimson Pink Card: Siklus Konten */}
                <div
                  onClick={() => setActiveSidebarMenu('anggota')}
                  className="relative rounded-2xl p-5 sm:p-6 text-white overflow-hidden shadow-sm cursor-pointer bg-[#e11d48] transition-transform hover:-translate-y-0.5 active:scale-98"
                >
                  <div className="relative z-10 space-y-1">
                    <h3 className="text-xl font-bold tracking-tight">Sirkulasi Aktif</h3>
                    <p className="text-xs text-rose-100 opacity-90">
                      Sedang Dipinjam : {activeLoans.length} E-Book
                    </p>
                  </div>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
                    <Repeat className="w-20 h-20" />
                  </div>
                  <div className="mt-6 pt-2 border-t border-white/20 flex items-center justify-end text-xs font-semibold text-white/90">
                    <span>Kontrol Sirkulasi</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>

              {/* ANALYTICS WIDGETS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 pt-1">
                {/* Widget Left: Total Durasi Baca Terlama */}
                <div className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-5 shadow-2xs space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-2.5">
                    <h4 className="font-bold text-stone-800 text-xs sm:text-sm">
                      Koleksi E-Book Utama IBM ASMI
                    </h4>
                    <span className="text-[10px] sm:text-[11px] text-stone-400">Statistik DDC</span>
                  </div>

                  <div className="space-y-2.5">
                    {books.slice(0, 4).map((book, idx) => (
                      <div key={book.id} className="flex items-center gap-3 text-xs">
                        <span className="w-6 h-6 rounded-full bg-purple-50 text-purple-700 font-bold flex items-center justify-center shrink-0 text-xs">
                          {idx + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-stone-800 truncate">
                            {book.title}
                          </div>
                          <div className="text-[10px] text-stone-400">
                            {book.author} · DDC {book.ddc} ({book.category})
                          </div>
                        </div>
                        <span className="text-stone-500 font-mono text-[10px] shrink-0">
                          {book.totalPages} hlm
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Widget Right: Total Sirkulasi Konten Terbanyak */}
                <div className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-5 shadow-2xs space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-2.5">
                    <h4 className="font-bold text-stone-800 text-xs sm:text-sm">
                      Peminjaman Berjalan ({activeLoans.length} Aktif)
                    </h4>
                    <button
                      type="button"
                      onClick={() => setActiveSidebarMenu('anggota')}
                      className="text-xs text-blue-600 font-medium hover:underline cursor-pointer"
                    >
                      Lihat Semua
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {activeLoans.length > 0 ? (
                      activeLoans.slice(0, 3).map((loan) => (
                        <div
                          key={loan.id}
                          className="p-2.5 sm:p-3 bg-stone-50 rounded-xl flex items-center justify-between gap-2.5 text-xs"
                        >
                          <div className="min-w-0 flex-1">
                            <span className="font-semibold text-stone-900 block truncate">
                              {loan.bookTitle}
                            </span>
                            <span className="text-[10px] text-stone-500">
                              Peminjam: <strong>{loan.userName}</strong> ({loan.userNim})
                            </span>
                          </div>
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800 shrink-0">
                            Dipinjam
                          </span>
                        </div>
                      ))
                    ) : (
                      <div className="py-6 text-center text-xs text-stone-400">
                        Belum ada peminjaman aktif hari ini.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ========================================================
              TAB: BUKU (KELOLA KOLEKSI, TAMBAH, IMPORT EXCEL)
          ======================================================== */}
          {activeSidebarMenu === 'buku' && (
            <div className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-6 shadow-2xs space-y-4 sm:space-y-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 border-b border-stone-100 pb-4">
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-stone-900">
                    Katalog Buku & Koleksi E-Book IBM ASMI
                  </h3>
                  <p className="text-xs text-stone-500">
                    Kelola status peminjaman per buku (bisa dipinjam vs hanya baca), edit cover, tambah buku, atau import Excel.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onOpenAddModal}
                    className="flex-1 sm:flex-none px-3.5 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-xl text-xs font-semibold shadow-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer active:scale-95 touch-manipulation"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Tambah Buku</span>
                  </button>

                  <button
                    type="button"
                    onClick={onOpenImportModal}
                    className="flex-1 sm:flex-none px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer active:scale-95 touch-manipulation"
                  >
                    <FileSpreadsheet className="w-4 h-4" />
                    <span>Import Excel</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => exportBooksToExcel(books)}
                    className="px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-semibold border border-stone-200 flex items-center justify-center gap-1.5 transition-colors cursor-pointer active:scale-95 touch-manipulation"
                  >
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Export Excel</span>
                  </button>
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder="Cari judul e-book, penulis, nomor DDC, atau ISBN..."
                  value={searchBookQuery}
                  onChange={(e) => setSearchBookQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-xs bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>

              {/* Table */}
              <div className="border border-stone-200 rounded-xl overflow-x-auto">
                <table className="w-full text-left text-xs min-w-[620px]">
                  <thead className="bg-stone-100/70 border-b border-stone-200 text-stone-600 font-semibold">
                    <tr>
                      <th className="py-3 px-3 sm:px-4">Cover</th>
                      <th className="py-3 px-3 sm:px-4">Judul & Pengarang</th>
                      <th className="py-3 px-3 sm:px-4">DDC / Kategori</th>
                      <th className="py-3 px-3 sm:px-4">Salinan</th>
                      <th className="py-3 px-3 sm:px-4">Status Peminjaman</th>
                      <th className="py-3 px-3 sm:px-4 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {filteredBooks.map((book) => (
                      <tr key={book.id} className="hover:bg-stone-50/70 transition-colors">
                        <td className="py-2.5 px-3 sm:px-4">
                          <img
                            src={book.coverUrl}
                            alt={book.title}
                            className="w-10 h-14 object-cover rounded shadow-2xs border border-stone-200"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                        </td>
                        <td className="py-2.5 px-3 sm:px-4">
                          <span className="font-bold text-stone-900 block max-w-xs truncate">
                            {book.title}
                          </span>
                          <span className="text-[11px] text-stone-500">
                            {book.author} ({book.year})
                          </span>
                        </td>
                        <td className="py-2.5 px-3 sm:px-4">
                          <span className="font-mono text-purple-700 font-bold block">
                            DDC {book.ddc}
                          </span>
                          <span className="text-[11px] text-stone-500">{book.category}</span>
                        </td>
                        <td className="py-2.5 px-3 sm:px-4 font-semibold text-stone-800">
                          {book.availableCopies} / {book.totalCopies}
                        </td>
                        <td className="py-2.5 px-3 sm:px-4">
                          <button
                            type="button"
                            onClick={() => toggleBookBorrowable(book.id)}
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[11px] font-semibold transition-all cursor-pointer active:scale-95 touch-manipulation ${
                              book.borrowable
                                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                                : 'bg-rose-50 text-rose-800 border border-rose-200 hover:bg-rose-100'
                            }`}
                            title="Klik untuk mengubah status peminjaman buku ini"
                          >
                            {book.borrowable ? (
                              <>
                                <ToggleRight className="w-4 h-4 text-emerald-600" />
                                <span>Bisa Dipinjam</span>
                              </>
                            ) : (
                              <>
                                <ToggleLeft className="w-4 h-4 text-rose-500" />
                                <span>Hanya Baca</span>
                              </>
                            )}
                          </button>
                        </td>
                        <td className="py-2.5 px-3 sm:px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              type="button"
                              onClick={() => onEditBook(book)}
                              className="p-1.5 text-stone-600 hover:text-purple-700 rounded hover:bg-stone-100 cursor-pointer active:scale-95 touch-manipulation"
                              title="Edit Buku & Cover"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                if (window.confirm(`Hapus buku "${book.title}"?`)) {
                                  deleteBook(book.id);
                                }
                              }}
                              className="p-1.5 text-stone-400 hover:text-rose-600 rounded hover:bg-rose-50 cursor-pointer active:scale-95 touch-manipulation"
                              title="Hapus Buku"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ========================================================
              TAB: BUKU REKOMENDASI KAMI
          ======================================================== */}
          {activeSidebarMenu === 'rekomendasi' && (
            <div className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-6 shadow-2xs space-y-5">
              <div className="border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <h3 className="font-bold text-base sm:text-lg text-stone-900">
                    Buku Rekomendasi Pustakawan IBM ASMI
                  </h3>
                </div>
                <p className="text-xs text-stone-500">
                  Koleksi pilihan yang dikurasi oleh Gilang Raka Ramadhan untuk 4 Program Studi (Sistem Informasi, Administrasi Bisnis, Manajemen, Akuntansi).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {books.slice(0, 6).map((book) => (
                  <div
                    key={book.id}
                    className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-stone-50 transition-all flex flex-col justify-between space-y-3"
                  >
                    <div className="flex gap-3">
                      <img
                        src={book.coverUrl}
                        alt={book.title}
                        className="w-14 h-20 object-cover rounded-md shadow-xs border border-stone-200 shrink-0"
                      />
                      <div className="min-w-0">
                        <span className="inline-block px-2 py-0.5 rounded bg-purple-100 text-purple-800 text-[10px] font-bold mb-1">
                          Pilihan Pustakawan
                        </span>
                        <h4 className="font-bold text-stone-900 text-xs line-clamp-2">
                          {book.title}
                        </h4>
                        <p className="text-[11px] text-stone-500 mt-0.5">
                          {book.author} ({book.year})
                        </p>
                        <span className="font-mono text-purple-700 text-[10px] font-bold block mt-1">
                          DDC {book.ddc}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-stone-200/60 text-xs">
                      <span className="text-[11px] text-stone-500">
                        Status: <strong className={book.borrowable ? 'text-emerald-700' : 'text-stone-700'}>{book.borrowable ? 'Bisa Dipinjam' : 'Hanya Baca'}</strong>
                      </span>
                      <button
                        type="button"
                        onClick={() => toggleBookBorrowable(book.id)}
                        className="px-2.5 py-1 rounded bg-white hover:bg-stone-100 text-purple-700 border border-stone-200 font-semibold text-[11px] cursor-pointer"
                      >
                        Ubah Status
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================
              TAB: RENCANA DONASI
          ======================================================== */}
          {activeSidebarMenu === 'donasi' && (
            <div className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-6 shadow-2xs space-y-5">
              <div className="border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2 mb-1">
                  <Gift className="w-5 h-5 text-pink-600" />
                  <h3 className="font-bold text-base sm:text-lg text-stone-900">
                    Rencana Donasi Buku & Pengadaan E-Book
                  </h3>
                </div>
                <p className="text-xs text-stone-500">
                  Kelola usulan judul buku baru dari dosen, mahasiswa, dan alumni untuk menambah koleksi perpustakaan IBM ASMI.
                </p>
              </div>

              {/* Form Tambah Rencana Donasi */}
              <form onSubmit={handleAddDonation} className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-3 text-xs">
                <h4 className="font-bold text-stone-800">Daftarkan Rencana Donasi / Usulan Buku Baru:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-stone-600 font-semibold mb-1">Judul E-Book yang Diusulkan *</label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Digital Business & Cloud Computing"
                      value={newDonationTitle}
                      onChange={(e) => setNewDonationTitle(e.target.value)}
                      className="w-full p-2 bg-white border border-stone-300 rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 font-semibold mb-1">Nama Donatur / Pengusul</label>
                    <input
                      type="text"
                      placeholder="Contoh: Dosen Sistem Informasi / Alumni"
                      value={newDonationDonor}
                      onChange={(e) => setNewDonationDonor(e.target.value)}
                      className="w-full p-2 bg-white border border-stone-300 rounded-lg text-xs"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-lg font-semibold text-xs transition-colors cursor-pointer active:scale-95 touch-manipulation"
                >
                  + Tambah Rencana Donasi
                </button>
              </form>

              {/* Tabel Rencana Donasi */}
              <div className="border border-stone-200 rounded-xl overflow-x-auto">
                <table className="w-full text-left text-xs min-w-[500px]">
                  <thead className="bg-stone-100/70 border-b border-stone-200 text-stone-600 font-semibold">
                    <tr>
                      <th className="py-2.5 px-4">Judul Donasi</th>
                      <th className="py-2.5 px-4">Pengusul / Donatur</th>
                      <th className="py-2.5 px-4">Target Masuk</th>
                      <th className="py-2.5 px-4">Status Pengadaan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {donations.map((d) => (
                      <tr key={d.id} className="hover:bg-stone-50">
                        <td className="py-2.5 px-4 font-bold text-stone-900">{d.title}</td>
                        <td className="py-2.5 px-4 text-stone-600">{d.donor}</td>
                        <td className="py-2.5 px-4 font-mono text-stone-500">{d.targetDate}</td>
                        <td className="py-2.5 px-4">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            d.status === 'Tersedia'
                              ? 'bg-emerald-100 text-emerald-800'
                              : d.status === 'Disetujui'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}>
                            {d.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ========================================================
              TAB: KONTEN LOKAL & REPOSITORI KARYA ILMIAH
          ======================================================== */}
          {activeSidebarMenu === 'lokal' && (
            <div className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-6 shadow-2xs space-y-5">
              <div className="border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                  <h3 className="font-bold text-base sm:text-lg text-stone-900">
                    Konten Lokal & Repositori IBM ASMI
                  </h3>
                </div>
                <p className="text-xs text-stone-500">
                  Koleksi karya ilmiah internal Institut Bisnis Dan Multimedia asmi (Skripsi, Tesis, Prosiding Seminar, Modul Praktikum).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-stone-200 bg-purple-50/40 space-y-2">
                  <div className="flex items-center gap-2 text-purple-900 font-bold text-sm">
                    <FileText className="w-4 h-4 text-purple-700" />
                    <span>Repositori Skripsi Mahasiswa</span>
                  </div>
                  <p className="text-xs text-stone-600">
                    Total 142 karya akhir mahasiswa Program Studi Sistem Informasi, Manajemen, Administrasi Bisnis, dan Akuntansi.
                  </p>
                  <span className="inline-block text-[11px] font-semibold text-purple-700">
                    Akses digital: Khusus Sivitas Akademika
                  </span>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-blue-50/40 space-y-2">
                  <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                    <BookmarkCheck className="w-4 h-4 text-blue-700" />
                    <span>Jurnal Ilmiah & Modul Kuliah Dosen</span>
                  </div>
                  <p className="text-xs text-stone-600">
                    Publikasi berkala dosen IBM ASMI dalam bidang multimedia, bisnis digital, dan teknologi informasi terapan.
                  </p>
                  <span className="inline-block text-[11px] font-semibold text-blue-700">
                    DDC 650 & 004 Terindeks
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              TAB: ANGGOTA PERPUS & LAPORAN PEMINJAMAN MAHASISWA
          ======================================================== */}
          {activeSidebarMenu === 'anggota' && (
            <div className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-6 shadow-2xs space-y-5">
              <div className="border-b border-stone-100 pb-3">
                <h3 className="font-bold text-base sm:text-lg text-stone-900">
                  Pemantauan Peminjaman Mahasiswa (Live Sirkulasi)
                </h3>
                <p className="text-xs text-stone-500">
                  Daftar real-time mahasiswa yang sedang meminjam e-book, tanggal jatuh tempo, dan tindakan kontrol sirkulasi.
                </p>
              </div>

              {activeLoans.length > 0 ? (
                <div className="border border-stone-200 rounded-xl overflow-x-auto">
                  <table className="w-full text-left text-xs min-w-[620px]">
                    <thead className="bg-stone-100/70 border-b border-stone-200 text-stone-600 font-semibold">
                      <tr>
                        <th className="py-3 px-4">Nama Mahasiswa</th>
                        <th className="py-3 px-4">NIM</th>
                        <th className="py-3 px-4">Judul E-Book</th>
                        <th className="py-3 px-4">Tgl Pinjam</th>
                        <th className="py-3 px-4">Jatuh Tempo</th>
                        <th className="py-3 px-4 text-right">Aksi Pustakawan</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                      {activeLoans.map((loan) => (
                        <tr key={loan.id} className="hover:bg-stone-50/70">
                          <td className="py-3 px-4 font-bold text-stone-900">
                            {loan.userName}
                          </td>
                          <td className="py-3 px-4 font-mono text-stone-600">
                            {loan.userNim}
                          </td>
                          <td className="py-3 px-4 font-medium text-stone-800 max-w-xs truncate">
                            {loan.bookTitle}
                          </td>
                          <td className="py-3 px-4 text-stone-600">
                            {new Date(loan.borrowDate).toLocaleDateString('id-ID')}
                          </td>
                          <td className="py-3 px-4 font-bold text-rose-700">
                            {new Date(loan.dueDate).toLocaleDateString('id-ID')}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                type="button"
                                onClick={() => {
                                  renewLoan(loan.id);
                                  setFeedback(`Peminjaman "${loan.bookTitle}" diperpanjang 7 hari!`);
                                  setTimeout(() => setFeedback(null), 3000);
                                }}
                                className="px-2.5 py-1 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-[11px] cursor-pointer active:scale-95 touch-manipulation"
                                title="Perpanjang 7 hari lagi"
                              >
                                +7 Hari
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  returnBook(loan.id);
                                  setFeedback(`Buku "${loan.bookTitle}" berhasil ditandai selesai!`);
                                  setTimeout(() => setFeedback(null), 3000);
                                }}
                                className="px-2.5 py-1 rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-[11px] border border-emerald-200 cursor-pointer active:scale-95 touch-manipulation"
                                title="Tandai selesai dikembalikan"
                              >
                                Kembalikan
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  revokeLoan(loan.id);
                                  setFeedback(`Akses peminjaman "${loan.bookTitle}" dicabut.`);
                                  setTimeout(() => setFeedback(null), 3000);
                                }}
                                className="px-2.5 py-1 rounded bg-rose-50 hover:bg-rose-100 text-rose-800 font-semibold text-[11px] border border-rose-200 cursor-pointer active:scale-95 touch-manipulation"
                                title="Cabut akses peminjaman"
                              >
                                Cabut
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="py-12 text-center text-xs text-stone-400">
                  Tidak ada mahasiswa yang sedang meminjam e-book saat ini.
                </div>
              )}
            </div>
          )}

          {/* ========================================================
              TAB: APLIKASI & SISTEM
          ======================================================== */}
          {activeSidebarMenu === 'aplikasi' && (
            <div className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-6 shadow-2xs space-y-5">
              <div className="border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2 mb-1">
                  <Monitor className="w-5 h-5 text-purple-600" />
                  <h3 className="font-bold text-base sm:text-lg text-stone-900">
                    Status Aplikasi & Integrasi Perpustakaan
                  </h3>
                </div>
                <p className="text-xs text-stone-500">
                  Konfigurasi sistem digital library, QR Code share, dan sinkronisasi data katalog DDC.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                  <span className="text-stone-500 text-[11px]">Sistem Klasifikasi:</span>
                  <div className="font-bold text-stone-900 text-sm">DDC Edisi 23 Lengkap</div>
                  <p className="text-[10px] text-stone-500">Dewey Decimal Classification terstandar</p>
                </div>

                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                  <span className="text-stone-500 text-[11px]">Administrator:</span>
                  <div className="font-bold text-stone-900 text-sm">Gilang Raka Ramadhan</div>
                  <p className="text-[10px] text-stone-500">perpustakaanibmasmi@gmail.com</p>
                </div>

                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                  <span className="text-stone-500 text-[11px]">Penyimpanan Lokal:</span>
                  <div className="font-bold text-emerald-700 text-sm">Tersinkronisasi 100%</div>
                  <p className="text-[10px] text-stone-500">Cache offline & state persist</p>
                </div>
              </div>

              {onOpenQrModal && (
                <div className="p-4 bg-purple-50 rounded-xl border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div>
                    <h4 className="font-bold text-purple-950">QR Code Akses Publik Perpustakaan</h4>
                    <p className="text-purple-800 text-[11px]">Bagikan tautan langsung atau cetak kode QR untuk ditempel di mading kampus.</p>
                  </div>
                  <button
                    type="button"
                    onClick={onOpenQrModal}
                    className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-xl font-bold flex items-center gap-1.5 shrink-0 cursor-pointer active:scale-95 touch-manipulation"
                  >
                    <QrCode className="w-4 h-4" />
                    <span>Buka QR Modal</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ========================================================
              TAB: LAPORAN SIRKULASI
          ======================================================== */}
          {activeSidebarMenu === 'laporan' && (
            <div className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-6 shadow-2xs space-y-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-stone-100 pb-3">
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-stone-900">
                    Laporan Statistik & Rekapitulasi Sirkulasi
                  </h3>
                  <p className="text-xs text-stone-500">
                    Ringkasan data peminjaman e-book menurut 4 Program Studi IBM ASMI.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => exportBooksToExcel(books)}
                  className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer active:scale-95 touch-manipulation"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Rekap Excel</span>
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <span className="text-[10px] text-stone-500 block">Sistem Informasi</span>
                  <strong className="text-base text-purple-900 font-bold">42%</strong>
                  <span className="text-[10px] text-stone-400 block mt-0.5">Minat Terbanyak</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <span className="text-[10px] text-stone-500 block">Administrasi Bisnis</span>
                  <strong className="text-base text-blue-900 font-bold">28%</strong>
                  <span className="text-[10px] text-stone-400 block mt-0.5">Sirkulasi Aktif</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <span className="text-[10px] text-stone-500 block">Manajemen</span>
                  <strong className="text-base text-amber-900 font-bold">18%</strong>
                  <span className="text-[10px] text-stone-400 block mt-0.5">Sirkulasi Aktif</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <span className="text-[10px] text-stone-500 block">Akuntansi</span>
                  <strong className="text-base text-emerald-900 font-bold">12%</strong>
                  <span className="text-[10px] text-stone-400 block mt-0.5">Sirkulasi Aktif</span>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              TAB: PENGATURAN SIRKULASI & DURASI
          ======================================================== */}
          {activeSidebarMenu === 'pengaturan' && (
            <div className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-6 shadow-2xs max-w-2xl space-y-5">
              <div className="border-b border-stone-100 pb-3">
                <h3 className="font-bold text-base sm:text-lg text-stone-900">
                  Pengaturan Kebijakan Sirkulasi & Peminjaman
                </h3>
                <p className="text-xs text-stone-500">
                  Atur aktivasi layanan perpustakaan, durasi peminjaman, dan kuota per mahasiswa.
                </p>
              </div>

              <form onSubmit={handleSaveSettings} className="space-y-4 text-xs">
                {/* Global Toggle */}
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                  <label className="flex items-center justify-between cursor-pointer font-bold text-stone-900">
                    <span>Layanan Sirkulasi Peminjaman Terbuka:</span>
                    <input
                      type="checkbox"
                      checked={settingsForm.systemBorrowingActive}
                      onChange={(e) =>
                        setSettingsForm({ ...settingsForm, systemBorrowingActive: e.target.checked })
                      }
                      className="w-4 h-4 accent-purple-600 cursor-pointer"
                    />
                  </label>
                  <p className="text-[11px] text-stone-500">
                    Bila dimatikan, mahasiswa hanya dapat membaca e-book di tempat tanpa dapat meminjam.
                  </p>
                </div>

                <div>
                  <label className="block font-semibold text-stone-800 mb-1">
                    Durasi Standar Peminjaman (Hari):
                  </label>
                  <select
                    value={settingsForm.defaultDurationDays}
                    onChange={(e) =>
                      setSettingsForm({ ...settingsForm, defaultDurationDays: Number(e.target.value) })
                    }
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl font-medium"
                  >
                    <option value={1}>1 Hari (Kilas Ujian)</option>
                    <option value={3}>3 Hari</option>
                    <option value={7}>7 Hari (Standar)</option>
                    <option value={14}>14 Hari (Riset)</option>
                    <option value={21}>21 Hari</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-stone-800 mb-1">
                    Batas Maksimal Kuota Buku per Mahasiswa:
                  </label>
                  <select
                    value={settingsForm.maxLoansPerStudent}
                    onChange={(e) =>
                      setSettingsForm({ ...settingsForm, maxLoansPerStudent: Number(e.target.value) })
                    }
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl font-medium"
                  >
                    <option value={1}>1 E-Book</option>
                    <option value={2}>2 E-Book</option>
                    <option value={3}>3 E-Book (Standar)</option>
                    <option value={5}>5 E-Book</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="px-5 py-2.5 bg-purple-700 hover:bg-purple-800 text-white rounded-xl font-semibold shadow-xs transition-colors cursor-pointer active:scale-95 touch-manipulation"
                >
                  Simpan Perubahan Pengaturan
                </button>
              </form>
            </div>
          )}

          {/* ========================================================
              TAB: PANDUAN PENGGUNA
          ======================================================== */}
          {activeSidebarMenu === 'panduan' && (
            <div className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-6 shadow-2xs space-y-4 text-xs">
              <div className="border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2 mb-1">
                  <HelpCircle className="w-5 h-5 text-amber-500" />
                  <h3 className="font-bold text-base sm:text-lg text-stone-900">
                    Panduan Pengguna & SOP Perpustakaan Digital
                  </h3>
                </div>
                <p className="text-stone-500">
                  Petunjuk operasional pustakawan IBM ASMI (Gilang Raka Ramadhan) dan tata cara sirkulasi e-book.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                  <h4 className="font-bold text-stone-900 mb-1">1. Cara Menambah Koleksi E-Book</h4>
                  <p className="text-stone-600">Klik menu <strong>Buku</strong> &gt; <strong>Tambah Buku</strong> atau gunakan tombol <strong>Import Excel</strong> untuk memasukkan ratusan judul sekaligus.</p>
                </div>

                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                  <h4 className="font-bold text-stone-900 mb-1">2. Mengubah Status Peminjaman</h4>
                  <p className="text-stone-600">Di tabel buku, klik toggle <strong className="text-emerald-700">Bisa Dipinjam</strong> atau <strong className="text-rose-700">Hanya Baca</strong> untuk mengatur apakah buku boleh dipinjam atau hanya dibaca di tempat.</p>
                </div>

                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                  <h4 className="font-bold text-stone-900 mb-1">3. Mengelola Peminjaman Mahasiswa</h4>
                  <p className="text-stone-600">Buka menu <strong>Anggota Perpus</strong> untuk memantau jatuh tempo, memperpanjang (+7 Hari), atau menandai buku telah selesai dikembalikan.</p>
                </div>

                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                  <h4 className="font-bold text-stone-900 mb-1">4. Berpindah ke Tampilan Mahasiswa</h4>
                  <p className="text-stone-600">Gunakan tombol <strong>Ke Web Mahasiswa</strong> di sidebar atau navigasi bawah untuk melihat katalog persis seperti tampilan mahasiswa.</p>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* ========================================================
            MOBILE BOTTOM NAVIGATION DOCK FOR ADMIN (SMARTPHONES)
        ======================================================== */}
        <nav
          aria-label="Navigasi Bawah Admin"
          className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-1 py-1 flex items-center justify-around shadow-2xl safe-area-bottom"
        >
          <button
            type="button"
            onClick={() => setActiveSidebarMenu('dashboard')}
            className={`flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-lg transition-colors text-[10px] font-semibold min-h-[44px] cursor-pointer touch-manipulation active:scale-95 ${
              activeSidebarMenu === 'dashboard'
                ? 'text-blue-600 font-bold bg-blue-50/70'
                : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            <LayoutDashboard className="w-4 h-4 mb-0.5" />
            <span>Dasbor</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSidebarMenu('buku')}
            className={`flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-lg transition-colors text-[10px] font-semibold min-h-[44px] cursor-pointer touch-manipulation active:scale-95 ${
              activeSidebarMenu === 'buku'
                ? 'text-blue-600 font-bold bg-blue-50/70'
                : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            <BookOpen className="w-4 h-4 mb-0.5" />
            <span>E-Book</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSidebarMenu('anggota')}
            className={`flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-lg transition-colors text-[10px] font-semibold min-h-[44px] cursor-pointer touch-manipulation active:scale-95 relative ${
              activeSidebarMenu === 'anggota'
                ? 'text-blue-600 font-bold bg-blue-50/70'
                : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            <div className="relative">
              <Users className="w-4 h-4 mb-0.5" />
              {activeLoans.length > 0 && (
                <span className="absolute -top-1 -right-2 w-3.5 h-3.5 rounded-full bg-emerald-600 text-white text-[8px] font-bold flex items-center justify-center">
                  {activeLoans.length}
                </span>
              )}
            </div>
            <span>Anggota</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSidebarMenu('pengaturan')}
            className={`flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-lg transition-colors text-[10px] font-semibold min-h-[44px] cursor-pointer touch-manipulation active:scale-95 ${
              activeSidebarMenu === 'pengaturan'
                ? 'text-blue-600 font-bold bg-blue-50/70'
                : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            <Settings className="w-4 h-4 mb-0.5" />
            <span>Setting</span>
          </button>

          <button
            type="button"
            onClick={() => switchRole('student')}
            className="flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-lg transition-colors text-[10px] font-semibold text-amber-700 hover:text-amber-900 min-h-[44px] cursor-pointer touch-manipulation active:scale-95"
            title="Ke Web Mahasiswa"
          >
            <ArrowLeft className="w-4 h-4 mb-0.5" />
            <span>Web Mhs</span>
          </button>

          <button
            type="button"
            onClick={logoutAdmin}
            className="flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-lg transition-colors text-[10px] font-semibold text-rose-600 hover:text-rose-800 min-h-[44px] cursor-pointer touch-manipulation active:scale-95"
            title="Logout Admin"
          >
            <LogOut className="w-4 h-4 mb-0.5" />
            <span>Keluar</span>
          </button>
        </nav>
      </div>
    </div>
  );
};
