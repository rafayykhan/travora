import { useState } from "react";
import { Link } from 'react-router-dom'
function Navbar() {

    return (
        <nav className='NavbarItems'>
            <h1 className = 'nav-bar logo'> Travora</h1>
            <ul className='nav-menu'>
                <li>
                    <Link to ='/'>
                    <i className="fa-solid fa-house"></i>Home
                    </Link>
                    <Link to ='/About'>
                    <i className="fa-solid fa-circle-info"></i>About
                    </Link>
                    <Link to ='/Services'>
                    <i className="fa-solid fa-briefcase"></i>Services
                    </Link>
                    <Link to ='/Contact'>
                    <i className="fa-solid fa-address-book"></i>Contact
                    </Link>
                    <Link to ='/SignUp'>
                    <i className="nav-links-mobile"></i>Sign Up
                    </Link>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar