"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="text-xs text-gray-500 w-full max-w-3xl mx-auto py-4">
      <div className="flex justify-center items-center border-t border-input pt-4">
        <div className="text-xs">© {new Date().getFullYear()} excellence.lat</div>
      </div>
    </footer>
  );
};

export default Footer; 