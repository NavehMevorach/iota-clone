import React from 'react'

function FeaturesText({
  isActive,
  data: [featureOne, featureTwo, featureThree],
}) {
  return (
    <div
      className={`${
        isActive ? 'fadeIn' : 'fadeOut'
      } absolute md:bottom-[10%] bottom-[20%] w-full md:px-[20%] px-[5%] left-0 right-0 flex justify-between items-start text-white`}>
      <div className="flex flex-col flex-1 justify-start items-center">
        <img
          src={`/assets/icons/${featureOne.icon}.png`}
          className="mb-5"
          alt="icon"
        />
        <h5 className="mb-5 md:text-[1.25rem] text-[1rem] capitalize">
          {featureOne.title}
        </h5>
        <p className="hidden md:block">{featureOne.text}</p>
      </div>
      <div className="flex flex-col flex-1 justify-start items-center">
        <img
          src={`/assets/icons/${featureTwo.icon}.png`}
          className="mb-5"
          alt="icon"
        />
        <h5 className="mb-5 md:text-[1.25rem] text-[1rem] capitalize">
          {featureTwo.title}
        </h5>
        <p className="hidden md:block">{featureTwo.text}</p>
      </div>
      <div className="flex flex-col flex-1 justify-start items-center">
        <img
          src={`/assets/icons/${featureThree.icon}.png`}
          className="mb-5"
          alt="icon"
        />
        <h5 className="mb-5 md:text-[1.25rem] text-[1rem] capitalize">
          {featureThree.title}
        </h5>
        <p className="hidden md:block">{featureThree.text}</p>
      </div>
    </div>
  )
}

export default FeaturesText
