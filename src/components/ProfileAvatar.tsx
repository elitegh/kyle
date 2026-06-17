"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/data/portfolio";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function ProfileAvatar({ size = "hero" }: { size?: "hero" | "about" }) {
  const [imgError, setImgError] = useState(false);
  const dimensions = size === "hero" ? { outer: 280, inner: 256 } : { outer: 220, inner: 200 };
  const showImage = site.profileImage && !imgError;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="relative mx-auto flex-shrink-0"
      style={{ width: dimensions.outer, height: dimensions.outer }}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, #22d3ee, #a855f7, #ff6bcb, #a3e635, #fb923c, #22d3ee)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute inset-[3px] rounded-full bg-canvas" />

      <motion.div
        className="absolute inset-[6px] rounded-full overflow-hidden glow-ring"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {showImage ? (
          <Image
            src={site.profileImage}
            alt={`Portrait of ${site.name}`}
            width={dimensions.inner}
            height={dimensions.inner}
            className="object-cover w-full h-full"
            priority={size === "hero"}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-glow-violet/30 via-glow-cyan/20 to-glow-pink/30">
            <span className="font-display text-5xl font-bold text-gradient">
              {getInitials(site.name)}
            </span>
          </div>
        )}
      </motion.div>

      <motion.span
        className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-gradient-to-br from-lime-400 to-emerald-500 border-4 border-canvas flex items-center justify-center text-lg shadow-lg"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-hidden
      >
        ✦
      </motion.span>
    </motion.div>
  );
}
