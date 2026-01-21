# goette-bookshelf
Express  presentation for customer 

# Витягти першу сторінку як PNG
pdftoppm -png -f 1 -l 1 -scale-to 400 book.pdf cover
```

---

## 📐 Оптимальні параметри обкладинки

### Розміри зображення:

**Для книги на полиці (вертикальна орієнтація):**
- Ширина: **300-400px**
- Висота: **400-550px**
- Співвідношення: ~3:4 (як справжня книга)
- Формат: **WebP** (менший розмір при тій самій якості)
- Вага: **150-300KB** (баланс якість/швидкість)

**Чому саме такі розміри:**
- 400px ширина × 2 (Retina) = 800px реальна ширина
- Достатньо для чіткості на будь-якому екрані
- Не перевантажує трафік

---

## ☁️ Зберігання обкладинок: Cloudflare R2

### Чи можна зберігати обкладинки на Cloudflare R2?

**✅ ТАК, і це ідеальний варіант!**

### Структура файлів на R2:
```
R2 Bucket: henrietta-gotte-library/

├── covers/                    (обкладинки)
│   ├── quantum-computing.webp      (250KB)
│   ├── ai-ethics.webp              (180KB)
│   ├── digital-transformation.webp (220KB)
│   └── ...
│
├── pdfs/                      (повні PDF)
│   ├── quantum-computing.pdf       (5MB)
│   ├── ai-ethics.pdf               (2MB)
│   └── ...
```

---

## ⚡ Чи будуть затримки?

### Короткая відповідь: **НІ, затримок не буде**

### Детально:

**1. Cloudflare R2 + CDN = миттєве завантаження**
```
Користувач відкриває сайт
   ↓
Браузер запитує обкладинку (300KB WebP)
   ↓
Cloudflare CDN віддає з найближчого серверу
   ↓
Завантаження 0.3-0.8 секунди (залежно від інтернету)
   ↓
Обкладинка з'являється на полиці ✅

Техніка 1: Lazy Loading (ледаче завантаження)
jsx<img 
  src={coverUrl} 
  loading="lazy"  // Завантажується тільки коли книга видима
  alt="Обкладинка книги"
/>
Результат: Обкладинки завантажуються тільки коли користувач доскролює до полиці.

Техніка 2: Placeholder (заглушка під час завантаження)
jsxconst Book = ({ book }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="book-spine">
      {!imageLoaded && (
        <div className="placeholder-gradient">
          {/* Кольоровий градієнт доки завантажується */}
        </div>
      )}
      
      <img
        src={book.coverUrl}
        onLoad={() => setImageLoaded(true)}
        style={{ opacity: imageLoaded ? 1 : 0 }}
        alt={book.title}
      />
    </div>
  );
};
Результат: Спочатку показується кольоровий блок, потім плавно з'являється обкладинка.

Техніка 3: WebP з JPG fallback
jsx<picture>
  <source srcSet={book.coverWebP} type="image/webp" />
  <source srcSet={book.coverJPG} type="image/jpeg" />
  <img src={book.coverJPG} alt={book.title} />
</picture>
Результат: Сучасні браузери завантажують WebP (швидше), старі — JPG.

Техніка 4:Preload важливих обкладинок
html<!-- У <head> сторінки -->
<link rel="preload" as="image" href="covers/quantum-computing.webp" />
<link rel="preload" as="image" href="covers/ai-ethics.webp" />
Результат: Перші 2-3 обкладинки завантажуються ще до того, як користувач доскролить.

Структура даних:
javascriptconst booksData = [
  {
    id: 'quantum-computing',
    title: 'Квантовые вычисления',
    coverUrl: 'https://r2.henriettagotte.com/covers/quantum-computing.webp',
    coverFallback: 'https://r2.henriettagotte.com/covers/quantum-computing.jpg',
    pdfUrl: 'quantum-computing.pdf',
    // ...
  },
];
Компонент книги з обкладинкою:
jsxconst Book = ({ book, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="book-wrapper" onClick={() => onClick(book)}>
      <div className="book-spine">
        {/* Градієнт-заглушка */}
        {!imageLoaded && (
          <div className="cover-placeholder" />
        )}
        
        {/* Реальна обкладинка */}
        <picture>
          <source srcSet={book.coverUrl} type="image/webp" />
          <source srcSet={book.coverFallback} type="image/jpeg" />
          <img
            src={book.coverFallback}
            alt={`Обкладинка: ${book.title}`}
            className="book-cover"
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            style={{ 
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease'
            }}
          />
        </picture>

        {/* Назва книги поверх обкладинки (якщо потрібно) */}
        <div className="book-title-overlay">
          {book.title}
        </div>
      </div>
    </div>
  );
};
CSS для обкладинок:
css.book-spine {
  position: relative;
  width: 210px;
  height: 280px;
  overflow: hidden;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  transition: transform 0.2s ease;
}

.book-spine:hover {
  transform: translateY(-10px);
}

.cover-placeholder {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.book-cover {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Обкладинка заповнює весь простір */
}

.book-title-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: white;
  padding: 1rem 0.5rem 0.5rem;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
}

 Покрокова інструкція
Крок 1: Підготувати обкладинки
bash# Для кожної книги:
1. Відкрити ilovepdf.com/pdf_to_jpg
2. Завантажити PDF
3. Вибрати "Extract only first page"
4. Скачати JPG
5. Відкрити squoosh.app
6. Завантажити JPG → конвертувати в WebP (якість 85%)
7. Скачати quantum-computing.webp (250KB)
Крок 2: Завантажити на Cloudflare R2
bash# У Cloudflare Dashboard:
1. R2 → Ваш bucket → Upload
2. Створити папку "covers"
3. Завантажити всі .webp файли
4. Налаштувати Public Access (або Signed URLs)
```

### Крок 3: Отримати URL
```
Приклад URL:
https://pub-xxxxx.r2.dev/covers/quantum-computing.webp
Крок 4: Вставити в код
javascriptconst booksData = [
  {
    id: 'quantum-computing',
    title: 'Квантовые вычисления',
    coverUrl: 'https://pub-xxxxx.r2.dev/covers/quantum-computing.webp',
    // ...
  },
];
