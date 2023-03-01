import styled from 'styled-components';

const StyledButton = styled.button`
  color: #2d2d2d;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem 1.5rem;
  background: linear-gradient(180deg, #fdfdfd 32.81%, #f6f6f6 100%);
  box-shadow: 0px 0px 0px 0.5px rgba(0, 0, 0, 0.08),
    0px 1px 0px rgba(0, 0, 0, 0.06), 0px 1px 2px rgba(0, 0, 0, 0.05),
    0px 2px 4px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.03),
    0px 2px 12px rgba(0, 0, 0, 0.02), inset 0px 1px 0px #ffffff,
    inset 0px 1px 0px rgba(255, 255, 255, 0.94), inset 0px 0px 2px 1px #ffffff;
  border-radius: 6px;
  transition: all 0.5s;

  &:hover {
    box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.08),
      0px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 2px rgba(0, 0, 0, 0.05),
      0px 4px 8px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.03),
      0px 4px 24px rgba(0, 0, 0, 0.02), inset 0px 1px 0px #ffffff,
      inset 0px 1px 0px rgba(255, 255, 255, 0.94), inset 0px 0px 2px 1px #ffffff;
  }
`;

export default function Button({ children, ...props }) {
  return (
    <StyledButton type="button" {...props}>
      {children}
    </StyledButton>
  );
}
