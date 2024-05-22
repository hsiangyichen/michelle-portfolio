// import Github from "@assets/icons/small-github.svg";
// import Linkedin from "@assets/icons/small-linkedin.svg";
// import Mail from "@assets/icons/small-mail.svg";
import { Instagram, Linkedin, Github, Mail } from "lucide-react";

const SideItem = () => {
  return (
    <div>
      <div className="fixed right-14 bottom-0 flex flex-col items-center gap-6">
        <p
          className="text-xs text-gray-800"
          style={{ writingMode: "vertical-rl" }}
        >
          michellech2539@gmail.com
        </p>
        <div className="w-[1.5px] h-28 mr-[1.4px] bg-black"></div>
      </div>
      <div className="fixed left-14 bottom-0 flex flex-col items-center gap-6">
        {/* <p
          className="text-xs text-gray-800"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll down to know More About Me
        </p> */}
        <div className="flex flex-col gap-4">
          <a href="https://github.com/hsiangyichen">
            <Github size={24} strokeWidth={2} />
          </a>
          <a href="https://www.linkedin.com/in/michellech2539/">
            <Linkedin size={24} strokeWidth={2} />
          </a>
          <a href="https://www.instagram.com/hsiangyi__chen/">
            <Instagram size={24} strokeWidth={2} />
          </a>
          <a href="mailto:michellech2539@gmail.com">
            <Mail size={24} strokeWidth={2} />
          </a>
        </div>
        <div className="w-[1.5px] h-28 mr-[1.4px] bg-black"></div>
      </div>
    </div>
  );
};

export default SideItem;
