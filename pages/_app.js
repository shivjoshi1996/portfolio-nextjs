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
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#1d1d1d" />
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}

export default MyApp;
