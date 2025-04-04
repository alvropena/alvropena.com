import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, placeholder, ...props }, ref) => {
    // Convert placeholder to lowercase if it exists
    const lowercasePlaceholder = placeholder?.toLowerCase();
    
    // Handle input changes to force lowercase
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const lowercaseValue = e.target.value.toLowerCase();
      
      // Update the input value to be lowercase
      e.target.value = lowercaseValue;
      
      // If onChange was provided, call it with the modified event
      if (props.onChange) {
        props.onChange(e);
      }
    };

    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm lowercase",
          className
        )}
        ref={ref}
        placeholder={lowercasePlaceholder}
        onChange={handleChange}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
