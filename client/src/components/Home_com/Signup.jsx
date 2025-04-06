import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = ({ onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    phone: '',
    password: '',
    role: 'patient' // default role
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignIn = () => {
    onClose();
    navigate('/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('/api/v1/user/register', {
        username: formData.username,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        role: formData.role
      });

      if (response.data.success) {
        console.log('Registration successful:', response.data);
        onClose();
        navigate('/login');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#0077B5] to-[#00A3E0] bg-opacity-90 flex items-center justify-center z-50">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 max-w-2xl w-full mx-4 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
          <p className="text-gray-600">Join HealthHive for better healthcare services</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <label htmlFor="username" className="w-32 text-sm font-medium text-gray-700">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077b6] focus:border-transparent"
              placeholder="Choose a username"
              required
            />
          </div>

          <div className="flex items-center">
            <label htmlFor="name" className="w-32 text-sm font-medium text-gray-700">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077b6] focus:border-transparent"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="flex items-center">
            <label htmlFor="email" className="w-32 text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077b6] focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex items-center">
            <label htmlFor="phone" className="w-32 text-sm font-medium text-gray-700">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077b6] focus:border-transparent"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="flex items-center">
            <label htmlFor="password" className="w-32 text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077b6] focus:border-transparent"
              placeholder="Create a password"
              required
            />
          </div>

          <div className="flex items-center">
            <label htmlFor="role" className="w-32 text-sm font-medium text-gray-700">Role</label>
            <div className="flex-1">
              <div className="relative">
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077b6] focus:border-transparent appearance-none bg-white cursor-pointer"
                  required
                >
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 flex items-center mt-2">
            <input
              id="terms"
              type="checkbox"
              className="h-4 w-4 text-[#0077b6] focus:ring-[#0077b6] border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              I agree to the{' '}
              <a href="#" className="text-[#0077b6] hover:text-[#023e8a]">Terms of Service</a>{' '}
              and{' '}
              <a href="#" className="text-[#0077b6] hover:text-[#023e8a]">Privacy Policy</a>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`col-span-2 ${
              loading ? 'bg-gray-400' : 'bg-[#0077b6] hover:bg-[#023e8a]'
            } text-white px-6 py-3 rounded-full font-medium transition duration-300 mt-4 flex items-center justify-center`}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating Account...
              </>
            ) : (
              'Create Account'
            )}
          </button>

          <div className="col-span-2 text-center text-sm text-gray-600 mt-4">
            Already have an account?{' '}
            <button 
              onClick={handleSignIn}
              className="text-[#0077b6] hover:text-[#023e8a] font-medium cursor-pointer border-none bg-transparent p-0"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup; 