

import './App.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import Home from './pages/Home';
import JobSearching from './Views/jobs';
import HomeLayout from './components/homeLayout';
import JobCards from './components/jobCard';
import AdminLayout from './Views/Dshboard/AdminDash';
import UserLayout from './Views/Dshboard/Userdashboard';
import DataTable from './Views/Dshboard/managerUsers';
 import FindJobs from './pages/FindJobs';
 import HireTalent from './pages/HireTalent';
import DashLayout from './components/reusableComponents/Layout'




function App() {
  return (
    <BrowserRouter>
    <HomeLayout>
   <Routes>
   
         
            

    <Route path='/Home' element={<Home/>}/>
    <Route path='/FindJobs' element={<FindJobs/>}/>
    <Route path='/dashb' element={<DataTable/>}/>
    <Route path='/Admindash' element={<AdminLayout/>}/>
    <Route path='/Userdash' element={<UserLayout/>}/>
    <Route path='/cards' element={<DashLayout><JobCards/></DashLayout>}/>
    <Route path='/jobs' element={<JobSearching/>}/>
    <Route path='/managerUser' element={<DataTable/>}/>
   </Routes>
   </HomeLayout>
  
    </BrowserRouter>
    
  );
}

export default App;
