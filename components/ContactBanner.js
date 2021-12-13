import Link from 'next/link';
import styled from 'styled-components';

const StyledContactBannerSection = styled.section`
  background-color: ${(props) => props.theme.colors.background};
  padding: 3rem 0;

  @media (min-width: 48rem) {
    padding: 3rem 0;
  }
`;

const StyledContactBannerGrid = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 69.375rem;
  display: grid;
  justify-items: center;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 48rem) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    justify-items: stretch;

    grid-template-areas:
      'contact cta'
      'subline cta';
  }

  h2 {
    text-transform: uppercase;
    font-size: 1.5rem;

    @media (min-width: 48rem) {
      grid-area: contact;
      text-align: left;
    }
  }

  p {
    @media (min-width: 48rem) {
      grid-area: subline;
    }
  }

  a {
    color: ${(props) => props.theme.colors.textPrimary};
    text-transform: uppercase;

    @media (min-width: 48rem) {
      grid-area: cta;
      text-align: right;
    }
  }
`;

export default function ContactBanner() {
  return (
    <StyledContactBannerSection>
      <StyledContactBannerGrid>
        <h2>Contact Me</h2>
        <p>Like what you see? Lets work together.</p>
        <Link href="/contact">Contact</Link>
      </StyledContactBannerGrid>
    </StyledContactBannerSection>
  );
}
