import { ArrowRight, ChevronRight, Globe, HeartHandshake, Leaf, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { ASSETS } from '../assets'

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Quality First',
    description: 'Every product is vetted by our team before it earns a spot on our shelves.',
  },
  {
    icon: HeartHandshake,
    title: 'Trust & Care',
    description: "We treat every customer's pet like it's one of our own.",
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Responsibly sourced ingredients and packaging that keeps waste in check.',
  },
  {
    icon: Globe,
    title: 'Community',
    description: 'A portion of every order supports local shelters and rescue groups.',
  },
]

const STATS = [
  { value: '8+', label: 'Years in Business' },
  { value: '98K+', label: 'Happy Customers' },
  { value: '500+', label: 'Products' },
  { value: '30+', label: 'Trusted Brands' },
]

export default function About() {
  return (
    <>
      <Header />

      <main className="px-6 py-10 md:px-12 md:py-14">
        <nav className="flex items-center gap-1.5 text-sm text-gray-500">
          <Link to="/" className="hover:text-brand-dark">Home</Link>
          <ChevronRight size={14} />
          <span className="text-gray-900">About Us</span>
        </nav>

        <div className="mx-auto mt-6 max-w-2xl text-center">
          <h1 className="font-serif-display text-[#1a3d1a] text-3xl md:text-5xl">
            Everything we do starts with your pet
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            CozyPaws was built by pet owners who were tired of guessing which products were
            actually worth it. We test, source, and stand behind everything we sell.
          </p>
        </div>

        <section className="mt-14 grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="overflow-hidden rounded-2xl">
            <img src={ASSETS.catHouse} alt="A cozy cat house product" className="h-full w-full object-cover" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 md:text-2xl">Our Story</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
              CozyPaws started in a spare bedroom with a handful of products we couldn't find
              anywhere else — the ones our own dogs and cats actually used, not just the ones with
              the flashiest packaging.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
              What began as a small operation shipping orders from a garage has grown into a
              destination for pet owners who care as much about ingredients and durability as we
              do. We've kept the same rule the whole way: if we wouldn't give it to our own pets,
              we don't sell it.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-center text-xl font-semibold text-gray-900 md:text-2xl">
            What We Stand For
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-dark/10">
                  <Icon size={20} className="text-brand-dark" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-white p-8 shadow-sm md:p-10">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif-display text-3xl text-brand-dark md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-gray-500 md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-2xl rounded-3xl bg-brand-dark px-6 py-12 text-center md:px-16">
          <h2 className="font-serif-display text-2xl text-white md:text-3xl">
            Ready to find something your pet will love?
          </h2>
          <Link
            to="/shop"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-orange-hover"
          >
            Explore Products
            <ArrowRight size={16} />
          </Link>
        </section>
      </main>

      <Footer />
    </>
  )
}
