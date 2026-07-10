import { ChevronRight } from 'lucide-react'
import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { BLOG_POSTS, getBlogPost } from '../data/blogPosts'

export default function BlogPost() {
  const { id } = useParams<{ id: string }>()
  const post = id ? getBlogPost(id) : undefined

  const related = useMemo(() => {
    if (!post) return []
    return BLOG_POSTS.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 2)
  }, [post])

  if (!post) {
    return (
      <>
        <Header />
        <main className="flex min-h-[50vh] flex-col items-center justify-center px-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-900">Post not found</h1>
          <p className="mt-2 text-sm text-gray-600">
            This article may have been moved or no longer exists.
          </p>
          <Link
            to="/blog"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-sm font-medium text-white hover:bg-brand-dark-hover"
          >
            Back to Blog
          </Link>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />

      <main className="px-6 py-10 md:px-12 md:py-14">
        <nav className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
          <Link to="/" className="hover:text-brand-dark">Home</Link>
          <ChevronRight size={14} />
          <Link to="/blog" className="hover:text-brand-dark">Blog</Link>
          <ChevronRight size={14} />
          <span className="text-gray-900">{post.title}</span>
        </nav>

        <article className="mx-auto mt-6 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-wide text-brand-orange">
            {post.category}
          </p>
          <h1 className="font-serif-display mt-2 text-[#1a3d1a] text-3xl md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            {post.date} · {post.readTime}
          </p>

          <div className="mt-6 aspect-video overflow-hidden rounded-2xl">
            <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
          </div>

          <div className="mt-8 space-y-5">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed text-gray-700 md:text-base">
                {paragraph}
              </p>
            ))}
          </div>

          <Link
            to="/blog"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-brand-dark hover:text-brand-dark-hover"
          >
            ← Back to Blog
          </Link>
        </article>

        {related.length > 0 && (
          <section className="mx-auto mt-16 max-w-3xl border-t border-gray-200 pt-10">
            <h2 className="text-lg font-semibold text-gray-900">More in {post.category}</h2>
            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  to={`/blog/${r.id}`}
                  key={r.id}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-900 leading-snug">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">{r.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}
