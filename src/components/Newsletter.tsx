import { Mail } from 'lucide-react'
import { useState } from 'react'
import { useInView } from '../hooks/useInView'

export default function Newsletter() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section className="px-6 py-16 md:px-12 md:py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl rounded-3xl bg-brand-dark px-6 py-12 text-center md:px-16 ${inView ? 'animate-scale-in' : 'opacity-0'}`}
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
          <Mail size={22} className="text-white" />
        </div>
        <h2 className="font-serif-display mt-4 text-2xl text-white md:text-3xl">
          Get 10% off your first order
        </h2>
        <p className="mt-2 text-sm text-white/70">
          Join our newsletter for pet care tips and exclusive deals.
        </p>

        {submitted ? (
          <p className="mt-6 text-sm font-medium text-white">
            Thanks! Check your inbox to confirm your subscription.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-white/40"
            />
            <button
              type="submit"
              className="rounded-full bg-brand-orange px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-orange-hover"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
