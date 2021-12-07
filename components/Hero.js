import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { usePreviewSubscription, urlFor, PortableText } from '../lib/sanity';

const StyledHeroWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
`;

const StyledHero = styled.div`
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
        <StyledHeroImage>
          <img
            src={urlFor(heroImage).width(100).url()}
            width="100"
            height="100"
            quality={100}
          />
        </StyledHeroImage>
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
