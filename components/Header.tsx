"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, Moon, Sun, Coffee } from 'lucide-react';
import { usePathname } from 'next/navigation';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  // Get the current page title from the pathname
  const getPageTitle = () => {
    if (pathname === '/') return 'home';
    // Remove the leading slash and capitalize the first letter
    const path = pathname.substring(1);
    return path.charAt(0) + path.slice(1);
  };

  // Check if dark mode is enabled on mount
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const openBuyMeACoffee = () => {
    window.open('https://www.buymeacoffee.com/alvropena', '_blank');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="w-full max-w-3xl mx-auto">
        <div className="flex justify-between items-center py-4 px-4 border-b border-input">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-0 text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-gray-100">
                <Menu className="h-4 w-4" />
              </button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-6 mt-12">
                <Link
                  href="/"
                  className="text-lg hover:underline hover:underline-offset-4"
                >
                  home
                </Link>
                <Link
                  href="https://alvropena.beehiiv.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:underline hover:underline-offset-4"
                >
                  blog
                </Link>
                <Link
                  href="/projects"
                  className="text-lg hover:underline hover:underline-offset-4"
                >
                  projects
                </Link>
                <SheetClose asChild>
                  <button
                    onClick={openBuyMeACoffee}
                    className="text-lg text-left hover:underline hover:underline-offset-4 flex items-center gap-2"
                  >
                    <span>contact</span>
                    <Coffee className="h-4 w-4" />
                  </button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 font-medium text-lg">
            {getPageTitle()}
          </div>
          
          <button 
            onClick={toggleDarkMode} 
            className="p-0 text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-gray-100"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 