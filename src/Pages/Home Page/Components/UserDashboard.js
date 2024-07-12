import React from 'react'
import img1 from '../../../Resources/profpic.jpg'
import img2 from '../../../Resources/profpic2.avif'
import img3 from '../../../Resources/profpic3.avif'

export default function UserDashboard() {
    return (
        <>
            <div className="dashboardmaincontainer">
                <div className="userdashboardtable">
                    <table cellPadding={0} cellSpacing={0}>
                        <thead>
                            <tr className='usertableheading'>
                                <th>User ID<input type="number" placeholder='Search User ID' name="" id="" /></th>
                                <th>Username<input type="text" name="" placeholder="Search Username" id="" /></th>
                                <th>Phone no.<input type="number" name="" placeholder="Search Phone no." id="" /></th>
                                <th>Role<input type="text" name="" placeholder="Search Role" id="" /></th>
                                <th>Created By<input type="text" name="" placeholder="Search Creator" id="" /></th>
                                <th>Creation Date<input type="date" name="" id="" /></th>
                                <th>Modified by<input type="text" name="" id="" placeholder="Search Modifier" /></th>
                                <th>Modification Date<input type="date" name="" id="" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>101</td><td id='tablename'><img src={img1} alt="" /><p>Sonoo</p></td><td>9372867564</td><td className='devdata'><p>Developer</p></td><td>John</td><td>12/12/23</td><td>Lucia</td><td>18/4/24</td></tr>
                            <tr><td>101</td><td id='tablename'><img src={img2} alt="" /><p>Drake</p></td><td>9372867564</td><td className='hadata'><p>Hiring Analyst</p></td><td>John</td><td>12/12/23</td><td>Lucia</td><td>18/4/24</td></tr>
                            <tr><td>101</td><td id='tablename'><img src={img3} alt="" /><p>Danny</p></td><td>9372867564</td><td className='hrdata'><p>HR Manager</p></td><td>John</td><td>12/12/23</td><td>Lucia</td><td>18/4/24</td></tr>
                            <tr><td>101</td><td id='tablename'><img src={img1} alt="" /><p>Sonoo</p></td><td>9372867564</td><td className='devdata'><p>Developer</p></td><td>John</td><td>12/12/23</td><td>Lucia</td><td>18/4/24</td></tr>
                            <tr><td>101</td><td id='tablename'><img src={img2} alt="" /><p>Drake</p></td><td>9372867564</td><td className='hadata'><p>Hiring Analyst</p></td><td>John</td><td>12/12/23</td><td>Lucia</td><td>18/4/24</td></tr>
                            <tr><td>101</td><td id='tablename'><img src={img3} alt="" /><p>Danny</p></td><td>9372867564</td><td className='hrdata'><p>HR Manager</p></td><td>John</td><td>12/12/23</td><td>Lucia</td><td>18/4/24</td></tr>
                            <tr><td>101</td><td id='tablename'><img src={img1} alt="" /><p>Sonoo</p></td><td>9372867564</td><td className='devdata'><p>Developer</p></td><td>John</td><td>12/12/23</td><td>Lucia</td><td>18/4/24</td></tr>
                            <tr><td>101</td><td id='tablename'><img src={img2} alt="" /><p>Drake</p></td><td>9372867564</td><td className='hadata'><p>Hiring Analyst</p></td><td>John</td><td>12/12/23</td><td>Lucia</td><td>18/4/24</td></tr>
                            <tr><td>101</td><td id='tablename'><img src={img3} alt="" /><p>Danny</p></td><td>9372867564</td><td className='hrdata'><p>HR Manager</p></td><td>John</td><td>12/12/23</td><td>Lucia</td><td>18/4/24</td></tr>
                        </tbody>
                    </table>
                </div>
                {/* hello */}
            </div>
        </>
    )
}
