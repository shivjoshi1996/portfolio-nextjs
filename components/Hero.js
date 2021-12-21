import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

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
    opacity: 0;
    margin-bottom: 1rem;
    @media (min-width: 48rem) {
      margin-bottom: 2rem;
      width: 80%;
    }
  }
  p {
    opacity: 0;
    line-height: 1.7;
    margin-bottom: 1rem;

    @media (min-width: 69.375rem) {
      width: 60%;
      margin-bottom: 2rem;
    }
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.textPrimary};
    padding: 0.8em;
    border: 2px solid ${(props) => props.theme.colors.textPrimary};

    &:hover {
      background-color: ${(props) => props.theme.colors.textPrimary};
      color: ${(props) => props.theme.colors.background};
      transition: 0.5s;
    }
  }
`;

const StyledHeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  opacity: 0;
`;

export default function Hero({ heroHeading, heroText, heroButtons }) {
  const el = useRef();
  const heroTl = useRef();

  useEffect(() => {
    const q = gsap.utils.selector(el);
    heroTl.current = gsap
      .timeline()
      .fromTo(
        q('.hero-heading'),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.8,
          ease: 'power1.easeOut',
        }
      )
      .fromTo(
        q('.hero-text'),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power1.easeOut',
        }
      )
      .fromTo(
        q('.hero-button'),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power1.easeOut',
        }
      );
  }, []);

  return (
    <StyledHeroWrapper ref={el}>
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
