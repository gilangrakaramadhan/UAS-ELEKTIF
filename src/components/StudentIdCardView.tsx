import React, { useState } from 'react';
import { useLibrary } from '../context/LibraryContext';
import {
  GraduationCap,
  QrCode,
  CheckCircle2,
  Printer,
  Copy,
  Check,
  Edit2,
  BookMarked,
  Sparkles,
  ShieldCheck,
  RotateCw,
  Maximize2,
  X,
  BookOpen,
  Calendar,
  Building2,
  UserCheck,
} from 'lucide-react';

interface StudentIdCardViewProps {
  onExploreCatalog: () => void;
  onOpenBookshelf: () => void;
}

export const StudentIdCardView: React.FC<StudentIdCardViewProps> = ({
  onExploreCatalog,
  onOpenBookshelf,
}) => {
  const { currentUser, loginStudent, loans } = useLibrary();

  const [isFlipped, setIsFlipped] = useState(false);
  const [copiedNim, setCopiedNim] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editName, setEditName] = useState(currentUser.name);
  const [editNim, setEditNim] = useState(currentUser.identifier.replace(/^NIM\.\s*/, ''));
  const [editDept, setEditDept] = useState(currentUser.department);
  const [editToast, setEditToast] = useState<string | null>(null);

  // Active loans count for badge
  const activeLoansCount = loans.filter(
    (l) =>
      (l.userId === currentUser.id ||
        l.userNim.replace(/\s+/g, '') === currentUser.identifier.replace(/\s+/g, '') ||
        l.userName.toLowerCase() === currentUser.name.toLowerCase()) &&
      l.status === 'active'
  ).length;

  const handleCopyNim = () => {
    const rawNim = currentUser.identifier.replace(/^NIM\.\s*/, '');
    navigator.clipboard.writeText(rawNim);
    setCopiedNim(true);
    setTimeout(() => setCopiedNim(false), 2500);
  };

  const handlePrintCard = () => {
    window.print();
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editName.trim()) return;
    loginStudent(editName.trim(), editNim.trim(), editDept);
    setIsEditingProfile(false);
    setEditToast('Identitas KTM berhasil diperbarui!');
    setTimeout(() => setEditToast(null), 3000);
  };

  const rawNimNumber = currentUser.identifier.replace(/^NIM\.\s*/, '');

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
      {/* Toast Notification */}
      {editToast && (
        <div className="mb-6 p-4 rounded-xl text-xs bg-emerald-50 text-emerald-900 border border-emerald-200 flex items-center gap-2.5 shadow-sm">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{editToast}</span>
        </div>
      )}

      {/* Page Header - Clearly Distinct for KTM */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-5 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold mb-2">
            <GraduationCap className="w-3.5 h-3.5 text-purple-700" />
            <span>KARTU TANDA MAHASISWA & ANGGOTA PERPUSTAKAAN DIGITAL</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif-scholarly text-stone-900 tracking-tight">
            Kartu Mahasiswa Digital (KTM)
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl leading-relaxed">
            Identitas resmi sivitas akademika Institut Bisnis dan Multimedia ASMI. Digunakan untuk otorisasi akses peminjaman e-book, gerbang masuk perpustakaan, dan presensi baca.
          </p>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            type="button"
            onClick={onOpenBookshelf}
            className="px-4 py-2.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200 text-xs font-bold transition-all flex items-center gap-2 shadow-2xs cursor-pointer active:scale-95"
          >
            <BookMarked className="w-4 h-4 text-purple-700" />
            <span>Buka Rak Buku Saya ({activeLoansCount})</span>
          </button>

          <button
            type="button"
            onClick={onExploreCatalog}
            className="px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-850 text-white text-xs font-semibold transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer active:scale-95"
          >
            <BookOpen className="w-4 h-4 text-purple-300" />
            <span>Katalog E-Book</span>
          </button>
        </div>
      </div>

      {/* Main KTM Presentation Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left / Center Column: Realistic Physical Card Canvas */}
        <div className="lg:col-span-7 flex flex-col items-center">
          {/* Flip Control Tab Bar */}
          <div className="flex items-center justify-between w-full max-w-md mb-3 px-2">
            <span className="text-xs font-semibold text-stone-600 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Smartcard Perpustakaan IBM ASMI</span>
            </span>

            <button
              type="button"
              onClick={() => setIsFlipped(!isFlipped)}
              className="text-xs font-bold text-purple-700 hover:text-purple-900 bg-purple-50 hover:bg-purple-100 border border-purple-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>{isFlipped ? 'Lihat Tampak Depan' : 'Lihat Tampak Belakang'}</span>
            </button>
          </div>

          {/* REALISTIC PVC SMART CARD CONTAINER */}
          <div className="w-full max-w-md perspective-1000 print:max-w-none">
            <div
              className={`relative w-full aspect-[1.586/1] rounded-3xl transition-all duration-500 transform-style-3d shadow-2xl select-none ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
              style={{
                boxShadow:
                  '0 20px 40px -15px rgba(23, 23, 23, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
              }}
            >
              {/* ========================================================
                  TAMPAK DEPAN (FRONT SIDE)
                  ======================================================== */}
              <div
                className={`absolute inset-0 w-full h-full rounded-3xl p-5 sm:p-6 flex flex-col justify-between overflow-hidden backface-hidden text-white ${
                  isFlipped ? 'pointer-events-none opacity-0' : 'opacity-100'
                }`}
                style={{
                  background:
                    'linear-gradient(135deg, #0f172a 0%, #1e1b4b 35%, #2e1065 70%, #09090b 100%)',
                }}
              >
                {/* Holographic foil overlay & security watermark */}
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.25) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.25) 0%, transparent 50%)',
                  }}
                />
                <div className="absolute -right-8 -top-8 w-48 h-48 opacity-10 pointer-events-none flex items-center justify-center">
                  <GraduationCap className="w-40 h-40 text-amber-200" />
                </div>

                {/* Card Top: Institution Branding */}
                <div className="relative z-10 flex items-start justify-between border-b border-white/15 pb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center text-stone-950 font-black shadow-md border border-amber-300">
                      <GraduationCap className="w-6 h-6 text-stone-950" />
                    </div>
                    <div>
                      <h2 className="font-serif-scholarly font-black text-xs sm:text-sm tracking-wider text-amber-300 leading-tight">
                        INSTITUT BISNIS DAN MULTIMEDIA ASMI
                      </h2>
                      <p className="text-[9px] sm:text-[10px] text-purple-200 tracking-wider uppercase font-semibold">
                        Kartu Tanda Mahasiswa · Perpustakaan Digital
                      </p>
                    </div>
                  </div>

                  {/* Smart EMV Gold Chip Graphic */}
                  <div className="w-9 h-7 rounded-md bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 border border-amber-300 shadow-inner flex flex-col justify-around p-1 shrink-0">
                    <div className="w-full h-[1px] bg-amber-800/40" />
                    <div className="w-full h-[1px] bg-amber-800/40" />
                    <div className="w-full h-[1px] bg-amber-800/40" />
                  </div>
                </div>

                {/* Card Middle: Student Profile */}
                <div className="relative z-10 flex items-center gap-4 py-2">
                  {/* Photo Box */}
                  <div className="relative shrink-0">
                    <div className="w-20 h-24 sm:w-22 sm:h-26 rounded-2xl bg-stone-900 border-2 border-amber-400/80 shadow-lg overflow-hidden flex flex-col items-center justify-center p-1 relative">
                      <div className="w-14 h-14 rounded-full bg-purple-700/80 text-amber-200 flex items-center justify-center font-bold text-lg border border-purple-400/50">
                        {currentUser.name.charAt(0)}
                      </div>
                      <span className="text-[8px] font-mono uppercase tracking-widest text-amber-300 mt-1 font-bold">
                        MAHASISWA
                      </span>

                      {/* Official Verified Stamp Badge */}
                      <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-stone-950 p-0.5 rounded-full shadow border border-white">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Student Details */}
                  <div className="space-y-1 min-w-0 flex-1">
                    <span className="text-[9px] font-mono text-purple-300 uppercase tracking-widest font-semibold block">
                      Nama Mahasiswa
                    </span>
                    <h3 className="font-serif-scholarly font-black text-sm sm:text-base text-white tracking-wide truncate drop-shadow-sm">
                      {currentUser.name}
                    </h3>

                    <div className="pt-1">
                      <span className="text-[9px] font-mono text-stone-400 uppercase tracking-widest block">
                        Nomor Induk Mahasiswa (NIM)
                      </span>
                      <div className="text-xs sm:text-sm font-mono font-bold text-amber-300 tracking-widest flex items-center gap-1.5">
                        <span>{currentUser.identifier}</span>
                      </div>
                    </div>

                    <div className="pt-0.5">
                      <span className="text-[9px] font-mono text-stone-400 uppercase tracking-widest block">
                        Program Studi / Fakultas
                      </span>
                      <p className="text-[11px] sm:text-xs font-semibold text-purple-200 truncate">
                        {currentUser.department}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Bottom: Barcode & Accreditation */}
                <div className="relative z-10 pt-2 border-t border-white/15 flex items-end justify-between">
                  <div className="space-y-0.5">
                    {/* Simulated Barcode */}
                    <div className="font-mono tracking-[0.25em] text-[10px] sm:text-xs text-stone-300 font-bold select-none leading-none">
                      ||| |||| | ||||| || |||||| | |||
                    </div>
                    <span className="text-[8px] font-mono text-stone-400 block tracking-widest">
                      ID: {rawNimNumber || '2023-ASMI-LIB'}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <span className="text-[8px] uppercase font-mono text-stone-400 block">
                        Akreditasi
                      </span>
                      <span className="inline-block px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/40 text-[9px] font-bold">
                        Peringkat A
                      </span>
                    </div>

                    {/* QR Code thumbnail */}
                    <button
                      type="button"
                      onClick={() => setShowQrModal(true)}
                      className="w-8 h-8 rounded-lg bg-white p-0.5 flex items-center justify-center text-stone-900 shadow hover:scale-105 transition-transform cursor-pointer"
                      title="Klik untuk memperbesar QR Code"
                    >
                      <QrCode className="w-7 h-7 text-stone-900" />
                    </button>
                  </div>
                </div>
              </div>

              {/* ========================================================
                  TAMPAK BELAKANG (BACK SIDE)
                  ======================================================== */}
              <div
                className={`absolute inset-0 w-full h-full rounded-3xl p-5 sm:p-6 flex flex-col justify-between overflow-hidden backface-hidden text-white ${
                  !isFlipped ? 'pointer-events-none opacity-0' : 'opacity-100'
                }`}
                style={{
                  background:
                    'linear-gradient(135deg, #18181b 0%, #27272a 40%, #1c1917 100%)',
                }}
              >
                {/* Magnetic Stripe */}
                <div className="-mx-6 -mt-6 h-10 sm:h-12 bg-black border-b border-stone-800 shadow-inner flex items-center px-6">
                  <span className="text-[8px] font-mono text-stone-500 tracking-widest">
                    MAGNETIC SECURE STRIPE · IBM ASMI LIBRARY CIRCULATION SYSTEM
                  </span>
                </div>

                {/* Signature Strip */}
                <div className="mt-2 flex items-center gap-3">
                  <div className="flex-1 bg-stone-100 text-stone-800 font-mono text-[9px] px-3 py-1.5 rounded-sm italic border border-stone-300">
                    Tanda Tangan Pemegang: <strong className="font-serif-scholarly font-bold not-italic">{currentUser.name}</strong>
                  </div>
                  <div className="px-2 py-1 bg-stone-800 border border-stone-700 text-amber-300 font-mono text-[9px] font-bold rounded">
                    ASMI-KTM
                  </div>
                </div>

                {/* Terms & Regulations */}
                <div className="space-y-1 text-[8.5px] sm:text-[9.5px] text-stone-300 leading-tight">
                  <p className="font-bold text-amber-300 text-[9px] uppercase tracking-wider">
                    Ketentuan & Tata Tertib Perpustakaan:
                  </p>
                  <ol className="list-decimal list-inside space-y-0.5 text-stone-400">
                    <li>Kartu ini adalah tanda pengenal sah keanggotaan Perpustakaan IBM ASMI.</li>
                    <li>Wajib dibawa saat meminjam buku, akses e-book online, dan presensi baca.</li>
                    <li>Kartu tidak dapat dipindahtangankan kepada orang lain.</li>
                    <li>Kehilangan atau perubahan data harap melapor ke Bagian Administrasi Perpustakaan.</li>
                  </ol>
                </div>

                {/* Seal & Campus Contact */}
                <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-[8px] sm:text-[9px] text-stone-400">
                  <div>
                    <strong className="text-white block font-serif-scholarly text-[10px]">
                      Institut Bisnis Dan Multimedia asmi
                    </strong>
                    <p>Jl. Pacuan Kuda 1-5, Pulomas, Jakarta Timur 13210</p>
                    <p>Website: asmi.ac.id · Telp: (021) 47864888</p>
                  </div>

                  <div className="text-right">
                    <span className="text-[8px] text-stone-500 block">Mengetahui,</span>
                    <strong className="text-amber-300 font-serif-scholarly text-[10px] block">
                      Kepala Perpustakaan
                    </strong>
                    <span className="text-[8px] text-emerald-400 font-semibold font-mono">
                      [Tervalidasi Digital]
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Click Hint */}
          <p className="text-[11px] text-stone-500 mt-3 text-center">
            Tip: Klik tombol <strong className="text-purple-700">"Lihat Tampak Belakang"</strong> di atas untuk membaca tata tertib kartu.
          </p>
        </div>

        {/* Right Column: Card Actions & Student Verification Info */}
        <div className="lg:col-span-5 space-y-4">
          {/* Card Management Utilities */}
          <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-serif-scholarly font-bold text-base text-stone-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-purple-700" />
                <span>Opsi & Aksi Kartu Mahasiswa</span>
              </h2>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                Terverifikasi Aktif
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* Copy NIM Button */}
              <button
                type="button"
                onClick={handleCopyNim}
                className="p-3 rounded-xl border border-stone-200 hover:border-purple-300 bg-stone-50 hover:bg-purple-50/50 text-stone-800 text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer active:scale-95"
              >
                {copiedNim ? (
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                ) : (
                  <Copy className="w-4 h-4 text-purple-700 shrink-0" />
                )}
                <div className="text-left">
                  <div className="text-stone-900 font-bold">
                    {copiedNim ? 'NIM Disalin!' : 'Salin NIM'}
                  </div>
                  <div className="text-[10px] text-stone-500 font-mono truncate">{rawNimNumber}</div>
                </div>
              </button>

              {/* Show Large QR Code */}
              <button
                type="button"
                onClick={() => setShowQrModal(true)}
                className="p-3 rounded-xl border border-stone-200 hover:border-purple-300 bg-stone-50 hover:bg-purple-50/50 text-stone-800 text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer active:scale-95"
              >
                <QrCode className="w-4 h-4 text-purple-700 shrink-0" />
                <div className="text-left">
                  <div className="text-stone-900 font-bold">QR Gerbang</div>
                  <div className="text-[10px] text-stone-500">Scan Presensi Pintu</div>
                </div>
              </button>

              {/* Print / Save Card */}
              <button
                type="button"
                onClick={handlePrintCard}
                className="p-3 rounded-xl border border-stone-200 hover:border-purple-300 bg-stone-50 hover:bg-purple-50/50 text-stone-800 text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer active:scale-95"
              >
                <Printer className="w-4 h-4 text-purple-700 shrink-0" />
                <div className="text-left">
                  <div className="text-stone-900 font-bold">Cetak KTM</div>
                  <div className="text-[10px] text-stone-500">Simpan PDF / Print</div>
                </div>
              </button>

              {/* Edit Student Profile */}
              <button
                type="button"
                onClick={() => setIsEditingProfile(true)}
                className="p-3 rounded-xl border border-stone-200 hover:border-purple-300 bg-stone-50 hover:bg-purple-50/50 text-stone-800 text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer active:scale-95"
              >
                <Edit2 className="w-4 h-4 text-purple-700 shrink-0" />
                <div className="text-left">
                  <div className="text-stone-900 font-bold">Ubah Profil</div>
                  <div className="text-[10px] text-stone-500">Ganti Nama / Prodi</div>
                </div>
              </button>
            </div>
          </div>

          {/* Student Status & Academic Record Details */}
          <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs space-y-3">
            <h3 className="font-serif-scholarly font-bold text-sm text-stone-900">
              Rincian Sivitas Akademika
            </h3>

            <div className="divide-y divide-stone-100 text-xs">
              <div className="py-2 flex items-center justify-between">
                <span className="text-stone-500">Nama Lengkap:</span>
                <span className="font-semibold text-stone-900">{currentUser.name}</span>
              </div>
              <div className="py-2 flex items-center justify-between">
                <span className="text-stone-500">NIM:</span>
                <span className="font-mono font-semibold text-purple-900">{currentUser.identifier}</span>
              </div>
              <div className="py-2 flex items-center justify-between">
                <span className="text-stone-500">Program Studi:</span>
                <span className="font-semibold text-stone-900">{currentUser.department}</span>
              </div>
              <div className="py-2 flex items-center justify-between">
                <span className="text-stone-500">Status Keanggotaan:</span>
                <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Aktif (Bebas Pinjam)</span>
                </span>
              </div>
              <div className="py-2 flex items-center justify-between">
                <span className="text-stone-500">Hak Akses E-Book:</span>
                <span className="font-semibold text-stone-900">Maks. 3 E-Book Bersamaan</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenBookshelf}
                className="w-full py-2.5 px-4 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <BookMarked className="w-4 h-4" />
                <span>Lihat Koleksi Buku di Rak Saya →</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL: Large QR Code for Turnstile Scanner */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 text-center space-y-4 shadow-2xl border border-stone-200">
            <div className="flex items-center justify-between pb-2 border-b border-stone-100">
              <span className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
                <QrCode className="w-4 h-4 text-purple-700" />
                <span>QR Gate Access</span>
              </span>
              <button
                type="button"
                onClick={() => setShowQrModal(false)}
                className="p-1 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="w-56 h-56 mx-auto bg-stone-50 rounded-2xl border-2 border-dashed border-purple-300 p-4 flex flex-col items-center justify-center">
              <QrCode className="w-44 h-44 text-stone-900" />
            </div>

            <div>
              <h3 className="font-serif-scholarly font-bold text-stone-900 text-base">
                {currentUser.name}
              </h3>
              <p className="text-xs font-mono text-purple-700 font-bold mt-0.5">
                {currentUser.identifier}
              </p>
              <p className="text-[11px] text-stone-500 mt-2">
                Dekatkan layar ini ke alat pemindai (scanner) di gerbang pintu masuk Perpustakaan IBM ASMI.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowQrModal(false)}
              className="w-full py-2.5 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-850"
            >
              Tutup Pemindai
            </button>
          </div>
        </div>
      )}

      {/* MODAL: Edit Student Profile */}
      {isEditingProfile && (
        <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-stone-200">
            <div className="flex items-center justify-between pb-2 border-b border-stone-100">
              <span className="text-sm font-bold font-serif-scholarly text-stone-900 flex items-center gap-1.5">
                <Edit2 className="w-4 h-4 text-purple-700" />
                <span>Perbarui Data KTM Mahasiswa</span>
              </span>
              <button
                type="button"
                onClick={() => setIsEditingProfile(false)}
                className="p-1 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-stone-700 font-semibold mb-1">
                  Nama Lengkap Mahasiswa:
                </label>
                <input
                  type="text"
                  required
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full p-2.5 border border-stone-300 rounded-xl bg-stone-50 text-stone-900 text-xs focus:ring-2 focus:ring-purple-600 focus:outline-none"
                  placeholder="Contoh: Gilang Raka Ramadhan"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-semibold mb-1">
                  Nomor Induk Mahasiswa (NIM):
                </label>
                <input
                  type="text"
                  required
                  value={editNim}
                  onChange={(e) => setEditNim(e.target.value)}
                  className="w-full p-2.5 border border-stone-300 rounded-xl bg-stone-50 text-stone-900 text-xs font-mono focus:ring-2 focus:ring-purple-600 focus:outline-none"
                  placeholder="Contoh: 2023010045"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-semibold mb-1">
                  Program Studi / Jurusan:
                </label>
                <select
                  value={editDept}
                  onChange={(e) => setEditDept(e.target.value)}
                  className="w-full p-2.5 border border-stone-300 rounded-xl bg-stone-50 text-stone-900 text-xs focus:ring-2 focus:ring-purple-600 focus:outline-none"
                >
                  <option value="S1 Sistem Informasi">S1 Sistem Informasi</option>
                  <option value="S1 Administrasi Bisnis">S1 Administrasi Bisnis</option>
                  <option value="S1 Manajemen">S1 Manajemen</option>
                  <option value="S1 Akuntansi">S1 Akuntansi</option>
                  <option value="D3 Sekretari">D3 Sekretari</option>
                  <option value="D3 Manajemen Perpustakaan">D3 Manajemen Perpustakaan</option>
                </select>
              </div>

              <div className="flex items-center gap-2 pt-3">
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs shadow-sm transition-colors cursor-pointer"
                >
                  Simpan Perubahan KTM
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditingProfile(false)}
                  className="px-4 py-2.5 rounded-xl border border-stone-300 hover:bg-stone-100 text-stone-700 font-semibold text-xs transition-colors cursor-pointer"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
