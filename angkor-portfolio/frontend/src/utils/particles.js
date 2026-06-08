export const generateParticles = (count = 50) => {
  return Array.from({ length: count }).map(() => ({
    id: Math.random(),
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.5 + 0.2
  }));
};

export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
