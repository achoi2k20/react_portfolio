import React from 'react';

interface ProjectProps {
  title: string;
  imageUrl: string;
  deployedUrl: string;
  repoUrl: string;
}

const Project: React.FC<ProjectProps> = ({ title, imageUrl, deployedUrl, repoUrl }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <a href={deployedUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={`${title} screenshot`} />
      </a>
      <p>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
          View Repository
        </a>
      </p>
    </div>
  );
};

export default Project;
