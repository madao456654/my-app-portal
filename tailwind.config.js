/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./log-masker/**/*.{html,js,ts,jsx,tsx}",
    "./finance-app/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'brand-light': '#f8fafc',
        'brand-dark': '#0f172a',
        'brand-accent': '#3b82f6',
      }
    },
  },
  plugins: [],
}
