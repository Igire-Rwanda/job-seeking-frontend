import React from 'react'


const Billing  = () => {
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

  <div className='  h-28 mt-8  space-y-20'>
   

    <div className='bg-white absolute text-center ml-20 max-w-7xl w-max	h-10 pb-10 p-6 font-bold text-l rounded-md
    '>
<h4>Credit Card Information</h4>
</div>
   
<div className='bg-white absolute p-5  mt-20 ml-20 w-1/2 h-96 rounded-md
    '>
{/* <h5>Card Number</h5>
<input type="text" className="border rounded-md text-gray-900 text-sm  w-96 h-8 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-400  dark:text-"required/>
<h5>Card Number</h5>

<h5>Card Number</h5> */}
            <h4 className="pr-5">CardHolder Name</h4>

<input
              type="text"
              class="border rounded-md text-gray-900 text-sm  w-1/2 h-8 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-400  dark:text-"
              required
            />


            <div className='mt-4 space-x-5 flex'>
              
<div>
<div className=''>CVC/CVV</div>

  <input
              type="text"
              class="border rounded-md text-gray-900 text-sm  w-60 h-8 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-400  dark:text-"
              required
            /></div>

     <div>
     <div className="  ">Expiry Date</div>

      <input
              type="text"
              class="border rounded-md text-gray-900 text-sm  w-60 h-8 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-400  dark:text-"
              required
            /></div>       


            </div>


            <h4 className="pr-5 mt-5">Card Number</h4>

<input
              type="text"
              class="border rounded-md text-gray-900 text-sm  w-1/2 h-8 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-400  dark:text-"
              required
            />
 <button className="p-5 mt-5 w-48 bg-blue-700 text-white">
                Pay Now
              </button>
</div>
  </div>


 
 </div>


       
  )
}

export default Billing;



