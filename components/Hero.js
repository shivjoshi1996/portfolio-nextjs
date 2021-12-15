import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { urlFor } from '../lib/sanity';

const StyledHeroWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  border-bottom: 1 px solid ${(props) => props.theme.colors.textPrimary};
`;

const StyledHero = styled.div`
  padding-top: 3rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  max-width: 69.375rem;
`;

const StyledHeroText = styled.div`
  flex: 1;
  color: ${(props) => props.theme.colors.textPrimary};
  h1 {
    margin-bottom: 0.5rem;
    @media (min-width: 48rem) {
      margin-bottom: 2rem;
    }
  }
  p {
    line-height: 1.7;
    margin-bottom: 1rem;

    @media (min-width: 48rem) {
      width: 80%;
      margin-bottom: 2rem;
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.textPrimary};
    padding: 0.5rem;
    border: 2px solid ${(props) => props.theme.colors.textPrimary};
  }
`;

const StyledHeroButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

export default function Hero({ heroHeading, heroText, heroButtons }) {
  return (
    <StyledHeroWrapper>
      <StyledHero>
        <StyledHeroText>
          <h1>{heroHeading}</h1>
          <p>{heroText}</p>
          <StyledHeroButtons>
            {heroButtons.map((button) => (
              <Link key={button._key} href={button.navItemUrl.linkUrl}>
                {button.text}
              </Link>
            ))}
          </StyledHeroButtons>
        </StyledHeroText>
      </StyledHero>
    </StyledHeroWrapper>
  );
}

Hero.propTypes = {
  heroHeading: PropTypes.string,
  heroText: PropTypes.string,
  heroButtons: PropTypes.array,
  heroImage: PropTypes.object,
};
