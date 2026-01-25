import React, { useState } from 'react';
import { X, Mail, MapPin, BookOpen, User, Info } from 'lucide-react';
// Импортируем данные. Убедись, что файл data.js лежит в корне проекта (на один уровень выше папки pages)
import { authorData, shelves, contactData } from '../data';

const getR2Url = (path) => {
  const R2_URL = process.env.NEXT_PUBLIC_R2_URL || '';
  return `${R2_URL}/${path}`;
};

export default function Home() {
  // Состояние для выбранной книги (модальное окно)
  const [selectedBook, setSelectedBook] = useState(null);

  // Функция для плавного скролла к разделам
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
      {/* 1. ШАПКА САЙТА */}
      <header className="sticky-header">
        <nav className="nav-container">
          <div className="logo">{authorData.name}</div>
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
              {authorData.bio.map((paragraph, index) => (
                <p key={index} className="author-text">{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* 3. БІБЛІОТЕКА (АВТОМАТИЧНИЙ РОЗПОДІЛ ПО 5 КНИГ) */}
<section id="books" className="section books-section">
  {(() => {
    // 1. Збираємо всі книги з усіх полиць в один масив
    const allBooks = shelves.reduce((acc, shelf) => [...acc, ...shelf.books], []);
    
    // 2. Розбиваємо загальний масив на групи по 5 книг
    const itemsPerShelf = 5;
    const chunkedShelves = [];
    for (let i = 0; i < allBooks.length; i += itemsPerShelf) {
      chunkedShelves.push(allBooks.slice(i, i + itemsPerShelf));
    }

    // 3. Рендеримо отримані полиці
    return chunkedShelves.map((shelfBooks, index) => (
      <div key={`shelf-${index}`} className="shelf-group">
        <h2 className="section-title">
          <BookOpen /> Поличка {index + 1}
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
                <span className="read-badge">Читати</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    ));
  })()}
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

{/* МОДАЛЬНЕ ВІКНО ДЛЯ ЧИТАННЯ PDF */}
{selectedBook && (
  <div className="pdf-modal" onClick={() => setSelectedBook(null)} style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999
  }}>
    <div className="modal-content" 
         onClick={e => e.stopPropagation()} 
         style={{
           width: '95%',
           height: '95%',
           backgroundColor: '#fff',
           display: 'flex',
           flexDirection: 'column', // Гнучка вертикальна структура
           borderRadius: '12px',
           overflow: 'hidden',
           boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
         }}>
      
      {/* HEADER: Ваша кастомна панель з помаранчевою кнопкою */}
      <div className="modal-header" style={{
        padding: '12px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #e0e0e0',
        flexShrink: 0 // Запобігає стисканню хедера
      }}>
        <div className="modal-info">
          <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#2c3e50' }}>
            {selectedBook.title.ru} <span style={{ fontWeight: 'normal', opacity: 0.7 }}>({selectedBook.year})</span>
          </h3>
          <small style={{ color: '#7f8c8d' }}>{selectedBook.size} • Повна версія</small>
        </div>
        
        <div className="modal-actions" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          {/* ПОМАРАНЧЕВА КНОПКА (Стиль збережено та підсилено) */}
          <a 
            href={getR2Url(`Books/${encodeURIComponent(selectedBook.pdfFull)}`)} 
            download 
            className="download-btn-link"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px', 
              textDecoration: 'none',
              color: '#d35400', 
              fontWeight: '700',
              fontSize: '0.95rem',
              padding: '8px 16px',
              border: '2px solid #d35400',
              borderRadius: '6px',
              transition: 'all 0.2s ease'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Завантажити PDF ({selectedBook.fullSize})
          </a>

          <button 
            className="close-btn" 
            onClick={() => setSelectedBook(null)}
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              color: '#34495e',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <X size={32} />
          </button>
        </div>
      </div>
      
      {/* IFRAME: З активованим тулбаром для навігації */}
      <div className="iframe-container" style={{ flexGrow: 1, backgroundColor: '#525659' }}>
        <iframe
          /* toolbar=1 повертає навігацію (пошук, сторінки, зум) */
          src={`${getR2Url(`Books/${encodeURIComponent(selectedBook.pdfWeb)}`)}#toolbar=1&navpanes=1&view=FitH`}
          title="PDF Viewer"
          width="100%"
          height="100%"
          style={{ border: 'none', display: 'block' }}
        />
      </div>
    </div>
  </div>
)}
    </div>
  );
}