import React from "react";
import "./footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const  Footer = () => {
   return (
      <>
      <div className="footerBar" >
            <div>
                <br/>
              <h3 >joLinker</h3> <nbsp/>
              <p>Copyright@2022 joLinker Inc </p> <br/>
              <h2>Follow Us On</h2>
              <GitHubIcon/> <nbsp/><nbsp/><nbsp/>
              <InstagramIcon/><nbsp/><nbsp/>
              <GoogleIcon/><nbsp/><nbsp/>
              <LinkedInIcon/>
              </div>
              <div class='jobItem'>
                 <h2>Employers</h2>
                 <br/>
                <ul>
                 <li> Hiring Tips</li>
                 <li> Top Candidates</li> 
                 <li> Recruiting and Hiring fast</li>
                 <li> Post a Job</li>
                </ul>
            </div>
            <div class='jobItem'>
                 <h2>Job Seekers</h2>
                 <br/>
                <ul>
                 <li> Find an Hourly Jobs</li>
                 <li> Easy Apply</li>
                 <li> Get Interviewed</li>
                 <li> Job Advice Blog</li>
                </ul>
            </div>
            <div>
                <h2>Subscribe to our NewsLetter</h2> <br/>
                <input placeholder="Your Email"></input> <br/> <br/>
                <button>Subscribe</button>
            </div>
      </div>
      </>
   )
}
export default Footer