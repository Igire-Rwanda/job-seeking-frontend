

import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import { NavLink } from 'react-router-dom';
import {
  Alert,
  Grid,
  Card,
  Stack,
  InputAdornment,
  FormControl,
  InputLabel,
  FilledInput,
  IconButton,
} from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Fiona from "../assets/Image/Capture.PNG";
import CreateUserAction from '../redux/user/actions';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

// import LockOutlinedIcon from '@mui/material/LockOutlined'

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstname: data.get('firstname'),
      lastname: data.get('lastname'),
      phone: data.get('phone'),
      email: data.get('email'),
      username: data.get('username'),
      password: data.get('password'),
      role: data.get('role'),
    });
  };
  const styles = { width: "100%", height: "100vh" };
  const dispatch = useDispatch();

  const { data, isFetching } = useSelector((state) => state?.user);
  
  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data])
  const signup = () => {
    CreateUserAction({ firstname, lastname, phone, email, username, password, role })(dispatch);
  }


  const [firstname, setFirstname] = useState()
  const [lastname, setLastname] = useState()
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState()
  const [username, setUname] = useState()
  const [password, setPassword] = useState()
  const [role, setRole] = useState()


  const navigate = useNavigate();






  return (

    <Container sx={styles}>

<Box
                component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid
        sx={styles}
        container
        spacing={6}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sm={3} xs={0}></Grid>
        <Grid item sm={6} xs={12}>
        
          <Card sx={{ height: 800, padding: 5, marginTop: 12 }}>
            <Stack spacing={4} alignItems="center" justifyContent="center">
          
              <div className=" md:pl-0 pl-9 font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800">
                <span className="text-teal-500 mr-1 ">Create Account</span>
              </div>
             
                <TextField
                  fullWidth
                  id="filled-basic"
                  label="First Name"
                  variant="filled"
                  
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <TextField
                  fullWidth
                  id="filled-basic"
                  label="Last Name"
                  variant="filled"
                  onChange={(e) => setLastname(e.target.value)}
                />
                <TextField
                  fullWidth
                  id="filled-basic"
                  label="Phone Number"
                  variant="filled"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <TextField
                  fullWidth
                  id="filled-basic"
                  label="User Name"
                  variant="filled"
                  onChange={(e) => setUname(e.target.value)}
                />
                <TextField
                  fullWidth
                  id="filled-basic"
                  label="Email"
                  variant="filled"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <TextField fullWidth
                  id="filled-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="filled"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => {
                    console.info("I'm a button.");
                  }}
                >
                  Forgot password?
                </Link>
                <LoadingButton
                  loading={isFetching}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: "rgba(20, 161, 20, 0.658)" }}
                  onClick={() => {

                    signup();
                    console.log({ firstname,lastname,phone,email,username,password})
                    
                    CreateUserAction({firstname,lastname,phone,email,username,password})(dispatch)
                    navigate("/SignIn");

                  }}
                >
                  signup
                </LoadingButton>
                <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="./Signin.js" variant="body2">
                  Already have an account? Sign in 
                </Link>
              </Grid>
            </Grid>
            </Stack>

          </Card>
          
        </Grid>
        <Grid item sm={3} xs={0}></Grid>
      </Grid>
      </Box>
      </Container >
           

  );
}

const theme = createTheme();

