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
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 90%;
  margin: 0 auto;
  max-width: 69.375rem;
`;

export default function Contact({ data }) {
  return (
    <>
      <Navigation nav={data.nav} />
      <StyledContactSection>
        <StyledContactContainer>
          <h1>CONTACT ME</h1>
          <ContactForm />
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

export async function getStaticProps({ preview = false }) {
  const nav = await getClient(preview).fetch(NavQuery);

  return {
    props: {
      preview,
      data: { nav },
    },
  };
}
