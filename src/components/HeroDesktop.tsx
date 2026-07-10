import { ArrowRight, ArrowUpRight, Play, Plus, Star } from 'lucide-react'
import { ASSETS } from '../assets'
import WordPopHeading from './WordPopHeading'

export default function HeroDesktop() {
  return (
    <div className="relative hidden lg:block flex-1 w-full overflow-hidden">
      {/* Text layer */}
      <div className="absolute inset-x-0 top-0 z-[5] px-12 pt-[5.4rem] text-center">
        <WordPopHeading className="font-serif-display text-[#1a3d1a] text-[clamp(60px,7.5vw,110px)] leading-[0.95] tracking-tight" />
      </div>

      {/* Left product card */}
      <div
        className="absolute top-[50px] left-12 z-20 animate-slide-in-left delay-600"
        style={{ width: 'clamp(160px, 14vw, 260px)' }}
      >
        <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '260 / 257' }}>
          <img src={ASSETS.catHouse} alt="Cozy Cat House" className="h-full w-full object-cover" />
          <button
            aria-label="View product"
            className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand-dark text-white hover:bg-brand-dark-hover transition-colors"
          >
            <ArrowUpRight size={18} />
          </button>
        </div>
        <div className="mt-3" style={{ fontSize: 'clamp(12px, 1vw, 15px)' }}>
          <p className="text-gray-700">Cozy Cat House</p>
          <p className="font-bold text-brand-dark">$49.99</p>
        </div>
      </div>

      {/* Right video card */}
      <div
        className="absolute top-[50px] right-12 z-20 animate-slide-in-right delay-700"
        style={{ width: 'clamp(120px, 10vw, 177px)' }}
      >
        <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '177 / 287' }}>
          <img src={ASSETS.videoCard} alt="Product reviews" className="h-full w-full object-cover" />
          <button
            aria-label="Play video"
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-brand-dark text-white hover:bg-brand-dark-hover transition-colors"
          >
            <Play size={18} fill="white" />
          </button>
        </div>
        <p className="mt-3 text-center text-gray-700" style={{ fontSize: 'clamp(11px, 0.85vw, 13px)' }}>
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
            style={{ maxHeight: 'min(70vh, 55vw)' }}
          />
          <div
            className="absolute left-6 flex items-center gap-3 animate-scale-in delay-1000"
            style={{ bottom: 'clamp(20px, 4vh, 50px)' }}
          >
            <div className="flex items-center -space-x-3">
              <img src={ASSETS.avatar} alt="" className="h-10 w-10 rounded-full border-2 border-white object-cover" />
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-brand-dark text-white">
                <Plus size={16} />
              </div>
            </div>
            <p className="text-lg font-semibold text-white">98K+</p>
          </div>
        </div>

        <div className="relative flex-[1.265] min-w-0 animate-photo-reveal delay-600">
          <img
            src={ASSETS.bottomCenter}
            alt="Best products for your pet"
            className="w-full h-auto block"
            style={{ maxHeight: 'min(85vh, 70vw)' }}
          />
          <div
            className="absolute inset-x-0 flex flex-col items-center gap-4 animate-scale-in delay-1100"
            style={{ bottom: 'clamp(20px, 4vh, 50px)' }}
          >
            <h2 className="font-serif-display text-white text-[clamp(20px,2.2vw,32px)] text-center px-6">
              Best Products for Your Pet
            </h2>
            <button className="flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-medium text-white hover:bg-brand-orange-hover transition-colors">
              Explore Products
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="relative flex-1 min-w-0 animate-photo-reveal delay-800">
          <img
            src={ASSETS.bottomRight}
            alt="Pet with owner"
            className="w-full h-auto block"
            style={{ maxHeight: 'min(70vh, 55vw)' }}
          />
          <div
            className="absolute right-6 flex items-center gap-2 animate-scale-in delay-1200"
            style={{ bottom: 'clamp(20px, 4vh, 50px)' }}
          >
            <Star size={20} className="text-brand-orange" fill="#E86A10" />
            <p className="text-lg font-semibold text-white">4.6</p>
          </div>
        </div>
      </div>
    </div>
  )
}
