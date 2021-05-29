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
        'orange-gradient': 'linear-gradient(to right, #FFA800, #E76F00)',
        hero: 'url("/hero.svg")',
      }),
      screens: {
        xs: '360px',
        ...defaultTheme.screens,
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
