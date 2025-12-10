/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a192f',
          800: '#112240',
        },
        cyan: {
          400: '#22d3ee',
        },
        teal: {
          400: '#2dd4bf',
        },
      },
    },
  },
  plugins: [],
}
