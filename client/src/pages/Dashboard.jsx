import React from 'react'
import Bed_availability from '../components/Bed_availability'
import Appointment from '../components/Appointment'
import Medicine_availability from '../components/Medicine_availability'
import Ambulance from '../components/Ambulance'
import Track_booking from '../components/Track_booking'

const Dashboard = () => {
    return (
        <div>
            <div id="content" className='flex h-screen overflow-hidden'>
                <div id="sidebar" className="flex flex-col h-screen w-64 bg-white dark:bg-gray-800 shadow-lg p-4">
                    <div className="mb-6">
                        <a href="/">
                            <img src="logo.png" alt="Website Logo" className="h-10 mx-auto" />
                        </a>
                    </div>
                </div>


            </div>
            <Appointment />
            <Bed_availability />
            <Medicine_availability />
            <Ambulance />
            <Track_booking />
        </div>
    )
}

export default Dashboard
