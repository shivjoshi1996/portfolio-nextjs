/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { groq } from 'next-sanity';
import styled from 'styled-components';
import Link from 'next/link';
import { BiArrowBack } from 'react-icons/bi';
import BlockContent from '@sanity/block-content-to-react';
import { useNextSanityImage } from 'next-sanity-image';
import Img from 'next/image';
import Head from 'next/head';
import client from '../../lib/client';
import Navigation from '../../components/Navigation';
import { urlFor } from '../../lib/sanity';
import Footer from '../../components/Footer';

const ProjectSection = styled.section`
  background-color: ${(props) => props.theme.colors.background};
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
    color: ${(props) => props.theme.colors.textPrimary};
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
`;

const ProjectHeroWrapper = styled.div`
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

const StyledProjectHeroInfo = styled.div`

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
  h2 {
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
    color: ${(props) => props.theme.colors.textPrimary};
    padding: 0.8rem;
    border: 1px solid ${(props) => props.theme.colors.textPrimary};
    margin-bottom: 2rem;

    @media (min-width: 48rem) {
      margin-bottom: unset;
    }
  }
`;

const StyledProjectBodyContent = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 69.375rem;
  p {
    margin-bottom: 1rem;
  }
  img {
    width: 100%;
    margin-bottom: 1rem;
    object-fit: cover;
  }
  a {
    color: ${(props) => props.theme.colors.textPrimary};
  }
`;

const ProjectInfoWrapper = styled.div`
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

  h3 {
    margin-bottom: 0.5rem;
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
  const { mainImage = '' } = project;
  const imageProps = useNextSanityImage(client.config(), mainImage);

  if (nav && project) {
    return (
      <>
        <Head>
          <title>Shivam Joshi | {project.title}</title>
        </Head>
        <Navigation nav={nav} />
        <ProjectSection>
          <StyledViewAllProjectsLink>
            <Link className="all-projects-link" href="/projects" passHref>
              <a>
                <BiArrowBack />
                View All Projects
              </a>
            </Link>
          </StyledViewAllProjectsLink>
          <ProjectHeroWrapper>
            <Img
              {...imageProps}
              layout="responsive"
              sizes="(max-width: 1110px) 100vw, 549px"
            />
            <StyledProjectHeroInfo>
              <h2>{project?.title}</h2>

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
                <h3>DATE</h3>
                <p>{project?.publishedAt?.split('-')[0]}</p>
              </StyledProjectDate>
            )}

            {project?.projectRoles && (
              <StyledProjectRoles>
                <h3>ROLES</h3>

                <ul>
                  {project?.projectRoles.map((role) => (
                    <li key={role.title}>
                      <p>{role.title}</p>
                    </li>
                  ))}
                </ul>
              </StyledProjectRoles>
            )}

            {project?.technologies && (
              <StyledProjectTechnology>
                <h3>STACK</h3>
                <ul>
                  {project?.technologies.map((technology) => (
                    <li key={technology.title}>
                      <p>{technology.title}</p>
                    </li>
                  ))}
                </ul>
              </StyledProjectTechnology>
            )}
          </ProjectInfoWrapper>

          <StyledProjectBodyContent>
            <BlockContent blocks={project.body} {...client.config()} />
          </StyledProjectBodyContent>
        </ProjectSection>
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
