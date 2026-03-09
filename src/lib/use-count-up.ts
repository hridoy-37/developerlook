'use client'
// RAF-based count-up hook. Uses a ref to write directly to the DOM —
// intentionally avoids useState so React reconciliation never fires per frame.

import { useRef, useEffect } from 'react'
import { useInView } from 'motion/react'

export function useCountUp(target: number, duration = 1800) {
  const ref = useRef<HTMLSpanElement>(null)
  // once: true — only triggers once when the element enters the viewport
  const inView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!inView || !ref.current) return

    const el = ref.current
    const start = performance.now()

    const update = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      // Ease-out-cubic: decelerate at the end for a satisfying feel
      const eased = 1 - Math.pow(1 - progress, 3)
      // Direct DOM mutation — no React re-render triggered
      el.textContent = Math.round(eased * target).toString()
      if (progress < 1) requestAnimationFrame(update)
    }

    requestAnimationFrame(update)
  }, [inView, target, duration])

  return ref
}
