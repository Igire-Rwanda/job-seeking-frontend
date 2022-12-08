import React from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "../jobs.css";
import JobCards from "../../components/jobCard";
import NoteIcon from '@mui/icons-material/Note';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import WifiProtectedSetupIcon from "@mui/icons-material/WifiProtectedSetup";
import LaunchIcon from '@mui/icons-material/Launch';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Divider from '@mui/material/Divider';
import { NavLink } from "react-router-dom";
const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option) => option.title,
});

const countries = [
  { code: "Re", label: "Remote" },

  {
    code: "KE",
    label: "Kenya",
    phone: "254",
  },
  { code: "RW", label: "Rwanda", phone: "250" },
  { code: "RDC", label: "Congo", phone: "243" },
  { code: "Bu", label: "Burundi", phone: "257" },
  { code: "Ta", label: "Tanzania", phone: "255" },
  { code: "AT", label: "Austria", phone: "43" },
];
const topJobCategories = [
  { title: "Software Developer", year: 1994 },
  { title: "Full Stack Engineer", year: 1972 },
  { title: "Electrical Engineer", year: 1974 },
  { title: "Information Technology", year: 2008 },
  { title: "Agriculture", year: 1957 },
  { title: "Business and Finance", year: 1993 },
  { title: "Architecture and Construction", year: 1994 },
];
const JobSearching = () => {
  return (
    <div className="JobsPage">
      
      <div class="contentDivision">
      <div className="jobContainers">
      <h1 style={{ position:"relative",left:"2rem",fontSize: "28px", fontWeight: "800"}}>
        Welcome!
      </h1>
      <br/>
      <div className="carts">
          <div class="cart">
            <h3
              style={{ color: "#44B4D2", fontWeight: "bold", fontSize: "24px" }}
            >
              <NoteIcon />
            </h3>
            <p>Interviews</p>
          </div>
          <div class="cart">
            <h3
              style={{ color: "#44B4D2", fontWeight: "bold", fontSize: "24px" }}
            >
              <LaunchIcon />
            </h3>
            <NavLink to="/applications"><Button><p>Applications</p></Button></NavLink>
          </div>
          <div className="cart">
            <h3
              style={{ color: "#44B4D2", fontWeight: "bold", fontSize: "20px" }}
            >
              <FavoriteBorderIcon />
            </h3>
            <p>Saved Jobs</p>
          </div>
          <div className="cart">
            <h3
              style={{ color: "#44B4D2", fontWeight: "bold", fontSize: "20px" }}
            >
              <VisibilityIcon />
            </h3>
            <p>Recently viewed</p>
          </div>
        </div>
        </div>
        <Divider/>
        <div style={{padding:"40px 0 0px 0"}}>
        <button class="btn2">Jobs Hiring Now</button>
        </div>
        <br />

        <div className="JobsContent">
          <JobCards />
        </div>
        <div style={{padding:"30px 0"}}>
        <p className=" p1">Jobs based on your Activities</p>
        </div>
        <div className="JobsContent">
          <JobCards />
        </div>
        <div style={{padding:"30px 0"}}>
        <p className="h1 p1">Discover more great jobs</p>
        <p>
          Jobs matches based on your preferences
        </p>
        </div>
        <div className="carts">
          <div class="cart">
            <h3
              style={{ color: "#44B4D2", fontWeight: "bold", fontSize: "18px" }}
            >
              <LocationOnIcon /> <nbsp />
              In your Area
            </h3>
            <p>Jobs closest to you</p>
          </div>
          <div class="cart">
            <h3
              style={{ color: "#44B4D2", fontWeight: "bold", fontSize: "18px" }}
            >
              <WifiProtectedSetupIcon /> <nbsp />
              Easly apply jobs
            </h3>
            <p>One-click apply using your profile</p>
          </div>
          <div className="cart">
            <h3
              style={{ color: "#44B4D2", fontWeight: "bold", fontSize: "18px" }}
            >
              <FlashOnIcon /> <nbsp />
              Gig work
            </h3>
            <p>Design your own schedule</p>
          </div>
        </div>
      
      </div>
      <div className="JobsFooter">
          <div class="Jobbutton">
            <nbsp />
            <p>Let Employers find you</p>
            <Button class="btn6">Upload Your Resume</Button>
          </div>
        </div>
    </div>
  );
};
export default JobSearching;
         
      