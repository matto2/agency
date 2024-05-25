const { withAnimations } = require('animated-tailwindcss');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = withAnimations({
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        montserrat: ['"Montserrat Variable"', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.font-sans': {
          fontFamily: theme('fontFamily.sans'),
        },
        '.font-bold': {
          fontFamily: theme('fontFamily.montserrat'),
          fontWeight: theme('fontWeight.bold'),
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
});
