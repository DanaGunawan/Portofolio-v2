"use client"

import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="pb-16 pt-16">
      <h1 className="text-center text-white text-2xl sm:text-4xl md:text-5xl font-bold">
        A small selection of recent <br />
        <span className="text-cyan-300">projects</span>
      </h1>
      {/* Project 1 */}
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 ">
        <div>
          <Image
            src="/images/p1.jpg"
            alt="SIGKOS PANJER"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="text-white text-xl font-bold mt-4">SIGKOS PANJER</h1>
          <h2 className="pt-2 font-medium text-white/80">
            Sistem Informasi Pendataan dan Penghuni Kos di Kelurahan Panjer
            Berbasis SIG
          </h2>
        </div>
        {/* Project 2 */}
        <div>
          <Image
            src="/images/p1.jpg"
            alt="SIGKOS PANJER"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="text-white text-xl font-bold mt-4">SIGKOS PANJER</h1>
          <h2 className="pt-2 font-medium text-white/80">
            Sistem Informasi Pendataan dan Penghuni Kos di Kelurahan Panjer
            Berbasis SIG
          </h2>
        </div>
        {/* Project 3 */}
        <div>
          <Image
            src="/images/p1.jpg"
            alt="SIGKOS PANJER"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="text-white text-xl font-bold mt-4">SIGKOS PANJER</h1>
          <h2 className="pt-2 font-medium text-white/80">
            Sistem Informasi Pendataan dan Penghuni Kos di Kelurahan Panjer
            Berbasis SIG
          </h2>
        </div>
        {/* Project 4 */}
        <div>
          <Image
            src="/images/p1.jpg"
            alt="SIGKOS PANJER"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="text-white text-xl font-bold mt-4">SIGKOS PANJER</h1>
          <h2 className="pt-2 font-medium text-white/80">
            Sistem Informasi Pendataan dan Penghuni Kos di Kelurahan Panjer
            Berbasis SIG
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Projects;
