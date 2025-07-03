import React from 'react';
import './project-card.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="project-link"
              key={`$project.id$_demo`}
            >
              <div className="link-button">
                <i className="fas fa-globe"></i>Demo
              </div>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-link"
              key={`$project.id_github$`}
            >
              <div className="link-button">
                <i className="devicon-github-original colored"></i>Github
              </div>
            </a>
          )}
        </div>
        <p className="project-about">{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => {
            return (
              <label className="tag" key={index}>
                {tag}
              </label>
            );
          })}
        </div>
      </div>
      <img src={project.image} className="project-image" alt={project.title} />
    </div>
  );
};

export default ProjectCard;
