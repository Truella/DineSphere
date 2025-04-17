/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "rich-red-primary": "#8B0A1A",
        "deep-gold-secondary": "#FFD700",
        "forest-green": "#2E7D32",
        "soft-cream": "#FFFCF7",
        "charcoal-black": "#2B2B2B",
      },
    },
  },
  plugins: [],
};
