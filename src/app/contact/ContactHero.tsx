'use client'

import { m } from 'motion/react'
import { staggerContainer, staggerItem } from '@/lib/animation-variants'
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react'

const contactMethods = [
  { icon: Mail, label: 'Official Intelligence', value: 'info@revencomm.com', href: 'mailto:info@revencomm.com' },
  { icon: Phone, label: 'Global Strategy Line', value: '01806673304', href: 'tel:+8801806673304' },
  { icon: MessageSquare, label: 'Instant Connect', value: 'WhatsApp', href: 'https://wa.me/8801806673304' },
  { icon: MapPin, label: 'Regional HQ', value: 'Mohakhali, Dhaka, BD', href: 'https://maps.google.com/?q=Square+Road,+GP+Ja,+Mohakhali,+Dhaka' },
]

export default function ContactHero() {
  return (
    <div className="flex flex-col justify-center h-full">
      <m.div 
        variants={staggerContainer} 
        initial="hidden" 
        animate="visible"
      >
        <m.div variants={staggerItem} className="flex items-center gap-4 mb-10">
          <span className="text-[#FF8A00] text-xs font-black tracking-[0.4em] uppercase">Intelligence Relay</span>
          <div className="h-px w-12 bg-[#FF8A00]/30" />
        </m.div>

        <m.h1 variants={staggerItem} className="text-[clamp(2.5rem,6vw,5.5rem)] font-black tracking-tight leading-[0.9] mb-10 text-white uppercase">
          Initiate your <br/>
          <span className="text-white/20 italic font-light">next evolution.</span>
        </m.h1>

        <m.p variants={staggerItem} className="text-white/40 text-lg font-medium leading-relaxed max-w-md mb-16">
          Ready to scale? Connect with our strategic consultants to define your trajectory for 2026.
        </m.p>

        <m.div variants={staggerItem} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {contactMethods.map((method, i) => (
            <a 
              key={i}
              href={method.href}
              className="group flex items-center gap-6 p-6 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-[#FF8A00]/20 hover:bg-[#FF8A00]/5 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#FF8A00] group-hover:border-[#FF8A00] transition-all duration-500">
                <method.icon size={22} className="text-[#FF8A00] group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-white/20 text-[10px] font-black tracking-[0.3em] uppercase mb-1">{method.label}</p>
                <p className="text-white font-black text-sm tracking-tight uppercase group-hover:text-[#FF8A00] transition-colors">{method.value}</p>
              </div>
            </a>
          ))}
        </m.div>
      </m.div>
    </div>
  )
}
