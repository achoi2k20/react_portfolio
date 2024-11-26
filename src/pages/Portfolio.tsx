import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Project One',
    imageUrl: '/images/project1.png',
    deployedUrl: 'https://project-one.netlify.app',
    repoUrl: 'https://github.com/aidan-choi/project-one',
  },
  // Add five more projects here
];

const Portfolio: React.FC = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            deployedUrl={project.deployedUrl}
            repoUrl={project.repoUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
