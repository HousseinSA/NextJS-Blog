/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx, ts, tsx}", "./pages/**/**/*.{js,jsx, ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Other plugins...
  ],
}
