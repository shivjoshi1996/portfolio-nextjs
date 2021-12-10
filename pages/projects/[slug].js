/* eslint-disable react/prop-types */
import React from 'react';
import { groq } from 'next-sanity';
import styled from 'styled-components';
import Link from 'next/link';
import { BiArrowBack } from 'react-icons/bi';
import BlockContent from '@sanity/block-content-to-react';
import client from '../../lib/client';
import Navigation from '../../components/Navigation';
import { urlFor } from '../../lib/sanity';

const ProjectSection = styled.section`
  background-color: ${(props) => props.theme.colors.background};
`;

const StyledViewAllProjectsLink = styled.div`
  padding: 1rem 0rem 1rem 5%;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.textPrimary};
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
`;

const ProjectHeroWrapper = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;

const StyledProjectBodyContent = styled.div`
  width: 90%;
  margin: 0 auto;
  img {
    width: 100%;
    height: auto;
  }
`;

const ProjectInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledProjectDate = styled.div``;

const StyledProjectTechnology = styled.div``;

const StyledProjectRoles = styled.div``;

export default function Project({ project, nav }) {
  console.log(project);
  if (nav && project) {
    return (
      <>
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={urlFor(project.mainImage).url()}
              alt={`${project.title} project`}
            />
            <h2>{project?.title}</h2>
          </ProjectHeroWrapper>

          <ProjectInfoWrapper>
            {project?.publishedAt && (
              <StyledProjectDate>
                <h3>DATE</h3>
                <p>{project?.publishedAt}</p>
              </StyledProjectDate>
            )}

            {project?.technologies && (
              <StyledProjectTechnology>
                <h3>TECHNOLOGIES USED</h3>
                {project?.technologies.map((technology) => (
                  <p key={technology.title}>{technology.title}</p>
                ))}
              </StyledProjectTechnology>
            )}

            {project?.projectRoles && (
              <StyledProjectRoles>
                <h3>ROLES</h3>

                {project?.projectRoles.map((role) => (
                  <p key={role.title}>{role.title}</p>
                ))}
              </StyledProjectRoles>
            )}
          </ProjectInfoWrapper>

          <StyledProjectBodyContent>
            <BlockContent blocks={project.body} {...client.config()} />
          </StyledProjectBodyContent>
        </ProjectSection>
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
    fallback: true,
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
