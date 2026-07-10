import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <p className="font-serif-display text-6xl text-[#1a3d1a] md:text-8xl">404</p>
        <h1 className="mt-4 text-xl font-semibold text-gray-900">Page not found</h1>
        <p className="mt-2 max-w-sm text-sm text-gray-600">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark-hover"
        >
          Back to Home
        </Link>
      </main>
      <Footer />
    </>
  )
}
