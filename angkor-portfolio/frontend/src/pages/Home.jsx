import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useInView } from '../hooks/useInView';

export default function Home() {
  const { isDark } = useTheme();
  const [ref, isInView] = useInView();
  const [displayText, setDisplayText] = useState('');
  const fullText = 'IT Specialist & Network Infrastructure Expert';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center px-4 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="mb-6">
          <div className={`w-32 h-32 mx-auto rounded-full border-4 ${isDark ? 'border-blue-500 bg-slate-800' : 'border-blue-400 bg-gray-100'} flex items-center justify-center text-5xl`}>
            👨‍💼
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className={`text-5xl md:text-7xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
        >
          Huot Phanit
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className={`text-2xl md:text-4xl font-semibold mb-6 h-12 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}
        >
          {displayText}
          <span className="animate-pulse">|</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className={`text-lg md:text-xl mb-8 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
        >
          SETEC Institute Year 4 Student | Network Infrastructure & Security Expert <br />
          Currently at BYD Cambodia | Building Secure & Scalable IT Solutions
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
          <a href="#contact" className={`px-8 py-3 rounded-lg font-bold transition-all ${isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}>
            Get in Touch
          </a>
          <a href="#projects" className={`px-8 py-3 rounded-lg font-bold border-2 transition-all ${isDark ? 'border-blue-400 text-blue-400 hover:bg-blue-600/10' : 'border-blue-500 text-blue-600 hover:bg-blue-50'}`}>
            View Work
          </a>
          <a href="#" className={`px-8 py-3 rounded-lg font-bold transition-all ${isDark ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-500 hover:bg-green-600 text-white'}`}>
            Download CV
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex gap-6 justify-center text-3xl"
        >
          {['💻', '🔧', '🌐', '🔐'].map((icon, i) => (
            <motion.span key={i} animate={{ y: [0, -10, 0] }} transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}>
              {icon}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
