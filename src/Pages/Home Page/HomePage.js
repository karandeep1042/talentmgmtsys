import React from 'react'
import Sidebar from './Components/Sidebar'
import Dashboard from './Components/Dashboard'
import Navbar from './Components/Navbar'
import ClientDashboard from './Components/ClientDashboard'
import UserDashboard from './Components/UserDashboard'
import ApplicantDB from './ApplicantDB'

export default function HomePage() {
    return (
        <>
            <Navbar />
            <Dashboard />
            <ApplicantDB />
            <Sidebar />
            <UserDashboard />
        </>
    )
}
