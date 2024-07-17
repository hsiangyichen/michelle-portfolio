"use client";
import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Project = ({ project }) => {
  return (
    <Fade duration={1000} delay={100}>
      <a target="_blank" href={project.link} rel="noopener noreferrer">
        <div className="flex flex-col lg:flex-row lg:gap-16 xl:gap-24 mb-12 rounded-md items-center w-full h-[405px] lg:h-72 xl:h-80 hover:scale-[1.03] bg-[#f9f9f9] md:p-4 group relative overflow-hidden transition-all duration-200 hover:bg-hover-gray cursor-pointer">
          <div className="lg:basis-1/2 mx-6 my-8 md:mx-20 md:my-10 lg:m-0 lg:ml-8 flex flex-col gap-5">
            <div>
              <h3 className="text-xl lg:text-2xl font-medium mb-2">
                {project.title}
              </h3>
              <p className="text-sm xl:text-base">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-1 xl:gap-2 my-2">
              {project.tags.map((tag, index) => (
                <button
                  className="bg-dark-brown rounded text-white text-xs xl:text-sm py-1 px-2  hover:bg-[#ccc] duration-100 hover:text-black"
                  key={index}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="md:basis-1/2 mx-6 md:mx-20 lg:m-0 ">
            <Image
              src={project.image}
              alt={project.title}
              width={450}
              height={450}
              className="w-full lg:w-[400px] 2xl:w-[520px] lg:absolute rounded-md drop-shadow-2xl lg:-right-20 lg:top-16 xl:-right-20 xl:top-[85px] 2xl:-right-20 2xl:top-16 group-hover:-translate-y-2 lg:group-hover:-translate-x-2 lg:group-hover:translate-y-2 lg:group-hover:-rotate-2 group-hover:scale-[1.04] transition-all duration-200"
            />
          </div>
        </div>
      </a>
    </Fade>
  );
};

export default Project;
