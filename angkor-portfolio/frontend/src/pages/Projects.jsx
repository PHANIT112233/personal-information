import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useInView } from '../hooks/useInView';

export default function Projects() {
  const { isDark } = useTheme();
  const [ref, isInView] = useInView();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/api/public/projects')
      .then(r => r.json())
      .then(data => {
        setProjects(data.map(p => ({
          ...p,
          tags: Array.isArray(p.tags) ? p.tags : JSON.parse(p.tags || '[]')
        })));
      })
      .catch(console.error);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className={`py-20 px-4 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Projects & Portfolio
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`rounded-lg overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-gray-100'}`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Image Placeholder */}
              <div className={`h-48 ${isDark ? 'bg-slate-700' : 'bg-gray-300'} flex items-center justify-center text-5xl`}>
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  '📁'
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2 py-1 rounded ${
                        isDark
                          ? 'bg-blue-600/30 text-blue-300'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block px-4 py-2 rounded font-semibold transition-all ${
                      isDark
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    View Project →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
