/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { urlFor } from '../lib/sanity';

const StyledMySkillsSection = styled.div`
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
  p {
    margin-bottom: 1rem;
    line-height: 1.5;

    @media (min-width: 48rem) {
      width: 70%;
    }

    @media (min-width: 69.375rem) {
      width: 40%;
    }
  }
  h3 {
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
`;

const StyledMySkillsWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 69.375rem;
`;

const StyledSkillsGrid = styled.div`
  display: grid;
  grid-gap: 1rem;

  @media (min-width: 48rem) {
    grid-template-columns: 1fr 1fr;
    margin-top: 3rem;
  }
`;
const StyledSkillWrapper = styled.div`
  @media (min-width: 48rem) {
    padding-left: 1rem;
    border-left: 1px solid white;
  }
`;

const StyledSkills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  li {
    margin-bottom: 0.5rem;
  }
`;

export default function MySkillsSection({
  developmentTechnologies,
  projectManagementTechnologies,
}) {
  // TODO - Split technology into seperate component
  console.log(developmentTechnologies, projectManagementTechnologies);
  return (
    <StyledMySkillsSection>
      <StyledMySkillsWrapper>
        <h2>My Skills</h2>
        <p>
          Through my studies and work experience, I've gained a solid
          understanding of front-end technologies and concepts.
        </p>
        <p>
          Using Agile methodologies, I've also managed numerous software
          projects from initiation to go-live, and beyond.
        </p>
        <StyledSkillsGrid>
          <StyledSkillWrapper>
            <h3>DEVELOPMENT</h3>
            <StyledSkills>
              {developmentTechnologies.map((technology) => (
                <li key={technology.title}>{technology.title}</li>
              ))}
            </StyledSkills>
          </StyledSkillWrapper>
          <StyledSkillWrapper>
            <h3>MANAGEMENT</h3>
            <StyledSkills>
              {projectManagementTechnologies.map((technology) => (
                <li key={technology.title}>{technology.title}</li>
              ))}
            </StyledSkills>
          </StyledSkillWrapper>
        </StyledSkillsGrid>
      </StyledMySkillsWrapper>
    </StyledMySkillsSection>
  );
}
