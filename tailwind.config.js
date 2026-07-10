/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#EFFDF0',
        'brand-dark': '#1a3d1a',
        'brand-dark-hover': '#2a5a2a',
        'brand-orange': '#E86A10',
        'brand-orange-hover': '#d45e0d',
      },
    },
  },
  plugins: [],
}
