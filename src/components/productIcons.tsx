import { Bird, Bone, Cat, Dog, Droplet, Feather, Fish, Home, PawPrint, Rabbit, Scissors } from 'lucide-react'
import type { ProductIcon } from '../data/products'

export const PRODUCT_ICONS: Record<ProductIcon, typeof Bone> = {
  bone: Bone,
  fish: Fish,
  paw: PawPrint,
  scissors: Scissors,
  home: Home,
  feather: Feather,
  droplet: Droplet,
  rabbit: Rabbit,
  bird: Bird,
  cat: Cat,
  dog: Dog,
}
