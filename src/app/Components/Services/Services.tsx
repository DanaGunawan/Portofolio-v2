"use client"

import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-white text-2xl sm:text-4xl md:text-5xl font-bold">
        Colleborate with brand <br /> and agencies to create <br /> impactful results
      </h1>

      <div
        className="
          w-[90%] sm:w-[70%] mx-auto 
          grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 
          justify-items-center md:justify-items-start
        "
      >
        <ServiceCard
          icon="/images/s1.png"
          name="UI and UX"
          description="Designing interfaces that are intuitive, efficient, and enjoyable to use."
        />
        <ServiceCard
          icon="/images/s2.png"
          name="Web App"
          description="Designing interfaces that are intuitive, efficient, and enjoyable to use."
        />
        <ServiceCard
          icon="/images/s3.png"
          name="Design & Creative"
          description="Designing interfaces that are intuitive, efficient, and enjoyable to use."
        />
        <ServiceCard
          icon="/images/s4.png"
          name="Development"
          description="Designing interfaces that are intuitive, efficient, and enjoyable to use."
        />
      </div>
    </div>
  );
};

export default Services;
