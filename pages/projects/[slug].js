/* eslint-disable react/prop-types */
import React from 'react';
import { groq } from 'next-sanity';

import { usePreviewSubscription } from '../../lib/sanity';
import { getClient } from '../../lib/sanity.server';
import Navigation from '../../components/Navigation';

/**
 * Helper function to return the correct version of the document
 * If we're in "preview mode" and have multiple documents, return the draft
 */

function filterDataToSingleItem(data, preview) {
  if (!Array.isArray(data)) {
    return data;
  }

  if (data.length === 1) {
    return data[0];
  }

  if (preview) {
    return data.find((item) => item._id.startsWith(`drafts.`)) || data[0];
  }

  return data[0];
}

/**
 * Makes Next.js aware of all the slugs it can expect at this route
 *
 * See how we've mapped over our found slugs to add a `/` character?
 * Idea: Add these in Sanity and enforce them with validation rules :)
 * https://www.simeongriggs.dev/nextjs-sanity-slug-patterns
 */
export async function getStaticPaths() {
  const allSlugsQuery = groq`*[defined(slug.current)][].slug.current`;
  const pages = await getClient().fetch(allSlugsQuery);

  return {
    paths: pages.map((slug) => `/projects/${slug}`),
    fallback: true,
  };
}

export async function getStaticProps({ params, preview = false }) {
  // Navigation Query

  //   const NavQuery = groq`
  //   *[_type == "navigation" && id == "mainNav"]{
  //     title,
  //     navItems,
  //   }
  // `;

  // const nav = await getClient(preview).fetch(NavQuery);

  // Page Query
  const query = groq`*[_type == "project" && slug.current == $slug]`;

  const queryParams = { slug: params.slug };
  const data = await getClient(preview).fetch(query, queryParams);

  // Escape hatch, if our query failed to return data
  if (!data) return { notFound: true };

  // Helper function to reduce all returned documents down to just one
  const page = filterDataToSingleItem(data, preview);

  return {
    props: {
      // Pass down the "preview mode" boolean to the client-side
      preview,
      // Pass down the initial content, and our query
      data: { page, query, queryParams },
    },
  };
}

export default function Page({ data, preview }) {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    // The hook will return this on first render
    // This is why it's important to fetch *draft* content server-side!
    initialData: data?.page,
    // The passed-down preview context determines whether this function does anything
    enabled: preview,
  });

  // Client-side uses the same query, so we may need to filter it down again
  const page = filterDataToSingleItem(previewData, preview);

  // Notice the optional?.chaining conditionals wrapping every piece of content?
  // This is extremely important as you can't ever rely on a single field
  // of data existing when Editors are creating new documents.
  // It'll be completely blank when they start!
  return (
    <>
      {/* <Navigation nav={data.nav} /> */}
      <div style={{ maxWidth: `20rem`, padding: `1rem` }}>
        {page?.title && <h1>{page.title}</h1>}
      </div>
    </>
  );
}
