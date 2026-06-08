import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useInView } from '../hooks/useInView';

export default function Experience() {
  const { isDark } = useTheme();
  const [ref, isInView] = useInView();
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch('/api/public/experiences')
      .then(r => r.json())
      .then(setExperiences)
      .catch(console.error);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className={`py-20 px-4 ${isDark ? 'bg-slate-800' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Professional Experience
          </h2>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`flex gap-6 ${index !== experiences.length - 1 ? 'pb-8 border-b' : ''} ${isDark ? 'border-slate-700' : 'border-gray-200'}`}
            >
              {/* Timeline dot */}
              <div className="flex flex-col items-center">
                <motion.div
                  className={`w-4 h-4 rounded-full ${isDark ? 'bg-blue-500' : 'bg-blue-400'}`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />
                {index !== experiences.length - 1 && (
                  <div className={`w-1 h-20 ${isDark ? 'bg-slate-700' : 'bg-gray-300'}`} />
                )}
              </div>

              {/* Content */}
              <div className="pb-8 flex-1">
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {exp.title}
                </h3>
                <p className={`text-lg ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  {exp.company}
                </p>
                <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {exp.period}
                </p>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
