/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3E084C',
        secondary: {
          400: '#667085',
          700: '#101828',
        },
        footer: '#222222',
      },
      fontFamily: {
        primary: ['Josefin Sans'],
        body: ['Playfair Display'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
