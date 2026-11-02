
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../App.css'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <nav className="sticky top-0 w-full bg-white z-50 shadow-sm">

            <div className="flex justify-between items-center px-6 md:px-16 py-3">

                <div className="logo">
                    <Link to="/" onClick={closeMenu}>
                        <img src={logo} alt="FineFeet logo" className="w-16 h-16" />
                    </Link>
                </div>

                {/* DESKTOP NAVIGATION */}
                <div className="hidden md:block">
                    <ul className="flex gap-6 text-lg text-[var(--main-blue)] items-center">

                        <li>
                            <Link to="/#home" className="hover:text-[var(--main-green)]">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link to="/#about-us" className="hover:text-[var(--main-green)]">
                                About
                            </Link>
                        </li>

                        <li>
                            <Link to="/#services" className="hover:text-[var(--main-green)]">
                                Services
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/contact"
                                className="bg-[var(--main-blue)] text-white px-4 py-3 rounded-lg hover:bg-[var(--main-green)] hover:text-black"
                            >
                                Contact Us
                            </Link>
                        </li>

                    </ul>
                </div>

                {/* MOBILE HAMBURGER BUTTON */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-[var(--main-blue)] focus:outline-none"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" strokeWidth="2"
                            stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" strokeWidth="2"
                            stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

            </div>

            {/* MOBILE NAVIGATION MENU */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">

                    <ul className="flex flex-col gap-5 text-[var(--main-blue)] text-lg">

                        <li>
                            <Link to="/#home" onClick={closeMenu}
                                className="hover:text-[var(--main-green)]">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link to="/#about-us" onClick={closeMenu}
                                className="hover:text-[var(--main-green)]">
                                About
                            </Link>
                        </li>

                        <li>
                            <Link to="/#services" onClick={closeMenu}
                                className="hover:text-[var(--main-green)]">
                                Services
                            </Link>
                        </li>

                        <li>
                            <Link to="/contact" onClick={closeMenu}
                                className="inline-block bg-[var(--main-blue)] text-white px-4 py-3 rounded-lg hover:bg-[var(--main-green)] hover:text-black">
                                Contact Us
                            </Link>
                        </li>

                    </ul>

                </div>
            )}

        </nav>
    )
}

export default Nav