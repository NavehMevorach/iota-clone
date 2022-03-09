import Link from 'next/link'

function BlogPost({ title, text, img, link }) {
  return (
    <a className="blog relative z-10  bg-cover bg-no-repeat bg-center md:rounded rounded-none md:h-[328px] h-[220px] md:w-[328px] w-full px-10 flex flex-col justify-center items-center text-white group overflow-hidden cursor-pointer">
      <div className="z-30 group-hover:-translate-y-5  duration-100 ease-in">
        <h5 className="">{title}</h5>
        <p className="group-hover:opacity-100 h-0 opacity-0 duration-100 ease-in ">
          {text}
        </p>
      </div>
      <button className="absolute z-30 left-1/2 -translate-x-1/2 bottom-[1.75rem] font-bold tracking-[1.2px] text-[0.875rem]">
        <span className="peer">Learn more</span>
        <svg
          className="peer-hover:translate-x-[10px] ease-in duration-100 inline mx-2 svelte-u2y4t8"
          width="8"
          height="13"
          viewBox="0 0 8 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.07129 11.5L6.07129 6.5L1.07129 1.5"
            stroke="#00E0CA"
            strokeWidth="1.72854"></path>
        </svg>
      </button>
      <div className="bg-gradient-to-b rounded-full from-[#00e0ca] to-[#0fc1b7] w-[32px] h-[32px] z-20 absolute top-1/2 -translate-y-1/2 duration-300 ease-in opacity-0 group-hover:opacity-50 group-hover:w-[800px] group-hover:h-[500px] "></div>
      <style jsx>
        {`
          .blog {
            background: url('/assets/blog/${img}.png');
            background-repeat: no-repeat;
            background-size: cover;
          }
        `}
      </style>
    </a>
  )
}

export default BlogPost
