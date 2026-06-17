"use client";

import { motion } from "framer-motion";
import { site } from "@/data/portfolio";
import { GradientButton } from "./GradientButton";
import { ProfileAvatar } from "./ProfileAvatar";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-28 pb-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          <motion.div variants={container} initial="hidden" animate="show" className="text-center lg:text-left">
            <motion.div variants={item} className="mb-6 flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-fg-muted">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400" />
                </span>
                Available for new projects
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight mb-6"
            >
              <span className="block text-fg">Hi, I&apos;m</span>
              <span className="block text-gradient-warm mt-1">{site.name}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="font-display text-2xl md:text-3xl text-fg/80 font-medium mb-4"
            >
              {site.title}
            </motion.p>

            <motion.p
              variants={item}
              className="text-lg md:text-xl text-fg-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10"
            >
              {site.tagline}
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <GradientButton href="#work">See my work</GradientButton>
              <GradientButton href="#contact" variant="secondary">
                Get in touch
              </GradientButton>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-16 lg:mt-20 flex justify-center lg:justify-start"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <a
                href="#about"
                className="flex flex-col items-center gap-2 text-fg-muted/60 hover:text-fg-muted transition-colors"
                aria-label="Scroll to about"
              >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          <div className="flex justify-center order-first lg:order-last">
            <ProfileAvatar size="hero" />
          </div>
        </div>
      </div>

      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,600px)] h-[min(90vw,600px)] rounded-full pointer-events-none -z-[1] opacity-60"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(34,211,238,0.15), rgba(168,85,247,0.2), rgba(255,107,203,0.15), rgba(163,230,53,0.1), rgba(34,211,238,0.15))",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
}
