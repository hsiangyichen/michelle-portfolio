"use client";
import React from "react";
import {
  skillsLanguageData,
  skillsFrameworkAndLibraryData,
  skillsToolsData,
  skillsDBAndTestingData,
} from "../lib/data";
import { Fade } from "react-awesome-reveal";

const Skills = () => {
  return (
    <div id="skills" className="pt-12 xl:pt-24">
      <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold mb-8 xl:mb-16">
        Skills
      </h1>
      <div className="block md:hidden">
        <ul className="flex flex-wrap justify-center gap-1 text-sm lg:text-base 2xl:text-lg mb-3">
          {[
            ...skillsLanguageData,
            ...skillsFrameworkAndLibraryData,
            ...skillsToolsData,
            ...skillsDBAndTestingData,
          ].map((skill, index) => (
            <li
              className="px-2 py-1 md:px-3 md:py-1 lg:px-5 lg:py-1.5 xl:px-6 xl:py-3 rounded-md xl:rounded-lg bg-white border border-zinc-400 shadow-xl transition duration-300 ease-out hover:bg-hover-gray hover:-translate-y-1"
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:block">
        <Fade direction="down" cascade damping={0.2} triggerOnce>
          <Fade cascade damping={0.2} triggerOnce>
            <ul className="flex flex-wrap justify-center gap-1 lg:gap-3 text-sm lg:text-base 2xl:text-lg mb-3">
              {skillsLanguageData.map((skill, index) => (
                <li
                  className="px-3 py-1 lg:px-4 lg:py-1.5 xl:px-5 xl:py-3 rounded-md xl:rounded-lg  bg-white border  border-zinc-400 shadow-xl transition duration-300 ease-out hover:bg-hover-gray  hover:-translate-y-1"
                  key={index}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Fade>

          <Fade cascade damping={0.2} triggerOnce>
            <ul className="flex flex-wrap justify-center gap-1 lg:gap-3 text-sm lg:text-base 2xl:text-lg mb-3">
              {skillsFrameworkAndLibraryData.map((skill, index) => (
                <li
                  className="px-3 py-1 lg:px-5 lg:py-1.5 xl:px-6 xl:py-3 rounded-md xl:rounded-lg bg-white border  border-zinc-400 shadow-xl transition duration-300 ease-out hover:bg-hover-gray  hover:-translate-y-1"
                  key={index}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Fade>
          <Fade cascade damping={0.2} triggerOnce>
            <ul className="flex flex-wrap justify-center gap-1 lg:gap-3  text-sm lg:text-base 2xl:text-lg mb-3">
              {skillsToolsData.map((skill, index) => (
                <li
                  className="px-3 py-1 lg:px-5 lg:py-1.5 xl:px-6 xl:py-3 rounded-md xl:rounded-lg bg-white border  border-zinc-400 shadow-xl transition duration-300 ease-out hover:bg-hover-gray  hover:-translate-y-1"
                  key={index}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Fade>
          <Fade cascade damping={0.2} triggerOnce>
            <ul className="flex flex-wrap justify-center gap-1 xl:gap-3 text-sm lg:text-base 2xl:text-lg mb-3">
              {skillsDBAndTestingData.map((skill, index) => (
                <li
                  className="px-3 py-1 lg:px-5 lg:py-1.5 xl:px-6 xl:py-3 rounded-md xl:rounded-lg bg-white border  border-zinc-400 shadow-xl transition duration-300 ease-out hover:bg-hover-gray hover:-translate-y-1"
                  key={index}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Fade>
        </Fade>
      </div>
    </div>
  );
};

export default Skills;
