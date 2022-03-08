import Navbar from "../../components/Navbar/Navbar";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-page">
      <Navbar />
      <div className="projects-content">
        <ProjectsList />
      </div>
    </div>
  );
}

export default Projects;
