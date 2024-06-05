import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center pt-6 h-[10vh]">
      <div className="flex justify-start items-center text-lg ">
        <Link href="/">MICHELLE CHEN</Link>
      </div>
      <div className="flex justify-end items-center text-lg space-x-8">
        <Link
          href="/"
          className="duration-300 transition hover:-translate-y-0.5 hover:text-[#726f6f]"
        >
          Home
        </Link>
        <Link
          href="#about"
          className="hover:-translate-y-0.5 hover:text-[#726f6f] transition duration-300"
        >
          About
        </Link>
        <Link
          href="#skills"
          className="transition duration-300 hover:-translate-y-0.5 hover:text-[#726f6f]"
        >
          Skills
        </Link>
        <Link
          href="#experience"
          className="transition duration-300 hover:-translate-y-0.5 hover:text-[#726f6f]"
        >
          Experience
        </Link>
        <Link
          href="#projects"
          className="transition duration-300 hover:-translate-y-0.5 hover:text-[#726f6f]"
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="transition duration-300 hover:-translate-y-0.5 hover:text-[#726f6f]"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
