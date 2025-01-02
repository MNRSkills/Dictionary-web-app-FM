/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "phone-layout": "23.4375rem",
        "tablet-layout": "48rem",
        "desktop-layout": "90rem",
      },
      colors: {
        darkest: "#050505",
        darker: "#1f1f1f",
        dark: "#2d2d2d",
        "dark-gray": "#3a3a3a",
        " gray": "#757575",
        "light-gray": "#e9e9e9",
        "off-white": "#f4f4f4",
        white: "#ffffff",
        purple: "#a445ed",
        orange: "#ff5252",
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'lora': ['Lora', 'sans-serif'],
        'mono': ['Inconsolata', 'mono']
      }
    },
  },
  plugins: [],
};
