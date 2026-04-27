import { notFound } from 'next/navigation'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MarkdownRenderer from '@/components/ui/MarkdownRenderer'
import { getContentBySlug, CaseStudy } from '@/lib/content'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = getContentBySlug<CaseStudy>('case-studies', slug)
  if (!study) return { title: 'Not Found' }
  return {
    title: `${study.title} | Portfolio | RevEnComm`,
    description: study.description,
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = getContentBySlug<CaseStudy>('case-studies', slug)

  if (!study) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-32 pb-24 bg-[#0A0A0F] min-h-screen">
        <article className="max-w-[1000px] mx-auto px-5 md:px-[25px]">
          
          <header className="mb-16">
            <h1 className="text-[clamp(3rem,6vw,5rem)] font-extrabold tracking-tight text-white leading-[1.05] mb-8">
              {study.title}
            </h1>

            <div className="flex flex-wrap gap-6 md:gap-12 py-6 border-y border-white/[0.08] mb-12">
              <div className="flex flex-col gap-1">
                <span className="text-white/40 text-[10px] font-bold tracking-widest uppercase">Client</span>
                <span className="text-white font-medium text-lg">{study.client}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white/40 text-[10px] font-bold tracking-widest uppercase">Service</span>
                <span className="text-white font-medium text-lg">{study.service}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white/40 text-[10px] font-bold tracking-widest uppercase">Key Metric</span>
                <span className="text-[#673DE6] font-extrabold text-lg">{study.metric}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white/40 text-[10px] font-bold tracking-widest uppercase">Year</span>
                <span className="text-white font-medium text-lg">
                  {new Date(study.date).getFullYear()}
                </span>
              </div>
            </div>

            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden border border-white/[0.08]">
              <Image 
                src={study.coverImage} 
                alt={study.title} 
                fill 
                priority
                className="object-cover" 
              />
            </div>
          </header>

          <div className="max-w-[800px] mx-auto">
            <MarkdownRenderer content={study.content} />
          </div>
          
        </article>
      </main>
      <Footer />
    </>
  )
}
