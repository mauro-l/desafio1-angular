/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
      'ablue-primary': '#0C45DB',
      'ablue-secondary': '#1869FF',
      'ablue-tertiary': '#e6f7ff',
      'ablue-border': '#91D5FF',
      'aprevent': '#FF7946',
    },
  },
  },
  plugins: [],
}

