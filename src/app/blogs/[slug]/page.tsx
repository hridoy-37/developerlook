import { notFound } from 'next/navigation'
import Image from 'next/image'
import MarkdownRenderer from '@/components/ui/MarkdownRenderer'
import { getContentBySlug, getContentList, BlogPost } from '@/lib/content'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import ReadingProgress from '@/components/blog/ReadingProgress'

// Enable dynamic params since we haven't set up generateStaticParams yet,
// but in a fully static export you would want generateStaticParams.

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const blog = getContentBySlug<BlogPost>('blogs', slug)
  if (!blog) return { title: 'Not Found' }
  return {
    title: `${blog.title} | RevEnComm`,
    description: blog.description,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const blog = getContentBySlug<BlogPost>('blogs', slug)

  if (!blog) {
    notFound()
  }

  const allBlogs = getContentList<BlogPost>('blogs')
  const currentIndex = allBlogs.findIndex(b => b.slug === slug)
  const prevBlog = allBlogs[currentIndex + 1] ?? null
  const nextBlog = allBlogs[currentIndex - 1] ?? null

  return (
    <>
      <ReadingProgress />

      <main id="main-content" className="min-h-screen selection:bg-[#FF8A00]/30 selection:text-white pt-32 pb-24">
        <article className="relative z-10">
          
          {/* Header Section */}
          <header className="px-5 md:px-10 mb-12 md:mb-20">
            <div className="max-w-[1000px] mx-auto">
              <Link
                href="/blogs"
                className="group inline-flex items-center gap-3 text-white/40 hover:text-[#FF8A00] mb-12 text-[10px] font-black tracking-[0.3em] uppercase transition-all"
              >
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#FF8A00]/40 group-hover:-translate-x-1 transition-all">
                  <ArrowLeft size={14} />
                </div>
                Intelligence Hub
              </Link>

              <div className="flex flex-wrap items-center gap-6 text-[#FF8A00] text-[10px] font-black tracking-[0.3em] uppercase mb-8">
                <span className="bg-[#FF8A00]/10 border border-[#FF8A00]/20 px-3 py-1.5 rounded-lg">{blog.category}</span>
                <time dateTime={blog.date} className="text-white/40">
                  {new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </time>
                <span className="w-1 h-1 bg-white/20 hidden sm:inline-block"></span>
                <span className="text-white/40">{blog.readTime}</span>
              </div>

              <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black tracking-tight text-white leading-[0.95] uppercase mb-12">
                {blog.title}
              </h1>

              {/* Author/Meta Info */}
              <div className="flex items-center gap-4 py-8 border-y border-white/5">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-black text-white/40 text-xs">
                  RC
                </div>
                <div>
                  <p className="text-white font-bold text-sm tracking-tight">RevEnComm Strategy Team</p>
                  <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Growth & Automation Division</p>
                </div>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <div className="max-w-[1400px] mx-auto px-5 md:px-10 mb-16 md:mb-24">
            <div className="relative w-full aspect-[21/9] rounded-[40px] border border-white/5 bg-white/[0.02] overflow-hidden group shadow-2xl">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                fill
                priority
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>

          {/* Content Section with Glassmorphic Plate */}
          <div className="max-w-[1000px] mx-auto px-5 md:px-10">
            <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[48px] p-8 md:p-20 shadow-2xl relative">
              <div className="max-w-[720px] mx-auto">
                <div className="prose prose-invert prose-orange max-w-none">
                  <MarkdownRenderer content={blog.content} />
                </div>

                {/* Engagement Footer */}
                <div className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">
                    End of Analysis
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest hidden sm:block">Share Strategic Insight:</span>
                    <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                      <ArrowRight size={18} className="-rotate-45" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Prev / Next Navigation */}
            {(prevBlog || nextBlog) && (
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                {prevBlog && (
                  <Link
                    href={`/blogs/${prevBlog.slug}`}
                    className="group relative flex flex-col gap-6 p-8 md:p-12 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-[#FF8A00]/20 transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF8A00]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="flex items-center gap-3 text-[#FF8A00] text-[10px] font-black tracking-[0.3em] uppercase">
                      <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                      Older Analysis
                    </span>
                    <span className="text-white text-xl md:text-2xl font-black leading-[1.1] tracking-tight group-hover:text-[#FF8A00] transition-colors">
                      {prevBlog.title}
                    </span>
                  </Link>
                )}

                {nextBlog && (
                  <Link
                    href={`/blogs/${nextBlog.slug}`}
                    className="group relative flex flex-col gap-6 p-8 md:p-12 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-[#FF8A00]/20 transition-all duration-500 overflow-hidden text-right items-end"
                  >
                    <div className="absolute top-0 left-0 w-32 h-32 bg-[#FF8A00]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="flex items-center gap-3 text-[#FF8A00] text-[10px] font-black tracking-[0.3em] uppercase">
                      Newer Analysis
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-white text-xl md:text-2xl font-black leading-[1.1] tracking-tight group-hover:text-[#FF8A00] transition-colors">
                      {nextBlog.title}
                    </span>
                  </Link>
                )}
              </div>
            )}
          </div>
          
        </article>
      </main>
    </>
  )
}
