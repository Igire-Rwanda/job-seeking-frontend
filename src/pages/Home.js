import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import bgImg from '../img/picc.png'
import icon from '../img/user.png'
import JobCards from '../components/jobCard'
import JobsList from './JobsList'
import jobs from '../components/Assets/Jobs.json';
import { link, NavLink } from 'react-router-dom'
import '../Views/jobs2.css'


const Home = ({ onClose }) => {

  const [job, setJob] = useState('')

  const getJob = (k) => {
    setJob(k.target.value)
  }

  return (

    <div>
      {/* <Navbar/> */}
      <div >
        <img className='max-w-md h-96 mr-12' src={bgImg} />
      </div>
      <div className='home'><div className='pt-20 pl-20 font-bold	text-2xl	'>

        It's Easy To Find
        <div>Your <span className='text-teal-500' >Dream Job</span></div>
      </div>
        <div className='pl-20 pt-3'>Explore Thausand of Jobs in one place </div>
        <div className='pl-20'>and get a job of your dream</div>


        <div className='bg-white max-w-xl	ml-20 h-20 mt-5 rounded-md pl-8 py-4 flex flex-row '>
          {/* <label>Select Job Type</label> */}
          <select onChange={getJob}>
            <option selected value='Select job' className='bg-slate-300'>Select job</option>
            <option value='Web Developer' className='bg-slate-300'>Web Developer</option>
            <option value='Ui/UX Designer' className='bg-slate-300'>Ui/UX Designer</option>
            <option value='Fullstack Developer' className='bg-slate-300'>Fullstack Developer</option>

          </select>
          <span className='flex'> {job}</span>

          <button className='btn'>Find Jobs</button>
        </div>


        <div className='flex flex-row space-x-40'>
          <div className='bg-yellow-400 w-24	ml-20 h-24 mt-20 mb-20 rounded pl-8 py-4'>

            <h5 className='font-bold text-2xl ml-5'>20k+</h5>
            <h6 className='ml-5'>Job Vacancy</h6></div>

          <div className='bg-sky-500 w-24	ml-20 h-24 mt-20 mb-20 rounded pl-8 py-4'>

            <h5 className='font-bold text-2xl ml-5'>50k+</h5>
            <h6 className='ml-5'>People got hired</h6> 

          </div>

          <div className='bg-orange-600 w-24	ml-20 h-24 mt-20 mb-20 rounded pl-8 py-4'>
            <h5 className='font-bold text-2xl ml-5'>2K+</h5>
            <h6 className='ml-5'>Companies</h6></div>
          {/* <div className='icon2'>
            <img className='w-80 mb-10' src={icon} />

            <h5 className='font-bold text-2xl'>50k+</h5>
            <h6>People got hired</h6>

          </div> */}
          {/* <div className='icon3'>


          </div> */}
        </div>
      </div>
      {/* <EmployerDashboard /> */}

      <div className='JobsContent2'>

        {jobs.map((data) => (

          <div className="jobCard">
            {/* <p className="new">New</p> <br /> */}
            <h4 className="title1">{data.Title}</h4><br />
            <h4 className="h4">{data.Company}</h4>
            <p className="h5">{data.Location}</p>
            <h4 className="Btn1 h5">{data.Timeline}</h4> <br />
            <div className="siderA">
              {data.Description}
            </div>
            <br />
            <div className="siderB">

              <NavLink to='/ReadMore' onClick={onClose} ><button className="btn3">READ MORE</button></NavLink>
              <div className="IconBtn">
                {/* <FavoriteBorderIcon /> */}
              </div>
            </div>
          </div>

        ))}
      </div><br />

    </div>

  )
}

export default Home

