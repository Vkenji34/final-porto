"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button variant="theme" size="icon" onClick={toggleTheme}>
      {theme === "light" ? (
        <SunIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : theme === "dark" ? (
        <MoonIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : null}
    </Button>
  );
}
