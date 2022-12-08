import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getAllJobAction } from "../redux/job/action";

const Home = (props) => {
  const dispatch = useDispatch();
  const {jobs,isFetching} = useSelector((state)=> state.job);

useEffect(() => {
  getAllJobAction()(dispatch);
}, []);

  return (
    <>
      <div className="home font-bold pt-10 ">
      <div className="bg-white max-w-xl	ml-20 h-15 rounded-md pl-8 py-4 flex flex-row mb-5 p-20 ">
          TRENDING JOBs
        </div>
        {/* <div className="bg-white flex flex-col max-w-xl	ml-20 h-15 rounded-md pl-8 py-4 flex flex-row mb-5 p-20 ">
          <h2>IT CONSLTANT </h2>
          <h3 className="text-s">BK Thech</h3>
          <h3 className="text-s"> | Full Time</h3>
          <h3 className="text-s"> | Deadline:2022-12-31</h3>


<button className="bg-sky-500	 mt-10 text-white">Apply Now</button>
        </div> */}
        {jobs.map((jobu
          )=>(
        <div className="bg-white flex flex-col max-w-xl	ml-20 h-15 rounded-md pl-8 py-4 flex flex-row mb-5 p-20 ">
         <h2>{jobu.jobTitle}</h2> 
        <h3>{jobu.companyName}</h3> 
        <h3> |{jobu. emplomentMode}</h3>
        <h3> | Deadline: {jobu.jobDeadLine}</h3>
 {/* <h2>SENIOR DEVELOPER</h2>
          <h3 className="text-s">Andela</h3>
          <h3 className="text-s"> | Full Time</h3>
          <h3 className="text-s"> | Deadline:2022-12-31</h3> */}
<button className="bg-sky-500	 mt-10 text-white">Apply Now</button>

        </div>
                 
                  
                  ))}
        {/* {jobs.map((jobu
          )=>(
            <div className="bg-white flex flex-col max-w-xl	ml-20 h-20 rounded-md pl-8 py-4 flex flex-row mb-5 ">
            <h3> {jobu.jobTitle}</h3><br></br>
          {jobu.companyName}
            </div>
           
            
            ))} */}
   
       

      
       
      
     
        
        
        
        
        
        
        
        
        
       
      </div>
    </>
  );
};

export default Home;
