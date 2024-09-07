"use client";
import React from "react";
import { Instagram, Linkedin, Github, Mail } from "lucide-react";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <div
      id="contact"
      className="xxs:px-5 xs:px-6 s:px-20 sm:px-0 mb-14 sm:mb-24 sm:mt-14 md:mb-36 md:mt-24 flex flex-col md:flex-row mx-4 sm:mx-24 lg:items-center justify-center gap-4 md:gap-6"
    >
      <div className="flex flex-col gap-2">
        <Fade cascade damping={0.2} triggerOnce>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl">
            Thank you for visiting!
          </h1>
          <p className="text-md sm:text-lg lg:text-xl">
            Feel free to contact me if you have any question!
          </p>
        </Fade>
      </div>
      <Fade delay={200} duration={800} triggerOnce>
        <div className="flex gap-2 lg:gap-5">
          <a href="https://github.com/hsiangyichen">
            <Github
              className="size-7 sm:size-10 lg:size-12"
              strokeWidth={1.5}
            />
          </a>
          <a href="https://www.linkedin.com/in/michellech2539/">
            <Linkedin
              className="size-7 sm:size-10 lg:size-12"
              strokeWidth={1.5}
            />
          </a>
          <a href="mailto:michellech2539@gmail.com">
            <Mail className="size-7 sm:size-10 lg:size-12" strokeWidth={1.5} />
          </a>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
