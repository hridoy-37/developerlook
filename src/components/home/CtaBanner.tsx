// RSC — static section. No 'use client' needed.
// Gradient border achieved with CSS background-clip — no layout-triggering animations.

import { ArrowRight, Sparkles } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(255,255,255,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto">
        <div
          className="relative rounded-3xl p-px overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04), rgba(255,255,255,0.12))',
          }}
        >
          <div className="relative bg-[#0f0f0f] rounded-3xl px-8 py-16 md:px-16 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/[0.07] border border-white/[0.1]
                            rounded-full px-4 py-1.5 mb-8">
              <Sparkles size={13} className="text-white/60" aria-hidden="true" />
              <span className="text-white/60 text-xs font-medium tracking-wide">
                Limited spots available — Q2 2026
              </span>
            </div>

            <h2
              id="cta-heading"
              className="text-[clamp(2rem,6vw,4rem)] font-bold tracking-tight leading-[1.05] mb-6"
            >
              Ready to build something{' '}
              <span className="text-white/40">remarkable?</span>
            </h2>

            <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto mb-10">
              We take on a limited number of new projects each quarter. If you&apos;re serious
              about building a high-performance digital product, let&apos;s talk.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-white text-black font-semibold
                           px-8 py-4 rounded-full text-sm hover:bg-white/90 transition-colors
                           duration-200 min-h-[52px] focus-visible:outline-none focus-visible:ring-2
                           focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f0f]"
              >
                Start a project
                <ArrowRight size={16} />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 border border-white/[0.15] text-white/70
                           hover:text-white hover:border-white/30 transition-colors duration-200
                           px-8 py-4 rounded-full text-sm min-h-[52px] focus-visible:outline-none
                           focus-visible:ring-2 focus-visible:ring-white"
              >
                View our work
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/[0.06]">
              {[
                { label: 'NDA on request' },
                { label: 'Fixed-price contracts' },
                { label: '2-week kick-off guarantee' },
                { label: 'Money-back SLA' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-white/30 text-xs">
                  <div className="w-1 h-1 rounded-full bg-white/30" aria-hidden="true" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
