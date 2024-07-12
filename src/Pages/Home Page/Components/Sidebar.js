import React from 'react'
import '../../../css/Home Page/Sidebar.css'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <>
            {/* <div className="sidebarandnavbarcontainer"> */}
            
            <div className="sidebarmaincontainer">
                <div className="sidebardiv1">
                    <div className="sidebarheader">
                        <i className="fa-solid fa-bacon"></i><p>Applicantic</p>
                    </div>
                </div>
                <div className="sidebardiv2">
                    <div className="sidebardiv2options">
                        <Link to="/" className="sidebardiv2option">
                            <i className="fa-solid fa-chart-line"></i>
                            <p>User Listing</p>
                        </Link>
                        <Link to="/client" className="sidebardiv2option">
                            <i className="fa-solid fa-list"></i>
                            <p>Clent Listing</p>
                        </Link>
                        <Link to="/candidate" className="sidebardiv2option">
                            <i className="fa-solid fa-user-tie"></i>
                            <p>Candidate Listing</p>
                        </Link>
                        <Link to="/applications" className="sidebardiv2option">
                            <i className="fa-solid fa-user-tie"></i>
                            <p>Applications Listing</p>
                        </Link>
                        {/* <div className="sidebardiv2option">
                            <i className="fa-solid fa-calendar-days"></i>
                            <p>Interview Schedulers</p>
                        </div>
                        <div className="sidebardiv2option">
                            <i className="fa-solid fa-cubes-stacked"></i>
                            <p>Employee Benefits</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
