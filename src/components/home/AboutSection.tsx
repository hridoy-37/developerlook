'use client'
// 'use client' — uses useCountUp (rAF-based) + scroll-triggered animations

import { m } from 'motion/react'
import { useCountUp } from '@/lib/use-count-up'
import { scrollReveal, staggerContainer, staggerItem } from '@/lib/animation-variants'
import { ArrowRight, Award, Clock, Users, Zap } from 'lucide-react'

const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered', icon: Zap },
  { value: 98, suffix: '%', label: 'Client Satisfaction', icon: Award },
  { value: 5, suffix: '+', label: 'Years Experience', icon: Clock },
  { value: 40, suffix: '+', label: 'Team Members', icon: Users },
]

const pillRows = [
  ['Next.js', 'React', 'TypeScript', 'Node.js', 'GraphQL', 'Prisma', 'PostgreSQL', 'Redis'],
  ['React Native', 'Expo', 'Flutter', 'iOS', 'Android', 'PWA', 'Electron', 'Tauri'],
  ['Figma', 'Framer', 'Tailwind', 'Motion', 'GSAP', 'Three.js', 'WebGL', 'CSS'],
]

function StatCard({ value, suffix, label, icon: Icon }: (typeof stats)[0]) {
  const ref = useCountUp(value)
  return (
    <div className="bg-[#111] border border-white/[0.08] rounded-2xl p-6 flex flex-col gap-3
                    hover:border-white/[0.15] transition-colors duration-300">
      <div className="w-10 h-10 rounded-xl bg-white/[0.07] flex items-center justify-center">
        <Icon size={18} className="text-white/60" />
      </div>
      <div>
        <div className="text-4xl font-bold text-white tabular-nums">
          <span ref={ref}>0</span>
          <span>{suffix}</span>
        </div>
        <p className="text-white/50 text-sm mt-1">{label}</p>
      </div>
    </div>
  )
}

function PillRow({ pills, reverse = false }: { pills: string[]; reverse?: boolean }) {
  return (
    <div
      className={`flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-1`}
      aria-hidden="true"
    >
      <div className={`flex gap-3 shrink-0 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ willChange: 'transform' }}
      >
        {[...pills, ...pills].map((pill, i) => (
          <span
            key={i}
            className="shrink-0 px-4 py-1.5 rounded-full border border-white/[0.1] text-white/40
                       text-xs font-medium tracking-wide whitespace-nowrap bg-white/[0.03]"
          >
            {pill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Section number watermark */}
      <span
        className="absolute right-8 top-8 text-[clamp(80px,12vw,160px)] font-bold text-white/[0.025]
                   select-none pointer-events-none leading-none"
        aria-hidden="true"
      >
        01
      </span>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <m.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <m.p variants={staggerItem} className="text-white/40 text-sm font-medium tracking-widest uppercase mb-4">
              About Us
            </m.p>
            <m.h2
              variants={staggerItem}
              id="about-heading"
              className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.1] mb-6"
            >
              We craft digital experiences that{' '}
              <span className="text-white/40">drive real results</span>
            </m.h2>
            <m.p variants={staggerItem} className="text-white/50 leading-relaxed mb-6">
              DeveloperLook is a full-service digital agency specializing in high-performance web and
              mobile applications. We combine sharp engineering with thoughtful design to build
              products that users love and businesses rely on.
            </m.p>
            <m.p variants={staggerItem} className="text-white/50 leading-relaxed mb-8">
              From early-stage startups to scaling enterprises, we&apos;ve delivered 150+ projects
              across SaaS, e-commerce, fintech, and healthcare. Every line of code is written with
              performance, accessibility, and maintainability in mind.
            </m.p>
            <m.a
              href="#portfolio"
              variants={staggerItem}
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="inline-flex items-center gap-2 text-white font-medium hover:text-white/80
                         transition-colors duration-200"
            >
              See our work <ArrowRight size={16} />
            </m.a>
          </m.div>

          {/* Right: stats grid */}
          <m.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <m.div key={stat.label} variants={staggerItem}>
                <StatCard {...stat} />
              </m.div>
            ))}
          </m.div>
        </div>

        {/* Pill scroll rows */}
        <m.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-20 flex flex-col gap-4"
        >
          <p className="text-center text-white/25 text-xs tracking-[0.25em] uppercase mb-4">
            Technologies we master
          </p>
          {pillRows.map((pills, i) => (
            <PillRow key={i} pills={pills} reverse={i % 2 !== 0} />
          ))}
        </m.div>
      </div>
    </section>
  )
}
