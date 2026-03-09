// RSC — root layout. LazyMotion + MotionConfig wrap the entire app.
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LazyMotion, domAnimation, MotionConfig } from 'motion/react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DeveloperLook — Premium Web & App Development Agency',
  description:
    'We design and build high-performance websites and applications loved by 150+ startup founders. Next.js, React, mobile apps, UI/UX design.',
  keywords: ['web development', 'app development', 'Next.js', 'React', 'UI/UX design', 'startup'],
  openGraph: {
    title: 'DeveloperLook — Premium Web & App Development Agency',
    description: 'We build high-performance digital products loved by 150+ startup founders.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0a0a0a] text-white antialiased">
        <LazyMotion features={domAnimation} strict>
          <MotionConfig
            reducedMotion="user"
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {children}
          </MotionConfig>
        </LazyMotion>
      </body>
    </html>
  )
}
