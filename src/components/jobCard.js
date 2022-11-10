import React ,{useEffect}from "react";
import jobs from './Assets/Jobs.json';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


import { useDispatch, useSelector } from "react-redux";

import { getAllJobPostAction } from "../redux/jobPost/actions";

const JobCards = () => {
  const dispatch = useDispatch();
// const {jobs,isFetching} = useSelector((state)=>state.jobPosts)

  useEffect(() => {
    getAllJobPostAction()(dispatch);
  }, []);


  return (
    <>
     <Card sx={{ maxWidth: 375 }}>
      <CardContent>
      {jobs.map((data) => (
        
        <div className="jobCard">
        <p className="new">New</p> <br/>
        <h1 className="title1">{data.Title}</h1>
        <h4 className="h4">{data.Company}</h4>
        <p className="h5">{data.Location}</p>
        <button className="Btn1 h5">{data.Timeline}</button>
       
        <div className="siderA">
         {data.Description}
        </div>
        <br />
        <div className="siderB">
          <button className="btn3">APPLY ON COMPANY SITE</button>
          <div className="IconBtn">
          <FavoriteBorderIcon />
          </div>
        </div>
      </div>

        ))}
        
      </CardContent>
     </Card>
   
     <br/>
     
    </>
  );
};
export default JobCards;
