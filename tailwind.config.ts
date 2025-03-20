import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background-color)",
        secondBackground: "var(--second-background-color)",
        textColor: "var(--text-color)",
        blue: "var(--blue)",
        yellow: "var(--yellow)",
        shadows: "var(--shadows)",
        emailButton: "var(--email-button)",
        widgetTextColor: "var(--widget-text-color)",
        widgetBackground: "var(--widget-background-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;
