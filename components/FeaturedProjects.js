/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Link from 'next/link';
import { urlFor } from '../lib/sanity';
import ProjectCard from './ProjectCard';

const StyledFeaturedProjectsContainer = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: ${(props) => props.theme.colors.background};
`;

const StyledHeading = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 69.375rem;

  h2 {
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
`;

const StyledFeaturedProjectsWrapper = styled.div`
  width: 90%;
  max-width: 69.375rem;
  margin: 0 auto;
  margin-bottom: 2rem;

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
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.textPrimary};
    text-align: center;
  }
`;

export default function FeaturedProjects({ featuredProjects }) {
  return (
    <StyledFeaturedProjectsContainer>
      <StyledHeading>
        <h2>Featured Projects</h2>
      </StyledHeading>
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
