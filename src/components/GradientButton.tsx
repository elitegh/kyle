"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GradientButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

export function GradientButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  external,
}: GradientButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-transform duration-300 overflow-hidden group";

  const variants = {
    primary:
      "text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.03] active:scale-[0.98]",
    secondary:
      "text-fg/90 glass hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]",
    ghost: "text-fg-muted hover:text-fg hover:bg-black/5",
  };

  const inner = (
  <>
    {variant === "primary" && (
      <>
        <span className="absolute inset-0 bg-gradient-to-r from-glow-cyan via-glow-violet to-glow-pink bg-[length:200%_100%] animate-gradient-shift" />
        <span className="absolute inset-[1px] rounded-full bg-canvas/80 group-hover:bg-canvas/60 transition-colors" />
        <motion.span
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)",
            backgroundSize: "200% 100%",
          }}
          animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </>
    )}
    <span className="relative z-10 flex items-center gap-2">{children}</span>
  </>
  );

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileTap={{ scale: 0.97 }}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" onClick={onClick} className={classes} whileTap={{ scale: 0.97 }}>
      {inner}
    </motion.button>
  );
}
