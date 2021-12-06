import styled from 'styled-components';
import Image from 'next/image';
import { usePreviewSubscription, urlFor, PortableText } from '../lib/sanity';

const StyledFeaturedProjectsContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
`;
const StyledImage = styled.div`
  width: 500px;
  height: 500px;
`;

export default function FeaturedProjects({ featuredProjects }) {
  return (
    <StyledFeaturedProjectsContainer>
      <h2>Featured Projects</h2>
      {featuredProjects.map((project) => (
        <div key={project.title}>
          <p>{project.title}</p>
          <p>{project.publishedAt}</p>
          <StyledImage>
            {/* eslint-disable-next-line  */}
            <Image src={urlFor(project.mainImage).url()} width={300} height={300} layout="responsive" />
          </StyledImage>
          <a href={`/projects/${project.slug.current}`}>View Project</a>
        </div>
      ))}
    </StyledFeaturedProjectsContainer>
  );
}
