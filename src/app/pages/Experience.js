"use client";
import React from "react";
import VerticalTimeline from "@/components/VerticalTimeline";
import { experienceLeftData, experienceRightData } from "../lib/data";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="text-4xl font-semibold mb-16">Experience</h1>
      <div className="flex flex-col items-center w-full">
        <div className="">
          <VerticalTimeline
            experienceLeftData={experienceLeftData}
            experienceRightData={experienceRightData}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
