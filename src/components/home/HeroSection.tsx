'use client'
// 'use client' — uses useState, useEffect, AnimatePresence for word swap + carousel

import { useState, useEffect } from 'react'
import { m, AnimatePresence } from 'motion/react'
import { MessageCircle, ArrowRight, Star } from 'lucide-react'
import { staggerContainer, staggerItem, scaleIn, fadeUp } from '@/lib/animation-variants'
import Image from 'next/image'

const WORDS = ['Smart', 'Bold', 'Fast', 'Great'] as const

const carouselItems = [
  { label: 'Next.js', bg: '#111' },
  { label: 'React Native', bg: '#111' },
  { label: 'Tailwind CSS', bg: '#111' },
  { label: 'TypeScript', bg: '#111' },
  { label: 'Node.js', bg: '#111' },
  { label: 'Figma', bg: '#111' },
  { label: 'Supabase', bg: '#111' },
  { label: 'Vercel', bg: '#111' },
  { label: 'AWS', bg: '#111' },
  { label: 'GraphQL', bg: '#111' },
]

const avatars = [
  'https://placehold.co/40x40/222222/ffffff',
  'https://placehold.co/40x40/333333/ffffff',
  'https://placehold.co/40x40/2a2a2a/ffffff',
  'https://placehold.co/40x40/1a1a1a/ffffff',
]

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0)
  const [btnHovered, setBtnHovered] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % WORDS.length), 2800)
    return () => clearInterval(id)
  }, [])

  const words = ["Let's", 'Make', 'The', 'Next']

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] pt-16"
      aria-labelledby="hero-heading"
    >
      {/* Radial gradient bg glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
        {/* Left: main content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Trust badge */}
          <m.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3 mb-8 bg-white/5 border border-white/10
                       rounded-full px-4 py-2 backdrop-blur-sm"
          >
            <div className="flex -space-x-2">
              {avatars.map((src, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-[#0a0a0a] overflow-hidden bg-[#222] shrink-0"
                >
                  <Image
                    src={src}
                    alt={`Happy client ${i + 1}`}
                    width={28}
                    height={28}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white/70 text-xs font-medium">Loved by 150+ Startup Founders</span>
            </div>
          </m.div>

          {/* H1 with word-by-word reveal */}
          <h1
            id="hero-heading"
            className="text-[clamp(2.5rem,7vw,6rem)] font-bold tracking-tight leading-[1.05] mb-4"
          >
            <m.span
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-x-4 justify-center lg:justify-start"
            >
              {words.map((word) => (
                <span key={word} className="overflow-hidden inline-block">
                  <m.span variants={staggerItem} className="inline-block text-white">
                    {word}
                  </m.span>
                </span>
              ))}

              {/* Animated rotating word */}
              <span
                className="overflow-hidden inline-block relative"
                style={{ minWidth: '220px' }}
                aria-live="polite"
                aria-atomic="true"
              >
                <AnimatePresence mode="wait">
                  <m.span
                    key={WORDS[wordIndex]}
                    initial={{ y: '110%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-110%', opacity: 0 }}
                    transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    className="block bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent"
                  >
                    {WORDS[wordIndex]}
                  </m.span>
                </AnimatePresence>
              </span>
            </m.span>
          </h1>

          {/* Subtitle */}
          <m.p
            variants={fadeUp(0.5)}
            initial="hidden"
            animate="visible"
            className="text-[clamp(1rem,2vw,1.25rem)] text-white/50 max-w-lg leading-relaxed mb-8"
          >
            We design and build high-performance digital products — websites, apps, and SaaS tools
            that convert visitors into customers.
          </m.p>

          {/* Social proof row */}
          <m.div
            variants={fadeUp(0.65)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-6 mb-10"
          >
            {[
              { name: 'Trustpilot', rating: '4.9', reviews: '80+' },
              { name: 'Clutch', rating: '5.0', reviews: '40+' },
              { name: 'Upwork', rating: '4.8', reviews: '60+' },
            ].map((platform) => (
              <div key={platform.name} className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-white font-semibold text-sm">{platform.rating}</span>
                <span className="text-white/40 text-xs">
                  {platform.name} ({platform.reviews})
                </span>
              </div>
            ))}
          </m.div>

          {/* CTA buttons */}
          <m.div
            variants={fadeUp(0.75)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4 items-center"
          >
            <m.button
              onHoverStart={() => setBtnHovered(true)}
              onHoverEnd={() => setBtnHovered(false)}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="relative flex items-center gap-2.5 bg-white text-black font-semibold
                         px-6 py-3.5 rounded-full overflow-hidden min-h-[44px]
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {/* Icon swap */}
              <span className="relative w-5 h-5 flex items-center justify-center">
                <m.span
                  animate={{ x: btnHovered ? -4 : 0, opacity: btnHovered ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <MessageCircle size={16} />
                </m.span>
                <m.span
                  animate={{ x: btnHovered ? 0 : 12, opacity: btnHovered ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <ArrowRight size={16} />
                </m.span>
              </span>
              Let&apos;s Discuss
            </m.button>

            <m.a
              href="#portfolio"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium
                         transition-colors duration-200 min-h-[44px] px-2"
            >
              View our work
              <ArrowRight size={14} />
            </m.a>
          </m.div>
        </div>

        {/* Right: infinite scroll carousel of tech tags */}
        <m.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex flex-col gap-3 shrink-0 w-52 h-[480px] overflow-hidden
                     [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
          aria-hidden="true"
        >
          {/* Duplicate items for seamless CSS loop */}
          <div className="carousel-track flex flex-col gap-3">
            {[...carouselItems, ...carouselItems].map((item, i) => (
              <div
                key={i}
                className="bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-sm
                           font-medium text-white/60 text-center shrink-0 hover:[animation-play-state:paused]"
              >
                {item.label}
              </div>
            ))}
          </div>
        </m.div>
      </div>

      {/* Bottom scroll indicator */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div className="[animation:bounce-y_1.4s_ease-in-out_infinite] text-white/30">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </m.div>
    </section>
  )
}
