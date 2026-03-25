/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ebcNavy: '#0A0B82',     // Professionalism
        ebcGold: '#C4A35A',     // Premium / Impact
        ebcEmerald: '#2E8B57',  // Growth
        ebcGray: '#333333',     // Text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Clean, modern font
      },
    },
  },
  plugins: [],
}
