"use client";

import { GraduationCap } from "lucide-react";

const education = [
  {
    period: "Oct 2021 — Present",
    title: "Bachelor of Engineering (Software Engineering) (Honours)",
    company: "RMIT University Vietnam",
    description:
      "Over the course of my studies, I have worked on projects spanning full-stack web applications, mobile apps for iOS and Android, and AWS cloud-based solutions. These experiences strengthened my foundations across multiple fields and taught me to apply software engineering principles in real-world, collaborative projects.",
    skills: [
      "Web Development",
      "Mobile App Development",
      "AWS Cloud",
      "UI/UX Design",
      "Team Collaboration",
    ],
  },
];

const Education = () => {
  return (
    <div id="education" className="pt-20 lg:mr-20">
      <p className="text-start text-lg text-purple font-semibold mb-5">
        My Academic Journey
      </p>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden lg:block opacity-50"></div>

        {education.map((exp, index) => (
          <div key={index} className="relative lg:pl-10">
            <div className="absolute left-0 top-8 w-3 h-3 bg-primary rounded-full -translate-x-[5px] hidden lg:block neon-glow"></div>

            <div className="glass rounded-2xl p-6 transition-all duration-300 hover:bg-card cursor-pointer">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-primary">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-1 text-balance">
                    {exp.title}
                  </h3>
                  <p className="text-lg font-semibold text-muted-foreground">
                    {exp.company}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-purple/10 text-purple px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
