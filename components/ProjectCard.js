import styled from 'styled-components';
import Link from 'next/link';
import { urlFor } from '../lib/sanity';

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
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    transition: 1s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const StyledRoles = styled.p`
  text-align: right;
  font-size: 0.8rem;
  text-transform: uppercase;
`;

export default function ProjectCard({ project }) {
  console.log(project);
  const { title, mainImage, slug, projectRoles, publishedAt } = project;

  // Get roles, make into a string with commas seperating
  const roles = [];
  let rolesString;

  if (projectRoles) {
    projectRoles.forEach((role) => {
      roles.push(role.title);
    });
  }

  if (roles.length > 1) {
    rolesString = roles.join(', ');
  } else if (roles.length === 1) {
    rolesString = roles.toString();
  } else {
    rolesString = '';
  }

  return (
    <>
      <StyledFeaturedProject key={title}>
        <StyledProjectDateWrapper>
          <span>{publishedAt?.split('-')[0]}</span>
          <span className="datedivider" />
        </StyledProjectDateWrapper>
        <StyledProjectInfoWrapper>
          <Link href={`/projects/${slug.current}`}>{title}</Link>
        </StyledProjectInfoWrapper>
        <StyledImage>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={urlFor(mainImage).url()} alt={`${title} project`} />
        </StyledImage>
        <StyledRoles>{rolesString}</StyledRoles>
      </StyledFeaturedProject>
    </>
  );
}
