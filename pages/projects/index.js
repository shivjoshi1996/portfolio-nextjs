import { groq } from 'next-sanity';
import ContentWrapper from '../../components/ContentWrapper';
import Navigation from '../../components/Navigation';
import { getClient } from '../../lib/sanity.server';

export default function Projects({ data }) {
  return (
    <>
      <Navigation nav={data.nav} />
      <ContentWrapper>
        <h1>Projects</h1>
        <p>Yo</p>
      </ContentWrapper>
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
