import styled from 'styled-components';
import Image from 'next/image';
import { usePreviewSubscription, urlFor, PortableText } from '../lib/sanity';

const StyledFeaturedProjectsContainer = styled.div`
  padding-top: 2rem;
  background-color: ${(props) => props.theme.colors.background};

  h2 {
    text-transform: uppercase;
    font-size: 1.5rem;
    padding-left: 5%;
    margin-bottom: 2rem;
  }
`;

const StyledFeaturedProjectsWrapper = styled.div``;

const StyledImage = styled.div`
  width: 100vw;
  height: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default function FeaturedProjects({ featuredProjects }) {
  return (
    <StyledFeaturedProjectsContainer>
      <h2>Featured Projects</h2>
      {featuredProjects.map((project) => (
        <div key={project.title}>
          <p>{project.title}</p>
          <p>{project.publishedAt.split('-')[0]}</p>
          <StyledImage>
            <img src={urlFor(project.mainImage).url()} />
          </StyledImage>
          <a href={`/projects/${project.slug.current}`}>View Project</a>
        </div>
      ))}
    </StyledFeaturedProjectsContainer>
  );
}
