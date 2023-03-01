import { groq } from 'next-sanity';
import styled from 'styled-components';
import Head from 'next/head';
import PropTypes from 'prop-types';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { getClient } from '../lib/sanity.server';

const StyledContactPage = styled.div`
  background-color: var(--background);
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

const StyledContactOptions = styled.section`
  margin-bottom: 2rem;
  p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  a {
    font-size: inherit;
    color: var(--text);

    transition: 0.5s;

    &:hover {
      color: ${(props) => props.theme.colors.textHover};
    }
  }
`;

const StyledContactFormWrapper = styled.section`
  p {
    margin-bottom: 1.5rem;
  }
`;

export default function Contact({ data }) {
  return (
    <>
      <Head>
        <title>Shivam Joshi | Contact Me</title>
      </Head>
      <Navigation nav={data.nav} />
      <main>
        <StyledContactPage>
          <StyledContactContainer>
            <header>
              <h1 className="contact-heading">CONTACT ME</h1>
            </header>
            <StyledContactInfoGrid>
              <StyledContactOptions>
                <p className="contact-option">
                  Email me at <br />
                  <a
                    className="contact-option"
                    href="mailto:shiv@shivjoshi.com"
                  >
                    hello@shivamjoshi.com
                  </a>
                </p>
                <p className="contact-option">
                  Check out my <br />
                  <a
                    className="contact-option"
                    href={data.contact[0].resume}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    resume
                  </a>
                </p>
              </StyledContactOptions>
              <StyledContactFormWrapper className="contact-option">
                <p>Or, get in touch here:</p>
                <ContactForm />
              </StyledContactFormWrapper>
            </StyledContactInfoGrid>
          </StyledContactContainer>
        </StyledContactPage>
      </main>
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

Contact.propTypes = {
  data: PropTypes.shape({
    nav: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        navItems: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string,
            url: PropTypes.string,
          })
        ),
      })
    ),
    contact: PropTypes.arrayOf(
      PropTypes.shape({
        resume: PropTypes.string,
      })
    ),
  }),
};
