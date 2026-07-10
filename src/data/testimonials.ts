export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  rating: number
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote:
      "CozyPaws has completely changed how I shop for my golden retriever. Fast delivery, great prices, and my dog approves of every toy so far.",
    name: 'Amelia Hart',
    role: 'Dog owner',
    rating: 5,
  },
  {
    id: 't2',
    quote:
      'The cat furniture quality is outstanding. My cat actually uses the scratching post instead of my couch now. Worth every penny.',
    name: 'Daniel Cho',
    role: 'Cat owner',
    rating: 5,
  },
  {
    id: 't3',
    quote:
      "Customer support helped me pick the right food for my senior dog's sensitive stomach. Genuinely thoughtful service.",
    name: 'Priya Nair',
    role: 'Dog owner',
    rating: 4,
  },
]
