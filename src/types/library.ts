export interface Chapter {
  chapterNumber: number;
  chapterTitle: string;
  pages: number;
  content: string[]; // array of paragraphs
}

export interface BookPage {
  pageNumber: number;
  chapterNumber: number;
  chapterTitle: string;
  sectionTitle: string;
  paragraphs: string[];
  callout?: {
    type: 'definition' | 'case_study' | 'formula' | 'discussion' | 'summary' | 'exercise';
    title: string;
    content: string;
  };
}

export interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  year: number;
  isbn: string;
  ddc: string; // Dewey Decimal Classification, e.g. "005.133"
  category: string;
  synopsis: string;
  coverUrl: string;
  totalPages: number;
  borrowable: boolean; // Status aktif / non-aktif peminjaman per buku
  statusNote?: string;
  totalCopies: number;
  availableCopies: number;
  language: string;
  chapters: Chapter[];
  pages?: BookPage[];
  citation: {
    apa: string;
    ieee: string;
    harvard: string;
  };
  createdAt: string;
}

export interface Loan {
  id: string;
  bookId: string;
  bookTitle: string;
  bookAuthor: string;
  bookCover: string;
  bookDdc: string;
  userId: string;
  userName: string;
  userNim: string;
  borrowDate: string; // ISO String
  dueDate: string;    // ISO String
  durationDays: number;
  status: 'active' | 'returned' | 'revoked' | 'overdue';
  returnedDate?: string;
  renewCount: number;
}

export interface CirculationSettings {
  systemBorrowingActive: boolean; // Global toggle: Layanan peminjaman aktif / non-aktif
  systemClosedNotice: string;
  defaultDurationDays: number;
  allowedDurations: number[];     // e.g. [1, 3, 7, 14, 21]
  allowCustomDays: boolean;
  maxCustomDays: number;
  maxLoansPerStudent: number;
  autoReturnOnExpire: boolean;
  finePerDayRupiah: number;
}

export interface UserProfile {
  id: string;
  role: 'student' | 'admin';
  name: string;
  identifier: string; // NIM for student, NIP for admin
  department: string; // Jurusan / Fakultas / Unit
  email: string;
  avatarUrl?: string;
  memberSince: string;
}

export interface ReaderNote {
  id: string;
  bookId: string;
  chapterIndex: number;
  pageNumber?: number;
  selectedText?: string;
  noteText: string;
  createdAt: string;
}

export interface Bookmark {
  bookId: string;
  chapterIndex: number;
  pageNumber?: number;
  timestamp: string;
  title: string;
}
