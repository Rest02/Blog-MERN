/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#273c2c',
        'dim-gray': '#626868',
        'taupe-gray': '#939196',
        'thistle': '#d3c1d2',
        'pale-purple': '#ffe2fe',
      },
    },
  },
  plugins: [],
}

