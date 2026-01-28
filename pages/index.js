import React, { useState, useEffect } from 'react';
import {
  X,
  Mail,
  MapPin,
  BookOpen,
  User,
  Info,
  MessageCircle
} from 'lucide-react';
import { authorData, shelves, contactData, heroData } from '../data';


/* =======================
   Utils
======================= */

const getR2Url = (path) => {
  const R2_URL = process.env.NEXT_PUBLIC_R2_URL || '';
  return `${R2_URL}/${path}`;
};

/* =======================
   Disqus Comments
======================= */

const Comments = () => {
  useEffect(() => {
    // Очистити попередні скрипти
    const existingScript = document.getElementById('disqus-script');
    if (existingScript) {
      existingScript.remove();
    }

    // Конфігурація Disqus
    window.disqus_config = function () {
      this.page.url = window.location.href;
      this.page.identifier = window.location.pathname;
      this.language = 'ru';
    };

    // Завантажити скрипт Disqus
    const script = document.createElement('script');
    script.id = 'disqus-script';
    script.src = 'https://goette-bookshelf.disqus.com/embed.js';
    script.setAttribute('data-timestamp', +new Date());
    script.async = true;

    (document.head || document.body).appendChild(script);

    return () => {
      if (window.DISQUS) {
        window.DISQUS.reset({
          reload: true
        });
      }
    };
  }, []);

  return (
    <div>
      <div id="disqus_thread"></div>
      <noscript>
        Прошу, включите JavaScript для просмотра комментариев.
      </noscript>
    </div>
  );
};

/* =======================
   Main Page
======================= */

export default function Home() {
  const [selectedBook, setSelectedBook] = useState(null);

  const downloadFile = async (url, fileName) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network error');

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
    if (!element) return;

    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <div className="app-wrapper">
      {/* HEADER */}
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

       {/* HERO SECTION */}
  <section className="hero-section">
    <div className="hero-card">
      <div className="hero-title-group">
        <h2 className="hero-title">
          {heroData.title.ru} / {heroData.title.de} / {heroData.title.en}
        </h2>
        <div className="hero-divider"></div>
      </div>

      <blockquote className="hero-quote">
        <p className="quote-text">{heroData.quote.text}</p>
        <footer className="quote-author">
          <strong>{heroData.quote.author}</strong>
          <br />
          <span className="quote-position">{heroData.quote.position}</span>
        </footer>
      </blockquote>

      <div className="hero-description">
        {heroData.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  </section>

        {/* ABOUT */}
        <section id="about" className="section author-section">
          <div className="section-card">
            <div className="author-content">
              <div className="badge">
                <User size={20} /> Об авторе
              </div>
              <h1>{authorData.name}</h1>
              {authorData.bio.map((paragraph, index) => (
                <p key={index} className="author-text">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* BOOKS */}
        <section id="books" className="section books-section">
          {(() => {
            const allBooks = shelves.flatMap(
              (shelf) => shelf.books
            );

            const itemsPerShelf = 5;
            const shelvesChunked = [];

            for (let i = 0; i < allBooks.length; i += itemsPerShelf) {
              shelvesChunked.push(
                allBooks.slice(i, i + itemsPerShelf)
              );
            }

            return shelvesChunked.map((books, index) => (
              <div key={`shelf-${index}`} className="shelf-group">
                <h2 className="section-title">
                  <BookOpen /> Полка {index + 1}
                </h2>

                <div className="bookshelf">
                  {books.map((book) => (
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

        {/* CONTACTS */}
        <section id="contacts" className="section contacts-section">
          <div className="section-card">
            <h2 className="section-title">
              <Info /> Контакты
            </h2>

            <div className="contacts-grid">
              <div className="contact-item">
                <Mail className="icon" />
                <p>
                  Email: <span>{contactData.email}</span>
                </p>
              </div>

              <div className="contact-item">
                <MapPin className="icon" />
                <p>
                  Локация: <span>{contactData.location}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FEEDBACK */}
        <section id="feedback" className="section feedback-section">
          <div className="section-card">
            <div className="feedback-header">
              <h2 className="section-title">
                <MessageCircle /> Отзывы и обратная связь
              </h2>
              <p className="feedback-description">
                Поделитесь впечатлениями от исследований,
                задайте вопросы автору или оставьте слова
                благодарности.
              </p>
            </div>

            <div className="comments-wrapper">
              <Comments />
            </div>
          </div>
        </section>
      </main>

      {/* PDF MODAL */}
      {selectedBook && (
        <div
          className="pdf-modal"
          onClick={() => setSelectedBook(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="modal-info">
                <h3 className="modal-title">
                  {selectedBook.title.ru}{' '}
                  <span className="modal-year">
                    ({selectedBook.year})
                  </span>
                </h3>
                <small className="modal-subtitle">
                  {selectedBook.size} • Полная версия
                </small>
              </div>

              <div className="modal-actions">
                <button
                  className="download-btn"
                  onClick={() => {
                    const url = getR2Url(
                      `Books-full/${encodeURIComponent(
                        selectedBook.pdfFull
                      )}`
                    );
                    downloadFile(url, selectedBook.pdfFull);
                  }}
                >
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
                src={`${getR2Url(
                  `Books/${encodeURIComponent(
                    selectedBook.pdfWeb
                  )}`
                )}#toolbar=1&navpanes=1&view=FitH`}
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
