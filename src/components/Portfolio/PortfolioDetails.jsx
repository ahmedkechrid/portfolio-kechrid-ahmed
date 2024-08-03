import React from 'react'
import IMGHome from '../../assests/portfolio-react-home.png'
import UserList from '../../assests/user-list.png'
import NextTool from '../../assests/next-tool.png'
import'./PortfolioDetails.css'
import { Link } from 'react-router-dom'
import HomeProd from '../../assests/product-home.png'
import MachineProd from '../../assests/machins info.png'
import Filtration from '../../assests/filtration.png'



const PortfolioDetails = () => {
  return (
    <div className='container-view-portfolio'>
        <Link to='/' className='btn'> back</Link>
        <article className="view-portfolio__container">
            <h2>Admin Home Page</h2>
        <div className="project__container-img">
            <img src={IMGHome} alt='home page' />
        </div>
        <p>After the administrator logs in, they will be redirected to the main interface where they can view all statistical information.
         This allows them to address their needs without having to visit the work area. They can review statistical results to visualize current data and make informed decisions.
         The administrator can track production trends, including total production and rejection rates on the left chart, and overall equipment effectiveness (OEE) on the right chart.
         Additionally, they can see an overview of the number of tools, machines, users, and alerts within the system.</p>
        </article>

        <article className="view-portfolio__container">
        <h2>Account managment interface</h2>

        <div className="project__container-img">
            <img src={UserList} alt='user Page'/>
        </div>
        <p>In this interface, shown by a button on the right bar, this interface allows the administrator to manage user accounts. 
            When managing user accounts, it is crucial to integrate the information into the database. 
            This task is performed by the administrator, who must fill in all user details using the dedicated interface.
            </p>

        </article>

        <article className="view-portfolio__container">
        <h2>Next Tool Interface</h2>

        <div className="project__container-img">
            <img src={NextTool} alt='Next Tool' />
        </div>
        <p>Once logged in, the administrator can access the NextTool interface  to manipulate it. 
            In this scenario, the administrator will select the desired file in a
            specific format and download it to prepare schedules for users based on each change.
        </p>
        </article>

        <article className="view-portfolio__container">
        <h2>Production Home Interface</h2>
        <div className="project__container-img">
            <img src={HomeProd} alt='home prod' />
        </div>
        <p>After authentication, the user will be redirected to the main interface , 
            where they can view all the machines and their progress statuses.
             This allows them to address their needs accordingly.</p>
        </article>
        <article className="view-portfolio__container">
        <h2>Machins Interface</h2>
        <div className="project__container-img">
            <img src={MachineProd} alt='machines prod' />
        </div>
        <p>The user can track the progress of all machines by clicking on "Machines" in the top navigation bar,
             making it easier to view current data and quickly address any issues. 
             The administrator can monitor production progress by analyzing each machine's 
             progress rate and identifying the cause of any stoppages.
             </p>
        </article>
        <article className="view-portfolio__container">
        <h2>Machins Interface</h2>
        <div className="project__container-img">
            <img src={Filtration} alt='Filtration' />
        </div>
        <p>By using a "View Change" button located at the center of the page shown in Next Tool Interface, this interface  allows users
             to filter all NextTool files, 
            enabling a comparison between changes.
             Users can easily review the "Old Version" and "New Version" columns to detect changes.
             </p>
        </article>
    </div>
  )
}

export default PortfolioDetails