/* eslint-disable react/prop-types */
import { groq } from 'next-sanity';
import styled from 'styled-components';
import ContactBanner from '../../components/ContactBanner';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import ProjectCard from '../../components/ProjectCard';
import { getClient } from '../../lib/sanity.server';

const StyledProjectsContainer = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: ${(props) => props.theme.colors.background};
`;

const StyledHeadingContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 69.375rem;
  margin-bottom: 3rem;

  h2 {
    text-transform: uppercase;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.5;
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
`;

export default function Projects({ data }) {
  const { projects, nav } = data;
  return (
    <>
      <Navigation nav={nav} />
      <StyledProjectsContainer>
        <StyledHeadingContainer>
          <h2>Projects</h2>
          <p>
            Explore some of the projects I've helped manage and develop, as well
            as the stories behind each project.
          </p>
        </StyledHeadingContainer>
        <StyledProjectsWrapper>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </StyledProjectsWrapper>
      </StyledProjectsContainer>
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
