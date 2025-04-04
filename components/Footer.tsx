"use client";

import React from 'react';

const Footer = () => {
  const openExcellenceWebsite = () => {
    window.open('https://excellence.lat', '_blank');
  };

  return (
    <footer className="text-xs text-gray-500 w-full max-w-3xl mx-auto py-4">
      <div className="flex justify-center items-center border-t border-input pt-4">
        <div className="text-xs">
          © {new Date().getFullYear()}{" "}
          <span 
            className="underline cursor-pointer hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            onClick={openExcellenceWebsite}
          >
            excellence.lat
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 