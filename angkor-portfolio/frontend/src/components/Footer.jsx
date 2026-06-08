import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-khmer-gold to-transparent" />

      <div className="bg-khmer-950 px-4 py-12">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <motion.div className="md:col-span-2" variants={containerVariants}>
              <h3 className="font-khmer text-2xl font-bold gradient-text mb-4">
                ឈានុស្សាសន៍ខ្មែរ
              </h3>
              <p className="text-khmer-300 font-english text-sm leading-relaxed">
                Celebrating the rich cultural heritage and timeless beauty of Cambodia, from the magnificent Angkor Wat to the graceful art of Apsara dancing.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={containerVariants}>
              <h4 className="font-khmer font-bold text-khmer-gold mb-4">Quick Links</h4>
              <ul className="space-y-2 font-english text-sm text-khmer-300">
                <li><a href="#home" className="hover:text-khmer-gold transition">Home</a></li>
                <li><a href="#about" className="hover:text-khmer-gold transition">About</a></li>
                <li><a href="#gallery" className="hover:text-khmer-gold transition">Gallery</a></li>
                <li><a href="#contact" className="hover:text-khmer-gold transition">Contact</a></li>
              </ul>
            </motion.div>

            {/* Follow Us */}
            <motion.div variants={containerVariants}>
              <h4 className="font-khmer font-bold text-khmer-gold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="w-10 h-10 glass rounded-full flex items-center justify-center text-khmer-gold hover:bg-khmer-gold/10 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social[0]}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-khmer-gold/30 to-transparent my-8" />

          {/* Bottom Footer */}
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-khmer-400 font-english text-sm mb-2">
              {t('footer.copyright')}
            </p>
            <p className="text-khmer-500 font-khmer text-sm">
              © ២០២៦ ឈានុស្សាសន៍ខ្មែរ។ ប្រារព្ធឲ្យគរុ យកចិត្តទុកដាក់។
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
