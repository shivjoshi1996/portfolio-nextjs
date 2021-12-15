import styled from 'styled-components';

const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;

  label {
    text-transform: uppercase;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  input[type='text'],
  input[type='email'] {
    width: 100%;
    height: 30px;
    background-color: ${(props) => props.theme.colors.background};
    border: none;
    border-bottom: 1px dotted white;
    margin-bottom: 1.5rem;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.textPrimary};
  }

  textarea {
    margin-top: 1rem;
    width: 100%;
    height: 100px;
    border: none;
    border-bottom: 1px dotted white;
    background-color: ${(props) => props.theme.colors.background};
    resize: none;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.textPrimary};
  }
`;

const StyledSubmitWrapper = styled.div`
  text-align: left;
  margin-top: 3rem;

  input[type='submit'] {
    background-color: ${(props) => props.theme.colors.background};
    border: 1px solid ${(props) => props.theme.colors.textPrimary};
    padding: 1rem 1.5rem;
    font-size: 1.2rem;
    cursor: pointer;
    color: ${(props) => props.theme.colors.textPrimary};
    text-transform: uppercase;
  }
`;

export default function ContactForm() {
  return (
    <StyledContactForm>
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required />
      <StyledSubmitWrapper>
        <input type="submit" value="Submit" />
      </StyledSubmitWrapper>
    </StyledContactForm>
  );
}
