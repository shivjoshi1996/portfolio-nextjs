import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Button from './Button';

const StyledHeroWrapper = styled.div`
  background-color: var(--background);
  border-bottom: 1 px solid var(--text);
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
  color: var(--text);
  h1 {
    margin-bottom: 1rem;
    @media (min-width: 48rem) {
      margin-bottom: 2rem;
      width: 80%;
    }
  }
  p {
    line-height: 1.7;
    margin-bottom: 1rem;

    @media (min-width: 69.375rem) {
      width: 60%;
      margin-bottom: 2rem;
    }
  }

  a {
    text-decoration: none;
    color: var(--text);
    padding: 0.8em;
    border: 2px solid var(--text);

    &:hover {
      background-color: var(--text);
      color: var(--background);
      transition: 0.5s;
    }
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
          <h1 className="hero-heading">{heroHeading}</h1>
          <p className="hero-text">{heroText}</p>
          <StyledHeroButtons className="hero-button">
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
};
