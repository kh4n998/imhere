/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
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
        }
    }
  },
  plugins: [],
}

