/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Link from 'next/link';
import { urlFor } from '../lib/sanity';

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

  .roles {
    text-align: right;
    font-size: 0.8rem;
    text-transform: uppercase;
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
        {featuredProjects.map((project) => {
          const roles = [];
          let rolesString;

          project.projectRoles.forEach((role) => {
            roles.push(role.title);
          });

          if (roles.length > 1) {
            rolesString = roles.join(', ');
          } else if (roles.length === 1) {
            rolesString = roles.toString();
          } else {
            rolesString = '';
          }

          return (
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={urlFor(project.mainImage).url()}
                  alt={`${project.title} project`}
                />
              </StyledImage>
              <p className="roles">{rolesString}</p>
            </StyledFeaturedProject>
          );
        })}
      </StyledFeaturedProjectsWrapper>
      <StyledViewAllLink>
        <Link href="/projects">View All Projects</Link>
      </StyledViewAllLink>
    </StyledFeaturedProjectsContainer>
  );
}
