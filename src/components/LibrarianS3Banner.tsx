import React, { useState } from 'react';
import { useLibrary } from '../context/LibraryContext';
import {
  BookOpen,
  Award,
  ChevronDown,
  ChevronUp,
  FileSpreadsheet,
  Clock,
  Sparkles,
  Info,
  CheckCircle,
} from 'lucide-react';

export const LibrarianS3Banner: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { activeRole, circulationSettings } = useLibrary();

  return (
    <div className="bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 text-stone-100 border-b border-stone-800 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:py-5">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          {/* Librarian Avatar & Credentials */}
          <div className="flex items-start gap-3.5">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600 to-stone-800 border-2 border-amber-400/50 flex items-center justify-center shadow-lg text-amber-200">
                <Award className="w-6 h-6" />
              </div>
              <span className="absolute -bottom-1 -right-1 bg-amber-500 text-stone-950 font-bold text-[9px] px-1.5 py-0.2 rounded-full font-mono uppercase tracking-wider">
                ADMIN
              </span>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-bold text-amber-400 font-serif-scholarly">
                  Gilang Raka Ramadhan
                </span>
                <span className="text-[11px] text-stone-400 hidden sm:inline">
                  — Administrator Perpustakaan Digital
                </span>
              </div>
              <p className="text-xs text-stone-300 mt-0.5 max-w-2xl leading-relaxed">
                {activeRole === 'student' ? (
                  <>
                    "Selamat datang di repositori E-Book Digital IBM ASMI (Institut Bisnis Dan Multimedia asmi). Anda dapat membaca naskah secara penuh di reader daring atau meminjam buku dengan durasi yang dapat Anda atur secara fleksibel."
                  </>
                ) : (
                  <>
                    "Selamat datang di Dashboard Pemantauan Perpustakaan IBM ASMI, Gilang Raka Ramadhan. Anda dapat memantau sirkulasi mahasiswa secara langsung, mengaktifkan/menonaktifkan peminjaman per buku, serta mengimpor katalog melalui Excel."
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Quick Guidance / Toggle details */}
          <div className="flex items-center gap-2 self-end lg:self-center">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-750 text-stone-300 hover:text-white border border-stone-700 transition-colors"
            >
              <Info className="w-3.5 h-3.5 text-amber-400" />
              <span>{isExpanded ? 'Tutup Informasi' : 'Pedoman Perpustakaan'}</span>
              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Expanded Scholarly Insights */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-stone-800 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs animate-in fade-in duration-300">
            <div className="p-3 rounded-lg bg-stone-950/60 border border-stone-800">
              <div className="flex items-center gap-2 text-amber-400 font-semibold mb-1">
                <Clock className="w-4 h-4" />
                <span>Kendali Durasi Peminjaman</span>
              </div>
              <p className="text-stone-300 leading-relaxed">
                Peminjaman e-book dapat diatur secara fleksibel (1, 3, 7, atau 14 hari) sesuai beban studi.
                Admin berhak mengaktifkan/menonaktifkan peminjaman per buku atau secara global untuk perawatan koleksi.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-stone-950/60 border border-stone-800">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-1">
                <FileSpreadsheet className="w-4 h-4" />
                <span>Impor Katalog Masif (Excel / .xlsx)</span>
              </div>
              <p className="text-stone-300 leading-relaxed">
                Pustakawan dapat mengunggah berkas Excel berisi metadata buku, nomor DDC, sinopsis, dan tautan cover buku.
                Sistem otomatis memvalidasi struktur data sebelum dimasukkan ke basis katalog.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-stone-950/60 border border-stone-800">
              <div className="flex items-center gap-2 text-sky-400 font-semibold mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Standar Baca & Sitasi Ilmiah</span>
              </div>
              <p className="text-stone-300 leading-relaxed">
                E-Reader interaktif dilengkapi pengatur kontras (Terang, Sepia, Gelap), penanda halaman, anotasi riset,
                serta salin sitasi otomatis dalam format APA ke-7, IEEE, dan Harvard.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
