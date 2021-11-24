import Head from 'next/head';
import Image from 'next/image';
import { groq } from 'next-sanity';
import styled from 'styled-components';
import { usePreviewSubscription, urlFor, PortableText } from '../lib/sanity';
import { getClient } from '../lib/sanity.server';

const StyledBackground = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100vh;
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 10vw;
`;

const homeQuery = groq`
  *[_type == "homepage"]{
    title,
  }
`;

export default function Home(props) {
  const { data } = props;
  return (
    <StyledBackground>
      <h1>{data.home[0].title}</h1>
    </StyledBackground>
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
