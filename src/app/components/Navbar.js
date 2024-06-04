import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center pt-6 h-[10vh]">
      <div className="flex justify-start items-center text-lg ">
        <Link href="/">MICHELLE CHEN</Link>
      </div>
      <div className="flex justify-end items-center text-lg space-x-8">
        <Link href="/">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
