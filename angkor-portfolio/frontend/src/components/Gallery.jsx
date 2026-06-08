import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';

export default function Gallery() {
  const { t } = useTranslation();
  const [ref, isInView] = useInView();
  const [activeCategory, setActiveCategory] = useState('temples');

  const categories = ['temples', 'dance', 'culture', 'nature'];

  const galleryItems = {
    temples: [
      { id: 1, title: 'Angkor Wat', icon: '🏛️' },
      { id: 2, title: 'Bayon Temple', icon: '🗼' },
      { id: 3, title: 'Ta Prohm', icon: '🌳' },
      { id: 4, title: 'Preah Khan', icon: '⛩️' },
    ],
    dance: [
      { id: 1, title: 'Apsara Dance', icon: '💃' },
      { id: 2, title: 'Royal Ballet', icon: '👑' },
      { id: 3, title: 'Traditional Show', icon: '🎭' },
      { id: 4, title: 'Cultural Performance', icon: '🎪' },
    ],
    culture: [
      { id: 1, title: 'Khmer Crafts', icon: '🎨' },
      { id: 2, title: 'Traditional Weaving', icon: '🧵' },
      { id: 3, title: 'Stone Carving', icon: '🗿' },
      { id: 4, title: 'Buddhist Art', icon: '🙏' },
    ],
    nature: [
      { id: 1, title: 'Tonle Sap Lake', icon: '🌊' },
      { id: 2, title: 'Mekong River', icon: '🏞️' },
      { id: 3, title: 'Jungle Temples', icon: '🌴' },
      { id: 4, title: 'Natural Wonders', icon: '⛰️' },
    ],
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <section id="gallery" className="py-20 px-4 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <h2 className="font-khmer text-4xl md:text-5xl font-bold mb-2 gradient-text">
            {t('gallery.title')}
          </h2>
          <p className="text-khmer-200 font-english mb-4">{t('gallery.subtitle')}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-khmer-gold to-transparent rounded-full mx-auto" />
        </motion.div>

        {/* Category Buttons */}
        <motion.div
          className="flex justify-center gap-4 mb-12 flex-wrap"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-english font-bold transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-khmer-gold to-khmer-700 text-khmer-950'
                  : 'glass text-khmer-gold hover:text-khmer-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t(`gallery.categories.${category}`)}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {galleryItems[activeCategory].map((item) => (
              <motion.div
                key={item.id}
                className="group relative h-64 rounded-lg overflow-hidden cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                {/* Image Placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-khmer-gold/20 to-khmer-800 glass flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-khmer-100 font-english font-bold text-center px-4">
                    {item.title}
                  </h3>

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-khmer-950/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <svg className="w-8 h-8 text-khmer-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-khmer-gold/20 rounded-lg"
                  animate={{ borderColor: ['rgba(212, 175, 55, 0.2)', 'rgba(212, 175, 55, 0.5)', 'rgba(212, 175, 55, 0.2)'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
