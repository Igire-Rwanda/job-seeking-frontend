import React from 'react'


const PostJob  = () => {
  return (
    
    <div className='flex  divide-x-2 pt-20'>

       <div className='p-7 space-y-8'>
       <div className='bg-white rounded-full'>
        <p className='text-slate-300 px-8 py-1'>Search</p></div>
        <div className='bg-zinc-300 rounded-full px-8 py-1 cursor-pointer'><p>Post a job</p></div>
        <div className='px-8 cursor-pointer'><p>Jobs</p></div>
        <div className='px-8'> <p>Candidates </p> </div>
        <div className='px-8'>  <p>Interviews</p></div>
        <div className='px-8'> <p>Billing</p>  </div>
        <div className='px-8'> <p>Settings</p>  </div>
        <div className=' px-8'> <p>Help</p>  </div>
        <div className='px-12 py-8'> <p>Log Out</p>  </div>

 </div>
 
 <div className='pl-20   font-semibold '>
  <div className='bg-white ml-20 w-96 h-28 mt-10 rounded-md	'>
  {/* <img className='w-28 h-28' src={pImg}/> */}

  <h4 className='text-xl  align-items-center p-10'>Create a Job Post</h4>

  </div>

  <div className='bg-white ml-20 rounded-md	max-w-full h-80'>

  <h4 className='text-l  align-items-center p-10 mt-10 '>How would you like to post your job</h4>


<div class="flex items-center w-80 p-2 ml-8 rounded border border-gray-300 ">
    <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 pl-20 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <h4 for="bordered-radio-1" class=" ml-10 w-full text-sm font-medium text-black">Use a previous job as a template <br/>Copy and paste job post and edit it</h4>
</div>

<div class="flex items-center w-80 p-5 ml-8 mt-5 rounded border border-gray-300 ">
    <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 pl-10 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <h4 for="bordered-radio-1" class=" ml-10 w-full text-sm font-medium text-gray-900 ">Start a new Post</h4>
</div>
<a href="./PostJob" class="text-white float-right mr-10 mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save and Continue</a>


  </div>
 
 </div>


       
        </div>
  )
}

export default PostJob;



