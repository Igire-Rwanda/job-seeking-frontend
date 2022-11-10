import React from "react";
import { Outlet,Navigate } from "react-router-dom";
import DashLayout from "../components/reusableComponents/Layout";


const Index = (props) => {
     let auth = { token:true};

  return auth.token ?(
    
    <DashLayout >
      <Outlet>
      </Outlet>
    </DashLayout>
    
  ):
    (
    <Navigate to ="/login" />
    );
};
export default Index;
