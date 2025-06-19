const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Prompt', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'pale-lavender': '#d8d2e9',
        'light-lavender': '#F2EEF8',
        'lavender-pink': '#DFB2F3',
        'lilac': '#BA91D9',
        'orchid': '#B356C1',
        'royal-purple': '#5244A5',
        'deep-purple': '#2B2742',
        'almost-black': '#2B2D31',
      },
      keyframes: {
        celebrate: {
          '0%': { transform: 'scale(0)' },
          '50%': { opacity: '1' },
          '100%': { transform: 'scale(1.2)', opacity: '0', display: 'none' },
        }
      },
      animation: {
        celebrate: 'celebrate 0.4s forwards',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}