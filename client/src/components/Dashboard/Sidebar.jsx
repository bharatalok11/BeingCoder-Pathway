import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState('appointment'); // Default to appointment being active
    const [showProfilePopup, setShowProfilePopup] = useState(false);
    const [profileData, setProfileData] = useState({
        name: 'Karan',
        age: '25',
        gender: 'Male',
        image: 'https://ui-avatars.com/api/?name=Karan&background=0077b6&color=fff'
    });

    const menuItems = [
        {
            id: 'dashboard',
            name: 'Dashboard',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
            ),
            path: '/dashboard'
        },
        {
            id: 'appointment',
            name: 'Appointment',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            path: '/appointment'
        },
        {
            id: 'beds',
            name: 'Beds',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v12c0 1.1.9 2 2 2h14a2 2 0 002-2V7M3 7l3-3h12l3 3M3 7h18M12 3v14m0 0H7m5 0h5" />
                </svg>
            ),
            path: '/beds'
        },
        {
            id: 'medicine',
            name: 'Medicine',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
            path: '/medicine'
        },
        {
            id: 'ambulance',
            name: 'Ambulance',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            path: '/ambulance'
        },
        {
            id: 'bookings',
            name: 'Bookings',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            ),
            path: '/bookings'
        }
    ];

    const handleProfileEdit = (field, value) => {
        setProfileData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <div className="flex flex-col h-full bg-[#0077b6] text-white">
            {/* Logo */}
            <div className="p-6 border-b border-white/20">
                <h1 className="text-2xl font-bold">HealthHive</h1>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 p-4 space-y-2">
                {menuItems.map((item) => (
                    <Link
                        key={item.id}
                        to={item.path}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                            activeItem === item.id
                                ? 'bg-white text-[#0077b6]'
                                : 'hover:bg-white/10'
                        }`}
                        onClick={() => setActiveItem(item.id)}
                    >
                        <span className={activeItem === item.id ? 'text-[#0077b6]' : 'text-white'}>
                            {item.icon}
                        </span>
                        <span className="font-medium">{item.name}</span>
                    </Link>
                ))}
            </nav>

            {/* Profile Section */}
            <div className="relative p-4 border-t border-white/20">
                <div 
                    className="flex items-center justify-between cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-all"
                    onClick={() => setShowProfilePopup(!showProfilePopup)}
                >
                    <div className="flex items-center space-x-3">
                        <img
                            src={profileData.image}
                            alt="Profile"
                            className="h-10 w-10 rounded-full border-2 border-white/50"
                        />
                        <span className="font-medium">{profileData.name}</span>
                    </div>
                    <button className="p-1.5 rounded-full hover:bg-white/10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>

                {/* Profile Popup */}
                {showProfilePopup && (
                    <div className="absolute bottom-full left-0 w-full p-4 mb-2 bg-white rounded-lg shadow-lg text-gray-800 animate-fade-in">
                        <div className="flex flex-col items-center space-y-4">
                            <div className="relative group">
                                <img
                                    src={profileData.image}
                                    alt="Profile"
                                    className="h-20 w-20 rounded-full border-4 border-[#0077b6]"
                                />
                                <button className="absolute bottom-0 right-0 p-1.5 bg-[#0077b6] rounded-full text-white hover:bg-[#005d91] transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="w-full space-y-3">
                                <div>
                                    <label className="text-sm font-medium text-gray-600">Name</label>
                                    <input
                                        type="text"
                                        value={profileData.name}
                                        onChange={(e) => handleProfileEdit('name', e.target.value)}
                                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6] focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-600">Age</label>
                                    <input
                                        type="number"
                                        value={profileData.age}
                                        onChange={(e) => handleProfileEdit('age', e.target.value)}
                                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6] focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-600">Gender</label>
                                    <select
                                        value={profileData.gender}
                                        onChange={(e) => handleProfileEdit('gender', e.target.value)}
                                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6] focus:border-transparent"
                                    >
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex space-x-3 w-full">
                                <button
                                    onClick={() => setShowProfilePopup(false)}
                                    className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => setShowProfilePopup(false)}
                                    className="flex-1 px-4 py-2 bg-[#0077b6] text-white rounded-lg hover:bg-[#005d91] transition-colors"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Logout Button */}
                <button
                    onClick={() => {/* Add logout logic */}}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                </button>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.2s ease-out;
                }
            `}</style>
        </div>
    );
};

export default Sidebar; 