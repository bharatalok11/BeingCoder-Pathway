import React, { useState, useRef } from 'react';

const Footer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'assistant',
      text: 'Hello! How can I assist you today? Feel free to ask any health-related questions or share your concerns.'
    }
  ]);
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type === 'application/pdf' || file.type.startsWith('image/')) {
        setSelectedFile(file);
        // Add a message to show the attached file
        setMessages([...messages, {
          sender: 'user',
          text: `Attached file: ${file.name}`,
          isFile: true,
          fileName: file.name,
          fileType: file.type
        }]);
      } else {
        alert('Please upload only PDF or image files');
      }
    }
  };

  const handleSendMessage = () => {
    if (message.trim() || selectedFile) {
      const newMessages = [...messages];
      
      if (message.trim()) {
        newMessages.push({
          sender: 'user',
          text: message
        });
      }
      
      setMessages(newMessages);
      setMessage('');
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

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

      {/* Floating Chat Button with continuous animation */}
      {!isChatOpen && (
        <div className="fixed bottom-[20px] left-[50%] transform -translate-x-[50%] z-[50]">
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-[#0077B5] hover:bg-[#005f99] text-white px-[20px] py-[15px] rounded-full flex items-center gap-[10px] shadow-lg transition-all duration-[300ms] font-semibold text-xl animate-bounce"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 animate-pulse" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" 
              />
            </svg>
            Chat with HealthHive Assistant
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-[20px] left-[50%] transform -translate-x-[50%] z-[50] bg-white rounded-lg shadow-2xl w-[64%] max-w-[800px] h-[480px] flex flex-col">
          {/* Chat Header */}
          <header className="flex justify-between items-center bg-[#0077B5] text-white p-3 rounded-t-lg">
            <div className="flex items-center gap-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" 
                />
              </svg>
              <h3 className="text-lg font-bold">HealthHive Assistant</h3>
            </div>
            <button 
              onClick={() => setIsChatOpen(false)} 
              className="text-white hover:text-gray-200 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </header>

          {/* Chat Content */}
          <div className="flex-grow overflow-y-auto p-4 bg-gray-50">
            <div className="space-y-3">
              {messages.map((msg, index) => (
                <div key={index} className={`flex items-start gap-2 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                  <div className={`flex flex-col gap-1 w-full max-w-[85%] ${msg.sender === 'user' ? 'items-end' : ''}`}>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <span className="text-sm font-semibold text-gray-900">
                        {msg.sender === 'assistant' ? 'HealthHive Assistant' : 'You'}
                      </span>
                    </div>
                    <div className={`flex flex-col leading-1.5 p-3 border-gray-200 ${
                      msg.sender === 'assistant' 
                        ? 'bg-[#0077B5] text-white rounded-e-xl rounded-es-xl' 
                        : 'bg-gray-100 text-gray-900 rounded-s-xl rounded-ee-xl'
                    }`}>
                      {msg.isFile ? (
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                          </svg>
                          <span className="text-sm">{msg.fileName}</span>
                        </div>
                      ) : (
                        <p className="text-sm">{msg.text}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <footer className="p-3 bg-white border-t border-gray-200 rounded-b-lg">
            <div className="flex items-center gap-2">
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,image/*"
                className="hidden"
              />
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="p-1.5 text-gray-500 rounded-lg hover:bg-gray-100 transition-colors"
                title="Attach file (PDF or Image)"
              >
                <svg 
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" 
                  />
                </svg>
              </button>
              
              <div className="flex-grow relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-full focus:ring-2 focus:ring-[#0077B5] focus:border-transparent outline-none text-gray-700 placeholder-gray-500"
                />
                {selectedFile && (
                  <div className="absolute -top-6 left-2 bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs flex items-center gap-1">
                    <span>{selectedFile.name}</span>
                    <button 
                      onClick={() => {
                        setSelectedFile(null);
                        if (fileInputRef.current) {
                          fileInputRef.current.value = '';
                        }
                      }}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      ×
                    </button>
                  </div>
                )}
              </div>

              <button 
                onClick={handleSendMessage}
                disabled={!message.trim() && !selectedFile}
                className={`inline-flex justify-center p-1.5 rounded-full cursor-pointer transition-colors ${
                  message.trim() || selectedFile
                    ? 'text-[#0077B5] hover:bg-[#0077B5] hover:text-white'
                    : 'text-gray-400 cursor-not-allowed'
                }`}
              >
                <svg 
                  className="w-5 h-5 rotate-90" 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
              </button>
            </div>
          </footer>
        </div>
      )}
    </footer>
  );
};

export default Footer;
