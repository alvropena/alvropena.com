"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetFooter
} from "@/components/ui/sheet";
import SocialIcons from "@/components/SocialIcons";

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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col justify-between">
              <div>
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
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M6 2C6 2 5.5 4 8 4C10.5 4 10 2 10 2" strokeLinecap="round"/>
                        <path d="M10 2C10 2 9.5 4 12 4C14.5 4 14 2 14 2" strokeLinecap="round"/>
                        <path d="M4 9H16V19C16 20.1046 15.1046 21 14 21H6C4.89543 21 4 20.1046 4 19V9Z" />
                        <path d="M16 11H18C19.1046 11 20 11.8954 20 13V15C20 16.1046 19.1046 17 18 17H16" />
                      </svg>
                    </button>
                  </SheetClose>
                </nav>
              </div>
              
              {/* Social Icons Footer */}
              <div className="mb-8 mt-auto">
                <p className="text-lg mb-3">connect with me</p>
                <SocialIcons />
              </div>
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06z" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 