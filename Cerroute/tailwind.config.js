/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/forms')],
}
