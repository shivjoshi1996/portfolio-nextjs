/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ProjectCard from './ProjectCard';

gsap.registerPlugin(ScrollTrigger);

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
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.textPrimary};
    text-align: center;
    transition: 0.5s;
    border: 1px solid ${(props) => props.theme.colors.textPrimary};
    padding: 0.8em;

    &:hover {
      background-color: ${(props) => props.theme.colors.textPrimary};
      color: ${(props) => props.theme.colors.background};
      transition: 0.5s;
    }
  }
`;

export default function FeaturedProjects({ featuredProjects }) {
  const el = useRef();
  const projectCardTl = useRef();
  const featuredHeading = useRef();

  useEffect(() => {
    gsap.fromTo(
      featuredHeading.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: featuredHeading.current,
        },
      }
    );
  });

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
    <StyledFeaturedProjectsContainer>
      <StyledHeading>
        <h2 ref={featuredHeading}>Featured Projects</h2>
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
