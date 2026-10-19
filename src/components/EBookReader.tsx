import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useLibrary } from '../context/LibraryContext';
import { getBookPages } from '../utils/bookPagesGenerator';
import { BookPage } from '../types/library';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Bookmark as BookmarkIcon,
  BookmarkCheck,
  Type,
  Sun,
  Moon,
  Coffee,
  List,
  StickyNote,
  Quote,
  Maximize2,
  Minimize2,
  Check,
  Copy,
  Clock,
  Sparkles,
  BookOpen,
  Hash,
  Sliders,
  HelpCircle,
  FileText,
  Layers,
  ChevronDown,
} from 'lucide-react';

export const EBookReader: React.FC = () => {
  const {
    readingBook,
    closeReader,
    bookmarks,
    addBookmark,
    removeBookmark,
    readerNotes,
    addReaderNote,
    deleteReaderNote,
    loans,
    currentUser,
  } = useLibrary();

  // Generate 55+ full academic pages for the book
  const pages: BookPage[] = useMemo(() => {
    if (!readingBook) return [];
    return getBookPages(readingBook);
  }, [readingBook]);

  // Group pages by Chapter for Table of Contents (MUST be called unconditionally before early return)
  const groupedTOC = useMemo(() => {
    const groups: { chapterTitle: string; chapterNumber: number; pages: { pageIndex: number; pageNumber: number; sectionTitle: string }[] }[] = [];
    pages.forEach((p, idx) => {
      let g = groups.find((grp) => grp.chapterTitle === p.chapterTitle);
      if (!g) {
        g = { chapterTitle: p.chapterTitle, chapterNumber: p.chapterNumber, pages: [] };
        groups.push(g);
      }
      g.pages.push({ pageIndex: idx, pageNumber: p.pageNumber, sectionTitle: p.sectionTitle });
    });
    return groups;
  }, [pages]);

  const totalPages = pages.length;

  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [jumpPageInput, setJumpPageInput] = useState('');
  const [theme, setTheme] = useState<'light' | 'sepia' | 'dark' | 'slate'>('sepia');
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg' | 'xl'>('base');
  const [fontFamily, setFontFamily] = useState<'serif' | 'sans' | 'mono'>('serif');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSidebarTab, setActiveSidebarTab] = useState<'toc' | 'bookmarks' | 'notes' | 'cite'>('toc');
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [copiedCitation, setCopiedCitation] = useState<string | null>(null);

  // New note modal/form state
  const [newNoteText, setNewNoteText] = useState('');
  const [showNoteForm, setShowNoteForm] = useState(false);
  const [showFormatMenu, setShowFormatMenu] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  // Scroll ref for main reading page
  const mainScrollRef = useRef<HTMLElement>(null);

  // Current active page object (fallback if no pages)
  const currentPage: BookPage = pages[currentPageIndex] || {
    pageNumber: 1,
    chapterNumber: 0,
    chapterTitle: 'Pengantar',
    sectionTitle: 'Halaman 1',
    paragraphs: ['Memuat halaman buku...'],
  };

  const goToPage = (index: number) => {
    if (index >= 0 && index < totalPages) {
      setCurrentPageIndex(index);
      if (mainScrollRef.current) {
        mainScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
      if (typeof window !== 'undefined' && window.innerWidth < 768) {
        setSidebarOpen(false);
      }
    }
  };

  // Keyboard navigation (ArrowLeft & ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if (e.key === 'ArrowLeft') {
        goToPage(currentPageIndex - 1);
      } else if (e.key === 'ArrowRight') {
        goToPage(currentPageIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPageIndex, totalPages]);

  // Reset to page 0 whenever a different book is opened
  useEffect(() => {
    setCurrentPageIndex(0);
    setJumpPageInput('');
  }, [readingBook?.id]);

  // ALL HOOKS ARE CALLED ABOVE UNCONDITIONALLY
  if (!readingBook) return null;

  const book = readingBook;

  // Check if current user has an active loan for this book
  const activeLoan = loans.find(
    (l) => l.bookId === book.id && l.userId === currentUser.id && l.status === 'active'
  );

  const isBookmarked = bookmarks.some(
    (bm) =>
      bm.bookId === book.id &&
      (bm.pageNumber !== undefined ? bm.pageNumber === currentPage.pageNumber : bm.chapterIndex === currentPage.chapterNumber)
  );

  const currentBookNotes = readerNotes.filter((n) => n.bookId === book.id);
  const currentPageNotes = currentBookNotes.filter(
    (n) => n.pageNumber !== undefined && n.pageNumber === currentPage.pageNumber
  );

  const currentBookBookmarks = bookmarks.filter((bm) => bm.bookId === book.id);

  const progressPercent = Math.round(((currentPageIndex + 1) / Math.max(1, totalPages)) * 100);

  const handleJumpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pageNum = parseInt(jumpPageInput, 10);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
      goToPage(pageNum - 1);
      setJumpPageInput('');
    }
  };

  const toggleBookmark = () => {
    if (isBookmarked) {
      removeBookmark(book.id, currentPage.chapterNumber, currentPage.pageNumber);
    } else {
      addBookmark(
        book.id,
        currentPage.chapterNumber,
        `Hal ${currentPage.pageNumber}: ${currentPage.sectionTitle}`,
        currentPage.pageNumber
      );
    }
  };

  const handleSaveNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteText.trim()) return;
    addReaderNote(book.id, currentPage.chapterNumber, newNoteText.trim(), undefined, currentPage.pageNumber);
    setNewNoteText('');
    setShowNoteForm(false);
  };

  const handleCopyCitation = (format: 'apa' | 'ieee' | 'harvard') => {
    const text = book.citation[format];
    navigator.clipboard.writeText(text);
    setCopiedCitation(format);
    setTimeout(() => setCopiedCitation(null), 2000);
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullScreen(false);
      }
    }
  };

  // Theme styling classes
  const themeClasses = {
    light: 'bg-stone-50 text-stone-900 border-stone-200',
    sepia: 'bg-[#f7f2e7] text-[#3e2e1c] border-[#e8ddc8]',
    dark: 'bg-stone-950 text-stone-200 border-stone-800',
    slate: 'bg-slate-900 text-slate-200 border-slate-800',
  };

  const headerThemeClasses = {
    light: 'bg-white border-stone-200 text-stone-800',
    sepia: 'bg-[#efe7d6] border-[#e2d5bd] text-[#3e2e1c]',
    dark: 'bg-stone-900 border-stone-800 text-stone-200',
    slate: 'bg-slate-950 border-slate-800 text-slate-200',
  };

  const fontClasses = {
    serif: 'font-serif-scholarly',
    sans: 'font-sans',
    mono: 'font-mono text-[13px]',
  };

  const fontSizeClasses = {
    sm: 'text-sm leading-relaxed',
    base: 'text-base leading-relaxed',
    lg: 'text-lg leading-loose',
    xl: 'text-xl leading-loose',
  };

  return (
    <div className={`fixed inset-0 z-50 flex flex-col transition-colors duration-200 select-text ${themeClasses[theme]}`}>
      {/* Top Reading Progress Bar */}
      <div className="w-full bg-black/10 dark:bg-white/10 h-1">
        <div
          className="bg-amber-600 h-1 transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Reader Main Header */}
      <header
        className={`px-3 sm:px-6 py-2.5 border-b flex flex-wrap items-center justify-between gap-2 shrink-0 transition-colors ${headerThemeClasses[theme]}`}
      >
        {/* Left: Book Meta & TOC Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <button
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`p-2 rounded-lg border transition-colors flex items-center gap-1.5 text-xs font-semibold ${
              sidebarOpen
                ? 'bg-amber-600 text-white border-amber-600'
                : 'hover:bg-black/5 dark:hover:bg-white/10 border-black/10 dark:border-white/10'
            }`}
            title="Daftar Isi 55 Halaman & Catatan"
          >
            <List className="w-4 h-4" />
            <span className="hidden md:inline">Daftar Isi (55 Halaman)</span>
          </button>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h2 className="text-xs sm:text-sm font-bold truncate max-w-[180px] sm:max-w-xs md:max-w-md">
                {book.title}
              </h2>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-600/15 text-amber-800 dark:text-amber-300 font-bold shrink-0 border border-amber-600/30">
                Hal. {currentPage.pageNumber} / {totalPages}
              </span>
            </div>
            <p className="text-[11px] opacity-75 truncate max-w-[200px] sm:max-w-sm">
              {book.author} · {currentPage.chapterTitle}
            </p>
          </div>
        </div>

        {/* Right: Controls (Bookmark, Theme, Fonts, Fullscreen, Close) */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Quick Page Jump Form */}
          <form onSubmit={handleJumpSubmit} className="hidden sm:flex items-center gap-1">
            <div className="relative flex items-center">
              <span className="text-[10px] font-mono opacity-60 mr-1">Hal:</span>
              <input
                type="number"
                min="1"
                max={totalPages}
                value={jumpPageInput}
                onChange={(e) => setJumpPageInput(e.target.value)}
                placeholder={`${currentPage.pageNumber}`}
                className="w-12 px-1.5 py-1 text-xs text-center rounded border border-black/15 dark:border-white/15 bg-white/70 dark:bg-stone-900/70 font-mono font-bold focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                title={`Ketik nomor halaman (1-${totalPages}) lalu tekan Enter`}
              />
            </div>
            <button
              type="submit"
              className="px-2 py-1 text-[11px] font-semibold bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors"
            >
              Lompat
            </button>
          </form>

          {/* Bookmark Button */}
          <button
            type="button"
            onClick={toggleBookmark}
            className={`p-1.5 sm:px-2.5 sm:py-1 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 ${
              isBookmarked
                ? 'bg-amber-600 text-white shadow-xs'
                : 'hover:bg-black/5 dark:hover:bg-white/10'
            }`}
            title={isBookmarked ? 'Hapus Penanda Halaman' : `Tandai Halaman ${currentPage.pageNumber}`}
          >
            {isBookmarked ? (
              <BookmarkCheck className="w-4 h-4" />
            ) : (
              <BookmarkIcon className="w-4 h-4" />
            )}
            <span className="hidden lg:inline">{isBookmarked ? 'Ditandai' : 'Tandai Hal'}</span>
          </button>

          {/* Theme Palette Buttons */}
          <div className="flex items-center gap-0.5 bg-black/5 dark:bg-white/5 p-0.5 rounded-lg border border-black/10 dark:border-white/10">
            <button
              type="button"
              onClick={() => setTheme('light')}
              className={`p-1.5 rounded transition-all ${
                theme === 'light' ? 'bg-white shadow-2xs text-stone-900' : 'opacity-60 hover:opacity-100'
              }`}
              title="Mode Terang (Kertas Putih)"
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setTheme('sepia')}
              className={`p-1.5 rounded transition-all ${
                theme === 'sepia' ? 'bg-[#e5d9c2] shadow-2xs text-[#3e2e1c]' : 'opacity-60 hover:opacity-100'
              }`}
              title="Mode Sepia (Akademik Hangat)"
            >
              <Coffee className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setTheme('dark')}
              className={`p-1.5 rounded transition-all ${
                theme === 'dark' ? 'bg-stone-800 shadow-2xs text-stone-100' : 'opacity-60 hover:opacity-100'
              }`}
              title="Mode Gelap (Onyx)"
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Font Size Adjusters */}
          <div className="flex items-center gap-0.5 bg-black/5 dark:bg-white/5 p-0.5 rounded-lg border border-black/10 dark:border-white/10 text-xs">
            <button
              type="button"
              onClick={() => {
                if (fontSize === 'xl') setFontSize('lg');
                else if (fontSize === 'lg') setFontSize('base');
                else if (fontSize === 'base') setFontSize('sm');
              }}
              disabled={fontSize === 'sm'}
              className="px-1.5 py-0.5 rounded font-bold disabled:opacity-30 hover:bg-black/5 dark:hover:bg-white/10"
              title="Perkecil Teks"
            >
              A-
            </button>
            <button
              type="button"
              onClick={() => {
                if (fontSize === 'sm') setFontSize('base');
                else if (fontSize === 'base') setFontSize('lg');
                else if (fontSize === 'lg') setFontSize('xl');
              }}
              disabled={fontSize === 'xl'}
              className="px-1.5 py-0.5 rounded font-bold disabled:opacity-30 hover:bg-black/5 dark:hover:bg-white/10"
              title="Perbesar Teks"
            >
              A+
            </button>
          </div>

          {/* Font Family Toggle */}
          <button
            type="button"
            onClick={() => {
              if (fontFamily === 'serif') setFontFamily('sans');
              else if (fontFamily === 'sans') setFontFamily('mono');
              else setFontFamily('serif');
            }}
            className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-xs font-mono"
            title={`Ganti Rupa Huruf: Sekarang ${fontFamily.toUpperCase()}`}
          >
            <Type className="w-4 h-4" />
          </button>

          {/* Fullscreen Toggle */}
          <button
            type="button"
            onClick={toggleFullScreen}
            className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hidden sm:block"
            title="Layar Penuh"
          >
            {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Exit Reader */}
          <button
            type="button"
            onClick={closeReader}
            className="p-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-stone-900 text-stone-100 hover:bg-black dark:bg-stone-800 dark:hover:bg-stone-700 text-xs font-bold transition-colors flex items-center gap-1 shadow-xs"
            title="Keluar dari Reader"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">Tutup</span>
          </button>
        </div>
      </header>

      {/* Main Reading Canvas & Sidebar Container */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Collapsible Sidebar (55-Page TOC, Bookmarks, Notes, Citations) */}
        {sidebarOpen && (
          <aside
            className={`w-80 shrink-0 border-r flex flex-col z-20 shadow-xl animate-in slide-in-from-left duration-200 ${headerThemeClasses[theme]}`}
          >
            {/* Sidebar Tabs */}
            <div className="p-2 border-b flex items-center gap-1 text-[11px]">
              <button
                type="button"
                onClick={() => setActiveSidebarTab('toc')}
                className={`flex-1 py-1.5 rounded-md font-semibold text-center transition-colors flex items-center justify-center gap-1 ${
                  activeSidebarTab === 'toc'
                    ? 'bg-amber-600 text-white'
                    : 'hover:bg-black/5 dark:hover:bg-white/10'
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span>Daftar Isi</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveSidebarTab('bookmarks')}
                className={`flex-1 py-1.5 rounded-md font-semibold text-center transition-colors flex items-center justify-center gap-1 ${
                  activeSidebarTab === 'bookmarks'
                    ? 'bg-amber-600 text-white'
                    : 'hover:bg-black/5 dark:hover:bg-white/10'
                }`}
              >
                <BookmarkIcon className="w-3.5 h-3.5" />
                <span>Tanda ({currentBookBookmarks.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveSidebarTab('notes')}
                className={`flex-1 py-1.5 rounded-md font-semibold text-center transition-colors flex items-center justify-center gap-1 ${
                  activeSidebarTab === 'notes'
                    ? 'bg-amber-600 text-white'
                    : 'hover:bg-black/5 dark:hover:bg-white/10'
                }`}
              >
                <StickyNote className="w-3.5 h-3.5" />
                <span>Catatan ({currentBookNotes.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveSidebarTab('cite')}
                className={`py-1.5 px-2 rounded-md font-semibold text-center transition-colors flex items-center justify-center ${
                  activeSidebarTab === 'cite'
                    ? 'bg-amber-600 text-white'
                    : 'hover:bg-black/5 dark:hover:bg-white/10'
                }`}
                title="Format Sitasi Akademik"
              >
                <Quote className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Sidebar Content Area */}
            <div className="flex-1 overflow-y-auto p-3 text-xs">
              {/* TAB 1: 55-PAGE TABLE OF CONTENTS */}
              {activeSidebarTab === 'toc' && (
                <div className="space-y-4">
                  <div className="p-2.5 bg-black/5 dark:bg-white/5 rounded-lg text-[11px] leading-relaxed">
                    <strong className="block text-amber-700 dark:text-amber-400 font-bold mb-0.5">
                      📖 55 Halaman Lengkap Terdaftar
                    </strong>
                    <span>Klik pada halaman manapun di bawah ini untuk langsung membaca bagian tersebut:</span>
                  </div>

                  <div className="space-y-3">
                    {groupedTOC.map((group, gIdx) => (
                      <div key={gIdx} className="space-y-1">
                        <div className="font-bold text-[11px] opacity-80 uppercase tracking-wider px-1 pt-1 border-b border-black/10 dark:border-white/10 pb-0.5">
                          {group.chapterTitle}
                        </div>
                        <div className="space-y-0.5">
                          {group.pages.map((p) => {
                            const isCurrent = p.pageIndex === currentPageIndex;
                            return (
                              <button
                                key={p.pageIndex}
                                type="button"
                                onClick={() => goToPage(p.pageIndex)}
                                className={`w-full text-left p-1.5 rounded text-xs transition-colors flex items-center justify-between gap-2 ${
                                  isCurrent
                                    ? 'bg-amber-600 text-white font-bold shadow-2xs'
                                    : 'hover:bg-black/5 dark:hover:bg-white/10'
                                }`}
                              >
                                <span className="truncate flex-1">
                                  {p.sectionTitle}
                                </span>
                                <span
                                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded shrink-0 ${
                                    isCurrent
                                      ? 'bg-black/20 text-white'
                                      : 'opacity-60 bg-black/5 dark:bg-white/5'
                                  }`}
                                >
                                  Hal. {p.pageNumber}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 2: BOOKMARKS LIST */}
              {activeSidebarTab === 'bookmarks' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold">Penanda Halaman Buku</span>
                    <span className="text-[10px] opacity-60">{currentBookBookmarks.length} Tersimpan</span>
                  </div>

                  {currentBookBookmarks.length > 0 ? (
                    currentBookBookmarks.map((bm, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold font-mono text-amber-700 dark:text-amber-400">
                            Halaman {bm.pageNumber || '—'}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeBookmark(book.id, bm.chapterIndex, bm.pageNumber)}
                            className="text-rose-500 hover:text-rose-700 text-[10px]"
                          >
                            Hapus
                          </button>
                        </div>
                        <p className="line-clamp-2 leading-relaxed opacity-90">{bm.title}</p>
                        <button
                          type="button"
                          onClick={() => {
                            if (bm.pageNumber) goToPage(bm.pageNumber - 1);
                          }}
                          className="mt-1 text-[11px] font-semibold text-amber-700 dark:text-amber-300 hover:underline flex items-center gap-1"
                        >
                          <span>Buka Halaman Ini</span>
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-xs opacity-50 space-y-1">
                      <BookmarkIcon className="w-6 h-6 mx-auto opacity-40" />
                      <p>Belum ada halaman yang ditandai.</p>
                      <p className="text-[10px]">Klik ikon 'Tandai Hal' di atas untuk menyimpan halaman penting.</p>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: NOTES */}
              {activeSidebarTab === 'notes' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold">Catatan Mahasiswa</span>
                    <button
                      type="button"
                      onClick={() => setShowNoteForm(!showNoteForm)}
                      className="text-xs text-amber-600 hover:text-amber-700 font-bold"
                    >
                      + Tambah di Hal. {currentPage.pageNumber}
                    </button>
                  </div>

                  {showNoteForm && (
                    <form onSubmit={handleSaveNote} className="p-3 bg-black/5 dark:bg-white/5 rounded-lg space-y-2">
                      <div className="text-[10px] font-bold text-amber-700 uppercase">
                        Catatan pada Halaman {currentPage.pageNumber}:
                      </div>
                      <textarea
                        rows={3}
                        placeholder="Tulis ringkasan atau poin penting dari halaman ini..."
                        value={newNoteText}
                        onChange={(e) => setNewNoteText(e.target.value)}
                        className="w-full text-xs p-2 rounded border border-black/15 dark:border-white/15 bg-white dark:bg-stone-900 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                        required
                      />
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setShowNoteForm(false)}
                          className="px-2 py-1 text-xs opacity-70"
                        >
                          Batal
                        </button>
                        <button
                          type="submit"
                          className="px-3 py-1 bg-amber-600 text-white rounded text-xs font-semibold"
                        >
                          Simpan
                        </button>
                      </div>
                    </form>
                  )}

                  {currentBookNotes.length > 0 ? (
                    currentBookNotes.map((note) => (
                      <div
                        key={note.id}
                        className="p-2.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs space-y-1 relative group"
                      >
                        <div className="flex items-center justify-between text-[10px] font-bold text-amber-700 dark:text-amber-400">
                          <span>Halaman {note.pageNumber || '—'}</span>
                          <button
                            type="button"
                            onClick={() => deleteReaderNote(note.id)}
                            className="text-rose-500 hover:text-rose-700 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            Hapus
                          </button>
                        </div>
                        <p className="leading-relaxed">{note.noteText}</p>
                        <div className="flex items-center justify-between text-[10px] opacity-60 pt-1">
                          <span>{new Date(note.createdAt).toLocaleDateString('id-ID')}</span>
                          {note.pageNumber && (
                            <button
                              type="button"
                              onClick={() => goToPage(note.pageNumber! - 1)}
                              className="hover:underline text-amber-700 dark:text-amber-300"
                            >
                              Lompat ke Hal. {note.pageNumber}
                            </button>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-xs opacity-50">
                      Belum ada catatan pada buku ini.
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: CITATIONS */}
              {activeSidebarTab === 'cite' && (
                <div className="space-y-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider opacity-60 block">
                    Format Sitasi Akademis
                  </span>

                  {(['apa', 'ieee', 'harvard'] as const).map((fmt) => (
                    <div
                      key={fmt}
                      className="p-3 bg-black/5 dark:bg-white/5 rounded-lg space-y-1.5 border border-black/10 dark:border-white/10"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold font-mono uppercase text-amber-600">
                          {fmt.toUpperCase()} 7th
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopyCitation(fmt)}
                          className="flex items-center gap-1 text-[11px] text-amber-700 dark:text-amber-400 font-semibold hover:underline"
                        >
                          {copiedCitation === fmt ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-500" />
                              <span>Tersalin!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Salin</span>
                            </>
                          )}
                        </button>
                      </div>
                      <p className="text-xs font-serif-scholarly opacity-90 leading-relaxed bg-white/50 dark:bg-black/30 p-2 rounded">
                        {book.citation[fmt]}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </aside>
        )}

        {/* Central Reading Document Page */}
        <main
          ref={mainScrollRef}
          className="flex-1 overflow-y-auto px-4 py-8 sm:px-12 md:px-20 lg:px-28 max-w-4xl mx-auto flex flex-col justify-between"
        >
          <div className="space-y-6">
            {/* Academic Page Header Watermark */}
            <div className="border-b border-black/10 dark:border-white/10 pb-4 flex items-center justify-between text-xs opacity-70">
              <span className="font-mono tracking-widest uppercase">
                IBM ASMI DIGITAL LIBRARY · DDC {book.ddc}
              </span>
              <span className="font-mono font-bold">
                HALAMAN {currentPage.pageNumber} DARI {totalPages}
              </span>
            </div>

            {/* Chapter & Section Header Title */}
            <div className="space-y-1 pt-1">
              <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-400 uppercase tracking-widest block">
                {currentPage.chapterTitle}
              </span>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif-scholarly tracking-tight leading-tight">
                {currentPage.sectionTitle}
              </h1>
              <div className="text-xs opacity-60 pt-0.5">
                Karya: {book.author} · Penerbit: {book.publisher} ({book.year})
              </div>
            </div>

            {/* Reading Content Paragraphs */}
            <article className={`space-y-4 pt-2 ${fontClasses[fontFamily]} ${fontSizeClasses[fontSize]}`}>
              {currentPage.paragraphs && currentPage.paragraphs.length > 0 ? (
                currentPage.paragraphs.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-justify indent-6 sm:indent-8 leading-relaxed whitespace-pre-line"
                  >
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="italic opacity-70">Teks halaman sedang dimuat...</p>
              )}

              {/* Callout Box if present */}
              {currentPage.callout && (
                <div className="my-6 p-4 rounded-xl bg-black/5 dark:bg-white/5 border-l-4 border-amber-600 text-xs space-y-1.5 opacity-95">
                  <span className="font-bold flex items-center gap-1.5 text-amber-700 dark:text-amber-400 uppercase tracking-wider text-[11px]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{currentPage.callout.title}</span>
                  </span>
                  <p className="leading-relaxed whitespace-pre-line not-italic font-sans">
                    {currentPage.callout.content}
                  </p>
                </div>
              )}
            </article>

            {/* Page Bottom Academic License Watermark */}
            <div className="pt-8 border-t border-black/10 dark:border-white/10 text-[11px] opacity-60 flex flex-wrap items-center justify-between gap-2 font-mono">
              <span>ISBN: {book.isbn} · Institut Bisnis Dan Multimedia asmi</span>
              <span>Halaman {currentPage.pageNumber} / {totalPages}</span>
            </div>
          </div>

          {/* Page Navigation & Interactive Slider Controls */}
          <div className="mt-12 pt-6 border-t border-black/10 dark:border-white/10 space-y-4">
            {/* Interactive Page Slider */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="opacity-70">Lompat Halaman Cepat:</span>
                <span className="font-bold text-amber-700 dark:text-amber-400">
                  Halaman {currentPage.pageNumber} dari {totalPages} ({progressPercent}%)
                </span>
              </div>
              <input
                type="range"
                min="1"
                max={totalPages}
                value={currentPage.pageNumber}
                onChange={(e) => goToPage(parseInt(e.target.value, 10) - 1)}
                className="w-full accent-amber-600 cursor-pointer h-2 bg-black/10 dark:bg-white/10 rounded-lg"
              />
            </div>

            {/* Prev / Next Page Buttons */}
            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => goToPage(currentPageIndex - 1)}
                disabled={currentPageIndex === 0}
                className="px-4 py-2.5 rounded-xl border border-black/15 dark:border-white/15 text-xs font-bold flex items-center gap-2 transition-colors disabled:opacity-30 hover:bg-black/5 dark:hover:bg-white/10 shadow-2xs"
                title="Halaman Sebelumnya (Shortcut: Panah Kiri)"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Halaman Sebelumnya</span>
              </button>

              <div className="text-center font-mono text-xs opacity-75 hidden sm:block">
                Gunakan tombol keyboard <strong>←</strong> dan <strong>→</strong> untuk membalik halaman
              </div>

              <button
                type="button"
                onClick={() => goToPage(currentPageIndex + 1)}
                disabled={currentPageIndex === totalPages - 1}
                className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold flex items-center gap-2 transition-colors disabled:opacity-30 shadow-xs"
                title="Halaman Selanjutnya (Shortcut: Panah Kanan)"
              >
                <span>Halaman Selanjutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
