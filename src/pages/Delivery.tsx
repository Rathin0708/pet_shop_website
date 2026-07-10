import { ChevronDown, ChevronRight, Clock, CreditCard, RotateCcw, ShieldCheck, Smartphone, Truck, Wallet, Zap } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const SHIPPING_OPTIONS = [
  {
    icon: Truck,
    name: 'Standard Shipping',
    price: '$4.99',
    note: 'Free on orders over $50',
    time: '5–7 business days',
  },
  {
    icon: Zap,
    name: 'Express Shipping',
    price: '$12.99',
    note: 'Order by 2pm for same-day dispatch',
    time: '2–3 business days',
  },
  {
    icon: Clock,
    name: 'Same-Day Delivery',
    price: '$19.99',
    note: 'Available in select metro areas',
    time: 'Delivered today',
  },
]

const PAYMENT_METHODS = [
  { icon: CreditCard, label: 'Credit & Debit Cards' },
  { icon: Wallet, label: 'PayPal' },
  { icon: Smartphone, label: 'Apple Pay & Google Pay' },
]

const FAQS = [
  {
    question: 'How long will my order take to arrive?',
    answer:
      'Standard shipping takes 5–7 business days. Express and same-day options are available at checkout if you need it sooner.',
  },
  {
    question: 'Do you ship internationally?',
    answer:
      'Right now we ship within the continental US only. We\'re working on expanding — join our newsletter for updates.',
  },
  {
    question: 'What is your return policy?',
    answer:
      'Unopened items can be returned within 30 days of delivery for a full refund. Opened food and treats can\'t be returned for safety reasons, but reach out if something arrived damaged.',
  },
  {
    question: 'Is my payment information secure?',
    answer:
      'Yes. All payments are processed through encrypted, PCI-compliant channels. We never store your full card details on our servers.',
  },
  {
    question: 'Can I change or cancel my order after placing it?',
    answer:
      'Orders can be modified or canceled within 1 hour of purchase. After that, it\'s likely already being packed — contact support and we\'ll do our best to help.',
  },
]

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-sm font-semibold text-gray-900 md:text-base">{question}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <p className="mt-3 text-sm leading-relaxed text-gray-600">{answer}</p>}
    </div>
  )
}

export default function Delivery() {
  return (
    <>
      <Header />

      <main className="px-6 py-10 md:px-12 md:py-14">
        <nav className="flex items-center gap-1.5 text-sm text-gray-500">
          <Link to="/" className="hover:text-brand-dark">Home</Link>
          <ChevronRight size={14} />
          <span className="text-gray-900">Delivery and Payment</span>
        </nav>

        <h1 className="font-serif-display mt-4 text-[#1a3d1a] text-3xl md:text-5xl">
          Delivery &amp; Payment
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600 text-sm md:text-base">
          Everything you need to know about how we get your order to your door, and how you can
          pay for it.
        </p>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-gray-900">Shipping Options</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {SHIPPING_OPTIONS.map(({ icon: Icon, name, price, note, time }) => (
              <div key={name} className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-dark/10">
                  <Icon size={20} className="text-brand-dark" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-gray-900">{name}</h3>
                <p className="mt-1 text-xl font-bold text-brand-dark">{price}</p>
                <p className="mt-1 text-sm text-gray-600">{time}</p>
                <p className="mt-2 text-xs text-gray-400">{note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-gray-900">Payment Methods</h2>
          <div className="mt-4 flex flex-wrap gap-4">
            {PAYMENT_METHODS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm"
              >
                <Icon size={20} className="text-brand-dark" />
                <span className="text-sm font-medium text-gray-800">{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
            <ShieldCheck size={16} className="text-brand-dark" />
            All transactions are encrypted and PCI-compliant.
          </div>
        </section>

        <section className="mt-12 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-dark/10">
              <RotateCcw size={20} className="text-brand-dark" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Returns &amp; Refunds</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">
                Unopened items can be returned within 30 days of delivery for a full refund.
                Opened food and treats can't be accepted back for safety reasons — if something
                arrived damaged or incorrect, contact us and we'll make it right.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-lg font-semibold text-gray-900">Frequently Asked Questions</h2>
          <div className="mt-2">
            {FAQS.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
