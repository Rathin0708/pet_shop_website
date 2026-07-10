import { createContext, useContext, type ReactNode } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export interface CartItem {
  productId: string
  quantity: number
}

interface CartContextValue {
  items: CartItem[]
  addToCart: (productId: string, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useLocalStorage<CartItem[]>('cozypaws-cart', [])

  function addToCart(productId: string, quantity = 1) {
    setItems((prev) => {
      const existing = prev.find((item) => item.productId === productId)
      if (existing) {
        return prev.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }
      return [...prev, { productId, quantity }]
    })
  }

  function removeFromCart(productId: string) {
    setItems((prev) => prev.filter((item) => item.productId !== productId))
  }

  function updateQuantity(productId: string, quantity: number) {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setItems((prev) =>
      prev.map((item) => (item.productId === productId ? { ...item, quantity } : item)),
    )
  }

  function clearCart() {
    setItems([])
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
