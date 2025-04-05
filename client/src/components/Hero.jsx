import React from 'react'

const Hero = () => {
  return (
    <section className="py-12 mb-4">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <span className="mb-2 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-[#0077b6]">
              Healthcare Made Simple
            </span>
            <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl leading-tight">
              Your Health Is Our Top{' '}
              <span className="text-[#0077b6] underline decoration-4 decoration-[#caf0f8]">
                PRIORITY
              </span>
            </h1>
            <h2 className="mb-4 text-xl font-semibold text-[#0077b6] md:text-2xl">
              HEALTHCARE
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
              Good health is a state of mental, physical and social well-being — not just the absence of disease.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button className="bg-[#0077b6] hover:bg-[#023e8a] text-white px-8 py-3 rounded-full font-medium transition duration-300">
                Book Appointment
              </button>
              <button className="border border-[#0077b6] text-[#0077b6] hover:bg-[#0077b6] hover:text-white px-8 py-3 rounded-full font-medium transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="relative w-full md:w-1/2">
            {/* Main Doctor Image */}
            <div className="rounded-3xl overflow-hidden shadow-lg bg-[#0077b6]">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Doctor with stethoscope"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Interactive Cards */}
            <div className="absolute top-1/4 -left-10 bg-white p-4 rounded-xl shadow-lg w-64 hidden md:block">
              <div className="flex items-center mb-2">
                <div className="bg-[#caf0f8] p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#0077b6]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <span className="ml-2 font-medium">Search the medical</span>
              </div>
              <p className="text-gray-600 text-sm">Web resources online</p>
            </div>

            <div className="absolute top-2/4 -left-20 bg-white p-4 rounded-xl shadow-lg w-64 hidden md:block">
              <div className="flex items-center mb-2">
                <div className="bg-[#caf0f8] p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#0077b6]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <span className="ml-2 font-medium">Find the best doctor</span>
              </div>
              <p className="text-gray-600 text-sm">Closest to your area</p>
            </div>

            <div className="absolute top-3/4 -left-10 bg-white p-4 rounded-xl shadow-lg w-64 hidden md:block">
              <div className="flex items-center mb-2">
                <div className="bg-[#caf0f8] p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#0077b6]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="ml-2 font-medium">Get your solution</span>
              </div>
              <p className="text-gray-600 text-sm">The modern way</p>
            </div>

            <div className="absolute -bottom-12 right-0 bg-white p-5 rounded-xl shadow-lg w-64">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80"
                alt="Doctor Alex Smith"
                className="w-14 h-14 rounded-full object-cover mx-auto mb-2"
              />
              <h3 className="text-center font-bold">Dr. Alex Smith</h3>
              <p className="text-gray-600 text-sm text-center mb-3">
                Intermedica Hospital, GHC
              </p>
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-2 rounded-full font-medium text-sm transition duration-300">
                Make appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
