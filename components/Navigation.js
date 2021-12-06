import Link from 'next/link';
import styled from 'styled-components';

const NavigationContainer = styled.nav`
  background-color: ${(props) => props.theme.colors.background};
  border-bottom: 2px solid ${(props) => props.theme.colors.textPrimary};
  color: ${(props) => props.theme.colors.textPrimary};
`;

const MobileNavigationContainer = styled.div`
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
    #rect2,
    #rect3 {
      transition: 0.5s;
    }
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
  return (
    <NavigationContainer>
      <MobileNavigationContainer>
        <NavigationLogo>
          <Link href="/">{nav[0].title}</Link>
        </NavigationLogo>
        <NavigationHamburger>
          <button type="button">
            <svg viewBox="0 0 100 80" width="100" height="30">
              <rect id="rect1" width="100" height="10" />
              <rect id="rect2" y="30" width="55" height="10" />
              <rect id="rect3" y="60" width="30" height="10" />
            </svg>
          </button>
        </NavigationHamburger>
      </MobileNavigationContainer>
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
