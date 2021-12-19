import Link from 'next/link';
import styled from 'styled-components';

const StyledContactBannerSection = styled.section`
  background-color: ${(props) => props.theme.colors.background};
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
    color: ${(props) => props.theme.colors.textPrimary};
    transition: 0.5s;

    &:hover {
      color: ${(props) => props.theme.colors.textHover};
    }
  }
`;

export default function ContactBanner() {
  return (
    <StyledContactBannerSection>
      <StyledContactBannerGrid>
        <h2>Contact Me</h2>
        <p>
          Like what you see? Lets work <Link href="/contact">together.</Link>
        </p>
      </StyledContactBannerGrid>
    </StyledContactBannerSection>
  );
}
