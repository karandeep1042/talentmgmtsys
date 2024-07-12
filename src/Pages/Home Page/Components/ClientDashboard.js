import React from 'react'
import img1 from '../../../Resources/profpic.jpg'
import img2 from '../../../Resources/profpic2.avif'
import img3 from '../../../Resources/profpic3.avif'

export default function ClientDashboard() {
    return (
        <>
            <div className="dashboardmaincontainer">
                <div className="userdashboardtable">
                    <table cellPadding={0} cellSpacing={0}>
                        <thead>
                            <tr className='usertableheading'>
                                <th>Client ID<input type="number" placeholder='Search Client ID' name="" id="" /></th>
                                <th>Client Name<input type="text" name="" placeholder="Search Client Name" id="" /></th>
                                <th>Website<input type="number" name="" placeholder="Search Website" id="" /></th>
                                <th>Primary Contact<input type="number" name="" placeholder="Search Primary no." id="" /></th>
                                <th>Secondary Contact<input type="number" placeholder="Search Secondary no." name="" id="" /></th>
                                <th>Created by <input type="text" name="" id="" placeholder='Search Creator' /></th>
                                <th>Created date <input type="date" name="" id="" /></th>
                                <th>Modified by <input type="text" name="" id="" placeholder='Search Modifier' /></th>
                                <th>Modified date <input type="date" name="" id="" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>101</td><td id='tablename'><img src={img1} alt="" /><p>Sonoo</p></td><td>Web 1</td><td>9273645342</td><td>9674837264</td><td>John</td><td>08/07/23</td><td>Allen</td><td>18/4/24</td></tr>
                            <tr><td>101</td><td id='tablename'><img src={img2} alt="" /><p>Drake</p></td><td>Web 1</td><td>9273645342</td><td>9674837264</td><td>John</td><td>08/07/23</td><td>Allen</td><td>18/4/24</td></tr>
                            <tr><td>101</td><td id='tablename'><img src={img3} alt="" /><p>Danny</p></td><td>Web 1</td><td>9273645342</td><td>9674837264</td><td>John</td><td>08/07/23</td><td>Allen</td><td>18/4/24</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
