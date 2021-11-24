import { groq } from 'next-sanity';
import Navigation from '../components/Navigation';
import { getClient } from '../lib/sanity.server';

export default function Contact({ data }) {
  return (
    <>
      <Navigation nav={data.nav} />
    </>
  );
}

const NavQuery = groq`
  *[_type == "navigation" && id == "mainNav"]{
    title,
    navItems,
  }
`;

export async function getStaticProps({ params, preview = false }) {
  const nav = await getClient(preview).fetch(NavQuery);

  return {
    props: {
      preview,
      data: { nav },
    },
  };
}
