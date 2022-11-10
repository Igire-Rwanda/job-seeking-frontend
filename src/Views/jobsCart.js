import React  from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./jobs.css";
import JobCards from "../components/jobCard";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import WifiProtectedSetupIcon from "@mui/icons-material/WifiProtectedSetup";

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
const JobCategories = [
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
    <div className="JobsPage" >
      
      <div className="JobTitles" >
        <Autocomplete
          id="filter-demo"
          options={JobCategories}
          getOptionLabel={(option) => option.title}
          filterOptions={filterOptions}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="What" />}
        />
        <nbsp />
        <Autocomplete
          id="country-select-demo"
          sx={{ width: 300 }}
          options={countries}
          autoHighlight
          getOptionLabel={(option) => option.label}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                alt=""
              />
              {option.label} ({option.code}) +{option.phone}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a location"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          )}
        />

        <Button variant="contained" class="btn">
          Find Jobs
        </Button>
        
        <div class="center">
        <p>
          <span style={{ fontWeight: "bold" }}>Post your resume_</span>It only
          takes a moment
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Employers:</span>Post a Job Your
          next hire is here
        </p>
      </div>
      </div>
   <br/>
   <br/>
      <div class="contentDivision">
      
        <button class="btn2">Jobs Hiring Now</button>
        
        <br />
        <br/>
        <div className="JobsContent">
          <JobCards />
        </div>
        <div className="paragr">
        <p className="h1">Jobs based on your Activities</p>
        </div>
        
        <div className="JobsContent">
          <JobCards />
        </div>
        <div className="paragr">
        <p className="h1 ">Discover more great jobs</p>
        <p >
          Jobs matches based on your preferences
        </p>
        </div>
       
        <div className="carts">
          <div class="cart">
            <h3
              style={{ color: "#44B4D2", fontWeight: "bold", fontSize: "20px" }}
            >
              <LocationOnIcon /> <nbsp />
              In your Area
            </h3>
            <p>Jobs closest to you</p>
          </div>
          <div class="cart">
            <h3
              style={{ color: "#44B4D2", fontWeight: "bold", fontSize: "20px" }}
            >
              <WifiProtectedSetupIcon /> <nbsp />
              Easly apply jobs
            </h3>
            <p>One-click apply using your profile</p>
          </div>
          <div className="cart">
            <h3
              style={{ color: "#44B4D2", fontWeight: "bold", fontSize: "20px" }}
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
            
            <p style={{paddingLeft:"24px"}}>Let Employers find you</p>
            <Button class="btn6">Upload Your Resume</Button>
          </div>
        </div>
    </div>
    
    
  );
};
export default JobSearching;
