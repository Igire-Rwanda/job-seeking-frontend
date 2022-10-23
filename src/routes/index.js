import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import JobSearching from "../Views/jobs";
import HomeLayout from "../components/homeLayout";
import UserLayout from "../Views/Dshboard/Userdashboard";
import DashLayout from "../components/reusableComponents/Layout";
import JobCards from "../components/jobCard";
import AdminChart from "../Views/Dshboard/AdminChart";
import Adminroutes from "./admin";
import Userroutes from "./user";
import DataTable from "../Views/Dshboard/managerUsers";
function App() {
  return (
    
    <Routes>
         <Route element={<Userroutes />}>
      <Route exact path="/cards" element={<JobCards />} />
        <Route path="/jobs" element={<JobSearching />} />
      
        </Route>
        
        <Route element={<Adminroutes />}>
          <Route path="/managerUser" element={<DataTable />} />
          <Route path="/Admindash" element={<AdminChart />} />
          <Route path="/Userdash" element={<UserLayout />} />
         
        </Route>
        
    </Routes>
    
  );
}

export default App;
