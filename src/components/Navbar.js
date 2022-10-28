import React from 'react'
import {link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
<nav className='shadow-md w-full fixed top-0 left-0 '>
      <div className='md:flex bg-white py-2 items-cennter justify-between md:px-20 mt:10'>
         <div className=' md:pl-0 pl-9 font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800'>
           <span className='text-teal-500 mr-1 '>
           jo</span><h2>Linker</h2>
         </div>
         <ul className='md:flex md:pb-0 pb-1 py-3 absolute md:static bg-white md:z-auto z-[-1] left-0 md:w-auto md:pl-0 pl-5'>
       <NavLink to='/'><li className='mx-4 hover:text-teal-500 duration-500 cursor-pointer text-l md:ml-8 md:my-0 my-5 py-3 px-5'>Home</li></NavLink>  

        <NavLink to='/FindJobs'><li className='mx-4 hover:text-teal-500 duration-500 cursor-pointer text-l md:ml-8 md:my-0 my-5 py-3 px-5'>Find Jobs</li></NavLink> 
        <NavLink to='/HireTalent'><li className='mx-4 hover:text-teal-500 duration-500 cursor-pointer text-l md:ml-8 md:my-0 my-5 py-3 px-5'>Hire Talent</li></NavLink>  
         <NavLink to='/SignIn'><li className='mx-4  px-5 py-3 cursor-pointer'>Sign In</li> </NavLink> 
        <NavLink to='/SignUp'><button className=' mx-8 bg-sky-500		rounded-md py-2 px-6 md:ml-8 text-white'>Sign Up</button></NavLink> 

         </ul>

      </div>
      </nav>
    </div>
  
  )
   
    
}

export default Navbar