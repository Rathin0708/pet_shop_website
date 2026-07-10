import { ChevronRight } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { BLOG_POSTS, type BlogCategory } from '../data/blogPosts'

const CATEGORY_FILTERS: (BlogCategory | 'All')[] = ['All', 'Dogs', 'Cats', 'General']

export default function Blog() {
  const [category, setCategory] = useState<BlogCategory | 'All'>('All')

  const posts = useMemo(
    () => (category === 'All' ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === category)),
    [category],
  )

  return (
    <>
      <Header />

      <main className="px-6 py-10 md:px-12 md:py-14">
        <nav className="flex items-center gap-1.5 text-sm text-gray-500">
          <Link to="/" className="hover:text-brand-dark">Home</Link>
          <ChevronRight size={14} />
          <span className="text-gray-900">Blog</span>
        </nav>

        <h1 className="font-serif-display mt-4 text-[#1a3d1a] text-3xl md:text-5xl">
          The CozyPaws Blog
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600 text-sm md:text-base">
          Tips, guides, and stories from our pet care team.
        </p>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-1">
          {CATEGORY_FILTERS.map((cat) => {
            const active = category === cat
            return (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? 'border-brand-dark bg-brand-dark text-white'
                    : 'border-gray-300 text-gray-700 hover:border-brand-dark hover:text-brand-dark'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        <p className="mt-6 text-sm text-gray-500">
          {posts.length} {posts.length === 1 ? 'article' : 'articles'}
        </p>

        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              to={`/blog/${post.id}`}
              key={post.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-brand-orange">
                  {post.category}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  {post.date} · {post.readTime}
                </p>
                <h3 className="mt-2 text-base font-semibold text-gray-900 leading-snug">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}
