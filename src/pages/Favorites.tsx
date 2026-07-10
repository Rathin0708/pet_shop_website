import { ChevronRight, Heart } from 'lucide-react'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import { useFavorites } from '../context/FavoritesContext'
import { getProduct } from '../data/products'

export default function Favorites() {
  const { favoriteIds } = useFavorites()

  const favoriteProducts = useMemo(
    () => favoriteIds.map(getProduct).filter((p): p is NonNullable<typeof p> => Boolean(p)),
    [favoriteIds],
  )

  return (
    <>
      <Header />

      <main className="min-h-[65vh] px-6 py-10 md:px-12 md:py-14">
        <nav className="flex items-center gap-1.5 text-sm text-gray-500">
          <Link to="/" className="hover:text-brand-dark">Home</Link>
          <ChevronRight size={14} />
          <span className="text-gray-900">Favorites</span>
        </nav>

        <h1 className="font-serif-display mt-4 text-[#1a3d1a] text-3xl md:text-5xl">
          Your Favorites
        </h1>
        <p className="mt-2 text-gray-600 text-sm md:text-base">
          Products you've saved for later
        </p>

        {favoriteProducts.length === 0 ? (
          <div className="mx-auto mt-12 flex max-w-md flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <Heart size={28} className="text-gray-400" />
            </div>
            <h2 className="mt-5 text-lg font-semibold text-gray-900">No favorites yet</h2>
            <p className="mt-2 text-sm text-gray-600">
              Tap the heart on any product to save it here for later.
            </p>
            <Link
              to="/shop"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark-hover"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <>
            <p className="mt-6 text-sm text-gray-500">
              {favoriteProducts.length} {favoriteProducts.length === 1 ? 'item' : 'items'}
            </p>
            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {favoriteProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </main>

      <Footer />
    </>
  )
}
