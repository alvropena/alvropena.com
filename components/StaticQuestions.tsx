"use client";

import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

interface StaticQuestionsProps {
  questions: string[];
  onSelectQuestion: (question: string) => void;
}

export default function StaticQuestions({
  questions,
  onSelectQuestion,
}: StaticQuestionsProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleQuestionClick = (question: string) => {
    onSelectQuestion(question);
    setIsVisible(false);
  };

  // If questions change, reset visibility
  useEffect(() => {
    setIsVisible(true);
  }, [questions]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 mb-3 w-full">
      {questions.map((question, index) => (
        <Badge 
          key={index} 
          variant="secondary" 
          className="text-xs cursor-pointer hover:bg-secondary/60 transition-colors py-1 font-normal"
          onClick={() => handleQuestionClick(question)}
        >
          {question}
        </Badge>
      ))}
    </div>
  );
} 