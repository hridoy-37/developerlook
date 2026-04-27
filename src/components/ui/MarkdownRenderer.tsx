import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="w-full mx-auto text-white/70 text-[15px] md:text-[18px] leading-[1.8] font-sans antialiased">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-2xl md:text-5xl font-extrabold text-white mt-10 md:mt-16 mb-5 md:mb-8 tracking-tight uppercase leading-[1.1]" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-xl md:text-4xl font-bold text-white mt-10 md:mt-16 mb-4 md:mb-6 tracking-tight uppercase leading-[1.1]" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-lg md:text-2xl font-bold text-white mt-8 md:mt-12 mb-3 md:mb-4 leading-snug uppercase tracking-wide" {...props} />
          ),
          h4: ({ node, ...props }) => (
            <h4 className="text-base md:text-lg font-bold text-white mt-6 md:mt-8 mb-3 md:mb-4 uppercase tracking-widest" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="mb-5 md:mb-8" {...props} />
          ),
          a: ({ node, ...props }) => (
            <a className="text-[#673DE6] hover:text-white border-b border-[#673DE6]/50 hover:border-white transition-colors break-words" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-[square] list-outside ml-4 md:ml-6 mb-5 md:mb-8 space-y-2 md:space-y-3 marker:text-[#673DE6]" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal list-outside ml-4 md:ml-6 mb-5 md:mb-8 space-y-2 md:space-y-3 marker:text-[#673DE6] font-mono text-sm" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="pl-2 md:pl-3" {...props} />
          ),
          strong: ({ node, ...props }) => (
            <strong className="font-bold text-white" {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-2 border-[#673DE6] pl-4 md:pl-8 py-3 md:py-4 my-8 md:my-12 bg-[#0e0e14] italic text-white/90 text-base md:text-xl leading-relaxed" {...props} />
          ),
          code: ({ node, inline, ...props }: any) =>
            inline ? (
              <code className="bg-[#0e0e14] text-[#A78BFA] px-1.5 py-0.5 text-[0.82em] font-mono border border-white/10 break-words" {...props} />
            ) : (
              <pre className="bg-[#0e0e14] border border-white/10 p-4 md:p-6 overflow-x-auto my-8 md:my-10 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#673DE6] to-transparent"></div>
                <code className="text-white/80 text-xs md:text-[0.85em] font-mono leading-loose" {...props} />
              </pre>
            ),
          img: ({ node, ...props }) => (
            <span className="block my-8 md:my-14 relative w-full overflow-hidden border border-white/10 bg-[#0e0e14]">
              <img className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" alt={props.alt || ''} {...props} />
              {props.alt && (
                <span className="block text-left text-xs font-mono uppercase tracking-widest text-white/40 pt-3 pb-3 px-4 md:px-6 border-t border-white/10 bg-[#0e0e14]">
                  FIG: {props.alt}
                </span>
              )}
            </span>
          ),
          hr: ({ node, ...props }) => (
            <hr className="my-10 md:my-16 border-t border-white/10" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
