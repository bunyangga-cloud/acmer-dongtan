/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#E5C07B',
          500: '#D4AF37',
          600: '#AA882C',
          700: '#856921',
        },
        navy: {
          900: '#0B1325',
          950: '#050A14',
        }
      },
      fontFamily: {
        serif: ['Nanum Myeongjo', 'serif'],
        sans: ['Noto Sans KR', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
