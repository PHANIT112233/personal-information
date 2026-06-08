/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        khmer: {
          50: '#faf8f3',
          100: '#f5f1e6',
          200: '#e8dcc8',
          300: '#d4c4a8',
          400: '#c4a87d',
          500: '#b8935e',
          600: '#a67c45',
          700: '#8b6a3e',
          800: '#6b5233',
          900: '#4a3829',
          950: '#3a2c1f',
          gold: '#d4af37',
          darkgold: '#8b7500'
        }
      },
      fontFamily: {
        khmer: ['Battambang', 'Kantumruy Pro', 'cursive'],
        english: ['Poppins', 'Inter', 'sans-serif']
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulse_glow: 'pulse_glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s infinite',
        fadeInUp: 'fadeInUp 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        pulse_glow: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0.7' },
          '100%': { opacity: '1' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: [],
}
