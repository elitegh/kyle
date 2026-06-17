import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "from-cyan-400",
    "to-blue-500",
    "from-violet-400",
    "to-purple-600",
    "from-pink-400",
    "to-rose-500",
    "from-lime-400",
    "to-emerald-500",
    "from-amber-400",
    "to-orange-500",
    "from-fuchsia-400",
    "to-violet-600",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050508",
        ink: "#0c0c14",
        mist: "#a8a8c0",
        glow: {
          pink: "#ff6bcb",
          violet: "#a855f7",
          cyan: "#22d3ee",
          lime: "#a3e635",
          orange: "#fb923c",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        body: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "mesh-gradient":
          "radial-gradient(at 40% 20%, rgba(168, 85, 247, 0.35) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(34, 211, 238, 0.25) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(255, 107, 203, 0.2) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(163, 230, 53, 0.15) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(251, 146, 60, 0.2) 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;
