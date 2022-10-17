import React from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./jobs.css";
import JobCards from "../components/jobCard";
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
const top100Films = [
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
    <>
    {/* <Nav/> */}
    <div className="HomePage">
      <div className="JobTitles">
        <Autocomplete
          id="filter-demo"
          options={top100Films}
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
      </div>
      <div class="center">
        <h5>
          <span className="h1">Post your resume</span>_It only takes a moment
        </h5>
        <h5>
          {" "}
          <span className="h1">Employers</span>:Post a Job Your next hire is
          here
        </h5>
      </div>
      <br />
      <button class="btn2">Jobs Hiring Now</button>
      {/* {JobSeekers.map((Data) = (
              <div className="user">{Data} </div>
      ))} */}
      
      <div className="JobsContent">
        <JobCards />
        <JobCards />
        <JobCards />
      </div>
      <p className="h1 p1">Jobs based on your Activities</p>
      <div className="JobsContent">
        <JobCards />
        <JobCards />
        <JobCards />
      </div>
      <div className="JobsFooter">
        <div class="Jobbutton">
          <p>Let Employers find you</p> <nbsp/>
          <Button class="btn6">Upload Your Resume</Button>
        </div>
      </div>
      </div>
    </>
  );
};
export default JobSearching;
