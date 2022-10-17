import React from "react";

const JobCards = (data) => {
    return (
        <>
{/* {jobsSeeking.map((data) => {
        const list = ( */}
        <div className='jobCard'>
           <p className="new">new</p>
           <h1 className="h1">SOFTWARE DEVELOPMENT ENGINEER I</h1> 
           <h4 className="h4">Amazon.com Services LLc</h4>
           <p className="h5">Remote</p>
           <button className="Btn1 h5">Full Time</button><br/><br/>
           <p>Hiring Multiple Candidates</p>
           <p>It's not the secret that Amazon relies on its technology to deliver million of
            packages everyday to it's customers - everyday- at a low cost.
           </p> <br/>
           <div className="siderB">
           <button className="btn3">INFO</button>
           <button className="btn3">APPLY</button>
           </div>
        </div>
     
        </>
    )
}
export default JobCards