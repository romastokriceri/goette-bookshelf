// Данные о книгах
export const booksData = [
  {
    id: "01-rejected-by-homeland",
    title: { ru: "Отвергнутые родиной", de: "Von der Heimat verleugnet" },
    year: 2011,
    cover: "01-rejected-by-homeland-2011_1.webp",
    pdfWeb: "01-rejected-by-homeland-2011_144dpi_85%_rgb_web.pdf",
    pdfFull: "01-rejected-by-homeland-2011.pdf",
    size: "13.77 MB",
    fullSize: "~40 MB"
  },
  {
    id: "03-memory-cruise",
    title: { ru: "Круиз памяти", de: "Gedächtniskreuzfahrt" },
    year: 2024,
    cover: "03-memory-cruise-2024_1.webp",
    pdfWeb: "03-memory-cruise-2024_144dpi_75%_rgb_web.pdf",
    pdfFull: "03-memory-cruise-2024.pdf",
    size: "3 MB",
    fullSize: "37.01 MB"
  },
  {
    id: "04-german-trace-nikolayev",
    title: { ru: "Немецкий след в Николаеве", de: "Deutsche Spuren in Nikolajew" },
    year: 2009,
    cover: "04-german-trace-nikolayev-2009_1.webp",
    pdfWeb: "04-german-trace-nikolayev-2009_web.pdf",
    pdfFull: "04-german-trace-nikolayev-2009.pdf",
    size: "2.58 MB",
    fullSize: "2.59 MB"
  },
  {
    id: "05-tribute-to-memory",
    title: { ru: "Дань памяти", de: "Tribut an die Erinnerung" },
    year: 2011,
    cover: "05-tribute-to-memory-2011_1.webp",
    pdfWeb: "05-tribute-to-memory-2011_web.pdf",
    pdfFull: "05-tribute-to-memory-2011.pdf",
    size: "3.39 MB",
    fullSize: "3.45 MB"
  },
  {
    id: "06-swiss-colony-shabo",
    title: { ru: "Швейцарская колония Шабо", de: "Schweizer Kolonie Schabo" },
    year: 2024,
    cover: "06-swiss-colony-shabo-2024_1.webp",
    pdfWeb: "06-swiss-colony-shabo-2024_144dpi_75%_rgb_web.pdf",
    pdfFull: "06-swiss-colony-shabo-2024.pdf",
    size: "1.34 MB",
    fullSize: "20.98 MB"
  },
  {
    id: "07-st-joseph-church-nikolayev",
    title: { ru: "Костёл Святого Иосифа в Николаеве", de: "St. Joseph Kirche in Nikolajew" },
    year: 2011,
    cover: "07-st-joseph-church-nikolayev-2011_1.webp",
    pdfWeb: "07-st-joseph-church-nikolayev-2011_web.pdf",
    pdfFull: "07-st-joseph-church-nikolayev-2011.pdf",
    size: "1.69 MB",
    fullSize: "1.73 MB"
  },
  {
    id: "09-cossacks-historical-metamorphoses",
    title: { ru: "Казаки: исторические метаморфозы", de: "Kosaken: Historische Metamorphosen" },
    year: 2018,
    cover: "09-cossacks-historical-metamorphoses-2018_1.webp",
    pdfWeb: "09-cossacks-historical-metamorphoses-2018_144dpi_75%_rgb_web.pdf",
    pdfFull: "09-cossacks-historical-metamorphoses-2018.pdf",
    size: "9.1 MB",
    fullSize: "~25 MB"
  },
  {
    id: "10-german-swiss-contribution-18-19c",
    title: { ru: "Немецко-швейцарский вклад XVIII-XIX вв.", de: "Deutsch-Schweizer Beitrag 18.-19. Jh." },
    year: 2024,
    cover: "10-german-swiss-contribution-18-19c_1.webp",
    pdfWeb: "10-german-swiss-contribution-18-19c_144dpi_75%_rgb_web.pdf",
    pdfFull: "10-german-swiss-contribution-18-19c.pdf",
    size: "18.08 MB",
    fullSize: "~50 MB"
  },
  {
    id: "11-in-memory-of-jakowlew",
    title: { ru: "Памяти Яковлева", de: "Zum Gedenken an Jakowlew" },
    year: 2024,
    cover: "11-in-memory-of-jakowlew-2024_1.webp",
    pdfWeb: "11-in-memory-of-jakowlew-2024_web.pdf",
    pdfFull: "11-in-memory-of-jakowlew-2024.pdf",
    size: "3.38 MB",
    fullSize: "3.38 MB"
  },

  {
  id: 12,
  title: { 
    ru: "Николаевский областной краеведческий музей в освещении немецкой истории края", 
    de: "Das Regionalmuseum von Nikolajew im Licht der deutschen Geschichte der Region" 
  },
  year: "2025", // Або інший актуальний рік
  pdfFull: "12-german-history-of-the-region-2026.pdf",
  pdfWeb: "12-german-history-of-the-region-2026_144dpi_75%_rgb.pdf",
  cover: "12-german-history-of-the-region-2026_1.webp",
  size: "18 MB",
  fullSize: "52 MB"
}

];

// Данные об авторе
export const authorData = {
  name: "Генриетта Гётте",
  bio: [
  "Независимый историк и исследователь немецко-швейцарского наследия на территории Украины и Восточной Европы.",
  "Автор документальных исследований о судьбах колонистов, истории Юга Украины, казачества и «белых пятен» XIX–XX веков.",
  "Ее книги основаны на многолетней работе в государственных и кантональных архивах Украины, Германии, Швейцарии и России и посвящены сохранению исторической памяти."
]
};

// Полки с книгами
export const shelves = [
  {
    id: "shelf-1",
    title: "Основные труды",
    books: booksData
  },
  {
    id: "shelf-2",
    title: "", // Пустое название для второй полки
    books: [] // Сюда можно добавить другие книги позже
  }
];

// Контактные данные
export const contactData = {
  email: "contact@example.com",
  location: "Германия" 
};