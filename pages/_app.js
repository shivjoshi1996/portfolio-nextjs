/* eslint-disable react/prop-types */
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { createGlobalStyle } from 'styled-components';
import Page from '../components/Page';

const GlobalStyle = createGlobalStyle`
:root {
  --background: hsl(0 0% 8.5%);
  --text: hsl(0 0% 93%);
  --section-background: hsl(0 0% 11.0%);
  --section-border:  hsl(0 0% 100% / 0.026);
  --button-text: hsl(0 0% 93%);
  --button-background: hsl(0 0% 11.0%);
  --button-border: hsl(0 0% 100% / 0.026);
  --button-shadow: none;
}

[data-theme="light"] {
  --background: #fff;
  --text: #3a3a3a;
  --section-background: hsl(0 0% 0% / 0.027);
  --button-text: #3a3a3a;
  --button-background: linear-gradient(180deg, #fdfdfd 32.81%, #f6f6f6 100%);
  --button-shadow: 0px 0px 0px 0.5px rgba(0, 0, 0, 0.08),
    0px 1px 0px rgba(0, 0, 0, 0.06), 0px 1px 2px rgba(0, 0, 0, 0.05),
    0px 2px 4px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.03),
    0px 2px 12px rgba(0, 0, 0, 0.02), inset 0px 1px 0px #ffffff,
    inset 0px 1px 0px rgba(255, 255, 255, 0.94), inset 0px 0px 2px 1px #ffffff;
  --button-border: none;
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
