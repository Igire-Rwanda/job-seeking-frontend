import React from 'react'
import "./UserProfile.css";

export default function UserProfile() {
  //  const onSubmit = (e)  =>{
  //   e.preventDefault();
  //   const form = document.getElementById("uc-Userfrofile");
  //   const formData = new formData(form);
  //   let uploadData ={};
  //    for (let i of formData){
  //     uploadData[i[0]] =i[1]
  //    }
  //    console.log(uploadData);
  //  }
  return (
    
    <form className='max-w-[700px] w-full mx-auto bg-gray-800 p-8 px-8 rounded-lg'>

      <section>

        <h1 className='text-4xl text:text-blue font-bold text-center'>Job Seeker Profile</h1>
        <br></br>

        <h2>Personal Information</h2>
        <br></br> <br></br>

        <div className='flex flex-col text-white-400 py-2'>

          <input className=" p-2 rounded-lg bg-white-700 mt-2 p-2 focus:border-blue-500 focus:bg-Light Purple Blue-500 focus:outline-none " type="text" placeholder='FirstName' name="FirstName"></input>
        </div>
        <div className='flex flex-col text-white-400 py-2'>

          <input className=" p-2 rounded-lg bg-white-700 mt-2 p-2 focus:border-blue-500 focus:bg-Light Purple Blue-500 focus:outline-none " type="text" placeholder='LastName' name="LastName"></input>
        </div>
        <div className='flex flex-col text-white-400 py-2'>
         
          <input className=" p-2 rounded-lg bg-white-700 mt-2 p-2 focus:border-blue-500 focus:bg-Light Purple Blue-500 focus:outline-none " type="email" placeholder='Email' name="Email"></input>
        </div>
        <div className='flex flex-col text-white-400 py-2'>
         
          <input className=" p-2 rounded-lg bg-white-700 mt-2 p-2 focus:border-blue-500 focus:bg-Light Purple Blue-500 focus:outline-none " type="text" placeholder='PhoneNumber' name="PhoneNumber"></input>
        </div>
        <div className='flex flex-col text-white-400 py-2'>

          <input className=" p-2 rounded-lg bg-white-700 mt-2 p-2 focus:border-blue-500 focus:bg-Light Purple Blue-500 focus:outline-none " type="text" placeholder='Address' name=">Address"></input>
        </div>
        </section>

<br></br> <br></br>

        <section>
        <h2>Work Information</h2>
        <br></br> <br></br>

        <div className='flex flex-col text-Light Purple Blue-400 py-2'>
          <label htmlfor="current_employer"> current employer</label>
          <input className=" p-2 rounded-lg bg-Light Purple Blue-700 mt-2 p-2 focus:border-blue-500 focus:bg-Light Purple Blue-500 focus:outline-none " type="text" id="current_employer" name="current_employer"></input>
        </div>

         <div className='flex flex-col text-white-400 py-2'>
          <label htmlfor="Current_role"> Current role</label>
          <input className=" p-2 rounded-lg bg-white-700 mt-2 p-2 focus:border-blue-500 focus:bg-Light Purple Blue-500 focus:outline-none " type="text" id="Current_role" name="Current_role"></input>
        </div>
        <div className='flex flex-col text-white-400 py-2'>
          <label htmlfor="role_description">role_description</label>
          <input className=" p-2 rounded-lg bg-white-700 mt-2 p-2 focus:border-blue-500 focus:bg-Light Purple Blue-500 focus:outline-none " type="text" id="role_description" name="role_description"></input>
        </div>
        <div className='flex flex-col text-white-400 py-2'>
          <label htmlfor="role_description">role_description</label>
          <input className=" p-2 rounded-lg bg-white-700 mt-2 p-2 focus:border-blue-500 focus:bg-Light Purple Blue-500 focus:outline-none " type="text" id="role_description" name="role_description"></input>
        </div>
        <div className='flex flex-col text-white-400 py-2'>
          <label htmlfor="role_description">Years of experience</label>
          <input className=" p-4 rounded-lg bg-white-700 mt-2 p-2 focus:border-blue-500 focus:bg-Light Purple Blue-500 focus:outline-none " type="range" id="Years of experience" name="Years of experience"></input>
        </div>
        <div className='flex flex-col text-white-400 py-2'>
          <label htmlfor="role_description">Skills</label>
          <input className=" p-2 rounded-lg bg-white-700 mt-2 p-2 focus:border-blue-500 focus:bg-Light Purple Blue-500 focus:outline-none " type="text" id="Skills" name="Skills"></input>
        </div>
        </section>

        <section>
          <h2>Social Media Links</h2>
           <br></br><br></br>
           <div>
            <label>
              <input   className="filled-in" 
              type="Checkbox" name="include-porfolio">
              </input>
              <span>Include Portfolio Links?</span>
            </label>
           </div>
           <div>
            <label>
              <input className="filled-in" type="Checkbox"  name="include-social">
              </input>
              <span>include-social?</span>
            </label>
           </div>
           </section>

<section>
           <h2>Social Media Links</h2>
           <br></br><br></br>

           <div>
            <label  htmlFor="resume">Select Resume</label>
              <input type="file"  id="resume" >
              </input>
           </div>
           <div>
            <label  htmlFor="Cover_letter">Select Cover Cover_letter</label>
              <input type="file"  id="Cover_letter">
              </input>
           </div>
           </section>
       
    </form>
    
  )
}


