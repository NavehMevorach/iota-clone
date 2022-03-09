import { useState, useEffect } from 'react'

function useSlideManager() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const interval = setInterval(() => {
      switch (currentSection) {
        case 0:
          setCurrentSection(() => 1)
          break
        case 1:
          setCurrentSection(() => 2)
          break
        case 2:
          setCurrentSection(() => 0)
          break
      }
    }, 6000)
    resetLoader()
    return () => clearInterval(interval)
  }, [currentSection])

  function onRequestToChangeSlide(revere = false) {
    if (revere) {
      switch (currentSection) {
        case 0:
          setCurrentSection(() => 2)
          break
        case 1:
          setCurrentSection(() => 0)
          break
        case 2:
          setCurrentSection(() => 1)
          break
      }
    } else {
      switch (currentSection) {
        case 0:
          setCurrentSection(() => 1)
          break
        case 1:
          setCurrentSection(() => 2)
          break
        case 2:
          setCurrentSection(() => 0)
          break
      }
    }
    resetLoader()
  }

  function resetLoader() {
    setIsLoading(false)

    setTimeout(() => {
      setIsLoading(true)
    }, 1)
  }
  return [currentSection, isLoading, onRequestToChangeSlide]
}

export default useSlideManager
