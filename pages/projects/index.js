/* eslint-disable react/prop-types */
import { groq } from 'next-sanity';
import Navigation from '../../components/Navigation';
import { getClient } from '../../lib/sanity.server';

export default function Projects({ data }) {
  const { projects, nav } = data;
  return (
    <>
      <Navigation nav={nav} />
      <h1>Projects</h1>
      <p>Explore a selection of my projects below.</p>
      {projects.map((project) => (
        <div key={project.slug.current}>
          <h2>{project.title}</h2>
        </div>
      ))}
    </>
  );
}

const NavQuery = groq`
  *[_type == "navigation" && id == "mainNav"]{
    title,
    navItems,
  }
`;

const ProjectsQuery = groq`
*[_type == "project"]{
  title,
  mainImage,
  slug
}
`;

export async function getStaticProps({ preview = false }) {
  const nav = await getClient(preview).fetch(NavQuery);
  const projects = await getClient(preview).fetch(ProjectsQuery);

  return {
    props: {
      preview,
      data: { nav, projects },
    },
  };
}
