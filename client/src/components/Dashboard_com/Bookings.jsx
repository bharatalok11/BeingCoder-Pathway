import React, { useState } from 'react';

const FeedbackModal = ({ isOpen, onClose, onSubmit, bookingId }) => {
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    onSubmit(bookingId, { rating, description });
    setRating(0);
    setDescription('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[500px] max-w-[90%]">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Share Your Feedback</h3>

        {/* Rating */}
        <div className="mb-6">
          <label className="block text-gray-600 text-sm font-medium mb-2">Rating</label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className={`p-2 rounded-full transition-all transform hover:scale-110 ${rating >= star ? 'text-yellow-400' : 'text-gray-300'
                  }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block text-gray-600 text-sm font-medium mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Share your experience..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077b6] focus:border-transparent resize-none h-32"
          />
        </div>

        {/* Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!rating}
            className={`flex-1 px-4 py-2 rounded-lg transition-colors ${rating
                ? 'bg-[#0077b6] text-white hover:bg-[#005d91]'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

const Bookings = () => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState(null);
  const [bookings] = useState([
    {
      id: 1,
      hospitalName: "City General Hospital",
      location: "123 Healthcare Ave, Medical District",
      doctorName: "Dr. Sarah Johnson",
      specialization: "General Physician",
      appointmentDate: "2024-04-05",
      appointmentTime: "09:00-09:30",
      symptoms: ["Fever", "Cough"],
      patientDetails: {
        name: "Karan",
        age: "25",
        gender: "Male"
      },
      status: "completed", // Add status to show feedback button only for completed appointments
      feedback: null
    },
    {
      id: 2,
      hospitalName: "Medicare Center",
      location: "456 Wellness Street, Health Zone",
      doctorName: "Dr. Michael Chen",
      specialization: "Internal Medicine",
      appointmentDate: "2024-04-06",
      appointmentTime: "14:00-14:30",
      symptoms: ["Headache", "Fatigue"],
      patientDetails: {
        name: "Priya",
        age: "28",
        gender: "Female"
      },
      status: "upcoming",
      feedback: null
    }
  ]);

  const handleFeedbackSubmit = (bookingId, feedbackData) => {
    // Here you would typically make an API call to save the feedback
    console.log('Feedback submitted:', { bookingId, feedbackData });
  };

  return (
    <div className="min-h-screen bg-[#0077b6] p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Your Bookings</h1>
        <p className="text-white/80">View and manage your appointments</p>
      </div>

      <div className="space-y-6">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#0077b6] p-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-white">{booking.hospitalName}</h2>
                <p className="text-white/80 text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {booking.location}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                {booking.status === 'completed' && !booking.feedback && (
                  <button
                    onClick={() => {
                      setSelectedBookingId(booking.id);
                      setShowFeedbackModal(true);
                    }}
                    className="px-3 py-1 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
                  >
                    Give Feedback
                  </button>
                )}
                {booking.status === 'upcoming' && (
                  <>
                    <button className="px-3 py-1 bg-white text-[#0077b6] rounded-lg text-sm font-medium hover:bg-white/90 transition-colors">
                      Reschedule
                    </button>
                    <button className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-colors">
                      Cancel
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                {/* Doctor Details */}
                <div>
                  <h3 className="text-gray-500 text-sm font-medium mb-2">Doctor Details</h3>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-800">{booking.doctorName}</p>
                    <p className="text-gray-600">{booking.specialization}</p>
                  </div>
                </div>

                {/* Appointment Time */}
                <div>
                  <h3 className="text-gray-500 text-sm font-medium mb-2">Appointment Time</h3>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-800">
                      {new Date(booking.appointmentDate).toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                    <p className="text-gray-600">{booking.appointmentTime}</p>
                  </div>
                </div>

                {/* Symptoms */}
                <div>
                  <h3 className="text-gray-500 text-sm font-medium mb-2">Symptoms</h3>
                  <div className="flex flex-wrap gap-2">
                    {booking.symptoms.map((symptom, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-[#0077b6] rounded-full text-sm"
                      >
                        {symptom}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Patient Details */}
                <div>
                  <h3 className="text-gray-500 text-sm font-medium mb-2">Patient Details</h3>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-800">{booking.patientDetails.name}</p>
                    <p className="text-gray-600">
                      {booking.patientDetails.age} years • {booking.patientDetails.gender}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Feedback Modal */}
      <FeedbackModal
        isOpen={showFeedbackModal}
        onClose={() => setShowFeedbackModal(false)}
        onSubmit={handleFeedbackSubmit}
        bookingId={selectedBookingId}
      />

      {/* Empty State */}
      {bookings.length === 0 && (
        <div className="bg-white rounded-lg p-8 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h3 className="text-xl font-medium text-gray-800 mb-2">No Bookings Yet</h3>
          <p className="text-gray-600 mb-4">You haven't made any appointments yet.</p>
          <button className="px-4 py-2 bg-[#0077b6] text-white rounded-lg hover:bg-[#005d91] transition-colors">
            Book an Appointment
          </button>
        </div>
      )}
    </div>
  );
};

export default Bookings; 