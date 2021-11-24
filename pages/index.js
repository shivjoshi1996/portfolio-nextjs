import Head from 'next/head';
import Image from 'next/image';
import { groq } from 'next-sanity';
import { usePreviewSubscription, urlFor, PortableText } from '../lib/sanity';
import { getClient } from '../lib/sanity.server';

const homeQuery = groq`
  *[_type == "homepage"]{
    title,
  }
`;

export default function Home(props) {
  const { data } = props;
  return (
    <>
      <h1>{data.home[0].title}</h1>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const home = await getClient(preview).fetch(homeQuery);

  return {
    props: {
      preview,
      data: { home },
    },
  };
}
