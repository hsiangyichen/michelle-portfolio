import React from "react";
import { projectsData } from "../lib/data";

import Project from "@/components/Project";

const Projects = () => {
  return (
    <div id="projects" className="px-4 sm:p-0 pt-12 xl:pt-24">
      <h1 className="text-2xl xl:text-3xl 2xl:text-4xl  font-semibold mb-8 xl:mb-16">
        Projects
      </h1>
      <div className="flex flex-col items-center justify-center w-full  ">
        <div className="hidden xl:block w-full  max-w-[1000px]">
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project project={project} />
            </React.Fragment>
          ))}
        </div>

        <div className="block xl:hidden w-full max-w-[1000px]">
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
