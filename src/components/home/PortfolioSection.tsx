'use client'
// 'use client' — dynamically imported. Uses m.article whileHover spring animations.

import { useState } from 'react'
import Image from 'next/image'
import { m } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { staggerContainer, staggerItem, scrollReveal } from '@/lib/animation-variants'

const BLUR_DATA = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACIQAAICAQQDAQAAAAAAAAAAAAECAwQREiExBRNBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAUG/8QAGREAAgMBAAAAAAAAAAAAAAAAAREAAgMh/9oADAMBAAIRAxEAPwBspRwqhWFivYF7o1LJJFj3x5RyrS1lNcOT0xvutUjktHnlLJJDHLLHFuWQV2yMkAFjoE+9BRQB//Z'

const projects = [
  {
    id: '1',
    title: 'FinanceOS Dashboard',
    category: 'SaaS · Web App',
    image: 'https://placehold.co/800x600/111111/333333',
    tags: ['Next.js', 'TypeScript', 'Prisma'],
    href: '#',
  },
  {
    id: '2',
    title: 'Shopflow E-Commerce',
    category: 'E-Commerce · Mobile',
    image: 'https://placehold.co/800x600/141414/444444',
    tags: ['React Native', 'Stripe', 'Supabase'],
    href: '#',
  },
  {
    id: '3',
    title: 'Lexio AI Writing Tool',
    category: 'AI Product · SaaS',
    image: 'https://placehold.co/800x600/111111/333333',
    tags: ['OpenAI', 'Next.js', 'tRPC'],
    href: '#',
  },
  {
    id: '4',
    title: 'Propex Real Estate',
    category: 'Web App · Maps',
    image: 'https://placehold.co/800x600/141414/444444',
    tags: ['React', 'Mapbox', 'Node.js'],
    href: '#',
  },
  {
    id: '5',
    title: 'HealthTrack Mobile',
    category: 'Healthcare · Mobile',
    image: 'https://placehold.co/800x600/111111/333333',
    tags: ['React Native', 'HealthKit', 'Firebase'],
    href: '#',
  },
  {
    id: '6',
    title: 'DevPortal API Docs',
    category: 'Dev Tool · Documentation',
    image: 'https://placehold.co/800x600/141414/444444',
    tags: ['Next.js', 'MDX', 'Algolia'],
    href: '#',
  },
]

const FILTERS = ['All', 'Web App', 'Mobile', 'SaaS', 'E-Commerce']

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter))

  return (
    <section
      id="portfolio"
      className="relative py-28 px-6 overflow-hidden"
      aria-labelledby="portfolio-heading"
    >
      {/* Section number */}
      <span
        className="absolute left-8 top-8 text-[clamp(80px,12vw,160px)] font-bold text-white/[0.025]
                   select-none pointer-events-none leading-none"
        aria-hidden="true"
      >
        02
      </span>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mb-14"
        >
          <m.p variants={staggerItem} className="text-white/40 text-sm font-medium tracking-widest uppercase mb-4">
            Our Work
          </m.p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <m.h2
              variants={staggerItem}
              id="portfolio-heading"
              className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.1]"
            >
              Selected Projects
            </m.h2>

            {/* Filter pills */}
            <m.div
              variants={staggerItem}
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filter projects"
            >
              {FILTERS.map((filter) => (
                <m.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  aria-pressed={activeFilter === filter}
                  className={`px-4 py-2 rounded-full text-xs font-medium border transition-colors duration-200
                    min-h-[36px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
                    ${activeFilter === filter
                      ? 'bg-white text-black border-white'
                      : 'border-white/[0.12] text-white/50 hover:border-white/30 hover:text-white'
                    }`}
                >
                  {filter}
                </m.button>
              ))}
            </m.div>
          </div>
        </m.div>

        {/* Grid */}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project) => (
            <m.article
              key={project.id}
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.015 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08]
                         cursor-pointer bg-[#111] focus-within:ring-2 focus-within:ring-white"
            >
              <a href={project.href} className="block focus:outline-none" tabIndex={0}>
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Arrow */}
                  <m.div
                    initial={{ x: 8, y: -8, opacity: 0 }}
                    whileHover={{ x: 0, y: 0, opacity: 1 }}
                    className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center"
                  >
                    <ArrowUpRight size={14} className="text-black" />
                  </m.div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-white/40 text-xs font-medium uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-white/80 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-white/[0.05] border border-white/[0.08] rounded-md
                                   text-white/40 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </m.article>
          ))}
        </m.div>

        {/* View all CTA */}
        <m.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex justify-center mt-12"
        >
          <m.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="flex items-center gap-2 border border-white/[0.15] text-white/70
                       hover:text-white hover:border-white/30 transition-colors duration-200
                       px-6 py-3 rounded-full text-sm font-medium min-h-[44px]
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Start a project with us
            <ArrowUpRight size={14} />
          </m.a>
        </m.div>
      </div>
    </section>
  )
}
