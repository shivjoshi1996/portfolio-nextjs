import styled from 'styled-components';

const StyledAboutSection = styled.section`
  background-color: ${(props) => props.theme.colors.background};
  padding: 2rem 0rem;
`;

const StyledAboutWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 69.375rem;

  h2 {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  p {
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

const StyledAboutGrid = styled.div`
  @media (min-width: 69.375rem) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
`;

const StyledParagraphWrapper = styled.div`
  @media (min-width: 69.375rem) {
    padding-left: 1rem;
    border-left: 1px solid ${(props) => props.theme.colors.textPrimary};
  }
`;

export default function AboutSection() {
  return (
    <StyledAboutSection>
      <StyledAboutWrapper>
        <h2>About Me</h2>
        <StyledAboutGrid>
          <StyledParagraphWrapper>
            <p>
              I love to make things that have a positive impact on people. After
              receiving my bachelor's degree in Computing from Leeds Beckett
              University in 2017, I was lucky enough to work as a Project
              Manager in the Web & Design team at Canonical, the makers of the
              Ubuntu operating system.
            </p>
            <p>
              Working in a highly experienced and talented team, on projects
              which impacted millions of developers taught me a great deal about
              project management, front-end development, and the importance of
              user experience and web accessibility.
            </p>
          </StyledParagraphWrapper>
          <StyledParagraphWrapper>
            <p>
              I then moved to Vancouver in 2019 and joined Aurora Cannabis as
              the Project Coordinator of the Software Engineering team. I led
              the team to numerous website and app launches, including the
              Aurora Cannabis Shopify Store that serves hundreds of patients per
              day.
            </p>
            <p>
              In February 2021, I left the Aurora team to focus on front-end
              development. I refreshed my knowledge of HTML, CSS & JavaScript,
              and frameworks such as NextJS and Gatsby. I am now looking for a
              front-end development role, to work on projects that create a
              lasting impact.
            </p>
          </StyledParagraphWrapper>
        </StyledAboutGrid>
      </StyledAboutWrapper>
    </StyledAboutSection>
  );
}
