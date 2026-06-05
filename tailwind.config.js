/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        'brand-pink': '#FFB3C6',
        'brand-green': '#C8E6C9',
        'brand-sage': '#C8D5C0',
        'brand-purple': '#9B59B6',
        'brand-red': '#E8474C',
        'brand-dark': '#1a1a1a',
        'brand-gray': '#666666',
        'brand-light-gray': '#f5f5f5',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}
