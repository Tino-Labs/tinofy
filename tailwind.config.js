const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/pages/**/*.{ts,js,tsx,jsx}', './src/components/**/*.{ts,tsx,js,jsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1920px',
      },
      fontFamily: {
        sans: ['Raleway', ...defaultTheme.fontFamily.sans],
        display: ['Rubik'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
