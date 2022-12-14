import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import JobSearching from "../Views/jobsCart";
import UserLayout from "../Views/Dshboard/Userdashboard";
import JobCards from "../components/jobCard";
import AdminChart from "../Views/Dshboard/AdminChart";
import Adminroutes from "./admin";
import ManageUser from "../Views/Dshboard/managerUsers";
import JobSeeker from "../Views/Dshboard/jobSeekerDash";
import DataTable from "../Views/Dshboard/managerUsers";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import SignIn from "../components/Signin";
import SignUp from "../components/SignUp";
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
import userProfile from "../components/UserProfile";
import UserAroutes from "./user";
import User1routes from "./user1";
import AboutUs from "../Views/aboutUs";
import ContactUS from "../Views/contactUs";
import Post from "../Views/Dshboard/Post"
import JobMakerForm from "../components/Employer/JobMakerForm"

import ManagPostedJobs from "../pages/ManagPostedJobs";
import ModalContent from "../pages/ModalContent";

import UserAppliations from "../Views/Dshboard/UserAppliations";

import User from '../Views/Dshboard/User';

import Profile from "../usersDashboard/profile";

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
        <Route path="/userProfile" element={<userProfile />} />
        <Route path="/PostJob" element={<PostJob />} />
        <Route path="/JobDetails" element={<JobDetails />} />
        <Route path="/JobDescription" element={<JobDescription />} />
        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/Candidates" element={<Candidates />} />
        <Route path="/Billing" element={<Billing />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/ReadMore" element={<ModalContent />} />


      </Route>

      <Route >
        <Route path="/postedJobs" element={<ManagPostedJobs />} />
      </Route>

      <Route element={<User1routes />}>
        <Route path="/Post" element={<Post />} />
      </Route>

      <Route>
        <Route path="/applications" element={<UserAppliations />} />
      </Route>

          
      <Route >
        <Route path="/EmployeeForm" element={<JobMakerForm/>} />
      </Route>

          <Route>
            <Route path="/users" element={<Profile />} />
          </Route>

      <Route>
        <Route path="/users" element={<Profile />} />
      </Route>


      <Route element={<Adminroutes />}>
        <Route path="/managerUser" element={<User />} />
        <Route path="/User" element={<User />} />
        <Route path="/Admindash" element={<AdminChart />} />
        <Route path="/Userdash" element={<UserLayout />} />
        <Route exact path="/cards" element={<JobCards />} />
      </Route>
    </Routes>
  );
}

export default App;
