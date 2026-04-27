'use client'

import { m } from 'motion/react'
import Image from 'next/image'
import { staggerContainer, staggerItem } from '@/lib/animation-variants'
import { Linkedin, Twitter } from 'lucide-react'

const team = [
  {
    name: 'Alex Rivera',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
    bio: '10+ years scaling digital brands and pioneering AI workflows.'
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    bio: 'Award-winning art director specializing in brutalist, high-conversion interfaces.'
  },
  {
    name: 'David Okafor',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80',
    bio: 'Full-stack expert obsessed with sub-second load times and flawless architecture.'
  },
  {
    name: 'Elena Rostova',
    role: 'Growth Strategist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80',
    bio: 'Data scientist turned marketer, driving 10x ROAS across global campaigns.'
  }
]

export default function OurTeam() {
  return (
    <section className="relative py-[clamp(70px,8.6vw,120px)] px-5 md:px-[25px] overflow-hidden border-t border-white/[0.04]">
      <div className="max-w-[1400px] mx-auto">
        <m.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <m.h2 variants={staggerItem} className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold tracking-tight text-white mb-4">
            Meet the minds behind the machine.
          </m.h2>
          <m.p variants={staggerItem} className="text-white/50 text-lg max-w-2xl">
            A small, elite team of specialists dedicated to pushing the boundaries of what&apos;s possible on the web.
          </m.p>
        </m.div>

        <m.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member, i) => (
            <m.div 
              key={i}
              variants={staggerItem}
              className="group relative bg-[#11111A] border border-white/[0.06] rounded-[24px] overflow-hidden hover:border-[#673DE6]/40 transition-all duration-500"
            >
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11111A] via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <a href="#" className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white text-white hover:text-black transition-colors">
                    <Twitter size={14} />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white text-white hover:text-black transition-colors">
                    <Linkedin size={14} />
                  </a>
                </div>
              </div>
              
              <div className="p-6 relative z-10 -mt-6 bg-[#11111A] rounded-t-[24px]">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-[#673DE6] text-sm font-semibold tracking-wide uppercase mb-3">{member.role}</p>
                <p className="text-white/50 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  )
}
