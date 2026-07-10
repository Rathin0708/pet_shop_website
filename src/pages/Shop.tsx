import { Bird, ChevronDown, ChevronRight, Dog, Cat as CatIcon, Fish, Rabbit } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import { PRODUCTS, type Pet } from '../data/products'

const PET_FILTERS: { label: Pet | 'All'; icon: typeof Dog | null }[] = [
  { label: 'All', icon: null },
  { label: 'Dogs', icon: Dog },
  { label: 'Cats', icon: CatIcon },
  { label: 'Birds', icon: Bird },
  { label: 'Small Pets', icon: Rabbit },
  { label: 'Fish', icon: Fish },
]

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating'

const SORT_LABELS: Record<SortOption, string> = {
  featured: 'Featured',
  'price-asc': 'Price: Low to High',
  'price-desc': 'Price: High to Low',
  rating: 'Top Rated',
}

export default function Shop() {
  const [petFilter, setPetFilter] = useState<Pet | 'All'>('All')
  const [sort, setSort] = useState<SortOption>('featured')

  const products = useMemo(() => {
    const filtered =
      petFilter === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.pet === petFilter)

    const sorted = [...filtered]
    if (sort === 'price-asc') sorted.sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') sorted.sort((a, b) => b.price - a.price)
    if (sort === 'rating') sorted.sort((a, b) => b.rating - a.rating)

    return sorted
  }, [petFilter, sort])

  return (
    <>
      <Header />

      <main className="px-6 py-10 md:px-12 md:py-14">
        <nav className="flex items-center gap-1.5 text-sm text-gray-500">
          <Link to="/" className="hover:text-brand-dark">Home</Link>
          <ChevronRight size={14} />
          <span className="text-gray-900">Shop</span>
        </nav>

        <h1 className="font-serif-display mt-4 text-[#1a3d1a] text-3xl md:text-5xl">
          Shop All Products
        </h1>
        <p className="mt-2 text-gray-600 text-sm md:text-base">
          Everything your pets love, in one place
        </p>

        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible">
            {PET_FILTERS.map(({ label, icon: Icon }) => {
              const active = petFilter === label
              return (
                <button
                  key={label}
                  onClick={() => setPetFilter(label)}
                  className={`flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? 'border-brand-dark bg-brand-dark text-white'
                      : 'border-gray-300 text-gray-700 hover:border-brand-dark hover:text-brand-dark'
                  }`}
                >
                  {Icon && <Icon size={15} />}
                  {label}
                </button>
              )
            })}
          </div>

          <div className="relative shrink-0">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="appearance-none rounded-full border border-gray-300 bg-white py-2 pl-4 pr-9 text-sm font-medium text-gray-700 outline-none hover:border-brand-dark focus:border-brand-dark"
            >
              {(Object.keys(SORT_LABELS) as SortOption[]).map((key) => (
                <option key={key} value={key}>
                  {SORT_LABELS[key]}
                </option>
              ))}
            </select>
            <ChevronDown
              size={15}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          {products.length} {products.length === 1 ? 'product' : 'products'}
        </p>

        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}
