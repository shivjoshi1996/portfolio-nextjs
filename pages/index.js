import Head from 'next/head';
import Image from 'next/image';
import { groq } from 'next-sanity';
import styled from 'styled-components';
import Link from 'next/link';
import { usePreviewSubscription, urlFor, PortableText } from '../lib/sanity';
import { getClient } from '../lib/sanity.server';
import Navigation from '../components/Navigation';

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

const StyledHero = styled.div`
  background-color: ${(props) => props.theme.colors.background};
`;

export default function Home(props) {
  const { data } = props;
  console.log(data);
  const { heroHeading, heroText, heroButtons, heroImage } = data.home[0];
  console.log(heroHeading);
  return (
    <>
      <Navigation nav={data.nav} />
      <StyledHero>
        <h1>{heroHeading}</h1>
        <p>{heroText}</p>
        {/* <Image
          src={urlFor(data.home[0].heroImage).width(600).url()}
          width="600"
          height="400"
          quality={100}
        /> */}
        {heroButtons.map((button) => (
          <Link key={button._key} href={button.navItemUrl.linkUrl}>
            {button.text}
          </Link>
        ))}
      </StyledHero>
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
