import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

interface EditorProps {
  children: React.ReactNode;
  activeSection: string;
}

export default function Editor({ children, activeSection }: EditorProps) {
  return (
    <div className="h-full relative bg-white dark:bg-vscode-bg text-[#333333] dark:text-vscode-text">
      {/* Tab bar */}
      <div className="h-9 flex items-center border-b bg-[#f3f3f3] dark:bg-vscode-sidebar border-[#e7e7e7] dark:border-vscode-border">
        <motion.div
          className={cn(
            "px-4 h-full flex items-center relative cursor-pointer",
            "bg-white dark:bg-vscode-bg",
            "text-[#333333] dark:text-vscode-text"
          )}
        >
          <span className="relative z-10">
            {activeSection}.tsx
          </span>
          
          {/* Active tab indicator */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-vscode-blue"
            layoutId="activeTab"
          />
        </motion.div>
      </div>

      {/* Editor content with line numbers */}
      <div className="relative flex">
        {/* Line numbers */}
        <div className="w-[50px] flex-shrink-0 pt-4 bg-[#f3f3f3] dark:bg-vscode-sidebar border-r border-[#e7e7e7] dark:border-vscode-border">
          {Array.from({ length: 30 }, (_, i) => (
            <div 
              key={i + 1} 
              className="text-right pr-2 text-sm leading-6 select-none text-[#858585] dark:text-[#858585]"
            >
              {i + 1}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 p-4 min-h-[calc(100vh-9rem)]">
          {children}
        </div>
      </div>
    </div>
  );
}