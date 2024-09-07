"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Using react-icons for the menu icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={`transition  ${
          isMobile
            ? "hover:text-[#807c7c] duration-100"
            : "hover:text-[#726f6f] duration-300 hover:-translate-y-0.5"
        }`}
        onClick={isMobile ? toggleMenu : undefined}
      >
        {link.label}
      </Link>
    ));

  return (
    <nav className="w-full px-5 flex justify-between items-center pt-6 h-[10vh] overflow-hidden">
      <div className="flex justify-start items-center text-lg min-w-48">
        <Link href="/">MICHELLE CHEN</Link>
      </div>
      <div className="hidden lg:flex justify-end items-center text-base space-x-8">
        {renderNavLinks()}
      </div>
      <div className="w-full lg:hidden flex justify-end items-center">
        <button onClick={toggleMenu} className="focus:outline-none z-50">
          {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 h-full bg-white opacity-95 text-black flex space-y-6  flex-col items-center justify-center transition-transform transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } w-full z-40 lg:hidden`}
      >
        {renderNavLinks(true)}
      </div>
    </nav>
  );
};

export default Navbar;
