
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import './index.css';
import Routes from "./routes";
import AdminRoutes from './routes/admin';

// import { Provider } from "react-redux";
// import store from "./redux/stores";
 function App() {
    return(
      <>
        {/*  <Provider store={store}> */}

      <Router>
        <AdminRoutes></AdminRoutes>
       </Router>
       
       {/* <Router>
    <Routes></Routes>
   
</Router>   */}

        {/*  </Provider> */}
        </>
        );
    
    
};
export default App;