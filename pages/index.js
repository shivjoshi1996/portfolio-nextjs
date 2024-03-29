/* eslint-disable react/prop-types */
import { groq } from 'next-sanity';
import { getClient } from '../lib/sanity.server';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import MySkillsSection from '../components/MySkillsSection';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import ContactBanner from '../components/ContactBanner';

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
      tagline,
      publishedAt,
      projectRoles[]->{title},
    },
    developmentTechnologies[] -> {title},
    projectManagementTechnologies[] -> {title},
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
  const {
    heroHeading,
    heroText,
    heroButtons,
    heroImage,
    developmentTechnologies,
    projectManagementTechnologies,
    featuredProjects,
  } = data.home[0];

  const { nav } = data;
  return (
    <>
      <Navigation nav={nav} />
      <main>
        <header>
          <Hero
            heroHeading={heroHeading}
            heroText={heroText}
            heroButtons={heroButtons}
            heroImage={heroImage}
          />
        </header>
        <AboutSection />
        <MySkillsSection
          developmentTechnologies={developmentTechnologies}
          projectManagementTechnologies={projectManagementTechnologies}
        />
        <FeaturedProjects featuredProjects={featuredProjects} />
      </main>
      <ContactBanner />
      <Footer nav={nav} />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
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
