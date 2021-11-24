import { groq } from 'next-sanity';
import { getClient } from '../lib/sanity.server';

export default function Navigation({ nav }) {
  console.log(nav[0].title);

  console.log(nav[0].navItems);
  return (
    <>
      <h1>{nav[0].title}</h1>
      <ul>
        {nav[0].navItems.map((item) => (
          <li key={item.text}>{item.text}</li>
        ))}
      </ul>
    </>
  );
}
