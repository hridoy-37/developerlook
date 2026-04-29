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
          className="max-w-4xl mb-20"
        >
          <m.div variants={staggerItem} className="flex items-center gap-4 mb-8">
            <span className="text-[#FF8A00] text-xs font-bold tracking-[0.3em] uppercase">Our Story</span>
            <div className="h-px w-12 bg-white/10" />
          </m.div>

          <m.h1 variants={staggerItem} className="text-[clamp(2.5rem,6vw,5.5rem)] font-black tracking-tight leading-[0.95] mb-10 text-white uppercase">
            Architects of your <br/>
            <span className="text-gradient">digital future.</span>
          </m.h1>

          <m.p variants={staggerItem} className="text-white/50 text-[clamp(1.1rem,2vw,1.25rem)] leading-relaxed max-w-2xl font-medium border-l-2 border-[#FF8A00] pl-8">
            Founded on the belief that traditional marketing is dead, RevEnComm combines striking brutalist design, cutting-edge development, and AI-driven automation to build scalable growth engines.
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
              className="group bg-[#11111A]/60 backdrop-blur-3xl border border-white/10 rounded-[40px] p-10 hover:border-[#FF8A00]/30 transition-all duration-500 shadow-2xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#FF8A00]/10 border border-[#FF8A00]/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#FF8A00] transition-all duration-500">
                <v.icon size={28} className="text-[#FF8A00] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">{v.title}</h3>
              <p className="text-white/40 text-base leading-relaxed font-medium">{v.desc}</p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  )
}
