import Head from 'next/head';
import Image from 'next/image';
import { groq } from 'next-sanity';
import styled from 'styled-components';
import { usePreviewSubscription, urlFor, PortableText } from '../lib/sanity';
import { getClient } from '../lib/sanity.server';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import TechnologiesSection from '../components/TechnologiesSection';
import ContentWrapper from '../components/ContentWrapper';

const homeQuery = groq`
  *[_type == "homepage"]{
    heroHeading,
    heroText,
    heroButtons,
    heroImage,
    featuredProjects[] -> {
      title,
      slug,
      mainImage,
      publishedAt,
      projectRoles[]->{title},
    },
    currentTechnologies[] -> {title, mainImage},
    learningTechnologies[] -> {title, mainImage},
  }
`;
const NavQuery = groq`
  *[_type == "navigation" && id == "mainNav"]{
    title,
    navItems,
  }
`;

// const featuredProjectsQuery = groq`
//   *[_type == "project" && featured == true]{
//     title,
//     slug,
//     mainImage,
//     publishedAt,
//   }
// `;

export default function Home(props) {
  const { data } = props;
  console.log(data);
  const {
    heroHeading,
    heroText,
    heroButtons,
    heroImage,
    currentTechnologies,
    learningTechnologies,
    featuredProjects,
  } = data.home[0];
  console.log(featuredProjects);
  const { nav } = data;
  return (
    <>
      <Navigation nav={nav} />
      <ContentWrapper>
        <Hero
          heroHeading={heroHeading}
          heroText={heroText}
          heroButtons={heroButtons}
          heroImage={heroImage}
        />
        <FeaturedProjects featuredProjects={featuredProjects} />
        <TechnologiesSection
          learningTechnologies={learningTechnologies}
          currentTechnologies={currentTechnologies}
        />
        <p>
          lorem lorem loremloremloremloremloremlorem loremloremlorem
          loremloremlorem loremloremloremloremloremlorem loremloremloremlorems
        </p>
      </ContentWrapper>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  // TODO - See if these calls can be batched together
  const home = await getClient(preview).fetch(homeQuery);
  const nav = await getClient(preview).fetch(NavQuery);

  return {
    props: {
      preview,
      data: { home, nav },
    },
  };
}
