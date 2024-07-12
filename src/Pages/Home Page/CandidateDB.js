import React from 'react'

export default function CandidateDB() {
    return (
        <>
            <div className="dashboardmaincontainer">
                <div className="dashboardjobopeningscontainer">
                    <div className="dashboardjobopeningsdiv1">
                        <div className="dashboardjobopeningsdiv1header">
                            <p>Total Candidates - 0</p>
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
                                    <p>Active Candidates</p>
                                </div>
                            </div>
                            <div className="dashboardjobopeningsdiv2childcontaineritem">
                                <div className="dashboardjobopeningsdiv2childcontaineritempart1">
                                    <i class="fa-solid fa-toolbox"></i>
                                    <p>0</p>
                                </div>
                                <div className="dashboardjobopeningsdiv2childcontaineritempart2">
                                    <p>Previously Considered</p>
                                </div>
                            </div>
                            <div className="dashboardjobopeningsdiv2childcontaineritem">
                                <div className="dashboardjobopeningsdiv2childcontaineritempart1">
                                    <i class="fa-solid fa-toolbox"></i>
                                    <p>0</p>
                                </div>
                                <div className="dashboardjobopeningsdiv2childcontaineritempart2">
                                    <p>Prospective Candidates</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}