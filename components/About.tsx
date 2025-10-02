import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const About = () => {
  return (
    <div id="about" className="flex flex-col justify-center pt-10 lg:pt-20 lg:mr-20">
      <p className="text-start text-lg text-purple font-semibold mb-5">About</p>

      <p className="text-start md:tracking-wider mb-4 text-base font-light">
        Hi, I&apos;m a front-end developer passionate about building clean,
        responsive, and accessible user interfaces. I enjoy designing interfaces
        on Figma, learning new front-end frameworks, and building personal
        projects to sharpen my skills.
      </p>
      <p className="text-start md:tracking-wider mb-4 text-base font-light">
        I&apos;m currently a final-year Software Engineering student at 
        <a
          className="font-bold hover:text-purple"
          href="https://www.rmit.edu.vn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          RMIT Vietnam
        </a>
        , where I focus on web development and UI/UX design. My academic journey
        has provided me with hands-on experience working on full-stack
        applications, particularly front-end development in team projects.
      </p>
      <p className="text-start md:tracking-wider mb-4 text-base font-light">
        In my free time, I enjoy playing sports like badminton and pickleball,
        discovering cute cafes around the city, and practicing and learning new
        piano pieces.
      </p>
      <a
        href="/Linh Do CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 w-fit"
      >
        <MagicButton
          title="View CV"
          icon={<FaLocationArrow />}
          position="right"
        />
      </a>
    </div>
  );
};

export default About;
