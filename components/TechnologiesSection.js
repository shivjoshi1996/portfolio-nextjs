/* eslint-disable react/prop-types */
import styled from 'styled-components';

const StyledTechnologiesSection = styled.div`
  background-color: ${(props) => props.theme.colors.background};
`;

export default function TechnologiesSection({
  learningTechnologies,
  currentTechnologies,
}) {
  return (
    <StyledTechnologiesSection>
      <p>Current</p>
      {currentTechnologies.map((technology) => (
        <div key={technology.title}>
          <p>{technology.title}</p>
        </div>
      ))}
      <p>Learning</p>
      {learningTechnologies.map((technology) => (
        <div key={technology.title}>
          <p>{technology.title}</p>
        </div>
      ))}
    </StyledTechnologiesSection>
  );
}
