/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#14B8A6'
      },
      typography: () => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: '22px',
              fontWeight: 'bold',
              marginBottom: '40px'
            },
            h2:{
              fontSize: '18px',
              marginBottom: '20px',
              fontWeight: 'semi-bold',
            },
            p: {
              marginBottom: '20px'
            },
            
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
