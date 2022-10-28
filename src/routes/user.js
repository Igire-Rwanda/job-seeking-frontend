import React from "react";
import {  Outlet } from "react-router-dom";
import HomeLayout from "../components/homeLayout";
const Index = () => {
  return (
    <HomeLayout>
      <Outlet>
      </Outlet>
    </HomeLayout>
  );
};
export default Index;
