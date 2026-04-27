'use client'

import Image from 'next/image'
import { m } from 'motion/react'
import { ArrowUpRight, Clock, Plus } from 'lucide-react'

const posts = [
  {
    id: '1',
    category: 'Content Marketing',
    title: 'Content Marketing Solutions in Bangladesh for SMEs',
    excerpt: 'Struggling to grow your small business in Bangladesh? Discover effective Content Marketing solutions to boost your brand visibility.',
    date: 'Feb 03, 2026',
    readTime: '4 Min read',
    image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&q=80&w=800',
    href: '/blogs/content-marketing-solutions-in-bangladesh-for-smes',
  },
  {
    id: '2',
    category: 'Content Marketing',
    title: 'Content Marketing: আপনার বিজনেসের জন্য কেন অপরিহার্য?',
    excerpt: 'Content Marketing হলো এমন একটি স্ট্র্যাটেজি যা বিজ্ঞাপন ছাড়াই কাস্টমারের বিশ্বাস তৈরি করে এবং ধীরে ধীরে তাদেরকে লয়াল কাস্টমারে রূপান্তর করে।',
    date: 'Jan 16, 2026',
    readTime: '3 Min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    href: '/blogs/content-marketing-apnar-bijneser-jnz-ken-opriharz',
  },
  {
    id: '3',
    category: 'Brand Strategy',
    title: 'আপনার ব্রান্ডের জন্য Influencer Marketing: যেভাবে শুরু করবেন',
    excerpt: 'Influencer Marketing আজকের ডিজিটাল মার্কেটিংয়ের সবচেয়ে শক্তিশালী স্ট্র্যাটেজিগুলোর একটি। সঠিক ইনফ্লুয়েন্সার নির্বাচন করতে পারলে দ্রুত ব্রান্ড ভ্যালু বাড়ে।',
    date: 'Jan 09, 2026',
    readTime: '5 Min read',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    href: '/blogs/apnar-brander-jnz-influencer-marketing-zevabe-suru-krben',
  },
  {
    id: '4',
    category: 'Digital Marketing',
    title: 'ফেসবুক অ্যাডে টাকা খরচ করছেন কিন্তু আশানুরূপ সেলস পাচ্ছেন না...',
    excerpt: 'ফেসবুক অ্যাডে বেশি সেল পেতে শুধু টাকা ঢাললেই হবে না—ডাটা বুঝে সিদ্ধান্ত নিতে হবে। এই গাইডে দেখানো হয় কীভাবে রিয়েল ডাটার ওপর ভিত্তি করে অ্যাড চালানো যায়।',
    date: 'Jan 05, 2026',
    readTime: '6 Min read',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    href: '/blogs/fesbuk-ozade-taka-khrc-krchen-kintu-asanuruup-sels-pacchen-na',
  },
  {
    id: '5',
    category: 'Analytics',
    title: 'Data-Driven Growth: How GA4 Can Save Your Marketing Budget',
    excerpt: 'Running marketing without data is like driving with your eyes closed. This blog explains how Google Analytics 4 can revolutionize your business growth strategy.',
    date: 'Jan 04, 2026',
    readTime: '4 Min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    href: '/blogs/data-driven-growth-how-ga4-can-save-your-marketing-budget',
  },
  {
    id: '6',
    category: 'Strategy',
    title: 'The Marketing Funnel: How to Turn "Strangers" into "Customers"',
    excerpt: 'A sale isn’t the finish line—it’s just the start. This blog breaks down the 4-stage marketing funnel and how to optimize each step for maximum conversion.',
    date: 'Dec 13, 2025',
    readTime: '5 Min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    href: '/blogs/the-marketing-funnel-how-to-turn-strangers-into-customers',
  }
]

export default function BlogSection() {
  return (
    <section id="blog" className="relative py-[clamp(80px,10vw,180px)] px-5 md:px-[40px] bg-[#0A0A0F] overflow-hidden"
      aria-labelledby="blog-heading">

      {/* Section number watermark */}
      <span className="absolute right-6 top-6 font-extrabold text-white/[0.025] select-none pointer-events-none leading-none
                       text-[clamp(80px,12vw,160px)]" aria-hidden="true">06</span>

      {/* Decorative vertical separator logic from DeveloperLook */}
      <div className="absolute left-[40px] md:left-[80px] top-0 bottom-0 w-px bg-white/[0.03]" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Superior Typographic Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24 ml-[20px] md:ml-[60px]">
          <div className="max-w-3xl">
            <m.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-white/40 text-[11px] font-bold tracking-[0.3em] uppercase">06 The Intelligence</span>
              <div className="h-px w-10 bg-white/20" />
            </m.div>
            <m.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              id="blog-heading"
              className="text-[clamp(2.5rem,7vw,7rem)] font-extrabold tracking-tight leading-[0.95] text-white"
            >
              The <span className="italic font-light text-white/30">Think</span><br />
              Tank.
            </m.h2>
          </div>
          
          <m.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <p className="text-white/45 text-lg max-w-[280px] leading-relaxed font-medium">
              Insights, stories, and growth strategies for the digital first era.
            </p>
            <a href="/blogs"
              className="group flex items-center gap-4 text-white font-bold text-sm tracking-widest uppercase hover:text-[#673DE6] transition-colors">
              <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#673DE6]/40 transition-colors">
                <Plus size={16} />
              </span>
              All Stories
            </a>
          </m.div>
        </div>

        {/* Clean, Massive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/[0.05] rounded-[40px] overflow-hidden bg-white/[0.01]">
          {posts.map((post, i) => (
            <m.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1 }}
              className={`group relative flex flex-col p-10 border-white/[0.05] 
                         ${i % 3 !== 2 ? 'lg:border-r' : ''} 
                         ${i < 3 ? 'lg:border-b' : ''} 
                         ${i % 2 !== 1 ? 'md:border-r lg:md:border-r-inherit' : ''}
                         ${i < 4 ? 'md:border-b lg:md:border-b-inherit' : ''}
                         hover:bg-[#11111a] transition-all duration-500`}
            >
              <a href={post.href} className="flex-1 flex flex-col gap-8 group">
                {/* Visual Reveal */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/5 opacity-80 group-hover:opacity-100 transition-all duration-700">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Category overlay */}
                  <div className="absolute left-4 bottom-4 flex items-center gap-2 scale-90 origin-left translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="px-3 py-1 rounded-full bg-white/90 text-black text-[10px] font-bold uppercase tracking-widest">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content Layer */}
                <div className="flex flex-col gap-5 flex-1">
                  <div className="flex items-center gap-2 text-white/30 text-[10px] font-bold tracking-widest uppercase">
                    <Clock size={12} className="text-[#673DE6]" />
                    {post.readTime}
                  </div>

                  <h3 className="text-white text-xl lg:text-2xl font-bold leading-[1.2] group-hover:text-[#673DE6] transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-white/40 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/[0.03]">
                  <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest">{post.date}</span>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-[#673DE6] group-hover:text-white transition-all duration-300 transform group-hover:rotate-[-45deg]">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </a>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  )
}

