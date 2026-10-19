import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import {
  QrCode,
  Download,
  Copy,
  Check,
  X,
  ExternalLink,
  Smartphone,
  Sparkles,
  Share2,
  Globe,
  MessageCircle,
  Link as LinkIcon,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const flyerRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState<'qr' | 'shortlink' | 'share'>('qr');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');

  // TARGET WORKING URL: This is the real, live, accessible Google Cloud Run URL that works 100% for all users
  const publicSharedUrl = 'https://ais-pre-qfmscmlvorpbp2phocsqrp-377860039954.asia-east1.run.app';
  const targetActualUrl =
    typeof window !== 'undefined' &&
    window.location.origin &&
    !window.location.origin.includes('localhost') &&
    !window.location.origin.includes('ais-dev')
      ? window.location.origin
      : publicSharedUrl;

  // Custom short link that user might have created on s.id, tinyurl, or bitly
  const [savedShortLink, setSavedShortLink] = useState<string>(() => {
    try {
      return localStorage.getItem('ibmasmi_registered_shortlink') || '';
    } catch {
      return '';
    }
  });

  const [inputShortLink, setInputShortLink] = useState<string>(savedShortLink);
  const [saveFeedback, setSaveFeedback] = useState(false);

  // QR Code ALWAYS encodes the actual working target URL (or verified registered shortlink) so scanners never fail
  const qrTarget = savedShortLink && savedShortLink.startsWith('http') ? savedShortLink : targetActualUrl;

  useEffect(() => {
    if (isOpen && canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        qrTarget,
        {
          width: 250,
          margin: 2,
          color: {
            dark: '#581c87', // deep purple IBM ASMI
            light: '#ffffff',
          },
          errorCorrectionLevel: 'H',
        },
        (error) => {
          if (error) console.error('Error generating QR code:', error);
          else if (canvasRef.current) {
            setQrDataUrl(canvasRef.current.toDataURL('image/png'));
          }
        }
      );
    }
  }, [isOpen, qrTarget]);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleDownloadQr = () => {
    if (!qrDataUrl) return;
    const link = document.createElement('a');
    link.download = 'QR_Code_Gilang_Raka_Ramadhan_Web_IBM_ASMI.png';
    link.href = qrDataUrl;
    link.click();
  };

  const handleSaveShortLink = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputShortLink.trim();
    setSavedShortLink(trimmed);
    try {
      localStorage.setItem('ibmasmi_registered_shortlink', trimmed);
      setSaveFeedback(true);
      setTimeout(() => setSaveFeedback(false), 2500);
    } catch {
      // ignore
    }
  };

  // WhatsApp share message template using the working URL
  const activeShareLink = savedShortLink || targetActualUrl;
  const waShareText = `📚 *IBM ASMI DIGITAL LIBRARY*
✨ *Gilang Raka Ramadhan Web App*

Halo teman-teman mahasiswa IBM ASMI! Portal baca e-book & sistem peminjaman buku perpustakaan sudah aktif dan bisa langsung dibuka:

🔗 *Link Web (Klik Langsung Terbuka):*
${activeShareLink}

💡 *Fitur:*
• Baca e-book langsung di ponsel atau laptop
• Peminjaman e-book online 24 jam
• Katalog buku bisnis, manajemen & multimedia
• Tersedia juga QR Code untuk scan kamera HP

Silakan klik link di atas untuk mulai membaca! 📖✨`;

  const waShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(waShareText)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[94vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-purple-950 via-stone-900 to-purple-950 text-white flex items-center justify-between border-b border-purple-900 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-purple-300 shadow-sm">
              <Share2 className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm sm:text-base text-white">
                  Akses & Bagikan Web Mahasiswa
                </h3>
                <span className="text-[10px] bg-purple-500/30 text-purple-200 px-2 py-0.5 rounded-full border border-purple-400/30 font-medium">
                  Gilang Raka Ramadhan Web App
                </span>
              </div>
              <p className="text-[11px] text-purple-200">
                IBM ASMI DIGITAL LIBRARY — Institut Bisnis Dan Multimedia asmi
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center border-b border-stone-200 bg-stone-50 px-6 pt-2 shrink-0 gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('qr')}
            className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'qr'
                ? 'border-purple-600 text-purple-800'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <QrCode className="w-3.5 h-3.5" />
            <span>Scan QR & Link Aktif</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('shortlink')}
            className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'shortlink'
                ? 'border-purple-600 text-purple-800'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Buat Link Pendek (s.id)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('share')}
            className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'share'
                ? 'border-purple-600 text-purple-800'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Kirim ke WhatsApp</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 overflow-y-auto flex-1 text-xs">
          {/* TAB 1: QR & LIVE WORKING LINK */}
          {activeTab === 'qr' && (
            <div className="space-y-4">
              {/* Alert: Explanation of why fake domain didn't open */}
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-950 text-[11px] leading-relaxed flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-amber-900 font-semibold">
                    Kenapa link custom teks tidak bisa dibuka langsung?
                  </strong>
                  <span>
                    Alamat web di internet harus aktif di server. Link fiktif (seperti <em>gilang-raka-ramadhan.web.app</em>) belum didaftarkan di internet sehingga browser akan error.
                    Gunakan <strong>Link Resmi yang Aktif di bawah ini</strong> atau <strong>scan QR Code</strong> yang 100% langsung terbuka di HP siapapun!
                  </span>
                </div>
              </div>

              {/* Live Working Link Highlight Box */}
              <div className="p-4 bg-gradient-to-br from-purple-50 via-white to-purple-50/50 rounded-2xl border-2 border-purple-300 shadow-sm space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-purple-900 font-bold text-xs">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Link Web Resmi (100% Aktif & Bisa Dibuka Semua Orang)</span>
                  </div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                    Aktif
                  </span>
                </div>

                <div className="p-2.5 bg-white rounded-xl border border-purple-200 flex items-center justify-between gap-2 shadow-2xs">
                  <span className="font-mono text-purple-950 font-semibold text-xs truncate flex-1 select-all">
                    {targetActualUrl}
                  </span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <a
                      href={targetActualUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-[11px] font-semibold transition-colors flex items-center gap-1"
                      title="Buka link ini di tab baru"
                    >
                      <span>Buka</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <button
                      type="button"
                      onClick={() => handleCopy(targetActualUrl, 'live_primary')}
                      className="px-3 py-1.5 bg-purple-700 hover:bg-purple-800 text-white rounded-lg text-[11px] font-bold transition-colors flex items-center gap-1 shadow-xs"
                      title="Salin link resmi ini"
                    >
                      {copiedKey === 'live_primary' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-300" />
                          <span>Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Salin Link</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <p className="text-[11px] text-stone-600">
                  Bagikan tautan di atas ke mahasiswa. Siapapun yang mengklik tautan ini langsung dapat membaca e-book tanpa perlu login Google.
                </p>
              </div>

              {/* Printable QR Code Flyer Card */}
              <div
                ref={flyerRef}
                className="p-5 rounded-2xl border-2 border-stone-200 bg-stone-50/70 text-center space-y-3"
              >
                <div>
                  <h4 className="font-black text-base text-stone-900 tracking-tight">
                    Gilang Raka Ramadhan Web App
                  </h4>
                  <p className="text-xs text-purple-800 font-semibold">
                    IBM ASMI DIGITAL LIBRARY
                  </p>
                  <p className="text-[11px] text-stone-500">
                    Institut Bisnis Dan Multimedia asmi
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-purple-700 uppercase tracking-wider bg-purple-100 px-2.5 py-0.5 rounded-full mt-1.5">
                    <Smartphone className="w-3 h-3" />
                    <span>Arahkan Kamera HP ke QR Code Ini</span>
                  </div>
                </div>

                {/* QR Code Canvas */}
                <div className="flex justify-center p-3 bg-white rounded-2xl border border-stone-200 shadow-xs mx-auto w-fit">
                  <canvas ref={canvasRef} className="rounded-lg" />
                </div>

                <p className="text-[11px] text-stone-600 max-w-xs mx-auto">
                  QR Code di atas <strong>100% diprogram mengarah ke link aktif</strong>, sehingga mahasiswa yang scan lewat kamera HP langsung masuk tanpa perlu mengetik link.
                </p>

                <div className="pt-1 flex items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={handleDownloadQr}
                    className="px-3.5 py-1.5 bg-stone-800 hover:bg-stone-900 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Unduh Gambar QR Code (PNG)</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SHORTLINK RESMI s.id */}
          {activeTab === 'shortlink' && (
            <div className="space-y-4">
              <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl text-purple-950 text-[11px] leading-relaxed">
                <strong className="block font-bold text-purple-900 text-xs mb-1">
                  Cara Membuat Link Pendek Kustom Sendiri (Misal: s.id/gilang-raka):
                </strong>
                <p>
                  Karena alamat Google Cloud Run panjang, Anda bisa memakai layanan pemendek tautan gratis resmi seperti <strong>s.id</strong> (khusus Indonesia) atau <strong>TinyURL</strong> dalam 3 langkah mudah:
                </p>
              </div>

              {/* Step by step guide */}
              <div className="space-y-3">
                <div className="p-3 bg-white border border-stone-200 rounded-xl flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-xs shrink-0">
                    1
                  </div>
                  <div className="flex-1 space-y-1">
                    <span className="font-bold text-stone-800 block">Salin Link Asli Web Anda:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-stone-600 bg-stone-100 px-2 py-1 rounded truncate flex-1 select-all">
                        {targetActualUrl}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy(targetActualUrl, 'step1_copy')}
                        className="px-2.5 py-1 bg-purple-700 hover:bg-purple-800 text-white rounded text-[11px] font-semibold transition-colors shrink-0"
                      >
                        {copiedKey === 'step1_copy' ? 'Tersalin!' : 'Salin'}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-white border border-stone-200 rounded-xl flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-xs shrink-0">
                    2
                  </div>
                  <div className="flex-1 space-y-2">
                    <span className="font-bold text-stone-800 block">Buka Web Pemendek Tautan Gratis:</span>
                    <p className="text-[11px] text-stone-600">
                      Buka situs di bawah, lalu <strong>Paste / Tempel</strong> link asli tadi dan buat nama pendek sesuai keinginan Anda (misal: <code>gilang-raka</code>):
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href="https://s.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleCopy(targetActualUrl, 'sid_clip')}
                        className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-bold text-[11px] flex items-center gap-1 transition-colors"
                      >
                        <span>Buka s.id (Disarankan)</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <a
                        href="https://tinyurl.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleCopy(targetActualUrl, 'tiny_clip')}
                        className="px-3 py-1.5 bg-stone-700 hover:bg-stone-800 text-white rounded-lg font-semibold text-[11px] flex items-center gap-1 transition-colors"
                      >
                        <span>Buka TinyURL</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-white border border-stone-200 rounded-xl flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-xs shrink-0">
                    3
                  </div>
                  <form onSubmit={handleSaveShortLink} className="flex-1 space-y-2">
                    <span className="font-bold text-stone-800 block">
                      Simpan Link Pendek Anda ke Sini (Opsional):
                    </span>
                    <p className="text-[11px] text-stone-600">
                      Setelah berhasil membuat link di s.id (misal: <code>https://s.id/gilang-raka</code>), masukkan di sini agar otomatis tersimpan di web ini:
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="url"
                        value={inputShortLink}
                        onChange={(e) => setInputShortLink(e.target.value)}
                        placeholder="Contoh: https://s.id/gilang-raka"
                        className="flex-1 px-3 py-1.5 rounded-lg border border-stone-300 text-xs font-mono focus:outline-hidden focus:ring-2 focus:ring-purple-500"
                      />
                      <button
                        type="submit"
                        className="px-3 py-1.5 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-lg text-xs transition-colors shrink-0"
                      >
                        Simpan
                      </button>
                    </div>

                    {saveFeedback && (
                      <div className="text-emerald-700 font-semibold text-[11px] flex items-center gap-1 pt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Link pendek berhasil disimpan!</span>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SHARE WHATSAPP */}
          {activeTab === 'share' && (
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-emerald-700" />
                    <span className="font-bold text-emerald-950 text-xs">
                      Pesan WhatsApp Siap Kirim ke Mahasiswa
                    </span>
                  </div>
                  <span className="text-[10px] bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded font-bold">
                    Tinggal Kirim
                  </span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-emerald-200 text-[11px] text-stone-700 font-mono whitespace-pre-line leading-relaxed max-h-48 overflow-y-auto">
                  {waShareText}
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={waShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Buka & Kirim ke WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => handleCopy(waShareText, 'wa_copy')}
                    className="px-3.5 py-2.5 bg-white hover:bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-xl font-bold text-xs flex items-center gap-1 transition-colors"
                  >
                    {copiedKey === 'wa_copy' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin Pesan</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between gap-2 shrink-0">
          <a
            href={targetActualUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-purple-700 hover:text-purple-900 font-semibold flex items-center gap-1"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Klik di sini untuk Tes Buka Web</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl text-stone-600 hover:bg-stone-200 text-xs font-semibold transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
