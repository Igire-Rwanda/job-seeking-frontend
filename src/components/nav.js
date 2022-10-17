import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { borderBottomColor } from '@mui/system';
const Nav = () => {
  return (
    <div>
<nav className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex bg-white py-4 items-cennter justify-between md:px-20'>
         <div className='font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800'>
           <span className='text-3xl text-indigo-600 mr-1 pt-2'>
           </span>
           Jolinker
         </div>
         <ul className='md:flex md:pb-0 pb-2 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in'>
          <li className='mx-4 hover:text-teal-500 duration-500 cursor-pointer text-l md:ml-8 md:my-0 my-7 '>Find Jobs</li>
          <li className='mx-4 hover:text-teal-500 duration-500 cursor-pointer text-l md:ml-8 md:my-0 my-7'>Company Reviews</li>
          <li className='mx-4 hover:text-teal-500 duration-500 cursor-pointer text-l md:ml-8 md:my-0 my-7'>Find Salaries</li>
          <li className='mx-4 hover:text-teal-500 duration-500 cursor-pointer text-l md:ml-8 md:my-0 my-7'><PersonIcon/>Profile</li>
          {/* <button className='bg-yellow-400	rounded-md py-2 px-6 md:ml-8 text-white'>Employers/Post a Job</button> */}


         </ul>

      </div>
      </nav>
    </div>
  
  )
   
    
}

export default Nav