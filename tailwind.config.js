/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "rich-red-primary": "#D72638",
        "deep-gold-secondary": "#F8C630",
        "forest-green": "#2E7D32",
        "soft-cream": "FAF3E0",
        "charcoal-black": "2B2B2B",
      },
    },
  },
  plugins: [],
};
