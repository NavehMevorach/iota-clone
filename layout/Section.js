import React from 'react'

function Section({ children, screen, id }) {
  return (
    <section
      id={id}
      className={
        screen ? 'relative h-screen w-screen' : 'relative h-full w-screen'
      }>
      {children}
    </section>
  )
}

export default Section
