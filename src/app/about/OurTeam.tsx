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
    <section className="relative py-[clamp(80px,10vw,180px)] px-5 md:px-10 overflow-hidden border-t border-white/5 bg-[#0A0A0F]">
      <div className="max-w-[1400px] mx-auto">
        <m.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20"
        >
          <m.h2 variants={staggerItem} className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-tight text-white mb-6 uppercase">
            Minds behind <br/>
            <span className="text-gradient">the machine.</span>
          </m.h2>
          <m.p variants={staggerItem} className="text-white/50 text-lg max-w-2xl font-medium">
            A small, elite team of specialists dedicated to pushing the boundaries of what&apos;s possible on the web.
          </m.p>
        </m.div>

        <m.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, i) => (
            <m.div 
              key={i}
              variants={staggerItem}
              className="group relative bg-[#11111A]/60 backdrop-blur-3xl border border-white/10 rounded-[40px] overflow-hidden hover:border-[#FF8A00]/40 transition-all duration-500 shadow-2xl"
            >
              <div className="relative h-[350px] w-full overflow-hidden">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11111A] via-[#11111A]/20 to-transparent opacity-80" />
                
                <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-[#FF8A00] text-white transition-all duration-300">
                    <Twitter size={16} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-[#FF8A00] text-white transition-all duration-300">
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
              
              <div className="p-8 relative z-10 -mt-10 bg-[#11111A] rounded-t-[40px] border-t border-white/10">
                <h3 className="text-2xl font-black text-white mb-2 tracking-tight uppercase">{member.name}</h3>
                <p className="text-[#FF8A00] text-xs font-black tracking-[0.2em] uppercase mb-4">{member.role}</p>
                <p className="text-white/40 text-sm leading-relaxed font-medium line-clamp-2 group-hover:line-clamp-none transition-all duration-500">{member.bio}</p>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  )
}
