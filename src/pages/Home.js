import React from 'react'
import Navbar from '../components/Navbar'
import { IoMdArrowDropdown } from "react-icons/io";


const Home = () => {
  return (
    
    <div>
      <Navbar/>
      
<div className='pt-20 pl-20 font-bold	text-2xl	'>
It's Easy To Find 
 <div>Your <span className='text-teal-500' >Dream Job</span></div> 
</div>
<div className='pl-20 pt-3'>Explore Thausand of Jobs in one place </div>
<div className='pl-20'>and get a job of your dream</div>

<div className='bg-white max-w-md  ml-20 h-20 mt-5 rounded-md pl-8 py-4 flex flex-row '>
  <div className='pr-5 '>  <h1 className='font-bold'>Select Job Type</h1>
  <h1 className='font-extralight '>Web developer</h1></div><IoMdArrowDropdown />
<div className='pl-2 border-lb-2'>
<h1 className='font-bold'>Location</h1>
  <h1 className='font-extralight	'>Kigali</h1>
</div><IoMdArrowDropdown/>
<button className='btn'>Find Jobs</button>

</div>
{/* <RiBriefcase4Line/>
<FaUserTie/>
<FaRegHospital/> */}
    </div>
    
  )
}

export default Home