import { notFound } from 'next/navigation'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MarkdownRenderer from '@/components/ui/MarkdownRenderer'
import { getContentBySlug, getContentList, BlogPost } from '@/lib/content'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

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
  const prevBlog = allBlogs[currentIndex + 1] ?? null  // older
  const nextBlog = allBlogs[currentIndex - 1] ?? null  // newer

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-20 md:pt-24 bg-[#0A0A0F] min-h-screen font-sans selection:bg-[#673DE6] selection:text-white">
        <article>
          {/* Header Section */}
          <header className="border-b border-white/10 pt-10 md:pt-24 pb-10 md:pb-16 px-5 md:px-[25px]">
            <div className="max-w-[1000px] mx-auto">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 md:mb-16 text-xs font-bold tracking-[0.2em] uppercase transition-colors"
              >
                <ArrowLeft size={16} /> Back to Insights
              </Link>

              <div className="flex flex-wrap items-center gap-3 md:gap-6 text-white/60 text-[10px] md:text-sm font-mono tracking-widest uppercase mb-6 md:mb-8">
                <span className="text-[#673DE6] font-bold border border-[#673DE6]/30 px-2.5 py-1 bg-[#673DE6]/10">{blog.category}</span>
                <time dateTime={blog.date}>
                  {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </time>
                <span className="w-1 h-1 bg-white/20 hidden sm:inline-block"></span>
                <span>{blog.readTime}</span>
              </div>

              <h1 className="text-[clamp(1.75rem,5vw,5rem)] font-extrabold tracking-tight text-white leading-[1.1] uppercase">
                {blog.title}
              </h1>
            </div>
          </header>

          {/* Hero Image */}
          <div className="w-full max-w-[1400px] mx-auto px-4 md:px-[25px] py-6 md:py-16">
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] border border-white/10 bg-[#0e0e14] overflow-hidden">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                fill
                priority
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 border border-white/5 pointer-events-none mix-blend-overlay"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-[800px] mx-auto px-4 md:px-[25px] pb-12 md:pb-24">
            <div className="w-full">
              <MarkdownRenderer content={blog.content} />
            </div>

            {/* Footer / Share */}
            <div className="mt-10 md:mt-20 pt-8 md:pt-10 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-white/50 text-xs font-mono tracking-widest uppercase">
                End of Article
              </div>
              <div className="flex gap-3">
                <button className="border border-white/10 bg-[#0e0e14] hover:bg-white hover:text-black transition-colors px-4 md:px-6 py-2.5 md:py-3 text-xs font-bold tracking-widest uppercase">
                  Share
                </button>
                <button className="border border-white/10 bg-[#0e0e14] hover:bg-[#673DE6] hover:border-[#673DE6] transition-colors px-4 md:px-6 py-2.5 md:py-3 text-xs font-bold tracking-widest uppercase">
                  Copy Link
                </button>
              </div>
            </div>

            {/* Prev / Next Navigation */}
            {(prevBlog || nextBlog) && (
              <div className="mt-8 md:mt-12 border border-white/10">
                <div className={`grid gap-px bg-white/10 ${prevBlog && nextBlog ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                  {prevBlog && (
                    <Link
                      href={`/blogs/${prevBlog.slug}`}
                      className="group flex flex-col gap-2 md:gap-3 p-5 md:p-8 bg-[#0A0A0F] hover:bg-[#0e0e14] transition-colors"
                    >
                      <span className="flex items-center gap-2 text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase">
                        <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform shrink-0" />
                        Previous Article
                      </span>
                      <span className="text-white/80 text-sm font-bold leading-snug group-hover:text-white transition-colors line-clamp-2">
                        {prevBlog.title}
                      </span>
                      <span className="text-[#673DE6] text-[10px] font-bold tracking-widest uppercase">{prevBlog.category}</span>
                    </Link>
                  )}

                  {nextBlog && (
                    <Link
                      href={`/blogs/${nextBlog.slug}`}
                      className={`group flex flex-col gap-2 md:gap-3 p-5 md:p-8 bg-[#0A0A0F] hover:bg-[#0e0e14] transition-colors ${prevBlog ? 'sm:text-right border-t sm:border-t-0 sm:border-l border-white/10' : ''}`}
                    >
                      <span className={`flex items-center gap-2 text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase ${prevBlog ? 'sm:justify-end' : ''}`}>
                        Next Article
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform shrink-0" />
                      </span>
                      <span className="text-white/80 text-sm font-bold leading-snug group-hover:text-white transition-colors line-clamp-2">
                        {nextBlog.title}
                      </span>
                      <span className="text-[#673DE6] text-[10px] font-bold tracking-widest uppercase">{nextBlog.category}</span>
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
          
        </article>
      </main>
      <Footer />
    </>
  )
}
