import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import JobCards from "../components/jobCard";
import DashLayout from "../components/reusableComponents/Layout";


const Index = (props) => {
  return (
    <DashLayout >
      <Outlet>
      </Outlet>
    </DashLayout>
  );
};
export default Index;
