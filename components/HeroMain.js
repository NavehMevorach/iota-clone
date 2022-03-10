import HeroText from './HeroText'
import VideoHero from './VideoHero'
import SlideNav from './SlideNav'
import useSlideManager from '../hooks/useSlideManager'

const data = [
  {
    title: ['Empowering', 'People'],
    text: 'IOTA helping people securly navigate thier digital lives ',
    video: 'woman',
  },
  {
    title: ['Securing', 'Data'],
    text: 'IOTA protects the integrity and verfiballity of data ',
    video: 'earth',
  },
  {
    title: ['Connecting', 'Machines'],
    text: 'IOTA connect IoT with secure data and value exchange ',
    video: 'machine',
  },
]

function HeroMain() {
  const [currentSection, isLoading, onRequestToChangeSlide] = useSlideManager()

  return (
    <div className="absolute z-20 h-screen w-screen flex flex-col justify-center items-center">
      {data.map((info, ind) => (
        <HeroText
          key={ind + info.title}
          title={info.title}
          text={info.text}
          isActive={currentSection === ind}
        />
      ))}
      {data.map((info, ind) => (
        <VideoHero
          key={ind + info.title}
          videoSrc={`/assets/videos/${info.video}.mp4`}
          isActive={currentSection === ind}
        />
      ))}
      <SlideNav
        isLoading={isLoading}
        changeSlide={onRequestToChangeSlide}
        isHero={true}
      />
    </div>
  )
}

export default HeroMain
