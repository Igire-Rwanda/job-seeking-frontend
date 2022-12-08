
import React,{useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './profile.css';
import girl from "../img/girl.jpeg";
import {IconButton, Button,TextField,MenuItem,Box} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { blueGrey, lightBlue, amber } from '@mui/material/colors';
import {useDispatch,useSelector} from 'react-redux';
import {CreateProfileAction} from "../redux/profile/action";
import { useForm } from 'react-hook-form'
import EditIcon from '@mui/icons-material/Edit';
import { Navigate } from 'react-router-dom';
import { profileActions } from '../redux/profile';





export default function Profile() {
  const dispatch=useDispatch();

  
  const { isFetching } = useSelector((state) => state.profile);
  // useEffect(()=>{
  //   if(token){
  //     Navigate("/")
  //   }
;  // },[token])
  const profile=()=>{
    profileActions({address,selectDegree,yearsOfExperience,SpokenLanguages,skills,country,LinkedlnProfile})(dispatch)
  }

  

  const degree = [
    {
      value: 'high school',
      label: 'High school diploma',
    },
    {
      value: 'diploma',
      label: 'Diploma'
    },
    {
      value: 'undegraduate',
      label: 'Undergraduate'
    },
    {
      value: 'graduate',
      label: 'Graduate'
    },
    {
      value: 'bachelor',
      label: 'Bachelors'

    }
  
  
  ]

    
const [selectDegree,setSelectDegree]=useState('high school')
    // const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
      setSelectDegree(event.target.value);
    };
  
  
  const [address,setAddress]=useState()
  const [yearsOfExperience, setYearsOfExperience]=useState()
  const [SpokenLanguages, setSpokenLanguages]=useState()
  const [skills,setSkills]=useState()
  const [country,setCountry]=useState()
  const [LinkedlnProfile,setLinkedlnProfile]=useState()





  return (
    <div>

    <Card sx={{ maxWidth: 1250,margin:10, backgroundColor:amber}}>
      <CardActionArea>
     
               <Button  component="label">
     <CardMedia
        //   component="img"
        //   height="140"
        >
          <img src={girl} style={{width:120,height:115,borderRadius:50,marginLeft:280,marginTop:40}}/>
          <input  hidden accept="image/*" multiple type="file" />
         {/*   */}

         <p>user's name</p>

         </CardMedia>
         <div className='icon'>   
               <IconButton color="primary" aria-label="upload picture" component="label">
               <input hidden accept="image/*" type="file" />
               <PhotoCamera />
               </IconButton>
            </div> 
  
</Button> 
<hr></hr>
         
         <br/> <br/><br/>
         
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <span>Build Your Profile</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">




      

            <div className='inputs'>
            
            <TextField fullWidth id="outlined-basic" label="Address" variant="outlined" onChange={(e)=>setAddress(e.target.value)} />
            <TextField fullWidth id="outlined-basic" label="Years of experience" variant="outlined" onChange={(e)=>setYearsOfExperience(e.target.value)} />
            <TextField fullWidth id="outlined-basic" label="Language Spoken" variant="outlined" onChange={(e)=>setSpokenLanguages(e.target.value)} />
            <TextField fullWidth id="outlined-basic" label="Skills you have" variant="outlined" onChange={(e)=>setSkills(e.target.value)} />
            <TextField fullWidth id="outlined-basic" label="Country" variant="outlined" onChange={(e)=>setCountry(e.target.value)} />
            <TextField fullWidth id="outlined-basic" label="LinkedlnProfile" variant="outlined" onChange={(e)=>setLinkedlnProfile(e.target.value)} />
         
            {/* <Button variant="contained" component="label">
                 Upload your CV
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <IconButton color="primary" aria-label="upload picture" component="label">
          <input hidden accept="image/*" type="file" />
          <PhotoCamera />
          </IconButton> */}


                
            <Box
              component="form"
              sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
               noValidate
               autoComplete="off"
             >
              <div>

            <TextField
          id="outlined-select-currency"
          select
          label="Select"
          onChange={handleChange}
          value={selectDegree}
        
          helperText="select your level of education"
        >
          {degree.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        </Box>

        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <div>
        <TextField
          id="outlined-multiline-flexible"
          label="fill in your resume"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
        />
        </div> */}
        </Box>  
           
  

            <div id="butt" > 
            <LoadingButton 
loading={isFetching}
               onClick={() => {
                profile();
               console.log({address,selectDegree,yearsOfExperience,SpokenLanguages,skills,country,LinkedlnProfile})
             }}
             
              >
                <b>Save</b>
            </LoadingButton>
            </div>
            {/* <div id="butto">
            <Button 
               onClick={() => {
            //    alert('clicked');
              }}
                >
                <b>Update</b>
            </Button>
            </div> */}
            </div>
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    </div>
  );
}

