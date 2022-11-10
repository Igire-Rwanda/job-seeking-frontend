import "./App.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

//redux
import { Provider } from "react-redux";
import store from "./redux";

function App() {
  return (
    <>
       <Provider store={store}>
      <Router>
        <Routes></Routes>
        
      </Router>

       </Provider>
    </>
  );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
