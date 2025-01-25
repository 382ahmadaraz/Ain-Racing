/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Red: '#FE0000',
        darkGray: '#111111',
        lightBlack:'#292929'
      },
      fontFamily: {
        poppins: 'Poppins'
      },
      spacing: {
        ws1: '0.25em',  // Custom word spacing example
        ws2: '0.5em',   // Custom word spacing example
        'ws-3': '1em',     // Custom word spacing example
      },
    },
  },
  plugins: [],
}

