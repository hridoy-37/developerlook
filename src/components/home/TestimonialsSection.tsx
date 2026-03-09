'use client'
// 'use client' — dynamically imported. Uses useMotionValue for drag (no React state during drag).

import { useRef, useState } from 'react'
import Image from 'next/image'
import { m, useMotionValue } from 'motion/react'
import { Star, Quote } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/lib/animation-variants'

const BLUR_DATA = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUHCP/EACIQAAICAQQDAQAAAAAAAAAAAAECAwQREiExBRNBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAUG/9oADAMBAAIRAxEAPwB7mMivVpV3Gv20zRRxmCWOL1FTpALYA8Vr2ysF3d6YoCJJHI2yR3JP6KKA/9k='

const testimonials = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'CEO',
    company: 'FinanceOS',
    avatar: 'https://placehold.co/64x64/222222/ffffff',
    rating: 5,
    text: "DeveloperLook transformed our MVP into a polished SaaS product in just 8 weeks. The team's attention to performance and UX is unmatched. Our LCP dropped from 4.2s to 1.1s.",
  },
  {
    id: '2',
    name: 'Marcus Webb',
    role: 'CTO',
    company: 'Shopflow',
    avatar: 'https://placehold.co/64x64/333333/ffffff',
    rating: 5,
    text: "We've worked with 3 agencies before. DeveloperLook is the first that actually understands performance. Zero CLS, sub-1s LCP on mobile. Our conversion rate jumped 23%.",
  },
  {
    id: '3',
    name: 'Priya Nair',
    role: 'Founder',
    company: 'Lexio AI',
    avatar: 'https://placehold.co/64x64/2a2a2a/ffffff',
    rating: 5,
    text: 'Shipped our AI writing tool in 6 weeks. The code quality is outstanding — TypeScript everywhere, proper abstractions, and comprehensive tests. Easy to maintain.',
  },
  {
    id: '4',
    name: 'James Holloway',
    role: 'Head of Product',
    company: 'Propex',
    avatar: 'https://placehold.co/64x64/1a1a1a/ffffff',
    rating: 5,
    text: 'Our real estate platform handles 50k+ daily active users without breaking a sweat. The architecture decisions they made upfront saved us months of scaling headaches.',
  },
  {
    id: '5',
    name: 'Aisha Okonkwo',
    role: 'Co-founder',
    company: 'HealthTrack',
    avatar: 'https://placehold.co/64x64/252525/ffffff',
    rating: 5,
    text: 'React Native app with HealthKit integration shipped to both App Stores in under 10 weeks. Beautiful UI, buttery smooth animations, and zero crashes in production.',
  },
]

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const x = useMotionValue(0)
  const dragRef = useRef<HTMLDivElement>(null)

  return (
    <section
      id="testimonials"
      className="relative py-28 px-6 overflow-hidden bg-[#050505]"
      aria-labelledby="testimonials-heading"
    >
      {/* Section number */}
      <span
        className="absolute left-8 top-8 text-[clamp(80px,12vw,160px)] font-bold text-white/[0.025]
                   select-none pointer-events-none leading-none"
        aria-hidden="true"
      >
        04
      </span>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-14"
        >
          <m.p variants={staggerItem} className="text-white/40 text-sm font-medium tracking-widest uppercase mb-4">
            Testimonials
          </m.p>
          <m.h2
            variants={staggerItem}
            id="testimonials-heading"
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.1]"
          >
            Trusted by founders & teams
          </m.h2>
        </m.div>

        {/* Drag carousel */}
        <div
          ref={dragRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          <m.div
            drag="x"
            dragConstraints={dragRef}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
            style={{ x }}
            className="flex gap-5 select-none w-max"
          >
            {testimonials.map((t, i) => (
              <m.div
                key={t.id}
                onClick={() => setActive(i)}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                className={`w-[340px] md:w-[400px] bg-[#111] border rounded-2xl p-7 shrink-0
                            transition-colors duration-300 cursor-pointer
                            ${active === i ? 'border-white/20' : 'border-white/[0.06] hover:border-white/[0.12]'}`}
                aria-label={`Testimonial from ${t.name}`}
              >
                <Quote size={28} className="text-white/15 mb-5" aria-hidden="true" />
                <p className="text-white/70 leading-relaxed text-sm mb-7">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-[#222] shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL={BLUR_DATA}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm truncate">{t.name}</p>
                    <p className="text-white/40 text-xs truncate">
                      {t.role}, {t.company}
                    </p>
                  </div>
                  <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={11} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </m.div>
            ))}
          </m.div>
        </div>

        {/* Dot pagination */}
        <div
          className="flex justify-center gap-2 mt-8"
          role="tablist"
          aria-label="Testimonial navigation"
        >
          {testimonials.map((_, i) => (
            <m.button
              key={i}
              role="tab"
              aria-selected={active === i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              animate={{
                scale: active === i ? 1.4 : 1,
                opacity: active === i ? 1 : 0.35,
              }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="w-1.5 h-1.5 rounded-full bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
