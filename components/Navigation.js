/* eslint-disable react/prop-types */
import Link from 'next/link';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import gsap from 'gsap';

const NavigationContainer = styled.nav`
  background-color: ${(props) => props.theme.colors.background};
  border-bottom: 1px solid ${(props) => props.theme.colors.textPrimary};
  color: ${(props) => props.theme.colors.textPrimary};
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
  opacity: 0;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.textPrimary};
    font-size: 1.2rem;

    @media (min-width: 48rem) {
      font-size: 1.5rem;
    }
    @media (min-width: 69.375rem) {
      font-size: 1.7rem;
    }
  }
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
    display: block;
    fill: ${(props) => props.theme.colors.textPrimary};
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

  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textPrimary};
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
    opacity: 0;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.textPrimary};
    border-bottom: 2px solid ${(props) => props.theme.colors.textPrimary};
    font-size: 2rem;

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

  li {
    opacity: 0;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.textPrimary};
  }

  svg {
    font-size: 1.6rem;

    @media (min-width: 48rem) {
      font-size: 5rem;
    }
  }
`;

const NavigationPagePadding = styled.div`
  padding-bottom: 10vh;
  background-color: ${(props) => props.theme.colors.background};
`;

export default function Navigation({ nav }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  const el = useRef();
  const q = gsap.utils.selector(el);
  const navbarTl = useRef();

  useEffect(() => {
    navbarTl.current = gsap
      .timeline()
      .fromTo(
        q('.logo'),
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
        q('.hamburger'),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        }
      );
  }, []);

  const navLinksTl = useRef();

  useLayoutEffect(() => {
    if (isOpen) {
      navLinksTl.current = gsap
        .timeline()
        .to(q('.navlink'), {
          opacity: 1,
          duration: 0.3,
          stagger: 0.3,
        })
        .to(q('.social-link'), {
          opacity: 1,
          duration: 0.3,
          stagger: 0.2,
        });
    }
  }, [isOpen]);

  return (
    <>
      <NavigationContainer ref={el}>
        <MobileNavigationContainer>
          <NavigationLogo className="logo">
            <Link href="/">{nav[0].title}</Link>
          </NavigationLogo>
          <NavigationHamburger className="hamburger" isOpen={isOpen}>
            <button type="button" onClick={handleHamburgerClick}>
              <svg viewBox="0 0 50 30" width="50" height="30" fill="%23ddd">
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
        </MobileNavigationContainer>
        <MobileDrawerContainer
          mobileDrawerOpacity={isOpen ? '1' : '0'}
          mobileDrawerPosition={isOpen ? '0' : '100vw'}
          visibility={isOpen ? 'visible' : 'hidden'}
        >
          <MobileNavLinksWrapper>
            <MobileNavLinks>
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
                >
                  <FaGithub />
                </a>
              </li>
              <li className="social-link">
                <a
                  href="https://www.linkedin.com/in/shivam-joshi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li className="social-link">
                <a
                  href="https://twitter.com/Shiv_J"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
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
