import { Projects } from "@/pages/api/projects";
import { Typography } from "@mui/material";
import Project from "./Project";

type Props = {
  projects: Projects[];
};

const Projects = ({ projects }: Props) => {
  return (
    <div className="bg-[#1c456d]" id="projects">
      <div className="pf-container py-[60px]">
        <div className="flex items-center">
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Projects
          </Typography>
          <div className="border flex-1 ml-4"></div>
        </div>
        <div className="flex flex-col sm:gap-10 gap-5 mt-10">
          {projects.map((project) => (
            <Project key={project.id} data={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
