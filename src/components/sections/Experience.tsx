import { experiences } from '../../data/content';

export default function Experience() {
  return (
    <div className="text-[#333333] dark:text-vscode-text">
      <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div 
            key={exp.id} 
            className="bg-white dark:bg-[#1e1e1e] p-6 rounded-md border border-[#e7e7e7] dark:border-vscode-border hover:border-[#007acc] dark:hover:border-vscode-blue transition-colors"
          >
            <h3 className="text-xl font-semibold text-[#0366d6] dark:text-[#007acc]">{exp.position}</h3>
            <div className="text-[#333333] dark:text-[#ce9178] mb-2">{exp.company}</div>
            <div className="text-[#6a737d] dark:text-[#858585] text-sm mb-4">{exp.period}</div>
            <ul className="list-disc list-inside space-y-2 ml-2">
              {exp.description.map((desc, index) => (
                <li key={index} className="text-[#333333] dark:text-vscode-text">{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}