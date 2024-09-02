const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Incluye tus archivos de páginas
    './components/**/*.{js,ts,jsx,tsx}',

    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // make sure it's pointing to the ROOT node_module
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        InterBold: ['Inter Tight', 'sans-serif'],
      },
      colors: {
        blueFooter: '#0f3788',
        amarillo : '#c8a102'
      
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};