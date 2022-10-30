import React from "react";
import Widgets from "../../components/Assets/widgets/Widgets";
import "./adminChart.css";
import ChartBar from "./chartBar.js";
import AreaChart  from "./areaChart";
const AdminChart = () => (
  <>
      <div className="widgets">
        <Widgets type="User" />
        <Widgets type="TotalOrder" />
        <Widgets type="Price" className="leftW" />
        <Widgets type="Revenue" />
      </div>
     
      <div style={{ display: "flex" ,width:'200px'}}>
        <div>
        <h1 className="title">Visitors</h1>
        <br/>
        <AreaChart/>
        </div>
    
        <div>
          <h1 className="title">Income</h1>
          <br/>
        <ChartBar />
        </div>
       
      </div>
    
  </>
);

export default AdminChart;
