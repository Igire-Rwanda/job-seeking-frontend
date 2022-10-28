import './App.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import FindJobs from './pages/FindJobs';
import HireTalent from './pages/HireTalent';
import HomeLayout from './components/HomeLayout';
import PostJob from './components/PostJob';
import JobDetails from './components/JobDetails';
import JobDescription from './components/JobDescription';
import Jobs from './pages/Jobs';
import Candidates from './pages/Candidates';
import Billing from './pages/Billing';
function App() {
  return (

    <BrowserRouter>
    <HomeLayout>

   <Routes>
   <Route exact path='/' element={<Home/>}/>

    <Route path='/Home' element={<Home/>}/>
    <Route path='/FindJobs' element={<FindJobs/>}/>
    <Route path='/HireTalent' element={<HireTalent/>}/>
    <Route path='/SignIn' element={<SignIn/>}/>
    <Route path='/SignUp' element={<SignUp/>}/>
    <Route path='Navbar' element={<Navbar/>}/>
    <Route path='/Footer' element={<Footer/>}/>

    <Route path='/PostJob' element={<PostJob/>}/>
    <Route path='/PostJob' element={<PostJob/>}/>
    <Route path='/JobDetails' element={<JobDetails/>}/>
    <Route path='/JobDescription' element={<JobDescription/>}/>
    <Route path='/Jobs' element={<Jobs/>}/>
    <Route path='/Candidates' element={<Candidates/>}/>
    <Route path='/Billing' element={<Billing/>}/>



    
    





   </Routes>
   </HomeLayout>

    </BrowserRouter>
  );
}

export default App;
