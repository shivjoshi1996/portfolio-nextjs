import styled from 'styled-components';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import PropTypes from 'prop-types';

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.background};
  padding: 2rem 0;
  border-top: 1px solid ${(props) => props.theme.colors.textPrimary};
`;

const StyledContentContainer = styled.div`
  a {
    color: ${(props) => props.theme.colors.textPrimary};

    transition: 0.5s;

    &:hover {
      color: ${(props) => props.theme.colors.textHover};
    }
  }

  text-align: center;
  display: grid;
  justify-items: center;
  grid-gap: 2rem;
  width: 90%;
  max-width: 69.375rem;
  margin: 0 auto;

  @media (min-width: 48rem) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'logo navigation'
      'copyright social';
    align-items: center;
  }
`;

const StyledLogo = styled.div`
  a {
    text-decoration: none;

    transition: 0.5s;

    &:hover {
      color: ${(props) => props.theme.colors.textHover};
    }
  }

  @media (min-width: 48rem) {
    justify-self: start;
    grid-area: logo;
  }
`;

const StyledNavigationLinks = styled.ul`
  display: flex;
  text-transform: uppercase;
  gap: 1rem;

  @media (min-width: 48rem) {
    grid-area: navigation;
    justify-self: end;
  }
`;

const StyledSocialLinks = styled.ul`
  display: flex;
  gap: 2rem;

  @media (min-width: 48rem) {
    grid-area: social;
    justify-self: end;
  }

  svg {
    font-size: 1.6rem;

    transition: 0.5s;

    &:hover {
      fill: ${(props) => props.theme.colors.textHover};
    }
  }
`;

const StyledCopyright = styled.p`
  @media (min-width: 48rem) {
    grid-area: copyright;
    justify-self: start;
  }
`;

export default function Footer({ nav }) {
  return (
    <>
      <StyledFooter>
        <StyledContentContainer>
          <StyledLogo>
            <Link href="/">SHIVAM JOSHI</Link>
          </StyledLogo>
          <StyledNavigationLinks>
            {nav[0].navItems.map((item) => (
              <li key={item.text}>
                <Link href={item?.navItemUrl?.linkUrl}>{item.text}</Link>
              </li>
            ))}
          </StyledNavigationLinks>
          <StyledSocialLinks>
            <li>
              <a
                href="https://github.com/shivjoshi1996"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View my GitHub profile"
              >
                <FaGithub aria-hidden="true" title="View my GitHub profile" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/shivam-joshi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View my LinkedIn profile"
              >
                <FaLinkedin
                  aria-hidden="true"
                  title="View my LinkedIn profile"
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/Shiv_J"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View my Twitter profile"
              >
                <FaTwitter aria-hidden="true" title="View my Twitter profile" />
              </a>
            </li>
          </StyledSocialLinks>
          <StyledCopyright>
            &copy;2021 -{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/shivjoshi1996/portfolio-nextjs"
              title="View the source code for this website"
              aria-label="View the source code for this website"
            >
              Created by Shivam Joshi
            </a>
          </StyledCopyright>
        </StyledContentContainer>
      </StyledFooter>
    </>
  );
}

Footer.propTypes = {
  nav: PropTypes.arrayOf(PropTypes.object).isRequired,
};
