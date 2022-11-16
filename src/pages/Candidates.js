import React from 'react'


const Candidates  = () => {
  return (
    
    <div className='flex pt-20'>

       <div className='p-7 space-y-8'>
       <div className='bg-white rounded-full'>
        <p className='text-slate-300 px-8 py-1'>Search</p></div>
        <div className=' rounded-full px-8 py-1 cursor-pointer'><p>Post a job</p></div>
        <div className='px-8 cursor-pointer'><p>Jobs</p></div>
        <div className='px-8 cursor-pointer'> <p>Candidates </p> </div>
        <div className='px-8 cursor-pointer'>  <p>Interviews</p></div>
        <div className='px-8 cursor-pointer'> <p>Billing</p>  </div>
        <div className='px-8 cursor-pointer'> <p>Settings</p>  </div>
        <div className=' px-8 cursor-pointer'> <p>Help</p>  </div>
        <div className='px-12 py-8 cursor-pointer'> <p>Log Out</p>  </div>

 </div>
 <h4 className='ml-20 font-bold mb-20'>Candidates</h4>

  <div className='  h-28 mt-10 flex space-x-20'>
  {/* <img className='w-28 h-28' src={pImg}/> */}
   

    <div className='bg-white absolute pt-20 text-center mt-20 ml-20 w-1/2 h-96 rounded-md
    '>
<h4>You don't have any applicants Yet</h4>

</div>
    <div className=''>
<select id="states" class="border rounded-xl text-gray-900 text-sm   border-l-2 focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-slate-200 dark:border-gray-300  dark:text-">
        <option selected>Filters</option>
        <option value="CA">Name</option>
        <option value="TX">Date Posted</option>
       
    </select>
   
</div>
<div className='flex space-x-5 cursor-pointer'>
<h4> 0 Active</h4>
<h4> 0 Shortlist</h4>
<h4> 0 Awaiting Review</h4>
<h4> 0 Reviewed</h4>
<h4> 0 Contacting</h4>
<h4> 0 Rejected</h4>

<h4 className='bg-white w-36 h-10 p-2 text-sm text-blue-700 pl-5 border-gray cursor-pointer'> Add Candidate</h4>



</div>

  </div>



 
 </div>


       
  )
}

export default Candidates;



