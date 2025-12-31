/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'cream': '#FFF8F0',
        'warm-blue': '#A8C5E0',
        'soft-peach': '#FFD4B8',
        'mountain-green': '#8B9D83',
        'warm-gray': '#E8E3DC',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
