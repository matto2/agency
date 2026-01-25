import { withAnimations } from 'animated-tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default withAnimations({
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'rgb(0, 7, 198)',
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: 'rgb(0, 7, 198)',
          800: '#1e1b4b',
          900: '#0f0a3c',
        },
      },
      fontFamily: {
        heading: ['"Fraunces Variable"', ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        'gradient-top-left': 'radial-gradient(circle at top left, #FFD6E8, transparent)',
        'gradient-top-right': 'radial-gradient(circle at top right, #D6EFFF, transparent)',
        'gradient-bottom-left': 'radial-gradient(circle at bottom left, #FFECD6, transparent)',
        'gradient-bottom-right': 'radial-gradient(circle at bottom right, #D6FFD9, transparent)',
      },
    },
  },
});