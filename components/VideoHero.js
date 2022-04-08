import React, { useEffect, useRef } from 'react'

function VideoHero({ videoSrc, isActive }) {
  const videoRef = useRef()

  useEffect(() => {
    videoRef.current?.load()
  }, [videoSrc])

  return (
    <div
      className={`${
        isActive
          ? 'fadeIn w-screen h-screen -z-10 absolute top-0 left-0 m-0 p-0 -z-1 overflow-hidden'
          : ' fadeOut'
      }`}>
      <video
        ref={videoRef}
        src={videoSrc}
        className={`min-h-full min-w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover`}
        autoPlay
        loop
        muted></video>
    </div>
  )
}

export default VideoHero
