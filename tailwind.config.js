/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#DC2626',
          dark: '#111827',
          light: '#FFFBEB',
          accent: '#F59E0B',
        }
      },
    },
  },
  plugins: [],
}