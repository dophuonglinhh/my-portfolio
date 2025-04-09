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

const Home = () => {
  return (
    <main className="relative bg-black-100 w-full overflow-hidden scroll-smooth">
      <div className="mx-auto sm:px-10 px-5 sm:max-w-7xl lg:max-w-none lg:px-0">
        <FloatingNav navItems={navItems} />
        <div className="flex flex-col lg:flex-row w-full h-auto lg:h-screen">
          {/* Left Column: Name component */}
          <div className="lg:w-1/3">
            <div className="sticky top-0 h-auto lg:h-screen">
              <Name />
            </div>
          </div>
          {/* Right Column: About, RecentProjects, and Footer */}
          <div className="lg:w-2/3 lg:overflow-y-auto lg:px-5">
            <About />
            <RecentProjects />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
