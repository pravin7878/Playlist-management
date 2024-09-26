/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darklight: "#27272F",
        linkText: "#828293",
      },
    },
  },
  plugins: [],
};

