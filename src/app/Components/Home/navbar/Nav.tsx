"use client";

import React,{useState,useEffect} from "react";
import { FaCode } from "react-icons/fa";
import { NavLinks } from "../../../../../constants/Constants";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";



type NavProps = {
  openNav: () => void;
}

const Nav = ({openNav}:NavProps) => {

  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY >= 90){
        setNavBg(true);
      }
      if(window.scrollY < 90){
        setNavBg(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);


  return (
  <div
    className={`transition-all ${
      navBg ? "bg-[#0f142ed9] shadow-md " : "fixed"
    } duration-200 ease-in-out fixed w-full z-[1000] h-[12vh]`}
  >
    <div className="flex items-center h-full justify-between w-[90%] mx-auto">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
          <FaCode className="w-6 h-6 text-black" />
        </div>
        <h1 className="text-xl hidden text-white sm:block md:text-xl font-bold">
          Dana Gunawan
        </h1>
      </div>

      {/* Navlinks */}
      <div className="hidden lg:flex items-center space-x-10">
        {NavLinks.map((link) => (
          <Link
            key={link.id}
            href={link.link}
            className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Right side: Button + Hamburger */}
      <div className="flex items-center space-x-4">
        {/* Button */}
        <button className="px-8 py-3.5 text-white text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-200 ease-in-out flex items-center space-x-2">
          <BiDownload className="w-5 h-5" />
          <span>Download CV</span>
        </button>

        {/* Hamburger (only on mobile) */}
        <HiBars3BottomRight
          onClick={openNav}
          className="w-8 h-8 text-white lg:hidden cursor-pointer"
        />
      </div>
    </div>
  </div>
);
}

export default Nav;
