/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.background};
  padding: 2rem 0;
  border-top: 1px solid ${(props) => props.theme.colors.textPrimary};
`;

const StyledContentContainer = styled.div`
  a {
    color: ${(props) => props.theme.colors.textPrimary};
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
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/shivam-joshi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/Shiv_J"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
          </StyledSocialLinks>
          <StyledCopyright>
            &copy;2021 -{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/shivjoshi1996/portfolio-nextjs"
            >
              Created by Shivam Joshi
            </a>
          </StyledCopyright>
        </StyledContentContainer>
      </StyledFooter>
    </>
  );
}
