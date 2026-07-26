import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navLinkStyle =
    "flex items-center gap-[10px] text-[#222] text-[1.2rem] font-semibold px-4 py-[0.7rem] whitespace-nowrap hover:bg-[#01959a] hover:text-white hover:rounded transition-all duration-200 ease-in-out";

  return (
    <nav className="flex items-center justify-between w-[95%] h-20 bg-white px-8 rounded-[13px] shadow-[0_5px_15px_rgba(0,0,0,0.25)] mx-auto mt-5">
      {/* Logo */}
      <h1 className="text-[#222] text-[2rem] font-bold cursor-pointer">
        Travora
      </h1>

      <div className="menu-cions">

      </div>

      {/* Navigation Menu */}
      <ul className="grid [grid-template-columns:repeat(5,auto)] gap-[10px] list-none items-center">
        <li>
          <Link to="/" className={navLinkStyle}>
            <i className="fa-solid fa-house"></i>
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" className={navLinkStyle}>
            <i className="fa-solid fa-circle-info"></i>
            About
          </Link>
        </li>

        <li>
          <Link to="/services" className={navLinkStyle}>
            <i className="fa-solid fa-briefcase"></i>
            Services
          </Link>
        </li>

        <li>
          <Link to="/contact" className={navLinkStyle}>
            <i className="fa-solid fa-address-book"></i>
            Contact
          </Link>
        </li>
        
        <li>
          <Link to="/signup" className="flex items-center gap-[10px] text-[#222] text-[1.2rem] font-semibold px-4 py-[0.7rem] whitespace-nowrap hover:bg-[#000000] hover:text-white hover:rounded transition-all duration-200 ease-in-out">
            <i className="fa-solid fa-user-plus"></i>
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
