/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../HTML/**/*.{html,js}", "!../node_modules/**/*"],
  theme: {
    extend: {
      colors: {
        "neon-green": "#39FF14", 
        "lime-green": "#70A701", 
        "red-orange": "#FF5349"
      },
      fontFamily: {
        custom: ["Orbitron", "Syncopate", "Arial", "Helvetica", "sans-serif"]
      }
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".font-display-swap": {
          "font-display": "swap" // While main font loads, fallback font appears waiting the main
        }
      });
    }
  ]
}; 
