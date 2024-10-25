/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        faded: "var(--faded)"
      },
      fontFamily: {
        airstrip: ['Airstrip, Arial, Helvetica, sans-serif'],
        sofachrome: ['Sofachrome, Arial, Helvetica, sans-serif'],
        ubuntu: ['Ubuntu, Arial, Helvetica, sans-serif'],
      },
      width: {
        pad: ['calc(110% + 20px)']
      },
      translate: {
        pad: ['calc(5% + 10px)']
      },
    },
  },
  plugins: [],
};
