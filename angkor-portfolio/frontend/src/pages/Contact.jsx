import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const { isDark } = useTheme();
  const [ref, isInView] = useInView();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className={`py-20 px-4 ${isDark ? 'bg-slate-800' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Get in Touch
          </h2>
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            Feel free to reach out for collaborations or consultations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {[
              { icon: '📧', label: 'Email', value: 'phanit@example.com' },
              { icon: '📱', label: 'Phone', value: '+855 123 456 789' },
              { icon: '📍', label: 'Location', value: 'Phnom Penh, Cambodia' }
            ].map((info, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`p-6 rounded-lg ${isDark ? 'bg-slate-700' : 'bg-white'}`}
              >
                <div className="text-3xl mb-2">{info.icon}</div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{info.label}</p>
                <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{info.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className={`space-y-4 p-6 rounded-lg ${isDark ? 'bg-slate-700' : 'bg-white'}`}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 rounded-lg border ${
                isDark
                  ? 'bg-slate-800 border-slate-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              variants={itemVariants}
            />

            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 rounded-lg border ${
                isDark
                  ? 'bg-slate-800 border-slate-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              variants={itemVariants}
            />

            <motion.textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 rounded-lg border resize-none ${
                isDark
                  ? 'bg-slate-800 border-slate-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              variants={itemVariants}
            />

            <motion.button
              type="submit"
              className={`w-full py-3 rounded-lg font-bold transition-all ${
                isDark
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
