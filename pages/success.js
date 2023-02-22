import { groq } from 'next-sanity';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { getClient } from '../lib/sanity.server';

const NavQuery = groq`
  *[_type == "navigation" && id == "mainNav"]{
    title,
    navItems,
  }
`;

const StyledSuccessContainer = styled.div`
  min-height: 80vh;
  background-color: var(--background);
`;

const StyledSuccessWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 69.375rem;

  h1 {
    padding-top: 3rem;
    margin-bottom: 1rem;
  }
`;

export default function Success({ data }) {
  const { nav } = data;
  return (
    <>
      <Navigation nav={nav} />
      <StyledSuccessContainer>
        <main>
          <StyledSuccessWrapper>
            <h1>Success!</h1>
            <p>Thanks for your message, I will get back to you shortly.</p>
          </StyledSuccessWrapper>
        </main>
      </StyledSuccessContainer>
      <Footer nav={nav} />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  // TODO - See if these calls can be batched together
  const nav = await getClient(preview).fetch(NavQuery);

  return {
    props: {
      preview,
      data: { nav },
    },
  };
}

Success.propTypes = {
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
  }),
};
