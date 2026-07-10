import { ArrowRight, ArrowUpRight, Play, Plus, Star } from 'lucide-react'
import { ASSETS } from '../assets'

export default function HeroMobile() {
  return (
    <div className="flex md:hidden flex-col flex-1 w-full overflow-hidden">
      <div className="text-center px-4 pt-1 animate-fade-up delay-200">
        <h1 className="font-serif-display text-[36px] leading-[0.98] text-[#1a3d1a] tracking-tight">
          Everything Your Pets Love
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Premium food, toys and accessories your pets will love.
        </p>
        <button className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-orange-hover transition-colors">
          Explore Products
          <ArrowRight size={14} />
        </button>
      </div>

      <div className="flex gap-3 px-4 mt-4 animate-slide-up delay-500">
        <div className="relative flex-1 aspect-square rounded-2xl overflow-hidden">
          <img src={ASSETS.catHouse} alt="Cozy Cat House" className="h-full w-full object-cover" />
          <button
            aria-label="View product"
            className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-brand-dark text-white"
          >
            <ArrowUpRight size={16} />
          </button>
        </div>
        <div className="relative flex-1 aspect-[3/4] rounded-2xl overflow-hidden">
          <img src={ASSETS.videoCard} alt="Product reviews" className="h-full w-full object-cover" />
          <button
            aria-label="Play video"
            className="absolute bottom-3 left-1/2 -translate-x-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-brand-dark text-white"
          >
            <Play size={14} fill="white" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-3 animate-fade-in delay-700">
        <div className="flex items-center gap-2">
          <div className="flex items-center -space-x-3">
            <img src={ASSETS.avatar} alt="" className="h-8 w-8 rounded-full border-2 border-background object-cover" />
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-brand-dark text-white">
              <Plus size={14} />
            </div>
          </div>
          <p className="text-sm font-semibold text-brand-dark">98K+</p>
        </div>
        <div className="h-6 w-px bg-gray-300" />
        <div className="flex items-center gap-1.5">
          <Star size={16} className="text-brand-orange" fill="#E86A10" />
          <p className="text-sm font-semibold text-brand-dark">4.6</p>
        </div>
      </div>

      <div className="flex-1 flex items-end mt-2">
        <div className="flex items-end w-full animate-photo-reveal delay-800">
          <img src={ASSETS.bottomLeft} alt="Happy pet owners" className="flex-1 min-w-0 w-full h-auto block" />
          <img src={ASSETS.bottomCenter} alt="Best products for your pet" className="flex-[1.265] min-w-0 w-full h-auto block" />
          <img src={ASSETS.bottomRight} alt="Pet with owner" className="flex-1 min-w-0 w-full h-auto block" />
        </div>
      </div>
    </div>
  )
}
