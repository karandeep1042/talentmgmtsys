import React from 'react'

export default function Navbar() {

    const toggleuserform = () => {
        let element = document.querySelector(".adduserformmaincontainer")
        let overlay = document.querySelector(".universaloverlay")
        if (element.style.display == "flex") {
            overlay.style.display = "none";
            element.style.display = "none";
        }
        else {
            overlay.style.display = "flex";
            element.style.display = "flex";
        }
    }

    const toggleclientform = () => {
        let element = document.querySelector(".addclientformmaincontainer")
        let overlay = document.querySelector(".universaloverlay")
        if (element.style.display == "flex") {
            overlay.style.display = "none";
            element.style.display = "none";
        }
        else {
            overlay.style.display = "flex";
            element.style.display = "flex";
        }
    }

    const togglejobopeningform = () => {
        let element = document.querySelector(".addjobopeningformmaincontainer")
        let overlay = document.querySelector(".universaloverlay")
        if (element.style.display == "flex") {
            overlay.style.display = "none";
            element.style.display = "none";
        }
        else {
            overlay.style.display = "flex";
            element.style.display = "flex";
        }
    }

    const togglecandidateform = () => {
        let element = document.querySelector(".addcandidatemaincontainer")
        let overlay = document.querySelector(".universaloverlay")
        if (element.style.display == "flex") {
            overlay.style.display = "none";
            element.style.display = "none";
        }
        else {
            overlay.style.display = "flex";
            element.style.display = "flex";
        }
    }

    return (
        <>
            <div className="universaloverlay">

            </div>
            <div className="navbarmaincontainer">
                <div className="navbardiv1">
                    <div className="navbarheader">
                        <p>Talent Management System</p>
                    </div>
                </div>
                <div className="navbardiv2">
                    <div className="navbaroptions">
                        <div className="searchapplicantcontainer" style={{ visibility: 'hidden' }}>
                            <input type="text" name="" placeholder='Search Applicants...' id="" />
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className="viewcareerpagebtncontainer">
                            <i class="fa-solid fa-link"></i>
                            <p>VIEW CAREER PAGE</p>
                        </div>
                        <div className="anewapplicationbtn">
                            <i class="fa-solid fa-plus"></i>
                            <p>NEW</p>
                            <div className="anewapplicationbtnddmenu">
                                <div className='anewapplicationbtnddmenuitem' onClick={toggleuserform}>Add User</div>
                                <div className='anewapplicationbtnddmenuitem' onClick={toggleclientform}>Add Client</div>
                                <div className='anewapplicationbtnddmenuitem' onClick={togglejobopeningform}>Add Job Opening</div>
                                <div className='anewapplicationbtnddmenuitem' onClick={togglecandidateform}>Add Candidate</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="adduserformmaincontainer">
                    <div className="adduserformdiv1">
                        <div className="adduserformheader">
                            Add User
                        </div>
                    </div>
                    <div className="adduserformdiv2">
                        <div className="adduserformitem">
                            <label>
                                UserName
                            </label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Phone No.
                            </label>
                            <input type="number" maxLength={10} name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Role
                            </label>
                            {/* <input type="number" name="" id="" /> */}
                            <select>
                                <option>Candidate</option>
                                <option>Hiring Manager</option>
                                <option>Intervew Panel Members</option>
                                <option>HR Managers</option>
                                <option>Hiring Analyst</option>
                            </select>
                        </div>
                    </div>
                    <div className="adduserformdiv3">
                        <div className="viewcareerpagebtncontainer" style={{ padding: '1vh 1vw' }}>
                            {/* <i class="fa-solid fa-link"></i> */}
                            <p>Add User</p>
                        </div>
                    </div>
                    <div className="adduserformdiv4">
                        <div className="adduserformclosebtn" onClick={toggleuserform}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                </div>
                <div className="addclientformmaincontainer">
                    <div className="adduserformdiv1">
                        <div className="adduserformheader">
                            Add Client
                        </div>
                    </div>
                    <div className="adduserformdiv2">
                        <div className="adduserformitem">
                            <label>
                                Client Name
                            </label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Website
                            </label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Primary Contact Person
                            </label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Phone No.
                            </label>
                            <input type="number" maxLength={10} name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Secondary Contact Person
                            </label>
                            <input type="text" maxLength={10} name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Phone No.
                            </label>
                            <input type="number" maxLength={10} name="" id="" />
                        </div>
                    </div>
                    <div className="adduserformdiv3">
                        <div className="viewcareerpagebtncontainer" style={{ padding: '1vh 1vw' }}>
                            {/* <i class="fa-solid fa-link"></i> */}
                            <p>Add Client</p>
                        </div>
                    </div>
                    <div className="adduserformdiv4">
                        <div className="adduserformclosebtn" onClick={toggleclientform}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                </div>
                <div className="addjobopeningformmaincontainer">
                    <div className="adduserformdiv1">
                        <div className="adduserformheader">
                            Add Job Opening
                        </div>
                    </div>
                    <div className="adduserformdiv2">
                        <div className="adduserformitem">
                            <label>
                                Client ID
                            </label>
                            <input type="number" name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Client Name
                            </label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Position
                            </label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                No. of Positions
                            </label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Level in the Organization
                            </label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Primary Skill
                            </label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Secondary Skill
                            </label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Min. Exp. Required
                            </label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Exptd. CTC Budget
                            </label>
                            <input type="text" name="" id="" />
                        </div>

                        <div className="adduserformitem">
                            <label>
                                Expected Joining Date
                            </label>
                            <input type="date" name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Industry Exposure
                            </label>
                            <select>
                                <option></option>
                            </select>
                        </div>
                        <div className="adduserformitem">
                            <label >
                                Technical Selection Parameters
                            </label>
                            <select>
                                <option></option>
                            </select>
                        </div>
                        <div className="adduserformitem" style={{ width: '100%' }}>
                            <label>
                                Job Description
                            </label>
                            <textarea style={{ width: '100%' }} rows={15} name="" id="" />
                        </div>
                    </div>
                    <div className="adduserformdiv3">
                        <div className="viewcareerpagebtncontainer" style={{ padding: '1vh 1vw' }}>
                            <p>Add Job Opening</p>
                        </div>
                    </div>
                    <div className="adduserformdiv4">
                        <div className="adduserformclosebtn" onClick={togglejobopeningform}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                </div>
                <div className="addcandidatemaincontainer">
                    <div className="adduserformdiv1">
                        <div className="adduserformheader">
                            Add Candidate
                        </div>
                    </div>
                    <div className="adduserformdiv2">
                        <div className="adduserformitem">
                            <label>
                                Date
                            </label>
                            <input type="date" name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Position
                            </label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Name
                            </label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Gender
                            </label>
                            <select>
                                <option value="">Select...</option>
                                <option value="">Male</option>
                                <option value="">Female</option>
                                <option value="">Prefer not to say</option>
                            </select>
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Phone no.
                            </label>
                            <input type="number" name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Email
                            </label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Base Location
                            </label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Present Working Location
                            </label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Current CTC
                            </label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Expected CTC
                            </label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Total Experience
                            </label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Relevant Experience
                            </label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Current Organization
                            </label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Notice Period
                            </label>
                            <select name="" id="">
                                <option value="">Select...</option>
                                <option value="">15 Days</option>
                                <option value="">30 Days</option>
                                <option value="">45 Days</option>
                                <option value="">60 Days</option>
                                <option value="">90 Days</option>
                            </select>
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Primary Skill
                            </label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="adduserformitem">
                            <label>
                                Secondary Skill
                            </label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="adduserformitem" style={{ width: '46%' }}>
                            <label>
                                Upload Resume
                            </label>
                            <input style={{ width: '100%' }} type="file" name="" id="" />
                        </div>
                        <div className="adduserformitem" style={{ width: '48%' }}>
                            <label>
                                Resume Source
                            </label>
                            <input  type="text" name="" id="" style={{width:'96%'}}/>
                        </div>
                    </div>
                    <div className="adduserformdiv3">
                        <div className="viewcareerpagebtncontainer" style={{ padding: '1vh 1vw' }}>
                            <p>Add Candidate</p>
                        </div>
                    </div>
                    <div className="adduserformdiv4">
                        <div className="adduserformclosebtn" onClick={togglecandidateform}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}