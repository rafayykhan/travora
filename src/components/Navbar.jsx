import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navLinkStyle =
    "flex items-center gap-[10px] text-[#222] text-[1.2rem] font-semibold px-4 py-[0.7rem] whitespace-nowrap hover:bg-[#01959a] hover:text-white rounded transition-all duration-200 ease-in-out max-[850px]:block max-[850px]:w-full max-[850px]:text-center max-[850px]:py-8 max-[850px]:hover:transition-none";
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="left-0 right-0 z-[99] flex top-0 z-[9999] fixed items-center justify-between w-[95%] h-20 bg-white px-8 rounded-[13px] shadow-[0_5px_15px_rgba(0,0,0,0.25)] mx-auto mt-5">
      {/* Logo */}
      <h1 className="text-[#222] text-[2rem] font-bold cursor-pointer">
        Travora
      </h1>

      {/* Mobile Menu Icon */}
      <div
        className="hidden max-[850px]:block relative z-[100] cursor-pointer"
        onClick={handleClicked}
      >
        <i className={clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </div>

      {/* Navigation Menu */}
      <ul
        className={`
          grid [grid-template-columns:repeat(5,auto)] gap-[10px] list-none items-center left-0

          max-[850px]:absolute
          max-[850px]:top-full
          max-[850px]:left-0
          max-[850px]:w-full
          max-[850px]:bg-white
          max-[850px]:pt-20
          max-[850px]:pb-[30px]
          max-[850px]:items-stretch
          max-[850px]:z-50
          max-[850px]:transform
          max-[850px]:transition-all
          max-[850px]:duration-300
          max-[850px]:ease-in-out

          ${
            clicked
              ? "max-[850px]:flex max-[850px]:flex-col max-[850px]:left-0 max-[850px]:translate-x-0 max-[850px]:opacity-100"
              : "max-[850px]:flex max-[850px]:flex-col max-[850px]:-left-full max-[850px]:-translate-x-full max-[850px]:opacity-0"
          }
        `}
      >
        <li>
          <Link to="/" className={navLinkStyle}>
            <span className="inline-flex items-center gap-[10px]"></span>
            <i className="fa-solid fa-house"></i>
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" className={navLinkStyle}>
            <span className="inline-flex items-center gap-[10px]"></span>
            <i className="fa-solid fa-circle-info"></i>
            About
          </Link>
        </li>

        <li>
          <Link to="/services" className={navLinkStyle}>
            <span className="inline-flex items-center gap-[10px]"></span>
            <i className="fa-solid fa-briefcase"></i>
            Services
          </Link>
        </li>

        <li>
          <Link to="/contact" className={navLinkStyle}>
            <span className="inline-flex items-center gap-[10px]"></span>
            <i className="fa-solid fa-address-book"></i>
            Contact
          </Link>
        </li>

        <li>
          <Link
            to="/signup"
            className="flex items-center gap-[10px] text-[#222] text-[1.2rem] font-semibold px-4 py-[0.7rem] whitespace-nowrap hover:bg-black hover:text-white rounded transition-all duration-200 ease-in-out max-[850px]:block max-[850px]:text-center max-[850px]:p-6 max-[850px]:mx-auto max-[850px]:w-4/5 max-[850px]:bg-[#01959a] max-[850px]:text-white max-[850px]:font-bold max-[850px]:tracking-[2px]"
          >
            <span className="inline-flex items-center gap-[10px]"></span>
            <i className="fa-solid fa-user-plus"></i>
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
