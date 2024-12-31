import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Files, Briefcase, Code2, User, Settings } from 'lucide-react';
import { cn } from '../../utils/cn';
import { SidebarContext } from '../../App';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: Files },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const { isExpanded, setIsExpanded } = useContext(SidebarContext);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <aside 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "fixed top-7 left-0 h-[calc(100vh-7px)] bg-[#f3f3f3] dark:bg-[#252526] border-r border-[#e7e7e7] dark:border-[#333333] transition-all duration-200 z-40",
        isExpanded ? 'w-60' : 'w-16'
      )}
    >
      <nav className="h-full py-4">
        <div className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "w-full flex items-center px-4 py-2 transition-colors relative group",
                activeSection === item.id
                  ? 'bg-[#e4e6f1] dark:bg-[#37373d] text-[#333333] dark:text-white'
                  : 'text-[#333333] dark:text-[#cccccc] hover:bg-[#e8e8e8] dark:hover:bg-[#2a2d2e]'
              )}
            >
              <div className={cn(
                "absolute left-0 w-0.5 h-full bg-[#007acc] transition-opacity",
                activeSection === item.id ? 'opacity-100' : 'opacity-0'
              )} />
              
              <span className="flex items-center">
                {React.createElement(item.icon, { 
                  size: 20,
                  strokeWidth: 1.5,
                  className: cn(
                    "transition-colors",
                    activeSection === item.id 
                      ? "text-[#007acc]" 
                      : "text-[#424242] dark:text-[#858585] group-hover:text-[#007acc]"
                  )
                })}
              </span>

              <AnimatePresence>
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.15 }}
                    className="ml-3 text-sm whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          ))}
        </div>
      </nav>
    </aside>
  );
}