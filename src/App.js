

import './App.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
import JobSearching from './Views/jobs';

// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import HomeLayout from './components/homeLayout';
import JobCards from './components/jobCard';
// import FindJobs from './pages/FindJobs';
// import HireTalent from './pages/HireTalent';

function App() {
  return (
    <BrowserRouter>
    <HomeLayout>
   <Routes>
    
   {/* <Route exact path='/' element={<Home/>}/> */}

    {/* <Route path='/Home' element={<Home/>}/> */}
    {/* <Route path='/FindJobs' element={<FindJobs/>}/> */}
    {/* <Route path='/HireTalent' element={<HireTalent/>}/> */}
    {/* <Route path='/SignIn' element={<SignIn/>}/> */}
    {/* <Route path='/SignUp' element={<SignUp/>}/> */}
    <Route path='/cards' element={<JobCards/>}/>
    <Route path='/jobs' element={<JobSearching/>}/>
    
   </Routes>
   </HomeLayout>
    </BrowserRouter>
    
  );
}

export default App;
