import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import CandidateDashboard from './Components/CandidateDashboard'
import CandidateDB from './CandidateDB'
import ApplicantDB from './ApplicantDB'

export default function CandidatePage() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <CandidateDB />
            <ApplicantDB />
            <CandidateDashboard />
        </>
    )
}
