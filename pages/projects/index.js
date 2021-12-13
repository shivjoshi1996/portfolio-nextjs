/* eslint-disable react/prop-types */
import { groq } from 'next-sanity';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import ProjectCard from '../../components/ProjectCard';
import { getClient } from '../../lib/sanity.server';

const StyledProjectsContainer = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: ${(props) => props.theme.colors.background};

  h2 {
    text-transform: uppercase;
    font-size: 1.5rem;
    padding-left: 5%;
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 2rem;
    padding-left: 5%;
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
`;

export default function Projects({ data }) {
  const { projects, nav } = data;
  return (
    <>
      <Navigation nav={nav} />
      <StyledProjectsContainer>
        <h2>Projects</h2>
        <p>Explore a selection of my projects below.</p>
        <StyledProjectsWrapper>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </StyledProjectsWrapper>
      </StyledProjectsContainer>
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
