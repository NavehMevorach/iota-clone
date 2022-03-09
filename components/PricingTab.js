import Btn from './Btn'
function PricingTab({
  subTitle,
  title,
  btnText,
  features,
  backgroundColor: [fromColor, toColor],
  borderColor,
  btnColor,
}) {
  return (
    <div className="pricing relative transition-all px-8 py-16 mx-6 my-6 flex flex-col justify-start items-center rounded-lg w-[328px] h-[546px] ease-in-out duration-300 hover:scale-105 hover:shadow-3xl group">
      <h3 className="group-hover:text-white uppercase text-[#8493ad] ">
        {subTitle}
      </h3>
      <h4 className="group-hover:text-white text-black">{title}</h4>
      <p className="group-hover:text-white mb-8">
        Connect with like-minded people in the community
      </p>
      <div className="group-hover:text-white">
        {features.map((text, ind) => (
          <p className="text-left mb-3" key={ind}>
            {text}
          </p>
        ))}
      </div>
      <a className="pricing-btn bg-[#2cd6cc] py-3 px-10 rounded-md mt-8 cursor-pointer border-2 group-hover:border-white ease-in-out duration-300">
        <p className="text-white font-bold">{btnText}</p>
      </a>
      <style jsx>
        {`
          .pricing {
            border: 2px solid ${borderColor};
          }
          .pricing:hover {
            background: linear-gradient(0deg, ${fromColor}, ${toColor});
            border: 0;
          }
          .pricing-btn {
            background: ${btnColor};
            border: 1px solid ${btnColor};
          }
          .pricing-btn:hover {
            background: ${toColor};
          }
        `}
      </style>
    </div>
  )
}

export default PricingTab

// background: linear-gradient(0deg, #0fc1b7 0%, #2cd6cc 100%);
// position: absolute;
// border-radius: 0.5rem;
// content: "";
// width: calc(100% + 4px);
// height: calc(100% + 4px);
// left: -2px;
// top: -2px;
// z-index: -1;

// transform: scale3d(1.05, 1.05, 1);
// box-shadow: 0px 8px 24px rgba(132, 147, 173, 0.6);
