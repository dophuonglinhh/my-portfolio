import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import SocialMedia from "./SocialMedia";

const Contact = () => {
  return (
    <div className="w-full pt-20" id="contact">
      {/* <p className="text-start text-purple md:mt-10 my-5">Contact Me</p> */}
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Interested in working <span className="text-purple">together</span>?
        </h1>
        <p className="text-muted-foreground my-5 text-center">
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

        {/* Social Media - shown on mobile */}
        <div className="lg:hidden">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Contact;
