import React, { useState, useEffect } from 'react';
import {
  X,
  Menu,
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
  bookQuotes,
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
   ReviewCard Component
======================= */
const ReviewCard = ({ review, lang, onExpand }) => {
  const hasFullContent = review.fullContent && review.fullContent[lang];
  const hasCover = review.bookCover;

  return (
    <div className="review-card">
      {hasCover && (
        <div className="review-book-cover">
          <img
            src={getR2Url(`cover/${review.bookCover}`)}
            alt={review.bookTitle[lang]}
          />
        </div>
      )}

      <div className="review-card-content">
        <h3 className="review-book-title">{review.bookTitle[lang]}</h3>

        {review.items.map((item, index) => (
          <div key={index} className="review-item">
            {item.text && <p className="review-text">{item.text[lang]}</p>}
            {item.quote && (
              <blockquote className="review-quote">
                <p>"{item.quote}"</p>
                <footer className="review-author">{item.author}</footer>
              </blockquote>
            )}
          </div>
        ))}

        {hasFullContent && (
          <button
            className="btn-open-review"
            onClick={() => onExpand(review)}
          >
            {translations[lang].buttons.readFull}
          </button>
        )}
      </div>
    </div>
  );
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
  const [expandedReview, setExpandedReview] = useState(null);
  const [lang, setLang] = useState('ru');
  const [expandedQuotes, setExpandedQuotes] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'ru';
    setLang(savedLang);
    
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const closeMenuOnDesktop = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', closeMenuOnDesktop);
    return () => window.removeEventListener('resize', closeMenuOnDesktop);
  }, []);

  const switchLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('selectedLanguage', newLang);
    setIsMenuOpen(false);
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
    setIsMenuOpen(false);
  };

  const quoteById = Object.values(shelfDividerQuotes).flat().reduce((acc, quote) => {
    acc[quote.id] = quote;
    return acc;
  }, {});

  const renderQuote = (quote) => {
    const isExpanded = expandedQuotes[quote.id];
    const text = quote.text[lang];
    const isLongText = text.length > 200;

    return (
      <div key={quote.id} className="shelf-divider-quote">
        <div className="divider-quote-content">
          <div className={`quote-wrapper ${isExpanded || !isLongText ? 'expanded' : ''}`}>
            <blockquote className="divider-quote-text">
              <p>{text}</p>
            </blockquote>
            {isLongText && !isExpanded && <div className="quote-gradient-overlay"></div>}
          </div>

          {isLongText && (
            <button
              className="quote-toggle-btn"
              onClick={() => toggleQuote(quote.id)}
            >
              {isExpanded ? translations[lang].buttons.readLess : translations[lang].buttons.readMore}
            </button>
          )}

          <footer className="divider-quote-footer">
            <strong>{quote.author[lang]}</strong>
            <br />
            <span className="divider-quote-position">
              {quote.position[lang]}
            </span>
          </footer>
        </div>
      </div>
    );
  };

  return (
    <div className="app-wrapper">
      {/* HEADER */}
      <header className={`sticky-header ${isMenuOpen ? 'menu-open' : ''}`}>
        <nav className="nav-container">
          <div className="logo">{authorData.name[lang]}</div>

          <button
            className="menu-toggle"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {['home', 'about', 'books', 'articles', 'reviews', 'feedback'].map((sec) => (
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
        <section id="home" className="hero-section">
          <div className="hero-card">
            <div className="hero-title-group">
              <h2 className="hero-title">{translations[lang].hero.title}</h2>
              <div className="hero-divider"></div>
            </div>

            <div className="hero-top-row">
              <div className="hero-photo-wrapper">
                <img
                  src={getR2Url(authorData.photo)}
                  alt={authorData.name[lang]}
                  className="hero-photo"
                />
              </div>

              <blockquote className="hero-quote hero-quote-top-right">
                <p className="quote-text">{heroData.quote.text[lang]}</p>
                <footer className="quote-author">
                  <strong>{heroData.quote.author[lang]}</strong>
                  <br />
                  <span className="quote-position">{heroData.quote.position[lang]}</span>
                </footer>
              </blockquote>
            </div>

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
              
              <div className="author-text-content author-text-content-full">
                <h1 className="author-name">{authorData.name[lang]}</h1>
                {authorData.bio[lang].map((p, i) => (
                  <p key={i} className="author-text">{p}</p>
                ))}
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
                <div className="bookshelf books-with-comments">
                  {shelf.books.map((book) => {
                    const relatedQuotes = (bookQuotes[book.id] || []).map((id) => quoteById[id]).filter(Boolean);

                    return (
                      <React.Fragment key={book.id}>
                        {relatedQuotes.map(renderQuote)}
                        <button
                          className="book-spine"
                          onClick={() => {
                            if (isMobile) {
                              window.open(getR2Url(`Books/${encodeURIComponent(book.pdfWeb)}`), '_blank');
                            } else {
                              setSelectedBook(book);
                            }
                          }}
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
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
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
                  onClick={() => {
                    if (isMobile) {
                      window.open(getR2Url(`article/${encodeURIComponent(article.pdfFile)}`), '_blank');
                    } else {
                      setSelectedArticle(article);
                    }
                  }}
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

        {/* REVIEWS SECTION */}
        <section id="reviews" className="section reviews-section">
          <div className="section-card">
            <h2 className="section-title">
              <MessageCircle /> {translations[lang].sections.reviews}
            </h2>
            <div className="reviews-grid">
              {reviewsData.map((review) => (
                <ReviewCard 
                  key={review.id} 
                  review={review} 
                  lang={lang} 
                  onExpand={setExpandedReview} 
                />
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

      {/* PDF MODAL - BOOKS */}
      {selectedBook && !isMobile && (
        <div className="pdf-modal" onClick={() => setSelectedBook(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-info">
                <h3 className="modal-title">
                  {selectedBook.title[lang]} <span className="modal-year">({selectedBook.year})</span>
                </h3>
                <small className="modal-subtitle">{selectedBook.size}</small>
              </div>
              <button className="close-btn" onClick={() => setSelectedBook(null)}>
                <X size={32} />
              </button>
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

      {/* REVIEW MODAL - "САЙТ В САЙТІ" */}
      {expandedReview && (
        <div className="review-modal" onClick={() => setExpandedReview(null)}>
          <div className="modal-content modal-review-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-info">
                <h3 className="modal-title">
                  {expandedReview.bookTitle[lang]}
                </h3>
              </div>
              <button 
                className="close-btn" 
                onClick={() => setExpandedReview(null)}
              >
                <X size={32} />
              </button> 
            </div>
            <div className="review-page-scroll">
              <div 
                className="review-page-content"
                dangerouslySetInnerHTML={{ 
                  __html: expandedReview.fullContent[lang] 
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* ARTICLE MODAL - PDF */}
      {selectedArticle && !isMobile && (
        <div className="pdf-modal" onClick={() => setSelectedArticle(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-info">
                <h3 className="modal-title">{selectedArticle.title[lang]}</h3>
              </div>
              <button className="close-btn" onClick={() => setSelectedArticle(null)}>
                <X size={32} />
              </button>
            </div>
            <div className="iframe-container">
              <iframe
                src={`${getR2Url(`article/${encodeURIComponent(selectedArticle.pdfFile)}`)}#toolbar=1`}
                title="Article PDF Viewer"
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
