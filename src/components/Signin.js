import React from 'react';


export default function Signin() {
  return (
  
    <div className=" flex flex-col justify-center">
      <form className='max-w-[400px] w-full mx-auto bg-blue-800 p-8 px-8 rounded-lg'>

      <h2 className='text-4xl text:text-blue font-bold text-center'>SIGN IN</h2>

      <div className='flex flex-col text-white-400 py-2'>
      <label> User Name</label>
      <input className=" p-2 rounded-lg bg-white-700 mt-2 p-2 focus:border-blue-500 focus:bg-teal-500 focus:outline-none "type="text"/>
      </div>

      <div className='flex flex-col text-gray-400 py-2'>
      <label> Password</label>
      <input  className=" p-2 rounded-lg bg-white-700 mt-2 p-2 focus:border-blue-500 focus:bg-teal-500 focus:outline-none "type="password"/>
      </div>

       {/* <div className='mt-10 grid grid-cols-3 items-center text-gray-400'>
        <hr className='border-gray-400'> </hr>
        <p className='text-center'>OR</p>
        <hr className='border-gray-400'> </hr>
        </div> 
                              */}
      <div className='flex justify-between text-gray-400 py-2'>
        <p className='flex items-center'>
     <input className='mr-2' type="checkbox"/>Remember Me
     </p>
     <p> Forgot Password</p>
      </div>

      {/* <div className='flex justify-between text-gray-400 py-2'>
        <p className='flex items-center'> 
     <input className='mr-2' type="radio"/> Hired
     </p>
     </div> */}

      <button className='w-full my-5 py-2 bg-teal-500'> SIGN IN</button>
      </form>
     </div>
     
  )
}

