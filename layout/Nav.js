import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const data = ['home', 'about', 'features', 'pricing', 'blog']

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    // TODO:
    // Add responsive Menu
    // Add Logo IOTA (DARK AND WHITE)
    <>
      <div className="h-[80px] w-screen fixed z-50 top-0 left-0 bg-nav flex items-center justify-center">
        <div className="flex items-center lg:justify-center justify-between h-full container">
          <div className="flex justify-center items-center md:ml-0 ml-3 md:-translate-y-0 -translate-y-1">
            <img
              className="block"
              src="/assets/icons/logo.svg"
              alt="iota logo"
            />
            <img
              className="translate-x-1 hidden md:block"
              src="/assets/icons/logo-text.svg"
              akt="iota text logo"
            />
          </div>
          <nav className="lg:flex hidden items-center justify-center w-full h-full">
            {data.map((name, ind) => (
              <Link key={name + ind} href={`#${name}`}>
                <a className="h-full flex flex-col items-center justify-center text-white text-sm mr-10 capitalize font-bold group">
                  {name}
                  <span className="bg-light-green h-[3px] w-full scale-x-0 group-hover:scale-x-100 block mt-[5px] origin-bottom-left duration-200"></span>
                </a>
              </Link>
            ))}
          </nav>
          <button
            onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
            className={`${
              isMenuOpen ? 'active' : ''
            } menu lg:hidden absolute top-5 left-[90%]`}>
            <svg viewBox="0 0 64 48">
              <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
              <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
              <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          isMenuOpen ? 'right-0' : '-right-[100%]'
        } fixed h-screen  w-9/12 bg-white z-50 ease-linear duration-300`}>
        <button
          onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
          className={`${
            isMenuOpen ? 'active' : ''
          } menu lg:hidden absolute top-5 left-[90%]`}>
          <svg viewBox="0 0 64 48">
            <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
            <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
            <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
          </svg>
        </button>
        <div className="w-full h-screen px-10 py-10 flex flex-col">
          {data.map((name, ind) => (
            <Link key={name + ind} href={`#${name}`}>
              <a
                onClick={() => setIsMenuOpen(false)}
                className="flex flex-col justify-center text-black text-lg mb-10 capitalize font-bold group">
                {name}
                <span className="bg-light-green h-[3px] w-full scale-x-0 group-hover:scale-x-100 block mt-[5px] origin-bottom-left duration-200"></span>
              </a>
            </Link>
          ))}
        </div>
      </div>
      <style jsx>{`
        .menu {
          width: 36px;
          height: 36px;
          padding: 0;
          margin: 0;
          outline: none;
          border: none;
          background: none;
          cursor: pointer;
          -webkit-appearence: none;
          -webkit-tap-highlight-color: transparent;
        }
        .menu svg {
          width: 48px;
          height: 36px;
          top: -6px;
          left: -14px;
          stroke: #fff;
          stroke-width: 4px;
          stroke-linecap: round;
          stroke-linejoin: round;
          fill: none;
          position: absolute;
        }
        .menu svg path {
          transition: stroke-dasharray var(--duration, 0.85s)
              var(--easing, ease) var(--delay, 0s),
            stroke-dashoffset var(--duration, 0.85s) var(--easing, ease)
              var(--delay, 0s);
          stroke-dasharray: var(--array-1, 26px) var(--array-2, 100px);
          stroke-dashoffset: var(--offset, 126px);
          transform: translateZ(0);
        }
        .menu svg path:nth-child(2) {
          --duration: 0.7s;
          --easing: ease-in;
          --offset: 100px;
          --array-2: 74px;
        }
        .menu svg path:nth-child(3) {
          --offset: 133px;
          --array-2: 107px;
        }
        .menu.active svg {
          stroke: #000;
        }
        .menu.active svg path {
          --offset: 57px;
        }
        .menu.active svg path:nth-child(1),
        .menu.active svg path:nth-child(3) {
          --delay: 0.15s;
          --easing: cubic-bezier(0.2, 0.4, 0.2, 1.1);
        }
        .menu.active svg path:nth-child(2) {
          --duration: 0.4s;
          --offset: 2px;
          --array-1: 1px;
        }
        .menu.active svg path:nth-child(3) {
          --offset: 58px;
        }
      `}</style>
    </>
  )
}

export default Nav
