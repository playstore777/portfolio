import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      backgroundImage: {
        "radial-gradient-circle":
          "radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to))",
      },
      cursor: {
        shh: "url('/shushing-face.svg'), pointer",
      },
      transform: {
        "rotate-x-69": "rotateX(69deg)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
      animation: {
        "scroll-left": "scroll-left 1s linear infinite",
        "scroll-right": "scroll-left 1s linear reverse infinite",
        flicker: "flicker 0.2s infinite alternate",
        "flicker-rotated": "flicker-rotated 0.2s infinite alternate",
        dash: "dash 7s linear",
        opacity: "opacity 1s ease-in-out",
        "change-background": "change-background 3s linear",
        "expand-body": "expand-body 3s linear",
        "stick-animation": "stick-animation 3s linear",
        "blink-eyes": "blink-eyes 3s linear",
        uff: "uff 3s linear",
        "move-left": "move-left 3s linear",
        "move-top": "move-top 3s linear",
        "shake-left": "shake-left 3s linear",
        "changeto-lower": "changeto-lower 3s linear",
        "changeto-greater": "changeto-greater 3s linear",
        "expand-light": "expand-light 3s linear",
        "dance-fire": "dance-fire 3s linear",
        hop: "hop 0.7s linear infinite",
        "show-text": "show-text 0.7s linear infinite",
        "blink-normal": "blink-normal 1s ease-in-out infinite",
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        flicker: {
          "0%": {
            transform: "translateX(-50%) scale(1)",
            opacity: "0.9",
          },
          "100%": {
            transform: "translateX(-50%) scale(1.1)",
            opacity: "1",
          },
        },
        "flicker-rotated": {
          "0%": {
            transform: "translateX(-50%) rotate(90deg) scale(1)",
            opacity: "0.9",
          },
          "100%": {
            transform: "translateX(-50%) rotate(90deg) scale(1.1)",
            opacity: "1",
          },
        },
        dash: {
          from: {
            "stroke-dashoffset": "3000",
            fill: "none",
          },
          to: {
            "stroke-dashoffset": "0",
            fill: "url(#logo-gradient)",
          },
        },
        opacity: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        "blink-eyes": {
          "0%, 35%": {
            opacity: "1",
            transform: "translate(-70%, 0%)",
          },
          "36%, 39%": {
            opacity: "0",
            transform: "translate(-70%, 0%)",
          },
          "40%": {
            opacity: "1",
            transform: "translate(-70%, 0%)",
          },
          "50%, 65%": {
            transform: "translate(-140%, 0%)",
          },
          "66%": {
            transform: "translate(-70%, 0%)",
          },
        },
        "expand-body": {
          "0%, 40%": {
            transform: "scale(1, 1) translate(60%, -25%)",
          },
          "45%, 55%": {
            transform: "scale(1.1, 1.1) translate(60%, -28%)",
          },
          "60%": {
            transform: "scale(0.89, 0.89) translate(60%, -25%)",
          },
          "65%": {
            transform: "scale(1, 1) translate(60%, -25%)",
          },
          "70%": {
            transform: "scale(0.95, 0.95) translate(60%, -25%)",
          },
          "75%": {
            transform: "scale(1, 1) translate(60%, -25%)",
          },
        },
        uff: {
          "0%, 40%": {
            width: "0px",
            height: "0px",
          },
          "50%, 54%": {
            width: "15px",
            height: "15px",
            left: "30%",
          },
          "59%": {
            width: "5px",
            height: "5px",
            left: "20%",
          },
          "62%": {
            width: "2px",
            height: "2px",
            left: "20%",
          },
          "67%": {
            width: "0px",
            height: "0px",
            left: "30%",
          },
        },
        "change-background": {
          "0%, 59%": {
            background: "#fff",
          },
          "100%": {
            background: "#000",
          },
        },
        "move-left": {
          "0%": {
            width: "0px",
            left: "40%",
          },
          "59%": {
            width: "0px",
            left: "40%",
          },
          "60%": {
            width: "30px",
            left: "30%",
          },
          "68%": {
            width: "0px",
            left: "20%",
          },
        },
        "move-top": {
          "0%": {
            width: "0px",
            height: "0px",
            top: "0%",
          },
          "64%": {
            width: "0px",
            height: "0px",
            top: "0%",
          },
          "65%": {
            width: "10px",
            height: "10px",
            top: "40%",
            left: "40%",
          },
          "80%": {
            width: "0px",
            height: "0px",
            top: "20%",
          },
        },
        "shake-left": {
          "0%, 40%": {
            left: "20%",
            transform: "translate(60%, -15%)",
          },
          "50%, 54%": {
            left: "20%",
            transform: "translate(60%, -15%)",
          },
          "59%": {
            left: "20%",
            transform: "translate(60%, -15%)",
          },
          "62%": {
            left: "18%",
            transform: "translate(60%, -15%)",
          },
          "65%": {
            left: "21%",
            transform: "translate(60%, -15%)",
          },
          "67%": {
            left: "20%",
            transform: "translate(60%, -15%)",
          },
          "75%": {
            left: "20%",
            transform: "scale(1.15, 0.85) translate(60%, -15%)",
            background: "#fff",
            "border-color": "#673c63",
          },
          "91%": {
            left: "20%",
            transform: "scale(1.18, 0.82) translate(60%, -10%)",
            background: "#f44336",
            "border-color": "#f44336",
            "box-shadow": "-2px 0px 0px #f44336 inset",
          },
          "92%": {
            left: "20%",
            transform: "scale(0.85, 1.15) translate(60%, -15%)",
          },
          "95%": {
            left: "20%",
            transform: "scale(1.05, 0.95) translate(60%, -15%)",
          },
          "97%": {
            left: "20%",
            transform: "scale(1, 1) translate(60%, -15%)",
          },
        },
        "stick-animation": {
          "0%, 59%": {
            left: "50%",
            top: "0%",
            transform: "translate(-50%, -100%)",
          },
          "62%": {
            left: "50%",
            top: "0%",
            transform: "rotateZ(-15deg) translate(-50%, -100%)",
          },
          "65%": {
            left: "50%",
            top: "0%",
            transform: "rotateZ(15deg) translate(-50%, -100%)",
          },
          "70%": {
            left: "50%",
            top: "0%",
            transform: "rotateZ(-5deg) translate(-50%, -100%)",
          },
          "72%": {
            left: "50%",
            top: "0%",
            transform: "rotateZ(5deg) translate(-50%, -100%)",
          },
          "74%, 84%": {
            left: "50%",
            top: "0%",
            transform: "rotateZ(0deg) translate(-50%, -100%)",
          },
        },
        "expand-light": {
          "10%, 29%, 59%": {
            transform: "translate(-25%, -50%) scale(0, 0)",
            border: "2px solid rgba(255, 255, 255, 0)",
          },
          "90%": {
            transform: "translate(-25%, -50%) scale(1, 1)",
          },
          "95%, 96%": {
            transform: "translate(-25%, -50%) scale(2, 2)",
            border: "2px solid rgba(255, 255, 255, 0.5)",
          },
          "0%, 28%, 58%": {
            transform: "translate(-25%, -50%) scale(2.5, 2.5)",
            border: "2px solid rgba(255, 255, 255, 0.2)",
          },
        },
        "dance-fire": {
          "59%": {
            left: "38%",
            width: "0px",
            height: "0px",
          },
          "0%": {
            left: "38.8%",
            width: "16px",
            height: "20px",
            background: "#ffc107",
          },
          "7%": {
            left: "38.8%",
            width: "16px",
            height: "20px",
            background: "#ffc107",
          },
          "15%": {
            left: "38.8%",
            width: "16px",
            height: "20px",
            background: "#ffc107",
          },
          "23%": {
            left: "38.8%",
            width: "16px",
            height: "20px",
            background: "#ffc107",
          },
          "31%": {
            left: "38.8%",
            width: "16px",
            height: "20px",
            background: "#ffc107",
          },
          "39%": {
            left: "38.8%",
            width: "16px",
            height: "20px",
            background: "#ffc107",
          },
          "47%": {
            left: "38.8%",
            width: "16px",
            height: "20px",
            background: "#ffc107",
          },
          "55%": {
            left: "39.2%",
            width: "16px",
            height: "20px",
            background: "#ff9800",
          },
          "3%": {
            left: "39.2%",
            width: "16px",
            height: "20px",
            background: "#ff9800",
          },
          "11%": {
            left: "39.2%",
            width: "16px",
            height: "20px",
            background: "#ff9800",
          },
          "19%": {
            left: "39.2%",
            width: "16px",
            height: "20px",
            background: "#ff9800",
          },
          "27%": {
            left: "39.2%",
            width: "16px",
            height: "20px",
            background: "#ff9800",
          },
          "35%": {
            left: "39.2%",
            width: "16px",
            height: "20px",
            background: "#ff9800",
          },
          "43%": {
            left: "39.2%",
            width: "16px",
            height: "20px",
            background: "#ff9800",
          },
          "51%": {
            left: "39.2%",
            width: "16px",
            height: "20px",
            background: "#ff9800",
          },
          "58%": {
            left: "39.2%",
            width: "16px",
            height: "20px",
            background: "#ff9800",
          },
        },
        "changeto-lower": {
          "0%, 70%": {
            padding: "0px",
            display: "inline-block",
            borderRadius: "100%",
            background: "#673c63",
            borderWidth: "0 0 0 0",
            border: "0px solid #673c63",
            transform: "translate(-90%, 0%)",
          },
          "71%, 89%": {
            background: "none",
            border: "solid #673c63",
            borderRadius: "0px",
            borderWidth: "0 2px 2px 0",
            display: "inline-block",
            padding: "1px",
            transformOrigin: "bottom left",
            transform: "rotate(-45deg) translate(-50%, -65%)",
            WebkitTransform: "rotate(-45deg) translate(-50%, -65%)",
          },
        },
        "changeto-greater": {
          "0%, 70%": {
            top: "50%",
            padding: "0px",
            display: "inline-block",
            borderRadius: "100%",
            background: "#673c63",
            borderWidth: "0 0 0 0",
            border: "0px solid #673c63",
            transform: "translate(-80%, 0%)",
          },
          "71%, 89%": {
            top: "30%",
            background: "none",
            border: "solid #673c63",
            borderRadius: "0px",
            borderWidth: "0 2px 2px 0",
            display: "inline-block",
            padding: "1px",
            transformOrigin: "bottom left",
            transform: "rotate(135deg) translate(-80%, 20%)",
            WebkitTransform: "rotate(135deg) translate(-80%, 20%)",
          },
        },
        hop: {
          "0%": {
            transform: "translateY(4px)",
          },
          "25%": {
            transform: "translateY(-15px)",
          },
          "35%": {
            transform: "translateY(-30px)",
          },
          "65%": {
            transform: "translateY(-30px)",
          },
          "75%": {
            transform: "translateY(-15px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "show-text": {
          "0%, 25%, 75%, 100%": {
            opacity: "0",
          },
          "30%, 70%": {
            opacity: "1",
          },
        },
        "blink-normal": {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, any>) => void;
    }) {
      addUtilities({
        ".rotate-x-69": {
          transform: "rotateX(69deg)",
        },
      });
    },
  ],
};

export default config;
