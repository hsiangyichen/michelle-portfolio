import React from "react";
import { Instagram, Linkedin, Github, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="my-36 flex flex-row items-center justify-center gap-6"
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl">Thank you for visiting!</h1>
        <p className="text-xl">
          Feel free to contact me if you have any question!
        </p>
      </div>
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
    </div>
  );
};

export default Contact;
