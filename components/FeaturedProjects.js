import styled from 'styled-components';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';

gsap.registerPlugin(ScrollTrigger);

const StyledFeaturedProjectsContainer = styled.section`
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: var(--background);
`;

const StyledHeading = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 69.375rem;

  h2 {
    margin-bottom: 2rem;
  }
`;

const StyledFeaturedProjectsWrapper = styled.div`
  width: 90%;
  max-width: 69.375rem;
  margin: 0 auto;
  margin-bottom: 4rem;

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
    color: var(--text);
    text-align: center;
    transition: 0.5s;
    border: 1px solid var(--text);
    padding: 0.8em;
    font-weight: bold;

    &:hover {
      background-color: var(--text);
      color: var(--background);
      transition: 0.5s;
    }
  }
`;

export default function FeaturedProjects({ featuredProjects }) {
  const el = useRef();
  const projectCardTl = useRef();

  // PROJECT CARDS ANIMATION

  useEffect(() => {
    const projectsGSAP = gsap.utils.toArray('.project-card');

    projectsGSAP.forEach((projectGSAP) => {
      const q = gsap.utils.selector(projectGSAP);
      projectCardTl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: projectGSAP,
            start: 'top 80%',
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
        );
    });
  }, []);
  return (
    <StyledFeaturedProjectsContainer>
      <StyledHeading>
        <h2>Featured Projects</h2>
      </StyledHeading>
      <StyledFeaturedProjectsWrapper ref={el}>
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

FeaturedProjects.propTypes = {
  featuredProjects: PropTypes.arrayOf(PropTypes.object).isRequired,
};
