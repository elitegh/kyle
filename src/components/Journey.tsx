"use client";

import { motion } from "framer-motion";
import { education, experience } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Journey() {
  return (
    <section id="journey" className="relative py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Journey"
          title="Experience and education"
          subtitle="A quick timeline of where I have built and grown."
        />

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 space-y-4">
            {experience.map((role, i) => (
              <motion.article
                key={`${role.company}-${role.period}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="glass-strong rounded-2xl p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl text-fg">{role.company}</h3>
                    <p className="text-fg-muted">{role.location}</p>
                  </div>
                  <span className="text-sm px-3 py-1 rounded-full bg-black/5 border border-[var(--glass-border)] text-fg-muted">
                    {role.period}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 h-fit"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-glow-cyan mb-3">Education</p>
            <h3 className="font-display text-2xl text-fg mb-2">{education.degree}</h3>
            <p className="text-fg-muted">{education.school}</p>
            <p className="text-fg-muted">{education.period}</p>
            <p className="text-fg-muted mt-2">{education.location}</p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
