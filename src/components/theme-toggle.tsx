"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  function handleThemeToggle() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <Button
      variant="ghost"
      className="group cursor-pointer rounded-full  px-2 duration-200 ease-out "
      onClick={handleThemeToggle}
    >
      {theme === "dark" ? (
        <Sun size={24} />
      ) : (
        <Moon size={24} className="text-white hover:text-black" />
      )}
    </Button>
  );
}
