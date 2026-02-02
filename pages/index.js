import React, { useState, useEffect } from 'react';
import {
  X,
  MapPin,
  BookOpen,
  User,
  MessageCircle
} from 'lucide-react';
import { 
  authorData, 
  shelves, 
  heroData, 
  translations,
  shelfDividerQuote,
  articlesData,
  reviewsData
} from '../data';

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
   Main Component
======================= */

export default function Home() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [lang, setLang] = useState('ru');

  // Load saved language
  useEffect(() => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'ru';
    setLang(savedLang);
  }, []);

  // Switch language
  const switchLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('selectedLanguage', newLang);
  };

  // Scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

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
            <li onClick={() => scrollToSection('about')}>
              {translations[lang].nav.about}
            </li>
            <li onClick={() => scrollToSection('books')}>
              {translations[lang].nav.books}
            </li>
            <li onClick={() => scrollToSection('articles')}>
              {translations[lang].nav.articles}
            </li>
            <li onClick={() => scrollToSection('reviews')}>
              {translations[lang].nav.reviews}
            </li>
            <li onClick={() => scrollToSection('feedback')}>
              {translations[lang].nav.feedback}
            </li>
          </ul>

          <div className="lang-switcher">
            <button 
              className={lang === 'ru' ? 'active' : ''}
              onClick={() => switchLang('ru')}
            >
              RU
            </button>
            <button 
              className={lang === 'de' ? 'active' : ''}
              onClick={() => switchLang('de')}
            >
              DE
            </button>
            <button 
              className={lang === 'en' ? 'active' : ''}
              onClick={() => switchLang('en')}
            >
              EN
            </button>
          </div>
        </nav>
      </header>

      <main className="container">

        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-card">
            <div className="hero-title-group">
              <h2 className="hero-title">
                {translations[lang].hero.title}
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

        {/* ABOUT AUTHOR */}
        <section id="about" className="section author-section">
          <div className="section-card">
            <div className="author-content">
              <div className="badge">
                <User size={20} /> {translations[lang].sections.about}
              </div>
              
              <div className="author-layout">
                <div className="author-photo-wrapper">
                  <img 
                    src={getR2Url(authorData.photo)} 
                    alt={authorData.name}
                    className="author-photo"
                    onError={(e) => {
                      console.error('Photo failed:', e.target.src);
                      e.target.src = 'https://via.placeholder.com/400x400/8b5a2b/ffffff?text=Photo+Error';
                    }}
                  />
                </div>

                <div className="author-text-content">
                  <h1 className="author-name">{authorData.name}</h1>
                  {authorData.bio.map((paragraph, index) => (
                    <p key={index} className="author-text">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOOKS SECTION - SHELF 1 */}
        <section id="books" className="section books-section">
          <div className="shelf-group">
            <h2 className="section-title">
              <BookOpen /> {translations[lang].sections.books} 1
            </h2>

            <div className="bookshelf">
              {shelves[0].books.map((book) => (
                <button
                  key={book.id}
                  className="book-spine"
                  onClick={() => setSelectedBook(book)}
                >
                  <img
                    src={getR2Url(`cover/${book.cover}`)}
                    alt={book.title[lang]}
                    className="book-cover"
                  />
                  <div className="book-overlay">
                    <span className="read-badge">{translations[lang].buttons.read}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* DIVIDER QUOTE BETWEEN SHELVES */}
          <div className="shelf-divider-quote">
            <div className="divider-quote-content">
              <blockquote className="divider-quote-text">
                «{shelfDividerQuote.text[lang]}»
              </blockquote>
              <footer className="divider-quote-footer">
                <strong>{shelfDividerQuote.author[lang]}</strong>
                <br />
                <span className="divider-quote-position">
                  {shelfDividerQuote.position[lang]}
                </span>
              </footer>
            </div>
          </div>

          {/* SHELF 2 */}
          <div className="shelf-group">
            <h2 className="section-title">
              <BookOpen /> {translations[lang].sections.books} 2
            </h2>

            <div className="bookshelf">
              {shelves[1].books.map((book) => (
                <button
                  key={book.id}
                  className="book-spine"
                  onClick={() => setSelectedBook(book)}
                >
                  <img
                    src={getR2Url(`cover/${book.cover}`)}
                    alt={book.title[lang]}
                    className="book-cover"
                  />
                  <div className="book-overlay">
                    <span className="read-badge">{translations[lang].buttons.read}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ARTICLES AS BOOKSHELF */}
        <section id="articles" className="section articles-section">
          <h2 className="section-title">
            <BookOpen /> {translations[lang].sections.articles}
          </h2>

          <div className="bookshelf articles-shelf">
            {articlesData.map((article) => (
              <button
                key={article.id}
                className="book-spine article-spine"
                onClick={() => setSelectedArticle(article)}
              >
                <div className="article-spine-content">
                  <span className="article-spine-title">
                    {article.title[lang]}
                  </span>
                  <span className="article-spine-label">
                    {lang === 'ru' ? 'Статья' : lang === 'de' ? 'Artikel' : 'Article'}
                  </span>
                </div>
                <div className="book-overlay">
                  <span className="read-badge">{translations[lang].buttons.read}</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="section reviews-section">
          <div className="section-card">
            <h2 className="section-title">
              <MessageCircle /> {translations[lang].sections.reviews}
            </h2>

            <div className="reviews-container">
              {reviewsData.map((review) => (
                <div key={review.id} className="review-block">
                  <h3 className="review-book-title">{review.bookTitle[lang]}</h3>
                  
                  {review.items.map((item, index) => (
                    <div key={index} className="review-item">
                      {item.text && (
                        <p className="review-text">{item.text[lang]}</p>
                      )}
                      {item.quote && (
                        <blockquote className="review-quote">
                          <p>"{item.quote}"</p>
                          <footer className="review-author">{item.author}</footer>
                        </blockquote>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEEDBACK / COMMENTS */}
        <section id="feedback" className="section feedback-section">
          <div className="section-card">
            <div className="feedback-header">
              <h2 className="section-title">
                <MessageCircle /> {translations[lang].sections.feedback}
              </h2>
              <p className="feedback-description">
                {translations[lang].sections.feedbackDescription}
              </p>
            </div>

            <div className="comments-wrapper">
              <Comments />
            </div>
          </div>
        </section>
      </main>

      {/* PDF MODAL FOR BOOKS */}
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
                  {selectedBook.title[lang]}{' '}
                  <span className="modal-year">
                    ({selectedBook.year})
                  </span>
                </h3>
                <small className="modal-subtitle">
                  {selectedBook.size}
                </small>
              </div>

              <button
                className="close-btn"
                onClick={() => setSelectedBook(null)}
              >
                <X size={32} />
              </button>
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

      {/* ARTICLE MODAL */}
      {selectedArticle && (
        <div
          className="pdf-modal"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="modal-content article-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3 className="modal-title">{selectedArticle.title[lang]}</h3>
              <button
                className="close-btn"
                onClick={() => setSelectedArticle(null)}
              >
                <X size={32} />
              </button>
            </div>

            <div className="article-content-scroll">
              <article 
                className="article-full-text"
                dangerouslySetInnerHTML={{
                  __html: selectedArticle.fullText[lang] || 
                          `<p style="text-align: center; color: #999; font-style: italic;">
                            ${translations[lang].articlePlaceholder}
                           </p>`
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}