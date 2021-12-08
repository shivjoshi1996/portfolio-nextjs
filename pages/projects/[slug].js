/* eslint-disable react/prop-types */
import React from 'react';
import { groq } from 'next-sanity';
import client from '../../lib/client';
import Navigation from '../../components/Navigation';

export default function Project({ project, nav }) {
  console.log(nav);
  if (nav && project) {
    return (
      <>
        <Navigation nav={nav} />
        <h1>{project?.title}</h1>
        <p>{project?.slug?.current}</p>
      </>
    );
  }
  return <p>Loading</p>;
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "project" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug = '' } = context.params;
  console.log(slug);
  const project = await client.fetch(
    `
  *[_type == "project" && slug.current == $slug][0]
`,
    { slug }
  );

  const nav = await client.fetch(
    `*[_type == "navigation" && id == "mainNav"]{
      title,
      navItems,
    }`
  );
  return {
    props: {
      project,
      nav,
    },
  };
}
