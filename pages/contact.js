/* eslint-disable react/prop-types */
import { groq } from 'next-sanity';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { getClient } from '../lib/sanity.server';

const StyledContactSection = styled.section`
  background-color: ${(props) => props.theme.colors.background};
`;

const StyledContactContainer = styled.div`
  padding: 2rem 0;
  width: 90%;
  margin: 0 auto;
  max-width: 69.375rem;
  min-height: 70vh;

  @media (min-width: 69.375rem) {
    padding: 4rem 0;
  }

  h1 {
    margin-bottom: 2rem;

    @media (min-width: 69.375rem) {
      margin-bottom: 4rem;
    }
  }
`;

const StyledContactInfoGrid = styled.div`
  @media (min-width: 69.375rem) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledContactOptions = styled.div`
  margin-bottom: 2rem;
  h3 {
    margin-bottom: 1rem;
  }
  a {
    font-size: inherit;
    color: ${(props) => props.theme.colors.textPrimary};
  }
`;

const StyledContactFormWrapper = styled.div`
  h3 {
    margin-bottom: 1.5rem;
  }
`;

export default function Contact({ data }) {
  return (
    <>
      <Navigation nav={data.nav} />
      <StyledContactSection>
        <StyledContactContainer>
          <h1>CONTACT ME</h1>
          <StyledContactInfoGrid>
            <StyledContactOptions>
              <h3>
                Email me at <br />
                <a href="mailto:shiv@shivjoshi.com">hello@shivamjoshi.com</a>
              </h3>
              <h3>
                Check out my <br />
                <a
                  href={data.contact[0].resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  resume
                </a>
              </h3>
            </StyledContactOptions>
            <StyledContactFormWrapper>
              <h3>Or, get in touch here:</h3>
              <ContactForm />
            </StyledContactFormWrapper>
          </StyledContactInfoGrid>
        </StyledContactContainer>
      </StyledContactSection>
      <Footer nav={data.nav} />
    </>
  );
}

const NavQuery = groq`
  *[_type == "navigation" && id == "mainNav"]{
    title,
    navItems,
  }
`;

const contactQuery = groq` *[_type == "contact"] {
 "resume": resume.asset->url,
}`;

export async function getStaticProps({ preview = false }) {
  const nav = await getClient(preview).fetch(NavQuery);
  const contact = await getClient(preview).fetch(contactQuery);

  return {
    props: {
      preview,
      data: { nav, contact },
    },
  };
}
