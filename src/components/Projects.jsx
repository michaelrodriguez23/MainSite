import Styled from "styled-components";
import { useContext } from "react";
import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useContext(ProjectListContext);

  return (
    <>
      {projects.map((currentProj) => (
        <Project project={currentProj} />
      ))}
    </>
  );
};
export default Projects;
