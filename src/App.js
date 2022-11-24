

import "./App.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
// import profile from "./usersDashboard/profile";
// import UserProfile from "./components/UserProfile";

//redux
//import { Provider } from "react-redux";
//import store from "./redux";




function App() {



  return (
    <>
      {/* <Provider > */}
      <Router>

        <Routes></Routes>

        <Routes>
          {/* <profile /> */}
          
        </Routes>

      </Router>
      {/* <UserProfile /> */}

      {/* </Provider> */}
    </>
    //   <BrowserRouter>
    //  <Routes>
    //  <Route exact path='/' element={<Home/>}/>

    //   <Route path='/Home' element={<Home/>}/>
    //   <Route path='/FindJobs' element={<FindJobs/>}/>
    //   <Route path='' element={<HireTalent/>}/>
    //   <Route path='/SignIn' element={<SignIn/>}/>
    //   <Route path='/SignUp' element={<SignUp/>}/>
    //   <Route path='/Footer' element={<Footer/>}/>
    //  </Routes>
    //   </BrowserRouter>

  );
}


export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);