/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Link from 'next/link';

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.background};
`;

export default function Footer({ nav }) {
  return (
    <>
      <StyledFooter>
        {nav[0].navItems.map((item) => (
          <li key={item.text}>
            <Link href={item?.navItemUrl?.linkUrl}>{item.text}</Link>
          </li>
        ))}
        <p>&copy;2021 - All rights reserved - Shivam Joshi</p>
      </StyledFooter>
    </>
  );
}
