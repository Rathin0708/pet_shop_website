import type { Pet } from './products'

export const BRANDS: string[] = [
  'Royal Canin',
  'Purina',
  'KONG',
  'PetSafe',
  "Hill's",
  'Whiskas',
]

export interface BrandProfile {
  name: string
  tagline: string
  pets: Pet[]
}

export const BRAND_PROFILES: BrandProfile[] = [
  {
    name: 'Royal Canin',
    tagline: 'Breed-specific nutrition backed by veterinary science.',
    pets: ['Dogs', 'Cats'],
  },
  {
    name: 'Purina',
    tagline: 'Trusted everyday nutrition for every life stage.',
    pets: ['Dogs', 'Cats'],
  },
  {
    name: 'KONG',
    tagline: 'Legendary durability, endless play.',
    pets: ['Dogs'],
  },
  {
    name: 'PetSafe',
    tagline: 'Smart, reliable solutions for home and travel.',
    pets: ['Dogs', 'Cats'],
  },
  {
    name: "Hill's",
    tagline: 'Prescription diets and everyday wellness formulas.',
    pets: ['Dogs', 'Cats'],
  },
  {
    name: 'Whiskas',
    tagline: 'Delicious meals cats ask for by name.',
    pets: ['Cats'],
  },
]
