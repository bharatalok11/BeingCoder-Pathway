import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './../components/Dashboard_com/Sidebar';
import Appointment from './../components/Dashboard_com/Appointment';
import Bookings from './../components/Dashboard_com/Bookings';

const ChatBot = () => {
    return (
        <div className="h-full bg-[#0077b6] p-4">
            <h2 className="text-xl font-bold text-white mb-6">CareBot</h2>
            <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-white/90">Hello! 👋 I'm CareBot, your healthcare assistant. How can I help you today?</p>
                </div>
                {/* Chat messages will go here */}
                <div className="mt-auto">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            className="w-full bg-white/10 text-white placeholder-white/50 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-white/30"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Dashboard = () => {
    return (
        <div className="flex h-screen bg-[#0077b6]">
            {/* Sidebar - 20% */}
            <div className="w-[20%] border-r border-white/20">
                <Sidebar />
            </div>

            {/* Main Content - 50% */}
            <div className="w-[50%] border-r border-white/20 overflow-auto">
                <Routes>
                    <Route path="/appointment" element={<Appointment />} />
                    <Route path="/bookings" element={<Bookings />} />
                    <Route path="/" element={<Navigate to="appointment" replace />} />
                </Routes>
            </div>

            {/* Right Panel (ChatBot) - 30% */}
            <div className="w-[30%] overflow-auto">
                <ChatBot />
            </div>
        </div>
    );
};

export default Dashboard;
