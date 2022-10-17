import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JobCards from '../components/jobCard';
import AdminLayout from '../Views/Dshboard/AdminDash';
import DashLayout from "../components/reusableComponents/Layout"


const Index =()=>{
    return(
        // <DashLayout>
        <Routes>
        <Route exact path='/Admindash' element={<AdminLayout/>}/>
        <Route exact path='/cards' element={<DashLayout><JobCards/></DashLayout>}/>
    </Routes>
    // </DashLayout>
    )
}
export default Index;