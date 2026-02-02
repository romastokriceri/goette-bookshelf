// =====================
// TRANSLATIONS
// =====================

export const translations = {
  ru: {
    nav: {
      about: "Об авторе",
      books: "Книги",
      articles: "Статьи",
      reviews: "Отзывы",
      feedback: "Отзывы и обратная связь"
    },
    sections: {
      about: "Об авторе",
      books: "Полка",
      articles: "Статьи",
      reviews: "Отзывы",
      feedback: "Отзывы и обратная связь",
      feedbackDescription: "Поделитесь впечатлениями от исследований, задайте вопросы автору или оставьте слова благодарности."
    },
    buttons: {
      read: "Читать",
      close: "Закрыть"
    },
    hero: {
      title: "Главная"
    },
    articlePlaceholder: "Текст статьи будет добавлен..."
  },
  de: {
    nav: {
      about: "Über den Autor",
      books: "Bücher",
      articles: "Artikel",
      reviews: "Kommentare",
      feedback: "Kommentare und Feedback"
    },
    sections: {
      about: "Über den Autor",
      books: "Regal",
      articles: "Artikel",
      reviews: "Kommentare zum Buch",
      feedback: "Kommentare und Feedback",
      feedbackDescription: "Teilen Sie Ihre Eindrücke von der Forschung, stellen Sie Fragen an den Autor oder hinterlassen Sie Worte der Dankbarkeit."
    },
    buttons: {
      read: "Lesen",
      close: "Schließen"
    },
    hero: {
      title: "Startseite"
    },
    articlePlaceholder: "Der Artikeltext wird hinzugefügt..."
  },
  en: {
    nav: {
      about: "About the Author",
      books: "Books",
      articles: "Articles",
      reviews: "Reviews",
      feedback: "Reviews and Feedback"
    },
    sections: {
      about: "About the Author",
      books: "Shelf",
      articles: "Articles",
      reviews: "Reviews",
      feedback: "Reviews and Feedback",
      feedbackDescription: "Share your impressions of the research, ask questions to the author, or leave words of gratitude."
    },
    buttons: {
      read: "Read",
      close: "Close"
    },
    hero: {
      title: "Main Page"
    },
    articlePlaceholder: "Article text will be added..."
  }
};

// =====================
// BOOKS DATA
// =====================

export const booksData = [
  {
    id: "01-rejected-by-homeland",
    title: { 
      ru: "Отвергнутые родиной", 
      de: "Von der Heimat verleugnet",
      en: "Rejected by the Homeland"
    },
    year: 2011,
    cover: "01-rejected-by-homeland-2011_1.webp",
    pdfWeb: "01-rejected-by-homeland-2011_144dpi_85%_rgb_web.pdf",
    pdfFull: "01-rejected-by-homeland-2011.pdf",
    size: "13.77 MB",
    fullSize: "~40 MB"
  },
  {
    id: "03-memory-cruise",
    title: { 
      ru: "Круиз памяти", 
      de: "Gedächtniskreuzfahrt",
      en: "Memory Cruise"
    },
    year: 2024,
    cover: "03-memory-cruise-2024_1.webp",
    pdfWeb: "03-memory-cruise-2024_144dpi_75%_rgb_web.pdf",
    pdfFull: "03-memory-cruise-2024.pdf",
    size: "3 MB",
    fullSize: "37.01 MB"
  },
  {
    id: "04-german-trace-nikolayev",
    title: { 
      ru: "Немецкий след в Николаеве", 
      de: "Deutsche Spuren in Nikolajew",
      en: "German Traces in Nikolayev"
    },
    year: 2009,
    cover: "04-german-trace-nikolayev-2009_1.webp",
    pdfWeb: "04-german-trace-nikolayev-2009_web.pdf",
    pdfFull: "04-german-trace-nikolayev-2009.pdf",
    size: "2.58 MB",
    fullSize: "2.59 MB"
  },
  {
    id: "05-tribute-to-memory",
    title: { 
      ru: "Дань памяти", 
      de: "Tribut an die Erinnerung",
      en: "Tribute to Memory"
    },
    year: 2011,
    cover: "05-tribute-to-memory-2011_1.webp",
    pdfWeb: "05-tribute-to-memory-2011_web.pdf",
    pdfFull: "05-tribute-to-memory-2011.pdf",
    size: "3.39 MB",
    fullSize: "3.45 MB"
  },
  {
    id: "06-swiss-colony-shabo",
    title: { 
      ru: "Швейцарская колония Шабо", 
      de: "Schweizer Kolonie Schabo",
      en: "Swiss Colony of Shabo"
    },
    year: 2024,
    cover: "06-swiss-colony-shabo-2024_1.webp",
    pdfWeb: "06-swiss-colony-shabo-2024_144dpi_75%_rgb_web.pdf",
    pdfFull: "06-swiss-colony-shabo-2024.pdf",
    size: "1.34 MB",
    fullSize: "20.98 MB"
  },
  {
    id: "07-st-joseph-church-nikolayev",
    title: { 
      ru: "Костёл Святого Иосифа в Николаеве", 
      de: "St. Joseph Kirche in Nikolajew",
      en: "St. Joseph Church in Nikolayev"
    },
    year: 2011,
    cover: "07-st-joseph-church-nikolayev-2011_1.webp",
    pdfWeb: "07-st-joseph-church-nikolayev-2011_web.pdf",
    pdfFull: "07-st-joseph-church-nikolayev-2011.pdf",
    size: "1.69 MB",
    fullSize: "1.73 MB"
  },
  {
    id: "09-cossacks-historical-metamorphoses",
    title: { 
      ru: "Казаки: исторические метаморфозы", 
      de: "Kosaken: Historische Metamorphosen",
      en: "Cossacks: Historical Metamorphoses"
    },
    year: 2018,
    cover: "09-cossacks-historical-metamorphoses-2018_1.webp",
    pdfWeb: "09-cossacks-historical-metamorphoses-2018_144dpi_75%_rgb_web.pdf",
    pdfFull: "09-cossacks-historical-metamorphoses-2018.pdf",
    size: "9.1 MB",
    fullSize: "~25 MB"
  },
  {
    id: "10-german-swiss-contribution-18-19c",
    title: { 
      ru: "Немецко-швейцарский вклад XVIII-XIX вв.", 
      de: "Deutsch-Schweizer Beitrag 18.-19. Jh.",
      en: "German-Swiss Contribution 18th-19th Centuries"
    },
    year: 2024,
    cover: "10-german-swiss-contribution-18-19c_1.webp",
    pdfWeb: "10-german-swiss-contribution-18-19c_144dpi_75%_rgb_web.pdf",
    pdfFull: "10-german-swiss-contribution-18-19c.pdf",
    size: "18.08 MB",
    fullSize: "~50 MB"
  },
  {
    id: "11-in-memory-of-jakowlew",
    title: { 
      ru: "Памяти Яковлева", 
      de: "Zum Gedenken an Jakowlew",
      en: "In Memory of Yakovlev"
    },
    year: 2024,
    cover: "11-in-memory-of-jakowlew-2024_1.webp",
    pdfWeb: "11-in-memory-of-jakowlew-2024_web.pdf",
    pdfFull: "11-in-memory-of-jakowlew-2024.pdf",
    size: "3.38 MB",
    fullSize: "3.38 MB"
  },
  {
    id: "12-german-history-of-the-region",
    title: { 
      ru: "Николаевский областной краеведческий музей в освещении немецкой истории края", 
      de: "Das Regionalmuseum von Nikolajew im Licht der deutschen Geschichte der Region",
      en: "Nikolayev Regional Museum in the Light of the German History of the Region"
    },
    year: "2025",
    pdfFull: "12-german-history-of-the-region-2026.pdf",
    pdfWeb: "12-german-history-of-the-region-2026_144dpi_75%_rgb_web.pdf",
    cover: "12-german-history-of-the-region-2026_1.webp",
    size: "18 MB",
    fullSize: "52 MB"
  }
];

// =====================
// SHELVES (2 полки)
// =====================

export const shelves = [
  {
    id: "shelf-1",
    books: booksData.slice(0, 5)
  },
  {
    id: "shelf-2",
    books: booksData.slice(5)
  }
];

// =====================
// SHELF DIVIDER QUOTE
// =====================

export const shelfDividerQuote = {
  text: {
    ru: "Потрясение. По прочтении книг Генриетты Львовны Гётте.",
    de: "Erschütterung. Nach der Lektüre der Bücher von Henriette Lwowna Goette.",
    en: "A shock. After reading the books of Henriette Lvovna Goette."
  },
  author: {
    ru: "А. Яковлев, 2017",
    de: "A. Jakowlew, 2017",
    en: "A. Yakovlev, 2017"
  },
  position: {
    ru: "Историк, директор Основского музея при винсовхозе «Таврия»",
    de: "Historiker, Direktor des Osnowa-Museums beim Weingut „Tavrija"",
    en: "Historian, Director of the Osnowa Museum at the Tavria Winery"
  }
};

// =====================
// ARTICLES DATA
// =====================

export const articlesData = [
  {
    id: "mazepa",
    title: {
      ru: "Иван Степанович Мазепа-Колединский – олицетворение эпоса украинского духовного возрождения казачества",
      de: "Iwan Stepanowitch Masepa-Koledinskij – die Verkörperung des Epos von der ukrainischen spirituellen Wiedergeburt der Kosaken",
      en: "Ivan Stepanovich Mazepa-Kaledinsky is the embodiment of the epic of the Ukrainian spiritual revival of the Cossacks"
    },
    preview: {
      ru: "", // ЗАПОВНИТИ: 3-4 речення для картки
      de: "",
      en: ""
    },
    fullText: {
      ru: "", // ЗАПОВНИТИ: повний текст з форматуванням <p>, <em>, <strong>
      de: "",
      en: ""
    }
  },
  {
    id: "pugachev",
    title: {
      ru: "Народное движение в России под предводительством Емельяна Ивановича Пугачёва",
      de: "Eine Volksbewegung in Russland unter der Führung von Emeljan Iwanowitsch Pugachew",
      en: "The national movement in Russia led by Yemelyan Ivanovich Pugachev"
    },
    preview: {
      ru: "", // ЗАПОВНИТИ
      de: "",
      en: ""
    },
    fullText: {
      ru: "", // ЗАПОВНИТИ
      de: "",
      en: ""
    }
  },
  {
    id: "civil-war",
    title: {
      ru: "Гражданская война на юге России. Северная Таврия – земля казацкой трагедии",
      de: "Der Bürgerkrieg im Süden Russlands. Nordtaurien – das Land der Kosakentragödie",
      en: "The Civil War in the South of Russia. Northern Tavria: the Land of the Cossack tragedy"
    },
    preview: {
      ru: "", // ЗАПОВНИТИ
      de: "",
      en: ""
    },
    fullText: {
      ru: "", // ЗАПОВНИТИ
      de: "",
      en: ""
    }
  }
];

// =====================
// REVIEWS DATA
// =====================

export const reviewsData = [
  {
    id: "review-1",
    bookTitle: {
      ru: "📘 Отвергнутые родиной. 3-е издание, 2011",
      de: "📘 Von der Heimat verleugnet. 3. Auflage, 2011",
      en: "📘 Rejected by the Homeland. 3rd edition, 2011"
    },
    items: [
      {
        text: {
          ru: "Стр. 507-508 (в книге)",
          de: "S. 507-508 (im Buch)",
          en: "P. 507-508 (in the book)"
        }
      },
      {
        text: {
          ru: "Анатолий Недiлько. Основські хроніки: краєзнавчий, історичний, культурологічний та науково-популярний збірник // Зб. статей/ Вид. А. Г. Неділько. с. Основа, 2012, С. 31-32.",
          de: "Chroniken von Osnowa: lokale Überlieferung, historische, kulturelle und populärwissenschaftliche Sammlung // Sammelband von Artikeln, Hg. von A. G. Nedilko. Osnowa, S. 31-32, 2012.",
          en: "Anatoly Nedilko. Osnowa Chronicles: local history, historical, cultural and popular science collection // Collection of articles / Ed. A. G. Nedilko. Osnowa, 2012, pp. 31-32."
        }
      }
    ]
  },
  {
    id: "review-2",
    bookTitle: {
      ru: "Von der Heimat verleugnet (deutsch), 2008",
      de: "Von der Heimat verleugnet (deutsch), 2008",
      en: "Von der Heimat verleugnet (German), 2008"
    },
    items: [
      {
        text: {
          ru: "Kommentare auf der Rückseite des Buches. Отзывы на обратной стороне обложки.",
          de: "Kommentare auf der Rückseite des Buches.",
          en: "Comments on the back of the book."
        }
      }
    ]
  },
  {
    id: "review-3",
    bookTitle: {
      ru: "📘 Круиз памяти. 2-е издание, 2024",
      de: "📘 Eine Reise zu den Erinnerungen. 2. Auflage, 2024",
      en: "📘 Memory Cruise. 2nd edition, 2024"
    },
    items: [
      {
        text: {
          ru: "Стр. 43 (в книге)",
          de: "S. 43 (im Buch)",
          en: "P. 43 (in the book)"
        }
      },
      {
        quote: "Ich habe noch nie einen solchen Bericht gehört oder gelesen wie Henriette Lvovna Goettes „Die Reise zu den Erinnerungen".",
        author: "A. Jakowlew, 2009"
      }
    ]
  },
  {
    id: "review-4",
    bookTitle: {
      ru: "КАЗАЧЕСТВО. Исторические метаморфозы, 2018",
      de: "Die Kosaken. Historische Metamorphosen, 2018",
      en: "THE COSSACKS. Historical Metamorphoses, 2018"
    },
    items: [
      {
        text: {
          ru: "Стр. 456-457 (в книге)",
          de: "S. 456-457 (im Buch)",
          en: "P. 456-457 (in the book)"
        }
      },
      {
        quote: "Das Buch von Henriette Lwowna Goette \"Kosaken. Historische Metamorphosen\" ist das beste bis heute veröffentlichte Buch über Kosaken. Es wäre ein gutes Lehrbuch für Kosaken-Lyzeen.",
        author: "A. Jakowlew, 2018"
      }
    ]
  }
];

// =====================
// AUTHOR DATA
// =====================

export const authorData = {
  name: "Генриетта Гётте",
  photo: "author/henrietta-goette.webp",
  bio: [
    "Автору книг, Генриетте Гётте, судьбою была уготовлена полная трагизма жизнь: война, разлука с родителями,",
    "детские дома, лишения, унижения, радость воссоединения семьи, учёба, работа в Советском Союзе, переезд в Германию, снова учёба и адаптация на новой родине.",
    "После смерти её родителей в 2002 году она начала собирать документальный материал о событиях, проходивших в XIX-XX столетиях.",
    "Все они нашли отражение в истории пяти поколений автора.",
    "В период публикаций работ Генриетты Гётте на сайте Academia-Prämium (Academia.edu) с 2021 по 2024 годы",
    "имя автора цитировалось учёными различных университетов.",
    "В 565 научных работах на Academia.edu упоминается автор «Генриетта Гётте».",
    "Были загружены научные труды по историографии и статьи конференций с упоминанием работ Генриетты Гётте,",
    "внёсшей ценный вклад в историческую литературу."
  ]
};

// =====================
// HERO DATA
// =====================

export const heroData = {
  quote: {
    text: "«Потрясение. По прочтении книг Генриетты Львовны Гётте».",
    author: "А. Яковлев, 2017",
    position: "Историк, директор Основского музея при винсовхозе «Таврия»"
  },
  description: [
    "Генриетта Гётте – независимый исследователь, автор книг, основанных на исторических документах из архивов и библиотек Одессы, Херсона, Николаева, Измаила, Симферополя, Санкт-Петербурга, Москвы, Саратова, Иркутска, а также документов из швейцарских архивов Цюриха, Во (Vaud) и Арговия (Аарау), общины Оберкульм, документов из немецких Государственных и Военных архивов (Bundesarchiv, Militärarchiv) и библиотек.",
    "В период публикаций работ Генриетты Гётте на сайте Academia-Prämium (Academia.edu) с 2021 по 2024 годы имя автора цитировалось учёными различных университетов. В 565 научных работах на Academia.edu упоминается автор «Генриетта Гётте».",
    "Были загружены научные труды по историографии и статьи конференций с упоминанием работ Генриетты Гётте, внёсшей ценный вклад в историческую литературу."
  ]
};