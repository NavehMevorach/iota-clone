import React from 'react'

function Section({ children, screen, id }) {
  return (
    <div
      id={id}
      className={
        screen ? 'relative h-screen w-screen' : 'relative h-full w-screen'
      }>
      {children}
    </div>
  )
}

export default Section
