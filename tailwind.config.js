/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        comic: ['"Comic Sans MS"', "cursive"],
      },
      animation: {
        scroll: "scroll 22s linear infinite",
        scroll2: "scroll 20s linear infinite",
        scrollSm: "scroll 20s linear infinite",
        scrollSmInspire: "scroll 8s linear infinite",
        fadeIn: "fadeIn 3s ease-out",
        marquee: "marquee 12s linear infinite",
        slideIn: "slideIn 1s ease-out",
        scrollGallery: "scrollGallery 30s linear infinite",
        "slow-spin": "spin 10s linear infinite", // slow spin (15s ek round)
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(20%)" },
          "100%": { transform: "translateX(-200%)" },
        },
        scroll2: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scrollSm: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollSmInspire: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-400%)" },
        },
        fadeIn: {
          "0%": { opacity: 1, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideIn: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scrollGallery: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },

      transform: {
        "rotate-y-180": "rotateY(180deg)",
      },
      perspective: {
        DEFAULT: "1000px",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
    },
  },
  plugins: [],
};
