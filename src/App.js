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

function App() {
  return (
    <BrowserRouter>
   <Routes>
   <Route exact path='/' element={<Home/>}/>

    <Route path='/Home' element={<Home/>}/>
    <Route path='/FindJobs' element={<FindJobs/>}/>
    <Route path='/HireTalent' element={<HireTalent/>}/>
    <Route path='/SignIn' element={<SignIn/>}/>
    <Route path='/SignUp' element={<SignUp/>}/>
    <Route path='/Footer' element={<Footer/>}/>
   </Routes>
    </BrowserRouter>
    
  );
}

export default App;
