"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

type Skill = (typeof skills)[number];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(trackRef, {
    once: true,
    amount: 0.5,
    margin: "0px 0px -40px 0px",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="glass rounded-2xl p-6 group"
    >
      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold text-fg group-hover:text-gradient transition-all">
          {skill.name}
        </span>
        <span className="text-sm text-fg-muted font-mono">{skill.level}%</span>
      </div>

      <div
        ref={trackRef}
        className="h-2 w-full rounded-full bg-black/10 overflow-hidden"
        role="progressbar"
        aria-valuenow={skill.level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${skill.name} proficiency`}
      >
        <div
          className={cn(
            "h-full rounded-full bg-gradient-to-r will-change-[width]",
            skill.color
          )}
          style={{
            width: isInView ? `${skill.level}%` : "0%",
            transition: "width 1.25s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I love to wield"
          subtitle="A stack tuned for speed, beauty, and maintainability."
        />

        <div className="grid sm:grid-cols-2 gap-5">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
