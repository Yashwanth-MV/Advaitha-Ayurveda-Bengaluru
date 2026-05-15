import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sage: {
          50: "#f4f7f2",
          100: "#e6ede2",
          200: "#cddcc5",
          300: "#a8c49c",
          400: "#7ea66e",
          500: "#5d8a4f",
          600: "#496e3d",
          700: "#3a5731",
          800: "#30472a",
          900: "#293b24",
        },
        cream: {
          50: "#fdfcf8",
          100: "#f9f6ee",
          200: "#f2ead8",
          300: "#e8d9ba",
        },
        dark: "#1c1f1a",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
