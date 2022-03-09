import React from 'react'

function CirclesNav({ title = 'Hello', isActive = true }) {
  return (
    <div className={`${isActive ? 'fadeIn' : 'fadeOut '}`}>
      {isActive && (
        <>
          <div className="absolute scaleFromZero  bg-[rgba(0,224,202,0.2)] top-1/2 left-1/2 -translate-y-[60%] -translate-x-1/2 rounded-full"></div>
          <h4
            className={`absolute font-bold h-[50px] w-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65px] text-[28px] flex justify-center items-center text-center text-white mb-0`}>
            <span>
              {title.split('').map((letter, ind) => (
                <span
                  key={letter + ind}
                  className={`text-white element-from-blur element-from-blur-animate animation-duration-top-${
                    ind + 1
                  }`}>
                  {letter}
                </span>
              ))}
            </span>
          </h4>
          <div className="absolute w-10 h-[3px] rounded-full bg-green top-1/2 left-1/2 -translate-x-1/2 -translate-y-[1px]"></div>
        </>
      )}
    </div>
  )
}

export default CirclesNav
