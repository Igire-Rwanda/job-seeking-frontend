import React from 'react'


const Jobs  = () => {
  return (
    
    <div className='flex  divide-x-2 pt-20'>

       <div className='p-7 space-y-8'>
       <div className='bg-white rounded-full'>
        <p className='text-slate-300 px-8 py-1'>Search</p></div>
        <div className='bg-zinc-300 rounded-full px-8 py-1 cursor-pointer             active:bg-amber-500
'><p>Post a job</p></div>
        <div className='px-8 cursor-pointer'><p>Jobs</p></div>
        <div className='px-8 cursor-pointer'> <p>Candidates </p> </div>
        <div className='px-8 cursor-pointer'>  <p>Interviews</p></div>
        <div className='px-8 cursor-pointer'> <p>Billing</p>  </div>
        <div className='px-8 cursor-pointer'> <p>Settings</p>  </div>
        <div className=' px-8 cursor-pointer'> <p>Help</p>  </div>
        <div className='px-12 py-8 cursor-pointer'> <p>Log Out</p>  </div>

 </div>
 
  <div className=' ml-20 h-28 mt-10 flex space-x-20'>
  {/* <img className='w-28 h-28' src={pImg}/> */}

    <div className="relative w-96 ">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 mb-20 mt-3 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Job Titles..." required/>
    </div>

    <div className="relative w-96 ">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 mb-20 mt-3 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Job Location..." required/>
    </div>

    <div className='bg-white absolute p-20 mt-20 w-1/2 h-96 rounded-md
    '>
<h4>You have No Job Post Yet</h4>

</div>
    <div className=''>
<h4 className=''>Sort By:</h4>
<select id="states" class="border  text-gray-900 text-sm   border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-200 dark:border-gray-300  dark:text-">
        <option selected>Choose Option</option>
        <option value="CA">Name</option>
        <option value="TX">Date Posted</option>
       
    </select>

    <h4 className=''>Order:</h4>
<select id="states" class="border  text-gray-900 text-sm   border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-200 dark:border-gray-300  dark:text-">
        <option selected>Choose option</option>
        <option value="CA">Ascending</option>
        <option value="CA">Descending</option>

      
    </select>
</div>

  </div>



 
 </div>


       
  )
}

export default Jobs;



