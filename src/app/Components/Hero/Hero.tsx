"use client";

import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { BsArrowDown } from "react-icons/bs";
import ParticleHero from "./ParticleBackground";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      <ParticleHero />
      <div className="relative z-10 text-center flex flex-col items-center">
        <Image
          src="/images/b2.jpg"
          alt="profileImage"
          className="rounded-full border-8 border-[#0c0c48aa]"
          width={150}
          height={150}
        />
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide">
          Creating Web Products <br /> Brands{" "}
          <span className="text-cyan-200 font-bold">and experiences</span>{" "}
        </h1>
        <h2 className="text-sm mt-5 px-2 sm:text-2xl font-medium flex items-center">Hi i'm Dana Gunawan a passionate 
          <span className="text-cyan-200 font-bold">
            <Typewriter options={{
              strings : [`AI Web Developer`, `Prompt Engineer`],
              autoStart: true,
              loop:true,
              delay:75,
              wrapperClassName: 'pl-2'
            }} />
          </span>
        </h2>
        <button className="mt-6 px-10 py-4 rounded-full bg-blue-800 hover:bg-blue-900 transition-all duration-300
        cursor-pointer font-medium text-lg">More Details <BsArrowDown className="w-5 h-5 ml-2 inline-block" /></button>
      </div>
    </div>
  );
};

export default Hero;
