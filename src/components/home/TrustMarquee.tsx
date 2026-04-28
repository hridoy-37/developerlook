// RSC — no 'use client'. Pure CSS animation, zero JS overhead.
// CSS marquee runs on the compositor thread (transform-based).

const brands = [
  'Chileghuri',
  'Organic',
  'eSolution',
  'RevEnComm',
  'Brand Promotion',
  'Social Media',
  'Website Solution',
  'Landing Pages',
  'Data-Driven Marketing',
  'Creative Strategy',
  'AI & Automation',
  'Business Growth',
]

function BrandList({ reverse = false }: { reverse?: boolean }) {
  return (
    <div
      className={`flex gap-12 shrink-0 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      style={{ willChange: 'transform' }}
    >
      {brands.map((brand) => (
        <span
          key={brand}
          className="text-white/25 text-sm font-semibold tracking-widest uppercase whitespace-nowrap
                     hover:text-white/50 transition-colors duration-300 cursor-default"
        >
          {brand}
        </span>
      ))}
    </div>
  )
}

export default function TrustMarquee() {
  return (
    <section className="relative py-16 border-y border-white/[0.04] overflow-hidden bg-white/[0.01] backdrop-blur-sm" aria-label="Trusted by leading companies">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-center text-[#FF8A00] text-[10px] font-bold tracking-[0.5em] uppercase mb-12 opacity-80">
          Our Strategic Growth Partners
        </p>
        
        {/* Row 1 — left to right */}
        <div
          className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
          aria-hidden="true"
        >
          <div className="flex gap-20 animate-marquee shrink-0">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="text-white/20 text-lg font-black tracking-tighter uppercase whitespace-nowrap
                           hover:text-[#FF8A00] transition-colors duration-500 cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
