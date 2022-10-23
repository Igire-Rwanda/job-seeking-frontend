import React from "react";
import jobs from './Assets/Jobs.json';
const JobCards = () => {
  return (
    <>
      {jobs.map((data) => (
        
        <div className="jobCard">
        <p className="new">new</p> 
        <h1 className="title1">{data.Title}</h1>
        <h4 className="h4">{data.Company}</h4>
        <p className="h5">{data.Location}</p>
        <button className="Btn1 h5">{data.Timeline}</button>
        <br />
        <br />
        <div className="siderA">
         {data.Description}
        </div>
        <br />
        <div className="siderB">
          <button className="btn3">INFO</button>
          <button className="btn3">APPLY</button>
        </div>
      </div>

        ))}
        
      {/* <div className="jobCard">
        <p className="new">new</p> 
        <h1 className="title1">SOFTWARE DEVELOPMENT ENGINEER I</h1>
        <h4 className="h4">Amazon.com Services LLc</h4>
        <p className="h5">Remote</p>
        <button className="Btn1 h5">Full Time</button>
        <br />
        <br />
        <div className="siderA">
          <p>Hiring Multiple Candidates</p>
          <p>
            It's not the secret that Amazon relies on its technology to deliver
            million of packages everyday to it's customers - everyday- at a low
            cost.
          </p>
        </div>
        <br />
        <div className="siderB">
          <button className="btn3">INFO</button>
          <button className="btn3">APPLY</button>
        </div>
      </div> */}
    </>
  );
};
export default JobCards;
