'use client'

import { m } from 'motion/react'

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none select-none bg-[#0A0A0F]">
      {/* Base Video Layer */}
      <div className="absolute inset-0 opacity-40">
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

      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Dynamic Gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-purple-500/10 z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(103,61,230,0.1),transparent_70%)] z-20" />

      {/* Persistent Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] z-30"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Subtle Grain Texture */}
      <div className="absolute inset-0 opacity-[0.02] z-40 pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  )
}
