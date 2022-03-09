import { useInView } from 'react-intersection-observer'
import Section from '../../layout/Section'
import PricingTab from './../PricingTab'

const data = [
  {
    subTitle: 'Community',
    title: 'Explore',
    text: 'Connect with like-minded people in the community',
    features: [
      'Download the wallet',
      'Buy IOTA',
      'Build with us',
      'Join the community',
    ],
    btnText: 'Start Engaging',
    backgroundColor: ['#0fc1b7', '#2cd6cc'],
    borderColor: '#0fc1b7',
    btnColor: '#0fc1b7',
  },
  {
    subTitle: 'Community',
    title: 'Explore',
    text: 'Connect with like-minded people in the community',
    features: [
      'Download the wallet',
      'Buy IOTA',
      'Build with us',
      'Join the community',
    ],
    btnText: 'Start Engaging',
    backgroundColor: ['#8493ad', '#c3d0e4'],
    borderColor: '#8493ad',
    btnColor: '#8493ad',
  },
  {
    subTitle: 'Community',
    title: 'Explore',
    text: 'Connect with like-minded people in the community',
    features: [
      'Download the wallet',
      'Buy IOTA',
      'Build with us',
      'Join the community',
    ],
    btnText: 'Start Engaging',
    backgroundColor: ['#131f37', '#485776'],
    borderColor: '#131f37',
    btnColor: '#131f37',
  },
]

function Pricing() {
  const [ref, inView, entry] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })
  return (
    <Section id="pricing">
      <div className="h-full w-full  py-10">
        <div className="mb-10">
          <h3 className="uppercase text-green">Pricing</h3>
          <h2>Get Started</h2>
        </div>
        <div
          ref={ref}
          className={`${
            inView ? 'fadeInBottom' : 'element-from-blur'
          } flex md:flex-row flex-col flex-wrap items-center justify-center`}>
          {data.map((info, ind) => (
            <PricingTab key={ind} {...info} />
          ))}
        </div>
      </div>
    </Section>
  )
}
// transition: all 0.3s ease-in-out;
// letter-spacing: 0.01em;
// width: 328px;
// height: 546px;
// background: linear-gradient(0deg, #0fc1b7 0%, #2cd6cc 100%);
// position: absolute;
// border-radius: 0.5rem;
// content: "";
// width: calc(100% + 4px);
// height: calc(100% + 4px);
// left: -2px;
// top: -2px;
// z-index: -1;
// transform: scale3d(1.05, 1.05, 1);
// box-shadow: 0px 8px 24px rgba(132, 147, 173, 0.6);

export default Pricing
