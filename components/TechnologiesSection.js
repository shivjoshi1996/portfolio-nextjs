export default function TechnologiesSection({
  learningTechnologies,
  currentTechnologies,
}) {
  return (
    <>
      <p>Current</p>
      {currentTechnologies.map((technology) => (
        <div key={technology.title}>
          <p>{technology.title}</p>
        </div>
      ))}
      <p>Learning</p>
      {learningTechnologies.map((technology) => (
        <div key={technology.title}>
          <p>{technology.title}</p>
        </div>
      ))}
    </>
  );
}
