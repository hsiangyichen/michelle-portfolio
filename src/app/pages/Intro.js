"use client";
import React from "react";
import Image from "next/image";
import { Instagram, Linkedin, Github, Mail, Download } from "lucide-react";
import Typewriter from "../components/Typewriter";
import { Fade } from "react-awesome-reveal";

const Intro = () => {
  return (
    <div
      id="intro"
      className="h-[90vh] flex flex-col lg:flex-row items-center w-full mb-4 2xl:overflow-hidden justify-center"
    >
      <div className="flex flex-col  min-w-[270px] ml-20 xxs:m-0 sm:min-w-[390px] 2xl:min-w-[520px] z-10 gap-2 lg:gap-4 xl:gap-6 relative top-[215px] xs:top-72 sm:top-[340px] lg:left-4 lg:top-0 xl:-left-4 2xl:top-2 2xl:left-2 ">
        <Fade direction="down" duration={800} delay={500} triggerOnce={true}>
          <h1 className="text-3xl sm:text-4xl xl:text-5xl">
            Hi, I{`'`}m <b className="font-semibold">Michelle</b>
            , <br />
          </h1>
          <div className="text-2xl sm:text-4xl 2xl:text-5xl h-11 2xl:h-16 sm:h-12">
            <Typewriter
              texts={[
                "a Software Engineer.",
                "a Web Developer.",
                "a Full Stack Developer.",
              ]}
              period={1000}
            />
          </div>
        </Fade>
        <Fade direction="up" duration={800} delay={500} triggerOnce={true}>
          <div className="flex gap-2 2xl:gap-5 mb-4 ">
            <a href="https://github.com/hsiangyichen">
              <Github className="size-6 sm:size-8 xl:size-11 2xl:size-12 transition-transform hover:scale-110" />
            </a>
            <a href="https://www.linkedin.com/in/michellech2539/">
              <Linkedin className="size-6 sm:size-8 xl:size-11 2xl:size-12 transition-transform hover:scale-110" />
            </a>
            <a href="mailto:michellech2539@gmail.com">
              <Mail className=" size-6 sm:size-8 xl:size-11 2xl:size-12 transition-transform hover:scale-110" />
            </a>
          </div>

          <a href="/files/resume.pdf" download className="2xl:w-64 ">
            <button className="group relative p-1.5 sm:p-2 sm:w-32 w-28 2xl:p-4 2xl:w-64 overflow-hidden rounded-md 2xl:rounded-lg bg-dark-brown 2xl:text-lg shadow text-white sm:text-base text-sm">
              <div className="absolute inset-y-0 right-0 w-0 bg-[#e3dede] transition-all rounded-m 2xl:rounded-lg duration-[250ms] ease-out group-hover:w-full  border-dark-brown border-2"></div>
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

      <div className="w-60 xs:w-72 sm:w-[360px] lg:w-[430px] xl:w-[460px] 2xl:w-[530px] relative xxs:right-12 bottom-[220px] xs:right-8 xs:bottom-52 sm:right-16 sm:bottom-60  lg:top-0 lg:right-24 xl:right-4 2xl:right-16 2xl:-top-2">
        <div>
          <Fade duration={1000} triggerOnce={true}>
            <Image
              className="z-0 opacity-25"
              src="/images/colorful-label.png"
              alt="Description of image"
              width={580}
              height={580}
            />
          </Fade>
        </div>

        <div className="drop-shadow-[8px_-2px_0px_rgba(0,0,0,0.15)] w-56 xs:w-[260px] sm:w-[300px] lg:w-[380px] 2xl:w-[465px] absolute -bottom-2 xxs:left-32 xs:-bottom-2 xs:left-32 sm:left-56 sm:-bottom-1 lg:left-48 2xl:top-28 2xl:left-64">
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
  );
};

export default Intro;
