"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { GradientButton } from "./GradientButton";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="work" className="relative py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Work"
          title="Selected projects"
          subtitle="A glimpse into worlds I've helped bring to life."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative glass-strong rounded-3xl overflow-hidden glow-ring"
            >
              <div
                className={cn(
                  "absolute inset-0 opacity-20 group-hover:opacity-35 transition-opacity duration-500 bg-gradient-to-br",
                  project.gradient
                )}
              />
              <div className="relative p-8 md:p-10 flex flex-col h-full min-h-[320px]">
                <div
                  className={cn(
                    "w-14 h-14 rounded-2xl mb-6 bg-gradient-to-br shadow-lg",
                    project.gradient
                  )}
                />
                <h3 className="font-display text-2xl md:text-3xl font-bold text-fg mb-3 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-fg-muted leading-relaxed flex-grow mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-black/5 text-fg-muted border border-[var(--glass-border)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <GradientButton href={project.link} variant="secondary" className="self-start">
                  View project →
                </GradientButton>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
