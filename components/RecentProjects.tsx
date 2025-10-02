"use client";

import { FaArrowRight, FaArrowUpRightDots, FaArrowUpRightFromSquare, FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div id="projects" className="pt-10">
      {/* <h1 className="heading text-purple">My Projects</h1> */}
      <p className="text-start text-lg text-purple font-semibold">My Projects</p>
      <div className="flex flex-wrap items-center justify-center lg:justify-start md:justify-start gap-16">
        {projects.map((item) => (
          <div
            className="group h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[24vh] mb-5">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-semibold text-lg line-clamp-1 transition text-primary group-hover:text-purple">
                {item.title}
              </h1>

              <p
                className="font-light text-sm line-clamp-2 text-muted-foreground"
                style={{
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-foreground/[.2] rounded-full bg-icon lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center z-10"
                  >
                    {/* <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Behance
                    </p> */}
                    <FaArrowUpRightFromSquare
                      className="m-3 size-4 text-primary group-hover:text-purple transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
