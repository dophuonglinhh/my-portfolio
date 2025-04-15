"use client";
import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface ThemeSwitcherProps {
  currentTheme: string; // "dark" or "light"
}

export default function ThemeSwitcher({ currentTheme }: ThemeSwitcherProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  
  const { setTheme } = useTheme();

  const isDarkMode = currentTheme === "dark";

  const handleThemeChange = (newEnabled: boolean) => {
    setTheme(newEnabled ? "dark" : "light");
  };

  return (
    <Switch
      checked={isDarkMode}
      onChange={handleThemeChange}
      className={classNames(
        isDarkMode ? "bg-purple" : "bg-blue-300",
        "relative inline-flex items-center h-9 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out"
      )}
    >
      <span className="sr-only">Toggle Theme</span>
      <span
        className={classNames(
          isDarkMode ? "translate-x-1" : "translate-x-6",
          "pointer-events-none relative inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
        )}
      >
        <span
          className={classNames(
            isDarkMode
              ? "opacity-100 duration-200 ease-in"
              : "opacity-0 duration-100 ease-out",
            "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
          )}
          aria-hidden="true"
        >
          <MoonIcon className="h-4 w-4 text-background" />
        </span>
        <span
          className={classNames(
            isDarkMode
              ? "opacity-0 duration-100 ease-out"
              : "opacity-100 duration-200 ease-in",
            "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
          )}
          aria-hidden="true"
        >
          <SunIcon className="h-5 w-5 text-yellow-400" />
        </span>
      </span>
    </Switch>
  );
}
