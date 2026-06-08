import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { generateParticles, scrollToSection } from '../utils/particles';

export default function Hero() {
  const { t } = useTranslation();
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(generateParticles(30));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-khmer-950 via-khmer-900 to-khmer-800 opacity-70" />
        
        {/* Animated Angkor Silhouette */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="angkorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#d4af37', stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: '#4a3829', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          <path
            d="M 0 500 L 150 400 L 250 420 L 350 300 L 450 350 L 600 200 L 750 350 L 850 300 L 950 420 L 1050 400 L 1200 500 L 1200 800 L 0 800 Z"
            fill="url(#angkorGradient)"
          />
        </svg>

        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-khmer-gold rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-khmer text-6xl md:text-7xl font-bold mb-4 gradient-text"
          variants={itemVariants}
        >
          {t('hero.title')}
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl text-khmer-100 mb-6 font-khmer"
          variants={itemVariants}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-khmer-200 mb-8 font-english leading-relaxed"
          variants={itemVariants}
        >
          {t('hero.description')}
        </motion.p>

        <motion.div className="flex gap-4 justify-center" variants={itemVariants}>
          <motion.button
            onClick={() => scrollToSection('gallery')}
            className="px-8 py-3 bg-gradient-to-r from-khmer-gold to-khmer-700 text-khmer-950 font-bold rounded-lg font-english hover:shadow-lg luxury-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.cta')}
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('about')}
            className="px-8 py-3 glass text-khmer-gold border-2 border-khmer-gold font-bold rounded-lg font-english hover:bg-khmer-gold/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('nav.about')}
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-khmer-gold text-center font-english text-sm mb-2">
          {t('hero.scroll')}
        </div>
        <svg className="w-6 h-6 text-khmer-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
