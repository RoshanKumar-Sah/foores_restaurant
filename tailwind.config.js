/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    extend: {
      colors: {
        "primary": "#978667",
        "header": "#222222",
        "content": "#444444"
      },
      animation:{
        slideRight: 'slideRight 0.3s ease-out',
      },
     
    },
 
  },
  plugins: [],
}
