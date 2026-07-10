import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { BRAND_PROFILES } from '../data/brands'

const TILE_COLORS = ['#FCE7D6', '#DCEFFB', '#E6E3FB', '#DFF3E1', '#FDE4E9', '#FCE7D6']

export default function Brands() {
  return (
    <>
      <Header />

      <main className="px-6 py-10 md:px-12 md:py-14">
        <nav className="flex items-center gap-1.5 text-sm text-gray-500">
          <Link to="/" className="hover:text-brand-dark">Home</Link>
          <ChevronRight size={14} />
          <span className="text-gray-900">Brands</span>
        </nav>

        <h1 className="font-serif-display mt-4 text-[#1a3d1a] text-3xl md:text-5xl">
          Our Brands
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600 text-sm md:text-base">
          We only carry brands we'd trust with our own pets.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BRAND_PROFILES.map((brand, i) => (
            <div key={brand.name} className="rounded-2xl bg-white p-6 shadow-sm">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full font-serif-display text-xl text-brand-dark"
                style={{ backgroundColor: TILE_COLORS[i % TILE_COLORS.length] }}
              >
                {brand.name.charAt(0)}
              </div>
              <h2 className="mt-4 text-base font-semibold text-gray-900">{brand.name}</h2>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">{brand.tagline}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {brand.pets.map((pet) => (
                  <span
                    key={pet}
                    className="rounded-full bg-brand-dark/5 px-2.5 py-1 text-xs font-medium text-brand-dark"
                  >
                    {pet}
                  </span>
                ))}
              </div>
              <Link
                to="/shop"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-dark hover:text-brand-dark-hover"
              >
                Shop {brand.name}
                <ChevronRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}
