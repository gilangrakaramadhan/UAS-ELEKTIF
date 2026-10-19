import React, { useState, useRef } from 'react';
import { useLibrary } from '../context/LibraryContext';
import {
  parseExcelFile,
  downloadCatalogTemplate,
  ExcelImportResult,
} from '../utils/excelHelper';
import { Book } from '../types/library';
import {
  FileSpreadsheet,
  UploadCloud,
  Download,
  CheckCircle2,
  AlertCircle,
  X,
  FileText,
  Layers,
  Sparkles,
  Info,
  Check,
} from 'lucide-react';

interface ExcelImportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExcelImportModal: React.FC<ExcelImportModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { importBooks } = useLibrary();

  const [isDragging, setIsDragging] = useState(false);
  const [isParsing, setIsParsing] = useState(false);
  const [importResult, setImportResult] = useState<ExcelImportResult | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileProcess = async (file: File) => {
    setSelectedFileName(file.name);
    setIsParsing(true);
    setSuccessMessage(null);

    const result = await parseExcelFile(file);
    setImportResult(result);
    setIsParsing(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileProcess(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileProcess(file);
    }
  };

  const handleConfirmImport = () => {
    if (!importResult || importResult.importedBooks.length === 0) return;

    const count = importBooks(importResult.importedBooks);
    setSuccessMessage(`Berhasil mengimpor ${count} judul e-book baru ke dalam katalog perpustakaan!`);

    setTimeout(() => {
      setImportResult(null);
      setSelectedFileName(null);
      setSuccessMessage(null);
      onClose();
    }, 2000);
  };

  const handleReset = () => {
    setImportResult(null);
    setSelectedFileName(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-stone-900 text-stone-100 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <FileSpreadsheet className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif-scholarly font-bold text-base text-stone-100">
                Impor Katalog E-Book via Microsoft Excel (.xlsx / .csv)
              </h3>
              <p className="text-[11px] text-stone-400">
                Modul penambahan koleksi pustaka terotomasi standar Pustakawan S3
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 flex-1 overflow-y-auto">
          {successMessage && (
            <div className="p-4 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="font-medium">{successMessage}</span>
            </div>
          )}

          {/* Guidelines & Template Download Banner */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Format Berkas Excel yang Didukung</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed max-w-xl">
                Unggah berkas Excel berisi kolom: <strong>Judul Buku</strong>, <strong>Penulis</strong>, <strong>Nomor DDC</strong>, <strong>Kategori</strong>, <strong>Cover URL</strong> (tautan gambar online / data URI), <strong>Status Peminjaman</strong> (Aktif/Nonaktif), dan <strong>Jumlah Salinan</strong>.
              </p>
            </div>

            <button
              type="button"
              onClick={downloadCatalogTemplate}
              className="px-4 py-2 rounded-lg bg-white border border-stone-300 hover:bg-stone-100 text-stone-800 text-xs font-semibold shadow-xs transition-colors flex items-center gap-1.5 shrink-0"
              title="Unduh berkas contoh Excel dengan kolom siap isi"
            >
              <Download className="w-4 h-4 text-emerald-700" />
              <span>Unduh Template Excel (.xlsx)</span>
            </button>
          </div>

          {/* Dropzone File Upload */}
          {!importResult && (
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all ${
                isDragging
                  ? 'border-emerald-500 bg-emerald-50/50'
                  : 'border-stone-300 hover:border-emerald-600 bg-stone-50/50 hover:bg-stone-50'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".xlsx, .xls, .csv"
                onChange={handleFileChange}
                className="hidden"
              />

              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3 shadow-inner">
                <UploadCloud className="w-7 h-7" />
              </div>

              <h4 className="font-serif-scholarly font-bold text-stone-900 text-base">
                Tarik & Lepas Berkas Excel di Sini
              </h4>
              <p className="text-xs text-stone-500 mt-1">
                atau klik untuk memilih berkas dari komputer Anda (.xlsx, .xls, .csv)
              </p>

              {isParsing && (
                <div className="mt-4 text-xs font-semibold text-emerald-700 animate-pulse">
                  Sedang membaca dan memvalidasi struktur katalog Excel...
                </div>
              )}
            </div>
          )}

          {/* Parse Results Preview Table */}
          {importResult && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif-scholarly font-bold text-stone-900 text-sm">
                    Pratinjau Data Katalog ({importResult.importedBooks.length} Buku Dikenali)
                  </h4>
                  <p className="text-[11px] text-stone-500">
                    Berkas: <span className="font-mono font-medium">{selectedFileName}</span> · Total Baris: {importResult.totalRows}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-stone-500 hover:text-stone-800 underline"
                >
                  Ganti Berkas Excel
                </button>
              </div>

              {/* Errors list if any */}
              {importResult.errors.length > 0 && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-900 space-y-1">
                  <div className="font-semibold flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-rose-600" />
                    <span>Catatan Validasi Baris ({importResult.errors.length}):</span>
                  </div>
                  <ul className="list-disc list-inside text-[11px] opacity-90 max-h-24 overflow-y-auto">
                    {importResult.errors.map((err, i) => (
                      <li key={i}>{err}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Table of Books to be Imported */}
              <div className="border border-stone-200 rounded-xl overflow-hidden max-h-72 overflow-y-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-stone-100/80 sticky top-0 border-b border-stone-200 text-stone-600 font-semibold z-10">
                    <tr>
                      <th className="py-2.5 px-3">Cover Sesuai File</th>
                      <th className="py-2.5 px-3">Judul E-Book</th>
                      <th className="py-2.5 px-3">Penulis</th>
                      <th className="py-2.5 px-3">DDC</th>
                      <th className="py-2.5 px-3">Kategori</th>
                      <th className="py-2.5 px-3">Salinan</th>
                      <th className="py-2.5 px-3">Status Pinjam</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {importResult.importedBooks.map((b, idx) => (
                      <tr key={idx} className="hover:bg-stone-50">
                        <td className="py-2 px-3">
                          <img
                            src={b.coverUrl}
                            alt={b.title}
                            className="w-8 h-12 object-cover rounded shadow-xs border border-stone-200"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                        </td>
                        <td className="py-2 px-3 font-serif-scholarly font-medium text-stone-900 max-w-xs truncate">
                          {b.title}
                        </td>
                        <td className="py-2 px-3 text-stone-600 truncate max-w-xs">{b.author}</td>
                        <td className="py-2 px-3 font-mono text-amber-700 font-semibold">
                          {b.ddc}
                        </td>
                        <td className="py-2 px-3 text-stone-500">{b.category}</td>
                        <td className="py-2 px-3 font-semibold">{b.totalCopies}</td>
                        <td className="py-2 px-3">
                          <span
                            className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold ${
                              b.borrowable
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-stone-100 text-stone-600'
                            }`}
                          >
                            {b.borrowable ? 'Bisa Dipinjam' : 'Hanya Baca'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
          <div className="text-xs text-stone-500">
            {importResult && (
              <span>
                Siap memasukkan <strong>{importResult.importedBooks.length}</strong> buku ke koleksi resmi.
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-medium text-stone-600 hover:bg-stone-200 transition-colors"
            >
              Tutup
            </button>

            {importResult && importResult.importedBooks.length > 0 && (
              <button
                type="button"
                onClick={handleConfirmImport}
                className="px-5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-md transition-all flex items-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                <span>Simpan Seluruh Buku ke Katalog</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
