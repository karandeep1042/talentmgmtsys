import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import ApplicantDB from './ApplicantDB'
import ApplicantTable from './ApplicationTable'
import ApplicantDB2 from './ApplicantDB2'

export default function ApplicationsPage() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <ApplicantDB2 />
            <ApplicantTable />
        </>
    )
}
