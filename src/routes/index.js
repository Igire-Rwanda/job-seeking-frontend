


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




function App() {
  return (
  
    <HomeLayout>
   <Routes>
   
    {/* <Route path='/Home' element={<Home/>}/> */}
    {/* <Route path='/FindJobs' element={<FindJobs/>}/> */}
    <Route exact path='/dashb' element={<DataTable/>}/>
   
    <Route path='/Userdash' element={<UserLayout/>}/>
    
    <Route path='/jobs' element={<JobSearching/>}/>
   
   </Routes>
   </HomeLayout>
  
    
  );
}

export default App;
