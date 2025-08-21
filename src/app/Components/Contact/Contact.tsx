import React from "react";
import { BiEnvelope, BiMap, BiPhoneCall } from "react-icons/bi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pb-16 pt-16">
      <h1 className="text-center text-white text-2xl sm:text-4xl md:text-5xl font-bold mb-10">
        Contact <span className="text-cyan-300">Me</span>{" "}
      </h1>

      {/* Left */}
      <div className="w-[90%] md:w-[80%] lg:w-70% mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl md-text-4xl text-gray-200 font-bold">
            Get in touch with me for Project or works
          </h1>
          <p className="text-gray-400 text-base sm:text-lg mt-4">
            let&apos;s discuss your next project or collaboration. I&apos;m always open to
            new opportunities and ideas.
          </p>
          <div className="mt-7">
            <div className="flex items-center space-x-3 mb-4">
              <BiPhoneCall className="w-9 h-9 text-cyan-300" />
              <p className="text-gray-400 font-semibold text-xl">
                {" "}
                +62 81529097310{" "}
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiEnvelope className="w-9 h-9 text-cyan-300" />
              <p className="text-gray-400 font-semibold text-xl">
                {" "}
                dewakadekdana@gmail.com{" "}
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiMap className="w-9 h-9 text-cyan-300" />
              <p className="text-gray-400 font-semibold text-xl">
                {" "}
                Bali, Indonesia{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3 mt-8">
            <a
              href="https://www.instagram.com/dewakadek36/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-pink-800 transition-all 
            duration-300"
              >
                <FaInstagram className="text-white w-6 h-6"></FaInstagram>
              </div>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <div
                className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all 
            duration-300"
              >
                <FaLinkedin className="text-white w-6 h-6"></FaLinkedin>
              </div>
            </a>
            <a
              href="https://github.com/DanaGunawan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-black transition-all 
            duration-300"
              >
                <FaGithub className="text-white w-6 h-6"></FaGithub>
              </div>
            </a>
          </div>
        </div>
        {/* form */}
        <div className="md:p-10 p-5 bg-[#131332] rounded-lg flex flex-col items-center">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full mb-6 placeholder:text-white/70"
          />
          <input
            type="text"
            placeholder="Gmail"
            className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full mb-6 placeholder:text-white/70"
          />
          <input
            type="text"
            placeholder="Mobile Phone"
            className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full mb-6 placeholder:text-white/70"
          />
          <textarea
            placeholder="Your Message"
            className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full mb-6 h-[10rem] placeholder:text-white/70"
          />
          <button className="bg-blue-950 mt-4 px-12 py-4 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full">
            {" "}
            Send Message{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
