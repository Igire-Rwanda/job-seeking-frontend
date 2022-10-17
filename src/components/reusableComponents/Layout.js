import React from "react";
import { Box, Grid } from "@mui/material";
import Header from "./Header";
import Sider from "./Sider";




const Comp = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item spacing={2} xs={12} sm={3}>
          <Sider  />
        </Grid>
        <Grid item spacing={2} xs={12} sm={9}>
          <Header />
          <Box sx={{ width: "100%",minHeight:'90vh',background:"whiteSmoke",padding:2}}>
            {props.children}
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Comp;
