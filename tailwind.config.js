/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // Specify where Tailwind should scan for class names
  theme: {
    extend: {
      colors: {
        'logo-start': '#EE4891', // Custom color for the logo start
        'logo-end': '#7D1B88', // Custom color for the logo end
      },
      backgroundImage: {
        'logo-gradient': 'linear-gradient(180deg, #EE4891 0%, #7D1B88 100%)', // Custom gradient background
      },
    },
  },
  plugins: [],
}
