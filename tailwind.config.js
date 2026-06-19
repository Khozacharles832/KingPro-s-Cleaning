/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#D62828",
        secondary: "#1D3557",
        accent: "#F4A261",
        background: "#F8F9FA",
        text: "#111827",
        card: "#FFFFFF",

        textMuted: "#6B7280",

        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",

        border: "#E5E7EB",
      },
    },
  },
  plugins: [],
};
