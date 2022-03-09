import Section from '../../layout/Section'
import HeroMain from '../HeroMain'

function Hero() {
  return (
    <Section id="home" screen={true}>
      <div className="h-full w-full relative  bg-gradient-to-b from-[#313753] to-[#152036] flex flex-col justify-center items-center">
        <HeroMain />
      </div>
    </Section>
  )
}

export default Hero
