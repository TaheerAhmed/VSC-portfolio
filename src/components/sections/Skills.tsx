import React from 'react';
import { skills } from '../../data/content';
import { Code2, Laptop, Nut, Server,  } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  experience: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: skills.languages.map(lang => ({
      name: lang,
      level: Math.floor(Math.random() * 40) + 60, // Random level between 60-100
      experience: ['3+ years', '5+ years', '2+ years'][Math.floor(Math.random() * 3)]
    }))
  },
  {
    title: "Frontend",
    icon: <Laptop className="w-5 h-5" />,
    skills: skills.frontend.map(tech => ({
      name: tech,
      level: Math.floor(Math.random() * 40) + 60,
      experience: ['3+ years', '4+ years', '2+ years'][Math.floor(Math.random() * 3)]
    }))
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5" />,
    skills: skills.backend.map(tech => ({
      name: tech,
      level: Math.floor(Math.random() * 40) + 60,
      experience: ['2+ years', '3+ years', '4+ years'][Math.floor(Math.random() * 3)]
    }))
  },
  {
    title: "Tools & Services",
    icon: <Nut className="w-5 h-5" />,
    skills: skills.tools.map(tool => ({
      name: tool,
      level: Math.floor(Math.random() * 40) + 60,
      experience: ['2+ years', '3+ years', '1+ year'][Math.floor(Math.random() * 3)]
    }))
  }
];

export default function Skills() {
  return (
    <div className="text-[#333333] dark:text-vscode-text">
      <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
      <div className="grid grid-cols-1 gap-6">
        {skillsData.map((category, idx) => (
          <SkillCategoryCard key={idx} {...category} />
        ))}
      </div>
    </div>
  );
}

function SkillCategoryCard({ title, icon, skills }: SkillCategory) {
  return (
    <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-md border border-[#e7e7e7] dark:border-vscode-border hover:border-[#007acc] dark:hover:border-vscode-blue transition-colors">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-[#0366d6] dark:text-[#007acc]">
          {icon}
        </span>
        <h3 className="text-xl font-semibold text-[#0366d6] dark:text-[#007acc]">{title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="relative group"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-[#6a737d] dark:text-[#858585]">{skill.experience}</span>
            </div>
            
            {/* Progress bar background */}
            <div className="h-2 bg-[#f1f8ff] dark:bg-[#252526] rounded-full overflow-hidden">
              {/* Progress bar fill */}
              <div 
                className="h-full bg-[#0366d6] dark:bg-[#007acc] rounded-full transition-all duration-500 ease-out"
                style={{ width: `${skill.level}%` }}
              />
            </div>

            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-[#0366d6] dark:bg-[#007acc] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Proficiency: {skill.level}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
