/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'

  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '##4C40F7',
        'custom-green': '#34c759',
        'custom-red': '#ff3b30',
      },
        boxShadow: {
        'custom-box-shadow': '-10px 30px 70px',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')

  ],
}
