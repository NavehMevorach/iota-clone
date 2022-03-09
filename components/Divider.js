import React from 'react'

function Divider({ isHero }) {
  return (
    <div
      className={`${
        isHero ? 'top-[calc(50%_-_28px)]' : 'top-[calc(50%)]'
      } w-screen h-[1px] bg-[#5D6174] absolute z-10 md:top-1/2  left-0 `}></div>
  )
}

export default Divider
