module.exports = {
  theme: {
    extend: {
      transformStyle: {
        "3d": "preserve-3d",
      },
      perspective: {
        1000: "1000px",
      },
      rotate: {
        15: "15deg",
        10: "10deg",
        180: "180deg",
      },
      translate: {
        z: {
          20: "20px",
        },
      },
      animation: {
        float: "float 6s infinite ease-in-out",
        gradient: "gradient 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
      },
    },
  },

  plugins: [
    function ({ addUtilities }: { addUtilities: (utilities: object) => void }) {
      const newUtilities = {
        ".scrollbar-hide": {
          /* Hide scrollbar for Chrome, Safari, and Opera */
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none", // IE and Edge
          "scrollbar-width": "none", // Firefox
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
