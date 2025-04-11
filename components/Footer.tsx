import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* <p className="text-start text-purple md:mt-10 my-5">Contact Me</p> */}
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Interested in working <span className="text-purple">together</span>?
        </h1>
        <p className="text-white-200 my-5 text-center">
          Feel free to reach out—whether you have a project in mind or just want
          to connect!
        </p>
        <a href="mailto:dophuonglinh0312@gmail.com">
          <MagicButton
            title="Email me"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Linh Do
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img
                src={info.img}
                alt="icons"
                width={20}
                height={20}
                className="transition-all duration-200 ease-in-out [filter:brightness(0)_saturate(100%)_invert(0.5)] group-hover:[filter:brightness(0)_saturate(100%)_invert(1)]"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
