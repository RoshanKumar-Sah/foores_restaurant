/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '991px',
      xl: '1280px'

    },
    extend: {
      backgroundImage: {
        "frame-footer": "url('../assets/frame_footer.png')",
        "contact": "url('../assets/bg_call_section.jpg')"
      },
      colors: {
        "primary": "#978667",
        "header": "#222222",
        "content": "#444444"
      },
      animation: {
        slideRight: 'slideRight 0.3s ease-out',
      },

    },

  },
  plugins: [],
}
