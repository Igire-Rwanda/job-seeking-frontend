import React from "react";
import DashLayout from "../../components/reusableComponents/Layout";
import Widgets from "../../components/Assets/widgets/Widgets";
import "./adminChart.css";
import ChartBar from "./chartBar.js";

const AdminChart = () => (
  <>
      <div className="widgets">
        <Widgets type="User" />
        <Widgets type="TotalOrder" />
        <Widgets type="Price" className="leftW" />
        <Widgets type="TotalEarning" />
      </div>
      
      <div style={{ display: "flex" }}>
        
        <div >
          <iframe title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.547968872041!2d30.072494213365733!3d-1.9329837985907257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6af7d100737%3A0x3fb318e05a434b9f!2sKacyiru%20Hospital!5e0!3m2!1sen!2srw!4v1666273719067!5m2!1sen!2srw"
            width="600"
            height="450"
            style={{border:0,height:'360px',width:'430px',boxShadow:'2px 2px 2px 2px gray'}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <ChartBar />
      </div>
    
  </>
);

export default AdminChart;
