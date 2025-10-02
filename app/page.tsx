"use client";

import { navItems } from "@/data";

import Grid from "@/components/Grid";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import About from "@/components/About";
import Name from "@/components/Name";
import StaticNav from "@/components/ui/StaticNav";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import { useTheme } from "next-themes";
import Contact from "@/components/Contact";
import Footer from "@/components/ui/Footer";
import SocialMedia from "@/components/SocialMedia";
import Education from "@/components/Education";
import CursorGlow from "@/components/ui/CursorGlow";

const Home = () => {
  const { resolvedTheme } = useTheme();

  return (
    <main className="relative bg-background w-full overflow-hidden scroll-smooth">
      {/* Cursor Glow Effect */}
      <CursorGlow />

      {/* Theme Switcher - Fixed on mobile, inline on desktop */}
      <div className="lg:hidden fixed top-5 right-5 z-[100]">
        <ThemeSwitcher currentTheme={resolvedTheme || "dark"} />
      </div>

      <div className="mx-auto sm:px-10 px-5 sm:max-w-7xl lg:max-w-none lg:px-0">
        <div className="lg:hidden">
          <FloatingNav navItems={navItems} />
        </div>
        <div className="flex flex-col lg:flex-row w-full h-auto lg:h-screen">
          {/* Left Column: Name component */}
          <div className="lg:w-2/5 flex flex-col items-center justify-between">
            <div className="sticky top-0 h-auto lg:h-screen flex flex-col justify-between">
              <div>
                <Name />
                <div className="hidden lg:block mt-16">
                  <StaticNav navItems={navItems} />
                </div>
              </div>
              {/* Desktop only: Theme switcher and social media */}
              <div className="hidden lg:flex py-10 justify-between items-center">
                <ThemeSwitcher currentTheme={resolvedTheme || "dark"} />
                <SocialMedia />
              </div>
            </div>
          </div>
          {/* Right Column: About, RecentProjects, and Footer */}
          <div className="lg:w-3/5 lg:overflow-y-auto lg:px-5">
            <section id="about">
              <About />
            </section>
            <section id="education">
              <Education />
            </section>
            <section id="projects">
              <RecentProjects />
            </section>
            <section id="contact">
              <Contact />
            </section>
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
