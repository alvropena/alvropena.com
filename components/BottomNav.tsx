"use client"

import Link from "next/link";
import { useTheme } from "next-themes";
import {
  HomeIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  SunIcon,
  MoonIcon
} from "@radix-ui/react-icons";

export function BottomNav() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed left-1/2 -translate-x-1/2 bottom-6 z-50 rounded-2xl shadow-lg bg-background/90 backdrop-blur-md border flex items-center justify-center px-2 py-2 gap-2 md:gap-4 w-[90vw] max-w-md">
      {/* Group 1: Home */}
      <div className="flex items-center">
        <Link href="/" className="p-2 hover:text-primary transition-colors">
          <HomeIcon className="w-6 h-6" />
        </Link>
      </div>
      {/* Divider 1 */}
      <div className="h-8 w-px bg-border mx-2" />
      {/* Group 2: Socials */}
      <div className="flex items-center gap-2 md:gap-4">
        <Link 
          href="https://github.com/alvropena" 
          target="_blank"
          className="p-2 hover:text-primary transition-colors"
        >
          <GitHubLogoIcon className="w-6 h-6" />
        </Link>
        <Link 
          href="https://x.com/alvropena" 
          target="_blank"
          className="p-2 hover:text-primary transition-colors"
        >
          <TwitterLogoIcon className="w-6 h-6" />
        </Link>
        <Link 
          href="https://linkedin.com/in/alvropena" 
          target="_blank"
          className="p-2 hover:text-primary transition-colors"
        >
          <LinkedInLogoIcon className="w-6 h-6" />
        </Link>
      </div>
      {/* Divider 2 */}
      <div className="h-8 w-px bg-border mx-2" />
      {/* Group 3: Theme toggle */}
      <div className="flex items-center">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 hover:text-primary transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <SunIcon className="w-6 h-6" />
          ) : (
            <MoonIcon className="w-6 h-6" />
          )}
        </button>
      </div>
    </nav>
  );
} 