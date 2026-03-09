'use client'
// 'use client' — dynamically imported. Uses useState for accordion open state.
// Height animation via AnimatePresence (height: 0 → 'auto') — no layout reflow.

import { useState } from 'react'
import { m, AnimatePresence } from 'motion/react'
import { Plus } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/lib/animation-variants'

const services = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'We build blazing-fast, SEO-optimized websites and web apps with Next.js, React, and TypeScript. Every project is architected for performance — Core Web Vitals, accessibility, and maintainability are not afterthoughts.',
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    number: '02',
    title: 'Mobile App Development',
    description:
      'Cross-platform iOS and Android apps built with React Native and Expo. We deliver native-quality UX with shared codebases, offline support, and app store optimization.',
    tags: ['React Native', 'Expo', 'iOS', 'Android', 'Firebase'],
  },
  {
    number: '03',
    title: 'UI/UX Design',
    description:
      'User research, wireframing, prototyping, and pixel-perfect UI design. We use Figma to create design systems that scale and hand off clean specs to engineering.',
    tags: ['Figma', 'Design Systems', 'Prototyping', 'User Research'],
  },
  {
    number: '04',
    title: 'SaaS Product Development',
    description:
      'End-to-end SaaS development from MVP to scale — auth, billing, teams, and multi-tenancy. We help startups ship fast and enterprises modernize legacy systems.',
    tags: ['SaaS', 'Stripe', 'Auth', 'Multi-tenancy', 'tRPC'],
  },
  {
    number: '05',
    title: 'E-Commerce Solutions',
    description:
      'Custom storefronts, headless commerce, and marketplace platforms. We optimize every funnel step for conversion — from product page to checkout.',
    tags: ['Shopify', 'WooCommerce', 'Stripe', 'Inventory', 'Analytics'],
  },
  {
    number: '06',
    title: 'Performance & SEO',
    description:
      'Comprehensive audits and optimization sprints. We diagnose bottlenecks, fix Core Web Vitals, implement structured data, and improve organic rankings.',
    tags: ['Core Web Vitals', 'Lighthouse', 'SEO', 'Analytics', 'A/B Testing'],
  },
]

export default function ServicesSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="services"
      className="relative py-28 px-6 overflow-hidden bg-[#0a0a0a]"
      aria-labelledby="services-heading"
    >
      {/* Section number */}
      <span
        className="absolute right-8 top-8 text-[clamp(80px,12vw,160px)] font-bold text-white/[0.025]
                   select-none pointer-events-none leading-none"
        aria-hidden="true"
      >
        03
      </span>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16">
          {/* Left: sticky heading */}
          <m.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:sticky lg:top-24 self-start"
          >
            <m.p variants={staggerItem} className="text-white/40 text-sm font-medium tracking-widest uppercase mb-4">
              What We Do
            </m.p>
            <m.h2
              variants={staggerItem}
              id="services-heading"
              className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.1] mb-6"
            >
              Services built for ambitious teams
            </m.h2>
            <m.p variants={staggerItem} className="text-white/50 leading-relaxed mb-8">
              We don&apos;t do cookie-cutter work. Every engagement is tailored to your stack,
              timeline, and growth stage.
            </m.p>
            <m.a
              href="#contact"
              variants={staggerItem}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="inline-flex items-center gap-2 bg-white text-black font-semibold
                         px-6 py-3 rounded-full text-sm min-h-[44px]
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Get a free consultation
            </m.a>
          </m.div>

          {/* Right: accordion */}
          <m.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, i) => (
              <m.div
                key={service.number}
                variants={staggerItem}
                className="relative border-b border-white/[0.08]"
              >
                {/* Active left bar */}
                <m.div
                  className="absolute left-0 top-0 bottom-0 w-0.5 bg-white origin-top"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: open === i ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  aria-hidden="true"
                />

                <m.button
                  layout="position"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="w-full text-left flex items-center justify-between py-6 pl-4
                             group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
                             rounded-sm min-h-[64px]"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-white/25 text-sm font-mono tabular-nums">{service.number}</span>
                    <span className={`font-semibold text-lg transition-colors duration-200 ${open === i ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                      {service.title}
                    </span>
                  </div>
                  <m.div
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="shrink-0 ml-4"
                  >
                    <Plus size={18} className="text-white/50" />
                  </m.div>
                </m.button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <m.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="pl-4 pb-6 pr-2">
                        <p className="text-white/50 leading-relaxed mb-4 text-sm">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full border border-white/[0.1] text-white/40
                                         text-xs bg-white/[0.03]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            ))}
          </m.div>
        </div>
      </div>
    </section>
  )
}
