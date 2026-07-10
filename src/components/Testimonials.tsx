import { Star } from 'lucide-react'
import { ASSETS } from '../assets'
import { TESTIMONIALS } from '../data/testimonials'
import { useInView } from '../hooks/useInView'

export default function Testimonials() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section className="px-6 py-16 md:px-12 md:py-24">
      <div ref={ref} className={inView ? 'animate-fade-up' : 'opacity-0'}>
        <h2 className="font-serif-display text-[#1a3d1a] text-3xl md:text-4xl text-center">
          Loved by Pet Parents
        </h2>
        <p className="mt-2 text-center text-gray-600 text-sm md:text-base">
          Real stories from the CozyPaws community
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              className={`rounded-2xl bg-white p-6 shadow-sm ${inView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: inView ? `${i * 120}ms` : undefined }}
            >
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={14}
                    className={idx < t.rating ? 'text-brand-orange' : 'text-gray-200'}
                    fill={idx < t.rating ? '#E86A10' : '#e5e7eb'}
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">"{t.quote}"</p>
              <div className="mt-5 flex items-center gap-3">
                <img
                  src={ASSETS.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
