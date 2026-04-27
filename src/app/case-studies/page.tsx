import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { getContentList, CaseStudy } from '@/lib/content'

export const metadata = {
  title: 'Case Studies | RevEnComm',
  description: 'Explore our portfolio of high-conversion digital experiences and growth campaigns.',
}

export default function CaseStudiesPage() {
  const caseStudies = getContentList<CaseStudy>('case-studies')

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-32 pb-24 bg-[#0A0A0F] min-h-screen">
        <div className="max-w-[1400px] mx-auto px-5 md:px-[25px]">
          
          <div className="mb-16 max-w-3xl">
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold tracking-tight text-white mb-4">
              Our <span className="text-gradient">Portfolio.</span>
            </h1>
            <p className="text-white/50 text-lg">
              We don&apos;t just build websites; we build scalable digital businesses. Here is a look at some of the brands we&apos;ve transformed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {caseStudies.map((study) => (
              <Link 
                href={`/case-studies/${study.slug}`} 
                key={study.slug}
                className="group flex flex-col bg-[#11111A] border border-white/[0.06] rounded-[32px] overflow-hidden hover:border-[#673DE6]/40 transition-all duration-500"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image 
                    src={study.coverImage} 
                    alt={study.title} 
                    fill 
                    className="object-cover group-hover:scale-105 group-hover:rotate-1 transition-transform duration-700" 
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11111A] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div className="flex gap-2">
                      <span className="bg-black/50 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                        {study.service}
                      </span>
                    </div>
                    <div className="bg-[#673DE6]/20 backdrop-blur-md border border-[#673DE6]/40 text-white text-[11px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full">
                      {study.metric}
                    </div>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col">
                  <p className="text-[#673DE6] text-xs font-bold tracking-widest uppercase mb-3">{study.client}</p>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-[#673DE6] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-white/50 text-base leading-relaxed">
                    {study.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
