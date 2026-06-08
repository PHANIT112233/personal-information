import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useInView } from '../hooks/useInView';

export default function About() {
  const { isDark } = useTheme();
  const [ref, isInView] = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className={`py-20 px-4 ${isDark ? 'bg-slate-800' : 'bg-gray-50'}`}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div
            variants={itemVariants}
            className={`rounded-lg overflow-hidden h-96 ${isDark ? 'bg-slate-700' : 'bg-gray-200'}`}
          >
            <div className="w-full h-full flex items-center justify-center text-6xl">
              🎓
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              About Me
            </h2>
            <p className={`text-lg mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Passionate and motivated IT Specialist with strong experience in Network Infrastructure, Security Systems, and IT Support. Currently pursuing a Bachelor's degree in Information Technology at SETEC Institute while working as an IT Specialist at BYD Cambodia.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Age', value: '21 Years' },
                { label: 'Experience', value: '2+ Years' },
                { label: 'Education', value: 'SETEC Year 4' },
                { label: 'Position', value: 'IT Specialist' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`p-4 rounded-lg ${isDark ? 'bg-slate-900' : 'bg-white'}`}
                >
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.label}</p>
                  <p className={`text-xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
