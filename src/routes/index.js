import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import JobSearching from "../Views/jobsCart";
import HomeLayout from "../components/homeLayout";
import UserLayout from "../Views/Dshboard/Userdashboard";
import DashLayout from "../components/reusableComponents/Layout";
import JobCards from "../components/jobCard";
import AdminChart from "../Views/Dshboard/AdminChart";
import Adminroutes from "./admin";
import Userroutes from "./user1";
import DataTable from "../Views/Dshboard/managerUsers";
import JobSeeker from "../Views/Dshboard/jobSeekerDash";
function App() {
  return (
    <Routes>
      <Route element={<Userroutes />}>
        
        <Route path="/jobs" element={<JobSearching />} />
        <Route path="/jobseeker" element={<JobSeeker />} />
      </Route>
      
      <Route element={<Adminroutes />}>
        <Route path="/managerUser" element={<DataTable />} />
        <Route path="/Admindash" element={<AdminChart />} />
        <Route path="/Userdash" element={<UserLayout />} />
        <Route exact path="/cards" element={<JobCards />} />
      </Route>
    </Routes>
  );
}

export default App;
