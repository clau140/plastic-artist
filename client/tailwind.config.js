/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#87ceeb',   // Azul cielo
        'light-blue': '#b0e0e6', // Azul claro
        'dark-blue': '#00274d',  // Azul oscuro
        'blue-title': '#03346E',
        'light-gray': '#d3d3d3', // Gris claro
        'gray': '#a9a9a9',       // Gris medio
        'dark-gray': '#696969',  // Gris oscuro
      },
      textShadow: {
        'default': '40px 8px 4px rgba(0, 0, 0, 0.6)', 
      },
    },
    
  },
  plugins: [],
}
