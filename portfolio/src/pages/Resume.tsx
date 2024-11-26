import React from 'react';

const proficiencies = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Express.js',
  'MongoDB',
  // Add more proficiencies here
];

const Resume: React.FC = () => {
  return (
    <section>
      <h2>Resume</h2>
      <a href="/path-to-resume/aidan-choi-resume.pdf" download>
        Download Resume
      </a>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;
