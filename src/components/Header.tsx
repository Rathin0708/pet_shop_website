import { Search, ShoppingCart, Star } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { ASSETS } from '../assets'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Delivery and payment', to: '/delivery' },
  { label: 'Brands', to: '/brands' },
  { label: 'Blog', to: '/blog' },
]

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-background bg-brand-orange text-[10px] font-bold text-white">
      {children}
    </span>
  )
}

export default function Header() {
  const { pathname } = useLocation()
  const { totalItems } = useCart()
  const { favoriteIds } = useFavorites()

  return (
    <header className="relative z-30 shrink-0 flex items-center justify-between gap-4 px-6 py-4 md:px-8 lg:px-12 animate-fade-in delay-100">
      <Link to="/" className="shrink-0">
        <img
          src={ASSETS.logo}
          alt="CozyPaws"
          className="h-[33px] w-[130px] md:h-[52px] md:w-[205px]"
        />
      </Link>

      <nav className="hidden md:flex items-center gap-3 lg:gap-8 min-w-0 animate-fade-in delay-200">
        {NAV_LINKS.map((link) => {
          const active =
            link.to === '/' ? pathname === '/' : pathname.startsWith(link.to)
          return (
            <Link
              key={link.label}
              to={link.to}
              className={`whitespace-nowrap text-xs lg:text-sm font-medium ${active ? 'text-gray-900' : 'text-gray-600'} hover:text-brand-dark transition-colors`}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>

      <div className="flex items-center gap-3 shrink-0 animate-fade-in delay-300">
        <button
          aria-label="Search"
          className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:border-brand-dark hover:text-brand-dark transition-colors"
        >
          <Search size={18} />
        </button>

        <Link
          to="/favorites"
          aria-label="Favorites"
          className="relative flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange text-white hover:bg-brand-orange-hover transition-colors"
        >
          <Star size={18} fill="white" />
          {favoriteIds.length > 0 && <Badge>{favoriteIds.length}</Badge>}
        </Link>

        <Link
          to="/cart"
          aria-label="Cart"
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:border-brand-dark hover:text-brand-dark transition-colors"
        >
          <ShoppingCart size={18} />
          {totalItems > 0 && <Badge>{totalItems}</Badge>}
        </Link>

        <img
          src={ASSETS.avatar}
          alt="Account"
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
    </header>
  )
}
