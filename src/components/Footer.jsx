function Footer() {
  return (
    <div className="px-24 py-16 bg-black text-white max-[850px]:px-8">
      {/* Top */}
      <div className="flex items-center justify-between flex-wrap text-left">
        <div>
          <h1 className="text-4xl font-bold">Travora</h1>
          <p className="mt-2">
            Choose your favourite destination.
          </p>
        </div>

        <div>
          <i className="fa-brands fa-facebook-f text-[2rem] ml-4 hover:text-[#01959a] cursor-pointer max-[850px]:ml-0 max-[850px]:mr-4"></i>

          <i className="fa-brands fa-instagram text-[2rem] ml-4 hover:text-[#01959a] cursor-pointer max-[850px]:ml-0 max-[850px]:mr-4"></i>

          <i className="fa-brands fa-behance text-[2rem] ml-4 hover:text-[#01959a] cursor-pointer max-[850px]:ml-0 max-[850px]:mr-4"></i>

          <i className="fa-brands fa-twitter text-[2rem] ml-4 hover:text-[#01959a] cursor-pointer max-[850px]:ml-0 max-[850px]:mr-4"></i>
        </div>
      </div>

      {/* Bottom */}
      <div className="pt-8 flex justify-between flex-wrap text-left">
        <div className="flex flex-col max-[850px]:w-1/2">
          <h4 className="text-[1.3rem] font-bold py-4">Project</h4>
          <a href="/" className="pb-[0.4rem] text-[1.1rem] text-[#fafafa]">Changelog</a>
          <a href="/" className="pb-[0.4rem] text-[1.1rem] text-[#fafafa]">Status</a>
          <a href="/" className="pb-[0.4rem] text-[1.1rem] text-[#fafafa]">License</a>
          <a href="/" className="pb-[0.4rem] text-[1.1rem] text-[#fafafa]">All Versions</a>
        </div>

        <div className="flex flex-col max-[850px]:w-1/2">
          <h4 className="text-[1.3rem] font-bold py-4">Community</h4>
          <a href="/" className="pb-[0.4rem] text-[1.1rem] text-[#fafafa]">GitHub</a>
          <a href="/" className="pb-[0.4rem] text-[1.1rem] text-[#fafafa]">Issues</a>
          <a href="/" className="pb-[0.4rem] text-[1.1rem] text-[#fafafa]">Project</a>
          <a href="/" className="pb-[0.4rem] text-[1.1rem] text-[#fafafa]">Twitter</a>
        </div>

        <div className="flex flex-col max-[850px]:w-1/2">
          <h4 className="text-[1.3rem] font-bold py-4">Help</h4>
          <a href="/" className="pb-[0.4rem] text-[1.1rem] text-[#fafafa]">Support</a>
          <a href="/" className="pb-[0.4rem] text-[1.1rem] text-[#fafafa]">Troubleshooting</a>
          <a href="/" className="pb-[0.4rem] text-[1.1rem] text-[#fafafa]">Contact Us</a>
        </div>

        <div className="flex flex-col max-[850px]:w-1/2">
          <h4 className="text-[1.3rem] font-bold py-4">Others</h4>
          <a href="/" className="pb-[0.4rem] text-[1.1rem] text-[#fafafa]">Terms of Service</a>
          <a href="/" className="pb-[0.4rem] text-[1.1rem] text-[#fafafa]">Privacy Policy</a>
          <a href="/" className="pb-[0.4rem] text-[1.1rem] text-[#fafafa]">License</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;