"use client";

import { useEffect, useState, useRef } from "react";
import { Badge } from "@/components/ui/badge";

interface AnimatedBadgesProps {
  questions: string[];
  onSelectQuestion: (question: string) => void;
}

export default function AnimatedBadges({
  questions,
  onSelectQuestion,
}: AnimatedBadgesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-full mb-4">
      {/* Desktop scrolling badges */}
      {!isMobile && (
        <div 
          ref={containerRef}
          className="w-full overflow-hidden relative h-8 flex items-center"
        >
          <div 
            ref={contentRef}
            className="animate-scroll flex gap-2 whitespace-nowrap"
          >
            {[...questions, ...questions, ...questions].map((question, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-xs cursor-pointer hover:bg-secondary/60 transition-colors py-1"
                onClick={() => onSelectQuestion(question)}
              >
                {question}
              </Badge>
            ))}
          </div>
        </div>
      )}
      
      {/* Mobile grid layout */}
      {isMobile && (
        <div className="grid grid-cols-2 gap-2 w-full">
          {questions.map((question, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs cursor-pointer hover:bg-secondary/60 transition-colors py-1 text-center"
              onClick={() => onSelectQuestion(question)}
            >
              {question}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
} 