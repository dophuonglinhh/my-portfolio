"use client";

import { navItems } from "@/data";

import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import About from "@/components/About";
import Name from "@/components/Name";
import StaticNav from "@/components/ui/StaticNav";

const Home = () => {
  return (
    <main className="relative bg-black-100 w-full overflow-hidden scroll-smooth">
      <div className="mx-auto sm:px-10 px-5 sm:max-w-7xl lg:max-w-none lg:px-0">
        <div className="lg:hidden">
          <FloatingNav navItems={navItems} />
        </div>
        <div className="flex flex-col lg:flex-row w-full h-auto lg:h-screen">
          {/* Left Column: Name component */}
          <div className="lg:w-2/5 flex flex-col items-center">
            <div className="sticky top-0 h-auto lg:h-screen ">
              <Name />
              <div className="hidden lg:block mt-4">
                <StaticNav navItems={navItems} />
              </div>
            </div>
          </div>
          {/* Right Column: About, RecentProjects, and Footer */}
          <div className="lg:w-3/5 lg:overflow-y-auto lg:px-5">
            <section id="about">
              <About />
            </section>
            <section id="projects">
              <RecentProjects />
            </section>
            <section id="contact">
              <Footer />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
