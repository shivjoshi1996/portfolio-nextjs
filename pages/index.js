import Head from 'next/head';
import Image from 'next/image';
import { groq } from 'next-sanity';
import styled from 'styled-components';
import { usePreviewSubscription, urlFor, PortableText } from '../lib/sanity';
import { getClient } from '../lib/sanity.server';
import Navigation from '../components/Navigation';

const homeQuery = groq`
  *[_type == "homepage"]{
    title,
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
  console.log(data);
  return (
    <>
      <Navigation nav={data.nav} />
      <h1>{data.home[0].title}</h1>
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
