import { useInView } from 'react-intersection-observer'
import Section from '../../layout/Section'
import SmallDivider from '../SmallDivider'

function About() {
  const [ref, inView, entry] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })
  return (
    <Section id="about" screen={true}>
      {/* Add fade in animation */}
      <div className="h-full w-screen relative  flex justify-center items-center bg-white">
        <div
          className={`${
            inView ? 'fadeInBottom' : 'element-from-blur'
          } relative z-10 container pt-[212px] pb-[212px] lg:max-w-lg md:max-w-sm max-w-[90%]  flex flex-col justify-center items-center`}>
          <h3 className="text-green">INTRODUCING</h3>
          <h2>An Open, Feeless Data And Value Transfer Protocol</h2>
          <SmallDivider />
          <p className="text-[#485775] font-regular mt-5">
            IOTA has fundamentally reengineered distributed ledger technology,
            enabling secure exchange of both value and data, without any fees.
          </p>
          <a className="cursor-pointer inline-block bg-gradient-to-r from-[#0fc1b7] to-[#0fc1b7] hover:to-[#00e0ca] rounded-md font-bold tracking-widest text-white py-[1rem] px-[1.5rem] text-[1rem] uppercase mt-5 ">
            Learn About IOTA
          </a>
        </div>
        <div
          ref={ref}
          className="overflow-hidden  absolute z-0 top-0 left-0 right-0 bottom-0 w-full h-full m-auto flex justify-center items-center">
          <img
            src="/assets/bgHero.svg"
            alt="dots background"
            className={`${
              inView ? 'scaleAnimation' : 'element-from-blur'
            } object-cover h-full`}
          />
        </div>
      </div>
    </Section>
  )
}

export default About
