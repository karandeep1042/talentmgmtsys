import React from 'react'

export default function UserFilter() {
    return (
        <>
            <div className="userdashboardfiltermaincontainer">
                <div className="userdashboardfilterdiv1">
                    <div className="userdashboardfilterheader">
                        User Filter
                    </div>
                </div>
                <div className="userdashboardfilterdiv2">
                    <div className="userdashboardfilteritem">
                        <div className="userdashboardfilterheading">
                            <p>Role</p><i className="fa-solid fa-angle-down"></i>
                        </div>
                        <div className="userdashboardfilteroptions">
                            <div className="userdashboardfilteroption">
                                <input type="checkbox" name="" id="" /> <p>Candidate</p>
                            </div>
                            <div className="userdashboardfilteroption">
                                <input type="checkbox" name="" id="" /> <p>Hiring Manager</p>
                            </div>
                            <div className="userdashboardfilteroption">
                                <input type="checkbox" name="" id="" /> <p>Interview Panel Manager</p>
                            </div>
                            <div className="userdashboardfilteroption">
                                <input type="checkbox" name="" id="" /> <p>HR Manager</p>
                            </div>
                            <div className="userdashboardfilteroption">
                                <input type="checkbox" name="" id="" /> <p>Hiring Analyst</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="userdashboardfilterdiv3">
                    <div className="viewcareerpagebtncontainer" style={{ padding: '1vh 1vw' }}>
                        <p>Apply filters</p>
                    </div>
                </div>
            </div>
        </>
    )
}
