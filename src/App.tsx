import React, { useState } from 'react';
import { LibraryProvider, useLibrary } from './context/LibraryContext';
import { Header } from './components/Header';
import { LibrarianS3Banner } from './components/LibrarianS3Banner';
import { BookCatalog } from './components/BookCatalog';
import { StudentBookshelfView } from './components/StudentBookshelfView';
import { StudentIdCardView } from './components/StudentIdCardView';
import { AdminDashboard } from './components/AdminDashboard';
import { BorrowModal } from './components/BorrowModal';
import { EBookReader } from './components/EBookReader';
import { BookDetailModal } from './components/BookDetailModal';
import { ExcelImportModal } from './components/ExcelImportModal';
import { AddEditBookModal } from './components/AddEditBookModal';
import { QRCodeModal } from './components/QRCodeModal';
import { LoginPortal } from './components/LoginPortal';
import { Book } from './types/library';

const MainApp: React.FC = () => {
  const { activeRole, isStudentLoggedIn, isAdminLoggedIn } = useLibrary();

  // Tab navigation state
  const [currentTab, setCurrentTab] = useState<string>('catalog');

  // Modal states
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [isAddEditModalOpen, setIsAddEditModalOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [editingBook, setEditingBook] = useState<Book | null>(null);

  const handleOpenAddModal = () => {
    setEditingBook(null);
    setIsAddEditModalOpen(true);
  };

  const handleEditBook = (book: Book) => {
    setEditingBook(book);
    setIsAddEditModalOpen(true);
  };

  // If active role is Admin, require admin authentication
  if (activeRole === 'admin') {
    if (!isAdminLoggedIn) {
      return (
        <div className="min-h-screen bg-stone-950">
          <LoginPortal initialTab="admin" />
        </div>
      );
    }
  }

  // If active role is Student, require student authentication
  if (activeRole === 'student' && !isStudentLoggedIn) {
    return (
      <div className="min-h-screen bg-stone-950">
        <LoginPortal initialTab="student" />
      </div>
    );
  }

  if (activeRole === 'admin' && isAdminLoggedIn) {
    return (
      <div className="min-h-screen bg-[#f1f3f7] flex flex-col">
        <AdminDashboard
          onOpenAddModal={handleOpenAddModal}
          onOpenImportModal={() => setIsImportModalOpen(true)}
          onEditBook={handleEditBook}
          onOpenQrModal={() => setIsQrModalOpen(true)}
        />
        {/* Modals available to Admin */}
        <AddEditBookModal
          isOpen={isAddEditModalOpen}
          onClose={() => {
            setIsAddEditModalOpen(false);
            setEditingBook(null);
          }}
          editBookData={editingBook}
        />
        <ExcelImportModal
          isOpen={isImportModalOpen}
          onClose={() => setIsImportModalOpen(false)}
        />
        <QRCodeModal
          isOpen={isQrModalOpen}
          onClose={() => setIsQrModalOpen(false)}
        />
        <EBookReader />
        <BookDetailModal />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-100/60 text-stone-900 flex flex-col">
      {/* Top Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onOpenImportModal={() => setIsImportModalOpen(true)}
        onOpenQrModal={() => setIsQrModalOpen(true)}
      />

      {/* S3 Chief Librarian Academic Banner */}
      <LibrarianS3Banner />

      {/* Main Content Body */}
      <main className="flex-1 pb-24 md:pb-16">
        {currentTab === 'catalog' && (
          <BookCatalog
            onOpenAddModal={handleOpenAddModal}
            onOpenImportModal={() => setIsImportModalOpen(true)}
            onEditBook={handleEditBook}
          />
        )}
        {(currentTab === 'my-loans' || currentTab === 'dashboard') && (
          <StudentBookshelfView
            onExploreCatalog={() => setCurrentTab('catalog')}
            onOpenCard={() => setCurrentTab('card')}
          />
        )}
        {currentTab === 'card' && (
          <StudentIdCardView
            onExploreCatalog={() => setCurrentTab('catalog')}
            onOpenBookshelf={() => setCurrentTab('my-loans')}
          />
        )}
      </main>

      {/* Scholarly Footer */}
      <footer className="bg-stone-900 text-stone-400 border-t border-stone-800 text-xs py-8 mb-16 md:mb-0">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <span className="font-bold text-stone-200 font-serif-scholarly">
              IBM ASMI DIGITAL LIBRARY — E-Book Digital Institut Bisnis Dan Multimedia asmi
            </span>
            <p className="text-[11px] text-stone-500">
              Perpustakaan Terakreditasi · Institut Bisnis Dan Multimedia asmi · Klasifikasi DDC Edisi 23
            </p>
          </div>

          <div className="text-[11px] text-stone-500 space-y-0.5">
            <p>Dikelola oleh: Gilang Raka Ramadhan (Administrator Perpustakaan IBM ASMI)</p>
            <p>© {new Date().getFullYear()} IBM ASMI DIGITAL LIBRARY. Seluruh hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>

      {/* Active Modals */}
      <BorrowModal />
      <EBookReader />
      <BookDetailModal />
      <QRCodeModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
      />
      <ExcelImportModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
      />
      <AddEditBookModal
        isOpen={isAddEditModalOpen}
        onClose={() => {
          setIsAddEditModalOpen(false);
          setEditingBook(null);
        }}
        editBookData={editingBook}
      />
    </div>
  );
};

export default function App() {
  return (
    <LibraryProvider>
      <MainApp />
    </LibraryProvider>
  );
}
