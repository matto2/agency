import { withAnimations } from 'animated-tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default withAnimations({
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-top-left': 'radial-gradient(circle at top left, #FFD6E8, transparent)',
        'gradient-top-right': 'radial-gradient(circle at top right, #D6EFFF, transparent)',
        'gradient-bottom-left': 'radial-gradient(circle at bottom left, #FFECD6, transparent)',
        'gradient-bottom-right': 'radial-gradient(circle at bottom right, #D6FFD9, transparent)',
      },
    },
  },
});