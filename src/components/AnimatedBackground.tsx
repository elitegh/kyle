"use client";

import { motion } from "framer-motion";

const orbs = [
  { color: "rgba(168, 85, 247, 0.5)", size: 480, x: "10%", y: "15%", duration: 22 },
  { color: "rgba(34, 211, 238, 0.4)", size: 380, x: "75%", y: "10%", duration: 18 },
  { color: "rgba(255, 107, 203, 0.35)", size: 420, x: "60%", y: "55%", duration: 25 },
  { color: "rgba(163, 230, 53, 0.25)", size: 320, x: "5%", y: "65%", duration: 20 },
  { color: "rgba(251, 146, 60, 0.3)", size: 280, x: "85%", y: "70%", duration: 16 },
];

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none transition-opacity duration-500">
      <div className="absolute inset-0 bg-canvas" />
      <div className="absolute inset-0 bg-mesh-gradient mesh-layer transition-opacity duration-500" />

      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[100px] transition-opacity duration-500"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            opacity: "var(--orb-opacity)",
          }}
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="absolute inset-0 grid-bg opacity-60" />

      <motion.div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
        animate={{ opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="absolute inset-0 transition-[background] duration-500"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 0%, transparent 40%, var(--vignette) 100%)",
        }}
      />
    </div>
  );
}
