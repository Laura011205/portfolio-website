import React from "react";
import projects from "../../projects";
import "./ProjectsList.css";

function ProjectsList() {
  return (
    <div className="projects-list">
      {projects.map((project, index) => {
        return (
          <div key={index} className="project-card">
            <div className="project-img-container">
              <a href={project.repo} target="_blank">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-img"
                />
              </a>
            </div>
            <div className="project-text">
              <a href={project.repo} target="_blank" className="project-name">
                {project.name}
              </a>
              <p className="project-description">{project.description}</p>
              {project.name && (
                <a href={project.repo} target="_blank">
                  <button className="repo-btn">Repository</button>
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsList;
