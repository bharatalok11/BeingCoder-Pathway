import React, { useState } from 'react'
import Login from './login'
import Signup from './Signup'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  const handleSwitchToSignup = () => {
    setShowSignup(true);
  };

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <a onClick={() => scrollToSection('home')} className="flex items-center text-[#0077b6] font-bold text-xl cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                HealthHive
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                className="outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg 
                  className="w-6 h-6 text-[#0077b6]" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#0077b6] font-medium transition duration-300 cursor-pointer">Home</a>
              <a onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#0077b6] font-medium transition duration-300 cursor-pointer">Services</a>
              <a onClick={() => scrollToSection('footer')} className="text-gray-700 hover:text-[#0077b6] font-medium transition duration-300 cursor-pointer">Contact Us</a>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setShowLogin(true)}
                  className="border-2 border-[#0077b6] text-[#0077b6] hover:bg-[#0077b6] hover:text-white px-6 py-2 rounded-full font-medium transition duration-300"
                >
                  Login
                </button>
                <button 
                  onClick={() => setShowSignup(true)}
                  className="border-2 border-[#0077b6] text-[#0077b6] hover:bg-[#0077b6] hover:text-white px-6 py-2 rounded-full font-medium transition duration-300"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-white mt-3 py-3 rounded-lg shadow-lg">
              <a onClick={() => scrollToSection('home')} className="block px-4 py-2 text-gray-700 hover:bg-[#caf0f8] hover:text-[#0077b6] font-medium transition duration-300 cursor-pointer">Home</a>
              <a onClick={() => scrollToSection('services')} className="block px-4 py-2 text-gray-700 hover:bg-[#caf0f8] hover:text-[#0077b6] font-medium transition duration-300 cursor-pointer">Services</a>
              <a onClick={() => scrollToSection('footer')} className="block px-4 py-2 text-gray-700 hover:bg-[#caf0f8] hover:text-[#0077b6] font-medium transition duration-300 cursor-pointer">Contact Us</a>
              <div className="px-4 py-2 space-y-2">
                <button 
                  onClick={() => {
                    setShowLogin(true);
                    setIsOpen(false);
                  }}
                  className="w-full border-2 border-[#0077b6] text-[#0077b6] hover:bg-[#0077b6] hover:text-white px-6 py-2 rounded-full font-medium transition duration-300"
                >
                  Login
                </button>
                <button 
                  onClick={() => {
                    setShowSignup(true);
                    setIsOpen(false);
                  }}
                  className="w-full border-2 border-[#0077b6] text-[#0077b6] hover:bg-[#0077b6] hover:text-white px-6 py-2 rounded-full font-medium transition duration-300"
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Login Modal */}
      {showLogin && <Login onClose={() => setShowLogin(false)} onSwitchToSignup={handleSwitchToSignup} />}

      {/* Signup Modal */}
      {showSignup && <Signup onClose={() => setShowSignup(false)} />}
    </>
  )
}

export default Navbar