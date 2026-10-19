import { Book, BookPage } from '../types/library';
import { getAlgorithmBookPages } from '../data/bookProfiles/algorithmBook';
import { getAIBookPages } from '../data/bookProfiles/aiBook';
import { getResearchBookPages } from '../data/bookProfiles/researchBook';
import { getLibraryScienceBookPages } from '../data/bookProfiles/libraryScienceBook';
import { getCyberLawBookPages } from '../data/bookProfiles/cyberLawBook';
import { getMacroeconomicsBookPages } from '../data/bookProfiles/macroeconomicsBook';
import { getMedicineBookPages } from '../data/bookProfiles/medicineBook';
import { getMobileProgrammingBookPages } from '../data/bookProfiles/mobileProgrammingBook';
import { generateDomainAwarePages } from '../data/bookProfiles/domainFallbackGenerator';

/**
 * Returns complete, high-fidelity 55-page academic e-book content
 * specifically written and tailored for every book in the Digital Library.
 * 
 * Each book's content strictly matches its actual title, field of study,
 * syllabus, terminology, formulas, citations, and index keywords without any topic drift.
 */
export function getBookPages(book: Book): BookPage[] {
  // If the book already has explicit 50+ pages populated, return them
  if (book.pages && book.pages.length >= 50) {
    return book.pages;
  }

  const id = book.id;
  const t = (book.title || '').toLowerCase();

  // 1. Buku Algoritma & Struktur Data Tingkat Lanjut
  if (id === 'book-001' || (t.includes('algoritma') && t.includes('struktur data'))) {
    return getAlgorithmBookPages(book);
  }

  // 2. Buku Kecerdasan Buatan & Pembelajaran Mesin Teoretis
  if (id === 'book-002' || (t.includes('kecerdasan buatan') || t.includes('pembelajaran mesin') || t.includes('artificial intelligence'))) {
    return getAIBookPages(book);
  }

  // 3. Buku Metodologi Penelitian Kuantitatif & Sains Data Terapan
  if (id === 'book-003' || (t.includes('metodologi penelitian') || (t.includes('penelitian') && t.includes('kuantitatif')))) {
    return getResearchBookPages(book);
  }

  // 4. Buku Tata Kelola Perpustakaan Digital & Organisasi Informasi Modern
  if (id === 'book-004' || (t.includes('perpustakaan digital') || t.includes('organisasi informasi') || t.includes('ilmu perpustakaan'))) {
    return getLibraryScienceBookPages(book);
  }

  // 5. Buku Hukum Siber & Perlindungan Privasi Data Digital Kontemporer
  if (id === 'book-005' || (t.includes('hukum siber') || t.includes('perlindungan privasi') || t.includes('cyber law') || t.includes('data pribadi'))) {
    return getCyberLawBookPages(book);
  }

  // 6. Buku Ekonomi Makro Kontemporer & Kebijakan Fiskal Moneter
  if (id === 'book-006' || (t.includes('ekonomi makro') || (t.includes('fiskal') && t.includes('moneter')) || t.includes('makroekonomi'))) {
    return getMacroeconomicsBookPages(book);
  }

  // 7. Buku Fisiologi Kedokteran Klinis & Farmakoterapi Terarah
  if (id === 'book-007' || (t.includes('fisiologi kedokteran') || t.includes('farmakoterapi') || t.includes('fisiologi klinis'))) {
    return getMedicineBookPages(book);
  }

  // 8. Buku Jurusan Sistem Informasi: Mobile Programming & RESTful API
  if (
    id === 'book-008' ||
    (t.includes('mobile') && (t.includes('sistem informasi') || t.includes('programming') || t.includes('pemrograman') || t.includes('aplikasi') || t.includes('restful')))
  ) {
    return getMobileProgrammingBookPages(book);
  }

  // Fallback adaptif untuk buku lain yang ditambahkan/diimpor oleh admin
  return generateDomainAwarePages(book);
}
