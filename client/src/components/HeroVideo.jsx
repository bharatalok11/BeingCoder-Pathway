import React from 'react'

const HeroVideo = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video section on left */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="relative pb-[56.25%] h-0">
              {/* Video element */}
              <video 
                className="absolute top-0 left-0 w-full h-full rounded-xl object-cover"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source 
                  src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>
              
              {/* Video overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
          
          {/* Information on right */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              AI-Powered Healthcare Assistant
            </h2>
            <p className="text-gray-600 mb-6">
              Our intelligent chatbot provides instant answers to your healthcare questions, helps you find the right specialists, and guides you through your healthcare journey.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#caf0f8] p-3 rounded-full mr-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-[#0077b6]" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">24/7 Availability</h3>
                  <p className="text-gray-600">Get answers to your health questions any time, day or night.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#caf0f8] p-3 rounded-full mr-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-[#0077b6]" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">HIPAA Compliant</h3>
                  <p className="text-gray-600">Your healthcare information is kept secure and private.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#caf0f8] p-3 rounded-full mr-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-[#0077b6]" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" 
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Continuously Learning</h3>
                  <p className="text-gray-600">Our AI assistant improves with every interaction to better serve your needs.</p>
                </div>
              </div>
            </div>
            
            <button 
              className="mt-8 bg-[#0077b6] hover:bg-[#023e8a] text-white px-8 py-3 rounded-full flex items-center justify-center transition duration-300"
              onClick={() => {}}
            >
              Try it yourself
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroVideo
