import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import JobCards from "../components/jobCard";
import DashLayout from "../components/reusableComponents/Layout";
import DataTable from "../Views/Dshboard/managerUsers";
const Index = () => {
  return (
    <DashLayout>
      <Outlet>
      </Outlet>
    </DashLayout>
  );
};
export default Index;
