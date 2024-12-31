import React from 'react';
import { projects } from '../../data/content';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <div className="text-[#333333] dark:text-vscode-text">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-white dark:bg-[#1e1e1e] p-6 rounded-md border border-[#e7e7e7] dark:border-vscode-border hover:border-[#007acc] dark:hover:border-vscode-blue transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-[#0366d6] dark:text-[#007acc]">
                {project.title}
              </h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6a737d] dark:text-[#858585] hover:text-[#0366d6] dark:hover:text-vscode-blue transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
            <p className="text-[#333333] dark:text-vscode-text mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-sm rounded-md bg-[#f1f8ff] dark:bg-[#252526] text-[#0366d6] dark:text-[#007acc] border border-[#e7e7e7] dark:border-vscode-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
