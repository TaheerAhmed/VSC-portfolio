import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick: () => void;
  isExpanded: boolean;
}

export default function SidebarItem({
  icon: Icon,
  label,
  isActive,
  onClick,
  isExpanded
}: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative flex items-center w-full",
        "rounded-lg px-3 py-2",
        "transition-all duration-200 ease-in-out",
        "hover:bg-gray-100 dark:hover:bg-[#37373d]",
        isActive && "bg-gray-100 dark:bg-[#37373d]"
      )}
    >
      <Icon 
        className={cn(
          "min-w-[24px] w-6 h-6",
          "transition-colors duration-200",
          isActive 
            ? "text-gray-900 dark:text-white" 
            : "text-gray-500 dark:text-[#858585]",
          "group-hover:text-gray-900 dark:group-hover:text-white"
        )} 
      />
      
      <span
        className={cn(
          "ml-3 text-sm whitespace-nowrap",
          "transition-all duration-200",
          isActive 
            ? "text-gray-900 dark:text-white" 
            : "text-gray-500 dark:text-[#858585]",
          isExpanded 
            ? "opacity-100 translate-x-0" 
            : "opacity-0 -translate-x-10 absolute"
        )}
      >
        {label}
      </span>
    </button>
  );
}