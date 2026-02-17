# ПРОМТ ДЛЯ АГЕНТА: Повна переробка Goette Bookshelf

## КОНТЕКСТ
Ти працюєш з Next.js проектом "Goette Bookshelf" — цифровою бібліотекою книг Генрієтти Ґьоте. 

**Стек:**
- Next.js 16
- React 19
- CSS в `styles/globals.css`
- Дані в `data.js`
- Головна сторінка `pages/index.js`

---

## ЗАВДАННЯ 1: HERO SECTION — ФОТО ПЕРШЕ, ПОТІМ ЦИТАТА З ДЕКОРАТИВНИМ ШРИФТОМ

### Поточний стан
Hero section показує: заголовок → цитата → опис автора.

### Потрібно
**Нова структура Hero Section:**

```
┌─────────────────────────────────────┐
│  [ВЕЛИКЕ ФОТО АВТОРА]               │
│  author/henrietta-goette.webp       │
│                                     │
│  «Потрясение»                       │ ← великим декоративним шрифтом
│  "По прочтении книг Генриетты       │
│  Львовны Гётте"                     │
│  — А. Яковлев, 2017                 │
│                                     │
│  [Опис автора - 4 параграфи]        │
└─────────────────────────────────────┘
```

**Конкретні вимоги:**

1. **Фото автора:**
   - Перший елемент hero section
   - Розмір: 280-320px ширина, по центру або зліва
   - Красиве обрамлення з тінню
   - Завантажувати через `getR2Url('author/henrietta-goette.webp')`

2. **Перше слово цитати — декоративний шрифт:**
   - **RU:** «Потрясение.» 
   - **DE:** „Man ist erschüttert"
   - **EN:** "Reading... leaves you shaken"
   
   Використати Google Font: **`Cormorant Garamond`** (italic, weight 600) або **`Playfair Display`** (italic)
   
   CSS клас `.hero-quote-word`:
   ```css
   .hero-quote-word {
     font-family: 'Cormorant Garamond', serif;
     font-style: italic;
     font-weight: 600;
     font-size: 2.8rem;
     color: var(--accent);
     display: block;
     margin-bottom: 10px;
     text-align: center;
   }
   ```

3. **Яскравіший колір тексту цитати:**
   - Не сірий `#555`, а `var(--wood-dark)` або `#2c1810`
   - Розмір тексту цитати: мінімум `1.3rem`

4. **Менші відступи:**
   - Зменшити `margin-bottom` і `padding` між елементами hero section вдвічі
   - `.hero-card { padding: 30px 40px; }` замість `50px 40px`

---

## ЗАВДАННЯ 2: NAVBAR — ДОДАТИ "ГЛАВНАЯ"

### Потрібно додати в `data.js`:

```javascript
export const translations = {
  ru: {
    nav: { 
      home: "Главная",  // ← ДОДАТИ
      about: "Об авторе", 
      books: "Книги", 
      // ...
    },
    // ...
  },
  de: {
    nav: { 
      home: "Startseite",  // ← ДОДАТИ
      about: "Über den Autor",
      // ...
    },
    // ...
  },
  en: {
    nav: { 
      home: "Main",  // ← ДОДАТИ
      about: "About the Author",
      // ...
    },
    // ...
  }
};
```

### У `pages/index.js`:

1. Додати `id="hero"` до `.hero-section`
2. У navbar додати першим пунктом:
```jsx
<li key="home" onClick={() => scrollToSection('hero')}>
  {translations[lang].nav.home}
</li>
```

---

## ЗАВДАННЯ 3: ДОДАТИ НОВУ КНИГУ #02 (НІМЕЦЬКЕ ВИДАННЯ)

### Додати в `booksData` між книгою 01 та 03:

```javascript
{
  id: "02-von-der-heimat-verleugnet-deutsch",
  title: { 
    ru: "Von der Heimat verleugnet (німецькою)", 
    de: "Von der Heimat verleugnet", 
    en: "Von der Heimat verleugnet (German edition)" 
  },
  year: 2011,
  cover: "02-von-der-heimat-verleugnet-deutsch_1.webp",
  pdfWeb: "02-von-der-heimat-verleugnet-deutsch_144dpi_75%_rgb_web.pdf",
  pdfFull: "02-von-der-heimat-verleugnet-deutsch.pdf",
  size: "15 MB",
  fullSize: "45 MB"
},
```

---

## ЗАВДАННЯ 4: ОНОВИТИ НАЗВИ PDF ФАЙЛІВ У ВСІХ КНИГАХ

### Поточні книги з НЕПРАВИЛЬНИМИ назвами PDF:

Замінити в `data.js` → `booksData`:

```javascript
// КНИГА 01
pdfWeb: "01-rejected-by-homeland-2011_144dpi_85%_rgb_web.pdf", // ✓ залишити як є

// КНИГА 02 - НОВА (вище)

// КНИГА 03
pdfWeb: "03-memory-cruise-2024_144dpi_75%_rgb_web.pdf", // ✓ залишити

// КНИГА 04
pdfWeb: "04-german-trace-nikolayev-2009_web_144dpi_75%_rgb_web.pdf", // ВИПРАВИТИ

// КНИГА 05
pdfWeb: "05-tribute-to-memory-2011_web.pdf", // ✓ залишити

// КНИГА 06
pdfWeb: "06-swiss-colony-shabo-2024_144dpi_75%_rgb_web.pdf", // ✓ залишити

// КНИГА 07
pdfWeb: "07-st-joseph-church-nikolayev-2011_web.pdf", // ✓ залишити

// КНИГА 09
pdfWeb: "09-cossacks-historical-metamorphoses-2018_144dpi_75%_rgb_web.pdf", // ✓ залишити

// КНИГА 10
pdfWeb: "10-german-swiss-contribution-18-19c_144dpi_75%_rgb_web.pdf", // ✓ залишити

// КНИГА 11
pdfWeb: "11-in-memory-of-jakowlew-2024_web.pdf", // ✓ залишити

// КНИГА 12
pdfWeb: "12-german-history-of-the-region-2026_144dpi_75%_rgb_web.pdf", // ✓ залишити
```

**Змінити треба тільки книгу 04!**

---

## ЗАВДАННЯ 5: АНАЛІЗ ВІДПОВІДНОСТІ ЦИТАТ І КНИГ

### Поточний стан у `data.js`:

`shelfDividerQuotes` містить цитати прив'язані до полиць (`shelf-1`, `shelf-2`), але НЕ до конкретних книг.

### Проведений аналіз:

**Shelf-1** (книги 1-6):
- `quote-shevchenko` → про "Отвергнутые родиной" → **книга `01-rejected-by-homeland`** ✓
- `quote-yakovlev-2011` → "замечательное произведение" → **книга `01-rejected-by-homeland`** ✓
- `quote-yakovlev-2009` → "Круиз памяти" → **книга `03-memory-cruise`** ✓

**Shelf-2** (книги 7-12):
- `quote-yakovlev-2018` → "Казачество" → **книга `09-cossacks-historical-metamorphoses`** ✓

### Книги БЕЗ цитат:
- `02-von-der-heimat-verleugnet-deutsch` (нова)
- `04-german-trace-nikolayev`
- `05-tribute-to-memory`
- `06-swiss-colony-shabo`
- `07-st-joseph-church-nikolayev`
- `10-german-swiss-contribution`
- `11-in-memory-of-jakowlew`
- `12-german-history-of-the-region`

---

## ЗАВДАННЯ 6: ПЕРЕРОБКА СТРУКТУРИ — ЦИТАТА → КНИГА

### Нова структура `data.js`:

Замість `shelfDividerQuotes` — додати поле `quotes` до кожного об'єкта в `booksData`:

```javascript
export const booksData = [
  {
    id: "01-rejected-by-homeland",
    title: { ru: "Отвергнутые родиной", de: "Von der Heimat verleugnet", en: "Rejected by the Homeland" },
    year: 2011,
    edition: { ru: "3-е издание", de: "3. Auflage", en: "3rd edition" },
    cover: "01-rejected-by-homeland-2011_1.webp",
    pdfWeb: "01-rejected-by-homeland-2011_144dpi_85%_rgb_web.pdf",
    pdfFull: "01-rejected-by-homeland-2011.pdf",
    size: "13.77 MB",
    fullSize: "~40 MB",
    quotes: [
      {
        id: "quote-shevchenko",
        text: {
          ru: "…Монография «Отвергнутые родиной» – значительное историческое исследование в раскрытии «белых пятен» истории не только Причерноморья, но и почти всего постсоветского пространства. С особой яркостью показан трагизм немецких и швейцарских колонистов, долгое время проживавших в Причерноморье",
          de: "…Die Monografie „Von der Heimat verleugnet" ist eine wichtige historische Untersuchung zur Aufdeckung der „weißen Flecken" in der Geschichte nicht nur des Schwarzmeergebietes, sondern wohl des gesamten postsowjetischen Raumes. Mit besonders eindringlicher Klarheit sind die Tragödien der deutschen und Schweizer Kolonisten dargestellt, die lange Zeit im Schwarzmeergebiet gelebt haben",
          en: "…The monograph „Rejected by the Motherland" is a significant historical research that reveals the „white spots" in the history of not only the Black Sea region, but also almost the entire post-Soviet space. The tragedy of the German and Swiss colonists who lived in the Black Sea region for a long time is particularly vividly depicted"
        },
        author: { ru: "В. Шевченко, 2011", de: "W. Schewtschenko, 2011", en: "V. Shevchenko, 2011" },
        position: {
          ru: "Историк, доцент Каховского филиала Херсонского технического университета",
          de: "Historiker, Dozent an der Filiale Kachowka der Technischen Universität Cherson",
          en: "Historian, Associate Professor at the Kakhovka Branch of the Kherson Technical University"
        }
      },
      {
        id: "quote-yakovlev-2011",
        text: {
          ru: "Нет сомнения, что замечательное и в своём роде уникальное произведение Генриетты Львовны Гётте... сделает нас лучше, чище, мудрее! И верю, что миллионы будущих читателей во всех концах бывшего Союза и за его пределами по достоинству оценят непреходящее значение этой, без преувеличения великой книги, пронизанной  высоким гуманизмом, верой в высшую справедливость – победу добра над злом!",
          de: "Es steht außer Zweifel, dass das hervorragende und in dieser Art einzigartige Werk von Henriette Lwowna  Goette uns allen  nicht nur helfen wird einige Fragen unserer leidvollen  Geschichte, die die sowjetische Geschichtsschreibung zuvor  verschwiegen hat,  sondern  es wird uns, das wage ich zu sagen,  besser, reiner und weiser machen! Und ich glaube, dass Millionen zukünftiger Leser im ganzen Bereich  der ehemaligen Sowjetraum und über  ihre Grenzen hinaus, den unvergänglichen Wert dieses ohne Übertreibung großartigen Buches würdigen werden, das von hohem Humanismus und dem Glauben an die höhere Gerechtigkeit – den Sieg des Guten über das Böse – durchdrungen ist!",
          en: "There is no doubt that Henrietta Lvovna Gette's remarkable and unique work will not only help our better understanding the certain aspects of our long-suffering history which were previously ignored by Soviet historiography, but it also makes us, I dare say, better, purer, and wiser! And I believe that millions of future readers in all parts of the former Soviet Union and beyond will appreciate the enduring significance of this, without exaggeration, great book, which is imbued with high humanism and a belief in the ultimate triumph of good over evil!"
        },
        author: { ru: "А. Яковлев, 2011", de: "A. Jakowlew, 2011", en: "A. Yakovlev, 2011" },
        position: { ru: "Историк, директор музея «Таврия», Новая Каховка", de: "Historiker, Direktor des Museums „Tawrija", Nowaja Kachowka", en: "Historian, Director of the Tavria Museum, Novaya Kakhovka" }
      }
    ]
  },
  
  // КНИГА 02 - НОВА, БЕЗ ЦИТАТ
  {
    id: "02-von-der-heimat-verleugnet-deutsch",
    title: { 
      ru: "Von der Heimat verleugnet (німецькою)", 
      de: "Von der Heimat verleugnet", 
      en: "Von der Heimat verleugnet (German edition)" 
    },
    year: 2011,
    cover: "02-von-der-heimat-verleugnet-deutsch_1.webp",
    pdfWeb: "02-von-der-heimat-verleugnet-deutsch_144dpi_75%_rgb_web.pdf",
    pdfFull: "02-von-der-heimat-verleugnet-deutsch.pdf",
    size: "15 MB",
    fullSize: "45 MB"
  },
  
  // КНИГА 03
  {
    id: "03-memory-cruise",
    title: { ru: "Круиз памяти", de: "Die Reise zu den Erinnerungen", en: "Memory Cruise" },
    year: 2024,
    cover: "03-memory-cruise-2024_1.webp",
    pdfWeb: "03-memory-cruise-2024_144dpi_75%_rgb_web.pdf",
    pdfFull: "03-memory-cruise-2024.pdf",
    size: "3 MB",
    fullSize: "37.01 MB",
    quotes: [
      {
        id: "quote-yakovlev-2009",
        text: {
          ru: "Я ещё никогда не слышал и не читал такого репортажа как „Круиз памяти" Генриетты Львовны Гётте",
          de: "Ich habe noch nie einen solchen Bericht gehört oder gelesen wie Henriette Lvovna Goettes „Die Reise zu den Erinnerungen"",
          en: "I have never heard or read a report like Henrietta Lvovna Götté's „Memory Cruise""
        },
        author: { ru: "А. Яковлев, 2009", de: "A. Jakowlew, 2009", en: "A. Yakovlev, 2009" },
        position: { ru: " ", de: " ", en: " " }
      }
    ]
  },
  
  // КНИГИ 04-08 БЕЗ ЦИТАТ (залишаються без поля quotes)
  {
    id: "04-german-trace-nikolayev",
    title: { ru: "Немецкий след в истории Николаевщины", de: "Deutsche Spuren in der Geschichte der Region Nikolajew", en: "The German trace in the history of Nykolaev region" },
    year: 2009,
    cover: "04-german-trace-nikolayev-2009_1.webp",
    pdfWeb: "04-german-trace-nikolayev-2009_web_144dpi_75%_rgb_web.pdf",
    pdfFull: "04-german-trace-nikolayev-2009.pdf",
    size: "2.58 MB",
    fullSize: "2.59 MB"
  },
  
  // ... інші книги без quotes ...
  
  // КНИГА 09
  {
    id: "09-cossacks-historical-metamorphoses",
    title: { ru: "Казачество. Исторические метаморфозы", de: "Die Kosaken. Historische Metamorphosen", en: "The Cossacks. Historical Metamorphoses" },
    year: 2018,
    cover: "09-cossacks-historical-metamorphoses-2018_1.webp",
    pdfWeb: "09-cossacks-historical-metamorphoses-2018_144dpi_75%_rgb_web.pdf",
    pdfFull: "09-cossacks-historical-metamorphoses-2018.pdf",
    size: "9.1 MB",
    fullSize: "~25 MB",
    quotes: [
      {
        id: "quote-yakovlev-2018",
        text: {
          ru: "Книга Генриетты Львовны Гётте „Казачество. Исторические метаморфозы" – лучшая книга о казаках, изданная на сегодня. Она была бы хорошим учебным пособием для казачьих лицеев",
          de: "Das Buch von Henriette Lwowna Goette „Die Kosaken. Historische Metamorphosen" ist das beste bis heute veröffentlichte Buch über Kosaken. Es wäre ein gutes Lehrbuch für Kosaken-Lyzeen",
          en: "Henrietta Lvovna Gette's book „The Cossacks. Historical Metamorphoses" is the best book about the Cossacks that has been published to date. It would be a good textbook for Cossack lyceums"
        },
        author: { ru: "А. Яковлев, 2018", de: "A. Jakowlew, 2018", en: "A. Yakovlev, 2018" },
        position: { ru: " ", de: " ", en: " " }
      }
    ]
  },
  
  // ... решта книг ...
];
```

### Видалити з `data.js`:
```javascript
// ❌ ВИДАЛИТИ ПОВНІСТЮ:
export const shelfDividerQuotes = { ... };
```

### Оновити `shelves`:
```javascript
export const shelves = [
  { id: "shelf-1", books: booksData.slice(0, 6) },  // тепер 6 книг замість 5
  { id: "shelf-2", books: booksData.slice(6) }
];
```

---

## ЗАВДАННЯ 7: ОНОВИТИ РЕНДЕРИНГ ПОЛИЦЬ У `pages/index.js`

### Видалити старий код:
```jsx
// ❌ ВИДАЛИТИ:
{shelfDividerQuotes[shelf.id] && (
  <div className="shelf-divider-quotes-list">
    {shelfDividerQuotes[shelf.id].map((quote) => { ... })}
  </div>
)}
```

### Новий код рендерингу:

```jsx
{/* BOOKS SECTION */}
<section id="books" className="section books-section">
  {shelves.map((shelf, sIndex) => (
    <div key={shelf.id} className="shelf-group">
      <h2 className="section-title">
        <BookOpen /> {translations[lang].sections.books} {sIndex + 1}
      </h2>
      
      <div className="bookshelf">
        {shelf.books.map((book) => (
          <div key={book.id} className="book-with-quote">
            {/* Цитата ПЕРЕД книгою (якщо є) */}
            {book.quotes && book.quotes.length > 0 && (
              <div className="book-quote-block">
                {book.quotes.map((quote) => {
                  const isExpanded = expandedQuotes[quote.id];
                  const text = quote.text[lang];
                  const isLongText = text.length > 250;

                  return (
                    <div key={quote.id} className="book-quote-item">
                      <div className={`quote-wrapper ${isExpanded || !isLongText ? 'expanded' : ''}`}>
                        <blockquote className="book-quote-text">
                          <p>{text}</p>
                        </blockquote>
                        {isLongText && !isExpanded && <div className="quote-gradient-overlay"></div>}
                      </div>
                      
                      {isLongText && (
                        <button 
                          className="quote-toggle-btn"
                          onClick={() => toggleQuote(quote.id)}
                        >
                          {isExpanded 
                            ? translations[lang].buttons.readLess 
                            : translations[lang].buttons.readMore
                          }
                        </button>
                      )}

                      <footer className="book-quote-footer">
                        <strong>{quote.author[lang]}</strong>
                        <br />
                        {quote.position[lang] && (
                          <span className="book-quote-position">
                            {quote.position[lang]}
                          </span>
                        )}
                      </footer>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Сама книга */}
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
            
            {/* Назва книги під обкладинкою */}
            <div className="book-title-below">
              {book.title[lang]}
              {book.edition && <span className="book-edition"> ({book.edition[lang]})</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</section>
```

---

## ЗАВДАННЯ 8: CSS — СТИЛІ ДЛЯ НОВОЇ СТРУКТУРИ

### Додати/оновити в `styles/globals.css`:

```css
/* =====================
   ЗМЕНШЕНІ ВІДСТУПИ
   ===================== */
.section-card { 
  margin-bottom: 30px; /* було 60px */
  padding: 30px; /* було 40px */
}

.hero-card { 
  padding: 30px 40px; /* було 50px 40px */
}

.hero-description p { 
  margin-bottom: 12px; /* було 20px */
}

.shelf-group {
  margin-bottom: 50px; /* було 80px */
}

/* =====================
   ЯСКРАВІШИЙ ТЕКСТ
   ===================== */
body { 
  color: #1a2530; /* було #2c3e50 */
}

.hero-description p { 
  color: #333; /* було #555 */
}

.author-text { 
  color: #333; /* було #555 */
}

.quote-text { 
  font-size: 1.3rem; /* було 1.15rem */
  color: #2c1810; /* було var(--text-main) */
}

/* =====================
   HERO QUOTE - ДЕКОРАТИВНЕ СЛОВО
   ===================== */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,600&display=swap');

.hero-quote-word {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-weight: 600;
  font-size: 2.8rem;
  color: var(--accent);
  display: block;
  margin-bottom: 10px;
  text-align: center;
  line-height: 1.2;
}

.hero-photo-container {
  width: 300px;
  margin: 0 auto 30px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.hero-photo-container img {
  width: 100%;
  height: auto;
  display: block;
}

/* =====================
   BOOK WITH QUOTE STRUCTURE
   ===================== */
.book-with-quote {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  max-width: 180px;
}

.book-quote-block {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  margin-bottom: 10px;
}

.book-quote-item {
  margin-bottom: 20px;
}

.book-quote-item:last-child {
  margin-bottom: 0;
}

.book-quote-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--wood-dark);
  font-style: italic;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
}

.book-quote-text p {
  margin: 0;
}

.book-quote-footer {
  margin-top: 10px;
  text-align: right;
  font-size: 0.85rem;
  color: #666;
  font-style: normal;
}

.book-quote-footer strong {
  color: var(--wood-dark);
  display: block;
  margin-bottom: 3px;
}

.book-quote-position {
  font-size: 0.8rem;
  color: #777;
  font-style: italic;
}

.book-title-below {
  text-align: center;
  font-size: 0.9rem;
  color: var(--wood-dark);
  font-weight: 600;
  line-height: 1.3;
  padding: 0 5px;
}

.book-edition {
  font-size: 0.8rem;
  color: #777;
  font-weight: normal;
  font-style: italic;
}

/* =====================
   QUOTE EXPAND/COLLAPSE
   ===================== */
.quote-wrapper {
  position: relative;
  max-height: 4.5em;
  overflow: hidden;
  transition: max-height 0.4s ease;
}

.quote-wrapper.expanded {
  max-height: 2000px;
}

.quote-gradient-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3em;
  background: linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.9) 70%, rgba(255,255,255,1) 100%);
  pointer-events: none;
}

.quote-wrapper.expanded .quote-gradient-overlay {
  display: none;
}

.quote-toggle-btn {
  display: block;
  margin: 10px auto 0;
  padding: 5px 12px;
  background: transparent;
  border: 1px solid var(--accent);
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Georgia', serif;
}

.quote-toggle-btn:hover {
  background: var(--accent);
  color: white;
}

/* =====================
   BOOKSHELF ADJUSTMENTS
   ===================== */
.bookshelf {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px; /* більший gap для нової структури */
  padding: 30px 20px 40px;
  background: var(--wood-color);
  border-radius: 4px;
  border-bottom: 15px solid var(--wood-dark);
  box-shadow:
    inset 0 10px 20px rgba(0, 0, 0, 0.2),
    0 15px 30px var(--shelf-shadow);
}

/* =====================
   RESPONSIVE
   ===================== */
@media (max-width: 768px) {
  .hero-photo-container {
    width: 240px;
  }
  
  .hero-quote-word {
    font-size: 2.2rem;
  }
  
  .book-with-quote {
    max-width: 140px;
  }
  
  .bookshelf {
    gap: 20px;
  }
  
  .book-quote-block {
    padding: 10px;
  }
  
  .book-quote-text {
    font-size: 0.85rem;
  }
}
```

---

## ЗАВДАННЯ 9: ВИДАЛИТИ ЗАСТАРІЛИЙ КОД

### З `data.js`:
```javascript
// ❌ ВИДАЛИТИ:
export const shelfDividerQuotes = { ... };
```

### З `pages/index.js`:
```javascript
// ❌ ВИДАЛИТИ імпорт:
import { 
  authorData, 
  shelves, 
  heroData, 
  translations,
  shelfDividerQuotes,  // ← ВИДАЛИТИ
  articlesData,
  reviewsData
} from '../data';

// ❌ ВИДАЛИТИ весь блок рендерингу:
{shelfDividerQuotes[shelf.id] && (
  <div className="shelf-divider-quotes-list">
    ...
  </div>
)}
```

### З `styles/globals.css`:
```css
/* ❌ ВИДАЛИТИ (якщо не використовується): */
.shelf-divider-quotes-list { ... }
.shelf-divider-quote { ... }
.divider-quote-content { ... }
.divider-quote-text { ... }
.divider-quote-footer { ... }
.divider-quote-position { ... }
```

---

## ЗАВДАННЯ 10: ІНФОРМАЦІЯ ПРО ВИДАННЯ КНИГИ 01

### Додати поле `edition` та `editionInfo`:

```javascript
{
  id: "01-rejected-by-homeland",
  title: { ru: "Отвергнутые родиной", de: "Von der Heimat verleugnet", en: "Rejected by the Homeland" },
  year: 2011,
  edition: { 
    ru: "3-е издание", 
    de: "3. Auflage", 
    en: "3rd edition" 
  },
  editionInfo: {
    ru: "Первое издание: 2007 г.\nВторое издание: 2008 г.\nТретье издание: 2011 г.",
    de: "Erste Auflage: 2007\nZweite Auflage: 2008\nDritte Auflage: 2011",
    en: "First edition: 2007\nSecond edition: 2008\nThird edition: 2011"
  },
  // ... решта полів
}
```

Відобразити `editionInfo` у модальному вікні або під назвою книги.

---

## ПІДСУМКОВИЙ CHECKLIST

### `data.js`:
- [ ] Додати `home` до `translations[lang].nav`
- [ ] Додати нову книгу `02-von-der-heimat-verleugnet-deutsch`
- [ ] Виправити `pdfWeb` для книги 04
- [ ] Додати `quotes` до книг: 01 (2 цитати), 03 (1 цитата), 09 (1 цитата)
- [ ] Додати `edition` та `editionInfo` до книги 01
- [ ] Оновити `shelves` — тепер 6 книг у shelf-1
- [ ] Видалити `export const shelfDividerQuotes`

### `pages/index.js`:
- [ ] Додати `id="hero"` до hero section
- [ ] Додати пункт "home" у navbar
- [ ] Переробити hero section: фото → цитата → опис
- [ ] Обернути перше слово цитати в `<span className="hero-quote-word">`
- [ ] Видалити імпорт `shelfDividerQuotes`
- [ ] Видалити код рендерингу `shelf-divider-quotes-list`
- [ ] Додати новий код рендерингу `book-with-quote`

### `pages/_document.js`:
- [ ] Додати `<link>` на Google Font `Cormorant Garamond`

### `styles/globals.css`:
- [ ] Додати `@import` для Google Font
- [ ] Додати `.hero-quote-word`
- [ ] Додати `.hero-photo-container`
- [ ] Додати `.book-with-quote` та всі пов'язані класи
- [ ] Зменшити відступи в `.section-card`, `.hero-card`, `.hero-description p`
- [ ] Яскравіші кольори тексту
- [ ] Видалити застарілі класи `shelf-divider-*`

---

## ОЧІКУВАНИЙ РЕЗУЛЬТАТ

**Hero Section:**
```
┌──────────────────────────────────────┐
│    [Фото Генрієтти Ґьоте 300px]     │
│                                      │
│       «Потрясение»                   │ ← декоративний шрифт 2.8rem
│   "По прочтении книг Генриетты       │
│   Львовны Гётте"                     │
│   — А. Яковлев, 2017                 │
│                                      │
│   [4 параграфи опису автора]         │
└──────────────────────────────────────┘
```

**Полиця з книгами:**
```
┌─────────────────────────────────────┐
│ Рegal 1                             │
│                                     │
│  ┌─────────┐  ┌─────────┐          │
│  │ Цитата  │  │ Цитата  │          │
│  │ Шевченко│  │ Яковлев │          │
│  └─────────┘  └─────────┘          │
│  ┌─────────┐  ┌─────────┐          │
│  │ Книга 01│  │ Книга 03│          │
│  │ [обкл.] │  │ [обкл.] │          │
│  └─────────┘  └─────────┘          │
│   Назва 01     Назва 03             │
│  (3-е вид.)   (2024)                │
└─────────────────────────────────────┘
```

---

**ГОТОВО! Всі завдання описані детально з конкретними прикладами коду.**
