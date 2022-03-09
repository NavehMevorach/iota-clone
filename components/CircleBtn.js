function CircleBtn({ direction = 'left', onClick }) {
  function handleClick() {
    onClick()
  }
  return (
    <button onClick={handleClick} className="demo relative cursor-pointer">
      <svg className="progress" width="54" height="54" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="#181e32"
          stroke="#485775"
          strokeWidth="2"
        />
        {direction !== 'left' && (
          <circle
            className="progress-value"
            cx="60"
            cy="60"
            r="54"
            fill="#181e32"
            stroke="#00e0ca"
            strokeWidth="2"
            transform="rotate(-90 60 60)"
          />
        )}
      </svg>
      <img
        src={`/assets/chevron-${
          direction === 'left' ? 'left.svg' : 'right.svg'
        }`}
        className="w-[16px] h-[24px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </button>
  )
}

export default CircleBtn
