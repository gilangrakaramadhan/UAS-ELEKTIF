import React, { useState } from 'react';
import { useLibrary } from '../context/LibraryContext';
import {
  GraduationCap,
  ShieldCheck,
  User,
  Hash,
  ArrowRight,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  Layers,
} from 'lucide-react';

const IBM_ASMI_PRODI = [
  'S1 Sistem Informasi',
  'S1 Administrasi Bisnis',
  'S1 Manajemen',
  'S1 Akuntansi',
];

interface LoginPortalProps {
  initialTab?: 'student' | 'admin';
}

export const LoginPortal: React.FC<LoginPortalProps> = ({ initialTab = 'student' }) => {
  const {
    loginStudent,
    loginAdmin,
    resetAdminPassword,
  } = useLibrary();

  const [activeTab, setActiveTab] = useState<'student' | 'admin'>(initialTab);

  // Student login form state
  const [studentName, setStudentName] = useState('');
  const [studentNim, setStudentNim] = useState('');
  const [studentDept, setStudentDept] = useState('S1 Sistem Informasi');
  const [studentError, setStudentError] = useState<string | null>(null);

  // Admin login form state
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [showAdminPass, setShowAdminPass] = useState(false);
  const [adminError, setAdminError] = useState<string | null>(null);
  const [showAdminReset, setShowAdminReset] = useState(false);
  const [resetIdentifier, setResetIdentifier] = useState('');
  const [resetNewPass, setResetNewPass] = useState('');
  const [resetFeedback, setResetFeedback] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) {
      setStudentError('Harap masukkan nama lengkap Anda.');
      return;
    }
    if (!studentNim.trim()) {
      setStudentError('Harap masukkan NIM (Nomor Induk Mahasiswa).');
      return;
    }

    setStudentError(null);
    loginStudent(studentName.trim(), studentNim.trim(), studentDept.trim());
  };

  const handleAdminSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAdminError(null);
    const success = loginAdmin(adminPassword);
    if (!success) {
      setAdminError('Kata sandi admin salah! Akses ditolak.');
    }
  };

  const handleAdminResetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResetFeedback(null);
    if (!resetNewPass.trim()) {
      setResetFeedback({ message: 'Password baru tidak boleh kosong.', type: 'error' });
      return;
    }
    const res = resetAdminPassword(resetIdentifier, resetNewPass.trim());
    setResetFeedback({ message: res.message, type: res.success ? 'success' : 'error' });
    if (res.success) {
      setAdminPassword(resetNewPass.trim());
      setTimeout(() => {
        setShowAdminReset(false);
        setResetFeedback(null);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen w-full overflow-y-auto bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 text-stone-100 flex flex-col justify-between p-3 sm:p-5 select-none py-6">
      {/* Top Academic Header */}
      <header className="max-w-2xl mx-auto w-full text-center shrink-0">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-stone-800/90 border border-stone-700/80 text-[10px] font-medium text-stone-300 mb-1 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Institut Bisnis Dan Multimedia asmi — Portal Masuk Digital</span>
        </div>

        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-purple-700 via-fuchsia-600 to-pink-600 flex items-center justify-center text-white shadow-md border border-purple-400/30 font-black text-xs sm:text-sm">
            IA
          </div>
          <div className="text-left">
            <h1 className="text-base sm:text-xl font-extrabold tracking-tight bg-gradient-to-r from-purple-300 via-fuchsia-200 to-pink-200 bg-clip-text text-transparent font-serif-scholarly leading-tight">
              IBM ASMI DIGITAL LIBRARY
            </h1>
            <p className="text-[10px] sm:text-xs text-stone-400 font-sans leading-tight">
              Repositori E-Book & Sistem Sirkulasi Akademik Mandiri
            </p>
          </div>
        </div>
      </header>

      {/* Main Login Card - Compact & Contained */}
      <main className="max-w-md mx-auto w-full flex-1 flex flex-col justify-center my-auto min-h-0 py-1 sm:py-2">
        <div className="bg-white text-stone-900 rounded-2xl shadow-2xl border border-stone-200/90 overflow-hidden flex flex-col">
          {/* Tab Selector: Mahasiswa vs Admin */}
          <div className="flex border-b border-stone-200 bg-stone-100/80 p-1 gap-1 text-xs font-semibold shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('student')}
              className={`flex-1 py-1.5 px-2.5 rounded-lg transition-all flex items-center justify-center gap-1.5 text-xs ${
                activeTab === 'student'
                  ? 'bg-white text-purple-900 shadow-xs border border-stone-200/80 font-bold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-purple-700" />
              <span>Portal Masuk Mahasiswa</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('admin')}
              className={`flex-1 py-1.5 px-2.5 rounded-lg transition-all flex items-center justify-center gap-1.5 text-xs ${
                activeTab === 'admin'
                  ? 'bg-white text-stone-900 shadow-xs border border-stone-200/80 font-bold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>Pengelola / Admin</span>
            </button>
          </div>

          <div className="p-3 sm:p-4">
            {activeTab === 'student' ? (
              /* STUDENT LOGIN FLOW */
              <div className="space-y-2.5">
                <div>
                  <h2 className="text-sm sm:text-base font-bold font-serif-scholarly text-stone-900 leading-tight">
                    Login Mahasiswa
                  </h2>
                  <p className="text-[10px] sm:text-[11px] text-stone-500 mt-0.5 leading-tight">
                    Setiap mahasiswa memiliki dashboard mandiri sesuai Nama, NIM, dan Prodi Anda.
                  </p>
                </div>

                {studentError && (
                  <div className="p-2 bg-rose-50 border border-rose-200 text-rose-800 rounded-lg text-[11px] flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                    <span>{studentError}</span>
                  </div>
                )}

                <form onSubmit={handleStudentSubmit} className="space-y-2">
                  {/* Nama Lengkap */}
                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 mb-0.5 flex items-center gap-1">
                      <User className="w-3 h-3 text-purple-700" />
                      <span>Nama Lengkap Mahasiswa *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="Masukkan nama lengkap Anda"
                      className="w-full px-2.5 py-1.5 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 text-xs focus:outline-none focus:ring-1.5 focus:ring-purple-600 focus:bg-white transition-all shadow-inner"
                    />
                  </div>

                  {/* NIM */}
                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 mb-0.5 flex items-center gap-1">
                      <Hash className="w-3 h-3 text-purple-700" />
                      <span>Nomor Induk Mahasiswa (NIM) *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={studentNim}
                      onChange={(e) => setStudentNim(e.target.value)}
                      placeholder="Contoh: 2110512034"
                      className="w-full px-2.5 py-1.5 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 text-xs font-mono focus:outline-none focus:ring-1.5 focus:ring-purple-600 focus:bg-white transition-all shadow-inner"
                    />
                  </div>

                  {/* Program Studi IBM ASMI */}
                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 mb-0.5 flex items-center gap-1">
                      <Layers className="w-3 h-3 text-purple-700" />
                      <span>Program Studi / Jurusan *</span>
                    </label>
                    <select
                      value={studentDept}
                      onChange={(e) => setStudentDept(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 text-xs focus:outline-none focus:ring-1.5 focus:ring-purple-600 focus:bg-white transition-all shadow-inner font-medium cursor-pointer"
                    >
                      {IBM_ASMI_PRODI.map((prodi) => (
                        <option key={prodi} value={prodi}>
                          {prodi}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-purple-700 via-fuchsia-700 to-pink-700 hover:from-purple-800 hover:to-pink-800 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-1"
                  >
                    <span>Login</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            ) : (
              /* ADMINISTRATOR LOGIN FLOW */
              <div className="space-y-2.5">
                <div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-semibold text-[10px] mb-1">
                    <ShieldCheck className="w-3 h-3 text-amber-700" />
                    <span>Akses Khusus Administrator</span>
                  </div>
                  <h2 className="text-sm sm:text-base font-bold font-serif-scholarly text-stone-900 leading-tight">
                    Masuk Panel Pengelola Perpustakaan
                  </h2>
                  <p className="text-[10px] text-stone-500 mt-0.5 leading-tight">
                    Masuk dengan akun administrator untuk mengelola sirkulasi dan katalog e-book.
                  </p>
                </div>

                {adminError && (
                  <div className="p-2 bg-rose-50 border border-rose-200 text-rose-800 rounded-lg text-[11px] flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                    <span>{adminError}</span>
                  </div>
                )}

                {!showAdminReset ? (
                  <form onSubmit={handleAdminSubmit} className="space-y-2.5">
                    <div>
                      <label className="block text-[11px] font-bold text-stone-700 mb-0.5">
                        Email / Username Administrator *
                      </label>
                      <input
                        type="text"
                        required
                        value={adminEmail}
                        onChange={(e) => setAdminEmail(e.target.value)}
                        placeholder="perpustakaanibmasmi@gmail.com"
                        className="w-full px-2.5 py-1.5 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 text-xs focus:outline-none focus:ring-1.5 focus:ring-stone-700 focus:bg-white transition-all shadow-inner font-medium"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-0.5">
                        <label className="text-[11px] font-bold text-stone-700 flex items-center gap-1">
                          <Lock className="w-3 h-3 text-stone-600" />
                          <span>Kata Sandi (Password) *</span>
                        </label>
                        <button
                          type="button"
                          onClick={() => setShowAdminReset(true)}
                          className="text-[10px] text-purple-700 hover:text-purple-900 font-semibold underline"
                        >
                          Lupa Password?
                        </button>
                      </div>

                      <div className="relative">
                        <input
                          type={showAdminPass ? 'text' : 'password'}
                          required
                          value={adminPassword}
                          onChange={(e) => setAdminPassword(e.target.value)}
                          placeholder="Masukkan kata sandi admin..."
                          className="w-full px-2.5 py-1.5 pr-8 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 text-xs focus:outline-none focus:ring-1.5 focus:ring-stone-700 focus:bg-white transition-all shadow-inner"
                        />
                        <button
                          type="button"
                          onClick={() => setShowAdminPass(!showAdminPass)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 p-1"
                        >
                          {showAdminPass ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2 px-3 rounded-xl bg-stone-900 hover:bg-stone-850 text-white font-bold text-xs shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-1"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                      <span>Login</span>
                    </button>
                  </form>
                ) : (
                  /* Admin Password Reset Flow */
                  <form onSubmit={handleAdminResetSubmit} className="space-y-2 bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                    <h3 className="text-[11px] font-bold text-stone-800">
                      Pemulihan Password Administrator
                    </h3>

                    {resetFeedback && (
                      <div
                        className={`p-2 rounded-lg text-[10px] flex items-center gap-1.5 ${
                          resetFeedback.type === 'success'
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                            : 'bg-rose-50 text-rose-800 border border-rose-200'
                        }`}
                      >
                        {resetFeedback.type === 'success' ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        ) : (
                          <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                        )}
                        <span>{resetFeedback.message}</span>
                      </div>
                    )}

                    <div>
                      <label className="block text-[10px] font-semibold text-stone-600 mb-0.5">
                        Email Verifikasi Administrator
                      </label>
                      <input
                        type="email"
                        required
                        value={resetIdentifier}
                        onChange={(e) => setResetIdentifier(e.target.value)}
                        className="w-full p-1.5 bg-white border border-stone-300 rounded-md text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold text-stone-600 mb-0.5">
                        Password Baru
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ketik password baru Anda"
                        value={resetNewPass}
                        onChange={(e) => setResetNewPass(e.target.value)}
                        className="w-full p-1.5 bg-white border border-stone-300 rounded-md text-xs"
                      />
                    </div>

                    <div className="flex items-center gap-2 pt-0.5">
                      <button
                        type="submit"
                        className="px-2.5 py-1 bg-stone-900 text-white rounded-lg text-[11px] font-bold hover:bg-stone-800"
                      >
                        Simpan Password Baru
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setShowAdminReset(false);
                          setResetFeedback(null);
                        }}
                        className="px-2 py-1 text-stone-600 hover:text-stone-900 text-[11px] font-medium"
                      >
                        Batal
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer Branding - Strictly single line */}
      <footer className="max-w-2xl mx-auto w-full text-center text-[10px] text-stone-500 py-1 shrink-0 truncate">
        <span>IBM ASMI DIGITAL LIBRARY · Institut Bisnis Dan Multimedia asmi · Administrator: Gilang Raka Ramadhan</span>
      </footer>
    </div>
  );
};
