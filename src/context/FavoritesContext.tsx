import { createContext, useContext, type ReactNode } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

interface FavoritesContextValue {
  favoriteIds: string[]
  toggleFavorite: (productId: string) => void
  isFavorite: (productId: string) => boolean
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null)

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useLocalStorage<string[]>('cozypaws-favorites', [])

  function toggleFavorite(productId: string) {
    setFavoriteIds((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    )
  }

  function isFavorite(productId: string) {
    return favoriteIds.includes(productId)
  }

  return (
    <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext)
  if (!ctx) throw new Error('useFavorites must be used within a FavoritesProvider')
  return ctx
}
