import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Book,
  Loan,
  CirculationSettings,
  UserProfile,
  Bookmark,
  ReaderNote,
} from '../types/library';
import {
  INITIAL_BOOKS,
  INITIAL_CIRCULATION_SETTINGS,
  INITIAL_LOANS,
  SAMPLE_USERS,
  DEMO_STUDENT_PRESETS,
} from '../data/initialData';

interface LibraryContextType {
  books: Book[];
  loans: Loan[];
  circulationSettings: CirculationSettings;
  currentUser: UserProfile;
  activeRole: 'student' | 'admin';
  bookmarks: Bookmark[];
  readerNotes: ReaderNote[];
  readingBook: Book | null;
  selectedBookForBorrow: Book | null;
  selectedBookForDetail: Book | null;
  isAdminLoggedIn: boolean;
  isStudentLoggedIn: boolean;
  savedStudents: UserProfile[];
  // Actions
  switchRole: (role: 'student' | 'admin') => void;
  loginAdmin: (password: string) => boolean;
  logoutAdmin: () => void;
  resetAdminPassword: (verificationIdentifier: string, newPassword: string) => { success: boolean; message: string };
  updateStudentProfile: (profile: Partial<UserProfile>) => void;
  loginStudent: (name: string, nim: string, department?: string) => void;
  logoutStudent: () => void;
  switchStudentAccount: (student: UserProfile) => void;
  deleteSavedStudent: (studentId: string) => void;
  openReader: (book: Book) => void;
  closeReader: () => void;
  openBorrowModal: (book: Book) => void;
  closeBorrowModal: () => void;
  openDetailModal: (book: Book) => void;
  closeDetailModal: () => void;
  borrowBook: (bookId: string, durationDays: number) => { success: boolean; message: string };
  returnBook: (loanId: string) => { success: boolean; message: string };
  renewLoan: (loanId: string) => { success: boolean; message: string };
  revokeLoan: (loanId: string) => { success: boolean; message: string };
  toggleBookBorrowable: (bookId: string, note?: string) => void;
  addBook: (book: Book) => void;
  updateBook: (book: Book) => void;
  deleteBook: (bookId: string) => void;
  importBooks: (newBooks: Book[]) => number;
  updateCirculationSettings: (settings: CirculationSettings) => void;
  addBookmark: (bookId: string, chapterIndex: number, title: string, pageNumber?: number) => void;
  removeBookmark: (bookId: string, chapterIndex: number, pageNumber?: number) => void;
  addReaderNote: (bookId: string, chapterIndex: number, noteText: string, selectedText?: string, pageNumber?: number) => void;
  deleteReaderNote: (noteId: string) => void;
  resetToSampleData: () => void;
}

const LibraryContext = createContext<LibraryContextType | undefined>(undefined);

const STORAGE_KEYS = {
  BOOKS: 'pustaka_akademia_books_v1',
  LOANS: 'pustaka_akademia_loans_v1',
  SETTINGS: 'pustaka_akademia_settings_v1',
  ROLE: 'pustaka_akademia_role_v1',
  STUDENT_PROFILE: 'pustaka_akademia_student_profile_v1',
  STUDENT_LOGGED_IN: 'pustaka_akademia_student_logged_in_v2',
  SAVED_STUDENTS: 'pustaka_akademia_saved_students_v2',
  BOOKMARKS: 'pustaka_akademia_bookmarks_v1',
  NOTES: 'pustaka_akademia_notes_v1',
};

export const LibraryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BOOKS);
      if (!saved) return INITIAL_BOOKS;
      const parsed: Book[] = JSON.parse(saved);
      const updated = INITIAL_BOOKS.map((initBook) => {
        const found = parsed.find((b) => b.id === initBook.id);
        if (!found) return initBook;
        return {
          ...initBook,
          borrowable: found.borrowable !== undefined ? found.borrowable : initBook.borrowable,
          statusNote: found.statusNote !== undefined ? found.statusNote : initBook.statusNote,
          availableCopies: found.availableCopies !== undefined ? found.availableCopies : initBook.availableCopies,
          totalCopies: found.totalCopies !== undefined ? found.totalCopies : initBook.totalCopies,
        };
      });
      parsed.forEach((b) => {
        if (!updated.some((u) => u.id === b.id)) {
          updated.push(b);
        }
      });
      return updated;
    } catch {
      return INITIAL_BOOKS;
    }
  });

  const [loans, setLoans] = useState<Loan[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LOANS);
      return saved ? JSON.parse(saved) : INITIAL_LOANS;
    } catch {
      return INITIAL_LOANS;
    }
  });

  const [circulationSettings, setCirculationSettings] = useState<CirculationSettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return saved ? JSON.parse(saved) : INITIAL_CIRCULATION_SETTINGS;
    } catch {
      return INITIAL_CIRCULATION_SETTINGS;
    }
  });

  const [activeRole, setActiveRole] = useState<'student' | 'admin'>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ROLE);
      return saved === 'admin' ? 'admin' : 'student';
    } catch {
      return 'student';
    }
  });

  const [bookmarks, setBookmarks] = useState<Bookmark[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [readerNotes, setReaderNotes] = useState<ReaderNote[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.NOTES);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [readingBook, setReadingBook] = useState<Book | null>(null);
  const [selectedBookForBorrow, setSelectedBookForBorrow] = useState<Book | null>(null);
  const [selectedBookForDetail, setSelectedBookForDetail] = useState<Book | null>(null);

  // Sync state to local storage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.BOOKS, JSON.stringify(books));
  }, [books]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.LOANS, JSON.stringify(loans));
  }, [loans]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(circulationSettings));
  }, [circulationSettings]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ROLE, activeRole);
  }, [activeRole]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
  }, [bookmarks]);

  const [isStudentLoggedIn, setIsStudentLoggedIn] = useState<boolean>(() => {
    try {
      // If user visits with ?login=true or ?mode=login or ?logout=true or in fresh session, force portal
      if (typeof window !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('login') === 'true' || urlParams.get('logout') === 'true' || urlParams.get('auth') === 'portal' || window.location.hash === '#login') {
          localStorage.removeItem(STORAGE_KEYS.STUDENT_LOGGED_IN);
          return false;
        }
      }
      const saved = localStorage.getItem(STORAGE_KEYS.STUDENT_LOGGED_IN);
      return saved === 'true';
    } catch {
      return false;
    }
  });

  const [savedStudents, setSavedStudents] = useState<UserProfile[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SAVED_STUDENTS);
      return saved ? JSON.parse(saved) : DEMO_STUDENT_PRESETS;
    } catch {
      return DEMO_STUDENT_PRESETS;
    }
  });

  const [studentProfile, setStudentProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.STUDENT_PROFILE);
      return saved ? JSON.parse(saved) : SAMPLE_USERS.student;
    } catch {
      return SAMPLE_USERS.student;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.STUDENT_PROFILE, JSON.stringify(studentProfile));
  }, [studentProfile]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SAVED_STUDENTS, JSON.stringify(savedStudents));
  }, [savedStudents]);

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    try {
      return localStorage.getItem('ibmasmi_admin_auth_v1') === 'true';
    } catch {
      return false;
    }
  });

  const currentUser = activeRole === 'admin' ? SAMPLE_USERS.admin : studentProfile;

  const loginStudent = (name: string, nim: string, department?: string) => {
    const cleanName = name.trim();
    const cleanNim = nim.trim().replace(/^NIM\.?\s*/i, '');
    const cleanDept = department?.trim() || 'S1 Sistem Informasi';
    const cleanId = cleanNim ? `usr-mhs-${cleanNim.replace(/[^a-zA-Z0-9]/g, '')}` : `usr-mhs-${Date.now()}`;
    const newProfile: UserProfile = {
      id: cleanId,
      role: 'student',
      name: cleanName,
      identifier: cleanNim ? `NIM. ${cleanNim}` : 'NIM. Mahasiswa',
      department: cleanDept,
      email: `${cleanName.toLowerCase().replace(/[^a-z0-9]/g, '') || cleanNim || 'mahasiswa'}@ibmasmi.ac.id`,
      memberSince: studentProfile.memberSince || '2024',
    };
    setStudentProfile(newProfile);
    setIsStudentLoggedIn(true);
    setActiveRole('student');
    try {
      localStorage.setItem(STORAGE_KEYS.STUDENT_PROFILE, JSON.stringify(newProfile));
      localStorage.setItem(STORAGE_KEYS.STUDENT_LOGGED_IN, 'true');
    } catch (e) {
      console.error(e);
    }
    setSavedStudents((prev) => {
      const filtered = prev.filter((s) => s.identifier !== newProfile.identifier && s.id !== newProfile.id);
      const updated = [newProfile, ...filtered].slice(0, 6);
      try {
        localStorage.setItem(STORAGE_KEYS.SAVED_STUDENTS, JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const logoutStudent = () => {
    setIsStudentLoggedIn(false);
    setIsAdminLoggedIn(false);
    setActiveRole('student');
    try {
      localStorage.removeItem(STORAGE_KEYS.STUDENT_LOGGED_IN);
      localStorage.removeItem('ibmasmi_admin_auth_v1');
    } catch (e) {
      console.error(e);
    }
  };

  const switchStudentAccount = (student: UserProfile) => {
    setStudentProfile(student);
    setIsStudentLoggedIn(true);
    setActiveRole('student');
    try {
      localStorage.setItem(STORAGE_KEYS.STUDENT_PROFILE, JSON.stringify(student));
      localStorage.setItem(STORAGE_KEYS.STUDENT_LOGGED_IN, 'true');
    } catch (e) {
      console.error(e);
    }
  };

  const deleteSavedStudent = (studentId: string) => {
    setSavedStudents((prev) => {
      const updated = prev.filter((s) => s.id !== studentId);
      try {
        localStorage.setItem(STORAGE_KEYS.SAVED_STUDENTS, JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const updateStudentProfile = (profile: Partial<UserProfile>) => {
    setStudentProfile((prev) => ({ ...prev, ...profile }));
  };

  const [adminPassword, setAdminPassword] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('ibmasmi_admin_password_v2');
      return saved ? saved : 'gilang 123';
    } catch {
      return 'gilang 123';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('ibmasmi_admin_password_v2', adminPassword);
    } catch (e) {
      console.error(e);
    }
  }, [adminPassword]);

  const loginAdmin = (passwordInput: string): boolean => {
    const trimmedInput = passwordInput.trim();
    const currentPass = adminPassword.trim();

    // Match exact, case-insensitive, or without whitespace (e.g. "gilang 123" vs "gilang123")
    const isDirectMatch = trimmedInput === currentPass;
    const isCaseMatch = trimmedInput.toLowerCase() === currentPass.toLowerCase();
    const isCondensedMatch =
      trimmedInput.replace(/\s+/g, '').toLowerCase() === currentPass.replace(/\s+/g, '').toLowerCase();

    // Also accept default variants "gilang 123" or "gilang123"
    const isDefaultMatch =
      trimmedInput.toLowerCase() === 'gilang 123' ||
      trimmedInput.toLowerCase() === 'gilang123';

    if (isDirectMatch || isCaseMatch || isCondensedMatch || isDefaultMatch) {
      setIsAdminLoggedIn(true);
      localStorage.setItem('ibmasmi_admin_auth_v1', 'true');
      setActiveRole('admin');
      return true;
    }
    return false;
  };

  const resetAdminPassword = (
    verificationIdentifier: string,
    newPassword: string
  ): { success: boolean; message: string } => {
    const cleanId = verificationIdentifier.trim().toLowerCase();

    // Authorized administrator identifiers for password recovery:
    // 1. Email: perpustakaanibmasmi@gmail.com
    // 2. Personal Email: gilangraka300@gmail.com
    // 3. Admin name: Gilang Raka Ramadhan / gilang
    const validIdentifiers = [
      'perpustakaanibmasmi@gmail.com',
      'gilangraka300@gmail.com',
      'gilang raka ramadhan',
      'gilang',
      'gilangraka300',
    ];

    const isAuthorized = validIdentifiers.some(
      (valid) => cleanId.includes(valid) || valid.includes(cleanId)
    );

    if (!isAuthorized) {
      return {
        success: false,
        message: 'Verifikasi identitas gagal! Masukkan email resmi administrator (perpustakaanibmasmi@gmail.com atau gilangraka300@gmail.com).',
      };
    }

    if (!newPassword || newPassword.trim().length < 4) {
      return {
        success: false,
        message: 'Kata sandi baru minimal 4 karakter.',
      };
    }

    const cleanNewPass = newPassword.trim();
    setAdminPassword(cleanNewPass);
    try {
      localStorage.setItem('ibmasmi_admin_password_v2', cleanNewPass);
    } catch (e) {
      console.error(e);
    }

    return {
      success: true,
      message: 'Password admin berhasil direset! Silakan login menggunakan password baru Anda.',
    };
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem('ibmasmi_admin_auth_v1');
    setActiveRole('student');
  };

  const switchRole = (role: 'student' | 'admin') => {
    if (role === 'admin' && !isAdminLoggedIn) {
      // Must authenticate first
      return;
    }
    setActiveRole(role);
  };

  const openReader = (book: Book) => {
    setReadingBook(book);
  };

  const closeReader = () => {
    setReadingBook(null);
  };

  const openBorrowModal = (book: Book) => {
    setSelectedBookForBorrow(book);
  };

  const closeBorrowModal = () => {
    setSelectedBookForBorrow(null);
  };

  const openDetailModal = (book: Book) => {
    setSelectedBookForDetail(book);
  };

  const closeDetailModal = () => {
    setSelectedBookForDetail(null);
  };

  const borrowBook = (bookId: string, durationDays: number): { success: boolean; message: string } => {
    if (!circulationSettings.systemBorrowingActive) {
      return {
        success: false,
        message: 'Layanan sirkulasi peminjaman e-book sedang dinonaktifkan oleh administrator.',
      };
    }

    const targetBook = books.find((b) => b.id === bookId);
    if (!targetBook) {
      return { success: false, message: 'Buku tidak ditemukan dalam katalog.' };
    }

    if (!targetBook.borrowable) {
      return {
        success: false,
        message: `Buku "${targetBook.title}" saat ini berstatus non-aktif untuk peminjaman (hanya dapat dibaca daring).`,
      };
    }

    if (targetBook.availableCopies <= 0) {
      return {
        success: false,
        message: 'Kouta lisensi salinan e-book sedang penuh. Harap tunggu peminjam lain mengembalikan.',
      };
    }

    // Check student's active loans count
    const studentActiveLoans = loans.filter(
      (l) => l.userId === currentUser.id && l.status === 'active'
    );

    if (studentActiveLoans.length >= circulationSettings.maxLoansPerStudent) {
      return {
        success: false,
        message: `Anda telah mencapai batas maksimal peminjaman (${circulationSettings.maxLoansPerStudent} e-book). Harap kembalikan salah satu buku terlebih dahulu.`,
      };
    }

    // Check if user already borrowed this specific book
    const alreadyBorrowing = studentActiveLoans.some((l) => l.bookId === bookId);
    if (alreadyBorrowing) {
      return {
        success: false,
        message: 'Anda sudah sedang meminjam buku ini. Buka tab Rak Buku Saya untuk membacanya.',
      };
    }

    const now = new Date();
    const dueDate = new Date(now.getTime() + durationDays * 24 * 60 * 60 * 1000);

    const newLoan: Loan = {
      id: `loan-${Date.now()}-${Math.random().toString(36).substring(2, 5)}`,
      bookId: targetBook.id,
      bookTitle: targetBook.title,
      bookAuthor: targetBook.author,
      bookCover: targetBook.coverUrl,
      bookDdc: targetBook.ddc,
      userId: currentUser.id,
      userName: currentUser.name,
      userNim: currentUser.identifier,
      borrowDate: now.toISOString(),
      dueDate: dueDate.toISOString(),
      durationDays,
      status: 'active',
      renewCount: 0,
    };

    setLoans((prev) => [newLoan, ...prev]);

    // Decrease available copies
    setBooks((prev) =>
      prev.map((b) =>
        b.id === bookId ? { ...b, availableCopies: Math.max(0, b.availableCopies - 1) } : b
      )
    );

    return {
      success: true,
      message: `Berhasil meminjam "${targetBook.title}" selama ${durationDays} hari. Selamat membaca!`,
    };
  };

  const returnBook = (loanId: string): { success: boolean; message: string } => {
    const loan = loans.find((l) => l.id === loanId);
    if (!loan) return { success: false, message: 'Data peminjaman tidak ditemukan.' };

    const now = new Date().toISOString();
    setLoans((prev) =>
      prev.map((l) => (l.id === loanId ? { ...l, status: 'returned', returnedDate: now } : l))
    );

    // Increase available copies back
    setBooks((prev) =>
      prev.map((b) =>
        b.id === loan.bookId ? { ...b, availableCopies: Math.min(b.totalCopies, b.availableCopies + 1) } : b
      )
    );

    return { success: true, message: `Buku "${loan.bookTitle}" telah berhasil dikembalikan.` };
  };

  const renewLoan = (loanId: string): { success: boolean; message: string } => {
    const loan = loans.find((l) => l.id === loanId);
    if (!loan) return { success: false, message: 'Data peminjaman tidak ditemukan.' };
    if (loan.status !== 'active') return { success: false, message: 'Hanya pinjaman aktif yang dapat diperpanjang.' };
    if (loan.renewCount >= 2) return { success: false, message: 'Batas maksimal perpanjangan (2x) telah tercapai.' };

    const extensionDays = 7;
    const currentDue = new Date(loan.dueDate);
    const newDue = new Date(currentDue.getTime() + extensionDays * 24 * 60 * 60 * 1000);

    setLoans((prev) =>
      prev.map((l) =>
        l.id === loanId
          ? {
              ...l,
              dueDate: newDue.toISOString(),
              durationDays: l.durationDays + extensionDays,
              renewCount: l.renewCount + 1,
            }
          : l
      )
    );

    return {
      success: true,
      message: `Peminjaman diperpanjang ${extensionDays} hari hingga ${newDue.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })}.`,
    };
  };

  const revokeLoan = (loanId: string): { success: boolean; message: string } => {
    const loan = loans.find((l) => l.id === loanId);
    if (!loan) return { success: false, message: 'Data peminjaman tidak ditemukan.' };

    setLoans((prev) =>
      prev.map((l) =>
        l.id === loanId
          ? { ...l, status: 'revoked', returnedDate: new Date().toISOString() }
          : l
      )
    );

    setBooks((prev) =>
      prev.map((b) =>
        b.id === loan.bookId ? { ...b, availableCopies: Math.min(b.totalCopies, b.availableCopies + 1) } : b
      )
    );

    return { success: true, message: `Hak akses peminjaman buku untuk "${loan.userName}" telah dinonaktifkan.` };
  };

  const toggleBookBorrowable = (bookId: string, note?: string) => {
    setBooks((prev) =>
      prev.map((b) =>
        b.id === bookId
          ? {
              ...b,
              borrowable: !b.borrowable,
              statusNote: note !== undefined ? note : b.statusNote,
            }
          : b
      )
    );
  };

  const addBook = (book: Book) => {
    setBooks((prev) => [book, ...prev]);
  };

  const updateBook = (book: Book) => {
    setBooks((prev) => prev.map((b) => (b.id === book.id ? book : b)));
  };

  const deleteBook = (bookId: string) => {
    setBooks((prev) => prev.filter((b) => b.id !== bookId));
  };

  const importBooks = (newBooks: Book[]): number => {
    setBooks((prev) => [...newBooks, ...prev]);
    return newBooks.length;
  };

  const updateCirculationSettings = (settings: CirculationSettings) => {
    setCirculationSettings(settings);
  };

  const addBookmark = (bookId: string, chapterIndex: number, title: string, pageNumber?: number) => {
    setBookmarks((prev) => {
      const exists = prev.some(
        (bm) => bm.bookId === bookId && (pageNumber !== undefined ? bm.pageNumber === pageNumber : bm.chapterIndex === chapterIndex)
      );
      if (exists) return prev;
      return [...prev, { bookId, chapterIndex, pageNumber, timestamp: new Date().toISOString(), title }];
    });
  };

  const removeBookmark = (bookId: string, chapterIndex: number, pageNumber?: number) => {
    setBookmarks((prev) =>
      prev.filter(
        (bm) => !(bm.bookId === bookId && (pageNumber !== undefined ? bm.pageNumber === pageNumber : bm.chapterIndex === chapterIndex))
      )
    );
  };

  const addReaderNote = (
    bookId: string,
    chapterIndex: number,
    noteText: string,
    selectedText?: string,
    pageNumber?: number
  ) => {
    const newNote: ReaderNote = {
      id: `note-${Date.now()}-${Math.random().toString(36).substring(2, 5)}`,
      bookId,
      chapterIndex,
      pageNumber,
      noteText,
      selectedText,
      createdAt: new Date().toISOString(),
    };
    setReaderNotes((prev) => [newNote, ...prev]);
  };

  const deleteReaderNote = (noteId: string) => {
    setReaderNotes((prev) => prev.filter((n) => n.id !== noteId));
  };

  const resetToSampleData = () => {
    setBooks(INITIAL_BOOKS);
    setLoans(INITIAL_LOANS);
    setCirculationSettings(INITIAL_CIRCULATION_SETTINGS);
    setBookmarks([]);
    setReaderNotes([]);
  };

  return (
    <LibraryContext.Provider
      value={{
        books,
        loans,
        circulationSettings,
        currentUser,
        activeRole,
        bookmarks,
        readerNotes,
        readingBook,
        selectedBookForBorrow,
        selectedBookForDetail,
        isAdminLoggedIn,
        isStudentLoggedIn,
        savedStudents,
        switchRole,
        loginAdmin,
        logoutAdmin,
        resetAdminPassword,
        updateStudentProfile,
        loginStudent,
        logoutStudent,
        switchStudentAccount,
        deleteSavedStudent,
        openReader,
        closeReader,
        openBorrowModal,
        closeBorrowModal,
        openDetailModal,
        closeDetailModal,
        borrowBook,
        returnBook,
        renewLoan,
        revokeLoan,
        toggleBookBorrowable,
        addBook,
        updateBook,
        deleteBook,
        importBooks,
        updateCirculationSettings,
        addBookmark,
        removeBookmark,
        addReaderNote,
        deleteReaderNote,
        resetToSampleData,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
};

export const useLibrary = (): LibraryContextType => {
  const context = useContext(LibraryContext);
  if (!context) {
    throw new Error('useLibrary must be used within a LibraryProvider');
  }
  return context;
};
