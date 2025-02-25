// tailwind.config.js
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
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
};
