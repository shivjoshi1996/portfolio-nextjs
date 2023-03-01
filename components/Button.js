import styled from 'styled-components';

const StyledButton = styled.button`
  color: var(--button-text);
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem 1.5rem;
  background: var(--button-background);
  box-shadow: var(--button-shadow);
  border: 1px solid var(--button-border);
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
`;

export default function Button({ children, ...props }) {
  return (
    <StyledButton type="button" {...props}>
      {children}
    </StyledButton>
  );
}
