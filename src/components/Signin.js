import React, { useEffect, useState } from "react";
import{loginAction}from "../redux/auth/action";
import {useDispatch,useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";



import LoadingButton from '@mui/lab/LoadingButton';
import {
  Container,
  Alert,
  Grid,
  Card,
  TextField,
  Stack,
  Button, 
  InputAdornment,
  FormControl,
  InputLabel,
  FilledInput,
  IconButton,
} from "@mui/material";
import Link from '@mui/material/Link';
const styles = { width: "100%", height: "100vh" };





const FormData = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

 
  const navigate = useNavigate();

  // const login =()=>{

  //   loginAction({email,password})(dispatch);

  // }

  
  
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setPassword(event.target.value);
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const dispatch = useDispatch();
 const {token,isFetching} = useSelector((state)=>state?.auth);

   useEffect(()=>{
    if(token){
      navigate("/EmployeeForm");
    }
  },[token])
 const login=()=>{
  loginAction({email,password})(dispatch)
 }



  return (
    <>
      <Container sx={styles}>
        <Grid
          sx={styles}
          container
          spacing={6}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sm={3} xs={0}></Grid>
          <Grid item sm={6} xs={12}>
            <Card sx={{ height: 420, padding: 3 }}>
              <Stack spacing={4} alignItems="center" justifyContent="center">
                <div className=" md:pl-0 pl-9 font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800">
                  <span className="text-teal-500 mr-1 ">joLinker</span>
                </div>

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
                  sx={{ mt: 3, mb: 2, bgcolor:"rgba(20, 161, 20, 0.658)" }}
                  onClick={() => {
                  console.log({email,password})
                  login();
                  }}
                >
                  Signin
                </LoadingButton>
              </Stack>
            </Card>
          </Grid>
          <Grid item sm={3} xs={0}></Grid>
        </Grid>
      </Container>
    </>
  );
};
export default FormData

