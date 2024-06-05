import React from "react";
import { projectsData } from "../lib/data";

import Project from "@/components/Project";

const Projects = () => {
  return (
    <div id="projects" className="">
      <h1 className="text-4xl font-semibold mb-16">Projects</h1>
      <div className="flex flex-col items-center justify-center w-full  ">
        <div className="w-full  max-w-[1000px]">
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project project={project} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
