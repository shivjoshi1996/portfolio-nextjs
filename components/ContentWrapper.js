/* eslint-disable react/prop-types */
import styled from 'styled-components';

const StyledContentWrapper = styled.div`
  padding-top: 10vh;
`;

// Adds padding to the top of the page, to account for fixed navigation bar

export default function ContentWrapper({ children }) {
  return <StyledContentWrapper>{children}</StyledContentWrapper>;
}
