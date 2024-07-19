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
      className="lg:h-[90vh] lg:items-center lg:justify-center overflow-x-hidden flex flex-col lg:flex-row w-full pt-16 sm:pt-32 pb-24 gap-4 xxs:gap-10"
    >
      <div className="relative lg:hidden self-center">
        <Fade duration={1000} triggerOnce={true}>
          <div className="">
            <Image
              className="z-0 opacity-25 px-4 xxs:w-72 sm:w-[360px] xxs:relative xxs:right-[55px] "
              src="/images/colorful-label.png"
              alt="Description of image"
              width={580}
              height={580}
            />
          </div>
        </Fade>

        <div className="flex justify-center w-full drop-shadow-[8px_-2px_0px_rgba(0,0,0,0.15)] absolute bottom-0 xxs:left-[85px]">
          <Fade duration={500} triggerOnce={true}>
            <Image
              className="px-16 xxs:p-0 self-center xxs:w-[180px] sm:w-[290px] lg:w-[380px] 2xl:w-[465px]"
              src="/images/michelle-cartoon.png"
              alt="Description of image"
              width={465}
              height={465}
            />
          </Fade>
        </div>
      </div>

      <div className="flex flex-col xs:self-center px-4 min-w-[390px] sm:min-w-[390px] md:min-w-[430px] lg:min-w-[450px] 2xl:min-w-[550px] z-10 lg:relative lg:left-10 xl:left-0 xl:-top-12 ">
        <Fade direction="down" duration={800} delay={500} triggerOnce={true}>
          <h1 className="text-2xl xxs:text-4xl xs:text-4xl xl:text-5xl xxs:mb-2 xl:mb-5 2xl:mb-7">
            Hi, I{`'`}m <b className="font-semibold">Michelle</b>
            , <br />
          </h1>
          <div className="text-2xl xxs:text-3xl md:text-4xl 2xl:text-5xl mb-4 h-7 sm:h-9 md:h-10 xl:h-12 2xl:h-16">
            {/* <p>a Full Stack Developer.</p> */}
            <Typewriter
              texts={[
                // "a Software Engineer.",
                // "a Web Developer.",
                "a Full Stack Developer.",
              ]}
              period={1000}
            />
          </div>
        </Fade>
        <Fade direction="up" duration={800} delay={500} triggerOnce={true}>
          <div className="flex gap-3 2xl:gap-5 mb-5">
            <a href="https://github.com/hsiangyichen">
              <Github className="size-6 xxs:size-7 sm:size-8 xl:size-11 2xl:size-12 transition-transform hover:scale-110" />
            </a>
            <a href="https://www.linkedin.com/in/michellech2539/">
              <Linkedin className="size-6 xxs:size-7 sm:size-8 xl:size-11 2xl:size-12 transition-transform hover:scale-110" />
            </a>
            <a href="mailto:michellech2539@gmail.com">
              <Mail className=" size-6 xxs:size-7 sm:size-8 xl:size-11 2xl:size-12 transition-transform hover:scale-110" />
            </a>
          </div>

          <a href="/files/resume.pdf" download className="2xl:w-64 ">
            <button className="group relative py-1.5 xxs:px-6 xxs:py-2 sm:p-2 sm:w-32 w-28 2xl:p-4 2xl:w-64 overflow-hidden rounded-md 2xl:rounded-lg bg-dark-brown 2xl:text-lg shadow text-white sm:text-base text-sm">
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

      <div className="hidden relative lg:block right-14 -top-8 xl:right-16 xl:-top-20">
        <Fade duration={1000} triggerOnce={true}>
          <div className="">
            <Image
              className="z-0 opacity-25 w-60 xs:w-72 sm:w-[360px] lg:w-[430px] xl:w-[460px] 2xl:w-[530px]"
              src="/images/colorful-label.png"
              alt="Description of image"
              width={580}
              height={580}
            />
          </div>
        </Fade>

        <div className="drop-shadow-[8px_-2px_0px_rgba(0,0,0,0.15)] w-56 xs:w-[260px] sm:w-[300px] lg:w-[280px] xl:w-[305px] 2xl:w-[345px] absolute -bottom-2 xxs:left-[162px] xs:-bottom-2 xs:left-32 sm:left-56 sm:-bottom-1 lg:left-48 lg:top-20 2xl:top-24 2xl:left-64">
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
