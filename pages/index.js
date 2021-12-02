import Head from 'next/head';
import Image from 'next/image';
import { groq } from 'next-sanity';
import styled from 'styled-components';
import { usePreviewSubscription, urlFor, PortableText } from '../lib/sanity';
import { getClient } from '../lib/sanity.server';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';

const homeQuery = groq`
  *[_type == "homepage"]{
    heroHeading,
    heroText,
    heroButtons,
    heroImage,
  }
`;
const NavQuery = groq`
  *[_type == "navigation" && id == "mainNav"]{
    title,
    navItems,
  }
`;

export default function Home(props) {
  const { data } = props;
  const { heroHeading, heroText, heroButtons, heroImage } = data.home[0];
  return (
    <>
      <Navigation nav={data.nav} />
      <Hero
        heroHeading={heroHeading}
        heroText={heroText}
        heroButtons={heroButtons}
        heroImage={heroImage}
      />
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const home = await getClient(preview).fetch(homeQuery);
  const nav = await getClient(preview).fetch(NavQuery);

  return {
    props: {
      preview,
      data: { home, nav },
    },
  };
}
