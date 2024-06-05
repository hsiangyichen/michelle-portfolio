"use client";
import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Project = ({ project }) => {
  return (
    <Fade duration={1000} delay={100}>
      <a target="_blank" href={project.link} rel="noopener noreferrer">
        <div className="flex mb-12 rounded-md items-center h-80 hover:scale-[1.03] bg-[#f9f9f9] p-4 group relative overflow-hidden transition-all duration-200 hover:bg-hover-gray cursor-pointer">
          <div className="basis-1/2 ml-8  flex flex-col gap-5">
            <div>
              <h3 className="text-2xl font-medium ">{project.title}</h3>
              <p>{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag, index) => (
                <button
                  className="bg-dark-brown text-white py-1 px-2 my-2"
                  key={index}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="basis-1/2">
            <Image
              src={project.image}
              alt={project.title}
              width={450}
              height={450}
              className="rounded-md absolute drop-shadow-2xl -right-20 top-16 group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:-rotate-2 group-hover:scale-[1.04] transition-all duration-200"
            />
          </div>
        </div>
      </a>
    </Fade>
  );
};

export default Project;
