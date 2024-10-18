/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'body': '#0C111D',
      'gray-body': '#F0F0F6',
      'white': '#ffffff',
      'blue': ' #747BFC      ',
      'purple': '#AF00CA',
      'red': '#E05523',
      'orange': '#ff7849',
      'green': '#0B9C37      ',
      'yellow': ' #EABF39      ',
      'gray-light': '#F5F6F7      ',
      'gray-dark': ' #707070      ',
      'blue': ' #005CE8'
    },
  },
  plugins: [],
};

