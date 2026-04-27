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
        className="bg-[#11111A] border border-white/[0.08] rounded-[32px] p-10 flex flex-col items-center justify-center text-center min-h-[500px]"
      >
        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={40} className="text-green-500" />
        </div>
        <h3 className="text-3xl font-extrabold text-white mb-4">Message Sent!</h3>
        <p className="text-white/60 mb-8 max-w-sm">
          Thank you for reaching out. Our team will review your project and get back to you within 24 hours.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-white/40 hover:text-white transition-colors text-sm font-semibold tracking-wider uppercase"
        >
          Send another message
        </button>
      </m.div>
    )
  }

  return (
    <m.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="bg-[#11111A] border border-white/[0.08] rounded-[32px] p-6 sm:p-10"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName" className="text-white/60 text-xs font-semibold tracking-wider uppercase pl-1">First Name</label>
            <input 
              required
              type="text" 
              id="firstName" 
              className="bg-[#0A0A0F] border border-white/[0.06] rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#673DE6]/50 transition-colors"
              placeholder="John"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName" className="text-white/60 text-xs font-semibold tracking-wider uppercase pl-1">Last Name</label>
            <input 
              required
              type="text" 
              id="lastName" 
              className="bg-[#0A0A0F] border border-white/[0.06] rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#673DE6]/50 transition-colors"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-white/60 text-xs font-semibold tracking-wider uppercase pl-1">Email Address</label>
          <input 
            required
            type="email" 
            id="email" 
            className="bg-[#0A0A0F] border border-white/[0.06] rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#673DE6]/50 transition-colors"
            placeholder="john@example.com"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="service" className="text-white/60 text-xs font-semibold tracking-wider uppercase pl-1">Service Needed</label>
          <select 
            id="service" 
            className="bg-[#0A0A0F] border border-white/[0.06] rounded-xl px-5 py-4 text-white/80 focus:outline-none focus:border-[#673DE6]/50 transition-colors appearance-none"
          >
            <option value="web-development">Web Development</option>
            <option value="ui-ux-design">UI/UX Design</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="ai-automation">AI & Automation</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-white/60 text-xs font-semibold tracking-wider uppercase pl-1">Project Details</label>
          <textarea 
            required
            id="message" 
            rows={4}
            className="bg-[#0A0A0F] border border-white/[0.06] rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#673DE6]/50 transition-colors resize-none"
            placeholder="Tell us about your goals..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          className="mt-4 group relative flex items-center justify-between bg-white text-black font-bold pl-8 pr-2 py-2 rounded-full min-h-[60px] cursor-pointer w-full disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span className="text-[14px] uppercase tracking-widest overflow-hidden h-5 relative block w-32 shrink-0">
            <span className={`block transition-transform duration-500 ease-[0.16,1,0.3,1] ${btnHovered && !isSubmitting ? '-translate-y-full' : 'translate-y-0'}`}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </span>
            <span
              className="absolute top-full left-0 block transition-transform duration-500 ease-[0.16,1,0.3,1]"
              style={{ transform: btnHovered && !isSubmitting ? 'translateY(-100%)' : 'translateY(0)' }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </span>
          </span>
          <span className="w-11 h-11 bg-black rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:rotate-45">
            <ArrowUpRight size={18} className="text-white" />
          </span>
        </button>
      </form>
    </m.div>
  )
}
