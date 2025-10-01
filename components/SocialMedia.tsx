import { socialMedia } from "@/data";
import React from "react";

const SocialMedia = () => {
  return (
    <div className="flex items-center md:gap-3 gap-6 mt-6 md:mt-0">
      {socialMedia.map((info) => (
        <a
          key={info.id}
          href={info.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-icon rounded-lg border border-white/[0.1] hover:border-white/[0.3] transition-all duration-300 hover:scale-105"
        >
          <img
            src={info.img}
            alt="icons"
            width={20}
            height={20}
            className="transition-all duration-200"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
