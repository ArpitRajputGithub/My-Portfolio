/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#edfcfd',
          100: '#d2f9fc',
          200: '#abf1f9',
          300: '#72e4f5',
          400: '#34cde9',
          500: '#16b1d0',
          600: '#1091b0',
          700: '#13758f',
          800: '#166175',
          900: '#185163',
          950: '#083745',
        },
        secondary: {
          50: '#f0f7fe',
          100: '#dfedfb',
          200: '#c7e0f9',
          300: '#a1cdf5',
          400: '#75b3ef',
          500: '#5696e9',
          600: '#3e77dd',
          700: '#3663cc',
          800: '#3051a6',
          900: '#2b4683',
          950: '#1e2c52',
        },
        accent: {
          50: '#f4f3ff',
          100: '#ebecff',
          200: '#dad7ff',
          300: '#c1b6ff',
          400: '#a890ff',
          500: '#9064fa',
          600: '#7e41ef',
          700: '#6c2dd3',
          800: '#5a26ac',
          900: '#4c228a',
          950: '#301463',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
