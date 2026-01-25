import '../styles/globals.css'; // Подключаем стили здесь и только здесь

function MyApp({ Component, pageProps }) {
  // Этот компонент оборачивает все твои страницы (включая index.js)
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;