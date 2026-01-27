import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="uk">
      <Head>
        {/* Тут можна додати мета-теги або шрифти */}
        <meta name="description" content="<библиотека книг>" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}