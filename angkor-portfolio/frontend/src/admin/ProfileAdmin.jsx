import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProfileAdmin() {
  const { isDark, token } = useTheme();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({});

  useEffect(() => {
    if (!token) navigate('/admin/login');
    fetchProfile();
  }, [token, navigate]);

  const fetchProfile = async () => {
    try {
      const res = await fetch('/api/profile', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setProfile(data[0]);
      setForm(data[0]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        fetchProfile();
        setEditing(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleAvatarUpload = async (file) => {
    if (!file) return;
    const data = new FormData();
    data.append('avatar', file);

    try {
      const res = await fetch('/api/profile/avatar', {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` },
        body: data,
      });
      if (res.ok) {
        fetchProfile();
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (!profile) return <div className={`p-8 ${isDark ? 'text-white' : ''}`}>Loading...</div>;

  return (
    <div className={`p-8 ${isDark ? 'bg-slate-900' : 'bg-gray-50'} min-h-screen`}>
      <div className="max-w-2xl mx-auto">
        <h1 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Profile Settings
        </h1>

        <motion.div
          className={`p-6 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-white'} shadow`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Avatar */}
          <div className="mb-6 text-center">
            <div className={`w-24 h-24 mx-auto rounded-full ${isDark ? 'bg-slate-700' : 'bg-gray-200'} flex items-center justify-center text-5xl mb-4`}>
              👤
            </div>
            <label className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700">
              Upload Avatar
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => e.target.files[0] && handleAvatarUpload(e.target.files[0])}
              />
            </label>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {['name', 'position', 'email', 'phone', 'location', 'company'].map((field) => (
              <div key={field}>
                <label className={`block text-sm font-medium mb-1 capitalize ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {field}
                </label>
                <input
                  type="text"
                  value={form[field] || ''}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  disabled={!editing}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    isDark
                      ? 'bg-slate-700 border-slate-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } disabled:opacity-50`}
                />
              </div>
            ))}

            <div>
              <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Bio
              </label>
              <textarea
                value={form.bio || ''}
                onChange={(e) => setForm({ ...form, bio: e.target.value })}
                disabled={!editing}
                rows="4"
                className={`w-full px-4 py-2 rounded-lg border resize-none ${
                  isDark
                    ? 'bg-slate-700 border-slate-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                } disabled:opacity-50`}
              />
            </div>

            <div className="flex gap-2">
              {!editing ? (
                <button
                  type="button"
                  onClick={() => setEditing(true)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Edit Profile
                </button>
              ) : (
                <>
                  <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditing(false)}
                    className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
