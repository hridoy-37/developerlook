import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { getContentList, BlogPost } from '@/lib/content'
import { ArrowUpRight } from 'lucide-react'

export const metadata = {
  title: 'Our Blog | RevEnComm',
  description: 'Insights, strategies, and deep dives into the digital landscape.',
}

export default function BlogsPage() {
  const blogs = getContentList<BlogPost>('blogs')

  // Separate the latest blog as featured
  const featuredBlog = blogs[0]
  const restBlogs = blogs.slice(1)

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-32 pb-24 bg-[#0A0A0F] min-h-screen font-sans selection:bg-[#673DE6] selection:text-white">
        <div className="max-w-[1400px] mx-auto px-5 md:px-[25px]">
          
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-12 gap-8">
            <div className="max-w-3xl">
              <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-extrabold tracking-tight text-white mb-6 leading-[1.05] uppercase">
                Insights <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#673DE6] to-[#9D7AFF]">& Strategies</span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl font-medium max-w-xl">
                Deep dives into digital marketing, brand growth, and AI automation tailored for the modern founder.
              </p>
            </div>
            <div className="hidden md:block text-white/40 text-sm font-mono tracking-widest uppercase text-right">
              <p>Updated Regularly</p>
              <p>Vol. {new Date().getFullYear()}</p>
            </div>
          </div>

          {featuredBlog && (
            <div className="mb-16 md:mb-24">
              <h2 className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-white/20"></span> Featured Article
              </h2>
              <Link 
                href={`/blogs/${featuredBlog.slug}`}
                className="group block relative overflow-hidden bg-[#0e0e14] border border-white/10 transition-colors hover:border-[#673DE6]/50"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-[60%] relative aspect-[16/9] lg:aspect-auto lg:min-h-[500px] overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                    <Image 
                      src={featuredBlog.coverImage} 
                      alt={featuredBlog.title} 
                      fill 
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                      priority
                    />
                  </div>
                  <div className="lg:w-[40%] p-8 md:p-12 flex flex-col justify-between relative bg-gradient-to-br from-transparent to-[#1a1a24]/50">
                    <div>
                      <div className="flex items-center gap-3 text-white/50 text-xs font-mono tracking-widest uppercase mb-6">
                        <span className="text-[#673DE6] font-bold">{featuredBlog.category}</span>
                        <span>•</span>
                        <time dateTime={featuredBlog.date}>
                          {new Date(featuredBlog.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                        </time>
                      </div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight group-hover:text-[#673DE6] transition-colors">
                        {featuredBlog.title}
                      </h3>
                      <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">
                        {featuredBlog.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-white text-sm font-bold tracking-widest uppercase mt-auto">
                      Read Article 
                      <ArrowUpRight size={18} className="text-[#673DE6] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {restBlogs.map((blog) => (
              <Link 
                href={`/blogs/${blog.slug}`} 
                key={blog.slug}
                className="group flex flex-col bg-[#0A0A0F] hover:bg-[#0e0e14] transition-colors duration-300 h-full"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-white/10">
                  <Image 
                    src={blog.coverImage} 
                    alt={blog.title} 
                    fill 
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                  />
                  <div className="absolute top-4 left-4 bg-[#0A0A0F] border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5">
                    {blog.category}
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                  <div className="flex justify-between items-center text-white/40 text-[11px] font-mono tracking-widest uppercase mb-4">
                    <time dateTime={blog.date}>
                      {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                    </time>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-[#673DE6] transition-colors leading-[1.2] tracking-tight">
                    {blog.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mt-auto mb-8 line-clamp-3">
                    {blog.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors">
                    <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Explore</span>
                    <ArrowUpRight size={16} className="text-white/30 group-hover:text-[#673DE6] transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
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
