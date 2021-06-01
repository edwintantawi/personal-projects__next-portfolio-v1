const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'black-900': '#181818',
        orange: '#E76F00',
      },
      backgroundImage: () => ({
        'orange-gradient': 'linear-gradient(to right, #E76F00, #FFA800)',
        hero: 'url("/hero.svg")',
        resume: 'url("/resume.jpg")',
      }),
      screens: {
        xs: '500px',
        ...defaultTheme.screens,
      },
      boxShadow: {
        card: '0 -5px 30px -10px rgba(0, 0, 0, 0.16)',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen lg': {
            maxWidth: '900px',
          },
          '@screen xl': {
            maxWidth: '1200px',
          },
        },
      });
    },
  ],
};
