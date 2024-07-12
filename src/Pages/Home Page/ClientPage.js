import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import ClientDashboard from './Components/ClientDashboard'
import ClientDB from './ClientDB'
import ApplicantDB from './ApplicantDB'

export default function ClientPage() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <ClientDB />
            <ApplicantDB />
            <ClientDashboard />
        </>
    )
}
