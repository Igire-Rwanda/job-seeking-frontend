import React from "react";
import {  Outlet } from "react-router-dom";
import HomeLayout from "../components/HomeLayout";

const Index = () => {
  return (
    <HomeLayout>
      <Outlet>
      </Outlet>
    </HomeLayout>
  );
};
export default Index;
