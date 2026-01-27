import React, { useState, useEffect } from 'react';
import { X, Mail, MapPin, BookOpen, User, Info, MessageCircle } from 'lucide-react';
import { authorData, shelves, contactData } from '../data';

const getR2Url = (path) => {
  const R2_URL = process.env.NEXT_PUBLIC_R2_URL || '';
  return `${R2_URL}/${path}`;
};

// Компонент коментарів Hyvor Talk
const Comments = () => {
  useEffect(() => {
    console.log('🔄 Loading Hyvor script...');
    
    const existingScript = document.getElementById('hyvor-talk-script');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'hyvor-talk-script';
    script.src = 'https://talk.hyvor.com/embed/embed.js';
    script.async = true;
    script.type = 'module';
    
    script.onload = () => {
      console.log('✅ Hyvor script loaded successfully');
    };
    
    script.onerror = () => {
      console.error('❌ Failed to load Hyvor script');
    };
    
    document.body.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('hyvor-talk-script');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <div 
      className="hyvor-talk-embed"
      data-website-id="10979"
      data-page-id={typeof window !== 'undefined' ? window.location.pathname : '/'}
      data-page-title="Отзывы"
      data-page-language="ru"
      data-loading-mode="scroll"
    />
  );
};

export default function Home() {
  const [selectedBook, setSelectedBook] = useState(null);

  const downloadFile = async (url, fileName) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Download failed:', error);
      window.open(url, '_blank');
    }
  };

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
      {/* ШАПКА */}
      <header className="sticky-header">
        <nav className="nav-container">
          <div className="logo">{authorData.name}</div>
          <ul className="nav-links">
            <li onClick={() => scrollToSection('about')}>Об авторе</li>
            <li onClick={() => scrollToSection('books')}>Книги</li>
            <li onClick={() => scrollToSection('contacts')}>Контакты</li>
            <li onClick={() => scrollToSection('feedback')}>Отзывы</li>
          </ul>
        </nav>
      </header>

      <main className="container">
        {/* ОБ АВТОРЕ */}
        <section id="about" className="section author-section">
          <div className="section-card">
            <div className="author-content">
              <div className="badge"><User size={20} /> Об авторе</div>
              <h1>{authorData.name}</h1>
              {authorData.bio.map((paragraph, index) => (
                <p key={index} className="author-text">{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* БИБЛИОТЕКА */}
        <section id="books" className="section books-section">
          {(() => {
            const allBooks = shelves.reduce((acc, shelf) => [...acc, ...shelf.books], []);
            const itemsPerShelf = 5;
            const chunkedShelves = [];
            for (let i = 0; i < allBooks.length; i += itemsPerShelf) {
              chunkedShelves.push(allBooks.slice(i, i + itemsPerShelf));
            }

            return chunkedShelves.map((shelfBooks, index) => (
              <div key={`shelf-${index}`} className="shelf-group">
                <h2 className="section-title">
                  <BookOpen /> Полка {index + 1}
                </h2>
                <div className="bookshelf">
                  {shelfBooks.map((book) => (
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
            ));
          })()}
        </section>

        {/* КОНТАКТЫ */}
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

        {/* ОТЗЫВЫ */}
        <section id="feedback" className="section feedback-section">
          <div className="section-card">
            <div className="feedback-header">
              <h2 className="section-title">
                <MessageCircle /> Отзывы и обратная связь
              </h2>
              <p className="feedback-description">
                Поделитесь впечатлениями от исследований, задайте вопросы автору 
                или оставьте слова благодарности. Комментировать может любой желающий.
              </p>
            </div>
            
            <div className="comments-wrapper">
              <Comments />
            </div>
          </div>
        </section>
      </main>

      {/* МОДАЛЬНЕ ВІКНО PDF */}
      {selectedBook && (
        <div className="pdf-modal" onClick={() => setSelectedBook(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            
            <div className="modal-header">
              <div className="modal-info">
                <h3 className="modal-title">
                  {selectedBook.title.ru} 
                  <span className="modal-year">({selectedBook.year})</span>
                </h3>
                <small className="modal-subtitle">
                  {selectedBook.size} • Полная версия
                </small>
              </div>
              
              <div className="modal-actions">
                <button 
                  onClick={() => {
                    const url = getR2Url(`Books-full/${encodeURIComponent(selectedBook.pdfFull)}`);
                    downloadFile(url, selectedBook.pdfFull);
                  }}
                  className="download-btn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Скачать PDF ({selectedBook.fullSize})
                </button>

                <button 
                  className="close-btn" 
                  onClick={() => setSelectedBook(null)}
                >
                  <X size={32} />
                </button>
              </div>
            </div>
            
            <div className="iframe-container">
              <iframe
                src={`${getR2Url(`Books/${encodeURIComponent(selectedBook.pdfWeb)}`)}#toolbar=1&navpanes=1&view=FitH`}
                title="PDF Viewer"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}