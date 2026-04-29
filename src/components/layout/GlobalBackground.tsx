'use client'

import { m } from 'motion/react'

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none select-none bg-[#0A0A0F]">
      {/* 1. Base Atmospheric Blobs (The "WOW" factor) */}
      <m.div 
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FF8A00]/10 blur-[120px] rounded-full"
      />
      <m.div 
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#FF8A00]/5 blur-[150px] rounded-full"
      />

      {/* 2. Base Video Layer (Subtle motion) */}
      <div className="absolute inset-0 opacity-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-modern-loop-of-glowing-lines-20325-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 3. Overlays for depth */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      {/* 4. Brand Gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#FF8A00]/5 via-transparent to-transparent z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,138,0,0.05),transparent_70%)] z-20" />

      {/* 5. Persistent Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] z-30"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* 6. Premium Grain Texture (Mix-blend for tactile feel) */}
      <div className="absolute inset-0 opacity-[0.04] z-40 pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  )
}
