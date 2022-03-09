import Section from '../../layout/Section'
import MainFeatures from '../MainFeatures'
function Features() {
  return (
    <Section screen={true} id="features">
      <div className="relative h-full w-full flex flex-col justify-start items-center bg-[rgba(19,31,55,0.5)] py-10">
        <div>
          <h3 className="uppercase text-green relative z-30">Features</h3>
          <h2 className="text-white relative z-30">
            IOTA Enables <br /> New Possibilites
          </h2>
        </div>
        <MainFeatures />
      </div>
    </Section>
  )
}

export default Features
