import { useState, createContext, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar/index';
import Editor from './components/Editor';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';

export const SidebarContext = createContext<{
  isExpanded: boolean;
  setIsExpanded: (value: boolean) => void;
}>({ isExpanded: false, setIsExpanded: () => {} });

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      default:
        return <About />;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-white dark:bg-[#1e1e1e] overflow-hidden">
      {/* VS Code style title bar */}
      <div className="h-7 bg-[#323233] dark:bg-[#323233] text-white flex items-center justify-between px-2 select-none flex-shrink-0">
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex items-center space-x-1">
            <span className="opacity-60">Visual Studio Code - </span>
            <span>Your Name - Portfolio</span>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-xs opacity-60">
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Go</span>
          <span>Run</span>
          <span>Terminal</span>
          <span>Help</span>
        </div>
      </div>

      <SidebarContext.Provider value={{ isExpanded, setIsExpanded }}>
        <div className="flex-1 flex relative overflow-hidden">
          <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
          
          <main className={`flex-1 overflow-hidden transition-all duration-200 ${isExpanded ? 'ml-60' : 'ml-16'}`}>
            <div className="h-full overflow-auto">
              <Editor activeSection={activeSection}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {renderContent()}
                  </motion.div>
                </AnimatePresence>
              </Editor>
            </div>
          </main>
        </div>

        {/* VS Code style footer */}
        <footer className="h-6 bg-[#007acc] dark:bg-[#007acc] text-white flex items-center justify-between px-4 text-xs flex-shrink-0 relative z-50">
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="hover:bg-white/10 px-2 py-0.5 rounded transition-colors"
            >
              {isDark ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <span>Ln 1, Col 1</span>
            <span>UTF-8</span>
          </div>
        </footer>
      </SidebarContext.Provider>
    </div>
  );
}