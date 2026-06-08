import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ExperienceAdmin() {
  const { isDark, token } = useTheme();
  const navigate = useNavigate();
  const [experiences, setExperiences] = useState([]);
  const [form, setForm] = useState({ title: '', company: '', period: '', description: '', color: '#3B82F6' });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    if (!token) navigate('/admin/login');
    fetchExperiences();
  }, [token, navigate]);

  const fetchExperiences = async () => {
    try {
      const res = await fetch('/api/experiences', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setExperiences(await res.json());
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editId ? 'PUT' : 'POST';
    const url = editId ? `/api/experiences/${editId}` : '/api/experiences';

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
        fetchExperiences();
        setForm({ title: '', company: '', period: '', description: '', color: '#3B82F6' });
        setEditId(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/experiences/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchExperiences();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (exp) => {
    setForm(exp);
    setEditId(exp.id);
  };

  return (
    <div className={`p-8 ${isDark ? 'bg-slate-900' : 'bg-gray-50'} min-h-screen`}>
      <div className="max-w-5xl mx-auto">
        <h1 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Manage Experience
        </h1>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className={`p-6 rounded-lg mb-8 ${isDark ? 'bg-slate-800' : 'bg-white'} shadow`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Job Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
              className={`w-full px-4 py-2 rounded-lg border ${
                isDark
                  ? 'bg-slate-700 border-slate-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Company"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className={`px-4 py-2 rounded-lg border ${
                  isDark
                    ? 'bg-slate-700 border-slate-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
              <input
                type="text"
                placeholder="Period (e.g. 2023 - Present)"
                value={form.period}
                onChange={(e) => setForm({ ...form, period: e.target.value })}
                className={`px-4 py-2 rounded-lg border ${
                  isDark
                    ? 'bg-slate-700 border-slate-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>
            <textarea
              placeholder="Description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows="4"
              className={`w-full px-4 py-2 rounded-lg border resize-none ${
                isDark
                  ? 'bg-slate-700 border-slate-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
            <input
              type="color"
              value={form.color}
              onChange={(e) => setForm({ ...form, color: e.target.value })}
              className="w-20 h-10 rounded-lg"
            />
          </div>
          <div className="flex gap-2 mt-4">
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              {editId ? 'Update' : 'Add'} Experience
            </button>
            {editId && (
              <button
                type="button"
                onClick={() => {
                  setEditId(null);
                  setForm({ title: '', company: '', period: '', description: '', color: '#3B82F6' });
                }}
                className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
            )}
          </div>
        </motion.form>

        {/* List */}
        <div className="space-y-4">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              className={`p-4 rounded-lg border-l-4 ${isDark ? 'bg-slate-800' : 'bg-white'}`}
              style={{ borderColor: exp.color }}
              whileHover={{ x: 5 }}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{exp.title}</h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {exp.company} • {exp.period}
                  </p>
                  <p className={`mt-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{exp.description}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(exp)}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(exp.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
