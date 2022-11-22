
import React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './profile.css';
import girl from "../img/girl.jpeg";
import {IconButton, Button,TextField,MenuItem,Box} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { blueGrey, lightBlue, amber } from '@mui/material/colors';
import { useForm } from 'react-hook-form'
import EditIcon from '@mui/icons-material/Edit';





export default function Profile() {

  

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
  const [fName,setFname]=useState()
  const [lName,setLname]=useState()
  const [email,setEmail]=useState()
  const [pNumber,setPnumber]=useState()
  const [address,setAddress]=useState()
  const [experience, setExperience]=useState()
  const [language, setLanguage]=useState()
  const [skills,setSkills]=useState()
  const [country,setCountry]=useState()




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
         
         <br/> <br/>
         
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <span>Build Your Profile</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">




      

            <div className='inputs'>
            <TextField fullWidth id="outlined-basic" label="FirstName" variant="outlined" onChange={(e)=>setFname(e.target.value)}/>
            <TextField fullWidth id="outlined-basic" label="LastName" variant="outlined" onChange={(e)=>setLname(e.target.value)} />
            <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>setEmail(e.target.value)} />
            <TextField fullWidth id="outlined-basic" label="Address" variant="outlined" onChange={(e)=>setAddress(e.target.value)} />
            <TextField fullWidth id="outlined-basic" label="PhoneNumber" variant="outlined" onChange={(e)=>setPnumber(e.target.value)} />
            <TextField fullWidth id="outlined-basic" label="Years of experience" variant="outlined" onChange={(e)=>setExperience(e.target.value)} />
            <TextField fullWidth id="outlined-basic" label="Language Spoken" variant="outlined" onChange={(e)=>setLanguage(e.target.value)} />
            <TextField fullWidth id="outlined-basic" label="Skills you have" variant="outlined" onChange={(e)=>setSkills(e.target.value)} />
            <TextField fullWidth id="outlined-basic" label="Country" variant="outlined" onChange={(e)=>setCountry(e.target.value)} />



                
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
            <input type='file' placeholder='upload your CV' /> 
    


            <div id="butt" > 
            <Button 

               onClick={() => {
               console.log({fName,lName,email,address,pNumber,selectDegree,experience,language,skills,country})
             }}
             
              >
                <b>Save</b>
            </Button>
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

