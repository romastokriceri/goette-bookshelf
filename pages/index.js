import React, { useState } from 'react';
import Head from 'next/head';
import { X, Download, Loader2 } from 'lucide-react';

// Данные книг из вашего кода
const booksData = [
  {
    id: "01-rejected-by-homeland-2011",
    number: 1,
    title: { ru: "Отвергнутые родиной. 3-е издание", de: "Von der Heimat verleugnet. 3. Auflage" },
    year: 2011,
    cover: "01-rejected-by-homeland-2011_1.webp",
    pdfWeb: "01-rejected-by-homeland-2011_144dpi_85%_rgb_web.pdf",
    pdfFull: "01-rejected-by-homeland-2011_144dpi_85%_rgb_web.pdf",
    size: "13.77 MB"
  },
  {
    id: "03-memory-cruise-2024",
    number: 3,
    title: { ru: "Круиз памяти. 2-е издание", de: "Eine Reise zu den Erinnerungen. 2. Auflage" },
    year: 2024,
    cover: "03-memory-cruise-2024_1.webp",
    pdfWeb: "03-memory-cruise-2024_144dpi_75%_rgb_web.pdf",
    pdfFull: "03-memory-cruise-2024_144dpi_75%_rgb_web.pdf",
    size: "3 MB"
  },
  {
    id: "04-german-trace-nikolayev-2009",
    number: 4,
    title: { ru: "Немецкий след в истории Николаевщины", de: "Deutsche Spuren in der Geschichte der Region Nikolajew" },
    year: 2009,
    cover: "04-german-trace-nikolayev-2009_1.webp",
    pdfWeb: "04-german-trace-nikolayev-2009_web.pdf",
    pdfFull: "04-german-trace-nikolayev-2009_web.pdf",
    size: "2.58 MB"
  },
  {
    id: "05-tribute-to-memory-2011",
    number: 5,
    title: { ru: "Дань памяти, встречи у истоков", de: "Dem Gedenken verpflichtet. Begegnungen an den Quellen" },
    year: 2011,
    cover: "05-tribute-to-memory-2011_1.webp",
    pdfWeb: "05-tribute-to-memory-2011_web.pdf",
    pdfFull: "05-tribute-to-memory-2011_web.pdf",
    size: "3.39 MB"
  },
  {
    id: "06-swiss-colony-shabo-2024",
    number: 6,
    title: { ru: "Документальная история образования швейцарской колонии «Шабо»", de: "Dokumentierte Geschichte der Schweizer Kolonie „Schabo\"" },
    year: 2024,
    cover: "06-swiss-colony-shabo-2024_1.webp",
    pdfWeb: "06-swiss-colony-shabo-2024_144dpi_75%_rgb_web.pdf",
    pdfFull: "06-swiss-colony-shabo-2024_144dpi_75%_rgb_web.pdf",
    size: "1.34 MB"
  },
  {
    id: "07-st-joseph-church-nikolayev-2011",
    number: 7,
    title: { ru: "Николаевская церковь Святого Иосифа", de: "Die Römisch-katholische Kirche St. Joseph" },
    year: 2011,
    cover: "07-st-joseph-church-nikolayev-2011_1.webp",
    pdfWeb: "07-st-joseph-church-nikolayev-2011_web.pdf",
    pdfFull: "07-st-joseph-church-nikolayev-2011_web.pdf",
    size: "1.69 MB"
  },
  {
    id: "09-cossacks-historical-metamorphoses-2018",
    number: 9,
    title: { ru: "Казачество. Исторические метаморфозы", de: "Die Kosaken. Historische Metamorphosen" },
    year: 2018,
    cover: "09-cossacks-historical-metamorphoses-2018_1.webp",
    pdfWeb: "09-cossacks-historical-metamorphoses-2018_144dpi_75%_rgb_web.pdf",
    pdfFull: "09-cossacks-historical-metamorphoses-2018_144dpi_75%_rgb_web.pdf",
    size: "9.1 MB"
  },
  {
    id: "10-german-swiss-contribution-18-19c",
    number: 10,
    title: { ru: "Вклад немцев и швейцарцев", de: "Der Beitrag von Deutschen und Schweizern" },
    year: 2022,
    cover: "10-german-swiss-contribution-18-19c_1.webp",
    pdfWeb: "10-german-swiss-contribution-18-19c_144dpi_75%_rgb_web.pdf",
    pdfFull: "10-german-swiss-contribution-18-19c_144dpi_75%_rgb_web.pdf",
    size: "18.08 MB"
  },
  {
    id: "11-in-memory-of-jakowlew-2024",
    number: 11,
    title: { ru: "В память тех, кого нам не забыть", de: "Zum Gedenken an den Unvergessenen" },
    year: 2024,
    cover: "11-in-memory-of-jakowlew-2024_1.webp",
    pdfWeb: "11-in-memory-of-jakowlew-2024_web.pdf",
    pdfFull: "11-in-memory-of-jakowlew-2024_web.pdf",
    size: "3.38 MB"
  }
];

const getR2Url = (path) => {
  const R2_URL = process.env.NEXT_PUBLIC_R2_URL || '';
  return `${R2_URL}/${path}`;
};

export default function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isPdfLoading, setIsPdfLoading] = useState(false);

  return (
    <div className="app">
      <Head><title>Генриетта Гётте • Книжная полка</title></Head>
      
      <header className="header">
        <div className="header-content">
          <div className="logo">Генриетта Гётте</div>
          <nav><a href="#about">Об авторе</a> • <a href="#library">Книги</a></nav>
        </div>
      </header>

      <main className="container">
        <section id="about" className="about-section">
          <h2>Об авторе</h2>
          <div className="about-text">
            <p>Автору книг, Генриетте Гётте, судьбой была уготовлена полная трагизма жизнь: война, разлука с родителями, детские дома. После смерти родителей в 2002 году она начала собирать документальный материал о событиях XIX-XX столетий.</p>
          </div>
        </section>

        <section id="library" className="shelf-section">
          <h2 className="shelf-title">Книжная полка</h2>
          <div className="bookshelf">
            <div className="books-row">
              {booksData.map((book) => (
                <div key={book.id} className="book-wrapper">
                  <button 
                    onClick={() => { setSelectedBook(book); setIsPdfLoading(true); }}
                    className="book-spine"
                    style={{
                      backgroundImage: `url(${encodeURI(getR2Url(`Covers/${book.cover}`))})`,
                      backgroundSize: 'cover'
                    }}
                  >
                    <div className="book-overlay">
                      <span className="book-number">#{book.number}</span>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {selectedBook && (
        <div className="pdf-modal" onClick={() => setSelectedBook(null)}>
          <div className="pdf-container" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedBook(null)} className="close-btn"><X size={24} /></button>
            
            <div className="pdf-header">
              <div className="pdf-info">
                <h3>{selectedBook.title.ru}</h3>
                <p className="pdf-meta">{selectedBook.year} • {selectedBook.size}</p>
              </div>
              <button 
                onClick={() => window.open(getR2Url(`Books-full/${selectedBook.pdfFull}`), '_blank')}
                className="download-btn"
              >
                <Download size={20} /> <span>Скачать Full PDF</span>
              </button>
            </div>

            <div className="pdf-viewer">
              {isPdfLoading && (
                <div className="loader-overlay">
                  <Loader2 className="spinner" size={48} />
                  <p>Загрузка превью...</p>
                </div>
              )}
              <iframe
                src={`${getR2Url(`Books/${selectedBook.pdfWeb}`)}#view=FitH`}
                className="pdf-iframe"
                onLoad={() => setIsPdfLoading(false)}
              />
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        body { margin: 0; background: #f4f1ea; font-family: serif; }
        .header { background: white; padding: 1rem; position: sticky; top: 0; z-index: 100; border-bottom: 2px solid #ddd; }
        .header-content { max-width: 1100px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
        .container { max-width: 1100px; margin: 0 auto; padding: 2rem 1rem; }
        .about-section { background: white; padding: 2rem; border-radius: 8px; margin-bottom: 3rem; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
        
        .bookshelf { 
          background: #7c5030; border: 5px solid #3e2410; 
          padding: 3rem 2rem; border-radius: 4px; 
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        .books-row { 
          display: flex; flex-wrap: wrap; gap: 1.5rem; 
          justify-content: center; align-items: flex-end;
          border-bottom: 8px solid #3e2410; padding-bottom: 10px;
        }
        
        .book-spine {
          width: 160px; height: 230px; border: none; cursor: pointer;
          transition: 0.3s; position: relative;
          box-shadow: 5px 5px 15px rgba(0,0,0,0.3);
          border-left: 5px solid rgba(0,0,0,0.2);
        }
        .book-spine:hover { transform: translateY(-15px) scale(1.05); }
        .book-overlay { position: absolute; top: 5px; right: 5px; }
        .book-number { background: rgba(0,0,0,0.6); color: white; padding: 2px 6px; border-radius: 3px; font-size: 12px; }

        .pdf-modal { position: fixed; inset: 0; background: rgba(0,0,0,0.8); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 20px; }
        .pdf-container { background: white; width: 100%; height: 95vh; border-radius: 8px; display: flex; flex-direction: column; position: relative; }
        .pdf-header { padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #ddd; }
        .pdf-viewer { flex: 1; position: relative; }
        .pdf-iframe { width: 100%; height: 100%; border: none; }
        
        .loader-overlay { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #fff; z-index: 5; }
        .spinner { animation: spin 1s linear infinite; margin-bottom: 10px; color: #667eea; }
        @keyframes spin { to { transform: rotate(360deg); } }
        
        .download-btn { background: #2d3748; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; display: flex; gap: 8px; align-items: center; }
        .close-btn { position: absolute; top: -40px; right: 0; color: white; background: none; border: none; cursor: pointer; }
      `}</style>
    </div>
  );
}