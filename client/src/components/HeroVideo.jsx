import React from 'react';

const HeroVideo = () => {
  return (
    <section id="services" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Video section */}
          <div className="rounded-xl overflow-hidden shadow-xl relative">
            <div className="relative pb-[56.25%] h-0">
              <video 
                className="absolute top-0 left-0 w-full h-full rounded-xl object-cover"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
          
          {/* Content section */}
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              AI-Powered HealthHive Assistant
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Get instant answers to your HealthHive questions, find the right specialists, and navigate your HealthHive journey with ease.
            </p>
            
            <div className="space-y-5">
              {[
                {title: "24/7 Availability", desc: "Get answers any time, day or night.", icon: "clock"},
                {title: "HIPAA Compliant", desc: "Your data is safe and secure.", icon: "shield"},
                {title: "Continuously Learning", desc: "Improves with every interaction.", icon: "trending-up"}
              ].map((item, index) => (
                <div key={index} className="flex items-start p-4 bg-white shadow-md rounded-lg">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 text-blue-600" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      {item.icon === "clock" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
                      {item.icon === "shield" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                      {item.icon === "trending-up" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />}
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-8 bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 rounded-full text-lg font-medium shadow-md transition-all duration-300 flex items-center">
              Try it yourself
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroVideo;