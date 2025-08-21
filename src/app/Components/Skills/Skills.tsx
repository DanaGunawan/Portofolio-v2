"use client";

import React from "react";
import { FaLaravel } from "react-icons/fa6";
import {
    SiChatbot,
    SiGithub,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import Tilt from "react-parallax-tilt";

const listSkills = [
  {
    name: "Laravel",
    icon: <SiLaravel />,
    percentage: 87,
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    percentage: 85,
  },
  {
    name: "Supabase",
    icon: <SiSupabase />,
    percentage: 60,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    percentage: 80,
  },

  {
    name: "React.js",
    icon: <SiReact />,
    percentage: 75,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    percentage: 70,
  },
];

const ToolsList = [
    {
        name: "github",
        icon: <SiGithub />
    },
    {
        name: "PostMan",
        icon: <SiPostman />
    },
    {
        name : "Vercel",
        icon : <SiVercel />

    },
    {
        name : "ChatGPT",
        icon : <SiChatbot />
    }


]

const Skills = () => {
  return (
    <>
    <div className="pb-8 pt-16 text-white">
      <h1 className="text-center text-2xl sm:text-4xl md-text-5xl font-bold ">
        My <span className="text-cyan-300">Skills</span>
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-6 mt-12">
        {listSkills.map((skill) => {
          return (
            <Tilt key={skill.name} transitionSpeed={400} scale={1.5}>
              <div className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center gap-4">
                <div className="text-5xl mb-4 text-gray-300">{skill.icon}</div>
                <p className="text-2xl font-semibold ">{skill.percentage}%</p>
                <p className="text-purple-400 mt-1">{skill.name}</p>
              </div>
            </Tilt>
          );
        })}
      </div>
    </div>

    <div className="pb-16 pt-2 text-white">
      <h1 className="text-center text-2xl sm:text-4xl md-text-5xl font-bold ">
        My <span className="text-cyan-300">Tools</span>
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-6 mt-12">
        {ToolsList.map((tool) => {
          return (
            <Tilt key={tool.name} transitionSpeed={400} scale={1.5}>
              <div className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center gap-4">
                <div className="text-5xl mb-4 text-gray-300">{tool.icon}</div>
                <p className="text-purple-400 mt-1">{tool.name}</p>
              </div>
            </Tilt>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default Skills;
