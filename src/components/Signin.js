import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  TextField,
  Stack,
  Button, 
} from "@mui/material";
import Link from '@mui/material/Link';
const styles = { width: "100%", height: "100vh" };
const FormData = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  // const login =()=>{
  //   loginAction({email,password})(dispatch);
  // }
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
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
                  label="User Name"
                  variant="filled"
                  onChange={(e) => setUserName(e.target.value)}
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
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => {
                  console.log({userName,password})
                  
                  }}
                >
                  Signin
                </Button>
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

