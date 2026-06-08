import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const { isDark, token, logout } = useTheme();
  const navigate = useNavigate();
  const [stats, setStats] = useState({ skills: 0, experiences: 0, projects: 0, features: 0 });

  useEffect(() => {
    if (!token) navigate('/admin/login');
    
    Promise.all([
      fetch('/api/skills', { headers: { Authorization: `Bearer ${token}` } }).then(r => r.json()),
      fetch('/api/experiences', { headers: { Authorization: `Bearer ${token}` } }).then(r => r.json()),
      fetch('/api/projects', { headers: { Authorization: `Bearer ${token}` } }).then(r => r.json()),
      fetch('/api/features', { headers: { Authorization: `Bearer ${token}` } }).then(r => r.json()),
    ]).then(([skills, exps, projs, feats]) => {
      setStats({
        skills: skills.length || 0,
        experiences: exps.length || 0,
        projects: projs.length || 0,
        features: feats.length || 0,
      });
    }).catch(console.error);
  }, [token, navigate]);

  const menuItems = [
    { icon: '👤', label: 'Profile', path: '/admin/profile' },
    { icon: '💻', label: 'Skills', path: '/admin/skills' },
    { icon: '🏢', label: 'Experience', path: '/admin/experience' },
    { icon: '📁', label: 'Projects', path: '/admin/projects' },
    { icon: '⭐', label: 'Features', path: '/admin/features' },
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
      {/* Sidebar */}
      <motion.div
        className={`fixed left-0 top-0 h-screen w-64 ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-lg p-6`}
        initial={{ x: -256 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Dashboard
        </h1>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-all ${
                isDark
                  ? 'hover:bg-slate-700 text-gray-300 hover:text-white'
                  : 'hover:bg-gray-100 text-gray-700 hover:text-gray-900'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <button
          onClick={() => {
            logout();
            navigate('/');
          }}
          className="w-full mt-8 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </motion.div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Welcome to Dashboard
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '💻', label: 'Skills', count: stats.skills },
              { icon: '🏢', label: 'Experiences', count: stats.experiences },
              { icon: '📁', label: 'Projects', count: stats.projects },
              { icon: '⭐', label: 'Features', count: stats.features },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className={`p-6 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-white'} shadow`}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
                <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{stat.count}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
