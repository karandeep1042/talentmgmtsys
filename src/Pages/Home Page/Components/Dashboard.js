import React from 'react'
import '../../../css/Home Page/Dashboard.css'
import '../../../css/Home Page/DashboardFilter.css'
import UserDashboard from './UserDashboard'
import UserFilter from './UserFilter'
import ClientDashboard from './ClientDashboard'
import CandidateDashboard from './CandidateDashboard'

export default function Dashboard() {
    return (
        <>
            <div className="dashboardmaincontainer">
                <div className="dashboardjobopeningscontainer">
                    <div className="dashboardjobopeningsdiv1">
                        <div className="dashboardjobopeningsdiv1header">
                            <p>Total Users - 0</p>
                        </div>
                    </div>
                    <div className="dashboardjobopeningsdiv2">
                        <div className="dashboardjobopeningsdiv2childcontainer">
                            <div className="dashboardjobopeningsdiv2childcontaineritem">
                                <div className="dashboardjobopeningsdiv2childcontaineritempart1">
                                    <i class="fa-solid fa-toolbox"></i>
                                    <p>0</p>
                                </div>
                                <div className="dashboardjobopeningsdiv2childcontaineritempart2">
                                    <p>Candidates</p>
                                </div>
                            </div>
                            <div className="dashboardjobopeningsdiv2childcontaineritem">
                                <div className="dashboardjobopeningsdiv2childcontaineritempart1">
                                    <i class="fa-solid fa-toolbox"></i>
                                    <p>0</p>
                                </div>
                                <div className="dashboardjobopeningsdiv2childcontaineritempart2">
                                    <p>Approver</p>
                                </div>
                            </div>
                            <div className="dashboardjobopeningsdiv2childcontaineritem">
                                <div className="dashboardjobopeningsdiv2childcontaineritempart1">
                                    <i class="fa-solid fa-toolbox"></i>
                                    <p>0</p>
                                </div>
                                <div className="dashboardjobopeningsdiv2childcontaineritempart2">
                                    <p>Interview Panel Members</p>
                                </div>
                            </div>
                            <div className="dashboardjobopeningsdiv2childcontaineritem">
                                <div className="dashboardjobopeningsdiv2childcontaineritempart1">
                                    <i class="fa-solid fa-toolbox"></i>
                                    <p>0</p>
                                </div>
                                <div className="dashboardjobopeningsdiv2childcontaineritempart2">
                                    <p>HR Manager</p>
                                </div>
                            </div>
                            <div className="dashboardjobopeningsdiv2childcontaineritem">
                                <div className="dashboardjobopeningsdiv2childcontaineritempart1">
                                    <i class="fa-solid fa-toolbox"></i>
                                    <p>0</p>
                                </div>
                                <div className="dashboardjobopeningsdiv2childcontaineritempart2">
                                    <p>Hiring Analyst</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
