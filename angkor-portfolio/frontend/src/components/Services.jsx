import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';

export default function Services() {
  const { t } = useTranslation();
  const [ref, isInView] = useInView();

  const services = [
    {
      key: 'temples',
      icon: '🏛️',
      color: 'from-khmer-gold to-khmer-700'
    },
    {
      key: 'dance',
      icon: '💃',
      color: 'from-khmer-600 to-khmer-800'
    },
    {
      key: 'crafts',
      icon: '🎨',
      color: 'from-khmer-700 to-khmer-900'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-khmer-900/50 to-khmer-950 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <h2 className="font-khmer text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-khmer-gold to-transparent rounded-full mx-auto" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service) => (
            <motion.div
              key={service.key}
              className="group relative"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              {/* Card */}
              <div className="relative glass rounded-xl p-8 h-80 flex flex-col justify-between overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-6xl mb-6">{service.icon}</div>
                  <h3 className="font-khmer text-2xl font-bold text-khmer-gold mb-3">
                    {t(`services.${service.key}.name`)}
                  </h3>
                  <p className="text-khmer-200 font-english text-sm leading-relaxed">
                    {t(`services.${service.key}.description`)}
                  </p>
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`relative mt-6 px-6 py-2 bg-gradient-to-r ${service.color} text-white rounded-lg font-bold font-english text-sm w-fit`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('services.explore')}
                </motion.button>

                {/* Border Animation */}
                <motion.div
                  className="absolute inset-0 border border-khmer-gold/20 rounded-xl"
                  animate={{ borderColor: ['rgba(212, 175, 55, 0.2)', 'rgba(212, 175, 55, 0.5)', 'rgba(212, 175, 55, 0.2)'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
