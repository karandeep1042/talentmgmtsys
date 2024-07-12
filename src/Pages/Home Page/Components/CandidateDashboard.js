import React from 'react'
import img1 from '../../../Resources/profpic.jpg'
import img2 from '../../../Resources/profpic2.avif'
import img3 from '../../../Resources/profpic3.avif'

export default function CandidateDashboard() {
    return (
        <>
            <div className="dashboardmaincontainer">
                <div className="userdashboardtable">
                    <table cellPadding={0} cellSpacing={0}>
                        <thead>
                            <tr className='usertableheading'>
                                <th>Position<input type="text" placeholder='Search Position' name="" id="" /></th>
                                <th>Name<input type="text" placeholder='Search Name' name="" id="" /></th>
                                <th>Gender<select name="" placeholder="Search Username" id="" ><option>Male</option><option value="">Female</option></select></th>
                                <th>Phone no.<input type="number" name="" placeholder="Search Phone no." id="" /></th>
                                <th>Email<input type="text" name="" placeholder="Search email" id="" /></th>
                                <th>Base Location<input type="text" placeholder="Search Base Location" name="" id="" /></th>
                                <th>Current Office <input type="text" placeholder="Search Current Office" name="" id="" /></th>
                                <th>Current CTC <input type="number" name="" placeholder="Search Current CTC" id="" /></th>
                                <th>Exptd CTC <input type="number" name="" placeholder="Search Expected CTC" id="" /></th>
                                <th>Total Exp. <input type="number" name="" id="" placeholder="Search total experience" /></th>
                                <th>Relevant Exp. <input type="number" name="" id="" placeholder="Search relevant experience" /></th>
                                <th><p>Current Organization</p><input type="text" name="" id="" placeholder="Search Current Organization" /></th>
                                <th>Notice Period<input type="text" name="" id="" placeholder="Search notice period" /></th>
                                <th>Primary Skills<input type="text" name="" id="" placeholder="Search primary skills" /></th>
                                <th>Secondary Skills<input type="text" name="" id="" placeholder="Search secondary skills" /></th>
                                <th>Project Details<input type="text" name="" id="" placeholder="Search project details" /></th>
                                <th>Created by<input type="text" name="" id="" placeholder="Search creator" /></th>
                                <th>Creation Date<input type="date" name="" id="" /></th>
                                <th>Modified by<input type="text" name="" id="" placeholder="Search Modifier" /></th>
                                <th>Modification date<input type="date" name="" id="" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td className='devdata'><p>Developer</p></td><td id='tablename'><img src={img1} alt="" /><p>Sonoo</p></td><td>Male</td><td>9273645342</td><td>user@gmail.com</td><td>Mumbai</td><td>Mumbai</td><td>5Lac</td><td>7Lac</td><td>5Years</td><td>6Years</td><td>TCS</td><td>6 Months</td><td>Java</td><td>Web Dev</td><td>Management System</td><td>John</td><td>05/06/24</td><td>Wick</td><td>09/09/24</td></tr>
                            <tr><td className='hadata'><p>Hiring Analyst</p></td><td id='tablename'><img src={img2} alt="" /><p>Drake</p></td><td>Male</td><td>9273645342</td><td>user@gmail.com</td><td>Mumbai</td><td>Mumbai</td><td>5Lac</td><td>7Lac</td><td>5Years</td><td>6Years</td><td>TCS</td><td>6 Months</td><td>Java</td><td>Web Dev</td><td>Management System</td><td>John</td><td>05/06/24</td><td>Wick</td><td>09/09/24</td></tr>
                            <tr><td className='accountantdata'><p>Accountant</p></td><td id='tablename'><img src={img3} alt="" /><p>Daniel</p></td><td>Male</td><td>9273645342</td><td>user@gmail.com</td><td>Mumbai</td><td>Mumbai</td><td>5Lac</td><td>7Lac</td><td>5Years</td><td>6Years</td><td>TCS</td><td>6 Months</td><td>Java</td><td>Web Dev</td><td>Management System</td><td>John</td><td>05/06/24</td><td>Wick</td><td>09/09/24</td></tr>
                            <tr><td className='devdata'><p>Developer</p></td><td id='tablename'><img src={img1} alt="" /><p>Sonoo</p></td><td>Male</td><td>9273645342</td><td>user@gmail.com</td><td>Mumbai</td><td>Mumbai</td><td>5Lac</td><td>7Lac</td><td>5Years</td><td>6Years</td><td>TCS</td><td>6 Months</td><td>Java</td><td>Web Dev</td><td>Management System</td><td>John</td><td>05/06/24</td><td>Wick</td><td>09/09/24</td></tr>
                            <tr><td className='hadata'><p>Hiring Analyst</p></td><td id='tablename'><img src={img2} alt="" /><p>Drake</p></td><td>Male</td><td>9273645342</td><td>user@gmail.com</td><td>Mumbai</td><td>Mumbai</td><td>5Lac</td><td>7Lac</td><td>5Years</td><td>6Years</td><td>TCS</td><td>6 Months</td><td>Java</td><td>Web Dev</td><td>Management System</td><td>John</td><td>05/06/24</td><td>Wick</td><td>09/09/24</td></tr>
                            <tr><td className='accountantdata'><p>Accountant</p></td><td id='tablename'><img src={img3} alt="" /><p>Daniel</p></td><td>Male</td><td>9273645342</td><td>user@gmail.com</td><td>Mumbai</td><td>Mumbai</td><td>5Lac</td><td>7Lac</td><td>5Years</td><td>6Years</td><td>TCS</td><td>6 Months</td><td>Java</td><td>Web Dev</td><td>Management System</td><td>John</td><td>05/06/24</td><td>Wick</td><td>09/09/24</td></tr>
                            <tr><td className='devdata'><p>Developer</p></td><td id='tablename'><img src={img1} alt="" /><p>Sonoo</p></td><td>Male</td><td>9273645342</td><td>user@gmail.com</td><td>Mumbai</td><td>Mumbai</td><td>5Lac</td><td>7Lac</td><td>5Years</td><td>6Years</td><td>TCS</td><td>6 Months</td><td>Java</td><td>Web Dev</td><td>Management System</td><td>John</td><td>05/06/24</td><td>Wick</td><td>09/09/24</td></tr>
                            <tr><td className='hadata'><p>Hiring Analyst</p></td><td id='tablename'><img src={img2} alt="" /><p>Drake</p></td><td>Male</td><td>9273645342</td><td>user@gmail.com</td><td>Mumbai</td><td>Mumbai</td><td>5Lac</td><td>7Lac</td><td>5Years</td><td>6Years</td><td>TCS</td><td>6 Months</td><td>Java</td><td>Web Dev</td><td>Management System</td><td>John</td><td>05/06/24</td><td>Wick</td><td>09/09/24</td></tr>
                            <tr><td className='accountantdata'><p>Accountant</p></td><td id='tablename'><img src={img3} alt="" /><p>Daniel</p></td><td>Male</td><td>9273645342</td><td>user@gmail.com</td><td>Mumbai</td><td>Mumbai</td><td>5Lac</td><td>7Lac</td><td>5Years</td><td>6Years</td><td>TCS</td><td>6 Months</td><td>Java</td><td>Web Dev</td><td>Management System</td><td>John</td><td>05/06/24</td><td>Wick</td><td>09/09/24</td></tr>
                            <tr><td className='devdata'><p>Developer</p></td><td id='tablename'><img src={img1} alt="" /><p>Sonoo</p></td><td>Male</td><td>9273645342</td><td>user@gmail.com</td><td>Mumbai</td><td>Mumbai</td><td>5Lac</td><td>7Lac</td><td>5Years</td><td>6Years</td><td>TCS</td><td>6 Months</td><td>Java</td><td>Web Dev</td><td>Management System</td><td>John</td><td>05/06/24</td><td>Wick</td><td>09/09/24</td></tr>
                            <tr><td className='hadata'><p>Hiring Analyst</p></td><td id='tablename'><img src={img2} alt="" /><p>Drake</p></td><td>Male</td><td>9273645342</td><td>user@gmail.com</td><td>Mumbai</td><td>Mumbai</td><td>5Lac</td><td>7Lac</td><td>5Years</td><td>6Years</td><td>TCS</td><td>6 Months</td><td>Java</td><td>Web Dev</td><td>Management System</td><td>John</td><td>05/06/24</td><td>Wick</td><td>09/09/24</td></tr>
                            <tr><td className='accountantdata'><p>Accountant</p></td><td id='tablename'><img src={img3} alt="" /><p>Daniel</p></td><td>Male</td><td>9273645342</td><td>user@gmail.com</td><td>Mumbai</td><td>Mumbai</td><td>5Lac</td><td>7Lac</td><td>5Years</td><td>6Years</td><td>TCS</td><td>6 Months</td><td>Java</td><td>Web Dev</td><td>Management System</td><td>John</td><td>05/06/24</td><td>Wick</td><td>09/09/24</td></tr>
                            <tr><td className='devdata'><p>Developer</p></td><td id='tablename'><img src={img1} alt="" /><p>Sonoo</p></td><td>Male</td><td>9273645342</td><td>user@gmail.com</td><td>Mumbai</td><td>Mumbai</td><td>5Lac</td><td>7Lac</td><td>5Years</td><td>6Years</td><td>TCS</td><td>6 Months</td><td>Java</td><td>Web Dev</td><td>Management System</td><td>John</td><td>05/06/24</td><td>Wick</td><td>09/09/24</td></tr>
                            <tr><td className='hadata'><p>Hiring Analyst</p></td><td id='tablename'><img src={img2} alt="" /><p>Drake</p></td><td>Male</td><td>9273645342</td><td>user@gmail.com</td><td>Mumbai</td><td>Mumbai</td><td>5Lac</td><td>7Lac</td><td>5Years</td><td>6Years</td><td>TCS</td><td>6 Months</td><td>Java</td><td>Web Dev</td><td>Management System</td><td>John</td><td>05/06/24</td><td>Wick</td><td>09/09/24</td></tr>
                            <tr><td className='accountantdata'><p>Accountant</p></td><td id='tablename'><img src={img3} alt="" /><p>Danny</p></td><td>Male</td><td>9273645342</td><td>user@gmail.com</td><td>Mumbai</td><td>Mumbai</td><td>5Lac</td><td>7Lac</td><td>5Years</td><td>6Years</td><td>TCS</td><td>6 Months</td><td>Java</td><td>Web Dev</td><td>Management System</td><td>John</td><td>05/06/24</td><td>Wick</td><td>09/09/24</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
