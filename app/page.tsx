"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SendIcon } from "lucide-react";
import TypingAnimation from "@/components/TypingAnimation";
import StaticQuestions from "@/components/StaticQuestions";
import { useState, useRef, useEffect } from "react";

interface Message {
  text: string;
  isUser: boolean;
  hasLinks?: boolean;
  isNew?: boolean; // Track if message is new and should have animation
}

// Predefined questions and responses
const PREDEFINED_QUESTIONS = [
  "who is alvaro?",
  "what is alvaro working on?",
  "how can i contact alvaro?",
  "what is alvaro reading?"
];

const getResponseForQuestion = (question: string): { text: string, hasLinks: boolean } => {
  // Normalize the question for easier matching
  const normalizedQuestion = question.toLowerCase().trim();

  // Check against our predefined questions first
  if (normalizedQuestion.includes("who is alvaro") || normalizedQuestion.includes("about alvaro")) {
    return {
      text: "alvaro peña is a economist, self-taught software engineer and designer.",
      hasLinks: false
    };
  } 
  
  if (normalizedQuestion.includes("working on") || normalizedQuestion.includes("current project")) {
    return {
      text: "currently, alvaro is working on automating his digital life to the fullest extent possible with ai.",
      hasLinks: false
    };
  }
  
  if (normalizedQuestion.includes("contact") || normalizedQuestion.includes("email") || normalizedQuestion.includes("reach")) {
    return {
      text: "you can contact alvaro through the contact form <a href=\"https://alvropena.com/contact\" class=\"text-blue-500 underline hover:text-blue-700\">here</a>. he rarely responds on social media.",
      hasLinks: true
    };
  }
  
  if (normalizedQuestion.includes("reading") || normalizedQuestion.includes("book")) {
    return {
      text: "alvaro is currently reading 'the physics of superheroes' by james kakalios.",
      hasLinks: false
    };
  }

  // Default response for other questions
  return {
    text: `i'll pass your question to alvaro. in the meantime, feel free to ask me about what alvaro is working on, how to contact him, or what he's reading.`,
    hasLinks: false
  };
};

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "hello, i'm salaì, alvaro's personal ai assistant. i'm here to help you answer question you may have.",
      isUser: false,
      hasLinks: false,
      isNew: true
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Effect to clear the isNew flag after animation completes
  useEffect(() => {
    const newMessages = messages.filter(m => m.isNew);
    
    if (newMessages.length > 0) {
      // After 3 seconds (enough time for typing animation to finish)
      const timeout = setTimeout(() => {
        setMessages(messages.map(message => ({
          ...message,
          isNew: false
        })));
      }, 3000);
      
      return () => clearTimeout(timeout);
    }
  }, [messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Force the input value to lowercase
    setInputValue(e.target.value.toLowerCase());
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;
    
    // Add user message
    const userMessage = inputValue;
    setMessages([...messages, { text: userMessage, isUser: true, hasLinks: false }]);
    
    // Clear input
    setInputValue("");
    
    // Get the appropriate response
    const response = getResponseForQuestion(userMessage);
    
    // Add the AI response after a delay
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: response.text, 
        isUser: false, 
        hasLinks: response.hasLinks,
        isNew: true  // Mark as new for animation
      }]);
    }, 1000);
  };

  const handleSelectQuestion = (question: string) => {
    // Add the selected question as a user message
    setMessages([...messages, { text: question, isUser: true, hasLinks: false }]);
    
    // Get the predefined response
    const response = getResponseForQuestion(question);
    
    // Add the response as an AI message after a short delay
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: response.text, 
        isUser: false, 
        hasLinks: response.hasLinks,
        isNew: true  // Mark as new for animation
      }]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // Scroll to bottom whenever messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <main className="flex flex-col h-full w-full">
      {/* Chat interface container with fixed height */}
      <div className="w-full border border-input rounded-lg mb-4 dark:border-input flex flex-col h-[calc(100vh-260px)] mt-4">
        {/* Chat messages with scrolling */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="flex flex-col gap-3">
            {messages.map((message, index) => (
              <div key={index} className={`flex flex-col gap-1 ${message.isUser ? 'items-end' : 'items-start'}`}>
                <div className={`p-3 rounded-lg ${
                  message.isUser 
                    ? 'bg-blue-500 text-white rounded-br-none self-end' 
                    : 'bg-gray-100 dark:bg-gray-800 rounded-bl-none self-start'
                } max-w-[80%]`}>
                  {!message.isUser && message.isNew ? (
                    message.hasLinks ? (
                      // For new AI messages with links, use a special version
                      <TypingAnimation 
                        text={message.text.replace(/<[^>]*>/g, 'here')} 
                        className="text-sm"
                        delay={30}
                      />
                    ) : (
                      // For new AI messages without links
                      <TypingAnimation text={message.text} className="text-sm" />
                    )
                  ) : (
                    // For user messages or old AI messages
                    message.hasLinks ? (
                      <p className="text-sm" dangerouslySetInnerHTML={{ __html: message.text }}></p>
                    ) : (
                      <p className="text-sm">{message.text}</p>
                    )
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Static question options */}
      <StaticQuestions 
        questions={PREDEFINED_QUESTIONS} 
        onSelectQuestion={handleSelectQuestion}
      />

      {/* Input area with UI components */}
      <div className="relative w-full">
        <Textarea
          placeholder="ask me anything..."
          className="pr-12 resize-none"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          rows={1}
          style={{ 
            minHeight: "40px",
            maxHeight: "80px",
            overflowY: "auto"
          }}
        />
        <Button
          variant="ghost"           
          size="icon" 
          className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
          aria-label="send message"
          onClick={handleSendMessage}
        >
          <SendIcon className="h-4 w-4" />
        </Button>
      </div>
    </main>
  );
}
