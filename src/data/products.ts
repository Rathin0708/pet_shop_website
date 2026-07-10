export type Pet = 'Dogs' | 'Cats' | 'Birds' | 'Small Pets' | 'Fish'
export type ProductIcon =
  | 'bone'
  | 'fish'
  | 'paw'
  | 'scissors'
  | 'home'
  | 'feather'
  | 'droplet'
  | 'rabbit'
  | 'bird'
  | 'cat'
  | 'dog'

export interface Product {
  id: string
  name: string
  pet: Pet
  type: string
  price: number
  rating: number
  icon: ProductIcon
  bg: string
  featured?: boolean
}

export const PRODUCTS: Product[] = [
  {
    id: 'dog-food',
    name: 'Premium Dry Dog Food',
    pet: 'Dogs',
    type: 'Nutrition',
    price: 34.99,
    rating: 4.8,
    icon: 'bone',
    bg: '#FCE7D6',
    featured: true,
  },
  {
    id: 'dog-chew-toy',
    name: 'Dog Chew Toy Bundle',
    pet: 'Dogs',
    type: 'Toys',
    price: 15.2,
    rating: 4.4,
    icon: 'paw',
    bg: '#FCE7D6',
  },
  {
    id: 'dog-bed',
    name: 'Orthopedic Dog Bed',
    pet: 'Dogs',
    type: 'Comfort',
    price: 59.0,
    rating: 4.9,
    icon: 'home',
    bg: '#FCE7D6',
    featured: true,
  },
  {
    id: 'grooming-kit',
    name: 'Deluxe Grooming Kit',
    pet: 'Dogs',
    type: 'Grooming',
    price: 27.75,
    rating: 4.5,
    icon: 'scissors',
    bg: '#FCE7D6',
    featured: true,
  },
  {
    id: 'cat-toy',
    name: 'Interactive Cat Wand',
    pet: 'Cats',
    type: 'Toys',
    price: 12.5,
    rating: 4.6,
    icon: 'fish',
    bg: '#DCEFFB',
    featured: true,
  },
  {
    id: 'cat-scratching-post',
    name: 'Cat Scratching Post',
    pet: 'Cats',
    type: 'Comfort',
    price: 42.0,
    rating: 4.7,
    icon: 'cat',
    bg: '#DCEFFB',
  },
  {
    id: 'cat-food',
    name: 'Grain-Free Cat Food',
    pet: 'Cats',
    type: 'Nutrition',
    price: 28.75,
    rating: 4.5,
    icon: 'fish',
    bg: '#DCEFFB',
  },
  {
    id: 'bird-perch',
    name: 'Bird Cage Swing Perch',
    pet: 'Birds',
    type: 'Accessories',
    price: 9.99,
    rating: 4.3,
    icon: 'feather',
    bg: '#E6E3FB',
  },
  {
    id: 'bird-seed',
    name: 'Parrot Seed Mix',
    pet: 'Birds',
    type: 'Nutrition',
    price: 11.25,
    rating: 4.4,
    icon: 'bird',
    bg: '#E6E3FB',
  },
  {
    id: 'rabbit-feeder',
    name: 'Rabbit Hay Feeder',
    pet: 'Small Pets',
    type: 'Accessories',
    price: 14.0,
    rating: 4.6,
    icon: 'rabbit',
    bg: '#DFF3E1',
  },
  {
    id: 'small-pet-bedding',
    name: 'Small Pet Bedding',
    pet: 'Small Pets',
    type: 'Comfort',
    price: 8.5,
    rating: 4.2,
    icon: 'rabbit',
    bg: '#DFF3E1',
  },
  {
    id: 'aquarium-gravel',
    name: 'Aquarium Gravel Set',
    pet: 'Fish',
    type: 'Accessories',
    price: 13.4,
    rating: 4.3,
    icon: 'droplet',
    bg: '#FDE4E9',
  },
  {
    id: 'fish-flakes',
    name: 'Fish Flake Food',
    pet: 'Fish',
    type: 'Nutrition',
    price: 6.75,
    rating: 4.5,
    icon: 'fish',
    bg: '#FDE4E9',
  },
]

export const FEATURED_PRODUCTS = PRODUCTS.filter((p) => p.featured)

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id)
}
