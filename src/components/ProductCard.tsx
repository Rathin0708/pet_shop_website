import { Check, Heart, ShoppingCart, Star } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'
import type { Product } from '../data/products'
import { PRODUCT_ICONS } from './productIcons'

export default function ProductCard({
  product,
  animationDelay,
  visible = true,
}: {
  product: Product
  animationDelay?: number
  visible?: boolean
}) {
  const Icon = PRODUCT_ICONS[product.icon]
  const { addToCart } = useCart()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [justAdded, setJustAdded] = useState(false)
  const favorite = isFavorite(product.id)

  function handleAddToCart() {
    addToCart(product.id)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1200)
  }

  return (
    <div
      className={`group rounded-2xl bg-white p-4 shadow-sm transition-shadow hover:shadow-lg ${visible ? 'animate-scale-in' : 'opacity-0'}`}
      style={visible && animationDelay ? { animationDelay: `${animationDelay}ms` } : undefined}
    >
      <div
        className="relative flex aspect-square items-center justify-center rounded-xl"
        style={{ backgroundColor: product.bg }}
      >
        <Icon size={56} className="text-brand-dark" strokeWidth={1.5} />
        <button
          type="button"
          aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
          onClick={() => toggleFavorite(product.id)}
          className={`absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 transition-colors ${favorite ? 'text-brand-orange' : 'text-gray-600 hover:text-brand-orange'}`}
        >
          <Heart size={16} fill={favorite ? '#E86A10' : 'none'} />
        </button>
      </div>

      <div className="mt-4">
        <p className="text-xs font-medium uppercase tracking-wide text-brand-orange">
          {product.type}
        </p>
        <h3 className="mt-1 text-sm font-semibold text-gray-900">{product.name}</h3>
        <div className="mt-1 flex items-center gap-1">
          <Star size={14} className="text-brand-orange" fill="#E86A10" />
          <span className="text-xs text-gray-600">{product.rating}</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-bold text-brand-dark">${product.price.toFixed(2)}</span>
          <button
            type="button"
            aria-label={`Add ${product.name} to cart`}
            onClick={handleAddToCart}
            className={`flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors ${justAdded ? 'bg-green-600' : 'bg-brand-dark hover:bg-brand-dark-hover'}`}
          >
            {justAdded ? <Check size={15} /> : <ShoppingCart size={15} />}
          </button>
        </div>
      </div>
    </div>
  )
}
