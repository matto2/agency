const { withAnimations } = require('animated-tailwindcss');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = withAnimations({
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-top-left': 'radial-gradient(circle at top left, #FFD6E8, transparent)',
        'gradient-top-right': 'radial-gradient(circle at top right, #D6EFFF, transparent)',
        'gradient-bottom-left': 'radial-gradient(circle at bottom left, #FFECD6, transparent)',
        'gradient-bottom-right': 'radial-gradient(circle at bottom right, #D6FFD9, transparent)',
      },
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
        onest: ['"Onest Variable"', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.font-sans': {
          fontFamily: theme('fontFamily.sans'),
        },
        '.font-semibold': {
          fontFamily: theme('fontFamily.onest'),
          fontWeight: theme('fontWeight.semibold'),
        },
        '.font-bold': {
          fontFamily: theme('fontFamily.onest'),
          fontWeight: theme('fontWeight.bold'),
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
});
