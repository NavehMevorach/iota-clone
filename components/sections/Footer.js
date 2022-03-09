import Social from '../Social'
function Footer() {
  return (
    <>
      <div className="bg-gradient-to-bl from-[#485776] to-[#131f37] w-screen h-full">
        <div className="px-12 py-12 md:py-24 md:px-24 w-full h-full text-left text-white">
          <h5 className="text-left capitalize text-2xl md:text-4xl md:max-w-md">
            IOTA Provides Digital Trust, Enabling Us To Build A Better World
          </h5>
          <hr className="bg-[#485776] opacity-10 h-[1px] w-full my-10"></hr>
          <div className="flex flex-col md:flex-row md:justify-between text-left">
            <div className="flex flex-col max-w-[150px] mb-10">
              <span className="text-[#C3D0E4] text-[0.9rem] mb-3">
                Registered Address
              </span>
              <span className="text-[#8493AD] text-[0.9rem]">
                IOTA FOundation Pappelallie 78/79 10437 Berlin Germany
              </span>
            </div>
            <div>
              <p className="text-left text-[#8493AD]">
                © 2021 IOTA Foundation -{' '}
                <a className="text-light-green cursor-pointer">
                  Privacy Policy
                </a>
                ,
                <br />
                Impressum Get in touch:{' '}
                <a className="text-light-green cursor-pointer">
                  Contact Us
                </a>{' '}
                <br />
                Board of Directors: Dominik Schiener and Navin Ramachandran
                ID/Company No.: 3416/1234/2 <br />
                EU public ID number in the EU Transparency Register:
                500027331119-04 VAT ID: DE329624902
              </p>
            </div>
          </div>
        </div>
      </div>
      <Social />
    </>
  )
}

export default Footer
