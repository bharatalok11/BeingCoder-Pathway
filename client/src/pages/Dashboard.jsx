import React from 'react'
import Bed_availability from '../components/Bed_availability'
import Appointment from '../components/Appointment'
import Medicine_availability from '../components/Medicine_availability'
import Ambulance from '../components/Ambulance'
import Track_booking from '../components/Track_booking'

const Dashboard = () => {
    return (
        <div>
            <Appointment />
            <Bed_availability />
            <Medicine_availability />
            <Ambulance />
            <Track_booking />
        </div>
    )
}

export default Dashboard
