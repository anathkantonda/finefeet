
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../App.css'

const Nav = () => {
    return (
        <nav className="sticky top-0 w-full flex justify-between items-center px-6 md:px-16 py-3 bg-white z-50 shadow-sm">

            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="FineFeet logo" className="w-16 h-16" />
                </Link>
            </div>

            <div className="links">
                <ul className="flex gap-4 md:gap-6 text-base md:text-lg text-[var(--main-blue)] items-center cursor-pointer">

                    <li>
                        <a href="/#home">Home</a>
                    </li>

                    <li>
                        <a href="/#about-us">About</a>
                    </li>

                    <li>
                        <a href="/#services">Services</a>
                    </li>

                    <li>
                        <a href="/contact" className="bg-[var(--main-blue)] text-white px-4 py-3 rounded-lg">
                            Contact Us
                        </a>
                    </li>

                </ul>
            </div>

        </nav>
    )
}

export default Nav