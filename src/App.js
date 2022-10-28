<<<<<<< HEAD

import "./App.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import AdminRoutes from "./routes/admin";

// import { Provider } from "react-redux";
// import store from "./redux/stores";
=======
import './App.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
>>>>>>> f5872bdda47b36be37c8eb894189a76b25762646

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import FindJobs from './pages/FindJobs';
import HireTalent from './pages/HireTalent';

function App() {
  return (
<<<<<<< HEAD
    <>
      {/*  <Provider store={store}> */}
      <Router>
        <Routes></Routes>
        {/* <AdminRoutes></AdminRoutes> */}
      </Router>

      {/*  </Provider> */}
    </>
=======
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
    
>>>>>>> f5872bdda47b36be37c8eb894189a76b25762646
  );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
