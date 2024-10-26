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
        ubuntu: ['Ubuntu, Arial, Helvetica, sans-serif'],
        usuzi: ['Usuzi, Arial, Helvetica, sans-serif'],
        usuziexpand: ['UsuziExpand, Arial, Helvetica, sans-serif']
      },
      width: {
        pad: ['calc(105% + 30px)']
      },
      translate: {
        pad: ['calc(5% + 13px)']
      },
    },
  },
  plugins: [],
};
