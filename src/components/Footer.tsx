"use client";

import { motion } from "framer-motion";
import { site } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 border-t border-[var(--glass-border)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-fg-muted">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © {year}{" "}
          <span className="text-fg font-medium">{site.name}</span>. Crafted with motion &
          color.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gradient font-semibold"
        >
          Made with Next.js + Framer Motion
        </motion.p>
      </div>
    </footer>
  );
}
