"use client";
import React from "react";
import { Instagram, Linkedin, Github, Mail } from "lucide-react";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <div
      id="contact"
      className="my-36 flex flex-row items-center justify-center gap-6"
    >
      <div className="flex flex-col gap-2">
        <Fade cascade damping={0.2} triggerOnce>
          <h1 className="text-4xl">Thank you for visiting!</h1>
          <p className="text-xl">
            Feel free to contact me if you have any question!
          </p>
        </Fade>
      </div>
      <Fade delay={200} duration={800} triggerOnce>
        <div className="flex gap-5">
          <a href="https://github.com/hsiangyichen">
            <Github size={48} strokeWidth={1.5} />
          </a>
          <a href="https://www.linkedin.com/in/michellech2539/">
            <Linkedin size={48} strokeWidth={1.5} />
          </a>
          <a href="mailto:michellech2539@gmail.com">
            <Mail size={48} strokeWidth={1.5} />
          </a>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
