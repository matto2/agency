const { withAnimations } = require('animated-tailwindcss');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = withAnimations({
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Montserrat Variable"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
});
