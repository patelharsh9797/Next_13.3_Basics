/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
      },
      center: true,
    },
    extend: {
      container: {},
      gridTemplateColumns: {
        fluid: "repeat(auto-fill,minmax(25rem,1fr))",
      },
    },
  },
  plugins: [],
};
