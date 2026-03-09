'use client'
// 'use client' — uses useMotionValue, useSpring, useMotionTemplate (Motion MotionValues)
// GPU-accelerated: only animates opacity + transform, no layout properties.
// Hidden on touch devices to avoid unnecessary overhead.

import { useState, useEffect } from 'react'
import { m, useMotionValue, useSpring, useMotionTemplate } from 'motion/react'

export default function CursorGlow() {
  const [isTouch, setIsTouch] = useState(true)

  const cursorX = useMotionValue(-600)
  const cursorY = useMotionValue(-600)

  // Low stiffness/damping creates a trailing lag — feels more organic
  const springX = useSpring(cursorX, { stiffness: 80, damping: 20, mass: 0.5 })
  const springY = useSpring(cursorY, { stiffness: 80, damping: 20, mass: 0.5 })

  const background = useMotionTemplate`radial-gradient(500px circle at ${springX}px ${springY}px, rgba(255,255,255,0.045), transparent 70%)`

  useEffect(() => {
    // Detect touch capability after hydration (avoids SSR mismatch)
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  useEffect(() => {
    if (isTouch) return
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    // passive: true — critical for scroll performance (mousemove won't block scroll)
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [isTouch, cursorX, cursorY])

  if (isTouch) return null

  return (
    <m.div
      className="pointer-events-none fixed inset-0 z-30"
      style={{ background }}
      aria-hidden="true"
    />
  )
}
