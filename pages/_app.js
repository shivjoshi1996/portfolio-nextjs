import Head from 'next/head';
import Page from '../components/Page';

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
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}

export default MyApp;
