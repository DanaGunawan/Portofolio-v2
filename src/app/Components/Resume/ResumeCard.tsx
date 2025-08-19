import React from "react";
import { IconType } from "react-icons";

type ResumeTypes = {
  Icon: IconType;
  role: string;
  date?: string;
  description: string;
};

const ResumeCard = ({ Icon, role, date, description }: ResumeTypes) => {
  return (
    <div className="mb-6">
      <div className="flex items-start space-x-6 bg-blue-950/20 transition-all duration-300 p-4 sm:p-8 rounded-md">
        <div className="sm:w-14 sm:h-14 w-10 h-10 bg-blue-950/20 rounded-full flex items-center justify-center flex-col">
          <Icon className="w-6 h-6 text-cyan-200" />
        </div>
        <div className="flex-1">
            <h1 className="mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-full bg-gray-200 text-gray-600 2-fit sm:text-lg text-sm font-bold text-center">
                {date}
            </h1>
            <h1 className="text-xl font-semibold sm:text-2xl text-gray-300">{role}</h1>
            <p className="text-gray-200 sm:text-base text-sm pt-3">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
