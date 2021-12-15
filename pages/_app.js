/* eslint-disable react/prop-types */
import Head from 'next/head';
import Page from '../components/Page';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shivam Joshi | Front End Web Developer</title>
        <meta
          name="description"
          content="Shivam Joshi is a Front End Web Developer based in Vancouver, BC. He specializes in building modern, responsive websites."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
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
