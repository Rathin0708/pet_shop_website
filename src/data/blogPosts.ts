import { ASSETS } from '../assets'

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Choosing the Right Cat House for Small Apartments',
    excerpt: 'Space-saving picks that keep your cat cozy without taking over the living room.',
    date: 'Jun 18, 2026',
    readTime: '4 min read',
    image: ASSETS.bottomRight,
  },
  {
    id: 'b2',
    title: '5 Signs Your Dog Needs a Diet Change',
    excerpt: 'How to spot the early signals and what to look for on the nutrition label.',
    date: 'Jun 05, 2026',
    readTime: '6 min read',
    image: ASSETS.bottomCenter,
  },
  {
    id: 'b3',
    title: 'Puppy Training Basics Every New Owner Should Know',
    excerpt: 'A calm, consistent routine that gets results in the first few weeks.',
    date: 'May 22, 2026',
    readTime: '5 min read',
    image: ASSETS.bottomLeft,
  },
]
