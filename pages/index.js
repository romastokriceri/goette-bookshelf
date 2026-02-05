import React, { useState, useEffect } from 'react';
import {
  X,
  BookOpen,
  User,
  MessageCircle
} from 'lucide-react';
import { 
  authorData, 
  shelves, 
  heroData, 
  translations,
  shelfDividerQuotes,
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
   Disqus Comments Component
======================= */
const Comments = () => {
  useEffect(() => {
    const existingScript = document.getElementById('disqus-script');
    if (existingScript) existingScript.remove();

    window.disqus_config = function () {
      this.page.url = window.location.href;
      this.page.identifier = window.location.pathname;
      this.language = 'ru';
    };

    const script = document.createElement('script');
    script.id = 'disqus-script';
    script.src = 'https://goette-bookshelf.disqus.com/embed.js';
    script.setAttribute('data-timestamp', +new Date());
    script.async = true;

    (document.head || document.body).appendChild(script);

    return () => {
      if (window.DISQUS) window.DISQUS.reset({ reload: true });
    };
  }, []);

  return (
    <div>
      <div id="disqus_thread"></div>
      <noscript>Please enable JavaScript to view the comments.</noscript>
    </div>
  );
};

/* =======================
   Main Component (Home)
======================= */
export default function Home() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [lang, setLang] = useState('ru');
  const [expandedQuotes, setExpandedQuotes] = useState({});

  useEffect(() => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'ru';
    setLang(savedLang);
  }, []);

  const switchLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('selectedLanguage', newLang);
  };
  const toggleQuote = (id) => {
    setExpandedQuotes(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  };

  return (
    <div className="app-wrapper">
      {/* HEADER */}
      <header className="sticky-header">
        <nav className="nav-container">
          <div className="logo">{authorData.name[lang]}</div>
          
          <ul className="nav-links">
            {['about', 'books', 'articles', 'reviews', 'feedback'].map((sec) => (
              <li key={sec} onClick={() => scrollToSection(sec)}>
                {translations[lang].nav[sec]}
              </li>
            ))}
          </ul>

          <div className="lang-switcher">
            {['ru', 'de', 'en'].map((l) => (
              <button 
                key={l}
                className={lang === l ? 'active' : ''}
                onClick={() => switchLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main className="container">

        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-card">
            <div className="hero-title-group">
              <h2 className="hero-title">{translations[lang].hero.title}</h2>
              <div className="hero-divider"></div>
            </div>

            <blockquote className="hero-quote">
              <p className="quote-text">{heroData.quote.text[lang]}</p>
              <footer className="quote-author">
                <strong>{heroData.quote.author[lang]}</strong>
                <br />
                <span className="quote-position">{heroData.quote.position[lang]}</span>
              </footer>
            </blockquote>

            <div className="hero-description">
              {heroData.description[lang].map((p, i) => <p key={i}>{p}</p>)}
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
                    alt={authorData.name[lang]}
                    className="author-photo"
                  />
                </div>
                <div className="author-text-content">
                  <h1 className="author-name">{authorData.name[lang]}</h1>
                  {authorData.bio[lang].map((p, i) => (
                    <p key={i} className="author-text">{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOOKS SECTION */}
        <section id="books" className="section books-section">
          {shelves.map((shelf, sIndex) => (
            <React.Fragment key={shelf.id}>
              <div className="shelf-group">
                <h2 className="section-title">
                  <BookOpen /> {translations[lang].sections.books} {sIndex + 1}
                </h2>
                <div className="bookshelf">
                  {shelf.books.map((book) => (
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

              {/* ЦИТАТИ ПІСЛЯ ВІДПОВІДНОЇ ПОЛИЦІ */}
              {shelfDividerQuotes[shelf.id] && (
                <div className="shelf-divider-quotes-list">
                  {shelfDividerQuotes[shelf.id].map((quote) => (
                    <div key={quote.id} className="shelf-divider-quote">
                      <div className="divider-quote-content">
                        <blockquote data-hide-text={translations[lang].readMore}
                          className={`divider-quote-text expandable-quote ${expandedQuotes[quote.id] ? 'expanded' : ''}`}
                          onClick={() => toggleQuote(quote.id)}
                        >
                          <p>{quote.text[lang]}</p>
                        </blockquote>
                        <footer className="divider-quote-footer">
                          <strong>{quote.author[lang]}</strong>
                          <br />
                          <span className="divider-quote-position">
                            {quote.position[lang]}
                          </span>
                        </footer>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </section>

      {/* ARTICLES SECTION */}
        <section id="articles" className="section articles-section">
          <div className="section-card">
            <h2 className="section-title">
              <BookOpen /> {translations[lang].sections.articles}
            </h2>

            <div className="articles-grid-v4">
              {articlesData.map((article) => (
                <button
                  key={article.id}
                  className="article-card-v4"
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="article-header-v4">
                    <h3 className="article-title-v4">{article.title[lang]}</h3>
                    <div className="article-divider-v4"></div>
                  </div>
                  <p className="article-preview-v4">
                    {article.preview[lang] || translations[lang].articlePlaceholder}
                  </p>
                </button>
              ))}
            </div>
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
                      {item.text && <p className="review-text">{item.text[lang]}</p>}
                      {item.quote && (
                        <blockquote data-hide-text={translations[lang].readMore} className="review-quote">
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

        {/* FEEDBACK */}
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

      {/* PDF MODAL */}
      {selectedBook && (
        <div className="pdf-modal" onClick={() => setSelectedBook(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-info">
                <h3 className="modal-title">
                  {selectedBook.title[lang]} <span className="modal-year">({selectedBook.year})</span>
                </h3>
                <small className="modal-subtitle">{selectedBook.size}</small>
              </div>
              <button className="close-btn" onClick={() => setSelectedBook(null)}><X size={32} /></button>
            </div>
            <div className="iframe-container">
              <iframe
                src={`${getR2Url(`Books/${encodeURIComponent(selectedBook.pdfWeb)}`)}#toolbar=1`}
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