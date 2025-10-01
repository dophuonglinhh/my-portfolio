import React from "react";

const techStack = [
  { name: "React", icon: "/re.svg", link: "https://react.dev" },
  { name: "Next.js", icon: "/next.svg", link: "https://nextjs.org" },
  {
    name: "TypeScript",
    icon: "/ts.svg",
    link: "https://www.typescriptlang.org",
  },
  { name: "Tailwind CSS", icon: "/tail.svg", link: "https://tailwindcss.com" },
];

const Footer = () => {
  return (
    <div className="w-full py-10">
      {/* Divider */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent mb-8" />

      {/* Tech Stack Section */}
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm text-muted-foreground mb-4 tracking-wider uppercase">
          Built with
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-6">
          {techStack.map((tech) => (
            <a
              key={tech.name}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-3 py-2 rounded-lg backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-icon border border-white/[0.1] hover:border-white/[0.3] transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                width={20}
                height={20}
                className="transition-all duration-200"
              />
              <span className="text-xs md:text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
