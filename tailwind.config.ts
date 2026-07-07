import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "var(--color-ink)",
          soft: "var(--color-ink-soft)",
        },
        surface: {
          DEFAULT: "var(--color-surface)",
          raised: "var(--color-surface-raised)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          soft: "var(--color-border-soft)",
        },
        text: {
          primary: "var(--color-text-primary)",
          muted: "var(--color-text-muted)",
          dim: "var(--color-text-dim)",
        },
        amber: {
          DEFAULT: "var(--color-amber)",
          soft: "var(--color-amber-soft)",
        },
        teal: {
          DEFAULT: "var(--color-teal)",
          soft: "var(--color-teal-soft)",
        },
        "on-accent": "var(--color-on-accent)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        "hero-sm": ["2.75rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        hero: ["5.5rem", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
      },
      maxWidth: {
        content: "1180px",
      },
      transitionTimingFunction: {
        signal: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        scan: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "0% 200%" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
        "ticker-up": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      animation: {
        blink: "blink 1.1s step-start infinite",
        "ticker-up": "ticker-up 22s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
