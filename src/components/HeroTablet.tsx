import { ArrowRight, ArrowUpRight, Play, Plus, Star } from 'lucide-react'
import { ASSETS } from '../assets'
import WordPopHeading from './WordPopHeading'

export default function HeroTablet() {
  return (
    <div className="relative hidden md:block lg:hidden flex-1 w-full overflow-hidden">
      {/* Text layer */}
      <div className="absolute inset-x-0 top-0 z-[5] px-8 pt-10 text-center">
        <WordPopHeading className="font-serif-display text-[#1a3d1a] text-7xl leading-[0.95] tracking-tight" />
      </div>

      {/* Left product card */}
      <div className="absolute top-[80px] left-4 z-20 w-[160px] animate-slide-in-left delay-600">
        <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '260 / 257' }}>
          <img src={ASSETS.catHouse} alt="Cozy Cat House" className="h-full w-full object-cover" />
          <button
            aria-label="View product"
            className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-brand-dark text-white"
          >
            <ArrowUpRight size={16} />
          </button>
        </div>
        <div className="mt-2 text-xs">
          <p className="text-gray-700">Cozy Cat House</p>
          <p className="font-bold text-brand-dark">$49.99</p>
        </div>
      </div>

      {/* Right video card */}
      <div className="absolute top-[80px] right-4 z-20 w-[120px] animate-slide-in-right delay-700">
        <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '177 / 287' }}>
          <img src={ASSETS.videoCard} alt="Product reviews" className="h-full w-full object-cover" />
          <button
            aria-label="Play video"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-brand-dark text-white"
          >
            <Play size={14} fill="white" />
          </button>
        </div>
        <p className="mt-2 text-center text-[11px] text-gray-700">
          Watch Product Reviews on TikTok and YouTube
        </p>
      </div>

      {/* Bottom 3-image panel */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end">
        <div className="relative flex-1 min-w-0 animate-photo-reveal delay-700">
          <img
            src={ASSETS.bottomLeft}
            alt="Happy pet owners"
            className="w-full h-auto block"
            style={{ maxHeight: '60vh' }}
          />
          <div className="absolute left-4 bottom-4 flex items-center gap-2 animate-scale-in delay-1000">
            <div className="flex items-center -space-x-3">
              <img src={ASSETS.avatar} alt="" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-brand-dark text-white">
                <Plus size={14} />
              </div>
            </div>
            <p className="text-base font-semibold text-white">98K+</p>
          </div>
        </div>

        <div className="relative flex-[1.265] min-w-0 animate-photo-reveal delay-600">
          <img
            src={ASSETS.bottomCenter}
            alt="Best products for your pet"
            className="w-full h-auto block"
            style={{ maxHeight: '75vh' }}
          />
          <div className="absolute inset-x-0 bottom-4 flex flex-col items-center gap-3 animate-scale-in delay-1100">
            <h2 className="font-serif-display text-white text-2xl text-center px-4">
              Best Products for Your Pet
            </h2>
            <button className="flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-sm font-medium text-white">
              Explore Products
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        <div className="relative flex-1 min-w-0 animate-photo-reveal delay-800">
          <img
            src={ASSETS.bottomRight}
            alt="Pet with owner"
            className="w-full h-auto block"
            style={{ maxHeight: '60vh' }}
          />
          <div className="absolute right-4 bottom-4 flex items-center gap-2 animate-scale-in delay-1200">
            <Star size={18} className="text-brand-orange" fill="#E86A10" />
            <p className="text-base font-semibold text-white">4.6</p>
          </div>
        </div>
      </div>
    </div>
  )
}
