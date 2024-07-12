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
    <div id="skills" className="pt-24">
      <h1 className="text-4xl font-semibold mb-16">Skills</h1>
      <Fade direction="down" cascade damping={0.2} triggerOnce>
        <Fade cascade damping={0.2} triggerOnce>
          <ul className="flex flex-wrap justify-center gap-3 text-lg mb-3">
            {skillsLanguageData.map((skill, index) => (
              <li
                className="bg-white border  border-zinc-400 rounded-lg px-6 py-3 shadow-xl transition duration-300 ease-out hover:bg-hover-gray  hover:-translate-y-1"
                key={index}
              >
                {skill}
              </li>
            ))}
          </ul>
        </Fade>

        <Fade cascade damping={0.2} triggerOnce>
          <ul className="flex flex-wrap justify-center gap-3 text-lg mb-3">
            {skillsFrameworkAndLibraryData.map((skill, index) => (
              <li
                className="bg-white border  border-zinc-400 rounded-lg px-6 py-3 shadow-xl transition duration-300 ease-out hover:bg-hover-gray  hover:-translate-y-1"
                key={index}
              >
                {skill}
              </li>
            ))}
          </ul>
        </Fade>
        <Fade cascade damping={0.2} triggerOnce>
          <ul className="flex flex-wrap justify-center gap-3 text-lg mb-3">
            {skillsToolsData.map((skill, index) => (
              <li
                className="bg-white border  border-zinc-400 rounded-lg px-6 py-3 shadow-xl transition duration-300 ease-out hover:bg-hover-gray  hover:-translate-y-1"
                key={index}
              >
                {skill}
              </li>
            ))}
          </ul>
        </Fade>
        <Fade cascade damping={0.2} triggerOnce>
          <ul className="flex flex-wrap justify-center gap-3 text-lg mb-3">
            {skillsDBAndTestingData.map((skill, index) => (
              <li
                className="bg-white border  border-zinc-400 rounded-lg px-6 py-3 shadow-xl transition duration-300 ease-out hover:bg-hover-gray hover:-translate-y-1"
                key={index}
              >
                {skill}
              </li>
            ))}
          </ul>
        </Fade>
      </Fade>
    </div>
  );
};

export default Skills;
