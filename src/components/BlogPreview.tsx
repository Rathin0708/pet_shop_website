import { ArrowRight } from 'lucide-react'
import { BLOG_POSTS } from '../data/blogPosts'
import { useInView } from '../hooks/useInView'

export default function BlogPreview() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section className="bg-white/60 px-6 py-16 md:px-12 md:py-24">
      <div ref={ref} className={inView ? 'animate-fade-up' : 'opacity-0'}>
        <div className="flex flex-col items-center gap-2 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <h2 className="font-serif-display text-[#1a3d1a] text-3xl md:text-4xl">
              From the Blog
            </h2>
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              Tips and guides from our pet care team
            </p>
          </div>
          <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-dark hover:text-brand-dark-hover md:mt-0">
            Read the Blog
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <article
              key={post.id}
              className={`group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg ${inView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: inView ? `${i * 120}ms` : undefined }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-gray-500">
                  {post.date} · {post.readTime}
                </p>
                <h3 className="mt-2 text-base font-semibold text-gray-900 leading-snug">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
