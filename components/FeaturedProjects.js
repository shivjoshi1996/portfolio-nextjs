/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Link from 'next/link';
import { urlFor } from '../lib/sanity';
import ProjectCard from './ProjectCard';

const StyledFeaturedProjectsContainer = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: ${(props) => props.theme.colors.background};

  h2 {
    text-transform: uppercase;
    font-size: 1.5rem;
    padding-left: 5%;
    margin-bottom: 2rem;
  }
`;

const StyledFeaturedProjectsWrapper = styled.div`
  width: 90%;
  margin: 0 auto;

  @media (min-width: 48rem) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`;

const StyledViewAllLink = styled.div`
  text-align: center;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.textPrimary};
    text-align: center;
  }
`;

export default function FeaturedProjects({ featuredProjects }) {
  return (
    <StyledFeaturedProjectsContainer>
      <h2>Featured Projects</h2>
      <StyledFeaturedProjectsWrapper>
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </StyledFeaturedProjectsWrapper>
      <StyledViewAllLink>
        <Link href="/projects">View All Projects</Link>
      </StyledViewAllLink>
    </StyledFeaturedProjectsContainer>
  );
}
