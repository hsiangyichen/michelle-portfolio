import React from "react";
import Image from "next/image";
import Github from "@assets/icons/github.svg";
import Linkedin from "@assets/icons/linkedin.svg";
import Mail from "@assets/icons/mail.svg";
import Typewriter from "../components/Typewriter";

const Intro = () => {
  return (
    <div id="intro" className="h-[90vh] flex items-center justify-center gap-6">
      <div className="relative ml-[380px] mb-12">
        <div className="absolute top-[130px] -left-[420px] flex flex-col gap-4 min-w-[520px] z-10">
          <h1 className="text-5xl">
            Hi, I{`'`}m <b>Michelle</b>, <br />
          </h1>
          <div className="text-5xl h-16">
            <Typewriter
              texts={[
                "a Software Engineer.",
                "a Web Developer.",
                "a Full Stack Developer.",
              ]}
              period={2000}
            />
          </div>
          <div className="flex gap-5">
            <a href="https://github.com/hsiangyichen">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/michellech2539/">
              <Linkedin />
            </a>
            <a href="mailto:michellech2539@gmail.com">
              <Mail />
            </a>
          </div>
          <a href="/files/resume.pdf" download className="w-64 my-12 ">
            <button className="bg-dark-brown rounded-md p-4 text-lg text-white w-64">
              Download My Resume
            </button>
          </a>
        </div>
        <Image
          className="opacity-30 z-0"
          src="/images/colorful-label.png"
          alt="Description of image"
          width={580}
          height={580}
        />
        <div className="drop-shadow-[8px_-2px_0px_rgba(0,0,0,0.15)] absolute bottom-0 -right-[140px]">
          <Image
            src="/images/michelle-cartoon.png"
            alt="Description of image"
            width={465}
            height={465}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
