import React from 'react'
import Nav from './components/Nav'
import Gallery from './components/Gallery'
import checkup from './assets/checkup.jpg'
import './App.css'
import generalcare from './assets/general-podiatry.jpeg'
import nailcare from './assets/nail-care.jpeg'
import cornandcallus from './assets/cornandcallus.jpeg'
import biomechanical from './assets/biomechanical.jpeg'
import custom from './assets/custom.jpeg'
import footcare from './assets/footcare.jpeg'

const App = () => {
  return (
    <div>
      <Nav />

      <section className="flex h-[100vh] bg-[var(--main-blue)] text-white">

        <div className="left px-16 w-[60%] flex flex-col justify-center pt-25">
          <p className="pb-2 font-bold text-[var(--main-green)]">HAPPY FEET, HAPPY LIFE!</p>
          <h1 className="text-7xl pb-6">We treat all foot problems so walking is not a burden.</h1>
          <p className="pb-8 text-lg">Our podiatrists are available from Monday to Saturday</p>

          <div className="buttons flex gap-8">
            <button className="btn btn-wide rounded-lg bg-[var(--main-green)] text-black">Book a consultation</button>
            <button className="btn btn-wide rounded-lg bg-[var(--main-green)] text-black">Contact us</button>
          </div>
        </div>

        <div className="right w-[40%]">
          <img src={checkup} alt="patient checkup" className="w-[100%] h-[100%]" />
        </div>
      </section>


      <section className="about-us flex flex-col justify-center bg-white text-[var(--main-blue)] py-24 h-[100vh] px-84" id="about-us">

        <div className="text-lg flex flex-col gap-4">

          <p className="font-bold text-center text-7xl pb-14">Small steps towards healthier feet.</p>

          <p>At FineFeet, we believe that healthy feet are the foundation of an active and comfortable life.
            Our goal is to help you move with confidence through personalised podiatry care tailored to your individual needs.
          </p>

          <p>Whether you're dealing with persistent foot pain, uncomfortable nails, skin conditions or simply looking to maintain good foot health, we're here to help.
          </p>

          <p>With a patient-first approach and a commitment to quality care, we make your foot health our priority.
            Because when your feet feel good, every step feels better.
          </p>

          <div className="highlights flex pt-12 gap-8 stack px-36">
            <p className="text-center card shadow-md justify-center p-2">Personalised Care - Treatment tailored to your individual needs.
            </p>

            <p className="mt-12 text-center text-center card shadow-md justify-center p-2">Expert Attention - Dedicated care for a wide range of foot conditions.
            </p>

            <p className="text-center text-center card shadow-md justify-center p-2">Patient Comfort - A welcoming environment where your wellbeing comes first.
            </p>
          </div>
        </div>
      </section>


      <section id="services" className="bg-[var(--main-blue)] py-24 flex flex-col justify-center text-center px-48">

        <p className="font-bold text-[var(--main-green)] pb-2">
          WHAT WE DO
        </p>

        <h2 className="text-4xl pb-4">
          Comprehensive Foot Care, Every Step of the Way.
        </h2>

        <p className="text-lg">
          From everyday foot concerns to specialised treatments, we're here to keep you comfortable, healthy and moving.
        </p>

        <div className="cards pt-12 flex flex-row justify-center gap-4">

          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src={generalcare}
                alt="General Podiatry"
                className="rounded-xl w-[100%] h-70" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">General Podiatry</h2>
              <p>Comprehensive foot assessments, routine foot care and treatment to help maintain healthy feet and prevent common foot problems.</p>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src={nailcare}
                alt="Nail Care & Treatment"
                className="rounded-xl w-[100%] h-70" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Nail Care & Treatment</h2>
              <p>Professional treatment for ingrown toenails, thickened nails, fungal nail concerns and other nail-related conditions.</p>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src={cornandcallus}
                alt="Corn & Callus Treatment"
                className="rounded-xl w-[100%] h-70" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Corn & Callus Treatment</h2>
              <p>Safe removal and management of corns and calluses to relieve discomfort, reduce pressure and restore foot comfort.</p>
            </div>
          </div>

        </div>



        <div className="cards pt-12 flex flex-row justify-center gap-4">

          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src={biomechanical}
                alt="Biomechanical Assessments"
                className="rounded-xl w-[100%] h-70" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Biomechanical Assessments</h2>
              <p>Assessment of how your feet, ankles and lower limbs move to identify problems that may contribute to pain or discomfort.</p>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src={custom}
                alt="Custom Orthotics"
                className="rounded-xl w-[100%] h-70" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Custom Orthotics</h2>
              <p>PPersonalised foot support solutions designed to improve alignment, distribute pressure and support comfortable movement.</p>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src={footcare}
                alt="Diabetic Foot Care"
                className="rounded-xl w-[100%] h-70" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Diabetic Foot Care</h2>
              <p>Preventative foot assessments and ongoing care to help identify potential complications and maintain foot health for people living with diabetes.</p>
            </div>
          </div>
        </div>

        <div className="text-center pt-12">
          <h3 className="text-3xl pb-4">Your feet deserve a little extra care.</h3>

          <p className="pb-4">
            Don't let foot discomfort hold you back. Take the first step towards healthier, happier feet with FineFeet.
          </p>

          <button className="btn btn-wide rounded-lg bg-[var(--main-green)] text-black">Book a consultation</button>
        </div>

      </section>


      <section id="gallery" className="gallery bg-white flex flex-col justify-center py-24 px-60">

        <Gallery />

      </section>

      <footer className="bg-[var(--main-blue)] py-12 text-center text-white">
        <p>
          Copyright © FineFeet Podiatry Clinic. All Rights Reserved
        </p>
      </footer>
    </div>
  )
}

export default App