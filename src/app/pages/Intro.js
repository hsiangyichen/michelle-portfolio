"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Instagram, Linkedin, Github, Mail, Download } from "lucide-react";
import Typewriter from "../components/Typewriter";
import { Fade } from "react-awesome-reveal";
import { BsArrowDown } from "react-icons/bs";

const Intro = () => {
  const [currentLabel, setCurrentLabel] = useState("colorful-label-1");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLabel((prevLabel) =>
        prevLabel === "colorful-label-1"
          ? "colorful-label-2"
          : "colorful-label-1"
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        id="intro"
        className="h-[82vh] items-center justify-center overflow-x-hidden flex flex-col md:flex-row w-full gap-12 md:gap-0"
      >
        <div className="flex flex-col px-4 z-10 md:relative md:left-20 lg:left-28 xl:left-28 xl:-top-4 2xl:left-20 w-full xxs:max-w-fit">
          <Fade direction="down" duration={800} delay={500} triggerOnce={true}>
            <h1 className="text-2xl xxs:text-4xl xxs:leading-10 xs:text-4xl xl:text-5xl xxs:mb-2 xs:mb-3 lg:mb-5 2xl:mb-7">
              Hi, I{`'`}m <b className="font-semibold">Michelle</b>
              , <br />
            </h1>
            <div className="text-2xl xxs:text-[28px] xs:text-3xl lg:text-4xl mb-1.5 xxs:mb-3 xs:mb-4 xl:mb-6 2xl:mb-7 xxs:min-w-[321px] sm:min-w-[330px] lg:min-w-[490px] 2xl:min-w-[530px] ">
              <Typewriter
                texts={[
                  "a Software Engineer.",
                  "a Web Developer.",
                  "a Full Stack Developer.",
                ]}
              />
            </div>
          </Fade>
          <Fade direction="up" duration={800} delay={500} triggerOnce={true}>
            <div className="flex gap-3 2xl:gap-5 mb-2 xxs:mb-5">
              <a href="https://github.com/hsiangyichen">
                <Github className="size-7 sm:size-8 lg:size-9  transition-transform hover:scale-110" />
              </a>
              <a href="https://www.linkedin.com/in/michellech2539/">
                <Linkedin className="size-7 sm:size-8 lg:size-9 transition-transform hover:scale-110" />
              </a>
              <a href="mailto:michellech2539@gmail.com">
                <Mail className="size-7 sm:size-8 lg:size-9  transition-transform hover:scale-110" />
              </a>
            </div>

            <a href="/files/resume.pdf" download className="2xl:w-64 ">
              <button className="group relative py-1.5 px-6 xxs:py-2.5 sm:p-2 sm:w-32 2xl:p-4 2xl:w-64 overflow-hidden rounded-md 2xl:rounded-lg bg-dark-brown 2xl:text-lg shadow text-white sm:text-base text-sm">
                <div className="absolute inset-y-0 right-0 w-0 bg-[#e3dede] transition-all rounded-md 2xl:rounded-lg duration-[250ms] ease-out group-hover:w-full  border-dark-brown border-2"></div>
                <span className="flex flex-row items-center justify-center relative group-hover:text-dark-brown group-hover:font-medium ">
                  <span className="block 2xl:hidden">
                    <Download className="size-4 mr-2" />
                  </span>
                  <span className="hidden 2xl:block">Download My&nbsp;</span>
                  Resume
                </span>
              </button>
            </a>
          </Fade>
        </div>

        <div className="px-4 flex items-center justify-center relative md:-top-8 md:right-24 lg:right-52 lg:-top-12 xl:right-40 xl:-top-14 2xl:right-52">
          <Fade duration={1000} triggerOnce={true}>
            <div className="relative -top-16 md:top-0">
              <Image
                className="z-0 opacity-35 min-w-[360px] w-[360px] sm:min-w-[385px] sm:w-[385px] md:min-w-[400px] md:w-[400px] lg:min-w-[420px] xl:w-[460px] 2xl:w-[510px]"
                src={`/images/${currentLabel}.png`}
                alt="Description of image"
                width={580}
                height={580}
              />
            </div>
          </Fade>

          <div className="drop-shadow-[8px_-2px_0px_rgba(0,0,0,0.15)] max-w-full w-[240px] md:w-[250px] lg:w-[290px] xl:w-[305px] 2xl:w-[325px] absolute top-2 sm:top-6 md:left-44 lg:left-[228px] lg:top-16 xl:left-56 xl:top-20 2xl:left-[280px] 2xl:top-[86px">
            <Fade duration={500} triggerOnce={true}>
              <Image
                src="/images/michelle-cartoon.png"
                alt="Description of image"
                width={465}
                height={465}
              />
            </Fade>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center  justify-center h-[8vh]">
        <Fade duration={800} delay={500}>
          <BsArrowDown
            strokeWidth={0.1}
            className="size-7 animate-bounce-arrow"
          />
        </Fade>
      </div>
    </>
  );
};

export default Intro;
