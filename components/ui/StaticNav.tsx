"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const menus = ["about", "projects", "contact"]
// Reuse the same props as your FloatingNav
export const StaticNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [activeSection, setActiveSection] = useState(null);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    };

    const observer = new IntersectionObserver((entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    menus.forEach((menu: string) => {
         const element = document.getElementById(menu);
         if (element) observer.observe(element);
    });

    return() => observer.disconnect();
  }, [menus]);
  
  return (
    <nav className="flex flex-col gap-5 px-5 lg:px-0">
      {navItems.map((navItem, idx) => (
        <Link
          key={idx}
          href={navItem.link}
          // Inline-block so the text can smoothly translate
          className={cn(
            "inline-block text-base text-muted-foreground transform transition-all duration-100",
            // on hover
            "hover:translate-x-2 hover:font-bold hover:text-primary",
            // on active  
            `${activeSection == navItem.name.toLowerCase() ? "font-bold text-purple translate-x-2" : ""}`      
          )}
        >
          {navItem.name}
        </Link>
      ))}
    </nav>
  );
};

export default StaticNav;
