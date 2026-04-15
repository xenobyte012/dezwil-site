import React from "react";
import { useState } from "react";
import burgerMenu from "../images/burger-bar.png";
import closeButton from "../images/close.webp";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="fixed z-1000 hidden md:flex item-center bg-amber-500 text-gray-100 py-4 px-4 justify-between items-center w-full  ">
        <div className="text-4xl  font-bold tracking-wide ">
          Appliance Repair
        </div>
        <div className=" flex gap-4 text-xl ">
          <span className="hover:text-blue-600">
            <a href="#home">Home</a>
          </span>
          
          <span className="hover:text-blue-600">
            <a href="#about">About</a>
          </span>
          <span className="hover:text-blue-600">
            <a href="#contact">Contact</a>
          </span>
        </div>
      </nav>
      <div>
        <div className="fixed top-0 z-1000 flex md:hidden item-center bg-amber-500 text-gray-100 py-3 pl-4 justify-between items-center w-full  ">
          <div className="flex flex-row">
            <img
              src={burgerMenu}
              alt="burger manu"
              className="w-10 mr-2 "
              onClick={() => setIsOpen(!isOpen)}
            />
            <div className="text-3xl  font-bold tracking-wide ">
              Appliance Repair
            </div>
          </div>
        </div>
      </div>
      <div
        className={`z-200 p-4 fixed top-0 left-0 h-full w-64 bg-amber-500 text-white transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        <div className="flex flex-row mb-6 items-center z-290">
          <img
            onClick={() => setIsOpen(false)}
            src={closeButton}
            alt="close button icon"
            className="w-7 h-7 mr-2 "
          />
          {/*<div className="text-2xl text-heading font-bold tracking-wide">
               St Dave Academy
             </div>*/}
        </div>
        <div className="gap-4 pt-4">
          <div className=" gap-4 text-xl flex flex-col  text-heading ">
            <span
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              <a href="#home">Home</a>
            </span>
            <span
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              <a href="#about">About</a>
            </span>
            <span
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              <a href="#contact">Contact</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
