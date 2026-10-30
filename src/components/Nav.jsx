import React from 'react'
import logo from '../assets/logo.png'
import '../App.css'

const Nav = () => {
  return (
    <nav className="fixed absolute w-[100%] flex justify-between place-items-center px-16 py-4 bg-white z-1000">
        <div className="logo">
            <img src={logo} alt="logo" className="w-20 h-20"/>
        </div>

        <div className="links">
            <ul className="flex gap-6 text-xl text-[var(--main-blue)] place-items-center cursor-pointer">
                <li>Home</li>
                <li><a href="#about-us">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li className="bg-[var(--main-blue)] text-white p-2 rounded-lg text-lg">Contact Us</li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav