import { text } from 'framer-motion/client';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          bgYellow: '#ffda17',
          bgBlack: '#000',
          bgLight: '#fff',
          bgLightBlack: 'rgb(36, 36, 36)',
          bgGray: 'rgb(244, 245, 249)',
          textBlack: '#000',
          textWhite: '#fff',
          textGray: '#808080',
        },
      }
    },
  },
  plugins: [],
}

// #ffda17