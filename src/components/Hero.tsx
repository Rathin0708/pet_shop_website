import HeroDesktop from './HeroDesktop'
import HeroTablet from './HeroTablet'
import HeroMobile from './HeroMobile'

export default function Hero() {
  return (
    <section className="flex-1 flex flex-col overflow-hidden">
      <HeroDesktop />
      <HeroTablet />
      <HeroMobile />
    </section>
  )
}
