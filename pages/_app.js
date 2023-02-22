/* eslint-disable react/prop-types */
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { createGlobalStyle } from 'styled-components';
import Page from '../components/Page';

const GlobalStyle = createGlobalStyle`
:root {
  --background: #1d1d1d;
  --text: #ddd;
}

[data-theme="light"] {
  --background: #fff;
  --text: #3a3a3a;
}
`;

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
      <GlobalStyle />
      <ThemeProvider defaultTheme="dark" enableSystem>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
