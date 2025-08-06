// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gillBold: ['gill-sans-bold', 'sans-serif'],
        gillLight: ['gill-sans-light', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
