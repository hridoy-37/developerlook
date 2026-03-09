'use client'
// 'use client' — uses hooks, event listeners, scroll detection, AnimatePresence

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { m, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react'
import {
  Menu,
  X,
  ChevronDown,
  Code2,
  Smartphone,
  Palette,
  TrendingUp,
  Globe,
  ShoppingCart,
  Layers,
  Zap,
} from 'lucide-react'

const services = [
  { label: 'Web Development', icon: Code2, href: '#services' },
  { label: 'Mobile Apps', icon: Smartphone, href: '#services' },
  { label: 'UI/UX Design', icon: Palette, href: '#services' },
  { label: 'Digital Marketing', icon: TrendingUp, href: '#services' },
  { label: 'SEO Optimization', icon: Globe, href: '#services' },
  { label: 'E-Commerce', icon: ShoppingCart, href: '#services' },
  { label: 'SaaS Products', icon: Layers, href: '#services' },
  { label: 'Performance Audits', icon: Zap, href: '#services' },
]

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Services', href: '#services', hasMega: true },
  { label: 'Blog', href: '#blog' },
]

export default function Navbar() {
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const megaRef = useRef<HTMLDivElement>(null)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious() ?? 0
    setHidden(latest > 80 && latest > prev)
  })

  // Keyboard: Escape closes mega/mobile
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMegaOpen(false)
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Close mega menu on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMegaOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <m.header
      ref={navRef}
      animate={{ y: hidden ? -80 : 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-white/10"
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between" role="navigation" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">
          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
            <Code2 size={16} className="text-black" />
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            Developer<span className="text-white/60">Look</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.hasMega ? (
                <button
                  onClick={() => setMegaOpen((v) => !v)}
                  aria-expanded={megaOpen}
                  aria-haspopup="true"
                  className="flex items-center gap-1 px-4 py-2 text-sm text-white/70 hover:text-white
                             transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2
                             focus-visible:ring-white rounded-md min-h-[44px]"
                >
                  {link.label}
                  <m.span animate={{ rotate: megaOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={14} />
                  </m.span>
                </button>
              ) : (
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors duration-200
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md
                             min-h-[44px] flex items-center"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="#contact"
            className="text-sm text-white/60 hover:text-white transition-colors duration-200 min-h-[44px] flex items-center"
          >
            Contact
          </Link>
          <m.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-full
                       hover:bg-white/90 transition-colors min-h-[44px] flex items-center
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Let's Talk
          </m.a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden p-2 text-white/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <m.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X size={22} />
              </m.span>
            ) : (
              <m.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Menu size={22} />
              </m.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mega menu */}
      <AnimatePresence>
        {megaOpen && (
          <m.div
            ref={megaRef}
            initial={{ opacity: 0, y: -8, scaleY: 0.97 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.97 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'top' }}
            className="absolute top-full left-0 w-full bg-[#0f0f0f]/95 backdrop-blur-xl
                       border-b border-white/10 px-8 py-8"
            role="menu"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
              {services.map((service) => (
                <m.a
                  key={service.label}
                  href={service.href}
                  role="menuitem"
                  onClick={() => setMegaOpen(false)}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5
                             text-white/60 hover:text-white transition-colors duration-200
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
                             min-h-[44px]"
                >
                  <service.icon size={18} className="shrink-0" />
                  <span className="text-sm font-medium">{service.label}</span>
                </m.a>
              ))}
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/60 z-[90] lg:hidden"
              aria-hidden="true"
            />
            {/* Drawer */}
            <m.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-[#0f0f0f] z-[100] p-8 flex flex-col lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between mb-10">
                <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-white rounded-md flex items-center justify-center">
                    <Code2 size={14} className="text-black" />
                  </div>
                  <span className="text-white font-bold text-base">DeveloperLook</span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-white/60 hover:text-white min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <X size={20} />
                </button>
              </div>

              <ul className="flex flex-col gap-1 flex-1" role="list">
                {[...navLinks, { label: 'Contact', href: '#contact' }].map((link, i) => (
                  <m.li
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 px-2 text-lg text-white/70 hover:text-white transition-colors
                                 border-b border-white/[0.06] min-h-[44px] flex items-center"
                    >
                      {link.label}
                    </Link>
                  </m.li>
                ))}
              </ul>

              <m.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="mt-8 bg-white text-black font-semibold text-center py-3.5 rounded-full min-h-[44px] flex items-center justify-center"
              >
                Let's Talk
              </m.a>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </m.header>
  )
}
