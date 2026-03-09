// RSC — static. No 'use client' needed.

import Link from 'next/link'
import { Code2, Github, Twitter, Linkedin, Youtube } from 'lucide-react'

const links = {
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#portfolio' },
    { label: 'Blog', href: '#blog' },
    { label: 'Careers', href: '#' },
  ],
  Services: [
    { label: 'Web Development', href: '#services' },
    { label: 'Mobile Apps', href: '#services' },
    { label: 'UI/UX Design', href: '#services' },
    { label: 'SaaS Products', href: '#services' },
  ],
  Resources: [
    { label: 'Case Studies', href: '#' },
    { label: 'Starter Kit', href: '#' },
    { label: 'Style Guide', href: '#' },
    { label: 'Open Source', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

const socials = [
  { label: 'GitHub', icon: Github, href: '#' },
  { label: 'Twitter / X', icon: Twitter, href: '#' },
  { label: 'LinkedIn', icon: Linkedin, href: '#' },
  { label: 'YouTube', icon: Youtube, href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] pt-16 pb-8 px-6" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-16">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <Code2 size={16} className="text-black" />
              </div>
              <span className="text-white font-bold text-lg">
                Developer<span className="text-white/50">Look</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              We design and build high-performance digital products loved by 150+ startup founders
              worldwide.
            </p>
            {/* Socials */}
            <div className="flex gap-3" role="list" aria-label="Social media links">
              {socials.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  role="listitem"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/[0.1] flex items-center justify-center
                             text-white/40 hover:text-white hover:border-white/25 transition-colors duration-200
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">
                {category}
              </h3>
              <ul className="flex flex-col gap-3" role="list">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white/40 text-sm hover:text-white transition-colors duration-200
                                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8
                        border-t border-white/[0.06]">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} DeveloperLook. All rights reserved.
          </p>
          <p className="text-white/25 text-xs">
            Built with Next.js 16, Tailwind CSS v4 & Motion v12
          </p>
        </div>
      </div>
    </footer>
  )
}
