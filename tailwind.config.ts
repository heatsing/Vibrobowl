import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#061a33",
          900: "#082449",
          800: "#0B2D5C",
          700: "#0E3F7E"
        },
        electric: "#0066FF",
        steel: "#E7EEF7",
        graphite: "#243143"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono]
      },
      boxShadow: {
        industrial: "0 24px 70px rgba(8, 36, 73, 0.16)"
      },
      backgroundImage: {
        "industrial-grid": "linear-gradient(rgba(11,45,92,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(11,45,92,.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
