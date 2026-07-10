import { CheckCircle2, ChevronRight, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { PRODUCT_ICONS } from '../components/productIcons'
import { useCart } from '../context/CartContext'
import { getProduct } from '../data/products'

const FREE_SHIPPING_THRESHOLD = 50
const SHIPPING_COST = 4.99

export default function Cart() {
  const { items, updateQuantity, removeFromCart, clearCart } = useCart()
  const [orderPlaced, setOrderPlaced] = useState(false)

  const lineItems = useMemo(
    () =>
      items
        .map((item) => ({ ...item, product: getProduct(item.productId) }))
        .filter((item): item is typeof item & { product: NonNullable<typeof item.product> } =>
          Boolean(item.product),
        ),
    [items],
  )

  const subtotal = lineItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST
  const total = subtotal + shipping

  function handleCheckout() {
    clearCart()
    setOrderPlaced(true)
  }

  return (
    <>
      <Header />

      <main className="min-h-[65vh] px-6 py-10 md:px-12 md:py-14">
        <nav className="flex items-center gap-1.5 text-sm text-gray-500">
          <Link to="/" className="hover:text-brand-dark">Home</Link>
          <ChevronRight size={14} />
          <span className="text-gray-900">Cart</span>
        </nav>

        <h1 className="font-serif-display mt-4 text-[#1a3d1a] text-3xl md:text-5xl">
          Your Cart
        </h1>

        {orderPlaced ? (
          <div className="mx-auto mt-12 flex max-w-md flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-dark/10">
              <CheckCircle2 size={32} className="text-brand-dark" />
            </div>
            <h2 className="font-serif-display mt-5 text-2xl text-[#1a3d1a]">Order placed!</h2>
            <p className="mt-2 text-sm text-gray-600">
              Thank you for shopping with CozyPaws. A confirmation has been sent to your email.
            </p>
            <Link
              to="/shop"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark-hover"
            >
              Continue Shopping
            </Link>
          </div>
        ) : lineItems.length === 0 ? (
          <div className="mx-auto mt-12 flex max-w-md flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <ShoppingBag size={28} className="text-gray-400" />
            </div>
            <h2 className="mt-5 text-lg font-semibold text-gray-900">Your cart is empty</h2>
            <p className="mt-2 text-sm text-gray-600">
              Looks like you haven't added anything yet. Explore our products to find something
              your pet will love.
            </p>
            <Link
              to="/shop"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark-hover"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              {lineItems.map(({ product, quantity }) => {
                const Icon = PRODUCT_ICONS[product.icon]
                return (
                  <div
                    key={product.id}
                    className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm"
                  >
                    <div
                      className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: product.bg }}
                    >
                      <Icon size={32} className="text-brand-dark" strokeWidth={1.5} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium uppercase tracking-wide text-brand-orange">
                        {product.type}
                      </p>
                      <h3 className="truncate text-sm font-semibold text-gray-900">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">${product.price.toFixed(2)} each</p>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-brand-dark hover:text-brand-dark"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-6 text-center text-sm font-medium text-gray-900">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-brand-dark hover:text-brand-dark"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <p className="w-20 shrink-0 text-right font-bold text-brand-dark">
                      ${(product.price * quantity).toFixed(2)}
                    </p>

                    <button
                      type="button"
                      aria-label={`Remove ${product.name} from cart`}
                      onClick={() => removeFromCart(product.id)}
                      className="shrink-0 text-gray-400 hover:text-red-500"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                )
              })}
            </div>

            <div className="lg:col-span-1">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">Order Summary</h2>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-gray-400">
                      Free shipping on orders over ${FREE_SHIPPING_THRESHOLD}
                    </p>
                  )}
                </div>
                <div className="mt-4 flex justify-between border-t border-gray-100 pt-4 text-base font-semibold text-gray-900">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCheckout}
                  className="mt-6 w-full rounded-full bg-brand-orange py-3 text-sm font-medium text-white transition-colors hover:bg-brand-orange-hover"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}
