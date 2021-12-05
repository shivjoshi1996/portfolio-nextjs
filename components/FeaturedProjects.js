import { usePreviewSubscription, urlFor, PortableText } from '../lib/sanity';

export default function FeaturedProjects({ featuredProjects }) {
  return (
    <>
      <h2>Featured Projects</h2>
      {featuredProjects.map((project) => (
        <div key={project.title}>
          <p>{project.title}</p>
          <p>{project.publishedAt}</p>
          <img src="" alt="" />
          <img
            src={urlFor(project.mainImage).width(300).url()}
            width="300"
            height="300"
            quality={100}
          />
          <a href={`/projects/${project.slug.current}`}>View Project</a>
        </div>
      ))}
    </>
  );
}
