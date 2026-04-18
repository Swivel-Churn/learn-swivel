import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f87941",
          50: "#FFBC85",
          100: "#FF8622",
          500: "#f87941",
          600: "#d95e28",
          700: "#d95e28",
          900: "#993314",
          hover: "#FF9151",
          pressed: "#d95e28",
          bg: "#FFBC85",
          focus: "#FF8622",
          border: "#FFB278",
        },
        secondary: {
          DEFAULT: "#2f3035",
          light: "#687280",
          "very-light": "#F7F7F7",
          dark: "#100f0d",
        },
        success: {
          main: "#56AE7D",
          hover: "#4A9A6D",
          pressed: "#3E8660",
          bg: "#E7FAF5",
          border: "#B5D0C9",
        },
        warning: {
          main: "#FFB34E",
          hover: "#E6A245",
          pressed: "#CC913D",
          bg: "#FFFDE7",
          border: "#FFF490",
        },
        error: {
          main: "#E96161",
          hover: "#D95555",
          pressed: "#C94949",
          bg: "#FFE8E8",
          border: "#E2B6B6",
        },
        info: {
          main: "#0023DD",
          hover: "#001DB8",
          pressed: "#001793",
          bg: "#EBEEFF",
          border: "#AAB6F4",
        },
        gray: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        elevation0: "none",
        elevation1: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        elevation2:
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        elevation3:
          "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "0.5rem",
        xl: "1rem",
        "2xl": "1rem",
      },
      spacing: {
        "4.5": "1.125rem",
        "18": "4.5rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
