import React, { useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import bgImg from '../img/picc.png'
import icon from '../img/user.png'
import JobCards from '../components/jobCard'
import JobsList from './JobsList'
import jobs from '../components/Assets/Jobs.json';
import { link, NavLink } from 'react-router-dom'
import '../Views/jobs2.css'
import {useDispatch, useSelector} from "react-redux";
import { getAllJobAction } from "../redux/job/action";



const Home = ({ onClose }) => {
  const dispatch = useDispatch();
  const {jobs,isFetching} = useSelector((state)=> state.job);

useEffect(() => {
  getAllJobAction()(dispatch);
}, []);
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

          <NavLink to='/jobseeker'><button className='btn'>Find Jobs</button></NavLink>
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
        </div>
      </div>
      {jobs.map((jobu
          )=>(
        <div className="bg-white flex flex-col max-w-xl	ml-20 h-15 rounded-md pl-8 py-4 flex flex-row mb-5 p-20 ">
         <h2>{jobu.jobTitle}</h2> 
        <h3>{jobu.companyName}</h3> 
        <h3> |{jobu. emplomentMode}</h3>
        <h3> | Deadline: {jobu.jobDeadLine}</h3>
        <p className=''>{jobu.jobDescription}</p>
 {/* <h2>SENIOR DEVELOPER</h2>
          <h3 className="text-s">Andela</h3>
          <h3 className="text-s"> | Full Time</h3>
          <h3 className="text-s"> | Deadline:2022-12-31</h3> */}
<button className="bg-sky-500	rounded-md py-2 px-6 mt-8 w-36 text-white">Read More</button>

        </div>
                 
                  
                  ))}
      {/* <div className="bg-white flex flex-col max-w-xl	ml-20 h-15 rounded-md pl-8 py-4 flex flex-row mb-5 p-20 ">
          <h2>IT CONSLTANT </h2>
          <h3 className="text-s">BK Thech</h3>
          <h3 className="text-s"> | Remote</h3>

          <h3 className="text-s"> | Full Time</h3>
          <h3 className="mt-3"> It's not the secret that joLinker relies on technology to deliver million of packages everyday to it's customer.Everyday at a low cost.</h3>


<button className="bg-sky-500	rounded-md py-2 px-6 mt-8 w-36 text-white">Read More</button>
        </div> */}
      {/* <div className='JobsContent2'>

        {jobs.map((data) => (

          <div className="jobCard">
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
              </div>
            </div>
          </div>

        ))}
      </div><br /> */}

    </div>

  )
}

export default Home

