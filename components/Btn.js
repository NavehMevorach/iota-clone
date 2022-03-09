import React from 'react'

function Btn({ children }) {
  return (
    <a className="inline-block cursor-pointer px-6 py-4 rounded-md border-2 border-white hover:border-[#BCC4D1]">
      {children}
    </a>
  )
}

export default Btn
