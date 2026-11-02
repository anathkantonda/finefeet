
import React from 'react'
import Nav from './Nav'
import '../App.css'

const ContactUs = () => {
  return (
    <>
      <Nav />

      <div className="min-h-screen bg-[#F7F8F5]">

        {/* HEADER */}
        <section className="bg-[var(--main-blue)] text-white text-center py-20 px-6">

          <p className="text-[var(--main-green)] font-bold pb-3">
            GET IN TOUCH
          </p>

          <h1 className="text-4xl md:text-5xl font-bold pb-4">
            We'd love to hear from you.
          </h1>

          <p className="text-lg">
            Have a question or ready to book an appointment?
            Get in touch with our team.
          </p>

        </section>

        {/* CONTENT */}
        <section className="max-w-6xl mx-auto px-6 py-20">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            <div className="text-[var(--main-blue)]">

              <h2 className="text-3xl font-bold pb-6">
                Contact Information
              </h2>

              <p className="text-gray-600 pb-8">
                We're here to help you take the next step towards
                healthier, happier feet. Reach out to us using
                the details below.
              </p>

              <div className="flex flex-col gap-8">

                <div>
                  <h3 className="font-bold text-lg">Our Location</h3>
                  <p className="text-gray-600">
                    FineFeet Podiatry Clinic
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg">Phone</h3>
                  <p className="text-gray-600">
                    +27 XX XXX XXXX
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-gray-600">
                    info@finefeet.co.za
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg">Opening Hours</h3>
                  <p className="text-gray-600">
                    Monday - Saturday: 08:00 - 17:00
                  </p>
                  <p className="text-gray-600">
                    Sunday: Closed
                  </p>
                </div>

              </div>
            </div>

            {/* FORM */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">

              <h2 className="text-2xl font-bold text-[var(--main-blue)] pb-6">
                Send us a message
              </h2>

              <form className="flex flex-col gap-4">

                <div>
                  <label className="label text-black">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div>
                  <label className="label text-[var(--main-blue)]">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div>
                  <label className="label text-[var(--main-blue)]">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="label text-[var(--main-blue)]">Subject</label>
                  <select
                    className="select select-bordered w-full"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="appointment">Book an appointment</option>
                    <option value="general">General enquiry</option>
                    <option value="service">Service enquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="label text-[var(--main-blue)]">Message</label>
                  <textarea
                    placeholder="How can we help you?"
                    className="textarea textarea-bordered w-full h-32"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn bg-[var(--main-green)] text-black border-none hover:brightness-110 rounded-lg mt-2"
                >
                  Send Message
                </button>

              </form>
            </div>

          </div>
        </section>

        <footer className="bg-[var(--main-blue)] text-white text-center py-8">
          <p>
            Copyright © FineFeet Podiatry Clinic. All Rights Reserved.
          </p>
        </footer>

      </div>
    </>
  )
}

export default ContactUs