import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="uk">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
        <meta name="description" content="бібліотека книг" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}