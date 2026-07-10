import { BRANDS } from '../data/brands'
import { useInView } from '../hooks/useInView'

export default function BrandStrip() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section className="px-6 py-12 md:px-12">
      <div ref={ref} className={inView ? 'animate-fade-in' : 'opacity-0'}>
        <p className="text-center text-xs font-medium uppercase tracking-widest text-gray-500">
          Trusted by leading pet brands
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {BRANDS.map((brand) => (
            <span
              key={brand}
              className="font-serif-display text-xl text-gray-400 transition-colors hover:text-brand-dark md:text-2xl"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
