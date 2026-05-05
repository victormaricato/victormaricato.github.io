/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        ink: '#1a1a1a',
        paper: '#fafaf7',
        muted: '#6b6b6b',
        accent: '#8b3a2f',
      },
      maxWidth: {
        prose: '46rem',
      },
    },
  },
};
