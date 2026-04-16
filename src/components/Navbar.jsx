import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-900 text-white shadow-md">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-lg md:text-2xl font-bold tracking-wide text-blue-300">
          Dezwil Engineering
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm md:text-base">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-300 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-blue-950 text-white transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        {/* Close */}
        <div className="flex justify-between items-center p-5 border-b border-blue-800">
          <h2 className="font-bold text-blue-300">Menu</h2>

          <button onClick={() => setIsOpen(false)}>
            <X size={26} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col p-6 gap-6 text-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-300 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;