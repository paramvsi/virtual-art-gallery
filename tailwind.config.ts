import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-br": "linear-gradient(to bottom right, #210D4F, #230E56)",
        "custom-gradient":
          "linear-gradient(to bottom, #29115A 0%, #49215E 50%, #80345A 83%, #AC434E 94%)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Use for body text
        serif: ["Merriweather", "serif"], // Use for headings
      },
    },
  },
  plugins: [],
} satisfies Config;
