

import "./App.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";


function App() {



  return (
    <>
      <Router>
        <Routes />
      </Router>
    </>

  );
}


export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);