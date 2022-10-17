import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JobCards from '../components/jobCard';
import AdminLayout from '../Views/Dshboard/AdminDash';
import DashLayout from "../components/reusableComponents/Layout"
import DataTable from '../Views/Dshboard/managerUsers';

const Index =()=>{
    return(
        // <DashLayout>
        <Routes>
        <Route exact path='/Admindash' element={<AdminLayout/>}/>
        <Route path='/managerUser' element={<DataTable/>}/>
        <Route exact path='/dashb' element={<DataTable/>}/>
        <Route exact path='/cards' element={<DashLayout><JobCards/></DashLayout>}/>
    </Routes>
    // </DashLayout>
    )
}
export default Index;