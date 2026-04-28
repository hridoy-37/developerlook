import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

function IconFacebook() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
function IconInstagram() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}
function IconLinkedin() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
function IconTiktok() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  )
}

const socials = [
  { label: 'Facebook',  Icon: IconFacebook,  href: 'https://www.facebook.com/revencomm' },
  { label: 'Instagram', Icon: IconInstagram, href: 'https://www.instagram.com/revencomm' },
  { label: 'LinkedIn',  Icon: IconLinkedin,  href: 'https://www.linkedin.com/company/revencomm' },
  { label: 'TikTok',   Icon: IconTiktok,    href: 'https://www.tiktok.com/@revencomm' },
]

const legalLinks = [
  { label: 'Terms & Conditions', href: '/terms/conditions' },
  { label: 'Privacy Policy',     href: '/privacy/policy' },
  { label: 'Contact Us',         href: '/contact' },
]

export default function Footer() {
  return (
    <footer
      className="border-t border-white/5 pt-16 pb-12 font-sans relative z-10"
      role="contentinfo"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        {/* Main row */}
        <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">

          {/* Left — Office info */}
          <div className="flex flex-col gap-4">
            <p className="text-[#FF8A00] text-[10px] font-black tracking-[0.3em] uppercase mb-2">
              Bangladesh Office
            </p>
            <a
              href="https://maps.google.com/?q=Square+Road,+GP+Ja,+Mohakhali,+Dhaka"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-white/50 hover:text-white text-sm font-medium transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FF8A00] group-hover:bg-[#FF8A00] group-hover:text-white transition-all shrink-0">
                <MapPin size={14} />
              </div>
              Square Road, GP Ja, Mohakhali, Dhaka
            </a>
            <a
              href="tel:+8801806673304"
              className="flex items-center gap-3 text-white/50 hover:text-white text-sm font-medium transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FF8A00] group-hover:bg-[#FF8A00] group-hover:text-white transition-all shrink-0">
                <Phone size={14} />
              </div>
              01806673304
            </a>
            <a
              href="mailto:info@revencomm.com"
              className="flex items-center gap-3 text-white/50 hover:text-white text-sm font-medium transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FF8A00] group-hover:bg-[#FF8A00] group-hover:text-white transition-all shrink-0">
                <Mail size={14} />
              </div>
              info@revencomm.com
            </a>
          </div>

          {/* Center — Legal / nav links */}
          <nav aria-label="Footer navigation">
            <p className="text-white/40 text-[10px] font-black tracking-[0.3em] uppercase mb-8">
              Legal Strategy
            </p>
            <ul className="flex flex-col gap-5">
              {legalLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/50 hover:text-[#FF8A00] text-sm font-bold transition-colors uppercase tracking-widest text-[11px]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right — Socials + copyright */}
          <div className="flex flex-col gap-6">
            <p className="text-white/40 text-[10px] font-black tracking-[0.3em] uppercase">
              Follow Us
            </p>
            <div className="flex gap-3" role="list" aria-label="Social media links">
              {socials.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  role="listitem"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-white/5 bg-white/[0.03] flex items-center justify-center
                             text-white/40 hover:text-white hover:bg-[#FF8A00] hover:border-[#FF8A00] rounded-full transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed mt-10">
              © {new Date().getFullYear()} RevEnComm Media & Tech.<br className="hidden md:block" /> All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
