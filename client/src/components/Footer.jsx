import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-wrap">
          {/* Logo and Description */}
          <div className="w-full md:w-1/4 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-[#0077b6] font-bold text-2xl mb-4 flex items-center justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              HealthCare
            </h2>
            <p className="text-gray-400 mb-4">
              Providing quality healthcare services for all your medical needs.
            </p>
            <div className="flex justify-center md:justify-start">
              {/* Social Icons */}
              {/* Same SVG icons remain unchanged */}
              {/* ... [Social buttons here] */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="/" className="text-gray-400 hover:text-[#0077b6] transition duration-300">Home</a>
              </li>
              <li className="mb-2">
                <a href="/doctors" className="text-gray-400 hover:text-[#0077b6] transition duration-300">Doctors</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="text-gray-400 hover:text-[#0077b6] transition duration-300">Services</a>
              </li>
              <li className="mb-2">
                <a href="/reviews" className="text-gray-400 hover:text-[#0077b6] transition duration-300">Reviews</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="w-full md:w-1/4 text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="list-none">
              <li className="mb-2">
                <button className="text-gray-400 hover:text-[#0077b6] transition duration-300 text-left">Emergency Care</button>
              </li>
              <li className="mb-2">
                <button className="text-gray-400 hover:text-[#0077b6] transition duration-300 text-left">Preventive Care</button>
              </li>
              <li className="mb-2">
                <button className="text-gray-400 hover:text-[#0077b6] transition duration-300 text-left">Specialist Consultations</button>
              </li>
              <li className="mb-2">
                <button className="text-gray-400 hover:text-[#0077b6] transition duration-300 text-left">Virtual Visits</button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 flex items-center justify-center md:justify-start mb-4">
              <svg className="h-5 w-5 mr-2 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              123 Healthcare Ave, Medical City
            </p>
            <p className="text-gray-400 flex items-center justify-center md:justify-start mb-4">
              <svg className="h-5 w-5 mr-2 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              (123) 456-7890
            </p>
            <p className="text-gray-400 flex items-center justify-center md:justify-start mb-4">
              <svg className="h-5 w-5 mr-2 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              info@healthcare.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} HealthCare. All rights reserved.</p>
        </div>
      </div>

      {/* Chat Button */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50" style={{ transform: 'translateX(-50%) scale(1.2)' }}>
        <button 
          onClick={() => {}} 
          className="bg-[#0077b6] text-white px-10 py-4 rounded-full flex items-center justify-center shadow-lg hover:bg-[#023e8a] chat-btn-pulse text-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="font-medium">Chat with Healthcare Assistant</span>
        </button>
        <style>
          {`
            .chat-btn-pulse {
              animation: pulse 2s infinite;
            }
            @keyframes pulse {
              0% {
                box-shadow: 0 0 0 0 rgba(0, 119, 182, 0.7);
              }
              70% {
                box-shadow: 0 0 0 10px rgba(0, 119, 182, 0);
              }
              100% {
                box-shadow: 0 0 0 0 rgba(0, 119, 182, 0);
              }
            }
          `}
        </style>
      </div>
    </footer>
  )
}

export default Footer