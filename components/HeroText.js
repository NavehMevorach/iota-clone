const generateKey = (pre) => {
  return `${pre}_${new Date().getTime()}`
}

function HeroText({ isActive, title, text }) {
  return (
    <div className={`${isActive ? '' : 'fadeOut'} h-full w-full`}>
      <h1
        className={`absolute font-regular md:top-[calc(50%_-_80px)] top-[calc(50%_-_98px)] left-1/2 -translate-x-1/2 leading-[4.3rem] md:text-6xl text-5xl font-normal text-center text-white`}>
        <span className="md:mr-5">
          {title[0].split('').map((letter, ind) => (
            <span
              key={generateKey(ind)}
              className={`text-white element-from-blur  element-from-blur-animate animation-duration-top-${
                ind + 1
              }`}>
              {letter}
            </span>
          ))}
        </span>
        <br className="md:hidden" />
        <span></span>
        <strong>
          {title[1].split('').map((letter, ind) => (
            <span
              key={generateKey(ind)}
              className={`element-from-blur element-from-blur-animate animation-duration-bottom-${
                ind + 1
              }`}>
              {letter}
            </span>
          ))}
        </strong>
      </h1>
      <p
        className={`absolute text-hero-text leading-normal md:top-[calc(50%_+_30px)] top-[65%] md:text-[18px] text-base md:max-w-sm max-w-[250px] text-center left-1/2 -translate-x-1/2  `}>
        {text.split('').map((letter, ind) => (
          <span
            key={generateKey(ind)}
            className={`element-from-blur element-from-blur-animate animation-duration-bottom-${
              ind + 1
            }`}>
            {letter}
          </span>
        ))}
      </p>
    </div>
  )
}

export default HeroText
