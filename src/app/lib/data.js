import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { LiaUniversitySolid } from "react-icons/lia";
import { FaPeopleLine } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa6";

export const skillsLanguageData = [
  "Java",
  "Python",
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
];

export const skillsFrameworkAndLibraryData = [
  "SASS",
  "React",
  "Next.js",
  "NestJS",
  "Vite",
  "Vue.js",
  "Node.js",
  "express",
  "Knex.js",
  "Spring Boot",
];

export const skillsToolsData = [
  "Git",
  "AWS",
  "Figma",
  "Redux",
  "Maven",
  "Prisma",
  "Docker",
  "GraphQL",
  "Tailwind CSS",
];

export const skillsDBAndTestingData = [
  "Mocha",
  "Chai.js",
  "Jest",
  "JUnit",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
];

export const experienceLeftData = [
  {
    title: "Diploma, Software Engineering",
    institution: "BrainStation",
    location: "Remote",
    description: [
      <>
        Completed an intensive 12-week program focused on modern{" "}
        <strong>full-stack development</strong> methodologies and industry best
        practices, achieving a <strong>98% final grade</strong>
      </>,
      <>
        Built responsive web applications using{" "}
        <strong>React, Node.js, and Express</strong>, implementing RESTful APIs
        and database integration
      </>,
      <>
        Applied <strong>agile development practices</strong> through
        collaborative sprints, code reviews, and iterative development cycles
      </>,
    ],
    icon: <CgWorkAlt size="30" />,
    date: "Nov 2024 - Feb 2025",
    image: "/images/brainstation.jpg",
  },
  {
    title: "Software Engineer for AI Training",
    institution: "Outlier",
    location: "Remote",
    description: [
      <>
        Refined AI-generated code outputs for clarity, scalability, and
        performance in <strong>Python, JavaScript, and Java</strong>, improving
        code quality for training and production environments.
      </>,
      <>
        Delivered detailed technical feedback to enhance development processes,
        supporting enhancements in model accuracy and \newline deployment
        processes.
      </>,
    ],
    icon: <CgWorkAlt size="30" />,
    date: "Oct 2024 - Present",
    image: "/images/outlier.jpeg",
  },
  {
    title: "Full Stack Developer",
    institution: "Binance.US",
    location: "Vancouver, Canada",
    description: [
      <>
        Developed finance platform with <strong>Java Spring Boot</strong> and{" "}
        <strong>Vue.js</strong>, improving transaction efficiency by{" "}
        <strong>95%</strong>
      </>,
      <>
        Implemented <strong>AWS S3 image storage</strong> with Java, featuring
        client-side uploads and AWS SDK integration.
      </>,
      <>
        Integrated <strong>Apache POI</strong> for data export, enabling Excel
        downloads.
      </>,
      <>
        Built transaction alerts with Slack Webhooks via{" "}
        <strong>HttpClient</strong>, boosting response times and reducing manual
        oversight.
      </>,
      <>
        <strong>Exceeded intern responsibilities</strong> by refactoring code,{" "}
        <strong>reducing duplication</strong> by <strong>30%</strong>, enhancing
        scalability and consistency.
      </>,
      <>
        Enhanced usability with dynamic, responsive UIs using{" "}
        <strong>Element UI</strong>.
      </>,
    ],
    icon: <CgWorkAlt size="30" />,
    date: "Jan 2023 - Aug 2023",
    image: "/images/binance-logo.jpeg",
  },
  {
    title: "Bachelor of Science | Major in computer science",
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
      "Worked with marketing to create sponsorship packages, increasing event attendance by 30% compared to prior events.",
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

export const projectsData = [
  {
    title: "Room Booking System",
    description:
      "This system helps you find the perfect meeting room with advanced search tools for room size, A/V facilities, and location.",
    tags: ["React", "Typescript", "Tailwind", "Prisma", "PostgreSQL", "Redux"],
    image: "/images/room-booking-system-website.png",
    link: "https://room-booking-system-delta.vercel.app/",
  },
  {
    title: "Unreachable Code Detection System",
    description:
      "Analyzing unreachable code simplifies complex code, helping users in identifying and understanding unreachable sections based on control flow.",
    tags: ["Java", "Spring Boot", "Next.js", "CSS"],
    image: "/images/code-detection-website.png",
    link: "https://github.com/hsiangyichen/unreachable-code-detection-system",
  },
  {
    title: "Sports Training Website",
    description:
      "This website offers a range of sports training programs with multilingual support, allowing users to register for classes.",
    tags: ["React", "Next.js", "Tailwind"],
    image: "/images/sports-training-website.png",
    link: "https://sport-training-website.vercel.app/en",
  },
  {
    title: "License Plate eCommerce Platform",
    description:
      "The website facilitates professional license plate trading with simplicity, security, personalized service, and an extensive, diverse inventory.",
    tags: ["React", "TypeScript", "Next.js", "SCSS"],
    image: "/images/license-plate-website.png",
    link: "https://license-plate-ecommerce-platform.vercel.app/",
  },

  {
    title: "Music App Store",
    description:
      "This online music store lets users add/remove songs from a shopping cart, generating a receipt detailing each song, its price, and the total expenditure.",
    tags: ["Java", "JUnit"],
    image: "/images/music-world-app.png",
    link: "https://github.com/hsiangyichen/online-music-store",
  },
  {
    title: "Portfolio",
    description:
      "My portfolio website presents my professional journey, showcasing my projects and technical skills. You can also learn more about me, my goals, and my personality.",
    tags: ["React", "Next.js", "Tailwind"],
    image: "/images/michelle-portfolio.png",
    link: "https://michelle-portfolio-iota.vercel.app/",
  },
];
