

import React, {useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Fiona from "../assets/Image/Capture.PNG";
import CreateUserAction from '../redux/user/actions';
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';

// import LockOutlinedIcon from '@mui/material/LockOutlined'

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const dispatch = useDispatch();
  const {isFetching} = useSelector ((state)=> state?.user);
 // const navigate = useNavigate();
   
  const [firstname,setFirstname]=useState()
  const [lastname,setLastname]=useState()
  const [phone,setPhone]=useState()
  const [email,setEmail]=useState()
  const [username,setUname]=useState()
  const [password,setPassword]=useState()
  const [role,setRole]=useState()
   //const signup = () =>{
    //CreateUserAction({firstname,phone,email,username,password})(dispatch);
   //}

  //  useEffect(()=>{
  //   if(data){
  //        navigate("/Signin");
  //   }
  //  },[data])
  


  return (

    <div className='grid grid-cols-1 sm:grid-cols-2 z--1'>
      <div className='hidden sm:block'>
        <img  className='w-full h-full object-cover'src={Fiona} alt="Capture.PNG"/>
      </div>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderbox: 20,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          {/* <Button 
              // type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,bgcolor:"magenta"}}
            >
              Continue with Instagram
            </Button> */}
          

            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor:"Blue Ivy"}}
              
            >
              Continue with Apple
            </Button> */}
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
             
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="firstname"
                  label="firstname"
                  name="firstname"
                  autoComplete="firstname"
                  onChange={(e)=>setFirstname(e.target.value)}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="lastname"
                  label="lastname"
                  name="lastname"
                  autoComplete="lastname"
                  onChange={(e)=>setLastname(e.target.value)}
                />
                </Grid>
           
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="phone"
                  name="phone"
                  autoComplete="phone"
                  onChange={(e)=>setPhone(e.target.value)}
                />
                </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="username"
                  label="username"
                  type="username"
                  id="username"
                  autoComplete="username"
                  onChange={(e)=>setUname(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  label="password"
                  name="password"
                  autoComplete="password"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="role"
                  label="role"
                  name="role"
                  autoComplete="role"
                  onChange={(e)=>setRole(e.target.value)}
                />
              </Grid>
                {/* <div className='flex flex-col text-gray-400 py-2'>
                <p className='flex items-center'> 
                <input className='mr-2' type="radio"/> Client
                </p>
              </div>

             <div className='flex flex-col text-gray-400 py-2'>
            <p className='flex items-center'> 
            <input className='' type="radio"/>Freelancer
            </p>
            </div> */}
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Agree JobLinker terms and services  user agreement and privacy policy"
                />
              </Grid>
            </Grid>
            
            <LoadingButton
            
           // loading={isFetching}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor:"rgba(20, 161, 20, 0.658)" }}
              onClick={()=>{
                console.log({firstname,lastname,phone,email,username,password})
                CreateUserAction({firstname,lastname,phone,email,username,password})(dispatch) 
               //signup();
              }}
            >
             Create Account
             
            </LoadingButton>
           
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="./SignUp.js" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
    </div>
  );
}

const theme = createTheme();

