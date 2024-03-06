/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        mainBlob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "25%": { transform: "translate(50px, 55px) scale(1.01)" },
          "50%": { transform: "translate(-25px, 20px) scale(1)" },
          "75%": { transform: "translate(-5px, -5px) scale(0.98)" },
        },
        mainBlob2: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "25%": { transform: "translate(-50px, 0px) scale(1.01)" },
          "50%": { transform: "translate(-30px, -50px) scale(1)" },
          "75%": { transform: "translate(-15px, 20px) scale(0.98)" },
        },
        mainBlob3: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "25%": { transform: "translate(50px, 0px) scale(1.01)" },
          "50%": { transform: "translate(-20px, 20px) scale(1)" },
          "75%": { transform: "translate(-50px, -5px) scale(0.98)" },
        },
        heroBlob: {
          "0%, 100%": {
            "border-radius": "60% 40% 30% 70%/ 60% 30% 70% 40%",
          },
          "25%": { "border-radius": "45% 50% 50% 55%/ 55% 45% 50% 30%" },
          "50%": { "border-radius": "30% 60% 70% 40%/ 50% 60% 30% 40%" },
          "75%": { "border-radius": "45% 50% 50% 55%/ 55% 45% 50% 30%" },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "15%": { transform: "rotate(14.0deg)" },
          "30%": { transform: "rotate(-8.0deg)" },
          "40%": { transform: "rotate(14.0deg)" },
          "50%": { transform: "rotate(-4.0deg)" },
          "60%": { transform: "rotate(10.0deg)" },
          "70%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        wiggle: {
          "0%": { transform: "translateY(0px)" },
          "10%": { transform: "translateY(30px) rotate(10deg)" },
          "20%": { transform: "translateY(60px) rotate(20deg)" },
          "30%": { transform: "translateY(90px) rotate(30deg)" },
          "40%": { transform: "translateY(120px) rotate(20deg)" },
          "50%": { transform: "translateY(150px) rotate(30deg)" },
          "60%": { transform: "translateY(120px) rotate(40deg)" },
          "70%": { transform: "translateY(90px) rotate(10deg)" },
          "80%": { transform: "translateY(60px) rotate(20deg)" },
          "90%": { transform: "translateY(30px) rotate(10deg)" },
          "100%": { transform: "translateY(0px)" },
        },
        hero: {
          "25%": { transform: "rotate(-0.01turn)" },
          "50%": { transform: "rotate(0.01turn)" },
          "75%": { transform: "rotate(-0.01turn)" },
          "100%": { transform: "rotate(0.01turn)" },
        },
      },
      animation: {
        text: "text 5s ease infinite",
        mainBlob1: "mainBlob 12s ease infinite",
        mainBlob2: "mainBlob2 8s ease alternate-reverse infinite",
        mainBlob3: "mainBlob3 8s ease alternate infinite",
        heroBlob: "heroBlob 20s linear alternate-reverse infinite",
        handWave: "wave 1.5s infinte",
        wiggle: "wiggle 10s linear infinite",
        hero: "5s infinite 0.1s hero",
      },

      fontFamily: {
        space: ["Space Mono", "monospace", "sans-serif"],
        deca: ["Lexend Deca", "Inter", "sans-serif"],
        app: ["Homemade Apple", "cursive"],
        out: ["Outfit", "Inter", "sans-serif"],
        syne: ["Syne", "sans-serif"],
        gloria: ["Gloria Hallelujah", "cursive"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
