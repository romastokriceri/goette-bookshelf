import React, { useState } from 'react';
import { X, Mail, MapPin, BookOpen, User, Info, ExternalLink } from 'lucide-react';

// Импортируем данные из файла в корневом каталоге
import { authorData, shelves, contactData } from '../data';

const getR2Url = (path) => {
  const R2_URL = process.env.NEXT_PUBLIC_R2_URL || '';
  return `${R2_URL}/${path}`;
};

export default function Home() {
  const [selectedBook, setSelectedBook] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="app-wrapper">
      {/* 1. ХЕДЕР */}
      <header className="sticky-header">
        <nav className="nav-container">
          <div className="logo">Генриетта Гётте</div>
          <ul className="nav-links">
            <li onClick={() => scrollToSection('about')}>Об авторе</li>
            <li onClick={() => scrollToSection('books')}>Книги</li>
            <li onClick={() => scrollToSection('contacts')}>Контакты</li>
          </ul>
        </nav>
      </header>

      <main className="container">
        {/* 2. СЕКЦИЯ ОБ АВТОРЕ */}
        <section id="about" className="section author-section">
          <div className="section-card">
            <div className="author-content">
              <div className="badge"><User size={20} /> Об авторе</div>
              <h1>{authorData.name}</h1>
              {authorData.bio.map((text, index) => (
                <p key={index} className="author-text">{text}</p>
              ))}
            </div>
          </div>
        </section>

        {/* 3. КНИЖНЫЕ ПОЛКИ */}
        <section id="books" className="section books-section">
          {shelves.map((shelf) => (
            <div key={shelf.id} className="shelf-group" style={{ marginBottom: '3rem' }}>
              {shelf.title && (
                <h2 className="section-title">
                  <BookOpen /> {shelf.title}
                </h2>
              )}
              <div className="bookshelf">
                {shelf.books.map((book) => (
                  <button 
                    key={book.id} 
                    className="book-spine"
                    onClick={() => setSelectedBook(book)}
                  >
                    <img 
                      src={getR2Url(`cover/${book.cover}`)} 
                      alt={book.title.ru} 
                      className="book-cover"
                    />
                    <div className="book-overlay">
                      <span className="read-badge">Читать</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* 4. КОНТАКТЫ */}
        <section id="contacts" className="section contacts-section">
          <div className="section-card">
            <h2 className="section-title"><Info /> Контакты</h2>
            <div className="contacts-grid">
              <div className="contact-item">
                <Mail className="icon" />
                <p>Email: <span>{contactData.email}</span></p>
              </div>
              <div className="contact-item">
                <MapPin className="icon" />
                <p>Локация: <span>{contactData.location}</span></p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* МОДАЛЬНОЕ ОКНО ПРОСМОТРА PDF */}
      {selectedBook && (
        <div className="pdf-modal" onClick={() => setSelectedBook(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-info">
                <h3>{selectedBook.title.ru}</h3>
                <div className="modal-meta">
                  <span className="year-tag">{selectedBook.year}</span>
                  <span className="size-tag">{selectedBook.size}</span>
                </div>
              </div>
              <div className="modal-actions">
                <button 
                  className="close-btn" 
                  onClick={() => setSelectedBook(null)}
                  title="Закрыть"
                >
                  <X size={28} />
                </button>
              </div>
            </div>
            <div className="iframe-container">
              <iframe
                src={`${getR2Url(`Books/${encodeURIComponent(selectedBook.pdfWeb)}`)}#view=FitH`}
                title="PDF Viewer"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      )}

      <footer className="footer">
        <p>© {new Date().getFullYear()} {authorData.name}. Все права защищены.</p>
      </footer>
    </div>
  );
}