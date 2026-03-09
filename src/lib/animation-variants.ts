// Shared Motion variants — import these everywhere to keep animations consistent.
// All variants use S-tier properties only: transform + opacity (GPU compositor thread).

import type { Variants } from 'motion/react'

// ─── Scroll-reveal: fade up on enter viewport ───────────────────────────────
export const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

// ─── Stagger container: orchestrates children ───────────────────────────────
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

// ─── Stagger item: used as child of staggerContainer ────────────────────────
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

// ─── Word mask reveal: overflow-hidden parent + this child ──────────────────
export const wordReveal: Variants = {
  hidden: { y: '100%' },
  visible: {
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

// ─── Fade in only (no translate) ────────────────────────────────────────────
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

// ─── Fade up with custom delay support ──────────────────────────────────────
export const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
  },
})

// ─── Scale in (for badges, chips) ───────────────────────────────────────────
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
  },
}

// ─── Slide in from left ──────────────────────────────────────────────────────
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

// ─── Slide in from right ─────────────────────────────────────────────────────
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

// ─── Spring hover for cards ──────────────────────────────────────────────────
export const cardHover = {
  whileHover: { y: -8, scale: 1.015 },
  whileTap: { scale: 0.99 },
  transition: { type: 'spring' as const, stiffness: 350, damping: 28 },
}
