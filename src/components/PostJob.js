import React from 'react'
import { NavLink } from 'react-router-dom';


const PostJob = () => {
  return (

    <div className='flex  divide-x-2 pt-20'>

      <div className='p-7 space-y-8'>
        <div className='bg-white rounded-full'>
          <p className='text-slate-300 px-8 py-1'>Search</p></div>
        <div className=' rounded-full cursor-pointer px-8 py-1'>
          <NavLink to="/EmployeeForm"><button><p>Post a job</p></button></NavLink>
          </div>
        <div className='px-8 cursor-pointer'>
        <NavLink to="/postedJobs"><button><p>Jobs</p></button></NavLink></div>
        <div className='px-8 cursor-pointer'> <p>Candidates </p> </div>
        <div className='px-8 cursor-pointer'>  <p>Interviews</p></div>
        <div className='px-8 cursor-pointer'> <p>Billing</p>  </div>
        <div className='px-8 cursor-pointer'> <p>Settings</p>  </div>
        <div className=' px-8 cursor-pointer'> <p>Help</p>  </div>
        <div className='px-12 py-8 cursor-pointer'> <p>Log Out</p>  </div>

      </div>

      <div className='pl-20   font-semibold '>















        {/* <div className='bg-white ml-20 max-w-full h-28 mt-10 rounded-md	'> */}
          {/* <img className='w-28 h-28' src={pImg}/> */}

          {/* <h4 className='text-xl  align-items-center p-10'>Provide Basic Information</h4> */}

        {/* </div> */}

        {/* <div className='bg-white ml-20 rounded-md mt-5	max-w-full h-96'>


          <div class="flex px-10 pt-5">
            <h4 className='pr-2'>choose country</h4>
            <select id="states" class=" border  text-gray-900 text-sm   border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-200 dark:border-gray-300  dark:text- ">
              <option selected>choose country</option>
              <option value="TX">Uganda</option>
              <option value="WH">Kenya</option>
              <option value="FL">Tanzania</option>
              <option value="VG">DRC</option>
              <option value="GE">South Sudan</option>
            </select>

            <label for="states" class="sr-only">Choose a state</label>
            <select id="states" class="border  text-gray-900 text-sm   border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-200 dark:border-gray-300  dark:text-">
              <option selected>choose city</option>
              <option value="CA">Kigali</option>
              <option value="TX">Nairobi</option>
              <option value="WH">Kampala</option>

            </select>
          </div>
          <div className='flex px-10 py-10'>
            <h4 className=''>Choose Language</h4>
            <select id="states" class="border  text-gray-900 text-sm   border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-200 dark:border-gray-300  dark:text-">
              <option selected>Choose language</option>
              <option value="CA">English</option>
              <option value="TX">French</option>
              <option value="WH">Kiswahili</option>

            </select>
          </div>
          <div className='flex px-10 py-10'>
            <h4>Company Name</h4>
            <input type="text" class="border  text-gray-900 text-sm   border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-200 dark:border-gray-300  dark:text-" required />

          </div>
          <a href="./PostJob" class="text-blue-900	 float-left mb-5 bg-white	 border-l-2 focus:border-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  ml-5 mb-2 dark:bg-white dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Back</a>


          <a href="./JobDetails" class="text-white float-right mr-10 mb-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save and Continue</a>



        </div> */}

      </div>

















    </div>
  )
}

export default PostJob;



