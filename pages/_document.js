import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="uk">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@400;600;700&family=Lora:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <meta name="description" content="Цифрова бібліотека Генрієтти Гете — книги про німецько-швейцарську спадщину в Україні. Henriette Goette — historische Bücher über Deutsche und Schweizer in der Ukraine." />
        <meta name="keywords" content="Генрієтта Гете, Henriette Goette, швейцарські колоністи Україна, немецкие колонисты Украина, Шабо, Основа" />
        <meta property="og:title" content="Goette Bookshelf — Henriette Goette" />
        <meta property="og:description" content="Цифрова бібліотека історичних досліджень про німецько-швейцарську спадщину в Україні" />
        <meta property="og:url" content="https://goette-bookshelf.vercel.app" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
