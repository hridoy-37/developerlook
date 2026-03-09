'use client'
// Per-page transition wrapper (runs on every App Router navigation).
// Uses template.tsx NOT layout.tsx — layout.tsx persists across navigations.
// S-tier: only animates opacity + transform (GPU compositor thread).

import { m } from 'motion/react'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </m.div>
  )
}
