import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JobCards from '../components/jobCard';
import AdminLayout from "../Views/Dshboard/AdminDash"
import DashLayout from "../components/reusableComponents/Layout"


const Index =()=>{
    return(
       
        <Routes>
       <DashLayout>
       <Route exact path='/Admindash' element={<AdminLayout/>}/>
       <Route exact path='/cards' element={<JobCards/>}/>
       </DashLayout>
       
    
    </Routes>
    
    )
}
export default Index;