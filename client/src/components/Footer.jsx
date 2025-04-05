import React, { useState } from 'react';

const Footer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <footer className="bg-[#0d1b2a] text-white relative">
      <div className="container mx-auto px-6 pt-12 pb-10">
        <div className="flex flex-wrap gap-10 justify-between">
          {/* Logo & Description */}
          <div className="w-full md:w-1/4">
            <h2 className="text-[#00b4d8] font-bold text-2xl mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              HealthHive
            </h2>
            <p className="text-gray-400">Providing quality HealthHive services for all your medical needs.</p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul>
              {['Home', 'Doctors', 'Services'].map((link) => (
                <li key={link} className="mb-2">
                  <a href={/${link.toLowerCase()}} className="text-gray-400 hover:text-[#00b4d8] transition duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul>
              {['Emergency Care', 'Preventive Care', 'Specialist Consultations', 'Virtual Visits'].map((service) => (
                <li key={service} className="mb-2">
                  <button className="text-gray-400 bg-[#112233] px-4 py-2 rounded-lg hover:bg-[#223344] transition duration-300 text-left">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-4 text-gray-400">
              <div>📍 123 HealthHive Ave, Medical City</div>
              <div>📞 (123) 456-7890</div>
              <div>📧 info@HealthHive.com</div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6 text-xl">
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
                  style={{ color: social.color }}
                  className={hover:text-[${social.color}]}
                >
                  {social.platform}
                </a>
              ))}
            </div>
          </div>
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
        <div className="fixed bottom-[20px] left-[50%] transform -translate-x-[50%] z-[50] bg-white p-[20px] rounded-lg shadow-xl w-[300px] h-[400px] overflow-auto">
          {/* Chat Header */}
          <header className="flex justify-between items-center border-b pb-[10px] mb-[10px]">
            <h3>HealthHive Assistant</h3>
            <button onClick={() => setIsChatOpen(false)}>&times;</button>
          </header>

          {/* Chat Content */}
          <div className="flex flex-col gap-[10px] overflow-y-auto h-full">
            {/* Example Messages */}
            <p><strong>Assistant:</strong> How can I assist you today?</p>
            {/* Add dynamic chat messages here */}
          </div>

          {/* Input Area */}
          <footer className="mt-auto flex items-center gap-[10px] pt-[10px] border-t">
            <input type="text" placeholder="Type your message..." className="flex-grow border px-[10px]" />
            <button className="bg-[#0077B5] hover:bg-[#005f99] text-white px-[10px] py-[5px] rounded-lg">Send</button>
          </footer>
        </div>
      )}
    </footer>
  );
};

export default Footer;
