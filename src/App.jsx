
import React, { useEffect } from 'react'
import { Routes, Route, useLocation, Link } from 'react-router-dom'

import Nav from './components/Nav'
import ContactUs from './components/ContactUs'

import './App.css'

import checkup from './assets/checkup.jpg'
import footsurgery from './assets/footsurgery.jpg'
import logofooter from './assets/logo-dark.png'

import services from './data/services.json'

const Home = () => {

  return (
    <div>
      <Nav />

      {/* HERO SECTION */}

      <section
        id="home"
        className="relative flex flex-col md:flex-row min-h-[80vh] bg-[var(--main-blue)] text-white overflow-hidden scroll-mt-24"
      >

        <div className="w-full md:w-[50%] flex flex-col justify-center px-6 md:pl-16 py-16 relative z-10">

          <p className="pb-3 font-bold text-[var(--main-green)]">
            HAPPY FEET, HAPPY LIFE!
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight pb-6">
            Healthy feet.
            <span className="block text-[var(--main-green)]">
              Happier steps.
            </span>
          </h1>

          <p className="pb-8 text-lg max-w-lg">
            Expert podiatry care for every step of your journey.
            We treat a wide range of foot conditions, helping you
            stay active, comfortable and pain-free.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="/contact"
              className="btn btn-wide rounded-full bg-[var(--main-green)] text-black border-none hover:brightness-110"
            >
              Book an appointment
            </a>

            <a
              href="/contact"
              className="btn btn-wide rounded-full btn-outline border-white text-white hover:bg-white hover:text-[var(--main-blue)]"
            >
              Contact us
            </a>

          </div>

          <p className="text-sm pt-5">
            Our podiatrists are available from Monday to Saturday.
          </p>

        </div>


        {/* HERO IMAGE */}

        <div className="w-full md:w-[58%] md:absolute md:right-0 md:top-0 md:h-full h-[350px]">

          <img
            src={checkup}
            alt="Podiatrist treating a patient's foot"
            className="w-full h-full object-cover"
            style={{
              clipPath: 'ellipse(85% 100% at 85% 50%)'
            }}
          />

        </div>

      </section>


      {/* HIGHLIGHTS SECTION */}

      <section className="bg-gray-50 py-8 px-6 md:px-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

          <div className="flex items-center gap-4">
            <div className="bg-lime-50 text-green-700 rounded-full w-14 h-14 flex items-center justify-center text-3xl shrink-0">
              ♡
            </div>

            <div>
              <h3 className="font-bold text-[var(--main-blue)]">
                Personalised Care
              </h3>
              <p className="text-sm text-gray-600">
                Treatment tailored to your individual needs.
              </p>
            </div>
          </div>


          <div className="flex items-center gap-4 md:border-l md:border-r border-gray-200 md:px-8">
            <div className="bg-lime-50 text-green-700 rounded-full w-14 h-14 flex items-center justify-center text-2xl shrink-0">
              ✓
            </div>

            <div>
              <h3 className="font-bold text-[var(--main-blue)]">
                Expert Attention
              </h3>
              <p className="text-sm text-gray-600">
                Dedicated care for a wide range of foot conditions.
              </p>
            </div>
          </div>


          <div className="flex items-center gap-4">
            <div className="bg-lime-50 text-green-700 rounded-full w-14 h-14 flex items-center justify-center text-2xl shrink-0">
              +
            </div>

            <div>
              <h3 className="font-bold text-[var(--main-blue)]">
                Patient Comfort
              </h3>
              <p className="text-sm text-gray-600">
                A welcoming environment where your wellbeing comes first.
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* ABOUT SECTION */}

      <section
        id="about-us"
        className="bg-white py-20 px-6 md:px-16 scroll-mt-24"
      >

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

          <div className="w-full md:w-1/2">

            <img
              src={footsurgery}
              alt="Podiatrist providing professional foot care"
              className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl shadow-lg"
            />

          </div>


          <div className="w-full md:w-1/2 text-[var(--main-blue)]">

            <p className="font-bold text-[var(--main-green)] pb-2">
              ABOUT FINEFEET
            </p>

            <h2 className="text-4xl md:text-5xl font-bold pb-5">
              Small steps towards healthier feet.
            </h2>

            <div className="flex flex-col gap-4 text-gray-600 leading-relaxed">

              <p>
                At FineFeet, we believe that healthy feet are the foundation of an active and comfortable life.
                Our goal is to help you move with confidence through personalised podiatry care tailored to your individual needs.
              </p>

              <p>
                Whether you're dealing with persistent foot pain, uncomfortable nails, skin conditions or simply looking to maintain good foot health, we're here to help.
              </p>

              <p>
                With a patient-first approach and a commitment to quality care, we make your foot health our priority.
                Because when your feet feel good, every step feels better.
              </p>

            </div>

            <a
              href="#services"
              className="btn rounded-full bg-[var(--main-green)] text-black border-none mt-6 px-8 hover:brightness-110"
            >
              Explore our services
            </a>

          </div>

        </div>

      </section>


      {/* SERVICES SECTION */}

      <section
        id="services"
        className="bg-[#F7F8F5] py-24 px-6 md:px-16 scroll-mt-24"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center pb-12">

            <p className="font-bold text-[var(--main-green)] pb-2">
              WHAT WE DO
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[var(--main-blue)] pb-4">
              Comprehensive Foot Care, Every Step of the Way.
            </h2>

            <p className="text-gray-600 text-lg">
              From everyday foot concerns to specialised treatments, we're here to keep you comfortable, healthy and moving.
            </p>

          </div>


          {/* SERVICE CARDS */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service, index) => (

              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-5">

                  <h3 className="text-xl font-bold text-[var(--main-blue)] pb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* CALL TO ACTION */}

        <div className="max-w-7xl mx-auto mt-20 bg-[var(--main-blue)] text-white rounded-2xl px-8 py-12 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>

            <h3 className="text-3xl md:text-4xl font-bold pb-3">
              Your feet deserve a little extra care.
            </h3>

            <p>
              Don't let foot discomfort hold you back. Take the first step towards healthier, happier feet with FineFeet.
            </p>

          </div>

          <a
            href="/contact"
            className="btn btn-wide rounded-full bg-[var(--main-green)] text-black border-none hover:brightness-110 shrink-0"
          >
            Book an appointment
          </a>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="bg-[#1C2D40] text-white py-12 px-6 md:px-16">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

          <div className="flex items-center gap-4">

            <img
              src={logofooter}
              alt="FineFeet logo"
              className="w-16 h-16 object-contain"
            />

            <div>
              <h3 className="font-bold text-xl">
                FINEFEET
              </h3>
              <p className="text-sm tracking-widest">
                PODIATRY CLINIC
              </p>
            </div>

          </div>


          <div className="flex flex-wrap justify-center gap-6 text-sm">

            <a href="#home" className="hover:text-[var(--main-green)]">
              Home
            </a>

            <a href="#about-us" className="hover:text-[var(--main-green)]">
              About
            </a>

            <a href="#services" className="hover:text-[var(--main-green)]">
              Services
            </a>

            <Link to="/contact" className="hover:text-[var(--main-green)]">
              Contact Us
            </Link>

          </div>


          <p className="text-sm text-center">
            Copyright © FineFeet Podiatry Clinic. All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  )
}

const App = () => {

  const location = useLocation()

  // scrolling to section on homepage

  useEffect(() => {

    if (location.hash) {

      const section = document.getElementById(
        location.hash.substring(1)
      )

      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }

    } else {
      window.scrollTo(0, 0)
    }

  }, [location])


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  )
}

export default App