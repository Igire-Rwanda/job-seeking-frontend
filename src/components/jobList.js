import React from 'react'
import jobs from '../components/Assets/Jobs.json';
import { link, NavLink } from 'react-router-dom'

const jobList = () => {
  return (
    <div>jobList


<div className='JobsContent2'>

{jobs.map((data) => (

  <div className="jobCard">
    <h4 className="title1"></h4><br />
    <h4 className="h4"></h4>
    <p className="h5"></p>
    <h4 className="Btn1 h5"></h4> <br />
    <div className="siderA">
      
    </div>
    <br />
    <div className="siderB">

      <NavLink to='/ReadMore'><button className="btn3">READ MORE</button></NavLink>
      <div className="IconBtn">
      </div>
    </div>
  </div>

))}
</div><br />
    </div>
  )
}

export default jobList

