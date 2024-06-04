import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { LiaUniversitySolid } from "react-icons/lia";
import { FaPeopleLine } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa6";

export const skillsLanguageData = [
  "Java",
  "Python",
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
];

export const skillsFrameworkAndLibraryData = [
  "React",
  "Vue.js",
  "Next.js",
  "Node.js",
  "Spring Boot",
  "Apache POI",
];

export const skillsToolsData = [
  "Git",
  "AWS",
  "Maven",
  "Prisma",
  "Tailwind CSS",
];

export const skillsDBAndTestingData = [
  "Mocha",
  "Chai.js",
  "JUnit",
  "MySQL",
  "PostgreSQL",
  "Oracle DB",
];

export const experienceLeftData = [
  {
    title: "Full Stack Developer",
    institution: "Binance.US",
    location: "Vancouver, Canada",
    description: [
      "Used Vue.js and Java Spring Boot to enhance UIs and API integration, boosting user access by 95%",
      "Developed AWS S3-based image storage with Java, featuring client-side uploads and AWS SDK integration.",
      "Integrated Apache POI for data export, enabling Excel downloads.",
      "Enhanced usability with dynamic, responsive UIs using Element UI.",
    ],
    icon: <CgWorkAlt size="30" />,
    date: "Jan 2023 - Aug 2023",
    image: "/images/binance-logo.jpeg",
  },
  {
    title: "Graduate",
    institution: "UBC",
    location: "Vancouver, Canada",
    description: [
      "Gained comprehensive knowledge in algorithms, data structures, software engineering principles, and computer architecture.",
      "Collaborated on various projects, honing skills in teamwork, problem-solving, and project management.",
    ],
    icon: <LuGraduationCap size="30" />,
    date: "May 2024",
    image: "/images/ubc-logo.png",
  },
];

export const experienceRightData = [
  {
    title: "Public Relations Executive",
    institution: "UBCTA",
    location: "Vancouver, Canada",
    description: [
      "Boosted sponsor satisfaction and retention by 90% through strategic collaboration and personalized sponsorship solutions.",
      "Worked with marketing to create tailored sponsorship packages, increasing event attendance by 30% compared to prior events.",
    ],
    icon: <FaPeopleLine size="30" />,
    date: "Sep 2021 - Apr 2023",
    image: "/images/ubcta-logo.jpeg",
  },
  {
    title: "Events & Social Rep.",
    institution: "WITS",
    location: "Halifax, Canada",
    description: [
      "Organized events and social activities to support women in tech.",
      "Fostered partnerships for impactful initiatives, like alumni speaker series and coding workshops.",
    ],
    icon: <FaLaptopCode size="30" />,
    date: "Aug 2019 - Apr 2020 ",
    image: "/images/dalwits-logo.jpeg",
  },
];
