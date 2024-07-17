"use client";
import { Instagram, Linkedin, Github, Mail } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import { RiGithubLine } from "react-icons/ri";

const SideItem = () => {
  return (
    <div className="hidden sm:block">
      <div className="fixed right-14 bottom-0 flex flex-col items-center gap-6">
        <Fade cascade damping={0.5} triggerOnce={true}>
          <a href="mailto:michellech2539@gmail.com">
            <p
              className="text-xs text-gray-800 transition-transform hover:scale-110"
              style={{ writingMode: "vertical-rl" }}
            >
              michellech2539@gmail.com
            </p>
          </a>
          <div className="w-[1.5px] h-28 mr-[1.4px] bg-black"></div>
        </Fade>
      </div>
      <div className="fixed left-14 bottom-0 flex flex-col items-center">
        <Fade cascade damping={0.2} triggerOnce={true}>
          <a href="https://github.com/hsiangyichen">
            <Github
              className="mb-4 transition-transform hover:scale-110"
              size={24}
              strokeWidth={2}
            />
          </a>
          <a href="https://www.linkedin.com/in/michellech2539/">
            <Linkedin
              className="mb-4 transition-transform hover:scale-110"
              size={24}
              strokeWidth={2}
            />
          </a>
          <a
            className="transition-transform"
            href="https://www.instagram.com/hsiangyi__chen/"
          >
            <Instagram
              className="mb-4 hover:scale-110"
              size={24}
              strokeWidth={2}
            />
          </a>
          <a href="mailto:michellech2539@gmail.com">
            <Mail
              className="mb-6 transition-transform hover:scale-110"
              size={24}
              strokeWidth={2}
            />
          </a>
          <div className="w-[1.5px] h-28 mr-[1.4px] bg-black"></div>
        </Fade>
      </div>
    </div>
  );
};

export default SideItem;
