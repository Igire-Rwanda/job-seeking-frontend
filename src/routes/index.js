import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import JobSearching from "../Views/jobsCart";
import HomeLayout from "../components/homeLayout";
import UserLayout from "../Views/Dshboard/Userdashboard";
import DashLayout from "../components/reusableComponents/Layout";
import JobCards from "../components/jobCard";
import AdminChart from "../Views/Dshboard/AdminChart";
import Adminroutes from "./admin";
import DataTable from "../Views/Dshboard/managerUsers";
import JobSeeker from "../Views/Dshboard/jobSeekerDash";
import UserAroutes from "./user";
import User1routes from "./user1";
import AboutUs from "../Views/aboutUs";
import ContactUS from "../Views/contactUs";
import SignIn from "../components/Signin";
import SignUp from "../components/SignUp";
function App() {
  return (
    <Routes>
      <Route element={<UserAroutes />}>
      <Route path="/contactUs" element={<ContactUS />} />
        <Route path="/jobs" element={<JobSearching />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/login" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<SignUp />} />
      </Route>
      <Route element={<User1routes />}>
      
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
