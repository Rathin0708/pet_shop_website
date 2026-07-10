import { Briefcase, ChevronRight, Coffee, GraduationCap, HeartHandshake, MapPin, PawPrint, Plane } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const PERKS = [
  { icon: HeartHandshake, title: 'Health Coverage', description: 'Medical, dental, and vision from day one.' },
  { icon: PawPrint, title: 'Pet-Friendly Office', description: 'Bring your dog or cat to work, no questions asked.' },
  { icon: Plane, title: 'Flexible PTO', description: 'Take the time you need, when you need it.' },
  { icon: GraduationCap, title: 'Learning Budget', description: 'Annual stipend for courses, books, and conferences.' },
  { icon: Coffee, title: 'Remote Friendly', description: 'Work from home, the office, or a mix of both.' },
  { icon: Briefcase, title: 'Employee Discount', description: '40% off everything in the CozyPaws store.' },
]

const OPEN_ROLES = [
  { title: 'Customer Support Specialist', department: 'Support', location: 'Remote', type: 'Full-time' },
  { title: 'Warehouse Associate', department: 'Operations', location: 'Austin, TX', type: 'Full-time' },
  { title: 'Social Media Coordinator', department: 'Marketing', location: 'Remote', type: 'Part-time' },
  { title: 'Backend Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time' },
  { title: 'Merchandising Buyer', department: 'Merchandising', location: 'Austin, TX', type: 'Full-time' },
]

export default function Careers() {
  return (
    <>
      <Header />

      <main className="px-6 py-10 md:px-12 md:py-14">
        <nav className="flex items-center gap-1.5 text-sm text-gray-500">
          <Link to="/" className="hover:text-brand-dark">Home</Link>
          <ChevronRight size={14} />
          <span className="text-gray-900">Careers</span>
        </nav>

        <div className="mx-auto mt-6 max-w-2xl text-center">
          <h1 className="font-serif-display text-[#1a3d1a] text-3xl md:text-5xl">
            Build something pet owners love
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            We're a small team that cares a lot — about our customers, their pets, and each
            other. Here's what it's like to work here.
          </p>
        </div>

        <section className="mt-14">
          <h2 className="text-center text-xl font-semibold text-gray-900 md:text-2xl">
            Why You'll Like It Here
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PERKS.map(({ icon: Icon, title, description }) => (
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

        <section className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-xl font-semibold text-gray-900 md:text-2xl">Open Positions</h2>
          <div className="mt-6 space-y-3">
            {OPEN_ROLES.map((role) => (
              <div
                key={role.title}
                className="flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">{role.title}</h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                    <span>{role.department}</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {role.location}
                    </span>
                    <span>{role.type}</span>
                  </div>
                </div>
                <a
                  href={`mailto:careers@cozypaws.com?subject=${encodeURIComponent(`Application: ${role.title}`)}`}
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-brand-dark px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark-hover"
                >
                  Apply
                </a>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            Don't see a fit?{' '}
            <a
              href="mailto:careers@cozypaws.com"
              className="font-medium text-brand-dark hover:text-brand-dark-hover"
            >
              Send us your resume anyway
            </a>
            .
          </p>
        </section>
      </main>

      <Footer />
    </>
  )
}
