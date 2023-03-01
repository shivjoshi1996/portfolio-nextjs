import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledMySkillsSection = styled.section`
  background-color: var(--background);
  padding-top: 2rem;
  padding-bottom: 2rem;

  img {
    height: auto;
    width: 50px;
    margin-bottom: 0.5rem;
  }
  h2 {
    margin-bottom: 1.5rem;
  }
  p {
    margin-bottom: 1rem;
    line-height: 1.5;

    @media (min-width: 48rem) {
      width: 70%;
    }
  }
  h3 {
    margin-bottom: 1rem;

    @media (min-width: 48rem) {
      margin-bottom: 2rem;
    }
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
  column-gap: 1rem;

  @media (min-width: 48rem) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  li {
    margin-bottom: 0.5rem;

    p {
      width: 100%;
    }
  }
`;

export default function MySkillsSection({
  developmentTechnologies,
  projectManagementTechnologies,
}) {
  // TODO - Split technology into seperate component

  return (
    <StyledMySkillsSection>
      <StyledMySkillsWrapper className="skills-section">
        <h2 className="skills-heading">My Skills</h2>
        <p className="skills-subheading">
          Through my studies and work experience, I've gained a solid
          understanding of front-end technologies and concepts.
        </p>
        <p className="skills-subheading">
          Using Agile methodologies, I've also managed numerous software
          projects from initiation to go-live, and beyond.
        </p>
        <StyledSkillsGrid>
          <StyledSkillWrapper>
            <h3 className="skills-development-heading">DEVELOPMENT</h3>
            <StyledSkills>
              {developmentTechnologies.map((technology) => (
                <li key={technology.title}>
                  <p className="skills-development">{technology.title}</p>
                </li>
              ))}
            </StyledSkills>
          </StyledSkillWrapper>
          <StyledSkillWrapper>
            <h3 className="skills-management-heading">MANAGEMENT</h3>
            <StyledSkills>
              {projectManagementTechnologies.map((technology) => (
                <li key={technology.title}>
                  <p className="skills-management">{technology.title}</p>
                </li>
              ))}
            </StyledSkills>
          </StyledSkillWrapper>
        </StyledSkillsGrid>
      </StyledMySkillsWrapper>
    </StyledMySkillsSection>
  );
}

MySkillsSection.propTypes = {
  developmentTechnologies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
  projectManagementTechnologies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
};
