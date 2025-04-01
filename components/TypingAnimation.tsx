"use client";

import { useState, useEffect } from "react";

interface TypingAnimationProps {
  text: string;
  delay?: number;
  className?: string;
}

export default function TypingAnimation({ 
  text, 
  delay = 40, 
  className = ""
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [text, currentIndex, delay]);

  return (
    <div className={className}>
      {displayedText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </div>
  );
} 