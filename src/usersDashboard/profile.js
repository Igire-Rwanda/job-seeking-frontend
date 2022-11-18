
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './profile.css';
import girl from "../img/girl.jpeg";
import {IconButton, Button,TextField,MenuItem,Box} from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import { useForm } from 'react-hook-form'





export default function Profile() {

  

  const currencies = [
    {
      value: 'Level of education',
      label: 'High school diploma',
    },
    {
      value: 'Level of education',
      label: 'Diploma'
    },
    {
      value: 'Level of education',
      label: 'Undergraduate'
    },
    {
      value: 'Level of education',
      label: 'Graduate'
    },
    {
      value: 'Level of education',
      label: 'Bachelors'

    }
  
  
  ]

    const [currency, setCurrency] = React.useState('EUR');

    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
      setCurrency(event.target.value);
    };

    
    const {register, handleSubmit, formState: { errors } } =useForm();

    console.log(errors)



  return (
    <div>

    <Card sx={{ maxWidth: 1250,margin:10 }}>
      <CardActionArea>
        <CardMedia
        //   component="img"
        //   height="140"
          image={girl}
         sx={{width:120,height:115,borderRadius:50,marginLeft:60,marginTop:10}} 
         />
         <p>user's name</p>
         <br/> <br/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <span>Build Your Profile</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">




      <form onSubmit={handleSubmit((data)=>{
        console.log(data);
      })}>

            <div className='inputs'>
            <TextField fullWidth id="outlined-basic" label="FirstName" {...register("FirstName", {require: 'this is required' })} variant="outlined" />
            <TextField fullWidth id="outlined-basic" label="LastName" {...register("LastName", {require: 'this is required' } )} variant="outlined" />
            <TextField fullWidth id="outlined-basic" label="Email" {...register("Email")} variant="outlined" />
            <TextField fullWidth id="outlined-basic" label="Address" {...register("Address")} variant="outlined" />
            <TextField fullWidth id="outlined-basic" label="PhoneNumber" {...register("PhoneNumber")} variant="outlined" />
                
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
          value={currency}
          onChange={handleChange}
          helperText="select your level of education"
        >
          {currencies.map((option) => (
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
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="fill in your resume"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
        />
        </div>
        </Box>  
            <input type='file' placeholder='upload your CV' /> 
      </div>
    




            <div id="butt" > 
            <Button 
               onClick={() => {
               alert('saved');
             }}
              >
                <b>Save</b>
            </Button>
            </div>
            <div id="butto">
            <Button 
               onClick={() => {
            //    alert('clicked');
              }}
                >
                <b>Update</b>
            </Button>
            </div>

            </form>
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    </div>
  );
}

