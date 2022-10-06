import React from "react";
import "./jobs.css"
const JobSearching = () => {
    return (
        <>
        <h1>This is JobSearching</h1>
        <div className="JobTitles">
        <input placeholder="What"></input>
        <nbsp/>
        <input placeholder="Where"></input>
        <button class="btn">Find Jobs</button>
        </div>
        <div className='jobCard'>
           <p>new</p>
           <h1>SOFTWARE DEVELOPMENT ENGINEER I</h1> 
           <h4>Amazon.com Services LLc</h4>
           <p>Remote</p>
           <button className="Btn1">Full Time</button>
           <p>Hiring Multiple Candidates</p>
           <p>It's not the secret that Amazon relies on its technology to deliver million of
            packages everyday to it's customers - everyday- at a low cost.
           </p>
        </div>

        </>
    )
}
export default JobSearching