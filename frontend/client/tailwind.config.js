/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // makes Tailwind work across your app
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ['"Clash Display"', 'sans-serif'],
        manrope: ['"Manrope"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
