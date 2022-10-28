
import "./App.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import AdminRoutes from "./routes/admin";

// import { Provider } from "react-redux";
// import store from "./redux/stores";

function App() {
  return (
    <>
      {/*  <Provider store={store}> */}
      <Router>
        <Routes></Routes>
        {/* <AdminRoutes></AdminRoutes> */}
      </Router>

      {/*  </Provider> */}
    </>
  );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
