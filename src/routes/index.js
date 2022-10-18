


import React from 'react';
import { Routes,Route } from 'react-router-dom';
//  import Home from './pages/Home';
import JobSearching from '../Views/jobs';
import HomeLayout from '../components/homeLayout';

import UserLayout from '../Views/Dshboard/Userdashboard';
import DataTable from '../Views/Dshboard/managerUsers';
//  import FindJobs from './pages/FindJobs';
//  import HireTalent from './pages/HireTalent';
import DashLayout from '../components/reusableComponents/Layout'
import AdminLayout from "../Views/Dshboard/AdminDash"
import JobCards from '../components/jobCard';


function App() {
  return (
    <Routes>
    
        <Route exact path='/Admindash' element={<AdminLayout/>}/>
        <Route exact path='/cards' element={<DashLayout><JobCards/></DashLayout>}/>
        <Route path='/managerUser' element={<DataTable/>}/>
    {/* <Route path='/Home' element={<Home/>}/> */}
    {/* <Route path='/FindJobs' element={<FindJobs/>}/> */}
    
   
    <Route path='/Userdash' element={<UserLayout/>}/>
    
    <Route path='/jobs' element={<JobSearching/>}/>
   
  
   </Routes>
  
    
  );
}

export default App;
