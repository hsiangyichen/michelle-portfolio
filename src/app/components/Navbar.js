import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center pt-6 h-[10vh]">
      <div className="flex justify-start items-center text-lg ">
        <Link href="/">MICHELLE CHEN</Link>
      </div>
      <div className="flex justify-end items-center text-lg space-x-8">
        <Link href="/" className="hover:scale-110 transition duration-300">
          Home
        </Link>
        <Link href="#about" className="hover:scale-110 transition duration-300">
          About
        </Link>
        <Link
          href="#skills"
          className="hover:scale-110 transition duration-300"
        >
          Skills
        </Link>
        <Link
          href="#experience"
          className="hover:scale-110 transition duration-300"
        >
          Experience
        </Link>
        <Link
          href="#projects"
          className="hover:scale-110 transition duration-300"
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="hover:scale-110 transition duration-300"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
