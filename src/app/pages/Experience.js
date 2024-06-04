"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import VerticalTimeline from "@/components/VerticalTimeline";
import "react-vertical-timeline-component/style.min.css";
import { experienceLeftData, experienceRightData } from "../lib/data";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="text-4xl font-semibold mb-16">Experience</h1>
      <VerticalTimeline
        experienceLeftData={experienceLeftData}
        experienceRightData={experienceRightData}
      />
    </div>
  );
};

export default Experience;
