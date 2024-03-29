import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import PropTypes from 'prop-types';
import ThemeToggle from './ThemeToggle';

const NavigationContainer = styled.nav`
  background-color: var(--background);
  border-bottom: 1px solid var(--text);
  color: var(--text);
  position: fixed;
  width: 100%;
  z-index: 99;
`;

const MobileNavigationContainer = styled.div`
  min-height: 10vh;
  width: 90%;
  margin: 0 auto;
  max-width: 69.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavigationLogo = styled.div`
  padding: 1rem 0rem;
  a {
    text-decoration: none;
    color: var(--text);
    font-size: 1.2rem;
    font-weight: 700;

    &:hover {
      color: ${(props) => props.theme.colors.textHover};
    }

    @media (min-width: 48rem) {
      font-size: 1.5rem;
    }
    @media (min-width: 69.375rem) {
      font-size: 1.7rem;
    }
  }
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavigationHamburger = styled.div`
  button {
    border: none;
    background-image: none;
    background: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    -webkit-appearance: button;
    box-shadow: none;
    cursor: pointer;

    &:hover {
      #rect2,
      #rect3 {
        width: 100%;
      }
    }
  }
  svg {

    &:hover {
      fill: ${(props) => props.theme.colors.textHover};
    }

    display: block;
    fill: var(--text);
    #rect1,
    #rect2,
    #rect3 {
      transition: 0.4s;
    }
    #rect1 {
      transform-box: fill-box;
      transform-origin: center;
      transform: rotate(${(props) => (props.isOpen ? '15deg' : '0deg')});
    }
    #rect3 {
      transform-box: fill-box;
      transform-origin: center;
      transform: rotate(${(props) => (props.isOpen ? '-15deg' : '0deg')});
    }
    }
  }
`;

const MobileDrawerContainer = styled.div`
  position: absolute;
  margin-top: 1px;
  width: 100vw;
  height: 90vh;

  background-color: var(--background);
  color: var(--text);
  opacity: ${(props) => props.mobileDrawerOpacity};
  transform: translateX(${(props) => props.mobileDrawerPosition});
  visibility: ${(props) => props.visibility};
  transition: 0.4s;
`;

const MobileNavLinksWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 69.375rem;
`;

const MobileNavLinks = styled.ul`
  @media (min-width: 48rem) {
    margin-top: 3rem;
  }
  li {
    padding: 1rem 0rem;
    list-style: none;
    max-width: 69.375rem;
  }
  a {
    text-decoration: none;

    color: var(--text);
    border-bottom: 2px solid var(--text);
    font-size: 2rem;
    transition: 0.3s;

    &:hover {
      color: ${(props) => props.theme.colors.textHover};
    }

    @media (min-width: 48rem) {
      font-size: 5rem;
    }
  }
`;

const StyledSocialLinks = styled.ul`
  margin-top: 2rem;
  max-width: 69.375rem;
  display: flex;
  gap: 2rem;

  @media (min-width: 48rem) {
    margin-top: 4rem;
    gap: 5rem;
  }

  a {
    text-decoration: none;
    color: var(--text);
  }

  svg {
    font-size: 1.6rem;
    transition: 0.3s;

    &:hover {
      color: ${(props) => props.theme.colors.textHover};
    }

    @media (min-width: 48rem) {
      font-size: 5rem;
    }
  }
`;

const NavigationPagePadding = styled.div`
  padding-bottom: 10vh;
  background-color: var(--background);
`;

export default function Navigation({ nav }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavigationContainer role="navigation" aria-label="Main Menu">
        <MobileNavigationContainer>
          <NavigationLogo className="logo">
            <Link href="/">{nav[0].title}</Link>
          </NavigationLogo>
          <StyledButtonWrapper>
            <ThemeToggle />
            <NavigationHamburger className="hamburger" isOpen={isOpen}>
              <button
                type="button"
                aria-expanded={isOpen ? 'true' : 'false'}
                aria-controls="main-menu"
                onClick={handleHamburgerClick}
                aria-label="Open Menu"
              >
                <svg
                  viewBox="0 0 50 30"
                  width="50"
                  height="30"
                  fill="%23ddd"
                  aria-hidden="true"
                >
                  <rect
                    id="rect1"
                    width="100%"
                    height="20%"
                    y={isOpen ? '20%' : '0'}
                    fill="%23ddd"
                  />
                  <rect
                    id="rect2"
                    y="40%"
                    width="55%"
                    height="20%"
                    fillOpacity={isOpen ? '0.0' : null}
                    fill="%23ddd"
                  />
                  <rect
                    id="rect3"
                    y={isOpen ? '60%' : '80%'}
                    width={isOpen ? '100%' : '32%'}
                    height="20%"
                    fill="%23ddd"
                  />
                </svg>
              </button>
            </NavigationHamburger>
          </StyledButtonWrapper>
        </MobileNavigationContainer>
        <MobileDrawerContainer
          mobileDrawerOpacity={isOpen ? '1' : '0'}
          mobileDrawerPosition={isOpen ? '0' : '100vw'}
          visibility={isOpen ? 'visible' : 'hidden'}
        >
          <MobileNavLinksWrapper>
            <MobileNavLinks id="main-menu">
              {nav[0].navItems.map((item) => (
                <li className="navlink" key={item.text}>
                  <Link href={item?.navItemUrl?.linkUrl}>{item.text}</Link>
                </li>
              ))}
            </MobileNavLinks>
            <StyledSocialLinks>
              <li className="social-link">
                <a
                  href="https://github.com/shivjoshi1996"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View my GitHub profile"
                >
                  <FaGithub aria-hidden="true" title="View my GitHub profile" />
                </a>
              </li>
              <li className="social-link">
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
              <li className="social-link">
                <a
                  href="https://twitter.com/Shiv_J"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View my Twitter profile"
                >
                  <FaTwitter
                    aria-hidden="true"
                    title="View my Twitter profile"
                  />
                </a>
              </li>
            </StyledSocialLinks>
          </MobileNavLinksWrapper>
        </MobileDrawerContainer>
      </NavigationContainer>
      <NavigationPagePadding />
    </>
  );
}

Navigation.propTypes = {
  nav: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      navItems: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          navItemUrl: PropTypes.shape({
            linkUrl: PropTypes.string,
          }),
        })
      ),
    })
  ),
};
