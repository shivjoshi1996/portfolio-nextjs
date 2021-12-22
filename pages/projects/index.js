/* eslint-disable react/prop-types */
import { groq } from 'next-sanity';
import styled from 'styled-components';
import Head from 'next/head';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ContactBanner from '../../components/ContactBanner';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import ProjectCard from '../../components/ProjectCard';
import { getClient } from '../../lib/sanity.server';

gsap.registerPlugin(ScrollTrigger);

const StyledProjectsContainer = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: ${(props) => props.theme.colors.background};
`;

const StyledHeadingContainer = styled.header`
  width: 90%;
  margin: 0 auto;
  max-width: 69.375rem;
  margin-bottom: 3rem;

  h1 {
    text-transform: uppercase;
    margin-bottom: 1rem;
    opacity: 0;
  }

  p {
    line-height: 1.5;
    opacity: 0;
    @media (min-width: 48rem) {
      width: 50%;
    }
    @media (min-width: 69.375rem) {
      width: 40%;
    }
  }
`;

const StyledProjectsWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 69.375rem;

  @media (min-width: 48rem) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (min-width: 48rem) {
    > article:nth-child(even) {
      margin-top: 20rem;
    }
  }
`;

export default function Projects({ data }) {
  const { projects, nav } = data;

  // Heading GSAP
  const headingRef = useRef();

  useLayoutEffect(() => {
    const headingSelector = gsap.utils.selector(headingRef);
    gsap.fromTo(
      headingSelector('.project-heading'),
      { opacity: 0, y: 20 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power1.easeOut', stagger: 0.5 }
    );
  }, []);

  // PROJECT CARDS GSAP

  const el = useRef();
  const projectCardTl = useRef();

  useLayoutEffect(() => {
    const projectsGSAP = gsap.utils.toArray('.project-card');

    projectsGSAP.forEach((projectGSAP) => {
      const q = gsap.utils.selector(projectGSAP);
      projectCardTl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: projectGSAP,
          },
        })
        .fromTo(
          q('.project-card-date'),
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          }
        )
        .fromTo(
          q('.datedivider'),
          {
            width: '0%',
          },
          {
            opacity: 1,
            width: '100%',
            duration: 0.5,
          }
        )
        .fromTo(
          q('.project-name'),
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
          }
        )
        .fromTo(
          q('.project-image'),
          {
            y: 20,
            opacity: 0,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
          }
        )
        .fromTo(
          q('.project-roles'),
          {
            y: 20,
            opacity: 0,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
          }
        )
        .fromTo(
          q('.project-tagline'),
          {
            y: 20,
            opacity: 0,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
          }
        );
    });
  }, []);

  return (
    <>
      <Head>
        <title>Shivam Joshi | Projects</title>
      </Head>
      <Navigation nav={nav} />
      <main>
        <StyledProjectsContainer>
          <StyledHeadingContainer ref={headingRef}>
            <h1 className="project-heading">Projects</h1>
            <p className="project-heading">
              Explore some of the projects I've helped manage and develop, as
              well as the stories behind each project.
            </p>
          </StyledHeadingContainer>
          <StyledProjectsWrapper ref={el}>
            {projects.map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </StyledProjectsWrapper>
        </StyledProjectsContainer>
      </main>
      <ContactBanner />
      <Footer nav={nav} />
    </>
  );
}

const NavQuery = groq`
  *[_type == "navigation" && id == "mainNav"]{
    title,
    navItems,
  }
`;

const ProjectsQuery = groq`
*[_type == "project"] | order(publishedAt desc) {
  title,
  mainImage,
  tagline,
  slug,
  publishedAt,
  projectRoles[]->{title},
}
`;

export async function getStaticProps({ preview = false }) {
  const nav = await getClient(preview).fetch(NavQuery);
  const projects = await getClient(preview).fetch(ProjectsQuery);

  return {
    props: {
      preview,
      data: { nav, projects },
    },
  };
}
