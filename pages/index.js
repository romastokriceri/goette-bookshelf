import React, { useState } from 'react';
import { X, Download } from 'lucide-react';

const booksData = [
  {
    id: "01-rejected-by-homeland",
    number: 1,
    title: { ru: "Отвергнутые родиной", de: "Von der Heimat verleugnet" },
    year: 2011,
    cover: "01-rejected-by-homeland-2011_1.webp",
    pdfWeb: "01-rejected-by-homeland-2011_144dpi_85%_rgb_web.pdf",
    size: "13.77 MB"
  },
  {
    id: "03-memory-cruise",
    number: 3,
    title: { ru: "Круиз памяти", de: "Eine Reise zu den Erinnerungen" },
    year: 2024,
    cover: "03-memory-cruise-2024_1.webp",
    pdfWeb: "03-memory-cruise-2024_144dpi_75%_rgb_web.pdf",
    size: "3 MB"
  }
];

const getR2Url = (path) => {
  const R2_URL = process.env.NEXT_PUBLIC_R2_URL || '';
  return `${R2_URL}/${path}`;
};

export default function Home() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="container">
      <header style={{textAlign: 'center', marginBottom: '3rem'}}>
        <h1>Документальні дослідження</h1>
        <p>Генрієтта Гетте</p>
      </header>

      <section className="bookshelf">
        {booksData.map((book) => (
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
          </button>
        ))}
      </section>

      {selectedBook && (
        <div className="pdf-modal" onClick={() => setSelectedBook(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3 style={{margin: 0}}>{selectedBook.title.ru}</h3>
                <small>{selectedBook.size}</small>
              </div>
              <button onClick={() => setSelectedBook(null)}><X /></button>
            </div>
            <iframe
              src={`${getR2Url(`Books/${encodeURIComponent(selectedBook.pdfWeb)}`)}#view=FitH`}
              style={{flex: 1, border: 'none'}}
            />
          </div>
        </div>
      )}
    </div>
  );
}
