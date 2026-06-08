import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function SkillsAdmin() {
  const { isDark, token } = useTheme();
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);
  const [form, setForm] = useState({ name: '', category: 'General', level: 50, icon: '💻' });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    if (!token) navigate('/admin/login');
    fetchSkills();
  }, [token, navigate]);

  const fetchSkills = async () => {
    try {
      const res = await fetch('/api/skills', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSkills(await res.json());
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editId ? 'PUT' : 'POST';
    const url = editId ? `/api/skills/${editId}` : '/api/skills';

    try {
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        fetchSkills();
        setForm({ name: '', category: 'General', level: 50, icon: '💻' });
        setEditId(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/skills/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchSkills();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (skill) => {
    setForm(skill);
    setEditId(skill.id);
  };

  return (
    <div className={`p-8 ${isDark ? 'bg-slate-900' : 'bg-gray-50'} min-h-screen`}>
      <div className="max-w-5xl mx-auto">
        <h1 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Manage Skills
        </h1>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className={`p-6 rounded-lg mb-8 ${isDark ? 'bg-slate-800' : 'bg-white'} shadow`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Skill name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className={`px-4 py-2 rounded-lg border ${
                isDark
                  ? 'bg-slate-700 border-slate-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
            <input
              type="text"
              placeholder="Category"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className={`px-4 py-2 rounded-lg border ${
                isDark
                  ? 'bg-slate-700 border-slate-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
            <input
              type="number"
              min="0"
              max="100"
              placeholder="Level (0-100)"
              value={form.level}
              onChange={(e) => setForm({ ...form, level: parseInt(e.target.value) })}
              className={`px-4 py-2 rounded-lg border ${
                isDark
                  ? 'bg-slate-700 border-slate-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
            <input
              type="text"
              placeholder="Icon (emoji)"
              value={form.icon}
              onChange={(e) => setForm({ ...form, icon: e.target.value })}
              className={`px-4 py-2 rounded-lg border ${
                isDark
                  ? 'bg-slate-700 border-slate-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
          </div>
          <div className="flex gap-2 mt-4">
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              {editId ? 'Update' : 'Add'} Skill
            </button>
            {editId && (
              <button
                type="button"
                onClick={() => {
                  setEditId(null);
                  setForm({ name: '', category: 'General', level: 50, icon: '💻' });
                }}
                className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
            )}
          </div>
        </motion.form>

        {/* Skills List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className={`p-4 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-white'} shadow`}
              whileHover={{ y: -2 }}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-2xl">{skill.icon || '💻'}</p>
                  <h3 className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{skill.name}</h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{skill.category}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(skill)}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(skill.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className={`w-full rounded-full h-2 ${isDark ? 'bg-slate-700' : 'bg-gray-300'}`}>
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <p className={`text-right text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {skill.level}%
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
