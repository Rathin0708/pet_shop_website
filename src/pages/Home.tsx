import Header from '../components/Header'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import FeaturedProducts from '../components/FeaturedProducts'
import BrandStrip from '../components/BrandStrip'
import Testimonials from '../components/Testimonials'
import BlogPreview from '../components/BlogPreview'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col overflow-hidden">
        <Header />
        <Hero />
      </div>

      <Categories />
      <FeaturedProducts />
      <BrandStrip />
      <Testimonials />
      <BlogPreview />
      <Newsletter />
      <Footer />
    </>
  )
}
