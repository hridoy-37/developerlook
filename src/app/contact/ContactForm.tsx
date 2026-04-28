'use client'

import { useState } from 'react'
import { m } from 'motion/react'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [btnHovered, setBtnHovered] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <m.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/[0.02] backdrop-blur-3xl border border-[#FF8A00]/20 rounded-[48px] p-10 flex flex-col items-center justify-center text-center min-h-[600px] shadow-2xl shadow-[#FF8A00]/5"
      >
        <div className="w-24 h-24 bg-[#FF8A00]/10 border border-[#FF8A00]/20 rounded-full flex items-center justify-center mb-8">
          <CheckCircle2 size={40} className="text-[#FF8A00]" />
        </div>
        <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">Relay Received</h3>
        <p className="text-white/40 mb-12 max-w-sm font-medium leading-relaxed">
          Strategic intelligence has been transmitted. Our growth consultants will contact you within one business cycle.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-[#FF8A00] hover:text-white transition-colors text-[10px] font-black tracking-[0.4em] uppercase border-b border-[#FF8A00]/30 pb-1"
        >
          New Transmission
        </button>
      </m.div>
    )
  }

  return (
    <m.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[48px] p-8 sm:p-12 shadow-2xl"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <label htmlFor="firstName" className="text-white/20 text-[10px] font-black tracking-[0.3em] uppercase pl-1">First Identity</label>
            <input 
              required
              type="text" 
              id="firstName" 
              className="bg-white/5 border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#FF8A00]/40 focus:bg-white/[0.08] transition-all font-medium placeholder:text-white/10"
              placeholder="E.g. John"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="lastName" className="text-white/20 text-[10px] font-black tracking-[0.3em] uppercase pl-1">Last Identity</label>
            <input 
              required
              type="text" 
              id="lastName" 
              className="bg-white/5 border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#FF8A00]/40 focus:bg-white/[0.08] transition-all font-medium placeholder:text-white/10"
              placeholder="E.g. Doe"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="text-white/20 text-[10px] font-black tracking-[0.3em] uppercase pl-1">Relay Channel</label>
          <input 
            required
            type="email" 
            id="email" 
            className="bg-white/5 border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#FF8A00]/40 focus:bg-white/[0.08] transition-all font-medium placeholder:text-white/10"
            placeholder="E.g. connect@brand.com"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="service" className="text-white/20 text-[10px] font-black tracking-[0.3em] uppercase pl-1">Strategic Objective</label>
          <div className="relative group">
            <select 
              id="service" 
              className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-5 text-white/80 focus:outline-none focus:border-[#FF8A00]/40 focus:bg-white/[0.08] transition-all font-medium appearance-none cursor-pointer"
            >
              <option value="web-development">Web & Software Ecosystems</option>
              <option value="ui-ux-design">Visual Identity & UX</option>
              <option value="digital-marketing">Market Dominance</option>
              <option value="ai-automation">AI & Workflow Automation</option>
              <option value="other">Bespoke Intelligence</option>
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20 group-hover:text-[#FF8A00] transition-colors">
              <ArrowUpRight size={16} className="rotate-45" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="message" className="text-white/20 text-[10px] font-black tracking-[0.3em] uppercase pl-1">Mission Brief</label>
          <textarea 
            required
            id="message" 
            rows={5}
            className="bg-white/5 border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#FF8A00]/40 focus:bg-white/[0.08] transition-all font-medium resize-none placeholder:text-white/10"
            placeholder="Define your vision..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          className="mt-4 group relative flex items-center justify-between bg-white text-black font-black pl-10 pr-2 py-2 rounded-full min-h-[70px] cursor-pointer w-full disabled:opacity-70 disabled:cursor-not-allowed transition-all hover:bg-[#FF8A00] hover:text-white"
        >
          <span className="text-[12px] uppercase tracking-[0.3em] overflow-hidden h-5 relative block w-40 shrink-0">
            <span className={`block transition-transform duration-500 ease-[0.16,1,0.3,1] ${btnHovered && !isSubmitting ? '-translate-y-full' : 'translate-y-0'}`}>
              {isSubmitting ? 'Transmitting...' : 'Initiate Relay'}
            </span>
            <span
              className="absolute top-full left-0 block transition-transform duration-500 ease-[0.16,1,0.3,1]"
              style={{ transform: btnHovered && !isSubmitting ? 'translateY(-100%)' : 'translateY(0)' }}
            >
              {isSubmitting ? 'Transmitting...' : 'Initiate Relay'}
            </span>
          </span>
          <span className="w-14 h-14 bg-black rounded-full flex items-center justify-center shrink-0 transition-all duration-500 group-hover:rotate-45 group-hover:bg-white">
            <ArrowUpRight size={22} className="text-white group-hover:text-black" />
          </span>
        </button>
      </form>
    </m.div>
  )
}
