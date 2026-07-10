import { CheckCircle2, ChevronRight, Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const HOURS = [
  { day: 'Monday – Friday', time: '9:00am – 6:00pm' },
  { day: 'Saturday', time: '10:00am – 4:00pm' },
  { day: 'Sunday', time: 'Closed' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Header />

      <main className="px-6 py-10 md:px-12 md:py-14">
        <nav className="flex items-center gap-1.5 text-sm text-gray-500">
          <Link to="/" className="hover:text-brand-dark">Home</Link>
          <ChevronRight size={14} />
          <span className="text-gray-900">Contact Us</span>
        </nav>

        <h1 className="font-serif-display mt-4 text-[#1a3d1a] text-3xl md:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600 text-sm md:text-base">
          Questions about an order, a product, or anything else? We'd love to hear from you.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-dark/10">
                    <CheckCircle2 size={28} className="text-brand-dark" />
                  </div>
                  <h2 className="mt-4 text-lg font-semibold text-gray-900">Message sent</h2>
                  <p className="mt-2 max-w-sm text-sm text-gray-600">
                    Thanks for reaching out — our team typically replies within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="mt-1.5 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-brand-dark"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="mt-1.5 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-brand-dark"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-brand-dark"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="mt-1.5 w-full resize-none rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-brand-dark"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-orange-hover"
                  >
                    Send Message
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-sm font-semibold text-gray-900">Contact Info</h2>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-brand-dark" />
                  123 Paw Street, Petville
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <Phone size={16} className="shrink-0 text-brand-dark" />
                  (555) 123-4567
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <Mail size={16} className="shrink-0 text-brand-dark" />
                  hello@cozypaws.com
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                <Clock size={16} className="text-brand-dark" />
                Business Hours
              </h2>
              <ul className="mt-4 space-y-2">
                {HOURS.map((h) => (
                  <li key={h.day} className="flex justify-between text-sm text-gray-600">
                    <span>{h.day}</span>
                    <span className="text-gray-900">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
