/* eslint-disable react/prop-types */
import { groq } from 'next-sanity';
import styled from 'styled-components';
import Head from 'next/head';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
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
  p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  a {
    font-size: inherit;
    color: ${(props) => props.theme.colors.textPrimary};

    transition: 0.5s;

    &:hover {
      color: ${(props) => props.theme.colors.textHover};
    }
  }
`;

const StyledContactFormWrapper = styled.div`
  p {
    margin-bottom: 1.5rem;
  }
`;

export default function Contact({ data }) {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const contactTl = useRef();

  useLayoutEffect(() => {
    contactTl.current = gsap
      .timeline()
      .fromTo(
        q('.contact-heading'),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        }
      )
      .fromTo(
        q('.contact-option'),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.5,
        }
      );
  }, []);

  return (
    <>
      <Head>
        <title>Shivam Joshi | Contact Me</title>
      </Head>
      <Navigation nav={data.nav} />
      <StyledContactSection ref={el}>
        <StyledContactContainer>
          <h1 className="contact-heading">CONTACT ME</h1>
          <StyledContactInfoGrid>
            <StyledContactOptions>
              <p className="contact-option">
                Email me at <br />
                <a className="contact-option" href="mailto:shiv@shivjoshi.com">
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
