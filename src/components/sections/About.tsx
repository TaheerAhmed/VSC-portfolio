import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../../data/content';
import { GithubGraph } from '../githubContributions';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const codeBlock = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function About() {
  const recentProjects = projects.slice(0, 10);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8 text-gray-900 dark:text-white"
    >
      <motion.div variants={item} className="prose dark:prose-invert max-w-none">
        <motion.h1 
          className="text-3xl font-bold mb-6"
          variants={item}
        >
          Hello, World! 👋
        </motion.h1>
        <motion.p 
          className="mb-4"
          variants={item}
        >
          I'm a passionate software developer with a keen eye for creating elegant solutions
          to complex problems. Welcome to my VS Code-inspired portfolio!
        </motion.p>
        <motion.div 
          variants={codeBlock}
          className="bg-white dark:bg-[#2c2c3c] p-4 rounded-md border border-gray-200 dark:border-[#3c3c3c]"
        >
          <code className="text-pink-600 dark:text-[#ce9178]">const developer = {`{`}</code>
          <code className="block pl-4 text-blue-600 dark:text-[#9cdcfe]">name: "Your Name",</code>
          <code className="block pl-4 text-blue-600 dark:text-[#9cdcfe]">role: "Full Stack Developer",</code>
          <code className="block pl-4 text-blue-600 dark:text-[#9cdcfe]">location: "Earth",</code>
          <code className="text-pink-600 dark:text-[#ce9178]">{`}`};</code>
        </motion.div>
      </motion.div>

      <motion.div variants={item}>
        {/* <div className="flex items-center gap-2 mb-4">
          <Github className="w-5 h-5" />
          <h2 className="text-xl font-semibold dark:text-[#d4d4d4]">GitHub Activity</h2>
        </div> */}
        {/* <GithubGraph
            username="levelsio"
            blockMargin={2}
            colorPallete={["#ebedf0", "#a3e2a1", "#72d780", "#47b55d", "#2f8a3e"]}
          /> */}
      </motion.div>

      <motion.div variants={item}>
        <h2 className="text-xl font-semibold mb-4">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recentProjects.map((project) => (
            <motion.div 
              key={project.id}
              variants={item}
              className="bg-white dark:bg-[#2c2c3c] p-4 rounded-md border border-gray-200 dark:border-[#3c3c3c]"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-[#9cdcfe]">
                  {project.title}
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              <p className="mb-3 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-gray-100 dark:bg-[#3c3c3c] rounded-md text-gray-700 dark:text-[#9cdcfe]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}