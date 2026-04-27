'use client'

import { m } from 'motion/react'
import { staggerContainer, staggerItem } from '@/lib/animation-variants'
import { Target, Zap, Shield, Rocket } from 'lucide-react'

const values = [
  { icon: Target, title: 'Precision', desc: 'Every strategy is data-backed and targeted for maximum ROI.' },
  { icon: Zap, title: 'Agility', desc: 'We move fast, adapting to market changes to keep you ahead.' },
  { icon: Shield, title: 'Integrity', desc: 'Complete transparency in our processes, reporting, and pricing.' },
  { icon: Rocket, title: 'Innovation', desc: 'Leveraging the latest in AI and tech to drive unprecedented growth.' },
]

export default function AboutHero() {
  return (
    <section className="relative py-[clamp(70px,8.6vw,120px)] px-5 md:px-[25px] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <m.div 
          variants={staggerContainer} 
          initial="hidden" 
          animate="visible"
          className="max-w-4xl"
        >
          <m.div variants={staggerItem} className="flex items-center gap-4 mb-6">
            <span className="text-white/40 text-sm font-semibold tracking-widest uppercase">Our Story</span>
            <div className="h-px w-12 bg-white/20" />
          </m.div>

          <m.h1 variants={staggerItem} className="text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold tracking-tight leading-[1] mb-8 text-white">
            We are the architects of your <span className="text-gradient">digital future.</span>
          </m.h1>

          <m.p variants={staggerItem} className="text-white/60 text-[clamp(1.1rem,2vw,1.25rem)] leading-relaxed max-w-2xl mb-16">
            Founded on the belief that traditional marketing is dead, RevEnComm combines striking brutalist design, cutting-edge web development, and AI-driven automation to build scalable growth engines for modern brands.
          </m.p>
        </m.div>

        <m.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((v, i) => (
            <m.div 
              key={i}
              variants={staggerItem}
              className="bg-[#11111A] border border-white/[0.06] rounded-[24px] p-8 hover:border-[#673DE6]/30 transition-colors duration-300 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#673DE6]/10 border border-[#673DE6]/20 flex items-center justify-center mb-2">
                <v.icon size={20} className="text-[#673DE6]" />
              </div>
              <h3 className="text-xl font-bold text-white">{v.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  )
}
