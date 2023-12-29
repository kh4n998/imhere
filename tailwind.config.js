/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./index.js"
  ],
  theme: {
    fontFamily: {
      'brand': ['"Yellowtail"', 'cursive'],
      'mono': ['"Space Mono"', 'monospace'],
      'code': ['"Source Code Pro"', 'monospace']
    },
    extend: {
      colors: {
        "primary": "#00cf00",
        "body": "#263238",
        "neon": "#8ce436"
      },
      extend: {
        transitionProperty: {
          'width': 'width'
        },
        transitionDuration: {
          '2000': '2000ms',
        }
      }
    }
  },
  plugins: [],
}

