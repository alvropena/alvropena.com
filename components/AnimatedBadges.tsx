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
  const [position, setPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  // Calculate widths on mount
  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setContentWidth(contentRef.current.scrollWidth / 3); // Divide by 3 because we're tripling the content
    }
  }, []);

  useEffect(() => {
    // Only start animation if we have valid measurements
    if (contentWidth === 0 || containerWidth === 0) return;

    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        // Reset position when it gets past the first set of questions
        if (prevPosition <= -contentWidth) {
          return 0;
        }
        return prevPosition - 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [contentWidth, containerWidth]);

  return (
    <div 
      ref={containerRef}
      className="w-full mb-2 overflow-hidden relative h-8 flex items-center"
    >
      <div 
        ref={contentRef}
        className="flex gap-2 whitespace-nowrap absolute transition-transform"
        style={{ transform: `translateX(${position}px)` }}
      >
        {/* Duplicate questions to create infinite scroll effect */}
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
  );
} 