import styled from 'styled-components';
import Link from 'next/link';
import { useNextSanityImage } from 'next-sanity-image';
import Img from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import PropTypes from 'prop-types';
import client from '../lib/client';

gsap.registerPlugin(ScrollTrigger);

const StyledFeaturedProject = styled.div`
  @media (max-width: 47.8125rem) {
    margin-bottom: 2rem;
  }
`;

const StyledProjectDateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  margin-bottom: 1rem;

  span {
    opacity: 0;
  }

  .datedivider {
    background-color: ${(props) => props.theme.colors.textPrimary};
    height: 1px;
    width: 100%;
  }
`;

const StyledProjectInfoWrapper = styled.div`
  opacity: 0;
  margin-bottom: 0.5rem;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.textPrimary};
    cursor: pointer;

    transition: 0.5s;

    &:hover {
      color: ${(props) => props.theme.colors.textHover};
    }
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
  opacity: 0;
  text-align: right;
  font-size: 0.8rem;
  text-transform: uppercase;
`;

const StyledTagline = styled.p`
  opacity: 0;
  margin-top: 1rem;
  line-height: 1.2;
`;

export default function ProjectCard({ project }) {
  const imageProps = useNextSanityImage(client.config(), project.mainImage);

  const { title, tagline, slug, projectRoles, publishedAt } = project;

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
      <StyledFeaturedProject key={title} className="project-card">
        <StyledProjectDateWrapper>
          <span className="project-card-date">
            {publishedAt?.split('-')[0]}
          </span>
          <span className="datedivider" />
        </StyledProjectDateWrapper>
        <StyledProjectInfoWrapper className="project-name">
          <Link href={`/projects/${slug.current}`}>{title}</Link>
        </StyledProjectInfoWrapper>
        <StyledImage className="project-image">
          <Link href={`/projects/${slug.current}`} passHref>
            <div>
              <Img
                {...imageProps}
                layout="responsive"
                sizes="(max-width: 1110px) 100vw, 539px"
              />
            </div>
          </Link>
        </StyledImage>
        <StyledRoles className="project-roles">{rolesString}</StyledRoles>
        <StyledTagline className="project-tagline">{tagline}</StyledTagline>
      </StyledFeaturedProject>
    </>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};
