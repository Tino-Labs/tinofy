module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1920px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
