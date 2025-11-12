/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['Figtree', 'system-ui', 'sans-serif'], // Sobrescribe la base
        insaniburger: ['Insaniburger', 'sans-serif'],
        insaniburgerCheese: ['"Insaniburger with Cheese"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        // Opcional: vuelve Poppins la fuente "sans" global
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji'],
      },
    },
  },
  plugins: [],
}
