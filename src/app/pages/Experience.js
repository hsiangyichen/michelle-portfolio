"use client";
import React from "react";
import Image from "next/image";
import VerticalTimeline from "@/components/VerticalTimeline";
import { experienceLeftData, experienceRightData } from "../lib/data";
import { Fade } from "react-awesome-reveal";

const Experience = () => {
  return (
    <div
      id="experience"
      className="px-4 sm:px-0 pt-12 xl:pt-24 flex flex-col w-full items-center"
    >
      <h1 className="w-full  max-w-[1000px] text-2xl xl:text-3xl 2xl:text-4xl font-semibold mb-8 xl:mb-16">
        Experience
      </h1>
      <div className="flex flex-col items-center w-full">
        <div className="hidden xl:block">
          <VerticalTimeline
            experienceLeftData={experienceLeftData}
            experienceRightData={experienceRightData}
          />
        </div>
        <div className="flex flex-col gap-4 xl:hidden">
          {[...experienceLeftData, ...experienceRightData].map(
            (experience, index) => (
              <Fade key={index}>
                <div className="bg-white py-8 px-6 rounded-md">
                  <div className="flex items-center gap-6">
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      width={70}
                      height={70}
                      className="w-10 sm:w-20 xl:w-28"
                    />
                    <h3 className="text-xl 2xl:text-2xl font-semibold">
                      {experience.institution}
                    </h3>
                  </div>
                  <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between py-4">
                    <h3>{experience.title}</h3>
                    <p className="text-xs">{experience.date}</p>
                  </div>
                  <ul className="list-disc pl-6 text-sm flex flex-col gap-2">
                    {experience.description.map((desc, index) => (
                      <li key={`${experience.id}-${index}`}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </Fade>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
