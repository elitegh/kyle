"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
    >
      <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-glow-cyan mb-4">
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-fg mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-fg-muted text-lg leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}
