import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ASSETS } from '../assets'

const FOOTER_COLUMNS = [
  {
    heading: 'Shop',
    links: [
      { label: 'Dogs', to: '/shop' },
      { label: 'Cats', to: '/shop' },
      { label: 'Birds', to: '/shop' },
      { label: 'Small Pets', to: '/shop' },
      { label: 'Fish', to: '/shop' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', to: '#' },
      { label: 'Careers', to: '#' },
      { label: 'Brands', to: '#' },
      { label: 'Blog', to: '#' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Delivery and Payment', to: '#' },
      { label: 'Returns', to: '#' },
      { label: 'FAQs', to: '#' },
      { label: 'Contact Us', to: '#' },
    ],
  },
]

const SOCIALS = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Youtube, label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-brand-dark px-6 pb-8 pt-14 text-white/80 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-5">
          <div className="sm:col-span-2 md:col-span-2">
            <Link to="/">
              <img src={ASSETS.logo} alt="CozyPaws" className="h-9 w-auto brightness-0 invert" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Everything your pets love, delivered to your door. Quality food, toys, and care
              essentials for every kind of companion.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold text-white">{col.heading}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                123 Paw Street, Petville
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Phone size={16} className="shrink-0" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Mail size={16} className="shrink-0" />
                hello@cozypaws.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} CozyPaws. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
