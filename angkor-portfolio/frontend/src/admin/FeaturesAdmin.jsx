import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectsAdmin() {
  const { isDark, token } = useTheme();
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ title: '', tags: '', description: '', link: '' });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    if (!token) navigate('/admin/login');
    fetchProjects();
  }, [token, navigate]);

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/projects', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProjects(await res.json());
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editId ? 'PUT' : 'POST';
    const url = editId ? `/api/projects/${editId}` : '/api/projects';

    const tags = form.tags.split(',').map(t => t.trim());

    try {
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ ...form, tags }),
      });

      if (res.ok) {
        fetchProjects();
        setForm({ title: '', tags: '', description: '', link: '' });
        setEditId(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (project) => {
    setForm({
      ...project,
      tags: Array.isArray(project.tags) ? project.tags.join(', ') : project.tags,
    });
    setEditId(project.id);
  };

  return (
    <div className={`p-8 ${isDark ? 'bg-slate-900' : 'bg-gray-50'} min-h-screen`}>
      <div className="max-w-5xl mx-auto">
        <h1 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Manage Projects
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
              placeholder="Project Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
              className={`w-full px-4 py-2 rounded-lg border ${
                isDark
                  ? 'bg-slate-700 border-slate-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
            <textarea
              placeholder="Description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows="3"
              className={`w-full px-4 py-2 rounded-lg border resize-none ${
                isDark
                  ? 'bg-slate-700 border-slate-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
            <input
              type="text"
              placeholder="Tags (comma separated)"
              value={form.tags}
              onChange={(e) => setForm({ ...form, tags: e.target.value })}
              className={`w-full px-4 py-2 rounded-lg border ${
                isDark
                  ? 'bg-slate-700 border-slate-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
            <input
              type="url"
              placeholder="Project URL"
              value={form.link}
              onChange={(e) => setForm({ ...form, link: e.target.value })}
              className={`w-full px-4 py-2 rounded-lg border ${
                isDark
                  ? 'bg-slate-700 border-slate-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
          </div>
          <div className="flex gap-2 mt-4">
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              {editId ? 'Update' : 'Add'} Project
            </button>
            {editId && (
              <button
                type="button"
                onClick={() => {
                  setEditId(null);
                  setForm({ title: '', tags: '', description: '', link: '' });
                }}
                className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
            )}
          </div>
        </motion.form>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`p-4 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-white'} shadow`}
              whileHover={{ y: -5 }}
            >
              <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
              <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
              <div className="flex gap-1 mb-3 flex-wrap">
                {(Array.isArray(project.tags) ? project.tags : JSON.parse(project.tags || '[]')).map((tag, i) => (
                  <span
                    key={i}
                    className={`text-xs px-2 py-1 rounded ${
                      isDark ? 'bg-blue-600/30 text-blue-300' : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(project)}
                  className="flex-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="flex-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
