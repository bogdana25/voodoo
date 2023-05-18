/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'palewhite': '#FCF7E6',
      },
      fontFamily: {
        'grotesk': ['Space Grotesk'],
        'mono': ['Space Mono']
      },

    },
  },
  plugins: [],
}

