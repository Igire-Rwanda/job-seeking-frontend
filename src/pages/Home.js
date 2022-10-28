import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import bgImg from '../img/picc.png'
import icon from '../img/user.png'


const Home = () => {

  const [job, setJob] = useState('')

  const getJob = (k) =>{
    setJob(k.target.value)
  }

  return (
    
    <div>
      {/* <Navbar/> */}
      <div > 
  <img className='max-w-md h-96 mr-12' src={bgImg}/>
</div>
      <div className='home'><div className='pt-20 pl-20 font-bold	text-2xl	'>

It's Easy To Find 
 <div>Your <span className='text-teal-500' >Dream Job</span></div> 
</div>
<div className='pl-20 pt-3'>Explore Thausand of Jobs in one place </div>
<div className='pl-20'>and get a job of your dream</div>


<div className='bg-white max-w-xl	ml-20 h-20 mt-5 rounded-md pl-8 py-4 flex flex-row '>
{/* <label>Select Job Type</label> */}
<select  onChange={getJob}>
<option selected value='Select job' className='bg-slate-300'>Select job</option>
<option value='Web Developer' className='bg-slate-300'>Web Developer</option>
<option value='Ui/UX Designer' className='bg-slate-300'>Ui/UX Designer</option>
<option value='Fullstack Developer' className='bg-slate-300'>Fullstack Developer</option>

</select>
<span className='flex'> {job}</span>

<button className='btn'>Find Jobs</button> 
{/* <label class="block text-l font-bold ">Select Job Type</label>
<select id="states" class="border  text-gray-900 text-sm   border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-200 dark:border-gray-300  dark:text-">
        <option selected>Choose Option</option>
        <option value="CA">Name</option>
        <option value="TX">Date Posted</option>
       
    </select> */}

{/* <h1 class="block text-l font-bold ">Select Location</h1>
<select id="Jobs" className="bg-white text-slate-400 ml-5">
  <option selected >Kigali</option>
  <option value="web">Muhanga</option>
  <option value="Ui">Nairobi</option>
  <option value="Acc">Kampala</option>
  <option value="SE">Bujumbura</option>
</select>
<button className='btn'>Find Jobs</button> */}
</div>


<div className='flex flex-row space-x-40'>
{/* <div className='icon1'>
<h5 className='font-bold text-2xl'>20k+</h5>
<h6 >Job Vacancy</h6>

</div> */}
<div className='bg-yellow-400 w-24	ml-20 h-24 mt-20 mb-20 rounded pl-8 py-4'>

<h5 className='font-bold text-2xl ml-5'>20k+</h5>
<h6 className='ml-5'>Job Vacancy</h6></div>

<div className='bg-sky-500 w-24	ml-20 h-24 mt-20 mb-20 rounded pl-8 py-4'>

<h5 className='font-bold text-2xl ml-5'>50k+</h5>
<h6 className='ml-5'>People got hired</h6>  {/* <img className=' w-20 mb-10' src={icon}/> */}

</div>

<div className='bg-orange-600 w-24	ml-20 h-24 mt-20 mb-20 rounded pl-8 py-4'>
<h5 className='font-bold text-2xl ml-5'>2K+</h5>
<h6 className='ml-5'>Companies</h6></div>
{/* <div className='icon2'>
<img className='w-80 mb-10' src={icon}/>

<h5 className='font-bold text-2xl'>50k+</h5>
<h6>People got hired</h6>

</div> */}
{/* <div className='icon3'>


</div> */}
</div>
</div>
{/* <EmployerDashboard/> */}



    </div>
    
  )
}

export default Home

