// RSC — static content, CSS hover only. No 'use client' needed.

import Image from 'next/image'
import { ArrowUpRight, Clock } from 'lucide-react'

const BLUR_DATA = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUHCP/EACIQAAICAQQDAQAAAAAAAAAAAAECAwQREiExBRNBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAUG/9oADAMBAAIRAxEAPwB7mMivVpV3Gv20zRRxmCWOL1FTpALYA8Vr2ysF3d6YoCJJHI2yR3JP6KKA/9k='

const posts = [
  {
    id: '1',
    category: 'Performance',
    title: 'Achieving LCP < 1s: Our Next.js 16 Optimization Playbook',
    excerpt:
      'We broke down every millisecond of our clients\' page loads and documented exactly how we achieve sub-1s LCP on production Next.js apps.',
    date: 'Mar 5, 2026',
    readTime: '8 min read',
    image: 'https://placehold.co/800x450/111111/333333',
    href: '#',
  },
  {
    id: '2',
    category: 'Motion',
    title: 'Motion v12 + LazyMotion: Cutting Bundle Size by 50%',
    excerpt:
      'How we combine LazyMotion, domAnimation, and the `m` component to ship silky-smooth 120fps animations with minimal JS.',
    date: 'Feb 22, 2026',
    readTime: '6 min read',
    image: 'https://placehold.co/800x450/141414/444444',
    href: '#',
  },
  {
    id: '3',
    category: 'Design Systems',
    title: 'Tailwind CSS v4: From tailwind.config.js to @theme',
    excerpt:
      'A practical guide to migrating from Tailwind v3 to v4 — covering @theme, @utility, Lightning CSS, and the new gradient syntax.',
    date: 'Feb 10, 2026',
    readTime: '10 min read',
    image: 'https://placehold.co/800x450/111111/333333',
    href: '#',
  },
]

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="relative py-28 px-6 overflow-hidden"
      aria-labelledby="blog-heading"
    >
      {/* Section number */}
      <span
        className="absolute right-8 top-8 text-[clamp(80px,12vw,160px)] font-bold text-white/[0.025]
                   select-none pointer-events-none leading-none"
        aria-hidden="true"
      >
        05
      </span>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <p className="text-white/40 text-sm font-medium tracking-widest uppercase mb-4">
              Insights
            </p>
            <h2
              id="blog-heading"
              className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.1]"
            >
              From the blog
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm
                       transition-colors duration-200 min-h-[44px]"
          >
            View all posts <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col bg-[#111] border border-white/[0.08] rounded-2xl overflow-hidden
                         hover:border-white/[0.15] transition-colors duration-300"
            >
              <a href={post.href} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#111]">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA}
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-white/40 uppercase tracking-wider">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-white/30 text-xs">
                      <Clock size={11} />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-white font-semibold leading-snug group-hover:text-white/80
                                 transition-colors duration-200">
                    {post.title}
                  </h3>

                  <p className="text-white/40 text-sm leading-relaxed line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
                    <span className="text-white/30 text-xs">{post.date}</span>
                    <span className="flex items-center gap-1 text-white/50 text-xs group-hover:text-white transition-colors duration-200">
                      Read more <ArrowUpRight size={12} />
                    </span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
