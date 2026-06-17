"use client";

import { motion } from "framer-motion";
import { site } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { GradientButton } from "./GradientButton";

const socialIcons = [
  {
    name: "GitHub",
    href: site.social.github,
    icon: (
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    ),
  },
  {
    name: "LinkedIn",
    href: site.social.linkedin,
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.062 2.062 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  },
  {
    name: "X",
    href: site.social.twitter,
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
  },
].filter((social) => Boolean(social.href));

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Contact"
          title="Let's create something extraordinary"
          subtitle="Have a project in mind? I'd love to hear about it."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-strong rounded-3xl p-10 md:p-14 text-center glow-ring relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-glow-violet/10 via-transparent to-glow-cyan/10 pointer-events-none" />

          <div className="relative">
            <p className="text-fg-muted mb-2">{site.location}</p>
            <a
              href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
              className="text-fg-muted hover:text-fg transition-colors block mb-2"
            >
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="font-display text-3xl md:text-4xl font-bold text-gradient hover:opacity-90 transition-opacity block mb-10"
            >
              {site.email}
            </a>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <GradientButton href={`mailto:${site.email}`}>Send an email</GradientButton>
              <GradientButton href={site.social.github} variant="secondary" external>
                View GitHub
              </GradientButton>
            </div>

            <div className="flex justify-center gap-4">
              {socialIcons.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-fg-muted hover:text-fg transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    {social.icon}
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
