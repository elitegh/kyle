"use client";

import { motion } from "framer-motion";
import { about } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { ProfileAvatar } from "./ProfileAvatar";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="About"
          title="Building with heart & precision"
          subtitle="Every project is a canvas — here's a bit about my journey."
        />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex justify-center lg:justify-start"
          >
            <ProfileAvatar size="about" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-lg text-fg-muted leading-relaxed">
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-3 grid gap-4"
          >
            {about.highlights.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="glass-strong rounded-2xl p-6 glow-ring group cursor-default"
              >
                <p className="font-display text-4xl font-bold text-gradient mb-1">{stat.value}</p>
                <p className="text-sm text-fg-muted group-hover:text-fg/80 transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
