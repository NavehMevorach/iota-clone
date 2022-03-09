import CircleBtn from './CircleBtn'
import Divider from './Divider'

function SlideNav({ isLoading, changeSlide, isHero }) {
  return (
    <>
      <div className="h-screen w-screen absolute top-0 left-0 right-0 container flex justify-center items-center">
        <div className="absolute z-30 md:top-[calc(50%_-_24.5px)] top-[calc(85%_-_25px)] md:left-[5%]  md:-translate-x-0 -translate-x-1/2">
          <CircleBtn onClick={() => changeSlide(true)} direction="left" />
        </div>
        {isLoading && (
          <div className="absolute z-30 md:top-[calc(50%_-_24.5px)] top-[calc(85%_-_25px)] md:right-[5%]  md:translate-x-0  translate-x-1/2">
            <CircleBtn onClick={changeSlide} direction="right" />
          </div>
        )}
      </div>
      <Divider isHero={isHero} />
    </>
  )
}

export default SlideNav
