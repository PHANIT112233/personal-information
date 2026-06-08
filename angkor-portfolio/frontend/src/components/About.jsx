import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';

export default function About() {
  const { t } = useTranslation();
  const [ref, isInView] = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="relative py-20 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-khmer-gold opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-khmer-700 opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Left Side - Image Placeholder */}
          <motion.div
            className="relative h-96 rounded-lg overflow-hidden"
            variants={itemVariants}
          >
            <div className="w-full h-full bg-gradient-to-br from-khmer-gold/20 to-khmer-800 glass flex items-center justify-center">
              <div className="text-center">
                <svg className="w-24 h-24 text-khmer-gold/50 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-khmer-gold/50 font-english">Angkor Wat Heritage</p>
              </div>
            </div>

            {/* Decorative Border */}
            <motion.div
              className="absolute inset-0 border-2 border-khmer-gold/30 rounded-lg"
              animate={{ borderColor: ['rgba(212, 175, 55, 0.3)', 'rgba(212, 175, 55, 0.6)', 'rgba(212, 175, 55, 0.3)'] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div>
              <h2 className="font-khmer text-4xl md:text-5xl font-bold mb-2 gradient-text">
                {t('about.title')}
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-khmer-gold to-transparent rounded-full" />
            </div>

            <p className="text-khmer-200 leading-relaxed font-english text-lg">
              {t('about.description')}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {[
                { icon: '🏛️', label: '2000+ Years' },
                { icon: '🎨', label: 'Rich Arts' },
                { icon: '🕉️', label: 'Spiritual' },
                { icon: '🌟', label: 'Timeless' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="glass p-4 rounded-lg text-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <p className="text-khmer-100 font-english text-sm">{feature.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
