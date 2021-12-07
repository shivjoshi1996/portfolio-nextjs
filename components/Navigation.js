import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';

const NavigationContainer = styled.nav`
  background-color: ${(props) => props.theme.colors.background};
  border-bottom: 2px solid ${(props) => props.theme.colors.textPrimary};
  color: ${(props) => props.theme.colors.textPrimary};
  position: fixed;
  width: 100%;
`;

const MobileNavigationContainer = styled.div`
  min-height: 10vh;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavigationLogo = styled.div`
  padding: 1rem 0rem;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.textPrimary};
    font-size: 1rem;
  }
`;

const NavigationHamburger = styled.div`
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover {
      #rect2,
      #rect3 {
        width: 100px;
      }
    }
  }
  svg {
    fill: ${(props) => props.theme.colors.textPrimary};
    #rect1,
    #rect2,
    #rect3 {
      transition: 0.5s;
    }
    #rect1 {
      transform-box: fill-box;
      transform-origin: center;
    }
    #rect3 {
      transform-box: fill-box;
      transform-origin: center;
    }
  }
`;

const MobileDrawerContainer = styled.div`
  position: absolute;
  margin-top: 2px;
  width: 100vw;
  height: 90vh;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textPrimary};
  opacity: ${(props) => props.mobileDrawerOpacity};
  transform: translateX(${(props) => props.mobileDrawerPosition});
  transition: 0.8s;

  li {
    padding: 1rem 0rem;
    list-style: none;
    width: 90%;
    margin: 0 auto;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.textPrimary};
    border-bottom: 2px solid ${(props) => props.theme.colors.textPrimary};
    font-size: clamp(2rem, 2vw, 4rem);
  }
`;

const NavigationContentWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.textPrimary};
  width: 90%;
  margin: 0 auto;
  padding: 30px 0px;
  text-transform: uppercase;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.textPrimary};
  }
`;

export default function Navigation({ nav }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <NavigationContainer>
      <MobileNavigationContainer>
        <NavigationLogo>
          <Link href="/">{nav[0].title}</Link>
        </NavigationLogo>
        <NavigationHamburger>
          <button type="button" onClick={handleHamburgerClick}>
            <svg viewBox="0 0 100 80" width="100%" height="30">
              <rect
                id="rect1"
                width="100"
                height="10"
                y={isOpen ? '30' : '0'}
                transform={isOpen ? 'rotate(45)' : null}
              />
              <rect
                id="rect2"
                y="30"
                width="55"
                height="10"
                fillOpacity={isOpen ? '0.0' : null}
              />
              <rect
                id="rect3"
                y={isOpen ? '30' : '60'}
                width={isOpen ? '100' : '30'}
                height="10"
                transform={isOpen ? 'rotate(-45)' : null}
              />
            </svg>
          </button>
        </NavigationHamburger>
      </MobileNavigationContainer>
      <MobileDrawerContainer
        mobileDrawerOpacity={isOpen ? '1' : '0'}
        mobileDrawerPosition={isOpen ? '0' : '100vw'}
      >
        {nav[0].navItems.map((item) => (
          <li key={item.text}>
            <Link href={item?.navItemUrl?.linkUrl}>{item.text}</Link>
          </li>
        ))}
      </MobileDrawerContainer>

      {/*
      <NavigationContentWrapper>
        <Link href="/">{nav[0].title}</Link>
        {nav[0].navItems.map((item) => (
          <li key={item.text}>
            <Link href={`${item?.navItemUrl?.linkUrl}`}>{item.text}</Link>
          </li>
        ))}
      </NavigationContentWrapper>

        */}
    </NavigationContainer>
  );
}