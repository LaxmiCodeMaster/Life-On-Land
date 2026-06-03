import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        danger: "#ef4444",
        endangered: "#f97316",
        caution: "#facc15",
        habitat: "#22c55e",
        water: "#3b82f6"
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top, rgba(34,197,94,0.2), transparent 55%), linear-gradient(135deg, rgba(3,7,18,0.95), rgba(2,6,23,0.85))"
      },
      boxShadow: {
        glass: "0 8px 30px rgba(2, 6, 23, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
