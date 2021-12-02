import styled from 'styled-components';
import Link from 'next/link';

const StyledHero = styled.div`
  background-color: ${(props) => props.theme.colors.background};
`;

export default function Hero({
  heroHeading,
  heroText,
  heroButtons,
  heroImage,
}) {
  return (
    <>
      <StyledHero>
        <h1>{heroHeading}</h1>
        <p>{heroText}</p>
        {/* <Image
      src={urlFor(data.home[0].heroImage).width(600).url()}
      width="600"
      height="400"
      quality={100}
    /> */}
        {heroButtons.map((button) => (
          <Link key={button._key} href={button.navItemUrl.linkUrl}>
            {button.text}
          </Link>
        ))}
      </StyledHero>
    </>
  );
}
