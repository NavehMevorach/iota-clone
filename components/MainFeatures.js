import useSlideManager from './../hooks/useSlideManager'
import SlideNav from './SlideNav'
import VideoHero from './VideoHero'
import CirclesNav from './CirclesNav'
import FeaturesText from './FeaturesText'

const title = ['Social Impact', 'Mobility', 'Smart Cities']

const videos = ['social', 'mobility', 'smartcity']

const features = [
  [
    {
      title: 'Sustanabillity',
      text: 'Harrnesing the power of IOT to manage natural resources',
      icon: 'green',
    },
    {
      title: 'Identity',
      text: 'In buillt wallet cars send and reciece payments',
      icon: 'fingerprint',
    },
    {
      title: 'Citizen Centric',
      text: 'Use transport and infrastrucuture data for informed',
      icon: 'box',
    },
  ],
  [
    {
      title: 'Car Wallet',
      text: 'In buillt wallet cars send and reciece payments',
      icon: 'remote',
    },
    {
      title: 'Smart Charging',
      text: 'Electric Veichle can autonomosly pay for charging',
      icon: 'research',
    },
    {
      title: 'Usage Based Fee',
      text: 'Insurance policies baes on actual usage behaviour',
      icon: 'transact',
    },
  ],
  [
    {
      title: 'Urban Mobility',
      text: 'Use transport and infrastrucuture data for informed',
      icon: 'urban',
    },
    {
      title: 'Open & Transport',
      text: 'Display and manage and anayze avaiable data',
      icon: 'track',
    },
    {
      title: 'Peer to Peer Data',
      text: 'Turn any produt to peer to peer network',
      icon: 'p2p',
    },
  ],
]

function MainFeatures() {
  const [currentSection, isLoading, onRequestToChangeSlide] = useSlideManager()
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex-col items-center justify-center h-screen w-screen">
      <div className="relative z-30  flex w-full h-full justify-center items-center">
        {title.map((title, ind) => (
          <CirclesNav
            key={ind}
            title={title}
            isActive={currentSection === ind}
          />
        ))}
      </div>
      {features.map((info, ind) => (
        <FeaturesText key={ind} data={info} isActive={currentSection === ind} />
      ))}
      {videos.map((video, ind) => (
        <VideoHero
          key={ind}
          videoSrc={`/assets/videos/${video}.mp4`}
          isActive={currentSection === ind}
        />
      ))}
      <SlideNav isLoading={isLoading} changeSlide={onRequestToChangeSlide} />
    </div>
  )
}

export default MainFeatures
