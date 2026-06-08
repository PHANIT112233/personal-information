import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useInView } from '../hooks/useInView';

export default function Skills() {
  const { isDark } = useTheme();
  const [ref, isInView] = useInView();
  const [skills, setSkills] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetch('/api/public/skills')
      .then(r => r.json())
      .then(setSkills)
      .catch(console.error);
  }, []);

  const categories = ['All', ...new Set(skills.map(s => s.category))];
  const filtered = selectedCategory === 'All' ? skills : skills.filter(s => s.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="skills" className={`py-20 px-4 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Skills & Expertise
          </h2>
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            Tools and technologies I specialize in
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center gap-3 mb-12 flex-wrap"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === cat
                  ? isDark
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-500 text-white'
                  : isDark
                  ? 'bg-slate-800 text-gray-300 hover:text-white'
                  : 'bg-gray-200 text-gray-700 hover:text-black'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {filtered.map((skill) => (
            <motion.div
              key={skill.id}
              className={`p-6 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-gray-50'}`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-3">{skill.icon || '💻'}</div>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {skill.name}
              </h3>
              <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {skill.category}
              </p>
              <div className={`w-full rounded-full h-2 ${isDark ? 'bg-slate-700' : 'bg-gray-300'}`}>
                <motion.div
                  className={`h-full rounded-full ${isDark ? 'bg-blue-500' : 'bg-blue-400'}`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
              <p className={`text-right text-sm mt-2 font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                {skill.level}%
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
