/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['Figtree', 'system-ui', 'sans-serif'],
        insaniburger: ['Insaniburger', 'sans-serif'],
        insaniburgerCheese: ['"Insaniburger with Cheese"', 'sans-serif'],

        poppins: ['Poppins', 'sans-serif'],

        degular: ['"Degular Demo"', 'system-ui', 'sans-serif'],
        passionate: ['"Feeling Passionate"', 'cursive'],

        sans: [
          'Poppins',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
        ],
      },
    },
  },
  plugins: [],
}
