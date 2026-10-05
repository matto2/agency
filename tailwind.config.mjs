import { withAnimations } from 'animated-tailwindcss';

// Values come from src/styles/tokens.css; Tailwind only references the vars.
export default withAnimations({
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        ink: 'var(--color-text)',
        muted: 'var(--color-text-muted)',
        rule: 'var(--color-rule)',
        band: 'var(--color-band)',
        'band-dark': 'var(--color-band-dark)',
        'on-band': 'var(--color-on-band)',
        highlight: 'var(--color-highlight)',
        'link-hover': 'var(--color-link-hover)',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        heading: 'var(--font-sans)',
        quote: 'var(--font-quote)',
      },
      fontWeight: {
        normal: 'var(--weight-regular)',
        medium: 'var(--weight-medium)',
        semibold: 'var(--weight-semibold)',
        bold: 'var(--weight-bold)',
      },
      fontSize: {
        label: 'var(--text-label)',
        'label-lg': 'var(--text-label-lg)',
        body: 'var(--text-body)',
        intro: 'var(--text-intro)',
        'card-title': 'var(--text-card-title)',
        h1: 'var(--text-h1)',
        'h2-band': 'var(--text-h2-band)',
        quote: 'var(--text-quote)',
        wordmark: 'var(--text-wordmark)',
        'wordmark-sm': 'var(--text-wordmark-sm)',
      },
      letterSpacing: {
        caps: 'var(--tracking-caps)',
        section: 'var(--tracking-section)',
      },
      lineHeight: {
        body: 'var(--leading-body)',
      },
      maxWidth: {
        container: 'var(--container)',
        wide: 'var(--container-wide)',
      },
      spacing: {
        gutter: 'var(--gutter)',
        section: 'var(--section-space)',
      },
      borderRadius: {
        token: 'var(--radius)',
      },
    },
  },
});
