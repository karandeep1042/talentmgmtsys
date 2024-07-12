import React from 'react'
import img1 from '../../Resources/profpic.jpg'
import img2 from '../../Resources/profpic2.avif'
import img3 from '../../Resources/profpic3.avif'

export default function ApplicationTable() {
    return (
        <>
            <div className="dashboardmaincontainer">
                <div className="userdashboardtable">
                    <table cellPadding={0} cellSpacing={0}>
                        <thead>
                            <tr className='usertableheading'>
                                <th>Job ID<input type="number" placeholder='Search Client ID' name="" id="" /></th>
                                <th>Client ID<input type="number" placeholder='Search Client ID' name="" id="" /></th>
                                <th>Client Name<input type="text" name="" placeholder="Search Client Name" id="" /></th>
                                <th>Position<input type="number" name="" placeholder="Search Website" id="" /></th>
                                <th>No. of Positions<input type="number" name="" placeholder="Search Website" id="" /></th>
                                <th>Level in Org<input type="number" name="" placeholder="Search Website" id="" /></th>
                                <th>Primary Skill<input type="text" name="" placeholder="Search Website" id="" /></th>
                                <th>Secondary Skill<input type="text" name="" placeholder="Search Website" id="" /></th>
                                <th>Min. Exp. Required<input type="number" name="" placeholder="Search Website" id="" /></th>
                                <th>Exptd. CTC Budget<input type="number" name="" placeholder="Search Primary no." id="" /></th>
                                {/* <th>Job Description<input type="text" name="" placeholder="Search Primary no." id="" /></th> */}
                                <th>Expected Joining Date<input type="date" name="" id="" /></th>
                                <th>Industry Exposure<input type="text" name="" id="" /></th>
                                <th>Technical Selection Parameters<input type="text" name="" id="" /></th>
                                <th>Behavioural Selection Parameters<input type="text" name="" id="" /></th>
                                <th>Created by <input type="text" name="" id="" placeholder='Search Creator' /></th>
                                <th>Created date <input type="date" name="" id="" /></th>
                                <th>Modified by <input type="text" name="" id="" placeholder='Search Modifier' /></th>
                                <th>Modified date <input type="date" name="" id="" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>101</td><td>201</td><td id='tablename'><img src={img1} alt="" /><p>Sonoo</p></td><td className='devdata'><p>Developer</p></td><td>20</td><td>Senior</td><td>Web Dev</td><td>Android Dev</td><td>2 years</td><td>5 Lac</td><td>08/07/23</td><td></td><td></td><td></td><td>Vedant</td><td>18/4/24</td><td>Marie</td><td>24/05/24</td></tr>
                            <tr><td>101</td><td>201</td><td id='tablename'><img src={img2} alt="" /><p>Drake</p></td><td className='hadata'><p>Hiring Analyst</p></td><td>20</td><td>Senior</td><td>Web Dev</td><td>Android Dev</td><td>2 years</td><td>5 Lac</td><td>08/07/23</td><td></td><td></td><td></td><td>Vedant</td><td>18/4/24</td><td>Marie</td><td>24/05/24</td></tr>
                            <tr><td>101</td><td>201</td><td id='tablename'><img src={img3} alt="" /><p>Danny</p></td><td className='hrdata'><p>HR Manager</p></td><td>20</td><td>Senior</td><td>Web Dev</td><td>Android Dev</td><td>2 years</td><td>5 Lac</td><td>08/07/23</td><td></td><td></td><td></td><td>Vedant</td><td>18/4/24</td><td>Marie</td><td>24/05/24</td></tr>
                            <tr><td>101</td><td>201</td><td id='tablename'><img src={img1} alt="" /><p>Daniel</p></td><td className='accountantdata'><p>Accountant</p></td><td>20</td><td>Senior</td><td>Web Dev</td><td>Android Dev</td><td>2 years</td><td>5 Lac</td><td>08/07/23</td><td></td><td></td><td></td><td>Vedant</td><td>18/4/24</td><td>Marie</td><td>24/05/24</td></tr>
                            <tr><td>101</td><td>201</td><td id='tablename'><img src={img1} alt="" /><p>Sonoo</p></td><td className='devdata'><p>Developer</p></td><td>20</td><td>Senior</td><td>Web Dev</td><td>Android Dev</td><td>2 years</td><td>5 Lac</td><td>08/07/23</td><td></td><td></td><td></td><td>Vedant</td><td>18/4/24</td><td>Marie</td><td>24/05/24</td></tr>
                            <tr><td>101</td><td>201</td><td id='tablename'><img src={img2} alt="" /><p>Drake</p></td><td className='hadata'><p>Hiring Analyst</p></td><td>20</td><td>Senior</td><td>Web Dev</td><td>Android Dev</td><td>2 years</td><td>5 Lac</td><td>08/07/23</td><td></td><td></td><td></td><td>Vedant</td><td>18/4/24</td><td>Marie</td><td>24/05/24</td></tr>
                            <tr><td>101</td><td>201</td><td id='tablename'><img src={img3} alt="" /><p>Danny</p></td><td className='hrdata'><p>HR Manager</p></td><td>20</td><td>Senior</td><td>Web Dev</td><td>Android Dev</td><td>2 years</td><td>5 Lac</td><td>08/07/23</td><td></td><td></td><td></td><td>Vedant</td><td>18/4/24</td><td>Marie</td><td>24/05/24</td></tr>
                            <tr><td>101</td><td>201</td><td id='tablename'><img src={img1} alt="" /><p>Daniel</p></td><td className='accountantdata'><p>Accountant</p></td><td>20</td><td>Senior</td><td>Web Dev</td><td>Android Dev</td><td>2 years</td><td>5 Lac</td><td>08/07/23</td><td></td><td></td><td></td><td>Vedant</td><td>18/4/24</td><td>Marie</td><td>24/05/24</td></tr>
                            <tr><td>101</td><td>201</td><td id='tablename'><img src={img1} alt="" /><p>Sonoo</p></td><td className='devdata'><p>Developer</p></td><td>20</td><td>Senior</td><td>Web Dev</td><td>Android Dev</td><td>2 years</td><td>5 Lac</td><td>08/07/23</td><td></td><td></td><td></td><td>Vedant</td><td>18/4/24</td><td>Marie</td><td>24/05/24</td></tr>
                            <tr><td>101</td><td>201</td><td id='tablename'><img src={img2} alt="" /><p>Drake</p></td><td className='hadata'><p>Hiring Analyst</p></td><td>20</td><td>Senior</td><td>Web Dev</td><td>Android Dev</td><td>2 years</td><td>5 Lac</td><td>08/07/23</td><td></td><td></td><td></td><td>Vedant</td><td>18/4/24</td><td>Marie</td><td>24/05/24</td></tr>
                            <tr><td>101</td><td>201</td><td id='tablename'><img src={img3} alt="" /><p>Danny</p></td><td className='hrdata'><p>HR Manager</p></td><td>20</td><td>Senior</td><td>Web Dev</td><td>Android Dev</td><td>2 years</td><td>5 Lac</td><td>08/07/23</td><td></td><td></td><td></td><td>Vedant</td><td>18/4/24</td><td>Marie</td><td>24/05/24</td></tr>
                            <tr><td>101</td><td>201</td><td id='tablename'><img src={img1} alt="" /><p>Daniel</p></td><td className='accountantdata'><p>Accountant</p></td><td>20</td><td>Senior</td><td>Web Dev</td><td>Android Dev</td><td>2 years</td><td>5 Lac</td><td>08/07/23</td><td></td><td></td><td></td><td>Vedant</td><td>18/4/24</td><td>Marie</td><td>24/05/24</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
