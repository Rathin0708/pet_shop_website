import { Link } from 'react-router-dom'
import { FEATURED_PRODUCTS } from '../data/products'
import { useInView } from '../hooks/useInView'
import ProductCard from './ProductCard'

export default function FeaturedProducts() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section className="bg-white/60 px-6 py-16 md:px-12 md:py-24">
      <div ref={ref} className={inView ? 'animate-fade-up' : 'opacity-0'}>
        <div className="flex flex-col items-center gap-2 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <h2 className="font-serif-display text-[#1a3d1a] text-3xl md:text-4xl">
              Featured Products
            </h2>
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              Hand-picked favorites your pets keep coming back to
            </p>
          </div>
          <Link
            to="/shop"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand-dark px-5 py-2.5 text-sm font-medium text-brand-dark transition-colors hover:bg-brand-dark hover:text-white md:mt-0"
          >
            View All
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_PRODUCTS.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              visible={inView}
              animationDelay={i * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
