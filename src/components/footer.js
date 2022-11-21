import React from "react";
import "./footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <>
      <div>
        <div className="footer">
          <div className="footerBar">
            <div class="jobItem">
              <h2>Resources</h2>
              <br />
              <ul>
                <li>Help & Support</li>
                <li> Success Stories</li>
                <li> JoLinker Reviews</li>
                <li> Resources</li>
                <li> Blog</li>
              </ul>
            </div>
            <div class="jobItem">
              <h2>For Clients</h2>
              <br />
              <ul>
                <li> Hiring Tips</li>
                <li> Top Candidates</li>
                <li> Recruiting and Hiring fast</li>
                <li> Post a Job</li>
              </ul>
            </div>
            <div class="jobItem">
              <h2>For Talent</h2>
              <br />
              <ul>
                <li> Find an Hourly Jobs</li>
                <li> Easy Apply</li>
                <li> Get Interviewed</li>
                <li> Job Advice Blog</li>
              </ul>
            </div>
            <div>

              <h2>Subscribe to our NewsLetter</h2> <br />
              <input placeholder="Your Email"></input> <br /> <br />
              <button className="button">Subscribe</button>

            </div>
          </div>
          <div class="ligne"></div>
          <div className="copyright">
            <p >Copyright@2022 joLinker Inc </p>

           
            <div class="icons">
            <h4>Follow Us On</h4>
              <GitHubIcon />
              <InstagramIcon />
              <GoogleIcon />
              <LinkedInIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
