import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-4 h-[10vh]">
      <div className="flex justify-start items-center">
        <Link href="/">MICHELLE CHEN</Link>
      </div>
      <div className="flex justify-end items-center space-x-4">
        <Link href="/">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
