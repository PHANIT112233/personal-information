import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const { t } = useTranslation();
  const [ref, isInView] = useInView();
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-khmer-950 to-khmer-900/50" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-khmer-gold opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-khmer-700 opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <h2 className="font-khmer text-4xl md:text-5xl font-bold mb-2 gradient-text">
            {t('contact.title')}
          </h2>
          <p className="text-khmer-200 font-english">{t('contact.subtitle')}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-khmer-gold to-transparent rounded-full mx-auto mt-4" />
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
              { icon: '✉️', label: t('contact.email'), value: 'hello@khmerheritage.com' },
              { icon: '📱', label: t('contact.phone'), value: '+855 (0) 123 456 789' },
              { icon: '📍', label: t('contact.address'), value: 'Siem Reap, Cambodia' }
            ].map((info, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-lg"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="text-3xl mb-2">{info.icon}</div>
                <h3 className="font-khmer text-khmer-gold font-bold mb-2">{info.label}</h3>
                <p className="text-khmer-200 font-english">{info.value}</p>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div className="pt-4" variants={itemVariants}>
              <p className="text-khmer-gold font-khmer font-bold mb-4">{t('contact.follow')}</p>
              <div className="flex gap-4">
                {['f', 'i', 't', 'in'].map((social, index) => (
                  <motion.button
                    key={index}
                    className="w-12 h-12 glass rounded-full flex items-center justify-center text-khmer-gold hover:bg-khmer-gold/10 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.toUpperCase()}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass p-8 rounded-lg space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.input
              type="email"
              name="email"
              placeholder={t('contact.email')}
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-khmer-900/50 border border-khmer-gold/30 rounded-lg text-khmer-100 placeholder-khmer-400 focus:outline-none focus:border-khmer-gold transition-colors font-english"
              variants={itemVariants}
            />

            <motion.textarea
              name="message"
              placeholder={t('contact.message')}
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-khmer-900/50 border border-khmer-gold/30 rounded-lg text-khmer-100 placeholder-khmer-400 focus:outline-none focus:border-khmer-gold transition-colors resize-none font-english"
              variants={itemVariants}
            />

            <motion.button
              type="submit"
              disabled={submitted}
              className="w-full px-6 py-3 bg-gradient-to-r from-khmer-gold to-khmer-700 text-khmer-950 font-bold rounded-lg hover:shadow-lg luxury-shadow disabled:opacity-50 transition-all font-english"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
            >
              {submitted ? '✓ ' + t('contact.send') : t('contact.send')}
            </motion.button>

            {submitted && (
              <motion.p
                className="text-khmer-gold text-center text-sm font-english"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Thank you! We'll be in touch soon.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
