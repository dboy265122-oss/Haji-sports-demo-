/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0A",
          900: "#0A0A0A",
          800: "#141414",
          700: "#1F1F1F",
          600: "#2B2B2B",
        },
        charcoal: {
          DEFAULT: "#1A1A1A",
          light: "#3A3A3A",
          soft: "#6B6B6B",
        },
        accent: {
          DEFAULT: "#FFC400",
          400: "#FFD24D",
          500: "#FFC400",
          600: "#E0AB00",
        },
        mist: {
          DEFAULT: "#F5F5F4",
          100: "#FAFAF9",
          200: "#F5F5F4",
          300: "#ECECEA",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
      },
      fontSize: {
        hero: ["clamp(3rem, 8vw, 7.5rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        display: ["clamp(2.25rem, 5vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        h2: ["clamp(1.75rem, 3.5vw, 3rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
        premium: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      maxWidth: {
        content: "1440px",
      },
    },
  },
  plugins: [],
};
