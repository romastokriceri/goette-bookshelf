📚 Goette Bookshelf — Digital Library of Henriette Goette

An online library of historical research on German–Swiss heritage in Ukraine

🔗 Live Demo: https://goette-bookshelf.vercel.app

📖 About the Project

Goette Bookshelf is a digital library created to present the scholarly works of Henriette Goette, an independent historian researching the history of German and Swiss colonists in Ukraine.

The platform provides online viewing and PDF access to her books, which are based on extensive archival research in Ukraine, Germany, Switzerland, and Russia. The project focuses on lesser-known aspects of 19th–20th century history, regional memory, and cultural heritage.

🧰 Tech Stack

Next.js — React framework

Vercel — deployment and hosting

Cloudflare R2 — storage for PDFs and book covers

Lucide React — icons

🚀 Getting Started
Install dependencies
npm install

Run locally
npm run dev


Open: http://localhost:3000

Build & deploy
npm run build
vercel deploy

📂 Project Structure
goette-bookshelf/
├── pages/
│   ├── _app.js          # Next.js app wrapper
│   └── index.js         # Main page
├── styles/
│   └── globals.css      # Global styles
├── public/
│   ├── cover/           # Book covers (WebP)
│   ├── Books/           # Web-optimized PDFs
│   └── Books-full/      # Full PDF editions
├── data.js              # Books and author data
├── package.json
└── README.md

✨ Features

Responsive layout (desktop, tablet, mobile)

Bookshelf-style UI

Modal PDF viewer (read without downloading)

Download original PDFs

Automatic grouping of books into shelves

Optimized assets for fast loading

🧠 Key Lessons Learned

Always commit before structural Git changes

Pull remote changes before pushing

Standardize file names (lowercase, kebab-case)

Use public/ for static assets in Next.js

_app.js is a wrapper, not a page

git status prevents costly mistakes

👤 Author

Henriette Goette
Independent historian and researcher of German–Swiss heritage
📍 Germany

📝 License

ISC — free use with attribution.