"use client"
import React from 'react'
import ResumeCard from './ResumeCard';
import { FaCodepen } from 'react-icons/fa';
import { BiBadge } from 'react-icons/bi';

const Resume = () => {
  return (
    <div className="mt-20 pb-16">
        <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
            <div>
                <h1 className="mx-auto text-3xl sm:text-4xl font-bold text-white sm:text-center">
                    My Work <span className="text-cyan-200">Experiences </span> </h1>
                    <div className="mt-10">
                        <ResumeCard
                            Icon={FaCodepen}
                            role="Wordpress Developer"
                            date="Aug 2024 - Feb 2025 "
                            description="Developed and maintained WordPress websites, ensuring optimal performance and user experience. Collaborated with clients to enhancing functionality and design."
                    />
                    </div>
            </div>
            <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-white">
                    My <span className="text-cyan-200">Education </span> </h1>
                    <div className="mt-10">
                        <ResumeCard
                            Icon={BiBadge}
                            role="Bali State Polytechnic"
                            date="June 2022 - Oct 2025 "
                            description="Pursuing a Associate's degree in Information Technology, focusing on web development and software engineering. Engaged in various projects to apply theoretical knowledge in practical scenarios."
                    />
                    </div>
            </div>
        </div>
      
    </div>
  )
}

export default Resume
