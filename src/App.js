import './App.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Employers from './pages/Employers';
import Navbar from './components/Navbar';
import JobSeekers from './pages/JobSeekers';
import PostJob from './pages/PostJob';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Footer from './pages/Footer';

function App() {
  return (
    <BrowserRouter>
   <Routes>
   <Route exact path='/' element={<Home/>}/>

    <Route path='/Home' element={<Home/>}/>
    <Route path='/Employers' element={<Employers/>}/>
    <Route path='/JobSeekers' element={<JobSeekers/>}/>
    <Route path='/PostJob' element={<PostJob/>}/>
    <Route path='/SignIn' element={<SignIn/>}/>
    <Route path='/SignUp' element={<SignUp/>}/>
    <Route path='/Footer' element={<Footer/>}/>
   </Routes>
    </BrowserRouter>
    
  );
}

export default App;
