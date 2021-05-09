/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  purge: {
    enabled: isProduction,
    content: ['./src/**/*.tsx', './public/index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
