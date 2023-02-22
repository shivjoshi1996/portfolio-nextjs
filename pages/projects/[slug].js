/* eslint-disable react/prop-types */
import React, { useLayoutEffect, useRef } from 'react';
import { groq } from 'next-sanity';
import styled from 'styled-components';
import Link from 'next/link';
import { BiArrowBack } from 'react-icons/bi';
import BlockContent from '@sanity/block-content-to-react';
import { useNextSanityImage } from 'next-sanity-image';
import Img from 'next/image';
import Head from 'next/head';
import gsap from 'gsap';
import client from '../../lib/client';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const ProjectSection = styled.div`
  background-color: var(--background);
  padding-bottom: 2rem;

  p {
    line-height: 1.5;
  }
`;

const StyledViewAllProjectsLink = styled.div`
  padding: 2rem 0rem;
  width: 90%;
  margin: 0 auto;
  max-width: 69.375rem;

  a {
    text-decoration: none;
    color: var(--text);
    display: flex;
    align-items: center;
    gap: 0.2rem;
    opacity: 0;

    transition: 0.5s;

    &:hover {
      color: ${(props) => props.theme.colors.textHover};
    }
  }
`;

const ProjectHeroWrapper = styled.section`
  @media (min-width: 48rem) {
    width: 90%;
    margin: 0 auto;
    max-width: 69.375rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'info image';
    margin-bottom: 3rem;

    @media (min-width: 48rem) {
      gap: 2rem;
    }
  }
  img {
    width: 100%;
    height: auto;
    margin-bottom: 2rem;

    @media (min-width: 48rem) {
      grid-area: image;
      margin-bottom: unset;
    }
  }
`;

const StyledProjectHeroInfo = styled.header`

  @media (max-width: 767.9px) {
    margin-top: 2rem;
  }

  @media (min-width: 48rem) {
    grid-area: info;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  h1 {
    margin-bottom: 1rem;
    padding: 0 0 0 5%;

    @media (min-width: 48rem) { 
      padding: unset;
      margin-bottom: unset;
  }
`;

const StyledProjectLinks = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  gap: 1rem;

  @media (min-width: 48rem) {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: var(--text);
    padding: 0.8rem;
    border: 1px solid var(--text);
    margin-bottom: 2rem;
    text-transform: uppercase;

    &:hover {
      background-color: var(--text);
      color: var(--background);
      transition: 0.5s;
    }

    @media (min-width: 48rem) {
      margin-bottom: unset;
    }
  }
`;

const StyledProjectBodyContent = styled.section`
  width: 90%;
  margin: 0 auto;
  max-width: 69.375rem;

  h2 {
    margin-bottom: 1.5rem;
    text-transform: uppercase;
  }
  h3 {
    text-transform: uppercase;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  h4 {
    text-transform: uppercase;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
  }

  p {
    margin-bottom: 1rem;
    @media (min-width: 48rem) {
      margin-bottom: 1.5rem;
      width: 80%;
    }
  }

  img {
    width: 100%;
    margin-bottom: 1rem;
    object-fit: cover;

    @media (min-width: 48rem) {
      margin: 2rem 0rem;
      width: 80%;
    }
  }
  a {
    color: var(--text);
    transition: 0.5s;

    &:hover {
      color: #afb1e9;
    }
  }
`;

const ProjectInfoWrapper = styled.section`
  width: 90%;
  margin: 0 auto;
  max-width: 69.375rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 3fr;
  margin-bottom: 3rem;

  @media (min-width: 48rem) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  h2 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }
`;

const StyledProjectDate = styled.div``;

const StyledProjectRoles = styled.div`
  text-align: right;

  @media (min-width: 48rem) {
    text-align: left;
  }
`;

const StyledProjectTechnology = styled.div`
  grid-column: 1/3;

  @media (min-width: 48rem) {
    grid-column: unset;
    text-align: right;
  }

  ul {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;

    @media (min-width: 48rem) {
      flex-direction: column;
      gap: unset;
    }
  }
`;

export default function Project({ project, nav }) {
  const { projectScreenshot, mainImage } = project;
  const imageProps = useNextSanityImage(
    client.config(),
    projectScreenshot || mainImage
  );

  const el = useRef();
  const projectTl = useRef();

  useLayoutEffect(() => {
    const q = gsap.utils.selector(el);
    projectTl.current = gsap
      .timeline()
      .fromTo(
        q('.all-projects-link'),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.5,
        }
      )
      .fromTo(
        q('.hero-info'),
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
        q('.project-date'),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.2,
        }
      )
      .fromTo(
        q('.project-roles'),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.2,
        }
      )
      .fromTo(
        q('.project-stack'),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.2,
        }
      )
      .fromTo(
        q('.project-body'),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        }
      );
  }, []);

  if (nav && project) {
    return (
      <>
        <Head>
          <title>Shivam Joshi | {project.title}</title>
        </Head>
        <Navigation nav={nav} />
        <main>
          <ProjectSection ref={el}>
            <StyledViewAllProjectsLink>
              <Link href="/projects" passHref>
                <a className="all-projects-link">
                  <BiArrowBack />
                  View All Projects
                </a>
              </Link>
            </StyledViewAllProjectsLink>
            <article>
              <ProjectHeroWrapper className="hero-info">
                <Img
                  {...imageProps}
                  layout="responsive"
                  sizes="(max-width: 1110px) 100vw, 549px"
                  alt={project.title}
                />
                <StyledProjectHeroInfo>
                  <h1>{project?.title}</h1>

                  <StyledProjectLinks>
                    {project?.liveSiteUrl && (
                      <a
                        href={project.liveSiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Live Site
                      </a>
                    )}
                    {project?.sourceCodeUrl && (
                      <a
                        href={project.sourceCodeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
                      </a>
                    )}
                  </StyledProjectLinks>
                </StyledProjectHeroInfo>
              </ProjectHeroWrapper>

              <ProjectInfoWrapper>
                {project?.publishedAt && (
                  <StyledProjectDate>
                    <h2 className="project-date">DATE</h2>
                    <p className="project-date">
                      {project?.publishedAt?.split('-')[0]}
                    </p>
                  </StyledProjectDate>
                )}

                {project?.projectRoles && (
                  <StyledProjectRoles>
                    <h2 className="project-roles">ROLES</h2>

                    <ul>
                      {project?.projectRoles.map((role) => (
                        <li key={role.title}>
                          <p className="project-roles">{role.title}</p>
                        </li>
                      ))}
                    </ul>
                  </StyledProjectRoles>
                )}

                {project?.technologies && (
                  <StyledProjectTechnology>
                    <h2 className="project-stack">STACK</h2>
                    <ul>
                      {project?.technologies.map((technology) => (
                        <li key={technology.title}>
                          <p className="project-stack">{technology.title}</p>
                        </li>
                      ))}
                    </ul>
                  </StyledProjectTechnology>
                )}
              </ProjectInfoWrapper>

              <StyledProjectBodyContent className="project-body">
                <BlockContent blocks={project.body} {...client.config()} />
              </StyledProjectBodyContent>
            </article>
          </ProjectSection>
        </main>
        <Footer nav={nav} />
      </>
    );
  }
  return <p>Loading</p>;
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "project" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug = '' } = context.params;
  const project = await client.fetch(
    `
  *[_type == "project" && slug.current == $slug][0]{
    title,
    mainImage,
   projectScreenshot,
   slug,
   publishedAt,
   liveSiteUrl,
   sourceCodeUrl,
   body,
   projectRoles[]->{title},
   technologies[]->{title},
  }
`,
    { slug }
  );

  const nav = await client.fetch(
    `*[_type == "navigation" && id == "mainNav"]{
      title,
      navItems,
    }`
  );
  return {
    props: {
      project,
      nav,
    },
  };
}
