module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FAFAFA',
        'ocean': '#00A5E9',
        'poolblue': '#01ACE9',
        'cyan': '#00FDE0',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}