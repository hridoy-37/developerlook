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
      <main id="main-content" className="pt-32 pb-24 min-h-screen selection:bg-[#FF8A00]/30 selection:text-white">
        <div className="max-w-[1400px] mx-auto px-5 md:px-[25px]">
          
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-12 gap-8 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[#FF8A00] text-xs font-bold tracking-[0.3em] uppercase">Intelligence Hub</span>
                <div className="h-px w-12 bg-white/10" />
              </div>
              <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-black tracking-tight text-white mb-6 leading-[0.95] uppercase">
                Insights <br/>
                <span className="text-gradient"> & Strategies</span>
              </h1>
              <p className="text-white/50 text-lg md:text-xl font-medium max-w-xl">
                Deep dives into digital marketing, brand growth, and AI automation tailored for the modern founder.
              </p>
            </div>
          </div>

          {featuredBlog && (
            <div className="mb-24 relative z-10">
              <h2 className="text-[#FF8A00] text-[10px] font-bold tracking-[0.4em] uppercase mb-8 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-[#FF8A00]/20"></span> Featured Analysis
              </h2>
              <Link 
                href={`/blogs/${featuredBlog.slug}`}
                className="group block relative overflow-hidden bg-white/[0.02] backdrop-blur-3xl border border-white/10 transition-all duration-500 hover:border-[#FF8A00]/30 rounded-[40px]"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-[60%] relative aspect-[16/9] lg:aspect-auto lg:min-h-[550px] overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
                    <Image 
                      src={featuredBlog.coverImage} 
                      alt={featuredBlog.title} 
                      fill 
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  </div>
                  <div className="lg:w-[40%] p-8 md:p-16 flex flex-col justify-center relative">
                    <div>
                      <div className="flex items-center gap-3 text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
                        <span className="text-[#FF8A00]">{featuredBlog.category}</span>
                        <span>•</span>
                        <time dateTime={featuredBlog.date}>
                          {new Date(featuredBlog.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                        </time>
                      </div>
                      <h3 className="text-3xl md:text-5xl font-black text-white mb-8 leading-[1] tracking-tight group-hover:text-[#FF8A00] transition-colors">
                        {featuredBlog.title}
                      </h3>
                      <p className="text-white/50 text-lg leading-relaxed mb-12 font-medium">
                        {featuredBlog.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-white text-xs font-bold tracking-widest uppercase mt-auto">
                      <span className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
                        <ArrowUpRight size={18} />
                      </span>
                      Explore Full Strategy
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {restBlogs.map((blog) => (
              <Link 
                href={`/blogs/${blog.slug}`} 
                key={blog.slug}
                className="group flex flex-col bg-white/[0.02] backdrop-blur-2xl border border-white/5 hover:border-[#FF8A00]/20 transition-all duration-500 rounded-[32px] overflow-hidden h-full"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-white/5">
                  <Image 
                    src={blog.coverImage} 
                    alt={blog.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 grayscale-[40%] group-hover:grayscale-0 opacity-80 group-hover:opacity-100" 
                  />
                  <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 text-white text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg">
                    {blog.category}
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <div className="flex justify-between items-center text-white/30 text-[10px] font-bold tracking-widest uppercase mb-6">
                    <time dateTime={blog.date}>
                      {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                    </time>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-6 group-hover:text-[#FF8A00] transition-colors leading-[1.1] tracking-tight">
                    {blog.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed mt-auto mb-10 line-clamp-3 font-medium">
                    {blog.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5 transition-colors">
                    <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Analysis</span>
                    <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-white/30 group-hover:bg-[#FF8A00] group-hover:text-white transition-all group-hover:rotate-45">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>
    </>
  )
}
