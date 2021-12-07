import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { urlFor } from '../lib/sanity';

const StyledHeroWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  border-bottom: 2px solid ${(props) => props.theme.colors.textPrimary};
`;

const StyledHero = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 90%;
`;

const StyledHeroText = styled.div`
  flex: 1;
  color: ${(props) => props.theme.colors.textPrimary};
  h2 {
    font-size: clamp(2rem, 2vw, 4rem);
    margin-bottom: 1rem;
  }
  p {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.textPrimary};
    padding: 5px;
    border: 2px solid ${(props) => props.theme.colors.textPrimary};
  }
`;

const StyledHeroImage = styled.div`
  flex: 1;
  height: 200px;
  width: 300px;

  img {
    height: 100%;
    width: 100%;
  }
`;

const StyledHeroButtons = styled.div`
  display: flex;
  gap: 5px;
`;

export default function Hero({
  heroHeading,
  heroText,
  heroButtons,
  heroImage,
}) {
  return (
    <StyledHeroWrapper>
      <StyledHero>
        <StyledHeroImage>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={urlFor(heroImage).url()} alt="" />
        </StyledHeroImage>
        <StyledHeroText>
          <h2>{heroHeading}</h2>
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
