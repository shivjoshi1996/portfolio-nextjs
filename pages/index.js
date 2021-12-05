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

const homeQuery = groq`
  *[_type == "homepage"]{
    heroHeading,
    heroText,
    heroButtons,
    heroImage,
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

const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true]{
    title,
    slug,
    mainImage,
    publishedAt,
  }
`;

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
  } = data.home[0];
  const { nav } = data;
  const { featuredProjects } = data;
  console.log(learningTechnologies);
  return (
    <>
      <Navigation nav={nav} />
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
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  // TODO - See if these calls can be batched together
  const home = await getClient(preview).fetch(homeQuery);
  const nav = await getClient(preview).fetch(NavQuery);
  const featuredProjects = await getClient(preview).fetch(
    featuredProjectsQuery
  );

  return {
    props: {
      preview,
      data: { home, nav, featuredProjects },
    },
  };
}
