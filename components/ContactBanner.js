import Link from 'next/link';
import styled from 'styled-components';

const StyledContactBannerContainer = styled.aside`
  background-color: var(--background);
  padding: 5rem 0;

  @media (min-width: 48rem) {
    padding: 5rem 0;
  }
`;

const StyledContactBannerGrid = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 69.375rem;

  h2 {
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  a {
    color: var(--text);
    transition: 0.5s;

    &:hover {
      color: ${(props) => props.theme.colors.textHover};
    }
  }
`;

export default function ContactBanner() {
  return (
    <StyledContactBannerContainer>
      <StyledContactBannerGrid>
        <h2>Contact Me</h2>
        <p>
          Like what you see? Lets work <Link href="/contact">together.</Link>
        </p>
      </StyledContactBannerGrid>
    </StyledContactBannerContainer>
  );
}
