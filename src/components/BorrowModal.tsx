import React, { useState } from 'react';
import { useLibrary } from '../context/LibraryContext';
import {
  Calendar,
  Clock,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  X,
  BookOpen,
  Info,
} from 'lucide-react';

export const BorrowModal: React.FC = () => {
  const {
    selectedBookForBorrow,
    closeBorrowModal,
    borrowBook,
    currentUser,
    loans,
    circulationSettings,
    openReader,
  } = useLibrary();

  const [durationDays, setDurationDays] = useState<number>(
    circulationSettings.defaultDurationDays || 7
  );
  const [isCustom, setIsCustom] = useState(false);
  const [customDaysInput, setCustomDaysInput] = useState<number>(10);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  if (!selectedBookForBorrow) return null;

  const book = selectedBookForBorrow;

  const studentActiveLoans = loans.filter(
    (l) => l.userId === currentUser.id && l.status === 'active'
  );

  const activeDuration = isCustom ? customDaysInput : durationDays;

  // Calculate target due date
  const now = new Date();
  const dueDate = new Date(now.getTime() + activeDuration * 24 * 60 * 60 * 1000);
  const formattedDueDate = dueDate.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const handleConfirmBorrow = () => {
    const res = borrowBook(book.id, activeDuration);
    if (res.success) {
      setFeedback({ type: 'success', message: res.message });
      setTimeout(() => {
        setFeedback(null);
        closeBorrowModal();
      }, 1800);
    } else {
      setFeedback({ type: 'error', message: res.message });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-stone-900 text-stone-100 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-amber-400" />
            <h3 className="font-serif-scholarly font-bold text-base text-stone-100">
              Formulir Peminjaman E-Book Digital
            </h3>
          </div>
          <button
            type="button"
            onClick={closeBorrowModal}
            className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          {feedback && (
            <div
              className={`p-3.5 rounded-xl text-xs flex items-start gap-2.5 ${
                feedback.type === 'success'
                  ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                  : 'bg-rose-50 text-rose-900 border border-rose-200'
              }`}
            >
              {feedback.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              )}
              <span className="leading-relaxed">{feedback.message}</span>
            </div>
          )}

          {/* Book Summary Card */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-stone-50 border border-stone-200">
            <img
              src={book.coverUrl}
              alt={book.title}
              className="w-16 h-22 object-cover rounded shadow-sm border border-stone-200 shrink-0"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-mono text-amber-700 font-semibold tracking-wider uppercase">
                DDC {book.ddc} · {book.category}
              </span>
              <h4 className="font-serif-scholarly font-bold text-stone-900 text-sm leading-snug line-clamp-2 mt-0.5">
                {book.title}
              </h4>
              <p className="text-xs text-stone-600 mt-0.5 truncate">{book.author}</p>
              <div className="flex items-center gap-2 text-[11px] text-stone-500 mt-2">
                <span>{book.totalPages} Halaman</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-700 font-medium">
                  {book.availableCopies} Salinan Tersedia
                </span>
              </div>
            </div>
          </div>

          {/* Student Quota Info */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-stone-100/70 border border-stone-200 text-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-stone-600" />
              <span className="text-stone-700">Peminjam:</span>
              <strong className="text-stone-900 font-semibold">{currentUser.name}</strong>
            </div>
            <span className="text-stone-600">
              Kuota: <strong>{studentActiveLoans.length}</strong> / {circulationSettings.maxLoansPerStudent}
            </span>
          </div>

          {/* Duration Selector */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-stone-800 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>Pilih Durasi Waktu Peminjaman:</span>
              </label>
              <span className="text-[11px] text-stone-500">
                Maksimal {circulationSettings.maxCustomDays} hari
              </span>
            </div>

            {/* Presets Button Grid */}
            <div className="grid grid-cols-4 gap-2 mb-3">
              {[
                { days: 1, label: '1 Hari', note: 'Kilas Ujian' },
                { days: 3, label: '3 Hari', note: 'Makalah' },
                { days: 7, label: '7 Hari', note: 'Standar' },
                { days: 14, label: '14 Hari', note: 'Riset' },
              ].map((item) => (
                <button
                  key={item.days}
                  type="button"
                  onClick={() => {
                    setIsCustom(false);
                    setDurationDays(item.days);
                  }}
                  className={`py-2 px-2 rounded-lg border text-center transition-all ${
                    !isCustom && durationDays === item.days
                      ? 'bg-amber-600 text-white border-amber-600 shadow-sm font-semibold'
                      : 'bg-white text-stone-700 border-stone-200 hover:border-amber-400 hover:bg-stone-50'
                  }`}
                >
                  <div className="text-xs">{item.label}</div>
                  <div
                    className={`text-[10px] ${
                      !isCustom && durationDays === item.days ? 'text-amber-100' : 'text-stone-400'
                    }`}
                  >
                    {item.note}
                  </div>
                </button>
              ))}
            </div>

            {/* Custom Duration Toggle */}
            {circulationSettings.allowCustomDays && (
              <div className="mt-2 pt-2 border-t border-stone-100">
                <label className="flex items-center gap-2 text-xs text-stone-700 cursor-pointer mb-2">
                  <input
                    type="checkbox"
                    checked={isCustom}
                    onChange={(e) => setIsCustom(e.target.checked)}
                    className="rounded text-amber-600 focus:ring-amber-500"
                  />
                  <span>Atur durasi hari sendiri (kustom)</span>
                </label>

                {isCustom && (
                  <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg border border-stone-200">
                    <input
                      type="range"
                      min={1}
                      max={circulationSettings.maxCustomDays}
                      value={customDaysInput}
                      onChange={(e) => setCustomDaysInput(Number(e.target.value))}
                      className="flex-1 accent-amber-600"
                    />
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        min={1}
                        max={circulationSettings.maxCustomDays}
                        value={customDaysInput}
                        onChange={(e) => setCustomDaysInput(Math.min(circulationSettings.maxCustomDays, Math.max(1, Number(e.target.value))))}
                        className="w-16 px-2 py-1 text-xs border border-stone-300 rounded text-center font-bold"
                      />
                      <span className="text-xs text-stone-600">Hari</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Due Date & Return Policy Box */}
          <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80 text-xs text-amber-950 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-stone-600 font-medium">Batas Jatuh Tempo Pengembalian:</span>
              <strong className="text-amber-900 font-bold">{formattedDueDate}</strong>
            </div>
            <p className="text-[11px] text-stone-500 leading-relaxed">
              * E-book akan otomatis kembali ke rak digital perpustakaan setelah durasi berakhir tanpa denda.
              Dapat diperpanjang hingga 2 kali selama belum terlambat.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => {
              closeBorrowModal();
              openReader(book);
            }}
            className="text-xs text-stone-600 hover:text-stone-900 flex items-center gap-1"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Baca Dulu (Pratinjau)</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={closeBorrowModal}
              className="px-4 py-2 rounded-lg text-xs font-medium text-stone-600 hover:bg-stone-200 transition-colors"
            >
              Batal
            </button>
            <button
              type="button"
              onClick={handleConfirmBorrow}
              disabled={book.availableCopies <= 0 || !book.borrowable}
              className="px-5 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Konfirmasi Peminjaman ({activeDuration} Hari)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
