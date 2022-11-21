import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  TextField,
  Stack,
  Button,
  InputLabel,
  FilledInput,
  InputAdornment,
  IconButton,
  FormControl,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from '@mui/material/Link';
const styles = { width: "100%", height: "100vh" };
const FormData = () => {
  const [Email, setEmail] = useState();
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
                  label="Email"
                  variant="filled"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <FormControl sx={{ m: 1 }} fullWidth variant="filled">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <FilledInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )
                        }
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                {/* <TextField
                  fullWidth
                  id="standard-basic"
                  label="Forgot Password"
                  variant="standard"
                  sx={{ textAlign: "end" }}
                /> */}
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
                  // onClick={() => {
                  //   // navigate("/dashboard");
                  //   login();
                  // }}
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

