import React from 'react'

function SocialBtn({ icon, text, background }) {
  return (
    <a
      className={`social-btn cursor-pointer h-[60px] flex justify-center items-center py-4 px-2 w-full  text-white font-bold`}>
      <img
        className={`${
          icon === 'reddit' || icon === 'linkedin' ? '-translate-y-[2px]' : ''
        } w-5 lg:mr-2`}
        src={`/assets/icons/${icon}.svg`}
      />
      <span className="lg:block hidden">{text}</span>
      <style jsx>{`
        .social-btn {
          background: ${background};
          transition: 0.3s linear;
        }
        .social-btn:hover {
          background: #00e0ca;
        }
      `}</style>
    </a>
  )
}

export default SocialBtn
