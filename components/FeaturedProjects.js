import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { usePreviewSubscription, urlFor, PortableText } from '../lib/sanity';

const StyledFeaturedProjectsContainer = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;
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
`;

const StyledFeaturedProject = styled.div`
  margin-bottom: 2rem;
`;

const StyledProjectDateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  margin-bottom: 1rem;

  .datedivider {
    background-color: ${(props) => props.theme.colors.textPrimary};
    height: 1px;
    width: 100%;
  }
`;

const StyledProjectInfoWrapper = styled.div`
  margin-bottom: 0.5rem;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.textPrimary};
  }
`;

const StyledImage = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 0.5rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default function FeaturedProjects({ featuredProjects }) {
  return (
    <StyledFeaturedProjectsContainer>
      <h2>Featured Projects</h2>
      <StyledFeaturedProjectsWrapper>
        {featuredProjects.map((project) => (
          <StyledFeaturedProject key={project.title}>
            <StyledProjectDateWrapper>
              <span>{project.publishedAt.split('-')[0]}</span>
              <span className="datedivider" />
            </StyledProjectDateWrapper>
            <StyledProjectInfoWrapper>
              <Link href={`/projects/${project.slug.current}`}>
                {project.title}
              </Link>
            </StyledProjectInfoWrapper>
            <StyledImage>
              <img src={urlFor(project.mainImage).url()} />
            </StyledImage>
          </StyledFeaturedProject>
        ))}
      </StyledFeaturedProjectsWrapper>
    </StyledFeaturedProjectsContainer>
  );
}
