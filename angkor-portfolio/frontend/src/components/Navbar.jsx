import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { scrollToSection } from '../utils/particles';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'km' : 'en');
  };

  const navItems = [
    { label: t('nav.home'), id: 'home' },
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.services'), id: 'services' },
    { label: t('nav.gallery'), id: 'gallery' },
    { label: t('nav.contact'), id: 'contact' }
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass border-b border-khmer-gold/20' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="font-khmer text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            ខ្មែរ
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="text-khmer-100 hover:text-khmer-gold transition-colors duration-300 font-english text-sm"
                whileHover={{ color: '#d4af37' }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-full glass text-khmer-gold text-sm font-english"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {i18n.language === 'en' ? 'ខ្មែរ' : 'EN'}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-khmer-gold"
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden mt-4 space-y-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-khmer-100 hover:bg-khmer-gold/10 rounded transition-colors"
                whileHover={{ x: 5 }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
