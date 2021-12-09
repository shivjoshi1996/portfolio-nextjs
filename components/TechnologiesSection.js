/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { urlFor } from '../lib/sanity';

const StyledTechnologiesSection = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding-top: 2rem;
  padding-bottom: 2rem;
  img {
    height: auto;
    width: 50px;
    margin-bottom: 0.5rem;
  }
  h2 {
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
  }
  h3 {
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
`;

const StyledTechnologiesWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const TechnologyWrapper = styled.div`
  display: flex;
  gap: 1rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const StyledTechnology = styled.div``;

export default function TechnologiesSection({
  currentTechnologies,
  learningTechnologies,
}) {
  // TODO - Split technology into seperate component
  console.log(currentTechnologies);
  return (
    <StyledTechnologiesSection>
      <StyledTechnologiesWrapper>
        <h2>Tech Stack</h2>
        <h3>Currently Using</h3>
        <TechnologyWrapper>
          {currentTechnologies.map((technology) => (
            <StyledTechnology key={technology.title}>
              <img
                src={urlFor(technology.mainImage).url()}
                alt={technology.title}
              />
              <p>{technology.title}</p>
            </StyledTechnology>
          ))}
        </TechnologyWrapper>
        <h3>Currently Learning</h3>
        <TechnologyWrapper>
          {learningTechnologies.map((technology) => (
            <StyledTechnology key={technology.title}>
              <img
                src={urlFor(technology.mainImage).url()}
                alt={technology.title}
              />
              <p>{technology.title}</p>
            </StyledTechnology>
          ))}
        </TechnologyWrapper>
      </StyledTechnologiesWrapper>
    </StyledTechnologiesSection>
  );
}
