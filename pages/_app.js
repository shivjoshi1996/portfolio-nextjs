import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

const appTheme = {
  colors: {
    background: '#1d1d1d;',
    textPrimary: '#ddd;',
  },
  font: `'Archivo', sans-serif`,
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={appTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
