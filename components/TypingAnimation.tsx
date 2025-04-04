"use client";

import { useState, useEffect } from "react";

interface TypingAnimationProps {
  text: string;
  delay?: number;
  className?: string;
  completionDelay?: number;
}

export default function TypingAnimation({ 
  text, 
  delay = 40, 
  className = "",
  completionDelay = 800
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
      // Add a delay before marking the animation as complete
      // so the cursor remains visible for a moment after typing finishes
      const completionTimeout = setTimeout(() => {
        setIsComplete(true);
      }, completionDelay);
      
      return () => clearTimeout(completionTimeout);
    }
  }, [text, currentIndex, delay, completionDelay]);

  return (
    <div className={className}>
      {displayedText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </div>
  );
} 