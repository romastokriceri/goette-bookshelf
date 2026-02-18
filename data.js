// data.js

// =====================
// HERO DATA (RESTORED & ACTIVE)
// =====================
// Використано відновлену версію з точним переліком архівів та цитатою Яковлева
export const heroData = {
  quote: {
    text: {
      ru: "«Потрясение. По прочтении книг Генриетты Львовны Гётте».",
      de: "„Man ist erschüttert beim Lesen der Bücher von Henriette Lwowna Goette“.",
      en: "“Reading the books written by Henriette Lvovna Goette leaves you shaken”."
    },
    author: {
      ru: "А. Яковлев, 2017",
      de: "Jakovlev, 2017",
      en: "A. Yakovlev, 2017"
    },
    position: {
      ru: "Историк, директор Основского музея при винсовхозе «Таврия»",
      de: "Historiker, Direktor des Osnovsky-Museums auf dem Weingut Tavriya",
      en: "Historian, director of the Osnovsky museum at the “Tavriya” wine farm"
    }
  },
  description: {
    ru: [
      "Генриетта Гётте – независимый исследователь, автор книг, основанных на исторических документах из архивов и библиотек Одессы, Херсона, Николаева, Измаила, Симферополя, Санкт-Петербурга, Москвы, Саратова, Иркутска, а также документов из швейцарских архивов Во (Vaud) и Арговия (Aarau), общины Оберкульм, документов из немецких Государственных и Военных архивов (Bundesarchiv, Militärarchiv) и библиотек.",
      "В период публикаций работ Генриетты Гётте на сайте Academia-Prämium (Academia.edu) с 2021 по 2024 годы имя автора цитировалось учёными различных университетов. В 565 научных работах на Academia.edu упоминается автор «Генриетта Гётте». Были загружены научные труды по историографии и статьи конференций с упоминанием работ Генриетты Гётте, внёсшей ценный вклад в историческую литературу."
    ],
    de: [
      "Henriette Goette ist eine unabhängige Forscherin und Autorin von Büchern, die auf historischen Dokumenten aus Archiven und Bibliotheken von Odessa, Cherson, Nikolajew, Izmail, Simferopol, St. Petersburg, Moskau, Saratow, Irkutsk, sowie Dokumenten aus den Schweizer Archiven der Kantone Vaud und Argovie (Aarau), der Gemeinde Oberkulm, Dokumenten aus deutschen Staats- und Militärarchiv (Bundesarchiv, Militärarchiv) und Bibliotheken basieren.",
      "Während der Veröffentlichung der Werke von Henriette Goette auf der Website des Academia-Prämiums (Academia.edu) von 2021 bis 2024 wurde der Name der Autorin von Wissenschaftlern verschiedener Universitäten zitiert. Die Autorin „Henriette Goette“ wird in 565 wissenschaftlichen Arbeiten auf Academia.edu erwähnt. Mit ihren Werken, wissenschaftlichen Abhandlungen zur Geschichtsschreibung und Konferenzbeiträgen hat sie einen wertvollen Beitrag zur historischen Literatur geleistet."
    ],
    en: [
      "Henrietta Goethe is an independent researcher, the author of books based on historical documents from the archives and libraries of Odessa, Kherson, Nikolaev, Izmail, Simferopol, St. Petersburg, Moscow, Saratov, Irkutsk, as well as documents from the Swiss archives of Zurich, Vaud and Argovia, the community of Oberkulm, documents from German State and Military Archives (Bundesarchiv, Militararchiv) and libraries.",
      "During the publication of Henriette Goette’s works on the Academia-Prämium website (Academia.edu) from 2021 to 2024, her name was cited by scholars from various universities. The author “Henriette Goette” is mentioned in 565 academic papers on Academia.edu. Through her works, historiographic studies and conference articles, she has made a valuable contribution to historical literature."
    ]
  }
};

// =====================
// TRANSLATIONS
// =====================
export const translations = {
  ru: {
    nav: { home: "Главная", about: "Об авторе", books: "Книги", articles: "Статьи", reviews: "Отзывы", feedback: "Обратная связь" },
    sections: {
      about: "Об авторе",
      books: "Полка",
      articles: "Статьи",
      reviews: "Отзывы",
      feedback: "Обратная связь",
      feedbackDescription: "Поделитесь впечатлениями от исследований, задайте вопросы автору или оставьте слова благодарности."
    },
    buttons: {
      read: "Читать",
      close: "Закрыть",
      readMore: "Развернуть ↓",
      readLess: "Скрыть ↑",
      readFull: "Читать полностью"
    },
    hero: { title: "Главная" },
    articlePlaceholder: "Текст будет добавлен..."
  },
  de: {
    nav: { home: "Startseite", about: "Über den Autor", books: "Bücher", articles: "Artikel", reviews: "Kommentare", feedback: "Feedback" },
    sections: {
      about: "Über den Autor",
      books: "Regal",
      articles: "Artikel",
      reviews: "Kommentare zum Buch",
      feedback: "Feedback",
      feedbackDescription: "Teilen Sie Ihre Eindrücke von der Forschung, stellen Sie Fragen an den Autor oder hinterlassen Sie Worte der Dankbarkeit."
    },
    buttons: {
      read: "Lesen",
      close: "Schließen",
      readMore: "Weiterlesen ↓",
      readLess: "Verbergen ↑",
      readFull: "Vollständig lesen"
    },
    hero: { title: "Startseite" },
    articlePlaceholder: "Der Text wird hinzugefügt..."
  },
  en: {
    nav: { home: "Home", about: "About the Author", books: "Books", articles: "Articles", reviews: "Reviews", feedback: "Feedback" },
    sections: {
      about: "About the Author",
      books: "Shelf",
      articles: "Articles",
      reviews: "Reviews",
      feedback: "Feedback",
      feedbackDescription: "Share your impressions of the research, ask questions to the author, or leave words of gratitude."
    },
    buttons: {
      read: "Read",
      close: "Close",
      readMore: "Read more ↓",
      readLess: "Hide ↑",
      readFull: "Read full review"
    },
    hero: { title: "Main Page" },
    articlePlaceholder: "Text will be added..."
  }
};

// =====================
// BOOKS DATA
// =====================
export const booksData = [
  {
    id: "01-rejected-by-homeland",
    shelfLabel: { ru: "Отвергнутые родиной · 1-е изд. 2007 · 2-е изд. 2008 · 3-е изд. 2011", de: "Von der Heimat verleugnet · 1. Aufl. 2007 · 2. Aufl. 2008 · 3. Aufl. 2011", en: "Rejected by the Homeland · 1st ed. 2007 · 2nd ed. 2008 · 3rd ed. 2011" },
    title: { ru: "Отвергнутые родиной", de: "Von der Heimat verleugnet", en: "Rejected by the Homeland" },
    year: 2011,
    cover: "01-rejected-by-homeland-2011_1.webp",
    pdfWeb: "01-rejected-by-homeland-2011_144dpi_85%_rgb_web.pdf",
    pdfFull: "01-rejected-by-homeland-2011.pdf",
    size: "13.77 MB",
    fullSize: "~40 MB"
  },
  {
    id: "02-von-der-heimat-verleugnet",
    shelfLabel: { ru: "Отвергнутые родиной (нем.) · Перевод 2-го изд. 2008", de: "Von der Heimat verleugnet · Übersetzung der 2. Auflage 2008", en: "Rejected by the Homeland (German) · Translation of the 2nd ed. 2008" },
    title: { ru: "Отвергнутые родиной (немецкое издание)", de: "Von der Heimat verleugnet", en: "Rejected by the Homeland (German edition)" },
    year: 2011,
    cover: "02-von-der-heimat-verleugnet-deutsch_1.webp",
    pdfWeb: "02-von-der-heimat-verleugnet-deutsch_144dpi_75%_rgb_web.pdf",
    pdfFull: "02-von-der-heimat-verleugnet-deutsch_144dpi_75%_rgb_web.pdf",
    size: "13 MB",
    fullSize: "13 MB"
  },
  {
    id: "03-memory-cruise",
    shelfLabel: { ru: "Круиз памяти · 1-е изд. 2009 · 2-е изд. 2024", de: "Eine Reise zu den Erinnerungen · 1. Aufl. 2009 · 2. Aufl. 2024", en: "Memory Cruise · 1st ed. 2009 · 2nd ed. 2024" },
    title: { ru: "Круиз памяти", de: "Die Reise zu den Erinnerungen", en: "Memory Cruise" },
    year: 2024,
    cover: "03-memory-cruise-2024_1.webp",
    pdfWeb: "03-memory-cruise-2024_144dpi_75%_rgb_web.pdf",
    pdfFull: "03-memory-cruise-2024.pdf",
    size: "3 MB",
    fullSize: "37.01 MB"
  },
  {
    id: "04-german-trace-nikolayev",
    shelfLabel: { ru: "Немецкий след в истории Николаевщины · 2009", de: "Deutsche Spuren in der Geschichte der Region Nikolajew · 2009", en: "The German trace in the history of Nykolaev region · 2009" },
    title: { ru: "Немецкий след в истории Николаевщины", de: "Deutsche Spuren in der Geschichte der Region Nikolajew", en: "The German trace in the history of Nykolaev region" },
    year: 2009,
    cover: "04-german-trace-nikolayev-2009_1.webp",
    pdfWeb: "04-german-trace-nikolayev-2009_web_144dpi_75%_rgb_web.pdf",
    pdfFull: "04-german-trace-nikolayev-2009.pdf",
    size: "2.58 MB",
    fullSize: "2.59 MB"
  },
  {
    id: "05-tribute-to-memory",
    shelfLabel: { ru: "Дань памяти, встречи у истоков · 2011", de: "Dem Gedenken verpflichtet. Begegnungen an den Quellen · 2011", en: "Tribute to memory, Meetings at the origins · 2011" },
    title: { ru: "Дань памяти, встречи у истоков", de: "Dem Gedenken verpflichtet. Begegnungen an den Quellen", en: "Tribute to memory, Meetings at the origins" },
    year: 2011,
    cover: "05-tribute-to-memory-2011_1.webp",
    pdfWeb: "05-tribute-to-memory-2011_web.pdf",
    pdfFull: "05-tribute-to-memory-2011.pdf",
    size: "3.39 MB",
    fullSize: "3.45 MB"
  },
  {
    id: "06-swiss-colony-shabo",
    shelfLabel: { ru: "Документальная история образования швейцарской колонии «Шабо» · 2024", de: "Dokumentierte Geschichte der Gründung der Schweizer Kolonie „Schabo“ · 2024", en: "A documentary history of the Swiss colony of Shabo · 2024" },
    title: { ru: "Документальная история образования швейцарской колонии «Шабо» в Российской империи. Её основатель – Луи Винсент Тардан", de: "Dokumentierte Geschichte der Gründung der Schweizer Kolonie „Schabo“ im Russischen Reich. Ihr Gründer Louis Vincent Tardan", en: "A documentary history of the Swiss colony of Shabo in the Russian Empire. Its founder is Louis Vincent Tardan" },
    year: 2024,
    cover: "06-swiss-colony-shabo-2024_1.webp",
    pdfWeb: "06-swiss-colony-shabo-2024_144dpi_75%_rgb_web.pdf",
    pdfFull: "06-swiss-colony-shabo-2024.pdf",
    size: "1.34 MB",
    fullSize: "20.98 MB"
  },
  {
    id: "07-st-joseph-church-nikolayev",
    shelfLabel: { ru: "Николаевская римско-католическая церковь Святого Иосифа · 2011", de: "Die Römisch-katholische Kirche St. Joseph in Nikolajew · 2011", en: "St. Joseph's Roman Catholic Church in Nikolaev · 2011" },
    title: { ru: "Николаевская римско-католическая церковь Святого Иосифа", de: "Die Römisch-katholische Kirche St. Joseph in Nikolajew", en: "St. Joseph's Roman Catholic Church in Nikolaev" },
    year: 2011,
    cover: "07-st-joseph-church-nikolayev-2011_1.webp",
    pdfWeb: "07-st-joseph-church-nikolayev-2011_web.pdf",
    pdfFull: "07-st-joseph-church-nikolayev-2011.pdf",
    size: "1.69 MB",
    fullSize: "1.73 MB"
  },
  {
    id: "09-cossacks-historical-metamorphoses",
    shelfLabel: { ru: "Казачество. Исторические метаморфозы · 2018", de: "Die Kosaken. Historische Metamorphosen · 2018", en: "The Cossacks. Historical Metamorphoses · 2018" },
    title: { ru: "Казачество. Исторические метаморфозы", de: "Die Kosaken. Historische Metamorphosen", en: "The Cossacks. Historical Metamorphoses" },
    year: 2018,
    cover: "09-cossacks-historical-metamorphoses-2018_1.webp",
    pdfWeb: "09-cossacks-historical-metamorphoses-2018_144dpi_75%_rgb_web.pdf",
    pdfFull: "09-cossacks-historical-metamorphoses-2018.pdf",
    size: "9.1 MB",
    fullSize: "~25 MB"
  },
  {
    id: "10-german-swiss-contribution-18-19c",
    shelfLabel: { ru: "Вклад немцев и швейцарцев в развитие Российской империи · 2022", de: "Der Beitrag von Deutschen und Schweizern zur Entwicklung des Russischen Reiches · 2022", en: "The contribution of Germans and Swiss to the evolution of the Russian Empire · 2022" },
    title: { ru: "Вклад немцев и швейцарцев в развитие Российской империи и их участие в колонизации юга страны в XVIII–XIX веках", de: "Der Beitrag von Deutschen und Schweizern zur Entwicklung des Russischen Reiches und ihre Beteiligung an der Kolonisierung des Südens des Landes im 18.–19. Jahrhundert", en: "The contribution of Germans and Swiss to the evolution of the Russian Empire and their participation in the colonization of the country's South in the 18th and 19th centuries" },
    year: 2022,
    cover: "10-german-swiss-contribution-18-19c_1.webp",
    pdfWeb: "10-german-swiss-contribution-18-19c_144dpi_75%_rgb_web.pdf",
    pdfFull: "10-german-swiss-contribution-18-19c.pdf",
    size: "18.08 MB",
    fullSize: "~50 MB"
  },
  {
    id: "11-in-memory-of-jakowlew",
    shelfLabel: { ru: "В память тех, кого нам не забыть · 2024", de: "Zum Gedenken an die Unvergessenen · 2024", en: "In memory of those we never forget · 2024" },
    title: { ru: "В память тех, кого нам не забыть. Яковлев Анатолий Авенирович (1948-2018) ", de: "Zum Gedenken an die Unvergessenen. Anatoly Awenirowitsch Jakowlev (1948–2018)", en: "In memory of those we never forget. Yakovlev Anatoly Avenirovich (1948-2018)" },
    year: 2024,
    cover: "11-in-memory-of-jakowlew-2024_1.webp",
    pdfWeb: "11-in-memory-of-jakowlew-2024_web.pdf",
    pdfFull: "11-in-memory-of-jakowlew-2024.pdf",
    size: "3.38 MB",
    fullSize: "3.38 MB"
  },
  {
    id: "12-german-history-of-the-region",
    shelfLabel: { ru: "Николаевский областной краеведческий музей в освещении немецкой истории края · 2025", de: "Das Regionalmuseum von Nikolajew im Licht der deutschen Geschichte der Region · 2025", en: "The Nikolaev Regional Museum in view of the Region's German History · 2025" },
    title: { ru: "Николаевский областной краеведческий музей в освещении немецкой истории края", de: "Das Regionalmuseum von Nikolajew im Licht der deutschen Geschichte der Region", en: "The Nikolaev Regional Museum in view of the Region's German History" },
    year: "2025",
    pdfFull: "12-german-history-of-the-region-2026_144dpi_75%_rgb_web.pdf",
    pdfWeb: "12-german-history-of-the-region-2026_144dpi_75%_rgb_web.pdf",
    cover: "12-german-history-of-the-region-2026_1.webp",
    size: "18 MB",
    fullSize: "52 MB"
  }
];

// =====================
// SHELVES
// =====================
export const shelves = [
  { id: "shelf-1", books: booksData.slice(0, 6) },
  { id: "shelf-2", books: booksData.slice(6) }
];

// =====================
// BOOK QUOTES (BOOK -> COMMENT)
// =====================
export const bookQuotes = {
  "01-rejected-by-homeland": ["quote-shevchenko", "quote-yakovlev-2011"],
  "03-memory-cruise": ["quote-yakovlev-2009"],
  "09-cossacks-historical-metamorphoses": ["quote-yakovlev-2018"]
};

// =====================
// SHELF DIVIDER QUOTES
// =====================
export const shelfDividerQuotes = {
  "shelf-1": [
    {
      id: "quote-shevchenko",
      text: {
        ru: "…Монография «Отвергнутые родиной» – значительное историческое исследование в раскрытии «белых пятен» истории не только Причерноморья, но и почти всего постсоветского пространства. С особой яркостью показан трагизм немецких и швейцарских колонистов, долгое время проживавших в Причерноморье",
        de: "…Die Monografie „Von der Heimat verleugnet“ ist eine wichtige historische Untersuchung zur Aufdeckung der „weißen Flecken“ in der Geschichte nicht nur des Schwarzmeergebietes, sondern wohl des gesamten postsowjetischen Raumes. Mit besonders eindringlicher Klarheit sind die Tragödien der deutschen und Schweizer Kolonisten dargestellt, die lange Zeit im Schwarzmeergebiet gelebt haben",
        en: "…The monograph „Rejected by the Motherland“ is a significant historical research that reveals the „white spots“ in the history of not only the Black Sea region, but also almost the entire post-Soviet space. The tragedy of the German and Swiss colonists who lived in the Black Sea region for a long time is particularly vividly depicted"
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
        de: "Es steht außer Zweifel, dass das hervorragende und in dieser Art einzigartige Werk von Henriette Lwowna Goette uns allen  nicht nur helfen wird einige Fragen unserer leidvollen  Geschichte, die die sowjetische Geschichtsschreibung zuvor  verschwiegen hat,  sondern  es wird uns, das wage ich zu sagen,  besser, reiner und weiser machen! Und ich glaube, dass Millionen zukünftiger Leser im ganzen Bereich  der ehemaligen Sowjetraum und über  ihre Grenzen hinaus, den unvergänglichen Wert dieses ohne Übertreibung großartigen Buches würdigen werden, das von hohem Humanismus und dem Glauben an die höhere Gerechtigkeit – den Sieg des Guten über das Böse – durchdrungen ist!",
        en: "There is no doubt that Henrietta Lvovna Gette's remarkable and unique work will not only help our better understanding the certain aspects of our long-suffering history which were previously ignored by Soviet historiography, but it also makes us, I dare say, better, purer, and wiser! And I believe that millions of future readers in all parts of the former Soviet Union and beyond will appreciate the enduring significance of this, without exaggeration, great book, which is imbued with high humanism and a belief in the ultimate triumph of good over evil!"
      },
      author: { ru: "А. Яковлев, 2011", de: "A. Jakowlew, 2011", en: "A. Yakovlev, 2011" },
      position: { ru: "Историк, директор музея «Таврия», Новая Каховка", de: "Historiker, Direktor des Museums „Tawrija“, Nowaja Kachowka", en: "Historian, Director of the Tavria Museum, Novaya Kakhovka" }
    },
    {
      id: "quote-yakovlev-2009",
      text: {
        ru: "Я ещё никогда не слышал и не читал такого репортажа как „Круиз памяти“ Генриетты Львовны Гётте",
        de: "Ich habe noch nie einen solchen Bericht gehört oder gelesen wie Henriette Lvovna Goettes „Die Reise zu den Erinnerungen“",
        en: "I have never heard or read a report like Henrietta Lvovna Götté's „Memory Cruise“"
      },
      author: { ru: "А. Яковлев, 2009", de: "A. Jakowlew, 2009", en: "A. Yakovlev, 2009" },
      position: { ru: " ", de: " ", en: " " }
      }
  ],

  "shelf-2": [
    {
      id: "quote-yakovlev-2018",
      text: {
        ru: "Книга Генриетты Львовны Гётте „Казачество. Исторические метаморфозы“ – лучшая книга о казаках, изданная на сегодня. Она была бы хорошим учебным пособием для казачьих лицеев",
        de: "Das Buch von Henriette Lwowna Goette „Die Kosaken. Historische Metamorphosen“ ist das beste bis heute veröffentlichte Buch über Kosaken. Es wäre ein gutes Lehrbuch für Kosaken-Lyzeen",
        en: "Henrietta Lvovna Gette's book „The Cossacks. Historical Metamorphoses“ is the best book about the Cossacks that has been published to date. It would be a good textbook for Cossack lyceums"
      },
      author: { ru: "А. Яковлев, 2018", de: "A. Jakowlew, 2018", en: "A. Yakovlev, 2018" },
      position: { ru: " ", de: " ", en: " " }
    }
  ]
};

export const articlesData = [
  {
    id: "mazepa",
    title: {
      ru: "Иван Степанович Мазепа-Колединский – олицетворение эпоса украинского духовного возрождения казачества",
      de: "Iwan Stepanowitch Masepa-Koledinskij – die Verkörperung des Epos von der ukrainischen spirituellen Wiedergeburt der Kosaken",
      en: "Ivan Stepanovich Mazepa-Kaledinsky is the embodiment of the epic of the Ukrainian spiritual revival of the Cossacks"
    },
    preview: { 
      ru: "Вот уже более 300 лет украинский полководец и дипломат Иван Степанович Мазепа рассматривается некоторыми историками как предатель...", 
      de: "Seit mehr als 300 Jahren wird der ukrainische Feldherr und Diplomat Iwan Masepa von einigen Historikern als Verräter betrachtet...", 
      en: "For more than 300 years, the Ukrainian commander and diplomat Ivan Mazepa has been viewed by some historians as a traitor..." 
    },
    pdfFile: "Ivan_Stepanovich_Mazepa-Koledinsky.pdf"
  },
  {
    id: "pugachev",
    title: {
      ru: "Народное движение в России под предводительством Емельяна Ивановича Пугачёва",
      de: "Eine Volksbewegung in Russland unter der Führung von Emeljan Iwanowitsch Pugachew",
      en: "The national movement in Russia led by Yemelyan Ivanovich Pugachev"
    },
    preview: { 
      ru: "В 2015 г. исполнилось 240 лет со дня подавления Крестьянской войны 1773–1775 гг. под руководством Емельяна Ивановича Пугачѐва...",
      de: "Im Jahr 2015 jährte sich zum 240. Mal die Unterdrückung des Bauernkriegs von 1773–1775 unter der Führung von Pugachew...",
      en: "2015 marked the 240th anniversary of the suppression of the Peasant War of 1773–1775 led by Yemelyan Pugachev..." 
    },
    pdfFile: "The_Pugachev_Rebellion.pdf"
  },
  {
    id: "civil-war",
    title: {
      ru: "Гражданская война на юге России. Северная Таврия – земля казацкой трагедии",
      de: "Der Bürgerkrieg im Süden Russlands. Nordtaurien – das Land der Kosakentragödie",
      en: "The Civil War in the South of Russia. Northern Tavria: the Land of the Cossack tragedy"
    },
    preview: {
      ru: "В этом году исполняется 100 лет со времён одной из самых кровопролитных войн человечества, последовавшей в России после революции 1917 года...",
      de: "In diesem Jahr jährt sich zum 100. Mal einer der blutigsten Kriege der Menschheit, der nach der Revolution von 1917 in Russland ausbrach...",
      en: "This year marks the 100th anniversary of one of the bloodiest wars in humanity, which followed in Russia after the 1917 revolution..." 
    },
    pdfFile: "Civil_War_Southern_Russia.pdf"
  }
];

// =====================
// REVIEWS DATA (MERGED)
// =====================

export const reviewsData = [
  // EXISTING: Rejected by Homeland Review (HTML)
  {
    id: "review-rejected-homeland-2011",
    bookTitle: {
      ru: "Отвергнутые родиной. 3-е издание, 2011",
      de: "Von der Heimat verleugnet. 3. Auflage, 2011",
      en: "Rejected by the Homeland. 3rd edition, 2011"
    },
    bookCover: "01-rejected-by-homeland-2011_1.webp",
    items: [
      {
        text: {
          ru: "а) Стр. 507–508 (в книге)",
          de: "a) S. 507–508 (im Buch)",
          en: "a) pp. 507–508 (in the book)"
        }
      },
      {
        text: {
          ru: "б) Анатолий Недiлько / Основські хроніки...",
          de: "b) Anatoly Nedilko / Osnovski Chroniken...",
          en: "b) Anatoliy Nedilko / Osnovski chronicles..."
        },
        hasFullContent: true
      }
    ],
    fullContent: {
      ru: `
        <h1>Отзывы после выхода первых двух изданий книги</h1>
        
        <div class="review-section">

        <div class="review-section">
          <h2>А. Г. Неділько</h2>
          <p style="font-style: italic; color: #666; margin-bottom: 20px;">
            Редактор сборника «Основські хроніки»
          </p>
          
          <p>
            Это уже третье издание книги, хорошо известной жителям села Основа-на-Днепре, 
            и бесспорно завоевавшей сердца многих читателей Украины и других стран. 
            Ее автор – Генриетта Гётте, проживающая в данный момент в Германии, выполнила 
            колоссальную работу по поиску достоверных данных о своих предках - швейцарцах, 
            создавших крупнейшее винодельческое предприятие юга Украины, принесших большую 
            пользу России и Украине, и заложивших село Основа-на-Днепре. Первое издание, 
            вышедшее в свет в 2007 году, стало сенсацией и в одночасье диаметрально изменило
            отношение многих жителей Основы к своему прошлому. 
          </p>

          <p>
            Не секрет, что до этой даты преобладающее большинство жителей Основы 
            (и не только Основы), будучи под сильным влиянием коммунистической пропаганды, 
            считали, что события развивались именно так, как нагло утверждали 
            фальсификаторы в многочисленных источниках советского периода.
            Для подтверждения всех изложенных фактов автор использует различные 
            документы и фотоматериалы, которые были получены после многолетних 
            поисков в архивах разных стран, и которые дают неоспоримые свидетельства 
            рассматриваемых фактов. Книга поражает широтой своей структуры.
          </p>
        
          <p>
            Повествование начинается с описания посленаполеоновских потрясений, 
            вызвавших целую волну миграций из Европы в Россию. В книге наглядно 
            показано, насколько непростым и тернистым был путь переселенцев из 
            Швейцарии на восток. На примере не одного поколения швейцарцев и немцев 
            показана и их самоотверженность в выполнении своего долга и преодолении 
            многочисленных лишений, и горькое разочарование от тяжелых условий жизни 
            в Российской империи, а впоследствии - в Советском Союзе.
          </p>

          <p>
            Обладая большим жизненным потенциалом и всеми необходимыми знаниями 
            своей профессии, переселенцы сумели в сравнительно короткий срок добиться 
            больших успехов и принесли немалый вклад в развитие экономики России и СССР. 
            Читатель будет несомненно поражен представленными документальными 
            свидетельствами, собранными автором с большим старанием.Книга переносит
            читателя по разным странам, из Европы в Россию. 
          </p>

          <p>
            Судьба разбросала предков Генриетты Гётте по разным
            уголкам России - в книге описано Поволжье, в котором
            жили предки ее отца, а также семья Антони из Розенталя в
            Крыму, и скитания семейства Гётте по уездам Таврической
            губернии, и огромный вклад в развитие Херсонской
            губернии, сделанный семьей Квадрициус, родственниками
            ее матери; описано также развитие шведских поселений
            Шведского округа Альтшведендорф, Шлангендорф и других
            сел. Одной из первых швейцарских колонией в России
            стала колония Шабо в Аккерманском уезде Бессарабской
            губернии, от которой впоследствии отделились дочерние
            поселения. В книге показано, как происходило заселение и
            развитие колонии Шабо, и ее значение для последующих
            поколений колонистов. В деталях описано возникновение
            поселения Основа как дочерней колонии Шабо и связанных
            с ней поселений, в частности соседнего села Британы и
            поселения Новая Шабо. Показана роль Основы для
            развития экономики Нижнеднепровья и ее связь с новыми
            немецкими поселениями Ключевая, Луговая и Новые
            Судаки. 
          </p>
          
          <p>
            Важным вкладом в историю швейцарских поселенцев является восстановление 
            исторического значения их деятельности, в книге наглядно раскрыт 
            неоценимый вклад, сделанный швейцарцами в становление виноградарства в 
            Нижнеднепровье, а также в развитие инфраструктуры когда-то заброшенной 
            части Днепровского уезда.
          </p>

          <p>
            Наибольшего драматизма повествование достигает в главах 4-й и 5-й, 
            описывающих страшные лишения, репрессии и пытки, которым подверглись 
            ни в чем не повинные люди в результате безумного большевистского террора. 
            Эта часть повествования книги полностью опровергает фальсификации 
            советского периода, в частности многочисленные заказные статьи в 
            периодической прессе, которые печатались на протяжении более 70 лет и 
            порочили репутацию швейцарцев.
          </p>
          <p>
            Это позволяет сделать
            вывод о кровавых деяниях большевистского режима,
            который принес народам Украины огромное горе. В
            завершающей части книги описаны события, происшедшие
            после выхода первых двух изданий книги (2007 и 2008 гг.)
            Это период был чрезвычайно насыщенным, автор совершает 
            много поездок для поиска новых документов и встреч
            с родственниками и различными специалистами. За это
            время Генриетта Гётте не только разыскала много новых
            документов и сведений, но и с честью отдала свой долг
            славным предкам - поставила в селе Основа памятную
            стелу в 2009 году, а также памятник в 2010 году. Ее
            подвижнический труд встретил всеобщее одобрение, о чем
            свидетельствуют многочисленные положительные отзывы
            ученых-историков и работников архивных учреждений и
            музеев Украины и России. В книгу включены также
            стихотворения местного историка Анатолия Яковлева, в
            которых описана трагедия швейцарцев и выражена
            симпатия к основателям Основы.
          </p>
          <p>
            В новом издании значительно увеличен объем книги (свыше 500 с.) и 
            включены многие новые документы, приведены исчерпывающие библиографии 
            использованных источников. Книга чрезвычайно богато иллюстрирована, 
            и содержит уникальные фотографии, многие из которых публикуются впервые.
          </p>

          <blockquote>
            <p>
              «Забывшие уроки прошлого рискуют получить их вновь... 
              Правда о прошлом - предостережение для будущего...»
            </p>
            <footer class="quote-author">
              Из книги «Отвергнутые родиной»
            </footer>
          </blockquote>

          <p style="margin-top: 25px;">
            Ценность этой книги чрезвычайно велика, поскольку она обращена не только 
            в прошлое, но и в будущее. Хочется верить, что эта книга послужит хорошим 
            уроком для всех жителей села Основа и поможет им осознать необходимость 
            более внимательного отношения к своей истории, чтобы никогда не повторять 
            безумной кровавой бойни 1929 года и страшных репрессий 30-х -40-х годов ХХ века.
          </p>

          <p style="text-align: right; font-style: italic; margin-top: 30px; color: #777;">
            А. Г. Неділько<br>
            Основські хроніки: краєзнавчий, історичний, культурологічний 
            та науково-популярний збірник.<br>
            С. Основа, 2012. - Річник 1. - Число 1. - С. 31-32.
          </p>
        </div>

        <div style="text-align: center; margin-top: 50px; padding: 30px; background: rgba(139, 90, 43, 0.05); border-radius: 8px;">
          <p style="font-size: 0.95rem; color: #777; font-style: italic;">
            Страницы 507-508 книги "Отвергнутые родиной", 3-е издание, 2011<br>
            Основські хроніки, 2012, С. 31-32
          </p>
        </div>
      `,
      
      de: `
        <h1>Rezensionen nach Veröffentlichung der ersten beiden Ausgaben</h1>

        <div style="text-align: center; margin-top: 50px; padding: 30px; background: rgba(139, 90, 43, 0.05); border-radius: 8px;">
          <p style="font-size: 0.95rem; color: #777; font-style: italic;">
            Seiten 507-508 des Buches "Von der Heimat verleugnet", 3. Auflage, 2011
          </p>
        </div>
      `,
      
      en: `
        <h1>Reviews after the First Two Editions</h1>

        <div style="text-align: center; margin-top: 50px; padding: 30px; background: rgba(139, 90, 43, 0.05); border-radius: 8px;">
          <p style="font-size: 0.95rem; color: #777; font-style: italic;">
            Pages 507-508 of the book "Rejected by the Homeland", 3rd edition, 2011
          </p>
        </div>
      `
    }
  },
    
    {
    id: "review-von-der-heimat-verleugnet-deutsch",
    bookTitle: {
      ru: "Отвергнутые родиной (немецкое издание)",
      de: "Von der Heimat verleugnet (deutsch)",
      en: "Rejected by the Homeland (German)"
    },
    bookCover: "02-von-der-heimat-verleugnet-deutsch_1.webp",
    items: [
      {
        text: {
          ru: "Отзывы на обратной стороне обложки",
          de: "Kommentare auf der Rückseite des Buches",
          en: "Reviews on the back cover of the book"
        }
      }
    ],
    fullContent: null
  },

  {
    id: "review-memory-cruise-2024",
    bookTitle: {
      ru: "Круиз памяти. 2-е издание, 2024",
      de: "Eine Reise zu den Erinnerungen. 2. Auflage, 2024",
      en: "Memory Cruise. 2nd edition, 2024"
    },
    bookCover: "03-memory-cruise-2024_1.webp",
    items: [
      {
        text: {
          ru: "Стр. 43 (в книге)",
          de: "S. 43 (im Buch)",
          en: "p. 43 (in the book)"
        }
      },
      {
        quote: {
          ru: "Я ещё никогда не слышал и не читал такого репортажа как \"Круиз памяти\" Генриетты Львовны Гётте",
          de: "Ich habe noch nie einen solchen Bericht gehört oder gelesen wie Henriette Lvovna Goettes \"Die Reise zu den Erinnerungen\"",
          en: "I have never heard or read a report like Henrietta Lvovna Götté's 'Memory Cruise'"
        },
        author: {
          ru: "А. Яковлев, 2009",
          de: "A. Jakowlew, 2009",
          en: "A. Yakovlev, 2009"
        }
      }
    ],
    fullContent: null
    },

  {
    id: "review-cossacks-2018",
    bookTitle: {
      ru: "КАЗАЧЕСТВО. Исторические метаморфозы, 2018",
      de: "Die Kosaken. Historische Metamorphosen, 2018",
      en: "THE COSSACKS. Historical Metamorphoses, 2018"
    },
    bookCover: "09-cossacks-historical-metamorphoses-2018_1.webp",
    items: [
  {
    text: {
      ru: "Стр. 456–457",
      de: "S. 456–457",
      en: "pp. 456–457"
    }
  },

  {
    quote: {
      ru: "Книга Генриетты Львовны Гётте \"Казачество. Исторические метаморфозы\" – лучшая книга о казаках, изданная на сегодня. Она была бы хорошим учебным пособием для казачьих лицеев",
      de: "Das Buch von Henriette Lwowna Goette \"Die Kosaken. Historische Metamorphosen\" ist das beste bis heute veröffentlichte Buch über Kosaken. Es wäre ein gutes Lehrbuch für Kosaken-Lyzeen",
      en: "Henrietta Lvovna Gette's book \"The Cossacks. Historical Metamorphoses\" is the best book about the Cossacks that has been published to date. It would be a good textbook for Cossack lyceums"
    },
    author: {
      ru: "А. Яковлев, 2018",
      de: "A. Jakowlew, 2018",
      en: "A. Yakovlev, 2018"
    }
  }
],
fullContent: null   
    }
];

// =====================
// AUTHOR DATA (RESTORED & ACTIVE)
// =====================
// Використано відновлену версію з детальними біографічними даними
export const authorData = {
  name: {
    ru: "Генриетта Гётте",
    de: "Henriette Götte",
    en: "Henriette Goette"
  },
  photo: "author/henrietta-goette.webp",
  bio: {
    ru: [
      "Автору книг, Генриетте Гётте, судьбою была уготовлена полная трагизма жизнь: война, разлука с родителями, детские дома, лишения, унижения, радость воссоединения семьи, учёба, работа в Советском Союзе, переезд в Германию, снова учёба и адаптация на новой родине.",
      "После смерти её родителей в 2002 году она начала собирать документальный материал о событиях, проходивших в XIX-XX столетиях. Все они нашли отражение в истории пяти поколений автора."
    ],
    de: [
      "Die Autorin der Bücher, Henriette Götte, hatte ein Leben voller Tragödien: Krieg, Trennung von ihren Eltern, Waisenhäuser, Entbehrungen, Demütigungen, die Freude über die Familienzusammenführung, Studium, Arbeit in der Sowjetunion, Übersiedlung nach Deutschland, erneutes Studium und Anpassung in ihrer neuen Heimat.",
      "Nach dem Tod ihrer Eltern im Jahr 2002 begann sie Dokumentationsmaterial über die Ereignisse des 19. und 20. Jahrhunderts zu sammeln. All diese Ereignisse spiegeln sich in der Geschichte von fünf Generationen der Autorin wider."
    ],
    en: [
      "The author of the books Henriette Goette was destined to a tragic life: war, separation from her parents, orphanages, deprivation, humiliation, the joy of family reunification, study and work in the Soviet Union, relocation to Germany, study again and adapting to her new homeland.",
      "After the death of her parents in 2002 she began collecting documentary evidence of events which took place in the 19th and 20th centuries. These events are reflected in the five generation history of the author's family."
    ]
  }
};
