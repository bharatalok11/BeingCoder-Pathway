import React, { useState } from 'react';

const Footer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <footer id="footer" className="bg-[#0d1b2a] text-white relative">
      <div className="container mx-auto px-6 pt-12 pb-10">
        <div className="flex flex-wrap gap-10 justify-between">
          {/* Logo & Description + Services */}
          <div className="w-full md:w-1/4">
            <h2 className="text-[#00b4d8] font-bold text-2xl mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              HealthHive
            </h2>
            <p className="text-gray-400 mb-6">Providing quality HealthHive services for all your medical needs.</p>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
              <ul>
                {['Emergency Care', 'Preventive Care', 'Specialist Consultations', 'Virtual Visits'].map((service) => (
                  <li key={service} className="mb-2">
                    <button className="text-gray-400 bg-[#112233] px-4 py-2 rounded-lg hover:bg-[#223344] transition duration-300 text-left w-full">
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Links + Follow Us */}
          <div className="w-full md:w-1/4">
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul>
                {['Home', 'Services'].map((link) => (
                  <li key={link} className="mb-2">
                    <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-[#00b4d8] transition duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media Links - Vertical */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
              {[
                { platform: 'Facebook', url: 'https://facebook.com/bharatalok11', color: '#3b5998' },
                { platform: 'Twitter', url: 'https://twitter.com/bharatalok11', color: '#1DA1F2' },
                { platform: 'Instagram', url: 'https://instagram.com/bharatalok11', color: '#E1306C' },
                { platform: 'LinkedIn', url: 'https://linkedin.com/in/bharatalok11', color: '#0077B5' },
              ].map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-[#00b4d8] transition duration-300"
                >
                  <span className="mr-2">•</span>
                  {social.platform}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 text-[#00b4d8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-medium">Address:</p>
                  <p>123 HealthHive Ave, Medical City</p>
                  <p>State, ZIP Code</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 text-[#00b4d8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-medium">Phone:</p>
                  <p>(123) 456-7890</p>
                  <p>Emergency: (123) 456-7891</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 text-[#00b4d8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-medium">Email:</p>
                  <p>info@HealthHive.com</p>
                  <p>support@HealthHive.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 text-[#00b4d8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-medium">Hours:</p>
                  <p>Mon-Fri: 8:00 AM - 8:00 PM</p>
                  <p>Sat-Sun: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Empty div to maintain grid layout */}
          <div className="w-full md:w-1/4"></div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} HealthHive. All rights reserved.
        </div>
      </div>

      {/* Floating Chat Button */}
      {!isChatOpen && (
        <div className="fixed bottom-[20px] left-[50%] transform -translate-x-[50%] z-[50]">
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-[#0077B5] hover:bg-[#005f99] text-white px-[20px] py-[15px] rounded-full flex items-center gap-[10px] shadow-lg transition-all duration-[300ms] font-semibold text-xl"
          >
            Chat with HealthHive Assistant
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-[20px] left-[50%] transform -translate-x-[50%] z-[50] bg-white p-[20px] rounded-lg shadow-xl w-[300px] h-[400px] flex flex-col">
          {/* Chat Header */}
          <header className="flex justify-between items-center border-b pb-[10px] mb-[10px]">
            <h3 className="text-black font-bold">HealthHive Assistant</h3>
            <button onClick={() => setIsChatOpen(false)} className="text-black text-2xl leading-none">&times;</button>
          </header>

          {/* Chat Content */}
          <div className="flex flex-col gap-[10px] overflow-y-auto flex-grow text-black">
            <p><strong>Assistant:</strong> How can I assist you today?</p>
            {/* Add dynamic chat messages here */}
          </div>

          {/* Input Area */}
          <footer className="mt-auto flex items-center gap-[10px] pt-[10px] border-t">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-grow border px-[10px] py-[5px] rounded"
            />
            <button className="bg-[#0077B5] hover:bg-[#005f99] text-white px-[10px] py-[5px] rounded-lg">Send</button>
          </footer>
        </div>
      )}
    </footer>
  );
};

export default Footer;
