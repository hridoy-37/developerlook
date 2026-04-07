'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { m, AnimatePresence, useMotionValue, useTransform, useSpring } from 'motion/react'
import { MessageCircle, Star, TrendingUp, Code2, Palette, Bot, ArrowUpRight } from 'lucide-react'

// ─── DATA & CONSTANTS ─────────────────────────────────────────────────────────

const WORDS = ['Marketing.', 'Software.', 'Content.', 'Automations.'] as const
const COLORS = ['#8B5CF6', '#38BDF8', '#E879F9', '#2DD4BF'] as const

const CARDS = [
  {
    id: 'bliss',
    client: 'Bliss',
    service: 'Digital Marketing',
    metric: '+312% ROAS',
    desc: 'Meta & TikTok Ads campaign that tripled return on ad spend in 90 days.',
    Icon: TrendingUp,
    bg: '#0F0C1B',
    accent: '#8B5CF6',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    id: 'dosyi',
    client: 'Dosyi',
    service: 'E-Commerce',
    metric: '3× Revenue',
    desc: 'Full Shopify store build + Google Ads funnel → tripled monthly revenue.',
    Icon: Code2,
    bg: '#0A1321',
    accent: '#38BDF8',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    id: 'geng',
    client: 'GenG',
    service: 'Content Solutions',
    metric: '5× Engagement',
    desc: 'Brand identity + social media content strategy drove 5× follower engagement.',
    Icon: Palette,
    bg: '#160E1C',
    accent: '#E879F9',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
  },
  {
    id: 'care',
    client: 'Care First',
    service: 'AI Automation',
    metric: '70% Auto-resolved',
    desc: 'RAG-powered AI chatbot now handles 70% of customer inquiries autonomously.',
    Icon: Bot,
    bg: '#0A1715',
    accent: '#2DD4BF',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
] as const

const STACK = [
  { y: 0, scale: 1, rotate: 0, opacity: 1, z: 40 },
  { y: 18, scale: 0.93, rotate: -2, opacity: 0.8, z: 30 },
  { y: 32, scale: 0.86, rotate: 1.5, opacity: 0.5, z: 20 },
  { y: 44, scale: 0.79, rotate: -1, opacity: 0.2, z: 10 },
]

const avatars = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop',
  'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=50&h=50&fit=crop',
]

const badges = [
  { name: 'Trustpilot', rating: '4.9', label: 'Excellent' },
  { name: 'Clutch', rating: '5.0', label: '5 Star' },
  { name: 'Google', rating: '4.8', label: 'Top Rated' },
]

// ─── STACK ANIMATION COMPONENT ──────────────────────────────────────────────────

function FolderCardStack() {
  const [order, setOrder] = useState([0, 1, 2, 3])
  const [isExiting, setIsExiting] = useState(false)

  // Fluid advance mechanism
  const advance = useCallback(() => {
    if (isExiting) return
    setIsExiting(true)
    setTimeout(() => {
      setOrder((prev) => {
        const [first, ...rest] = prev
        return [...rest, first]
      })
      setIsExiting(false)
    }, 450) // perfectly synced with exit duration
  }, [isExiting])

  // Auto-cycle
  useEffect(() => {
    const id = setInterval(advance, 3500)
    return () => clearInterval(id)
  }, [advance])

  // Mouse Parallax Physics
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 150, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      className="relative w-full h-full select-none cursor-pointer flex items-center justify-center pt-8"
      style={{ perspective: '1200px' }}
      onClick={advance}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full max-w-[440px] aspect-[4/5] sm:aspect-auto sm:h-[460px]">
        {order.map((cardIdx, stackPos) => {
          const card = CARDS[cardIdx]
          const pos = STACK[stackPos] ?? STACK[STACK.length - 1]
          const isFront = stackPos === 0
          const exiting = isFront && isExiting

          return (
            <m.div
              key={card.id}
              initial={false}
              animate={
                exiting
                  ? { y: -80, scale: 0.85, rotateZ: -8, opacity: 0 }
                  : { y: pos.y, scale: pos.scale, rotateZ: pos.rotate, opacity: pos.opacity }
              }
              transition={
                exiting
                  ? { duration: 0.45, ease: [0.16, 1, 0.3, 1] } // S-tier snap exit
                  : { type: 'spring', stiffness: 300, damping: 24, mass: 0.8 } // snappy settle
              }
              style={{
                zIndex: pos.z,
                backgroundColor: card.bg,
                transformOrigin: 'bottom center',
                transformStyle: 'preserve-3d',
                rotateX: isFront ? rotateX : 0,
                rotateY: isFront ? rotateY : 0,
              }}
              className="absolute inset-x-0 top-0 h-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] will-change-transform flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-[55%] overflow-hidden">
                <Image src={card.image} alt={card.client} fill sizes="440px" className="object-cover opacity-60" priority={isFront} />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, transparent 40%, ${card.bg} 100%), linear-gradient(135deg, ${card.accent}30, transparent 60%)`,
                  }}
                />
                
                {/* Client Tag */}
                <div className="absolute top-5 left-5 flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center backdrop-blur-md shadow-lg"
                    style={{ background: `${card.accent}30`, border: `1px solid ${card.accent}40` }}
                  >
                    <card.Icon size={16} style={{ color: card.accent }} />
                  </div>
                  <span className="text-white font-bold text-sm tracking-wide shadow-md">{card.client}</span>
                </div>

                {/* Metric Badge */}
                <div
                  className="absolute top-5 right-5 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase shadow-lg backdrop-blur-md"
                  style={{
                    background: `${card.accent}20`,
                    border: `1px solid ${card.accent}40`,
                    color: '#fff',
                  }}
                >
                  {card.metric}
                </div>

                {/* Hover Interaction Arrow */}
                <m.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: isFront ? 1 : 0, scale: isFront ? 1 : 0.8 }}
                  className="absolute bottom-4 right-5 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-xl"
                >
                  <ArrowUpRight size={18} className="text-black" />
                </m.div>
              </div>

              {/* Text Section */}
              <div className="flex-1 p-6 flex flex-col justify-center">
                <span
                  className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest w-fit mb-3"
                  style={{
                    background: `${card.accent}15`,
                    border: `1px solid ${card.accent}30`,
                    color: card.accent,
                  }}
                >
                  {card.service}
                </span>
                <p className="text-white/70 text-sm sm:text-[15px] leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            </m.div>
          )
        })}

        {/* Progress Tracker Layer */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2" aria-hidden="true">
          {CARDS.map((_, i) => (
            <m.div
              key={i}
              animate={{
                width: order[0] === i ? 24 : 6,
                opacity: order[0] === i ? 1 : 0.2,
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="h-1.5 rounded-full bg-white"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── HERO SECTION ─────────────────────────────────────────────────────────────

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0)
  const [btnHovered, setBtnHovered] = useState(false)
  const [loaded, setLoaded] = useState(false)

  // Fluid word rotation
  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % WORDS.length), 3000)
    return () => clearInterval(id)
  }, [])

  // Mount animation trigger
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 50)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center overflow-hidden bg-[#0A0A0F] pt-24 pb-12 lg:py-0"
      aria-labelledby="hero-heading"
    >
      {/* Structural CSS for the complex curved tab shape, updated to dark agency colors */}
      <style>{`
        .folder-wrapper {
          position: relative;
          width: 100%;
          border-radius: 24px;
        }

        .folder-tab {
          position: absolute;
          top: -44px;
          left: 0;
          width: 240px;
          height: 44px;
          background: #11111A;
          border-radius: 16px 16px 0 0;
          display: flex;
          align-items: center;
          padding: 0 20px;
          gap: 10px;
          border: 1px solid rgba(255,255,255,0.06);
          border-bottom: 0;
          z-index: 10;
        }

        .folder-tab::after {
          content: '';
          position: absolute;
          right: -24px;
          bottom: -1px;
          width: 24px;
          height: 24px;
          background: transparent;
          border-bottom-left-radius: 16px;
          box-shadow: -8px 8px 0 8px #11111A;
        }

        .tab-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 0 10px rgba(255,255,255,0.5);
        }

        .tab-text {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 12px;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .folder-body {
          background: #11111A;
          border-radius: 0 32px 32px 32px;
          border: 1px solid rgba(255,255,255,0.06);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.04), 0 40px 80px -20px rgba(0,0,0,0.8);
          padding: 60px clamp(20px, 4vw, 50px) 50px;
          position: relative;
          overflow: hidden;
          opacity: ${loaded ? 1 : 0};
          transform: ${loaded ? 'translateY(0)' : 'translateY(20px)'};
          transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .folder-body::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
          background-size: 40px 40px;
          mask-image: radial-gradient(circle at center, black 0%, transparent 80%);
          -webkit-mask-image: radial-gradient(circle at center, black 0%, transparent 80%);
          pointer-events: none;
        }

        @media (max-width: 640px) {
          .folder-tab { width: 180px; top: -38px; height: 38px; }
          .folder-body { padding: 40px 20px 30px; border-radius: 0 24px 24px 24px; }
        }
      `}</style>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 lg:px-10 w-full grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Folder Architecture */}
        <div className="folder-wrapper mt-8 lg:mt-0">
          <div className="folder-tab" aria-hidden="true">
            <div className="tab-dot" />
            <span className="tab-text">revencomm.com</span>
          </div>

          <div className="folder-body">
            
            {/* Superior Social Proof Header */}
            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex items-center gap-4 mb-8 sm:mb-12 border border-white/5 bg-white/[0.01] backdrop-blur-sm rounded-full w-fit pl-2 pr-5 py-1.5"
            >
              <div className="flex -space-x-2">
                {avatars.map((src, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-[#11111A] overflow-hidden shrink-0 relative grayscale">
                    <Image src={src} alt="Client" fill sizes="32px" className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="text-white fill-white" />
                  ))}
                </div>
                <span className="text-white/40 text-[10px] font-bold tracking-widest uppercase mt-0.5">Trusted globally</span>
              </div>
            </m.div>

            {/* Master Typography Layout */}
            <h1
              id="hero-heading"
              className="relative z-10 font-extrabold leading-[1] tracking-tight text-[clamp(3.2rem,6vw,6.5rem)] mb-10 text-white"
            >
              <m.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Let&apos;s Build The
              </m.span>

              <m.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-x-4 mt-2"
              >
                <span className="text-white/30 italic font-light tracking-normal">Next</span>
                <span
                  className="overflow-hidden inline-flex items-center relative"
                  style={{ height: '1.2em' }}
                >
                  <AnimatePresence mode="wait">
                    <m.span
                      key={WORDS[wordIndex]}
                      initial={{ y: 80, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -80, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-center whitespace-nowrap"
                      style={{ color: COLORS[wordIndex] }}
                    >
                      {WORDS[wordIndex]}
                    </m.span>
                  </AnimatePresence>
                </span>
                <span className="text-white">Thing.</span>
              </m.span>
            </h1>

            {/* Micro Divider */}
            <m.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left' }}
              className="relative z-10 w-full h-px bg-white/5 my-12"
            />

            {/* Action Floor (Badges + CTA) */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 h-full"
            >
              {/* Trust Badges */}
              <div className="flex gap-4">
                {badges.map((b, i) => (
                  <div key={b.name} className={`flex flex-col gap-1 ${i !== 0 ? 'hidden md:flex' : ''}`}>
                    <span className="text-white font-extrabold text-xl leading-none">{b.rating}</span>
                    <div className="flex gap-[1px]">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={8} className="text-white/60 fill-white/60" />
                      ))}
                    </div>
                    <span className="text-white/30 text-[9px] font-bold tracking-widest uppercase mt-1">{b.name}</span>
                  </div>
                ))}
              </div>

              {/* Minimalist Slide CTA */}
              <a
                href="#contact"
                onMouseEnter={() => setBtnHovered(true)}
                onMouseLeave={() => setBtnHovered(false)}
                className="group relative flex items-center gap-3 bg-white text-black font-bold pl-8 pr-2 py-2 rounded-full min-h-[60px] cursor-pointer w-full sm:w-auto"
              >
                <span className="text-[14px] uppercase tracking-widest overflow-hidden h-5 relative block w-32 shrink-0">
                  <span className={`block transition-transform duration-500 ease-[0.16,1,0.3,1] ${btnHovered ? '-translate-y-full' : 'translate-y-0'}`}>
                    Consultation
                  </span>
                  <span
                    className="absolute top-full left-0 block transition-transform duration-500 ease-[0.16,1,0.3,1]"
                    style={{ transform: btnHovered ? 'translateY(-100%)' : 'translateY(0)' }}
                  >
                    Consultation
                  </span>
                </span>
                <span className="w-11 h-11 bg-black rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight size={18} className="text-white" />
                </span>
              </a>
            </m.div>

          </div>
        </div>

        {/* Right Side / Bottom: Stack Slider */}
        <m.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-[480px] sm:h-[500px] lg:h-[600px] xl:h-[700px] mt-4 lg:mt-0 relative z-10"
        >
          <FolderCardStack />
        </m.div>

      </div>
    </section>
  )
}