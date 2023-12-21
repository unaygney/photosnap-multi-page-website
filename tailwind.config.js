/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-grey": "#DFDFDF",
        customGradient: {
          start: "#FFC593",
          middle: "#BC7198",
          end: "#5A77FF",
        },
      },
      backgroundImage: (theme) => ({
        "beta-mobile": "url('/bg-beta-mobile.jpg')",
        "beta-tablet": "url('/bg-beta-tablet.jpg')",
        "beta-desktop": "url('/bg-beta-desktop.jpg')",
        "custom-gradient": `linear-gradient(27deg, ${theme(
          "colors.customGradient.start"
        )} 0%, ${theme("colors.customGradient.middle")} 43.29%, ${theme(
          "colors.customGradient.end"
        )} 83.33%)`,
      }),
    },
  },
  plugins: [],
};
