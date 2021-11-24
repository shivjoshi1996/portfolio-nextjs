import { groq } from 'next-sanity';
import Link from 'next/link';
import styled from 'styled-components';
import { getClient } from '../lib/sanity.server';

const NavigationWrapper = styled.nav`
  background-color: ${(props) => props.theme.colors.background};
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
    <NavigationWrapper>
      <NavigationContentWrapper>
        <p>{nav[0].title}</p>
        {nav[0].navItems.map((item) => (
          <li key={item.text}>
            <Link href={`${item?.navItemUrl?.linkUrl}`}>{item.text}</Link>
          </li>
        ))}
      </NavigationContentWrapper>
    </NavigationWrapper>
  );
}
