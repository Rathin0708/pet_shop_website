import { Bird, Cat, Dog, Fish, Rabbit } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const CATEGORIES = [
  { label: 'Dogs', icon: Dog, bg: '#FCE7D6' },
  { label: 'Cats', icon: Cat, bg: '#DCEFFB' },
  { label: 'Birds', icon: Bird, bg: '#E6E3FB' },
  { label: 'Small Pets', icon: Rabbit, bg: '#DFF3E1' },
  { label: 'Fish', icon: Fish, bg: '#FDE4E9' },
]

export default function Categories() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section className="px-6 py-16 md:px-12 md:py-24">
      <div
        ref={ref}
        className={inView ? 'animate-fade-up' : 'opacity-0'}
      >
        <h2 className="font-serif-display text-[#1a3d1a] text-3xl md:text-4xl text-center">
          Shop by Category
        </h2>
        <p className="mt-2 text-center text-gray-600 text-sm md:text-base">
          Everything sorted by the pet who'll love it most
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
          {CATEGORIES.map(({ label, icon: Icon, bg }) => (
            <button
              key={label}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-transparent p-5 transition-all hover:border-brand-dark/10 hover:shadow-md"
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full transition-transform group-hover:scale-105"
                style={{ backgroundColor: bg }}
              >
                <Icon size={28} className="text-brand-dark" />
              </div>
              <span className="text-sm font-medium text-gray-800">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
