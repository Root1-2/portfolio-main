/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
      },
      keyframes: {
        updown: {
          "0%": { transform: "translateY(-20px)" },
          "50%": { transform: "translateY(20px)" },
          "100%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        updown: "updown 3s linear infinite",
      },
    },
  },
  plugins: [],
};
