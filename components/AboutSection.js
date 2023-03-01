import styled from 'styled-components';

const StyledAboutSection = styled.section`
  padding: 2rem 0rem;
  background-color: var(--background);
`;

const StyledAboutWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 69.375rem;
  background-color: var(--section-background);
  padding: 2rem 2rem;
  border-radius: 2px;
  border: 1px solid hsl(0 0% 100% / 0.026);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);

  h2 {
    margin-bottom: 1rem;
    color: var(--text);
    font-size: 22px;
  }

  p {
    line-height: 1.5;
    margin-bottom: 1rem;
    color: var(--text);
    font-size: 16px;
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
    border-left: 1px solid var(--text);
  }
`;

export default function AboutSection() {
  return (
    <StyledAboutSection>
      <StyledAboutWrapper className="about-section">
        <h2>About Me</h2>
        <StyledAboutGrid>
          <StyledParagraphWrapper>
            <p>
              I love to make things that have a positive impact on people. After
              receiving my bachelor's degree in Computing from Leeds Beckett
              University in 2017, I worked as a Project Manager in the Web &
              Design team at Canonical, the makers of the Ubuntu operating
              system, and as a Project Coordinator in the Aurora Cannabis
              Software Engineering team.
            </p>
            <p>
              Working in highly experienced and talented teams, on projects
              which impacted millions of people has taught me a great deal about
              project management, front-end development, and the importance of
              user experience and web accessibility.
            </p>
          </StyledParagraphWrapper>
          <StyledParagraphWrapper>
            <p>
              In February 2021, I left the Aurora team to focus on front-end
              development. I refreshed my knowledge of HTML, CSS & JavaScript,
              and frameworks such as React, NextJS and Gatsby. I am now looking
              for a front-end development role, to work on projects that create
              a lasting impact.
            </p>
          </StyledParagraphWrapper>
        </StyledAboutGrid>
      </StyledAboutWrapper>
    </StyledAboutSection>
  );
}
