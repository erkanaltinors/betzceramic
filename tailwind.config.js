/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container:{
      center: true,
      padding: {
        DEFAULT: '20px',
        md: '40px'
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-unbounded), system-ui']
      },
    },
  },
  plugins: [],
}
