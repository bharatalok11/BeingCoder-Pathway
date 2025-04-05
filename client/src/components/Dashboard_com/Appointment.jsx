import React, { useState, useRef, useEffect } from 'react'

const Appointment = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [selectedDates, setSelectedDates] = useState({});
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [currentStep, setCurrentStep] = useState('symptoms'); // 'symptoms', 'hospitals', 'doctors', 'success'
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationLoading, setLocationLoading] = useState(true);
  const [locationError, setLocationError] = useState(null);
  const [patientDetails, setPatientDetails] = useState({
    name: '',
    gender: '',
    age: '',
    address: ''
  });
  const [bookingDetails, setBookingDetails] = useState(null);

  const patientFormRef = useRef(null);

  const symptoms = ["Fever", "Cough", "Headache", "Fatigue", "Cold", "Body Pain", "Sore Throat", "Vomiting", "Diarrhea"];

  const hospitals = [
    {
      id: 1,
      name: "City General Hospital",
      logo: "🏥",
      rating: 4.8,
      location: "123 Healthcare Avenue, City Center",
      distance: 2.5
    },
    {
      id: 2,
      name: "Medicare Wellness Center",
      logo: "🏥",
      rating: 4.6,
      location: "456 Medical Park, Downtown",
      distance: 3.2
    },
    {
      id: 3,
      name: "LifeCare Hospital",
      logo: "🏥",
      rating: 4.9,
      location: "789 Wellness Road, Uptown",
      distance: 1.8
    },
    {
      id: 4,
      name: "Healing Hands Clinic",
      logo: "🏥",
      rating: 4.7,
      location: "321 Care Street, Westside",
      distance: 4.0
    },
    {
      id: 5,
      name: "Community Health Center",
      logo: "🏥",
      rating: 4.5,
      location: "567 Health Boulevard, Eastside",
      distance: 3.7
    }
  ];

  const doctors = {
    1: [
      {
        id: 1,
        name: "Dr. Sarah Johnson",
        image: "👩‍⚕️",
        specialization: "General Physician",
        experience: "15 years",
        slots: {
          "2024-04-05": [
            { time: "09:00-09:30", booked: true },
            { time: "10:00-10:30", booked: true },
            { time: "11:00-11:30", booked: false }
          ],
          "2024-04-06": [
            { time: "09:00-09:30", booked: true },
            { time: "10:00-10:30", booked: true },
            { time: "11:00-11:30", booked: false }
          ],
          "2024-04-07": [
            { time: "09:00-09:30", booked: false },
            { time: "10:00-10:30", booked: false }
          ],
          "2024-04-08": [
            { time: "09:00-09:30", booked: false },
            { time: "10:00-10:30", booked: true }
          ],
          "2024-04-09": [
            { time: "09:00-09:30", booked: false },
            { time: "10:00-10:30", booked: false }
          ]
        }
      },
      {
        id: 2,
        name: "Dr. Michael Chen",
        image: "👨‍⚕️",
        specialization: "Internal Medicine",
        experience: "12 years",
        slots: {
          "2024-04-05": [
            { time: "14:00-14:30", booked: false },
            { time: "15:00-15:30", booked: false }
          ],
          "2024-04-06": [
            { time: "14:00-14:30", booked: false },
            { time: "15:00-15:30", booked: false }
          ],
          "2024-04-07": [
            { time: "14:00-14:30", booked: true },
            { time: "15:00-15:30", booked: false }
          ],
          "2024-04-08": [
            { time: "14:00-14:30", booked: false },
            { time: "15:00-15:30", booked: false }
          ],
          "2024-04-09": [
            { time: "14:00-14:30", booked: false },
            { time: "15:00-15:30", booked: true }
          ]
        }
      },
      {
        id: 3,
        name: "Dr. Emily Parker",
        image: "👩‍⚕️",
        specialization: "Family Medicine",
        experience: "8 years",
        slots: {
          "2024-04-05": [
            { time: "11:00-11:30", booked: false },
            { time: "11:30-12:00", booked: true },
            { time: "12:00-12:30", booked: false },
            { time: "12:30-13:00", booked: false }
          ],
          "2024-04-06": [
            { time: "11:00-11:30", booked: false },
            { time: "11:30-12:00", booked: true },
            { time: "12:00-12:30", booked: false },
            { time: "12:30-13:00", booked: false }
          ],
          "2024-04-07": [
            { time: "11:00-11:30", booked: false },
            { time: "11:30-12:00", booked: false }
          ],
          "2024-04-08": [
            { time: "11:00-11:30", booked: true },
            { time: "11:30-12:00", booked: false }
          ],
          "2024-04-09": [
            { time: "11:00-11:30", booked: false },
            { time: "11:30-12:00", booked: false }
          ]
        }
      }
    ]
  };

  const generateCalendarDates = () => {
    const dates = [];
    const today = new Date(2024, 3, 5); // April 5, 2024 (month is 0-based)
    for (let i = 0; i < 5; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const handleSymptomClick = (symptom) => {
    setSelectedSymptoms(prev => {
      if (prev.includes(symptom)) {
        return prev.filter(s => s !== symptom);
      }
      return [...prev, symptom];
    });
  };

  const handleHospitalClick = (hospital) => {
    setSelectedHospital(hospital);
    setSelectedDates({});  // Reset selected dates when changing hospitals
  };

  const handleDateClick = (doctorId, date) => {
    setSelectedDates(prev => ({
      ...prev,
      [doctorId]: date
    }));
  };

  const handleLocationClick = (location) => {
    console.log(`Redirecting to map for location: ${location}`);
  };

  const formatDate = (date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
  };

  const formatDateKey = (date) => {
    // Format: YYYY-MM-DD
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Get current location and reverse geocode it using OpenStreetMap
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`,
              {
                headers: {
                  'Accept-Language': 'en-US,en;q=0.9',
                  'User-Agent': 'Hospital Appointment System'
                }
              }
            );
            const data = await response.json();

            // Format the address from OpenStreetMap data
            const address = data.address;
            const formattedAddress = [
              address.road,
              address.suburb,
              address.city || address.town || address.village,
              address.state,
              address.postcode
            ].filter(Boolean).join(', ');

            setCurrentLocation({
              coordinates: [longitude, latitude],
              address: formattedAddress
            });
            setLocationLoading(false);
          } catch (error) {
            setLocationError("Could not fetch location details");
            setLocationLoading(false);
          }
        },
        (error) => {
          let errorMessage = "Could not access location";
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = "Please allow location access to find nearby hospitals";
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = "Location information unavailable";
              break;
            case error.TIMEOUT:
              errorMessage = "Location request timed out";
              break;
            default:
              errorMessage = "An unknown error occurred";
          }
          setLocationError(errorMessage);
          setLocationLoading(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        }
      );
    } else {
      setLocationError("Geolocation is not supported by your browser");
      setLocationLoading(false);
    }
  }, []);

  return (
    <div className="h-full bg-[#0077b6]">
      {/* Location Header */}
      <div className="bg-white px-6 py-4 shadow-lg">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {locationLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-[#0077b6] border-t-transparent rounded-full animate-spin"></div>
              <span className="text-gray-600">Getting your location...</span>
            </div>
          ) : locationError ? (
            <div className="flex items-center space-x-2">
              <span className="text-red-500">{locationError}</span>
              <button
                onClick={() => {
                  setLocationLoading(true);
                  setLocationError(null);
                  // Retry getting location
                  navigator.geolocation.getCurrentPosition(/* ... same handlers ... */);
                }}
                className="px-3 py-1 text-sm bg-[#0077b6] text-white rounded-lg hover:bg-[#005d91] transition-colors"
              >
                Retry
              </button>
            </div>
          ) : (
            <div className="flex-1">
              <span className="text-gray-600">Your location:</span>
              <span className="ml-2 font-medium text-[#0077b6]">{currentLocation?.address}</span>
            </div>
          )}
        </div>
      </div>

      {/* Symptoms Section */}
      <div className={`p-6 transition-all duration-300 ${currentStep === 'symptoms' ? 'block' : 'hidden'}`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Select your Symptoms</h2>
          {selectedSymptoms.length > 0 && (
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all flex items-center"
              onClick={() => setCurrentStep('hospitals')}
            >
              Next
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {symptoms.map((symptom) => (
            <button
              key={symptom}
              className={`p-4 border-2 rounded-lg transition-all w-full font-medium relative overflow-hidden ${selectedSymptoms.includes(symptom)
                ? 'bg-white text-[#0077b6] border-white'
                : 'bg-transparent text-white border-white/50 hover:border-white'
                }`}
              onClick={() => handleSymptomClick(symptom)}
            >
              <div className="flex items-center justify-between">
                <span>{symptom}</span>
                {selectedSymptoms.includes(symptom) && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0077b6]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </button>
          ))}
        </div>
        {selectedSymptoms.length > 0 && (
          <div className="mt-6 p-4 bg-white/10 rounded-lg">
            <h3 className="text-white font-medium mb-2">Selected Symptoms:</h3>
            <div className="flex flex-wrap gap-2">
              {selectedSymptoms.map((symptom) => (
                <div
                  key={symptom}
                  className="bg-white text-[#0077b6] px-3 py-1 rounded-full text-sm font-medium flex items-center"
                >
                  {symptom}
                  <button
                    onClick={() => handleSymptomClick(symptom)}
                    className="ml-2 hover:text-red-500 transition-colors"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Hospital Section */}
      <div id="hospital" className={`p-6 transition-all duration-300 ${currentStep === 'hospitals' ? 'block' : 'hidden'}`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Nearest Hospitals</h2>
          <button
            onClick={() => {
              setCurrentStep('symptoms');
              setSelectedHospital(null);
            }}
            className="px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-all flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Symptoms
          </button>
        </div>
        <div className="space-y-4">
          {hospitals.map((hospital) => (
            <div
              key={hospital.id}
              className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => {
                handleHospitalClick(hospital);
                setCurrentStep('doctors');
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{hospital.logo}</span>
                  <h3 className="text-lg font-semibold text-[#0077b6]">{hospital.name}</h3>
                </div>
                <div className="flex items-center space-x-1 bg-[#0077b6] text-white px-2 py-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="gold" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-sm font-medium">{hospital.rating}</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-gray-600">
                <button
                  className="text-left hover:text-[#0077b6] transition-colors flex items-center group"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLocationClick(hospital.location);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 group-hover:text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {hospital.location}
                </button>
                <span className="text-sm font-medium">{hospital.distance} km</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Doctors Section */}
      <div id="doctorPatients" className={`p-6 transition-all duration-300 ${currentStep === 'doctors' || currentStep === 'success' ? 'block' : 'hidden'}`}>
        {currentStep !== 'success' && (
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Available Doctors</h2>
            <button
              onClick={() => {
                setCurrentStep('hospitals');
                setSelectedHospital(null);
                setSelectedDates({});
                setSelectedSlot(null);
              }}
              className="px-4 py-2 bg-black text-white rounded-lg transition-all flex items-center hover:bg-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Hospitals
            </button>
          </div>
        )}

        {currentStep === 'success' ? (
          <div className="bg-white rounded-lg p-8 text-center animate-fade-in">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Appointment Booked Successfully!</h2>
            <div className="space-y-2 text-gray-600 mb-6">
              <p><span className="font-medium">Hospital:</span> {bookingDetails?.hospital}</p>
              <p><span className="font-medium">Doctor:</span> {bookingDetails?.doctor}</p>
              <p><span className="font-medium">Date:</span> {bookingDetails?.date}</p>
              <p><span className="font-medium">Time:</span> {bookingDetails?.time}</p>
            </div>
            <button
              onClick={() => {
                setCurrentStep('symptoms');
                setSelectedSymptoms([]);
                setSelectedHospital(null);
                setSelectedDates({});
                setSelectedSlot(null);
                setPatientDetails({
                  name: '',
                  gender: '',
                  age: '',
                  address: ''
                });
                setBookingDetails(null);
              }}
              className="bg-[#0077b6] text-white px-6 py-3 rounded-lg hover:bg-[#005d91] transition-colors"
            >
              Book Another Appointment
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {doctors[selectedHospital?.id]?.map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-lg p-6">
                {/* Doctor Info */}
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-4xl">{doctor.image}</span>
                  </div>
                  <h3 className="ml-4 text-xl font-medium text-[#0077b6]">{doctor.name}</h3>
                </div>

                {/* Calendar */}
                <div className="space-y-4">
                  <div className="grid grid-cols-5 gap-3">
                    {generateCalendarDates().map((date) => (
                      <button
                        key={date.toISOString()}
                        onClick={() => handleDateClick(doctor.id, date)}
                        className={`p-3 rounded-lg text-center ${selectedDates[doctor.id]?.toDateString() === date.toDateString()
                          ? 'bg-black text-white'
                          : 'bg-[#1a1a1a] text-gray-400'
                          }`}
                      >
                        {formatDate(date)}
                      </button>
                    ))}
                  </div>

                  {/* Time Slots */}
                  {selectedDates[doctor.id] && (
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      {doctor.slots[formatDateKey(selectedDates[doctor.id])]?.map((slot, index) => (
                        <button
                          key={index}
                          disabled={slot.booked}
                          onClick={() => {
                            setSelectedSlot({ ...slot, doctorId: doctor.id });
                            // Scroll to patient form with smooth behavior
                            setTimeout(() => {
                              patientFormRef.current?.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center'
                              });
                            }, 100);
                          }}
                          className={`p-3 rounded-lg text-base font-medium text-white transition-all transform hover:scale-105 ${slot.booked
                            ? 'bg-red-500 cursor-not-allowed'
                            : selectedSlot?.time === slot.time && selectedSlot?.doctorId === doctor.id
                              ? 'bg-green-700 ring-2 ring-white'
                              : 'bg-green-500 hover:bg-green-600'
                            }`}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Patient Details Form */}
        {currentStep === 'doctors' && selectedSlot && !selectedSlot.booked && (
          <div ref={patientFormRef} className="mt-8 bg-white rounded-lg p-6 animate-fade-in">
            <h3 className="text-xl font-bold text-[#0077b6] mb-6">Patient Details</h3>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Patient Name</label>
                <input
                  type="text"
                  value={patientDetails.name}
                  onChange={(e) => setPatientDetails({ ...patientDetails, name: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077b6] focus:border-transparent"
                  placeholder="Enter patient name"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Gender</label>
                <select
                  value={patientDetails.gender}
                  onChange={(e) => setPatientDetails({ ...patientDetails, gender: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077b6] focus:border-transparent"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Age</label>
                <input
                  type="number"
                  value={patientDetails.age}
                  onChange={(e) => setPatientDetails({ ...patientDetails, age: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077b6] focus:border-transparent"
                  placeholder="Enter age"
                  min="0"
                  max="120"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-gray-700 text-sm font-medium mb-2">Address</label>
                <textarea
                  value={patientDetails.address}
                  onChange={(e) => setPatientDetails({ ...patientDetails, address: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077b6] focus:border-transparent"
                  placeholder="Enter address"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <button
              onClick={() => {
                const doctor = doctors[selectedHospital.id].find(d => d.id === selectedSlot.doctorId);
                const selectedDate = selectedDates[selectedSlot.doctorId];
                setBookingDetails({
                  hospital: selectedHospital.name,
                  doctor: doctor.name,
                  date: formatDate(selectedDate),
                  time: selectedSlot.time
                });
                setCurrentStep('success');
              }}
              className="w-full bg-green-500 text-white py-4 rounded-lg text-lg font-medium hover:bg-green-600 transition-colors"
            >
              Book Appointment
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
            `}</style>
    </div>
  )
}

export default Appointment
