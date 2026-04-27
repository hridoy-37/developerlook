'use client'

import { m } from 'motion/react'
import { staggerContainer, staggerItem } from '@/lib/animation-variants'
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react'

const contactMethods = [
  { icon: Mail, label: 'Email', value: 'hello@revencomm.com', href: 'mailto:hello@revencomm.com' },
  { icon: Phone, label: 'Phone', value: '+1 (307) 487-8829', href: 'tel:+13074878829' },
  { icon: MessageSquare, label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/13074878829' },
  { icon: MapPin, label: 'HQ', value: 'Sheridan, Wyoming, US', href: '#' },
]

export default function ContactHero() {
  return (
    <div className="flex flex-col justify-center h-full">
      <m.div 
        variants={staggerContainer} 
        initial="hidden" 
        animate="visible"
      >
        <m.div variants={staggerItem} className="flex items-center gap-4 mb-6">
          <span className="text-white/40 text-sm font-semibold tracking-widest uppercase">Get in touch</span>
          <div className="h-px w-12 bg-white/20" />
        </m.div>

        <m.h1 variants={staggerItem} className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold tracking-tight leading-[1] mb-6 text-white">
          Let&apos;s build something <span className="text-gradient">remarkable.</span>
        </m.h1>

        <m.p variants={staggerItem} className="text-white/60 text-lg leading-relaxed max-w-md mb-12">
          Ready to transform your digital presence? Drop us a line, and we&apos;ll get back to you within 24 hours.
        </m.p>

        <m.div variants={staggerItem} className="flex flex-col gap-6">
          {contactMethods.map((method, i) => (
            <a 
              key={i}
              href={method.href}
              className="group flex items-center gap-5 p-4 -ml-4 rounded-2xl hover:bg-white/[0.02] transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-[#11111A] border border-white/[0.08] flex items-center justify-center group-hover:border-[#673DE6]/40 group-hover:bg-[#673DE6]/10 transition-colors">
                <method.icon size={20} className="text-white/60 group-hover:text-[#673DE6] transition-colors" />
              </div>
              <div>
                <p className="text-white/40 text-xs font-semibold tracking-wider uppercase mb-1">{method.label}</p>
                <p className="text-white font-medium text-lg">{method.value}</p>
              </div>
            </a>
          ))}
        </m.div>
      </m.div>
    </div>
  )
}
