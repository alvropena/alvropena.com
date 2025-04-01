"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, Moon, Sun } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  return (
    <header className="w-full max-w-3xl mx-auto">
      <div className="flex justify-between items-center py-4">
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
                salaì
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
              <Link
                href="/contact"
                className="text-lg hover:underline hover:underline-offset-4"
              >
                contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        
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
    </header>
  );
};

export default Header; 