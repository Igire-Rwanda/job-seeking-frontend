import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import JobSearching from "../Views/jobsCart";
import UserLayout from "../Views/Dshboard/Userdashboard";
import JobCards from "../components/jobCard";
import AdminChart from "../Views/Dshboard/AdminChart";
import Adminroutes from "./admin";
import DataTable from "../Views/Dshboard/managerUsers";
import JobSeeker from "../Views/Dshboard/jobSeekerDash";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Footer from "../components/footer";
import FindJobs from "../pages/FindJobs";
import HireTalent from "../pages/HireTalent";
// import HomeLayout from './components/HomeLayout';
import PostJob from "../components/PostJob";
import JobDetails from "../components/JobDetails";
import JobDescription from "../components/JobDescription";
import Jobs from "../pages/Jobs";
import Candidates from "../pages/Candidates";
import Billing from "../pages/Billing";

import UserAroutes from "./user";
import User1routes from "./user1";
import AboutUs from "../Views/aboutUs";
import ContactUS from "../Views/contactUs";
import JobMakerForm from "../components/Employer/JobMakerForm"


function App() {
  return (
    <Routes>
      <Route element={<UserAroutes />}>
        <Route path="/contactUs" element={<ContactUS />} />
        <Route path="/jobs" element={<JobSearching />} />
        <Route path="/jobseeker" element={<JobSeeker />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/FindJobs" element={<FindJobs />} />
        <Route path="/HireTalent" element={<HireTalent />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="Navbar" element={<Navbar />} />
        <Route path="/Footer" element={<Footer />} />

        <Route path="/PostJob" element={<PostJob />} />
        <Route path="/JobDetails" element={<JobDetails />} />
        <Route path="/JobDescription" element={<JobDescription />} />
        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/Candidates" element={<Candidates />} />
        <Route path="/Billing" element={<Billing />} />
        <Route path="/aboutUs" element={<AboutUs />} />
 
      </Route>
      <Route element={<User1routes />}>
        <Route path="/jobseeker" element={<JobSeeker />} />
      </Route>

      <Route >
        <Route path="/EmployeeForm" element={<JobMakerForm/>} />
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
