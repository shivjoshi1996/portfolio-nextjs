import styled from 'styled-components';

const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  input[type='text'],
  input[type='email'] {
    width: 100%;
    height: 30px;
    background-color: var(--background);
    border: none;
    border-bottom: 1px solid var(--text);
    margin-bottom: 1.5rem;
    font-size: 1rem;
    color: var(--text);
  }

  textarea {
    margin-top: 1rem;
    width: 100%;
    height: 100px;
    border: none;
    border-bottom: 1px solid var(--text);
    font-family: ${(props) => props.theme.font};
    background-color: var(--background);
    resize: none;
    font-size: 1rem;
    color: var(--text);
  }
`;

const StyledSubmitWrapper = styled.div`
  text-align: left;
  margin-top: 3rem;

  input[type='submit'] {
    background-color: var(--background);
    border: 1px solid var(--text);
    padding: 1rem 1.5rem;
    font-size: 1.2rem;
    cursor: pointer;
    color: var(--text);

    transition: 0.5s;

    &:hover {
      background-color: var(--text);
      color: var(--background);
    }
  }
`;

export default function ContactForm() {
  return (
    <StyledContactForm
      method="POST"
      action="/success"
      name="contact"
      data-netlify="true"
    >
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
