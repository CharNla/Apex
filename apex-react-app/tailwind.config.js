const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Prompt', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'light-lavender': '#F2EEF8',
        'lavender-pink': '#DFB2F3',
        'lilac': '#BA91D9',
        'orchid': '#B356C1',
        'royal-purple': '#5244A5',
        'deep-purple': '#2B2742',
        'almost-black': '#2B2D31',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}