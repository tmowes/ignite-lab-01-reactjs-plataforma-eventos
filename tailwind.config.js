/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/bg-register.png)',
      },
      colors: {
        green: {
          700: '#015F43',
          500: '#00875F',
          300: '#00B37E',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          900: '#09090A',
          700: '#121214',
          600: '#29292E',
          500: '#323238',
          300: '#8D8D99',
          200: '#C4C4CC',
          100: '#E1E1E6',
        },
        brand: {
          500: '#FF6900',
          400: '#F97316',
          300: '#FB923C',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
}
